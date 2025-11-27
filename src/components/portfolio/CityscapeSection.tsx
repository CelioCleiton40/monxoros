import cityscape01 from '@/assets/DiscoverMyWorkProductsImage/cityScape/AboutMe-CityScape-01.jpg'
import cityscape02 from '@/assets/DiscoverMyWorkProductsImage/cityScape/AboutMe-CityScape-02.jpg'
import cityscape03 from '@/assets/DiscoverMyWorkProductsImage/cityScape/AboutMe-CityScape-03.jpg'
import cityscape04 from '@/assets/DiscoverMyWorkProductsImage/cityScape/AboutMe-CityScape-04.jpg'
import cityscape05 from '@/assets/DiscoverMyWorkProductsImage/cityScape/AboutMe-CityScape-05.jpg'
import cityscape06 from '@/assets/DiscoverMyWorkProductsImage/cityScape/AboutMe-CityScape-06.jpg'

const cityscapes = [
  cityscape01,
  cityscape02,
  cityscape03,
  cityscape04,
  cityscape05,
  cityscape06,
]
export function CityscapeSection() {
  return (
    <section aria-labelledby="cityscape-title" className="mx-auto max-w-7xl px-6 pb-16">
      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <h4 id="cityscape-title" className="text-stone-900 font-semibold">Cityscape</h4>
        <p className="mt-2 text-stone-700 text-sm leading-relaxed">
          In photographic documentation the development of constructions is also important. They reveal part of the local culture
          and the way people relate to each other. Realizing these elements is fundamental for us to deepen our perception of reality.
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <img
              key={idx}
              src={cityscapes[idx]}
              alt={`Cityscape placeholder ${idx + 1}`}
              className="w-full h-auto rounded-lg border border-stone-200 object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}