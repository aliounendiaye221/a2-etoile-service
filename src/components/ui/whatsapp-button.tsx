"use client";

import { MessageCircle } from "lucide-react";
import { company } from "@/lib/site-content";
import { usePathname } from "next/navigation";

export function WhatsAppButton() {
  const pathname = usePathname();

  if (pathname.startsWith('/admin') || pathname.startsWith('/login')) {
    return null;
  }

  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/40 active:scale-95 group"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-clean-900 px-3 py-1.5 text-xs font-bold text-white opacity-0 transition-opacity group-hover:opacity-100 sm:block">
        Besoin d&apos;aide ?
      </span>
    </a>
  );
}
