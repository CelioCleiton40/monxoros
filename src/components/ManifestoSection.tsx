import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ourphilosophy from "../assets/OurPhilosophy/OurPhilosophy.webp";
import ourphilosophyMobile from "../assets/OurPhilosophy/OurPhilosophy-01-Mobile.jpg";

export default function ManifestoSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
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
          src={isMobile ? ourphilosophyMobile : ourphilosophy}
          alt="Professional photographer capturing authentic moments in the Brazilian Sertão during golden hour expedition"
          className={`w-full h-full object-cover ${isMobile ? "object-center" : "object-[center_35%]"}`}
          loading="lazy"
          decoding="async"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          style={{ userSelect: "none" }}
        />
      </div>

      {/* Gradient Overlay */}
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`absolute inset-0 z-10 ${
          isMobile
            ? "bg-gradient-to-t from-black/90 via-black/70 to-transparent"
            : "bg-gradient-to-r from-black/80 via-black/60 to-transparent"
        }`}
      />

      {/* Text Content */}
      <div className="relative z-20 h-full flex items-center px-4 md:px-8 lg:px-16 py-24">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-2xl"
        >
          <motion.h2
            id="manifesto-title"
            variants={textVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
          >
            Our Philosophy
          </motion.h2>

          <motion.div variants={containerVariants} className="space-y-6 text-white/90">
            <motion.p variants={textVariants} className="text-lg md:text-xl font-light leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              Photography is not simply about recording what we see—it is about unveiling what we feel.
            </motion.p>

            <motion.p variants={textVariants} className="text-base md:text-lg font-light leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              In the Sertão, where the earth splits beneath an unforgiving sun and life endures against all odds,
              we encounter the essence of human resilience. This journey is an invitation to witness, to document,
              and to connect with the profound beauty that arises from struggle.
            </motion.p>

            <motion.p variants={textVariants} className="text-base md:text-lg font-light leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              We believe in small groups, meaningful encounters, and the transformative power of storytelling.
              Six photographers. Seven days. A lifetime of stories waiting to be revealed.
            </motion.p>

            <motion.blockquote
              variants={textVariants}
              className="border-l-2 border-white/30 pl-6 mt-8 italic text-lg md:text-xl font-light text-white/80 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
            >
              “Through concepts such as belonging, the immanent, and the ineffable, we are able to perceive beauty—and then share it with the world.”
              <footer className="text-sm mt-2 not-italic text-white/60">— Jose Bezerra</footer>
            </motion.blockquote>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.12, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
        className="hidden md:block absolute bottom-8 right-8 w-32 h-32 border border-white/20 rounded-full z-20"
      />
    </section>
  );
}
