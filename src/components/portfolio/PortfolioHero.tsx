"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Globe } from "lucide-react";
import heroImage from "@/assets/DiscoverMyWorkProductsImage/AboutMe-01.jpg";

export function PortfolioHero({ shopUrl }: { shopUrl: string }) {
  // Configuração da animação para os textos aparecerem um após o outro
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Atraso entre cada elemento
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }, // Curva "ease" suave
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-stone-50/50">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna de Texto (Ocupa 7 colunas) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-amber-700"></span>
              <span className="text-amber-700 font-bold tracking-widest text-xs uppercase">
                Documentary Photographer
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-8xl font-serif text-stone-900 leading-[0.9] tracking-tight mb-6"
            >
              José <br />
              <span className="italic font-light text-stone-500">Bezerra</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-lg mb-8"
            >
              Capturing the raw essence of human narrative through light and shadow. 
              Based in Brazil, telling stories <span className="text-stone-900 font-medium">worldwide</span>.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a href={shopUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" className="h-14 px-8 text-base shadow-xl shadow-amber-900/10 hover:shadow-amber-900/20 transition-all group">
                  View Portfolio
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="h-14 px-8 text-base bg-transparent border-stone-300 hover:bg-stone-100">
                  Get in Touch
                </Button>
              </a>
            </motion.div>

            {/* Rodapé sutil da seção Hero */}
            <motion.div variants={itemVariants} className="mt-12 flex items-center gap-2 text-sm text-stone-400 font-medium">
              <Globe className="w-4 h-4" />
              <span>Available for assignments globally</span>
            </motion.div>
          </motion.div>

          {/* Coluna da Imagem (Ocupa 5 colunas) */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
             {/* Efeito de Camadas/Offset para estilo visual */}
            <div className="absolute top-4 -right-4 w-full h-full border border-stone-200 rounded-2xl z-0 hidden md:block" />
            
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl shadow-stone-900/10 bg-white">
              <img
                src={heroImage}
                alt="José Bezerra Portrait"
                className="w-full h-auto object-cover transform transition-transform duration-1000 hover:scale-105"
                loading="eager" // Carregar rápido pois é a primeira coisa que se vê
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}