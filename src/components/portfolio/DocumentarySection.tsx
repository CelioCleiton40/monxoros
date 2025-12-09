import { useState } from 'react';
import { Play } from 'lucide-react';
import thumbnail from '@/assets/DiscoverMyWorkProductsImage/JoseBezerra-1.jpg';

export function DocumentarySection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section aria-labelledby="documentary-title" className="relative w-full py-16 md:py-24 bg-stone-50 overflow-hidden">
      {/* Elemento decorativo de fundo (opcional) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-stone-200 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna de Texto - Ocupa 5 colunas no Desktop */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center space-y-8">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-stone-200/50 text-stone-600 text-xs font-medium tracking-widest uppercase mb-4">
                Philosophy
              </span>
              <h3 
                id="documentary-title" 
                className="text-4xl md:text-5xl font-light text-stone-900 leading-tight tracking-tight"
              >
                Documentary <span className="italic font-serif">Photography</span>
              </h3>
              <p className="mt-2 text-stone-400 text-sm uppercase tracking-widest font-medium">
                A path of self-knowledge
              </p>
            </div>

            <div className="space-y-6 text-stone-600 text-lg font-light leading-relaxed">
              <p>
                The photographic language can be vast and profound. Documenting a culture is mainly 
                <strong className="text-stone-900 font-normal"> participating in everyday life</strong>.
              </p>
              <p>
                Values, symbols, traditions, ideas, customs and practices become keys for understanding the culture. 
                The photographer who observes and reflects on this path acquires a high cultural load and develops true empathy.
              </p>
            </div>
            
            {/* Assinatura ou detalhe extra visual */}
            <div className="h-px w-24 bg-stone-300 mt-4"></div>
          </div>

          {/* Coluna de Vídeo - Ocupa 7 colunas no Desktop (Destaque) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative w-full aspect-[16/9] lg:aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-stone-900/10 group bg-stone-900">
              {!isPlaying ? (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-full h-full relative flex items-center justify-center cursor-pointer"
                  aria-label="Play documentary video"
                >
                  {/* Imagem com Zoom suave no Hover */}
                  <img
                    src={thumbnail}
                    alt="Documentary video thumbnail"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  
                  {/* Overlay escuro sutil para garantir contraste do botão */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

                  {/* Botão Play Moderno (Glassmorphism) */}
                  <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center backdrop-blur-md bg-white/20 border border-white/30 shadow-lg group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Play className="w-6 h-6 text-stone-900 fill-stone-900 ml-1" />
                    </div>
                  </div>
                </button>
              ) : (
                <iframe
                  className="absolute inset-0 w-full h-full animate-in fade-in duration-700"
                  src="https://www.youtube.com/embed/M_WEcMxLVUg?si=wsT-VFbOALPBqqqW&autoplay=1"
                  title="Documentary Photography Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            {/* Legenda sutil abaixo do vídeo */}
            <p className="mt-4 text-xs text-stone-400 text-right italic hidden md:block">
              Watch the full documentary &mdash; 04:20
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}