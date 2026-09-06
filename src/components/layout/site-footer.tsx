"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { company, navLinks } from "@/lib/site-content";
import { normalizePhone } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Sparkles, MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname.startsWith('/admin') || pathname.startsWith('/login')) {
    return null;
  }

  return (
    <footer className="mt-24 border-t border-ocean-100 bg-white text-ocean-950">
      <Container className="py-16">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex flex-col group mb-6">
              <div className="relative h-16 w-48 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt={company.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-clean-700 font-medium">
              Le leadeur du nettoyage de précision et du pressing premium au Sénégal. Nous transformons vos espaces et prenons soin de vos textiles avec une rigueur absolue.
            </p>
            <div className="mt-8 flex items-center gap-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className="h-8 w-8 rounded-lg bg-ocean-50 border border-ocean-100 flex items-center justify-center text-ocean-400">
                    <Sparkles className="w-4 h-4" />
                 </div>
               ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-ocean-900 mb-6">Navigation</h2>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-clean-700 transition hover:text-ocean-600 font-bold tracking-tight">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-ocean-900 mb-6">Contact & Siege</h2>
            <ul className="space-y-4 text-sm text-clean-700 font-medium">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-gold-500" />
                <a href={`tel:${normalizePhone(company.phone)}`} className="transition hover:text-ocean-600 font-bold">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-gold-500" />
                <a href={`mailto:${company.email}`} className="transition hover:text-ocean-600">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-500" />
                <span className="break-words">Excellence Mobile : <br className="hidden lg:block"/> {company.address}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 border-t border-ocean-50 pt-8 text-[11px] font-bold uppercase tracking-[0.12em] text-ocean-400 sm:tracking-[0.25em]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-center sm:text-left relative flex items-center justify-center sm:justify-start">
              © {new Date().getFullYear()} A2 ETOILE SERVICE. Designed for Excellence.
              <Link href="/login" className="ml-2 mt-0.5 text-ocean-300 opacity-20 hover:opacity-100 transition-opacity" title="Espace Administrateur">✦</Link>
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:justify-start sm:gap-6">
              <Link href="/mentions-legales" className="hover:text-ocean-900 transition-colors">Mentions Légales</Link>
              <Link href="/politique-de-confidentialite" className="hover:text-ocean-900 transition-colors">Confidentialité</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
