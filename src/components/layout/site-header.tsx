"use client";

import { Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { company, navLinks } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { PremiumLink } from "@/components/ui/premium-button";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled 
          ? "border-b border-white/20 bg-white/70 backdrop-blur-2xl py-3 shadow-glass" 
          : "bg-transparent py-5"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group" aria-label="Retour à l'accueil">
            <div className="relative h-16 w-48 sm:h-20 sm:w-56 overflow-hidden">
              <Image
                src="/logo.png"
                alt={company.name}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 192px, 224px"
              />
            </div>
          </Link>

          <nav className="hidden items-center p-1.5 rounded-full border border-ocean-100/50 bg-white/40 backdrop-blur-md lg:flex" aria-label="Navigation principale">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-5 py-2 text-sm font-bold tracking-tight transition-all duration-300",
                    active 
                      ? "text-ocean-950" 
                      : "text-clean-700 hover:text-ocean-900 hover:bg-white/50"
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-4 -bottom-1 h-0.5 bg-gradient-to-r from-gold-400 to-ocean-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${company.phone}`} className="text-xs font-bold text-ocean-900/60 hover:text-ocean-900 transition-colors uppercase tracking-widest hidden xl:block">
              {company.phone}
            </a>
            <PremiumLink href="/devis" variant="primary" className="h-12 px-8 rounded-xl shadow-glass hover:shadow-glass-hover transition-all">
              Devis Express
            </PremiumLink>
          </div>

          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            className="grid h-12 w-12 place-items-center rounded-2xl border border-ocean-100 bg-white shadow-sm text-ocean-950 lg:hidden hover:bg-ocean-50 transition-all active:scale-95"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-x-0 top-[76px] z-[99] p-3 transition-all duration-500 ease-out sm:top-[88px] sm:p-4 lg:hidden",
          open ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        )}>
          <nav className="max-h-[calc(100vh-110px)] overflow-y-auto overscroll-contain space-y-5 rounded-[1.75rem] border border-white/20 bg-white/80 p-5 shadow-2xl backdrop-blur-2xl sm:max-h-[calc(100vh-130px)] sm:space-y-6 sm:rounded-[2.5rem] sm:p-8" aria-label="Navigation mobile">
            <ul className="space-y-4">
              {navLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between rounded-2xl px-5 py-3.5 text-base font-bold transition-all sm:px-6 sm:py-4 sm:text-lg",
                        active 
                          ? "bg-ocean-900 text-white shadow-xl" 
                          : "text-ocean-950 hover:bg-ocean-50"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                      <Sparkles className={cn("w-5 h-5", active ? "text-mint-400" : "text-ocean-100")} />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="pt-4 border-t border-ocean-100">
              <PremiumLink href="/devis" variant="primary" className="h-14 w-full rounded-2xl text-base sm:h-16 sm:text-xl" onClick={() => setOpen(false)}>
                Demander mon devis
              </PremiumLink>
              <p className="mt-6 text-center text-sm text-ocean-600 font-bold uppercase tracking-widest">{company.phone}</p>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
