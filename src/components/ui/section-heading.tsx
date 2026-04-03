import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
      {...props}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-ocean-600">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl leading-[1.1] text-clean-900 sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-clean-700 sm:text-lg">{description}</p> : null}
    </div>
  );
}
