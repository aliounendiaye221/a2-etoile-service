import { cn } from "@/lib/utils";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

const baseStyles =
  "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white relative overflow-hidden group";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-ocean-900 to-ocean-800 text-white shadow-glass hover:shadow-glass-hover hover:-translate-y-1 active:scale-95 border border-gold-500/20",
  secondary:
    "bg-white/80 text-ocean-950 backdrop-blur-md border border-ocean-100 hover:bg-gold-50 hover:border-gold-200 hover:-translate-y-1 active:scale-95 shadow-sm",
  ghost:
    "border border-transparent bg-transparent text-clean-800 hover:bg-ocean-50 hover:text-ocean-900 focus-visible:ring-ocean-500"
};

const ShineEffect = () => (
  <span className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
)

export function PremiumButton({ variant = "primary", className, children, ...props }: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
      {variant === 'primary' && <ShineEffect />}
    </button>
  );
}

export function PremiumLink({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link className={cn(baseStyles, variantStyles[variant], className)} href={href} {...props}>
      {children}
      {variant === 'primary' && <ShineEffect />}
    </Link>
  );
}
