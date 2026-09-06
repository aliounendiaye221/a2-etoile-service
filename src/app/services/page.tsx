import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { ServiceCard } from "@/components/ui/service-card";
import { company, services } from "@/lib/site-content";
import { normalizePhone } from "@/lib/utils";
import { Sparkles, ArrowRight } from "lucide-react";
import { PremiumLink } from "@/components/ui/premium-button";

export const metadata: Metadata = {
  title: "Services de Nettoyage, Gravure & Entretien au Sénégal | A2 Étoile Service",
  description: "Nos expertises de prestige à Dakar & Rufisque : gravure d'art sur marbre, plexiglas, aluminium et laiton, lavage de tapis à la monobrosse, nettoyage industriel, dératisation et traitement de sols.",
  keywords: ["services de nettoyage dakar", "gravure sur marbre sénégal", "gravure plexiglas dakar", "gravure laiton sénégal", "lavage tapis monobrosse dakar", "dératisation dakar", "nettoyage façade sénégal"]
};

const processSteps = [
  {
    title: "Diagnostic & Devis",
    description: "Nous analysons vos besoins spécifiques (textiles, surfaces, fréquences) pour une offre 100% personnalisée."
  },
  {
    title: "Intervention Experte",
    description: "Nos équipes formées interviennent avec du matériel professionnel et une rigueur absolue."
  },
  {
    title: "Contrôle Qualité",
    description: "Chaque prestation est validée pour garantir un résultat 'Étoile' constant et sans compromis."
  }
] as const;

export default function ServicesPage() {
  return (
    <>
      <SectionShell className="pb-14 pt-12 sm:pb-16 sm:pt-20">
        <Container>
          <SectionHeading
            eyebrow="Expertises de Pointe"
            title="Des solutions d'hygiène conçues pour l'Excellence"
            description="Que vous soyez une PME à Rufisque ou une résidence de prestige aux Almadies, nous élevons les standards de propreté."
          />
          
          <div className="mt-14 grid gap-8 sm:mt-16 sm:gap-10 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </SectionShell>

      {/* Corporate Focus Mini-Section */}
      <SectionShell accent="light" className="overflow-hidden relative">
        <div className="absolute top-0 right-0 hidden h-full w-1/3 translate-x-10 -skew-x-12 bg-gold-50/50 lg:block" />
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
             <div className="max-w-2xl">
                <h2 className="font-display text-2xl leading-tight text-ocean-950 sm:text-4xl lg:text-5xl">
                   Besoin d&apos;un Contrat <span className="text-gold-600">Entreprise</span> ?
                </h2>
                <p className="mt-5 text-base font-medium leading-relaxed text-clean-800 sm:mt-6 sm:text-xl">
                   Nous accompagnons les sièges sociaux, boutiques de luxe et sites industriels de Rufisque avec des solutions de maintenance régulières et une facturation simplifiée.
                </p>
             </div>
             <PremiumLink href="/contact?type=B2B" variant="primary" className="h-14 w-full justify-center rounded-2xl px-8 text-base sm:h-16 sm:w-auto sm:px-10 sm:text-xl">
               Consulter l&apos;Offre Pro <ArrowRight className="ml-2 w-6 h-6" />
             </PremiumLink>
          </div>
        </Container>
      </SectionShell>

      <SectionShell>
        <Container>
          <SectionHeading
            eyebrow="Notre Engagement"
            title="Un processus rigoureux, un résultat garanti"
            description="La clé de notre succès repose sur une méthodologie structurée et transparente."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className="group relative rounded-[1.75rem] border border-ocean-100/50 bg-ocean-50/50 p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-white hover:shadow-glass sm:rounded-[2.5rem] sm:p-8">
                <div className="absolute right-6 top-4 font-display text-5xl text-ocean-100/50 transition-colors group-hover:text-gold-400/20 sm:right-8 sm:top-6 sm:text-6xl">
                  0{index + 1}
                </div>
                <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                   <Sparkles className="w-6 h-6 text-gold-500" />
                </div>
                <h3 className="font-display text-xl text-ocean-950 sm:text-2xl">{step.title}</h3>
                <p className="mt-4 text-clean-800 font-medium leading-relaxed">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </SectionShell>

      <SectionShell className="pt-0">
        <Container>
          <div className="rounded-[2rem] border border-white bg-gradient-to-r from-gold-50 to-ocean-50 p-7 text-center shadow-sm sm:rounded-[3rem] sm:p-12">
             <h3 className="font-display text-2xl text-ocean-900 sm:text-3xl">Une urgence ?</h3>
             <p className="mt-4 text-base text-clean-800 sm:text-lg">Nos équipes mobiles à Rufisque et Dakar peuvent intervenir sous 4 heures pour les besoins critiques.</p>
             <div className="mt-8">
                 <a href={`tel:${normalizePhone(company.phone)}`} className="text-xl font-black text-ocean-900 transition-colors hover:text-gold-600 sm:text-2xl">
                    {company.phone}
                 </a>
             </div>
          </div>
        </Container>
      </SectionShell>
    </>
  );
}
