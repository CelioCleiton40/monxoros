import { ArrowUpRight } from 'lucide-react';
import cityscape01 from '@/assets/DiscoverMyWorkProductsImage/cityScape/AboutMe-CityScape-01.jpg'
import cityscape02 from '@/assets/DiscoverMyWorkProductsImage/cityScape/AboutMe-CityScape-02.jpg'
import cityscape03 from '@/assets/DiscoverMyWorkProductsImage/cityScape/AboutMe-CityScape-03.jpg'
import cityscape04 from '@/assets/DiscoverMyWorkProductsImage/cityScape/AboutMe-CityScape-04.jpg'
import cityscape05 from '@/assets/DiscoverMyWorkProductsImage/cityScape/AboutMe-CityScape-05.jpg'
import cityscape06 from '@/assets/DiscoverMyWorkProductsImage/cityScape/AboutMe-CityScape-06.jpg'

const galleryItems = [
  { src: cityscape01, span: "col-span-1 md:col-span-2 row-span-2", location: "Urban Core" }, // Imagem destaque grande
  { src: cityscape02, span: "col-span-1", location: "Perspectives" },
  { src: cityscape03, span: "col-span-1", location: "Shadows" },
  { src: cityscape04, span: "col-span-1", location: "Structure" },
  { src: cityscape05, span: "col-span-1", location: "Horizons" },
  { src: cityscape06, span: "col-span-1 md:col-span-2", location: "Silence" }, // Imagem destaque larga
];

export function CityscapeSection() {
  return (
    <section aria-labelledby="cityscape-title" className="mx-auto max-w-7xl px-6 py-24 bg-white">
      
      {/* Header: Editorial Style */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <span className="text-amber-700 font-medium tracking-widest text-xs uppercase mb-2 block">
            Portfolio Selection
          </span>
          <h2 id="cityscape-title" className="text-5xl md:text-6xl font-serif text-stone-900 tracking-tight leading-[0.9]">
            Urban Landscapes
          </h2>
        </div>
        
        <div className="max-w-md">
          <p className="text-stone-600 text-lg leading-relaxed border-l-2 border-amber-700/30 pl-6">
            Architecture is not just structure; it is the fossil of culture. 
            The built environment reveals how we inhabit our spaces and relate to reality.
          </p>
        </div>
      </div>

      {/* Grid: Modern "Bento" Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
        {galleryItems.map((item, idx) => (
          <div 
            key={idx} 
            className={`group relative overflow-hidden rounded-xl bg-stone-100 ${item.span}`}
          >
            {/* Imagem com Zoom Effect */}
            <img
              src={item.src}
              alt={`Fine art cityscape photography - ${item.location}`}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Overlay Escuro no Hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />

            {/* Texto/Ícone que aparece no Hover */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
              <div className="flex justify-between items-end">
                <span className="text-white font-medium text-lg tracking-wide">
                  {item.location}
                </span>
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}