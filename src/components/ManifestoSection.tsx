import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ourphilosophy from "../assets/OurPhilosophy/OurPhilosophy.webp";

export default function ManifestoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Variantes para o container (stagger effect)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // delay entre elementos
      },
    },
  };

  // Variantes para cada item de texto
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Overlay de gradiente
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
      aria-labelledby="manifesto-title"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-top">
        <img
          src={ourphilosophy}
          alt="Professional photographer capturing authentic moments in the Brazilian Sertão during golden hour expedition"
          className="w-full h-full object-cover object-bottom-right"
          loading="lazy"
        />
      </div>

      {/* Gradient Overlay */}
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"
      />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-2xl"
        >
          <motion.h2
            id="manifesto-title"
            variants={textVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 leading-tight"
          >
            Our Philosophy
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="space-y-6 text-white/90"
          >
            <motion.p
              variants={textVariants}
              className="text-lg md:text-xl font-light leading-relaxed"
            >
              Photography is not simply about recording what we see—it is about
              unveiling what we feel.
            </motion.p>

            <motion.p
              variants={textVariants}
              className="text-base md:text-lg font-light leading-relaxed"
            >
              In the Sertão, where the earth splits beneath an unforgiving sun
              and life endures against all odds, we encounter the essence of
              human resilience. This journey is an invitation to witness, to
              document, and to connect with the profound beauty that arises from
              struggle.
            </motion.p>

            <motion.p
              variants={textVariants}
              className="text-base md:text-lg font-light leading-relaxed"
            >
              We believe in small groups, meaningful encounters, and the
              transformative power of storytelling. Five photographers. Seven
              days. A lifetime of stories waiting to be revealed.
            </motion.p>

            <motion.blockquote
              variants={textVariants}
              className="border-l-2 border-white/30 pl-6 mt-8 italic text-lg md:text-xl font-light text-white/80"
            >
              "Through concepts such as belonging, the immanent, and the
              ineffable, we are able to perceive beauty—and then share it with
              the world."
              <footer className="text-sm mt-2 not-italic text-white/60">
                — Jose Bezerra
              </footer>
            </motion.blockquote>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute bottom-8 right-8 w-32 h-32 border border-white/20 rounded-full z-20"
      />
    </section>
  );
}
