import { Separator } from "@/components/ui/Separator";
import aboutImage from "@/assets/OurPhilosophy/OurPhilosophy.webp";

export function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* Coluna da Imagem (Esquerda no Desktop) */}
        <div className="lg:col-span-5 order-1 lg:sticky lg:top-8">
          <div className="relative group">
            {/* Imagem com efeito preto e branco -> cor */}
            <div className="overflow-hidden rounded-lg bg-stone-200 aspect-[3/4]">
              <img
                src={aboutImage}
                alt="Portrait of José Bezerra"
                className="w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                loading="lazy"
              />
            </div>
            
            {/* Legenda Estilizada */}
            <div className="mt-4 flex items-center justify-between text-xs text-stone-400 font-medium tracking-wide uppercase">
              <span>Mossoró, RN</span>
              <span>Est. 2007</span>
            </div>
          </div>
        </div>

        {/* Coluna de Texto (Direita no Desktop) */}
        <div className="lg:col-span-7 order-2 flex flex-col justify-center">
          
          {/* Cabeçalho */}
          <div className="mb-8">
            <span className="inline-block py-1 px-3 rounded-full bg-stone-100 text-stone-500 text-xs font-medium tracking-widest uppercase mb-4">
              Biography
            </span>
            <h2 
              id="about-title" 
              className="text-4xl md:text-5xl font-light text-stone-900 leading-tight"
            >
              José <span className="font-serif italic text-stone-600">Bezerra</span>
            </h2>
            <p className="text-lg text-stone-500 mt-2 font-light tracking-wide">
              Documentary Photographer
            </p>
          </div>

          {/* Texto Corrido */}
          <div className="space-y-6 text-stone-600 text-lg font-light leading-relaxed">
            <p>
              Brazilian born in the interior of Rio Grande do Norte, in the city of Mossoró. Started in photography in 2007,
              from authored studies of great names in photography and painting. In 2008, the studies and research progressed,
              influencing the interest in developing an intimate documentary photography.
            </p>
            <p>
              In 12 years as a photographer, he collected thousands of photographs that reveal the cultural, daily, and geographical
              identity of part of the Brazilian outback — a work developed with deep belonging and relationships with many of the
              people photographed in places.
            </p>
            
            <Separator className="bg-stone-200 my-6 opacity-60" />

            <p className="text-base text-stone-500">
              This work has earned him over the last ten years at least <strong className="text-stone-900 font-normal">28 awards</strong> in photography
              contests, participation in collective and solo exhibitions. He gave several interviews and produced more than a dozen
              reports about his photographic work.
            </p>
          </div>

          {/* Citação em Destaque */}
          <div className="mt-10 relative">
            <span className="absolute -top-6 -left-4 text-6xl text-stone-200 font-serif leading-none select-none">“</span>
            <blockquote className="relative z-10 text-xl md:text-2xl font-serif italic text-stone-800 leading-relaxed pl-2">
              I develop contemplative images that demand a profound state of well-being from the photographer.
            </blockquote>
            <cite className="block mt-4 text-sm font-medium text-stone-400 not-italic tracking-widest uppercase">
              — The Artist's Vision
            </cite>
          </div>
        </div>

      </div>
    </section>
  );
}