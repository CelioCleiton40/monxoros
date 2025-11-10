export function PortraitSection() {
  return (
    <section aria-labelledby="portrait-title" className="mx-auto max-w-7xl px-6 pb-16">
      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <h4 id="portrait-title" className="text-stone-900 font-semibold">Portrait</h4>
        <p className="mt-2 text-stone-700 text-sm leading-relaxed">
          The portraits integrate the being's documentation. The relationship of the photographer with the photographed.
          Prospecting individuality in the daily lives of each one adds empathy and suggests us on the path to unity — where we
          are all part of the same structure.
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <img
              key={idx}
              src="https://placehold.co/800x600"
              alt={`Portrait placeholder ${idx + 1}`}
              className="w-full h-auto rounded-lg border border-stone-200 object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}