import { Container } from "@/components/ui/container";
import { PremiumLink } from "@/components/ui/premium-button";

type CtaBannerProps = {
  title: string;
  description: string;
};

export function CtaBanner({ title, description }: CtaBannerProps) {
  return (
    <section className="py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-ocean-600/30 bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-950 px-6 py-10 shadow-2xl sm:px-10 sm:py-12 group">
          <div className="absolute -right-20 -top-16 h-56 w-56 rounded-full bg-mint-500/20 blur-3xl group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-ocean-500/20 blur-2xl group-hover:scale-110 transition-transform duration-700 delay-100" />
          <div className="relative grid gap-8 lg:grid-cols-[1.5fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-mint-400">Passez à l&apos;action</p>
              <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">{title}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ocean-100 sm:text-base">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PremiumLink href="/devis" variant="primary" className="w-full justify-center bg-white text-ocean-900 hover:bg-ocean-50 sm:w-auto">
                Demander un devis
              </PremiumLink>
              <PremiumLink href="/contact" variant="secondary" className="w-full justify-center border-white/30 text-white hover:bg-white/10 hover:border-white/50 sm:w-auto">
                Nous contacter
              </PremiumLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
