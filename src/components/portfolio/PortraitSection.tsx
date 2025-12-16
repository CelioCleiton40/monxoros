import portrait01 from '@/assets/DiscoverMyWorkProductsImage/portrait/AboutMe-Portrait-01.jpg'
import portrait02 from '@/assets/DiscoverMyWorkProductsImage/portrait/AboutMe-Portrait-02.jpg'
import portrait03 from '@/assets/DiscoverMyWorkProductsImage/portrait/AboutMe-Portrait-03.jpg'
import portrait04 from '@/assets/DiscoverMyWorkProductsImage/portrait/AboutMe-Portrait-04.jpg'
import portrait05 from '@/assets/DiscoverMyWorkProductsImage/portrait/AboutMe-Portrait-05.jpg'
import portrait06 from '@/assets/DiscoverMyWorkProductsImage/portrait/AboutMe-Portrait-06.jpg'

const gallery = [
  { img: portrait01, title: "The Observer", mood: "Candid" },
  { img: portrait02, title: "Resilience", mood: "Studio" },
  { img: portrait03, title: "Generations", mood: "Documentary" },
  { img: portrait04, title: "Silent Gaze", mood: "Natural Light" },
  { img: portrait05, title: "Identity", mood: "Street" },
  { img: portrait06, title: "Essence", mood: "Portraiture" },
]

export function PortraitSection() {
  return (
    <section aria-labelledby="portrait-title" className="mx-auto max-w-7xl px-6 py-24 bg-stone-50">
      
      <div className="max-w-3xl mx-auto text-center mb-20">
        <span className="text-amber-700 font-medium tracking-[0.2em] text-xs uppercase mb-4 block">
          Human Connection
        </span>
        <h2 id="portrait-title" className="text-5xl md:text-6xl font-serif text-stone-900 mb-6">
          The Human Narrative
        </h2>
        <p className="text-stone-600 text-lg leading-relaxed font-light">
          A portrait is a dialogue between the observer and the observed. 
          Prospecting individuality in the daily lives of each one adds empathy and suggests 
          the path to unity.
        </p>
      </div>

      {/* MUDANÇA PRINCIPAL: Layout de Colunas (Masonry) em vez de Grid Fixo 
          Isso permite que imagens de qualquer tamanho se encaixem sem cortes. */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        
        {gallery.map((item, idx) => (
          /* 'break-inside-avoid' impede que a imagem seja partida ao meio na troca de coluna */
          <div key={idx} className="break-inside-avoid group cursor-pointer">
            
            <div className="relative overflow-hidden rounded-lg bg-stone-200">
              <img
                src={item.img}
                alt={`Portrait photography - ${item.title}`}
                /* TRUQUE DO ZOOM:
                   1. 'w-full h-auto': A imagem define o tamanho (SEM CORTES).
                   2. 'scale-110': Dá o zoom.
                   3. 'origin-[50%_25%]': O ponto focal do zoom é 50% horizontal e 25% do topo (O ROSTO).
                */
                className="w-full h-auto block filter grayscale transition-all duration-1000 ease-out 
                           group-hover:grayscale-0 
                           group-hover:scale-110 
                           group-hover:origin-[50%_25%]"
                loading="lazy"
              />
              
              {/* Overlay suave apenas no hover para destacar a cor */}
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500 pointer-events-none" />
            </div>

            <div className="mt-4 flex justify-between items-center opacity-70 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-lg font-serif text-stone-900">
                {item.title}
              </h3>
              <div className="h-px flex-1 bg-stone-300 mx-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              <p className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">
                {item.mood}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}