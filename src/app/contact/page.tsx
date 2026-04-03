import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/ui/container";
import { PremiumLink } from "@/components/ui/premium-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { company } from "@/lib/site-content";
import { normalizePhone } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contactez-nous | Devis B2B/B2C Rapide à Dakar",
  description: "Contactez A2 ETOILE SERVICE pour vos besoins en hygiène professionnelle (B2B), dératisation, ou nettoyage résidentiel de luxe à Dakar, Diamniadio et Rufisque."
};

const contactCards = [
  {
    icon: Phone,
    title: "Telephone",
    value: company.phone,
    href: `tel:${normalizePhone(company.phone)}`,
    label: "Appeler maintenant"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Echange direct et rapide",
    href: company.whatsapp,
    label: "Ouvrir WhatsApp"
  },
  {
    icon: Mail,
    title: "E-mail",
    value: company.email,
    href: `mailto:${company.email}`,
    label: "Envoyer un e-mail"
  }
] as const;

export default function ContactPage() {
  return (
    <>
      <SectionShell className="pb-10 pt-12 sm:pt-16">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Un contact simple, direct et professionnel"
            description="Nous sommes disponibles pour etudier votre besoin et vous orienter vers la prestation la plus adaptee."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {contactCards.map((card) => (
              <article key={card.title} className="rounded-3xl border border-clean-200 bg-white p-6 shadow-sm transition hover:shadow-glass-hover hover:-translate-y-1 hover:border-gold-200">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-50 text-gold-600">
                  <card.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 font-display text-2xl font-semibold text-ocean-900">{card.title}</h2>
                <p className="mt-2 text-sm text-clean-600">{card.value}</p>
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                  className="mt-5 inline-flex rounded-full border border-gold-200 px-4 py-2 text-sm font-medium text-gold-700 transition hover:bg-gold-50 hover:text-gold-900 focus-visible:ring-2 focus-visible:ring-gold-500"
                >
                  {card.label}
                </a>
              </article>
            ))}
          </div>
        </Container>
      </SectionShell>

      <SectionShell accent="light">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-3xl border border-clean-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-display text-3xl font-semibold text-ocean-900">Informations utiles</h2>
              <ul className="mt-6 space-y-4 text-sm text-clean-700">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-ocean-600" />
                  <span>{company.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-ocean-600" />
                  <span>{company.phone}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-ocean-600" />
                  <span>{company.email}</span>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 text-ocean-600" />
                  <span>{company.hours}</span>
                </li>
              </ul>
            </article>

            <article className="rounded-3xl border border-transparent bg-ocean-900 p-6 text-white shadow-lg sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-gold-400/20 blur-2xl"></div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400 relative z-10">Devis rapide</p>
              <h2 className="mt-4 font-display text-4xl relative z-10">Parlez-nous de votre besoin</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-100 relative z-10">
                Décrivez votre contexte en quelques lignes. Nous revenons vers vous avec une proposition claire et personnalisée.
              </p>
              <div className="mt-6 relative z-10">
                <PremiumLink href="/devis" variant="secondary" className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm">
                  Accéder au formulaire
                </PremiumLink>
              </div>
            </article>
          </div>
        </Container>
      </SectionShell>

      <CtaBanner
        title="Une demande simple pour une reponse rapide"
        description="Un seul formulaire suffit pour initier une proposition adaptee a votre besoin."
      />
    </>
  );
}
