import type { Metadata } from "next";
import { Award, Gauge, Handshake, Layers2, ShieldCheck, Sparkles } from "lucide-react";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { trustPillars } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Pourquoi nous choisir",
  description:
    "Decouvrez les atouts A2 ETOILE SERVICE: professionnalisme, rigueur, fiabilite et accompagnement personnalise."
};

const proofBlocks = [
  {
    icon: ShieldCheck,
    title: "Fiabilite",
    description: "Un cadre d'execution stable pour des prestations regulieres et conformes aux attentes."
  },
  {
    icon: Gauge,
    title: "Reactivite",
    description: "Une organisation agile qui permet de repondre vite et efficacement aux demandes."
  },
  {
    icon: Handshake,
    title: "Accompagnement",
    description: "Une relation client professionnelle, claire et orientee solution."
  },
  {
    icon: Award,
    title: "Qualite percue",
    description: "Une finition soignee qui renforce la confiance et la valeur de vos espaces."
  },
  {
    icon: Layers2,
    title: "Methode",
    description: "Des procedures maitrisees pour limiter les ecarts et garantir la constance."
  },
  {
    icon: Sparkles,
    title: "Image premium",
    description: "Une prestation qui soutient l'image de votre entreprise ou de votre residence."
  }
] as const;

export default function WhyUsPage() {
  return (
    <>
      <SectionShell className="pb-10 pt-12 sm:pt-16">
        <Container>
          <SectionHeading
            eyebrow="Pourquoi nous choisir"
            title="Une execution professionnelle qui repond a vos exigences"
            description="Nous transformons vos attentes en un cadre de service clair, credible et performant."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {trustPillars.map((item) => (
              <article key={item.title} className="rounded-3xl border border-clean-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glass-hover hover:border-gold-200">
                <h3 className="font-display text-2xl font-semibold text-ocean-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-clean-700">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </SectionShell>

      <SectionShell accent="light">
        <Container>
          <SectionHeading
            eyebrow="Conviction"
            title="Des arguments de confiance clairs et concrets"
            description="Cette page repond aux objections frequentes en mettant l'accent sur la valeur, la qualite et la maitrise."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {proofBlocks.map((block) => (
              <article key={block.title} className="rounded-3xl border border-gold-100 bg-gold-50/50 p-6 shadow-soft transition hover:bg-gold-50">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-gold-600 shadow-sm">
                  <block.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ocean-950">{block.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-clean-700">{block.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </SectionShell>

      <CtaBanner
        title="Avançons sur une proposition claire et personnalisee"
        description="Demandez un devis et profitez d'un accompagnement structure, reactif et oriente resultat."
      />
    </>
  );
}
