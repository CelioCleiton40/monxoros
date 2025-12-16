import { Button } from "@/components/ui/Button";
import { Mail, Phone, Instagram, Facebook, ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section 
      id="contact" 
      aria-labelledby="contact-title" 
      className="w-full bg-stone-50 py-24 px-6"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Header Section */}
        <h2 
          id="contact-title" 
          className="text-3xl font-serif font-medium text-stone-900 sm:text-4xl"
        >
          Let's create something beautiful.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
          Available for weddings, portraits, and commercial projects in Florida and beyond.
          Get in touch to discuss your next session.
        </p>

        {/* Contact Links Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12">
          
          {/* Direct Contact */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-400">
              Get in Touch
            </h3>
            
            <a 
              href="mailto:josebezerrafotografo@gmail.com" 
              className="group flex items-center gap-2 text-lg font-medium text-stone-900 transition-colors hover:text-amber-700"
            >
              <Mail className="h-5 w-5 text-stone-400 group-hover:text-amber-700" />
              <span>josebezerrafotografo@gmail.com</span>
            </a>

            <a 
              href="tel:+14074850370" 
              className="group flex items-center gap-2 text-lg font-medium text-stone-900 transition-colors hover:text-amber-700"
            >
              <Phone className="h-5 w-5 text-stone-400 group-hover:text-amber-700" />
              <span>+1 (407) 485-0370</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-400">
              Follow My Work
            </h3>

            <a 
              href="https://instagram.com/jb_segundo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-lg font-medium text-stone-900 transition-colors hover:text-amber-700"
            >
              <Instagram className="h-5 w-5 text-stone-400 group-hover:text-amber-700" />
              <span>@jb_segundo</span>
            </a>

            <a 
              href="https://www.facebook.com/josebezerrafotografia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-lg font-medium text-stone-900 transition-colors hover:text-amber-700"
            >
              <Facebook className="h-5 w-5 text-stone-400 group-hover:text-amber-700" />
              <span>/josebezerrafotografia</span>
            </a>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <a href="mailto:josebezerrafotografo@gmail.com">
            <Button 
              size="lg" 
              className="bg-stone-900 text-white hover:bg-stone-700 px-8 py-6 text-lg"
            >
              Book a Session <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}