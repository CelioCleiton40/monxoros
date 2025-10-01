import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Camera, Sun, Users, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  images: string[]; // galeria do card
  icon: React.ReactNode;
}

const galleryItems: GalleryCard[] = [
  {
    id: 1,
    title: "Light & Shadow",
    subtitle: "The Dance of Elements",
    description: "Master the interplay between harsh desert light and deep shadows. Learn to capture the dramatic contrasts that define the Sertão landscape.",
    image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=dramatic%20desert%20light%20and%20shadow%20sertao%20landscape%20golden%20hour%20photography&image_size=square_hd",
    images: [
      "src/assets/ElementsGallery/LightShadow/LighandShadow-01.jpg",
      "src/assets/ElementsGallery/LightShadow/LightandShadow-02.jpg",
      "src/assets/ElementsGallery/LightShadow/LightandShadow-03.jpg"
    ],
    icon: <Sun className="w-8 h-8" />
  },
  {
    id: 2,
    title: "Human Stories",
    subtitle: "Portraits of Resilience",
    description: "Connect with the people of the Sertão. Capture authentic portraits that tell stories of strength, tradition, and hope in one of Brazil's most challenging regions.",
    image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=authentic%20portrait%20elderly%20sertao%20person%20weathered%20face%20storytelling%20black%20and%20white&image_size=square_hd",
    images: [
      "src/assets/ElementsGallery/HumanStories/HumanStories-01.jpg",
      "src/assets/ElementsGallery/HumanStories/HumanStories-02.jpg",
      "src/assets/ElementsGallery/HumanStories/HumanStories-03.jpg"
    ],
    icon: <Users className="w-8 h-8" />
  },
  {
    id: 3,
    title: "Human Approach",
    subtitle: "Advanced Techniques",
    description: "Practice the human approach to photography. Discover how empathy, patience, and presence open doors to authentic moments. Each frame becomes more than a picture—it becomes a shared story.",
    image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20photographer%20with%20camera%20desert%20environment%20technical%20equipment%20artistic%20composition&image_size=square_hd",
    images: [
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=photographer%20desert...",
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=photography%20setup...",
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=human%20interaction..."
    ],
    icon: <Camera className="w-8 h-8" />
  }
];

export default function ElementsGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" }
    }),
    hover: { y: -10, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }
  };

  const handlePrev = () => {
    if (activeCardIndex !== null) {
      const images = galleryItems[activeCardIndex].images;
      setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const handleNext = () => {
    if (activeCardIndex !== null) {
      const images = galleryItems[activeCardIndex].images;
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }
  };

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
          {galleryItems.map((item, index) => (
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
                setActiveImageIndex(0);
              }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === item.id ? 0.7 : 0.3 }}
                    className="absolute inset-0 bg-black transition-opacity duration-300"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredCard === item.id ? 1 : 0.8,
                      scale: hoveredCard === item.id ? 1.1 : 1
                    }}
                    className="absolute top-6 left-6 text-white"
                  >
                    {item.icon}
                  </motion.div>
                </div>
                <div className="p-6">
                  <motion.h3
                    className="text-xl md:text-2xl font-light text-stone-800 mb-2"
                    animate={{ color: hoveredCard === item.id ? "#1c1917" : "#44403c" }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-sm text-stone-500 mb-4 font-medium tracking-wide uppercase">
                    {item.subtitle}
                  </p>
                  <motion.p
                    className="text-stone-600 leading-relaxed font-light"
                    animate={{ opacity: hoveredCard === item.id ? 1 : 0.8 }}
                  >
                    {item.description}
                  </motion.p>
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredCard === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-1 bg-stone-800 origin-left"
                  style={{ width: '100%' }}
                />
              </div>
            </motion.div>
          ))}
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
            className="bg-stone-800 text-white px-8 py-3 rounded-full hover:bg-stone-700 transition-colors duration-300 font-light tracking-wide"
            onClick={() => {
              document.getElementById('invitation')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Join the Expedition
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
          >
            <button
              onClick={() => setActiveCardIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-stone-300"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-6 text-white hover:text-stone-300"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-6 text-white hover:text-stone-300"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.img
              key={galleryItems[activeCardIndex].images[activeImageIndex]}
              src={galleryItems[activeCardIndex].images[activeImageIndex]}
              alt={galleryItems[activeCardIndex].title}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
