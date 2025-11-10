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
              src="https://placehold.co/800x600"
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