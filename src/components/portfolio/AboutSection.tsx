import { Award, MapPin, Calendar, Camera } from "lucide-react";
import aboutImage from "@/assets/OurPhilosophy/OurPhilosophy.webp";

export function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="mx-auto max-w-7xl px-6 py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        {/* COLUNA DA IMAGEM (Esquerda) */}
        <div className="lg:col-span-5 order-1 lg:sticky lg:top-12">
          <div className="relative group">
            {/* Efeito de borda deslocada (Offset Border) para estilo artístico */}
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-stone-100 rounded-2xl z-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            
            <div className="relative z-10 overflow-hidden rounded-2xl bg-stone-50 shadow-2xl shadow-stone-900/10">
              <img
                src={aboutImage}
                alt="Portrait of José Bezerra"
                // 'w-full h-auto' garante que a imagem NUNCA seja cortada
                className="w-full h-auto block transition-all duration-700 ease-out filter grayscale hover:grayscale-0 scale-100 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            {/* Metadados da Imagem - Estilo Editorial */}
            <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
              <div className="flex items-center gap-2 text-stone-500">
                <MapPin className="w-4 h-4 text-amber-700" />
                <span className="text-xs font-bold tracking-widest uppercase">Mossoró, RN</span>
              </div>
              <div className="flex items-center gap-2 text-stone-500">
                <Calendar className="w-4 h-4 text-amber-700" />
                <span className="text-xs font-bold tracking-widest uppercase">Est. 2007</span>
              </div>
            </div>
          </div>
        </div>

        {/* COLUNA DE TEXTO (Direita) */}
        <div className="lg:col-span-7 order-2 flex flex-col">
          
          {/* Cabeçalho */}
          <div className="mb-10">
            <span className="text-amber-700 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
              The Photographer
            </span>
            <h2 id="about-title" className="text-5xl md:text-6xl font-serif text-stone-900 leading-none">
              José <span className="italic text-stone-400 font-light">Bezerra</span>
            </h2>
          </div>

          {/* Citação em Destaque (Hook) */}
          <blockquote className="relative border-l-4 border-amber-700/20 pl-6 mb-10">
            <p className="text-xl md:text-2xl font-serif italic text-stone-800 leading-relaxed">
              "I develop contemplative images that demand a profound state of well-being from the photographer. 
              To capture the soul, one must first be still."
            </p>
          </blockquote>

          {/* Texto Corrido (Melhorado para Inglês Fluente) */}
          <div className="space-y-6 text-stone-600 text-lg font-light leading-relaxed">
            <p>
              Born in the heart of Brazil's Northeast, in the city of Mossoró, I began my journey in 2007, 
              inspired by the great masters of painting and photography. My work is not just about capturing light, 
              but about documenting the <strong className="text-stone-900 font-medium">intimate identity</strong> of the Brazilian outback (Sertão).
            </p>
            <p>
              Over the last decade, I have collected thousands of photographs that reveal cultural symbols, 
              daily rituals, and the deep resilience of the people. This is a body of work developed through 
              true belonging and long-term relationships with the subjects.
            </p>
          </div>

          {/* SEÇÃO DE ESTATÍSTICAS (Social Proof) - Muito importante para os EUA */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-b border-stone-100 py-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Award className="w-5 h-5 text-amber-700" />
                <span className="text-3xl font-serif text-stone-900">28+</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Awards Won</p>
            </div>

            <div className="text-center md:text-left border-l border-stone-100 pl-6">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Camera className="w-5 h-5 text-amber-700" />
                <span className="text-3xl font-serif text-stone-900">15+</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Years Experience</p>
            </div>

            <div className="text-center md:text-left border-l border-stone-100 pl-6">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <div className="w-5 h-5 rounded-full border border-amber-700 flex items-center justify-center text-[10px] font-serif text-amber-700">i</div>
                <span className="text-3xl font-serif text-stone-900">12+</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Major Reports</p>
            </div>
          </div>

          {/* Assinatura ou CTA final */}
          <div className="mt-10">
            <p className="text-sm text-stone-400 font-medium">
              Featured in exhibitions across Brazil and internationally.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}