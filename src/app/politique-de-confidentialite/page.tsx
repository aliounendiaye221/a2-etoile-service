import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { company } from "@/lib/site-content";
import { ShieldCheck, Eye, Database, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | A2 ÉTOILE SERVICE",
  description: "Engagement de protection des données personnelles (CDP Sénégal) par A2 ÉTOILE SERVICE."
};

const policies = [
  {
    icon: Database,
    title: "Collecte des Données",
    content: "Nous collectons uniquement les données nécessaires au traitement de vos demandes : nom, prénom, adresse e-mail, numéro de téléphone et adresse (si nécessaire pour une intervention), via nos formulaires de contact et de devis."
  },
  {
    icon: Eye,
    title: "Utilisation des Données",
    content: "Vos données sont exclusivement utilisées pour la gestion de vos devis, la planification des services (Pressing, Nettoyage) et la communication relative à vos besoins chez A2 ÉTOILE SERVICE."
  },
  {
    icon: ShieldCheck,
    title: "Conservation & Sécurité",
    content: "Nous conservons vos données pour une durée maximale de 3 ans après notre dernier contact. Nous mettons en œuvre des mesures de sécurité industrielles (protocoles HTTPS, accès restreints) pour protéger vos informations."
  }
];

export default function PrivacyPolicyPage() {
  return (
    <SectionShell className="pt-12 sm:pt-20 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Confidentialité"
          title="Protection de vos Données Personnelles"
          description="Votre vie privée est notre priorité. A2 ÉTOILE SERVICE s'engage à traiter vos informations avec la plus grande rigueur, conformément à la législation sénégalaise (Loi sur la protection des données personnelles)."
        />

          <div className="mt-14 grid gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-3">
          {policies.map((policy) => (
             <article key={policy.title} className="group relative rounded-[1.75rem] border border-ocean-100/50 bg-ocean-50/50 p-6 shadow-glass transition-all hover:-translate-y-2 hover:bg-white hover:shadow-glass-hover sm:rounded-[3rem] sm:p-10">
               <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/10 bg-white shadow-sm sm:mb-8 sm:h-14 sm:w-14 sm:rounded-2xl">
                   <policy.icon className="h-7 w-7 text-gold-500" />
                </div>
                <h2 className="font-display text-2xl font-bold text-ocean-950 mb-4">{policy.title}</h2>
                <p className="text-clean-800 leading-relaxed font-medium">{policy.content}</p>
             </article>
          ))}
        </div>

          <div className="mt-16 overflow-hidden rounded-[1.75rem] bg-ocean-900 shadow-2xl sm:rounded-[2.5rem]">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 text-white sm:p-12">
              <h3 className="mb-6 font-display text-3xl sm:text-4xl">Vos Droits <span className="text-gold-400">CDP</span></h3>
               <p className="text-ocean-100 leading-relaxed mb-8">
                Conformément à la loi n° 2008-12 du 25 janvier 2008 portant sur la protection des données à caractère personnel au Sénégal, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression des données vous concernant.
               </p>
               <div className="flex flex-wrap gap-4">
                <div className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-sm font-bold uppercase tracking-widest">Droit à l&apos;Oubli</div>
                <div className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-sm font-bold uppercase tracking-widest">Droit d&apos;opposition</div>
               </div>
            </div>
            <div className="flex flex-col justify-center border-t border-white/10 bg-ocean-50 p-8 lg:border-t-0 lg:border-l lg:p-12">
               <div className="flex items-start gap-5">
                  <div className="h-12 w-12 rounded-full bg-gold-500 flex items-center justify-center shrink-0">
                     <HelpCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                     <h4 className="font-display text-2xl text-ocean-950 mb-3">Une question juridique ?</h4>
                     <p className="text-clean-800 mb-6">
                      Pour toute demande concernant vos données personnelles, veuillez nous contacter à l&apos;adresse suivante :
                     </p>
                    <p className="inline-block border-b-2 border-gold-500 text-lg font-black text-ocean-900 sm:text-xl">
                        {company.email}
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-sm text-clean-400 max-w-2xl mx-auto italic leading-relaxed">
            Note : Les données transmises via nos formulaires sont stockées de manière sécurisée et ne sont jamais revendues à des tiers. Nous ne partageons vos données qu&apos;avec nos prestataires logistiques strictement nécessaires au service (ex: livreurs).
        </div>
      </Container>
    </SectionShell>
  );
}
