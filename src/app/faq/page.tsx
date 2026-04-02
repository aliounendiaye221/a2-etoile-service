import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { faqs } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Retrouvez les reponses aux questions frequentes sur nos services, devis et modalites d'intervention."
};

export default function FaqPage() {
  return (
    <>
      <SectionShell className="pb-10 pt-12 sm:pt-16">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Des reponses claires pour vous aider a decider rapidement"
            description="Nous avons rassemble les questions les plus frequentes pour reduire les frictions et vous guider vers la bonne action."
          />
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </Container>
      </SectionShell>

      <CtaBanner
        title="Vous avez une question specifique ?"
        description="Notre equipe vous repond rapidement et vous accompagne vers une solution adaptee."
      />
    </>
  );
}
