import { Button } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-7xl px-6 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 rounded-2xl border border-stone-200 bg-stone-50 p-6">
          <h3 id="contact-title" className="text-stone-900 font-semibold text-xl">Contact</h3>
          <ul className="mt-3 space-y-2 text-stone-800">
            <li>
              Email: <a href="mailto:josebezerrafotografo@gmail.com" className="text-amber-700 hover:underline">josebezerrafotografo@gmail.com</a>
            </li>
            <li>
              Phone: <a href="tel:+14074850370" className="text-amber-700 hover:underline">+1 (407) 485-0370</a>
            </li>
            <li>
              Instagram: <span className="text-stone-900">@jb_segundo</span>
            </li>
            <li>
              Facebook: <a href="https://www.facebook.com/josebezerrafotografia" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline">facebook.com/josebezerrafotografia</a>
            </li>
          </ul>
          <div className="mt-4">
            <a href="mailto:josebezerrafotografo@gmail.com">
              <Button variant="primary" size="md">Send message</Button>
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <img
            src="https://placehold.co/800x600"
            alt="Contact section placeholder"
            className="w-full h-auto rounded-xl border border-stone-200 object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}