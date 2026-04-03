import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/lib/site-content";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

type ServiceCardProps = {
  service: ServiceItem;
  className?: string;
  highlight?: boolean;
  variant?: "overlay" | "split";
};

export function ServiceCard({ service, className, highlight = false, variant = "overlay" }: ServiceCardProps) {

  // MODE OVERLAY : image plein écran, texte en bas (ex: Pressing)
  if (highlight && variant === "overlay") {
    return (
      <article
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-white/20 shadow-glass transition-all duration-500 hover:-translate-y-2 hover:shadow-glass-hover sm:rounded-[2.5rem]",
          className
        )}
      >
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={`A2 Étoile Service Dakar - ${service.title}`}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 66vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/30 to-transparent" />
        </div>
        <div className="relative mt-auto p-6 sm:p-10">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-1 w-10 rounded-full bg-gold-400" />
            <p className="text-xs font-black uppercase tracking-[0.3em] text-gold-400">Service Phare</p>
          </div>
          <h3 className="font-display text-2xl leading-tight text-white sm:text-4xl">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ocean-100/80 sm:text-base max-w-xl">
            {service.description}
          </p>
          <div className="mt-5 inline-flex max-w-full flex-wrap items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm sm:px-5">
            <Sparkles className="h-4 w-4 text-gold-400" />
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white sm:tracking-wider">
              {service.benefit}
            </p>
          </div>
        </div>
      </article>
    );
  }

  // MODE SPLIT : image à gauche, texte à droite — image entière visible (ex: Shampouinage)
  if (highlight && variant === "split") {
    return (
      <article
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-ocean-100 bg-ocean-950 shadow-glass transition-all duration-500 hover:shadow-glass-hover sm:rounded-[2.5rem] sm:flex-row",
          className
        )}
      >
        <div className="relative w-full shrink-0 sm:w-1/2 lg:w-[55%] bg-ocean-900">
          <Image
            src={service.image}
            alt={`A2 Étoile Service Dakar - ${service.title}`}
            width={800}
            height={800}
            className="h-64 w-full object-contain object-center transition-transform duration-700 group-hover:scale-105 sm:h-full"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-1 w-10 rounded-full bg-gold-400" />
            <p className="text-xs font-black uppercase tracking-[0.3em] text-gold-400">Service Premium</p>
          </div>
          <h3 className="font-display text-2xl leading-tight text-white sm:text-3xl lg:text-4xl">
            {service.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-ocean-100/80 sm:text-base">
            {service.description}
          </p>
          <div className="mt-6 inline-flex w-full max-w-full flex-wrap items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm sm:w-fit sm:px-5">
            <Sparkles className="h-4 w-4 text-gold-400 shrink-0" />
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white sm:tracking-wider">
              {service.benefit}
            </p>
          </div>
        </div>
      </article>
    );
  }

  // MODE NORMAL : image en haut, texte en bas
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/40 backdrop-blur-md shadow-glass transition-all duration-500 hover:-translate-y-2 hover:shadow-glass-hover sm:rounded-[2.5rem]",
        className
      )}
    >
      <div className="relative h-64 w-full shrink-0 overflow-hidden sm:h-80">
        <Image
          src={service.image}
          alt={`A2 Étoile Service Dakar - ${service.title}`}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/50 via-ocean-900/10 to-transparent" />
      </div>
      <div className="relative flex grow flex-col p-6 pt-5 sm:p-8 sm:pt-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-xl leading-tight text-ocean-900 transition-colors group-hover:text-ocean-600 sm:text-2xl">
            {service.title}
          </h3>
          <div className="h-10 w-10 rounded-full bg-clean-50 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <ArrowRight className="h-5 w-5 text-ocean-600" />
          </div>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-clean-800 grow">
          {service.description}
        </p>
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white bg-gradient-to-r from-gold-50 to-ocean-50 p-4">
          <div className="bg-white p-2 rounded-xl shadow-sm">
            <Sparkles className="h-4 w-4 text-gold-500" />
          </div>
          <p className="text-xs font-semibold uppercase leading-relaxed tracking-[0.12em] text-ocean-900 sm:tracking-wider">
            {service.benefit}
          </p>
        </div>
      </div>
    </article>
  );
}

