import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type SectionShellProps = HTMLAttributes<HTMLElement> & {
  accent?: "dark" | "light" | "transparent";
};

export function SectionShell({ className, accent = "transparent", ...props }: SectionShellProps) {
  const variants = {
    dark: "bg-ocean-950 text-white",
    light: "bg-white text-clean-900 border-y border-ocean-50",
    transparent: "bg-transparent text-inherit"
  } as const;

  return <section className={cn("py-16 sm:py-20", variants[accent], className)} {...props} />;
}
