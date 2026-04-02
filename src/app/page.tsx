import { Sparkles, Star, Quote, Building2, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { company, services, stats } from "@/lib/site-content";
import { Container } from "@/components/ui/container";
import { PremiumLink } from "@/components/ui/premium-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { ServiceCard } from "@/components/ui/service-card";

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION - DAKAR & RUFISQUE */}
      <SectionShell className="relative flex min-h-[88vh] items-center overflow-hidden bg-white sm:min-h-[95vh]">
        {/* Abstract Background Elements */}
        <div className="absolute right-0 top-0 h-[430px] w-[430px] -translate-y-1/2 translate-x-1/2 rounded-full bg-gold-500/5 blur-[90px] sm:h-[800px] sm:w-[800px] sm:blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[360px] w-[360px] -translate-x-1/2 translate-y-1/2 rounded-full bg-gold-400/5 blur-[80px] sm:h-[600px] sm:w-[600px] sm:blur-[120px]" />

        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="animate-fade-up">
                 <div className="mb-8 flex flex-wrap items-center gap-3 sm:gap-4">
                   <div className="inline-flex items-center gap-2 rounded-full border border-ocean-100 bg-ocean-50/50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-ocean-900 shadow-sm backdrop-blur-sm sm:gap-3 sm:px-5 sm:py-2.5 sm:tracking-[0.4em]">
                     Dakar & Rufisque : L&apos;Excellence Mobile
                   </div>
                   <div className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-lg animate-pulse">
                     <Sparkles className="w-3 h-3 text-white" />
                     Standard International
                   </div>
                 </div>

                 {/* VISIBLE LOGO SLOGAN */}
                 <p className="mb-6 inline-block rounded-r-lg border-l-4 border-gold-500 bg-gold-50/30 py-2 pl-4 text-xs font-black uppercase tracking-[0.32em] text-gold-600 sm:tracking-[0.5em]">
                    {company.slogan}
                 </p>
                 
                 <h1 className="font-display text-5xl leading-[0.9] tracking-tighter text-ocean-950 sm:text-7xl sm:leading-[0.85] lg:text-9xl">
                   L&apos;Art de la <br/>
                   <span className="text-gradient">Perfection</span>.
                 </h1>
                 
                 <p className="mt-8 max-w-lg text-base font-medium leading-relaxed text-clean-800 sm:mt-10 sm:text-xl">
                   Confiez vos textiles et vos espaces à l&apos;élite du nettoyage au Sénégal. Une rigueur sans compromis pour les entreprises de prestige et les résidences d&apos;exception.
                 </p>

                 <div className="mt-10 flex flex-wrap items-center gap-4 sm:mt-12 sm:gap-6">
                   <PremiumLink href="/demande-de-devis" variant="primary" className="btn-shimmer h-14 w-full justify-center rounded-2xl px-8 text-base shadow-glass hover:shadow-glass-hover sm:h-16 sm:w-auto sm:px-12 sm:text-xl">
                     Obtenir un Devis Express
                   </PremiumLink>
                   <div className="hidden flex-col sm:flex">
                      <p className="text-[10px] font-black text-ocean-400 uppercase tracking-widest mb-1">Expertise B2B/B2C</p>
                      <div className="flex -space-x-2">
                         {[1,2,3,4,5].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gold-100 flex items-center justify-center"><Star className="w-3 h-3 text-gold-600 fill-current" /></div>)}
                      </div>
                   </div>
                 </div>
               </div>


            <div className="relative group animate-fade-in delay-500">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl glass-card sm:rounded-[4rem] sm:border-[16px]">
                  <Image
                    src="/hero-villa.png"
                    alt="Luxe Cleaning Dakar"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/40 via-transparent to-transparent" />
                  
                  {/* Floating Content Badge */}
                     <div className="absolute left-4 top-4 rounded-[1.25rem] border border-white/20 bg-white/10 p-4 text-white shadow-2xl backdrop-blur-xl animate-float sm:left-12 sm:top-12 sm:rounded-[2rem] sm:p-6">
                       <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-2">Service Phare</p>
                       <p className="text-lg font-display leading-tight sm:text-2xl">Villas d&apos;Exception<br/>& Résidences</p>
                   </div>
               </div>
            </div>
          </div>
        </Container>
      </SectionShell>

      {/* 2. STATS SECTION - PROFESSIONAL FOCUS */}
      <section className="py-16 bg-white border-y border-ocean-50">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="group">
                <p className="mb-3 font-display text-4xl text-ocean-950 transition-transform group-hover:-translate-y-1 sm:text-5xl md:text-6xl">
                  {stat.value}
                </p>
                <div className="h-1 w-8 bg-gold-500 mb-3 rounded-full" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ocean-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. BENTO SERVICES GRID - PRESSING SPOTLIGHT */}
      <SectionShell className="bg-ocean-50/30">
        <Container>
          <SectionHeading
            eyebrow="Domaines d'Excellence"
            title="L'Héritage du Soin et de la Précision"
            description="Particuliers aux villas d'exception ou fleurons de l'industrie : découvrez nos solutions d'hygiène sans compromis."
            align="center"
          />
          
          <div className="mt-14 grid gap-8 sm:mt-20 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
             {/* PRESSING - MASSIVE SPOTLIGHT */}
             <ServiceCard service={services[0]} className="lg:col-span-2 lg:h-[600px]" />
             
             {/* NETTOYAGE VILLA */}
             <ServiceCard service={services[1]} />
             
             {/* REST OF SERVICES */}
             {services.slice(2).map((service) => (
               <ServiceCard key={service.id} service={service} />
             ))}
          </div>
        </Container>
      </SectionShell>

      {/* 4. NEW B2B / CORPORATE SECTION */}
      <SectionShell>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative group overflow-hidden rounded-[2.5rem] sm:rounded-[4rem]">
                  <Image 
                     src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
                     alt="Corporate Cleaning Partners"
                     width={800}
                     height={1000}
                className="rounded-[2.5rem] object-cover transition-transform duration-1000 group-hover:scale-105 sm:rounded-[4rem]"
                     sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                 <div className="absolute inset-0 bg-ocean-950/20" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-col items-start gap-4 rounded-[1.5rem] border border-white bg-white/80 p-5 shadow-2xl backdrop-blur-xl sm:bottom-12 sm:left-12 sm:right-12 sm:flex-row sm:items-center sm:justify-between sm:rounded-[3rem] sm:p-10">
                    <div>
                  <p className="font-display text-xl text-ocean-950 sm:text-2xl">Expertise B2B</p>
                       <p className="text-sm text-ocean-600 font-bold uppercase tracking-widest mt-1">Secteur Tertiaire & Industriel</p>
                    </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ocean-900 text-white sm:h-14 sm:w-14">
                       <Building2 className="w-6 h-6" />
                    </div>
                 </div>
              </div>

               <div className="animate-fade-up">
                  <SectionHeading
                     eyebrow="Excellence Corporate"
                     title="Le Partenaire Hygiène de votre Image de Marque."
                     description="Optimisez vos environnements de travail et protégez vos collaborateurs avec nos solutions B2B de rang mondial."
                     className="max-w-none"
                  />
                 
                  <div className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
                    {[
                      { icon: ShieldCheck, title: "Normes HACCP & Désinfection", desc: "Protocoles certifiés pour les zones sensibles." },
                      { icon: Zap, title: "Intervention 24h/24", desc: "Nous nous adaptons à vos flux opérationnels pour zéro interruption." },
                      { icon: Building2, title: "Gestion Multisitu", desc: "Un seul interlocuteur pour tous vos sites à Dakar et Rufisque." }
                    ].map(item => (
                      <div key={item.title} className="flex gap-6 group">
                       <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-50 text-gold-600 shadow-sm transition-all duration-300 group-hover:bg-gold-500 group-hover:text-white sm:h-16 sm:w-16 sm:rounded-2xl">
                         <item.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                         </div>
                         <div>
                         <h3 className="text-lg font-bold text-ocean-950 sm:text-xl">{item.title}</h3>
                            <p className="mt-2 text-clean-800 font-medium leading-relaxed">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>

                 <div className="mt-14">
                    <PremiumLink href="/contact?type=B2B" variant="secondary" className="h-14 w-full justify-center rounded-2xl border-none px-8 text-base shadow-xl transition-all hover:bg-gold-500 hover:text-white sm:h-16 sm:w-auto sm:px-10 sm:text-xl">
                Consulter l&apos;Offre Pro <ArrowUpRight className="ml-2 w-6 h-6" />
             </PremiumLink>
                 </div>
              </div>
           </div>
        </Container>
      </SectionShell>

      {/* 5. CALL TO ACTION - RUFISQUE / DAKAR */}
      <SectionShell>
        <Container>
         <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-ocean-900 to-ocean-950 p-8 text-center shadow-2xl sm:rounded-[5rem] sm:p-16 lg:p-24">
             {/* Decorative Background */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
           <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-mint-400/20 blur-[80px] sm:-top-24 sm:-left-24 sm:h-96 sm:w-96 sm:blur-[100px]" />
             
           <Quote className="absolute left-6 top-6 hidden h-20 w-20 text-white/5 sm:block lg:left-10 lg:top-10 lg:h-24 lg:w-24" />
             
             <div className="relative z-10">
             <h2 className="font-display text-4xl leading-tight text-white sm:text-6xl">
                   L&apos;Excellence est à une<br/> <span className="text-gold-400">Étoile</span> de vous.
                </h2>
             <p className="mx-auto mt-6 max-w-2xl text-base font-medium text-ocean-100/80 sm:mt-10 sm:text-xl">
                   Rufisque, Diamniadio, Dakar Plateau ou Almadies : nous couvrons chaque kilomètre du Grand Dakar avec la même rigueur.
                </p>
                
             <div className="mt-10 flex flex-wrap justify-center gap-4 sm:mt-16 sm:gap-8">
               <PremiumLink href="/demande-de-devis" variant="primary" className="btn-shimmer h-14 w-full justify-center rounded-2xl px-8 text-base shadow-2xl sm:h-20 sm:w-auto sm:rounded-[2rem] sm:px-16 sm:text-2xl">
                     Obtenir un Devis Gratuit
                   </PremiumLink>
               <PremiumLink href={company.whatsapp} variant="secondary" className="h-14 w-full justify-center rounded-2xl border-white/20 px-8 text-base font-bold text-white transition-all hover:bg-white/10 sm:h-20 sm:w-auto sm:rounded-[2rem] sm:px-16 sm:text-2xl">
                      WhatsApp Direct
                   </PremiumLink>
                </div>
             </div>
          </div>
        </Container>
      </SectionShell>
    </>
  );
}
