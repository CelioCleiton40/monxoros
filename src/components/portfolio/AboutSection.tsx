import { Separator } from "@/components/ui/Separator";

export function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="mx-auto max-w-7xl px-6 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 id="about-title" className="text-stone-900 font-semibold text-2xl">Jose Bezerra — Documentary Photographer</h2>
          <h3 className="mt-2 text-stone-800 font-medium">About me</h3>
          <p className="mt-2 text-stone-700 leading-relaxed">
            Brazilian born in the interior of Rio Grande do Norte, in the city of Mossoró. Started in photography in 2007,
            from authored studies of great names in photography and painting. In 2008, the studies and research progressed,
            influencing the interest in developing an intimate documentary photography.
          </p>
          <p className="mt-2 text-stone-700 leading-relaxed">
            In 12 years as a photographer, he collected thousands of photographs that reveal the cultural, daily, and geographical
            identity of part of the Brazilian outback — a work developed with deep belonging and relationships with many of the
            people photographed in places. This work has earned him over the last ten years at least 28 awards in photography
            contests, participation in collective and solo exhibitions. He gave several interviews and produced more than a dozen
            reports about his photographic work.
          </p>
          <blockquote className="mt-4 border-l-4 border-stone-300 pl-4 text-stone-800 italic">
            “I develop contemplative images that demand a profound state of well-being from the photographer.” — Jose Bezerra
          </blockquote>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
          <img
            src="https://placehold.co/800x600"
            alt="About section placeholder"
            className="w-full h-auto rounded-xl border border-stone-200 object-cover"
            loading="lazy"
          />
          <Separator className="my-6" />
          <div className="text-sm text-stone-600">Placeholder para imagem lateral</div>
        </div>
      </div>
    </section>
  );
}