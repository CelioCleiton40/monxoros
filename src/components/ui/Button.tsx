import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({ className, variant = "default", size = "md", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-600 disabled:opacity-50 disabled:pointer-events-none";
  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    default: "bg-stone-800 text-white hover:bg-stone-700",
    primary: "bg-amber-500 text-black hover:bg-amber-600",
    outline: "border border-stone-300 text-stone-900 hover:bg-stone-50",
    ghost: "text-stone-900 hover:bg-stone-100",
  };
  const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}