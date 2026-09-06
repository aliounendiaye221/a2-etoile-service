"use server";

import { createSupabaseAdminClient } from "@/lib/supabase/server-client";
import { createClient as createSessionClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export type QuoteRequest = {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  service_type: string;
  location: string;
  need_description: string;
  message: string | null;
  status: string;
  created_at: string;
};

async function requireAuthenticatedAdminSession() {
  const sessionClient = await createSessionClient();
  const {
    data: { user },
    error,
  } = await sessionClient.auth.getUser();

  if (error || !user) {
    throw new Error("Unauthorized");
  }

  return user;
}

export async function getQuoteRequests() {
  try {
    await requireAuthenticatedAdminSession();
  } catch {
    return [];
  }

  const supabase = createSupabaseAdminClient();
  const { data, error } = await supabase
    .from("quote_requests")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching quotes", error);
    return [];
  }
  return data as QuoteRequest[];
}

export async function updateQuoteStatus(id: string, newStatus: string) {
  await requireAuthenticatedAdminSession();

  const supabase = createSupabaseAdminClient();
  const { error } = await supabase
    .from("quote_requests")
    .update({ status: newStatus })
    .eq("id", id);

  if (error) {
    throw new Error("Unable to update status");
  }
  
  revalidatePath("/admin/devis");
  revalidatePath("/admin");
}

export async function getDashboardMetrics() {
  try {
    await requireAuthenticatedAdminSession();
  } catch {
    return { newQuotes: 0, convertedQuotes: 0, totalQuotes: 0, series: [] };
  }

  const supabase = createSupabaseAdminClient();
  const { data, error } = await supabase
    .from("quote_requests")
    .select("status, created_at");

  if (error || !data) {
    return { newQuotes: 0, convertedQuotes: 0, totalQuotes: 0, series: [] };
  }

  const newQuotes = data.filter(q => q.status === "new" || !q.status).length;
  const convertedQuotes = data.filter(q => q.status === "facturé" || q.status === "facture").length;
  const totalQuotes = data.length;

  // Let's create a simple series for the last 30 days
  const seriesMap: Record<string, number> = {};
  const today = new Date();
  
  // pre-fill last 30 days to 0
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().split("T")[0]; // YYYY-MM-DD
    seriesMap[dateStr] = 0;
  }

  data.forEach((q) => {
    if (q.created_at) {
       const dString = q.created_at.split("T")[0];
       if (seriesMap[dString] !== undefined) {
         seriesMap[dString] += 1;
       }
    }
  });

  const series = Object.keys(seriesMap).map(k => ({ date: k, "Demandes": seriesMap[k] }));

  return { newQuotes, convertedQuotes, totalQuotes, series };
}

export async function getQuoteRequestById(id: string) {
  const supabase = createSupabaseAdminClient();
  const { data, error } = await supabase
    .from("quote_requests")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }
  return data as QuoteRequest;
}

export async function sendInvoiceToClient(id: string) {
  await requireAuthenticatedAdminSession();

  const supabase = createSupabaseAdminClient();
  
  // Mettre à jour le statut du devis en "facturé"
  const { error } = await supabase
    .from("quote_requests")
    .update({ status: "facturé" })
    .eq("id", id);

  if (error) {
    throw new Error("Erreur lors de la validation de la facture.");
  }

  // Ici on simulerait l'envoi d'e-mail via Resend et WhatsApp via Twilio
  // await resend.emails.send({ ... })

  revalidatePath("/admin/devis");
  revalidatePath("/admin");
  
  return { success: true };
}
