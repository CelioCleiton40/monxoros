import { useState } from 'react';
import { Play, Film } from 'lucide-react';
import thumbnail from '@/assets/DiscoverMyWorkProductsImage/JoseBezerra-1.jpg';

export function DocumentarySection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section aria-labelledby="documentary-title" className="relative w-full py-24 bg-stone-50 overflow-hidden">
      {/* Elemento decorativo de fundo (Mancha suave) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-stone-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Coluna de Texto (Esquerda) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
            
            {/* Header consistente com a AboutSection */}
            <div className="mb-8">
              <span className="text-amber-700 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
                Philosophy
              </span>
              <h2 
                id="documentary-title" 
                className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight"
              >
                Documentary <span className="italic font-light text-stone-400">Gaze</span>
              </h2>
            </div>

            <div className="space-y-6 text-stone-600 text-lg font-light leading-relaxed">
              <p>
                The photographic language is vast, but documenting a culture requires <strong className="text-stone-900 font-medium">immersive participation</strong>. 
                It is not merely observing from a distance, but sharing the breath of everyday life.
              </p>
              <p>
                Symbols, traditions, and silent gestures become keys to understanding a community. 
                The photographer who walks this path gathers not just images, but a profound cultural load and true empathy.
              </p>
            </div>
            
            {/* Elemento de Assinatura Visual */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-12 bg-amber-700"></div>
              <p className="text-xs font-bold uppercase tracking-widest text-stone-400">
                A path of self-knowledge
              </p>
            </div>
          </div>

          {/* Coluna de Vídeo (Direita) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative group">
              
              {/* EFEITO DE BORDA DESLOCADA (Igual ao AboutSection) */}
              <div className="absolute top-4 -right-4 w-full h-full border-2 border-stone-200 rounded-2xl z-0 transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 hidden md:block" />

              {/* Container do Vídeo */}
              <div className="relative z-10 w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-stone-900/10 bg-stone-900">
                
                {!isPlaying ? (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-full h-full relative flex items-center justify-center cursor-pointer overflow-hidden group/btn"
                    aria-label="Play documentary video"
                  >
                    {/* CAMADA 1: Fundo Desfocado (Ambiente) */}
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={thumbnail}
                        alt=""
                        className="w-full h-full object-cover blur-2xl opacity-60 scale-110"
                      />
                      <div className="absolute inset-0 bg-stone-900/20" />
                    </div>

                    {/* CAMADA 2: Imagem Principal (Sem Cortes) */}
                    <img
                      src={thumbnail}
                      alt="Documentary video thumbnail"
                      className="relative z-10 w-full h-full object-contain transition-transform duration-700 ease-out group-hover/btn:scale-[1.02]"
                      loading="lazy"
                    />
                    
                    {/* Botão Play Moderno */}
                    <div className="absolute z-20 inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 shadow-lg group-hover/btn:scale-110 group-hover/btn:bg-white/20 transition-all duration-300">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm pl-1 text-stone-900">
                          <Play className="w-6 h-6 fill-current" />
                        </div>
                      </div>
                    </div>
                  </button>
                ) : (
                  <iframe
                    className="absolute inset-0 w-full h-full animate-in fade-in duration-700 bg-black"
                    src="https://www.youtube.com/embed/M_WEcMxLVUg?si=wsT-VFbOALPBqqqW&autoplay=1"
                    title="Documentary Photography Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
            
            {/* Legenda do Vídeo */}
            <div className="mt-4 flex justify-end items-center gap-2 text-stone-400">
              <Film className="w-3 h-3" />
              <p className="text-xs italic">
                Watch the short film &mdash; 04:20
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}