import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { company } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Mentions Légales | A2 ÉTOILE SERVICE",
  description: "Informations légales relatives à l'éditeur du site A2 ÉTOILE SERVICE à Dakar et Rufisque."
};

export default function LegalNoticePage() {
  return (
    <SectionShell className="pt-12 sm:pt-20 bg-ocean-50/10">
      <Container>
        <SectionHeading
          eyebrow="Cadre Légal"
          title="Mentions Légales et Éditeur du Site"
          description="Conformément aux dispositions légales en vigueur au Sénégal, nous mettons à votre disposition les informations relatives à l'exploitation de notre plateforme."
        />

        <div className="mt-14 grid gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-ocean-100/50 bg-white p-6 shadow-glass transition-all hover:shadow-glass-hover sm:rounded-[2.5rem] sm:p-8">
            <h2 className="font-display text-2xl font-bold text-ocean-950 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-gold-500" />
              Édition du Site
            </h2>
            <div className="mt-6 space-y-4 text-clean-800 leading-relaxed">
              <p>Le présent site web est édité par :</p>
              <div className="pl-5 border-l-2 border-gold-500/20 py-2 space-y-1">
                <p className="font-bold text-ocean-900">{company.name}</p>
                <p>Adresse : {company.address}, Sénégal</p>
                <p>Téléphone : {company.phone}</p>
                <p>Email : {company.email}</p>
              </div>
              <p className="text-sm">
                Entreprise de services de nettoyage et traitement textile basée au Sénégal, desservant les zones de Dakar et Rufisque.
              </p>
            </div>

            <h2 className="mt-12 font-display text-2xl font-bold text-ocean-950 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-gold-500" />
              Hébergement
            </h2>
            <div className="mt-6 space-y-4 text-clean-800 leading-relaxed">
              <p>Le site est hébergé par :</p>
              <div className="pl-5 border-l-2 border-gold-500/20 py-2">
                 <p className="font-bold text-ocean-900">Vercel Inc.</p>
                 <p>440 N Barranca Ave #4133</p>
                 <p>Covina, CA 91723, USA</p>
                 <p className="text-sm text-ocean-400 mt-2">https://vercel.com</p>
              </div>
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-ocean-100/50 bg-white p-6 shadow-glass transition-all hover:shadow-glass-hover sm:rounded-[2.5rem] sm:p-8">
            <h2 className="font-display text-2xl font-bold text-ocean-950 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-gold-500" />
              Propriété Intellectuelle
            </h2>
            <div className="mt-6 space-y-4 text-clean-800 leading-relaxed">
              <p>
                L&apos;ensemble de ce site (structure, design, logos, textes, images, vidéos) est la propriété exclusive de <span className="font-bold">{company.name}</span>, sauf mention contraire.
              </p>
              <p>
                Toute reproduction, représentation, modification ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est strictement interdite sans l&apos;autorisation écrite préalable de l&apos;éditeur.
              </p>
            </div>

            <h2 className="mt-12 font-display text-2xl font-bold text-ocean-950 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-gold-500" />
              Responsabilité
            </h2>
            <div className="mt-6 space-y-4 text-clean-800 leading-relaxed">
              <p>
                {company.name} s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur ce site. Toutefois, nous ne saurions être tenus responsables des omissions ou des erreurs présentes.
              </p>
              <p>
                L&apos;utilisateur est seul responsable de l&apos;usage qu&apos;il fait des informations présentes sur le site.
              </p>
            </div>
          </article>
        </div>

          <div className="mt-16 rounded-[1.75rem] bg-ocean-900 p-8 text-center text-white shadow-2xl sm:rounded-[2.5rem] sm:p-12">
           <p className="text-sm uppercase tracking-[0.3em] text-gold-400 font-bold mb-4">Législation Applicable</p>
            <h3 className="mb-6 font-display text-2xl italic sm:text-3xl">Rigueur & Transparence</h3>
           <p className="max-w-2xl mx-auto text-ocean-100 leading-loose">
              Les présentes mentions légales sont régies par le droit sénégalais. Tout litige relatif à l&apos;utilisation du site sera soumis à la compétence exclusive des tribunaux de Dakar.
           </p>
        </div>
      </Container>
    </SectionShell>
  );
}
