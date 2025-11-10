import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import { Camera, Sun, Users, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// PC Image Imports
import lightShadow01 from "../assets/ElementsGallery/LightShadow/LightandShadow-01-PC.jpg";
import lightShadow02 from "../assets/ElementsGallery/LightShadow/LightandShadow-02-PC.jpg";
import lightShadow03 from "../assets/ElementsGallery/LightShadow/LightandShadow-03-PC.jpg";
import humanStories01 from "../assets/ElementsGallery/HumanStories/HumanStories-01-PC.jpg";
import humanStories02 from "../assets/ElementsGallery/HumanStories/HumanStories-02-PC.jpg";
import humanStories03 from "../assets/ElementsGallery/HumanStories/HumanStories-03-PC.jpg";
import humanApproach01 from "../assets/ElementsGallery/HumanApproach/HumanApproach-01-PC.jpg";
import humanApproach02 from "../assets/ElementsGallery/HumanApproach/HumanApproach-02-PC.jpg";
import humanApproach03 from "../assets/ElementsGallery/HumanApproach/HumanApproach-03-PC.jpg";

// Mobile Image Imports
import lightShadow01Mobile from "../assets/ElementsGallery/LightShadow/LightandShadow-01.jpg";
import lightShadow02Mobile from "../assets/ElementsGallery/LightShadow/LightandShadow-02.jpg";
import lightShadow03Mobile from "../assets/ElementsGallery/LightShadow/LightandShadow-03.jpg";
import humanStories01Mobile from "../assets/ElementsGallery/HumanStories/HumanStories-01.jpg";
import humanStories02Mobile from "../assets/ElementsGallery/HumanStories/HumanStories-02.jpg";
import humanStories03Mobile from "../assets/ElementsGallery/HumanStories/HumanStories-03.jpg";
import humanApproach01Mobile from "../assets/ElementsGallery/HumanApproach/HumanApproach-01.jpg";
import humanApproach02Mobile from "../assets/ElementsGallery/HumanApproach/HumanApproach-02.jpg";
import humanApproach03Mobile from "../assets/ElementsGallery/HumanApproach/HumanApproach-03.jpg";

// Interface for the gallery card data structure
interface GalleryCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  icon: React.ReactNode;
}

