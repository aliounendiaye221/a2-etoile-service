import { cn } from "@/lib/utils";
import type { ValueItem } from "@/lib/site-content";
import { CheckCircle2 } from "lucide-react";

type ValueCardProps = {
  item: ValueItem;
  dark?: boolean;
  className?: string;
};

export function ValueCard({ item, dark = false, className }: ValueCardProps) {
  return (
    <article
      className={cn(
        "rounded-3xl border p-6 transition-transform hover:-translate-y-1 relative overflow-hidden group",
        dark
          ? "border-ocean-800 bg-ocean-900 text-white"
          : "border-ocean-100 bg-white text-clean-900 shadow-soft",
        className
      )}
    >
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-colors",
        dark ? "bg-ocean-800 text-mint-400 group-hover:bg-mint-500 group-hover:text-white" : "bg-ocean-50 text-ocean-600 group-hover:bg-ocean-600 group-hover:text-white"
      )}>
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <h3 className={cn("font-display text-2xl mb-2", dark ? "text-white" : "text-clean-900")}>{item.title}</h3>
      <p className={cn("text-sm leading-relaxed", dark ? "text-slate-300" : "text-clean-800")}>{item.description}</p>
    </article>
  );
}
