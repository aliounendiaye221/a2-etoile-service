import { MessageCircle } from "lucide-react";
import { company } from "@/lib/site-content";

export function FloatingWhatsapp() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter A2 ETOILE SERVICE sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-panel transition hover:scale-105 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-night-950"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
