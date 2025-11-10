import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("rounded-xl border border-stone-200 bg-white shadow-sm", className)}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

export function CardTitle({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <h3 className={cn("text-stone-900 font-semibold text-lg", className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <p className={cn("mt-2 text-stone-700 text-sm leading-relaxed", className)}>
      {children}
    </p>
  );
}

export function CardContent({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <div className={cn("p-6 pt-0", className)}>{children}</div>;
}