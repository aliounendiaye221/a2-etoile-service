import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { ValueCard } from "@/components/ui/value-card";
import { trustPillars } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "À propos | A2 ÉTOILE SERVICE",
  description:
    "Découvrez l'engagement d'excellence d'A2 ÉTOILE SERVICE à Dakar et Rufisque : rigueur, confiance et premium."
};

const values = [
  {
    title: "Rigueur",
    description: "Nous appliquons des methodes claires pour assurer la regularite des resultats."
  },
  {
    title: "Confiance",
    description: "Nous favorisons une relation transparente, stable et professionnelle."
  },
  {
    title: "Excellence de service",
    description: "Nous soignons les details pour offrir une experience client de haut niveau."
  }
] as const;

export default function AboutPage() {
  return (
    <>
      <SectionShell className="pb-10 pt-12 sm:pt-16 bg-ocean-50">
        <Container>
          <SectionHeading
            eyebrow="À propos"
            title="Une entreprise structurée autour de la qualité, de la méthode et du service"
            description="A2 ETOILE SERVICE se construit autour d'une ambition claire: fournir des prestations fiables, rassurantes et parfaitement exécutées dans le domaine du nettoyage, du pressing et de la désinfection."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-clean-200 bg-white p-7 shadow-sm transition hover:shadow-md">
              <h2 className="font-display text-3xl font-semibold text-ocean-900">Notre mission</h2>
              <p className="mt-4 text-sm leading-relaxed text-clean-600">
                Assurer des prestations de nettoyage, de pressing et de désinfection avec une qualité irréprochable et des méthodes rigoureuses, pour permettre à nos clients d&apos;évoluer dans des espaces sains, valorisants et sereins au quotidien.
              </p>
            </article>
            <article className="rounded-3xl border border-clean-200 bg-white p-7 shadow-sm transition hover:shadow-md">
              <h2 className="font-display text-3xl font-semibold text-ocean-900">Notre vision</h2>
              <p className="mt-4 text-sm leading-relaxed text-clean-600">
                Devenir la référence de confiance dans l&apos;entretien premium des espaces de vie et de travail, avec une approche respectueuse de l&apos;environnement, écologique et durable.
              </p>
            </article>
          </div>
        </Container>
      </SectionShell>

      <SectionShell accent="light">
        <Container>
          <SectionHeading
            eyebrow="Nos Engagements"
            title="Une promesse de service organisée et mesurable"
            description="Notre philosophie repose sur la fiabilité opérationnelle et l'excellence du Grand Dakar."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {trustPillars.map((item) => (
              <ValueCard key={item.title} item={item} />
            ))}
          </div>
        </Container>
      </SectionShell>

      <SectionShell>
        <Container>
          <SectionHeading
            eyebrow="Nos valeurs"
            title="Des principes simples qui guident chaque intervention"
            description="Ces valeurs structurent notre posture et notre relation client sur le long terme."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((item) => (
              <ValueCard key={item.title} item={item} dark />
            ))}
          </div>
        </Container>
      </SectionShell>

      <CtaBanner
        title="Vous recherchez un partenaire fiable et organise ?"
        description="Notre equipe vous accompagne avec une proposition claire et adaptee a votre contexte."
      />
    </>
  );
}
