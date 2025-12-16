import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import childrenFire01 from '@/assets/DiscoverMyWorkProductsImage/childrenFire/AboutMe-ChildrenFire-01.jpg';
import childrenFire02 from '@/assets/DiscoverMyWorkProductsImage/childrenFire/AboutMe-ChildrenFire-02.jpg';
import childrenFire03 from '@/assets/DiscoverMyWorkProductsImage/childrenFire/AboutMe-ChildrenFire-03.jpg';

import miners01 from '@/assets/DiscoverMyWorkProductsImage/miners/AboutMe-Miners-01.jpg';
import miners02 from '@/assets/DiscoverMyWorkProductsImage/miners/AboutMe-Miners-02.jpg';
import miners03 from '@/assets/DiscoverMyWorkProductsImage/miners/AboutMe-Miners-03.jpg';

import candid01 from '@/assets/DiscoverMyWorkProductsImage/candid/AboutMe-Candid-01.jpg';
import candid02 from '@/assets/DiscoverMyWorkProductsImage/candid/AboutMe-Candid-02.jpg';
import candid03 from '@/assets/DiscoverMyWorkProductsImage/candid/AboutMe-Candid-03.jpg';

// Componente de Slideshow melhorado
function AutoImage({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Aumentei para 5s para dar tempo de apreciar a foto
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[4/5] overflow-hidden bg-stone-200">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          // Efeito "Ken Burns" sutil (Zoom lento enquanto aparece)
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          loading="lazy"
        />
      </AnimatePresence>
      
      {/* Indicador de "Série" no canto */}
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/20">
        Series 0{index + 1}
      </div>
    </div>
  );
}

export function SeriesSection() {
  const seriesData = [
    {
      title: "The Sacred Everyday",
      category: "Candid Photography",
      description: "Beauty and contemplation raise our awareness and empathy for the community. A visual path of self-knowledge through the mundane.",
      images: [candid01, candid02, candid03],
      alt: "Candid moments in Brazil"
    },
    {
      title: "White Dust",
      category: "Kaolin Miners",
      description: "A journalistic report on the rustic activity of kaolin mining. Men who risk everything to sustain their families in a stark, white reality.",
      images: [miners01, miners02, miners03],
      alt: "Kaolin miners working"
    },
    {
      title: "Children of Fire",
      category: "Lime Workers",
      description: "Inside the rustic industry of lime production. Little mechanization and intense heat reveal the human resilience behind the smoke.",
      images: [childrenFire01, childrenFire02, childrenFire03],
      alt: "Workers in lime industry"
    }
  ];

  return (
    <section aria-labelledby="series-title" className="mx-auto max-w-7xl px-6 py-24 bg-white border-t border-stone-100">
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <span className="text-amber-700 font-bold tracking-widest text-xs uppercase mb-2 block">
            Long Term Projects
          </span>
          <h2 id="series-title" className="text-4xl md:text-5xl font-serif text-stone-900">
            Curated Series
          </h2>
        </div>
        <p className="text-stone-500 text-sm max-w-xs text-right hidden md:block">
          Explore deeper narratives through sequential imagery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
        {seriesData.map((project, idx) => (
          <article key={idx} className="group cursor-pointer flex flex-col h-full">
            
            {/* 1. Imagem (Agora no TOPO) */}
            <div className="mb-6 rounded-sm overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1">
              <AutoImage images={project.images} alt={project.alt} />
            </div>

            {/* 2. Conteúdo Textual */}
            <div className="flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700">
                  {project.category}
                </span>
                {/* Seta animada */}
                <ArrowRight className="w-4 h-4 text-stone-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>

              <h3 className="text-2xl font-serif text-stone-900 mb-3 group-hover:text-amber-800 transition-colors">
                {project.title}
              </h3>

              <p className="text-stone-600 text-sm leading-relaxed mb-6 font-light">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}