import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/lib/site-content";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

type ServiceCardProps = {
  service: ServiceItem;
  className?: string;
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/40 backdrop-blur-md shadow-glass transition-all duration-500 hover:-translate-y-2 hover:shadow-glass-hover sm:rounded-[2.5rem]",
        className
      )}
    >
      <div className="relative h-56 w-full shrink-0 overflow-hidden sm:h-64">
        <Image 
          src={service.image} 
          alt={`Illustration du service ${service.title}`} 
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
        
        <div className="mt-6 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-gold-50 to-ocean-50 p-4 border border-white">
          <div className="bg-white p-2 rounded-xl shadow-sm">
            <Sparkles className="h-4 w-4 text-gold-500" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-wider text-ocean-900">
            {service.benefit}
          </p>
        </div>
      </div>
    </article>
  );
}
