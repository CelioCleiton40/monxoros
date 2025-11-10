export function DocumentarySection() {
  return (
    <section aria-labelledby="documentary-title" className="mx-auto max-w-7xl px-6 pb-16">
      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <h3 id="documentary-title" className="text-stone-900 font-semibold text-xl">Documentary photography</h3>
        <p className="text-stone-500 text-sm">a path of self-knowledge</p>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div>
            <p className="text-stone-700 leading-relaxed">
              The photographic language can be vast and profound. Documenting a culture is mainly participating in everyday life.
              Values, symbols, traditions, ideas, customs and practices that become characteristics for understanding the culture.
            </p>
            <p className="mt-2 text-stone-700 leading-relaxed">
              The photographer who observes and reflects on this path, acquires a high cultural load and develops empathy.
            </p>
          </div>
          <div>
            <img
              src="https://placehold.co/800x600"
              alt="Documentary section placeholder"
              className="w-full h-auto rounded-xl border border-stone-200 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}