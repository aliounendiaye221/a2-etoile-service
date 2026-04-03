import type { Metadata } from "next";
import { CheckCircle2, LockKeyhole } from "lucide-react";
import { QuoteRequestForm } from "@/components/forms/quote-request-form";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { company } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Demander un Devis | A2 Étoile Service Dakar",
  description: "Obtenez un devis gratuit et express pour vos contrats d'entretien d'entreprise, vitrerie, et nettoyage de sols au Sénégal. Réponse en 24h."
};

const reassurance = [
  "Formulaire clair et rapide a completer",
  "Traitement professionnel et retour rapide",
  "Informations utilisees uniquement pour votre demande"
] as const;

export default function QuotePage() {
  return (
    <SectionShell className="pb-10 pt-12 sm:pt-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Demande de devis"
              title="Recevez une proposition claire et personnalisee"
              description="Partagez votre besoin en quelques minutes. Notre equipe vous contacte rapidement avec une reponse adaptee."
            />

            <article className="mt-8 rounded-3xl border border-clean-200 bg-white p-6 text-sm text-clean-700 shadow-sm transition hover:shadow-md">
              <h2 className="font-display text-3xl font-semibold text-ocean-900">Pourquoi passer par ce formulaire ?</h2>
              <ul className="mt-5 space-y-3">
                {reassurance.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-mint-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-ocean-600/80">
                <LockKeyhole className="h-4 w-4" />
                Vos données sont traitées avec confidentialité
              </p>
            </article>

            <article className="mt-6 rounded-3xl border border-clean-200 bg-white p-6 text-sm text-clean-700 shadow-sm transition hover:shadow-md">
              <h2 className="font-display text-3xl font-semibold text-ocean-900">Contact direct</h2>
              <p className="mt-3 leading-relaxed">
                Si vous préférez un échange immédiat, contactez-nous aussi par téléphone, e-mail ou WhatsApp.
              </p>
              <p className="mt-4 font-semibold text-ocean-800">{company.phone}</p>
              <p className="font-semibold text-ocean-800">{company.email}</p>
            </article>
          </div>

          <QuoteRequestForm />
        </div>
      </Container>
    </SectionShell>
  );
}
