"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function PortfolioHero({ shopUrl }: { shopUrl: string }) {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 sm:pt-24 sm:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-stone-900">José Bezerra</h1>
          <p className="mt-2 text-stone-600 text-lg">Documentary Photographer</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href={shopUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="shadow-lg hover:shadow-xl">View jobs</Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg">Contact</Button>
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <img
            src="https://placehold.co/800x600"
            alt="Hero placeholder"
            className="w-full h-auto rounded-xl border border-stone-200 shadow-sm object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}