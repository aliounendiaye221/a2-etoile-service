import type { ReactNode } from "react";
import { FloatingWhatsapp } from "@/components/layout/floating-whatsapp";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-night-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-mesh" />
      <div className="pointer-events-none absolute left-1/2 top-[-240px] h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-b from-champagne-200/20 to-transparent blur-3xl" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <a
          href="#contenu-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-champagne-300 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-night-950"
        >
          Passer au contenu principal
        </a>
        <SiteHeader />
        <main id="contenu-principal" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <FloatingWhatsapp />
      </div>
    </div>
  );
}
