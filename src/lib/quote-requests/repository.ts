import { createSupabaseAdminClient } from "@/lib/supabase/server-client";
import { quoteRequestSchema, type QuoteRequestInput } from "@/lib/validators/quote-request";

type CreateQuoteRequestResult = {
  id: string;
  createdAt: string;
};

export async function createQuoteRequest(input: QuoteRequestInput): Promise<CreateQuoteRequestResult> {
  const data = quoteRequestSchema.parse(input);

  const supabase = createSupabaseAdminClient();

  const { data: inserted, error } = await supabase
    .from("quote_requests")
    .insert({
      full_name: data.fullName,
      phone: data.phone,
      email: data.email,
      service_type: data.serviceType,
      location: data.location,
      need_description: data.needDescription,
      message: data.message || null,
      status: "new"
    })
    .select("id, created_at")
    .single();

  if (error || !inserted) {
    throw new Error("Unable to persist quote request.");
  }

  return {
    id: inserted.id as string,
    createdAt: inserted.created_at as string
  };
}
