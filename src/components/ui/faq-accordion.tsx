"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/lib/site-content";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article key={item.question} className="rounded-2xl border border-night-900/10 bg-white shadow-soft">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
              >
                <span className="text-base font-semibold text-night-900">{item.question}</span>
                <ChevronDown
                  className={cn("h-5 w-5 text-night-900 transition", isOpen && "rotate-180")}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div className={cn("grid transition-all", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-slateWarm-700">{item.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