export default function ElementsGallery() {
  // --- Refs ---
  const containerRef = useRef<HTMLDivElement>(null);

  // --- State Hooks ---
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // --- Memoized Data ---
  // IMPROVEMENT: `useMemo` optimizes performance by recreating the list only when `isMobile` changes.
  const effectiveGalleryItems: GalleryCard[] = useMemo(() => [
    {
      id: 1,
      title: "Light & Shadow",
      subtitle: "The Dance of Elements",
      description: "Master the interplay between harsh desert light and deep shadows. Learn to capture the dramatic contrasts that define the Sertão landscape.",
      images: isMobile
        ? [lightShadow01Mobile, lightShadow02Mobile, lightShadow03Mobile]
        : [lightShadow01, lightShadow02, lightShadow03],
      icon: <Sun className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Human Stories",
      subtitle: "Portraits of Resilience",
      description: "Connect with the people of the Sertão. Capture authentic portraits that tell stories of strength, tradition, and hope in one of Brazil's most challenging regions.",
      images: isMobile
        ? [humanStories01Mobile, humanStories02Mobile, humanStories03Mobile]
        : [humanStories01, humanStories02, humanStories03],
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Human Approach",
      subtitle: "Advanced Techniques",
      description: "Practice the human approach to photography. Discover how empathy, patience, and presence open doors to authentic moments. Each frame becomes more than a picture—it becomes a shared story.",
      images: isMobile
        ? [humanApproach01Mobile, humanApproach02Mobile, humanApproach03Mobile]
        : [humanApproach01, humanApproach02, humanApproach03],
      icon: <Camera className="w-8 h-8" />
    }
  ], [isMobile]);

  // IMPROVEMENT: The slideshow state is initialized dynamically from the items array for robustness.
  const [slideshowIndices, setSlideshowIndices] = useState(() => 
    Object.fromEntries(effectiveGalleryItems.map(item => [item.id, 0]))
  );

  // --- Effect Hooks ---
  // Effect to detect screen size (mobile/desktop)
  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth <= 768);
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Effect for the automatic slideshow timer
  useEffect(() => {
    if (hoveredCard !== null) return; // Pauses the slideshow on hover

    const interval = setInterval(() => {
      setSlideshowIndices(prevIndices => {
        const newIndices = { ...prevIndices };
        effectiveGalleryItems.forEach(item => {
          newIndices[item.id] = (newIndices[item.id] + 1) % item.images.length;
        });
        return newIndices;
      });
    }, 3000); // Changes image every 3 seconds

    return () => clearInterval(interval);
  }, [hoveredCard, effectiveGalleryItems]);

  // --- Animation Hooks (Framer Motion) ---
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }),
  hover: { 
    y: -8, 
    scale: 1.015, 
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  }
};

  // --- Event Handlers ---
  const handlePrev = () => {
    if (activeCardIndex !== null) {
      const images = effectiveGalleryItems[activeCardIndex].images;
      setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const handleNext = () => {
    if (activeCardIndex !== null) {
      const images = effectiveGalleryItems[activeCardIndex].images;
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  // --- Render ---
  return (
    <section ref={containerRef} className="py-20 bg-stone-50 overflow-hidden">
      <motion.div style={{ y, opacity }} className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-800 mb-6">
            Three Essential Elements
          </h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
            Our expedition focuses on three fundamental aspects of photography that will transform 
            your artistic vision and technical expertise.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {effectiveGalleryItems.map((item, index) => {
            const currentImageIndex = slideshowIndices[item.id] || 0;
            const currentImageSrc = item.images[currentImageIndex];

            return (
              <motion.div
                key={item.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                onHoverStart={() => setHoveredCard(item.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => {
                  setActiveCardIndex(index);
                  setActiveImageIndex(currentImageIndex);
                }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col h-full">
                  <div className="relative h-80 overflow-hidden">
                    <AnimatePresence initial={false}>
                      <motion.img
                        key={currentImageSrc}
                        src={currentImageSrc}
                        alt={item.title}
                        className="absolute w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                      />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"/>
                    <motion.div
                      className="absolute top-6 left-6 text-white"
                    >
                      {item.icon}
                    </motion.div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl md:text-2xl font-light text-stone-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-stone-500 mb-4 font-medium tracking-wide uppercase">
                      {item.subtitle}
                    </p>
                    <p className="text-stone-600 leading-relaxed font-light flex-grow">
                      {item.description}
                    </p>
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredCard === item.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 h-1 bg-stone-800 origin-left w-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
           <p className="text-stone-600 mb-6 font-light">
             Ready to master these elements in the field?
           </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-black font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl drop-shadow-md"
            onClick={() => document.getElementById('invitation')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join the Expedition
            <ArrowRight className="ml-3 h-5 w-5 text-black/80 transition-transform duration-300 group-hover:translate-x-0.5" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {activeCardIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCardIndex(null)} // Closes the modal on backdrop click
          >
            {/* IMPROVEMENT: `aria-label` for accessibility */}
            <motion.button
              aria-label="Close gallery"
              onClick={() => setActiveCardIndex(null)}
              className="absolute top-4 right-4 text-white hover:text-stone-300 z-10"
              whileHover={{ scale: 1.1 }}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <motion.button
              aria-label="Previous image"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 text-white hover:text-stone-300 z-10 p-2"
              whileHover={{ scale: 1.1 }}
            >
              <ChevronLeft className="w-10 h-10" />
            </motion.button>

            <motion.button
              aria-label="Next image"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 text-white hover:text-stone-300 z-10 p-2"
              whileHover={{ scale: 1.1 }}
            >
              <ChevronRight className="w-10 h-10" />
            </motion.button>

            <AnimatePresence mode="wait">
              <motion.img
                key={effectiveGalleryItems[activeCardIndex].images[activeImageIndex]}
                src={effectiveGalleryItems[activeCardIndex].images[activeImageIndex]}
                alt={effectiveGalleryItems[activeCardIndex].title}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
                initial={{ opacity: 0.8, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.8, scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()} // Prevents clicks on the image from closing the modal
              />
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}