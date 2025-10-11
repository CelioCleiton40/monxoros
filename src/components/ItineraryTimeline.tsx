import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Anchor, Mountain } from "lucide-react";

// Import das imagens
import portalegre01PC from "../assets/exploration/Schedule-day1-3/Schedule-day1-3-Portalegre-01-PC.jpg";
import portalegre02PC from "../assets/exploration/Schedule-day1-3/Schedule-day1-3-Portalegre-02-PC.jpg";
import portalegre03PC from "../assets/exploration/Schedule-day1-3/Schedule-day1-3-Portalegre-03-PC.jpg";
import portalegre04PC from "../assets/exploration/Schedule-day1-3/Schedule-day1-3-Portalegre-04-PC.jpg";
import portalegre05PC from "../assets/exploration/Schedule-day1-3/Schedule-day1-3-Portalegre-05-PC.jpg";

import portalegre01 from "../assets/exploration/Schedule-day1-3/Schedule-day1-3-Portalegre-01.jpg";
import portalegre02 from "../assets/exploration/Schedule-day1-3/Schedule-day1-3-Portalegre-02.jpg";
import portalegre03 from "../assets/exploration/Schedule-day1-3/Schedule-day1-3-Portalegre-03.jpg";
import portalegre04 from "../assets/exploration/Schedule-day1-3/Schedule-day1-3-Portalegre-04.jpg";
import portalegre05 from "../assets/exploration/Schedule-day1-3/Schedule-day1-3-Portalegre-05.jpg";

import saorafael01PC from "../assets/exploration/Schedule-day3-5/Schedule-day3-5-SaoRafael-01-PC.jpg";
import saorafael02PC from "../assets/exploration/Schedule-day3-5/Schedule-day3-5-SaoRafael-02-PC.jpg";
import saorafael03PC from "../assets/exploration/Schedule-day3-5/Schedule-day3-5-SaoRafael-03-PC.jpg";
import saorafael04PC from "../assets/exploration/Schedule-day3-5/Schedule-day3-5-SaoRafael-04-PC.jpg";
import saorafael05PC from "../assets/exploration/Schedule-day3-5/Schedule-day3-5-SaoRafael-05-PC.jpg";

import saorafael01 from "../assets/exploration/Schedule-day3-5/Schedule-day3-5-SaoRafael-01.jpg";
import saorafael02 from "../assets/exploration/Schedule-day3-5/Schedule-day3-5-SaoRafael-02.jpg";
import saorafael03 from "../assets/exploration/Schedule-day3-5/Schedule-day3-5-SaoRafael-03.jpg";
import saorafael04 from "../assets/exploration/Schedule-day3-5/Schedule-day3-5-SaoRafael-04.jpg";
import saorafael05 from "../assets/exploration/Schedule-day3-5/Schedule-day3-5-SaoRafael-05.jpg";

import galinhos01PC from "../assets/exploration/Schedule-day5-7/Schedule-day5-7-Galinhos-01-PC.jpg";
import galinhos02PC from "../assets/exploration/Schedule-day5-7/Schedule-day5-7-Galinhos-02-PC.jpg";
import galinhos03PC from "../assets/exploration/Schedule-day5-7/Schedule-day5-7-Galinhos-03-PC.jpg";
import galinhos04PC from "../assets/exploration/Schedule-day5-7/Schedule-day5-7-Galinhos-04-PC.jpg";
import galinhos05PC from "../assets/exploration/Schedule-day5-7/Schedule-day5-7-Galinhos-05-PC.jpg";

import galinhos01 from "../assets/exploration/Schedule-day5-7/Schedule-day5-7-Galinhos-01.jpg";
import galinhos02 from "../assets/exploration/Schedule-day5-7/Schedule-day5-7-Galinhos-02.jpg";
import galinhos03 from "../assets/exploration/Schedule-day5-7/Schedule-day5-7-Galinhos-03.jpg";
import galinhos04 from "../assets/exploration/Schedule-day5-7/Schedule-day5-7-Galinhos-04.jpg";
import galinhos05 from "../assets/exploration/Schedule-day5-7/Schedule-day5-7-Galinhos-05.jpg";

interface TimelineDay {
  day: string;
  title: string;
  location: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
  image: string;
  gallery: string[];
}

// Using itineraryEffective instead of itinerary

export default function ItineraryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [selectedImages, setSelectedImages] = useState<{[key: number]: number}>({});

  // Detecta viewport para alternar imagens PC/Mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth <= 768);
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const itineraryEffective: TimelineDay[] = [
    {
      day: "1 - 3",
      title: "Arrival in the Mountainous Sertão",
      location: "Porta Alegre, Rio Grande do Norte",
      description:
        "Upon arrival and check-in, we gather for introductions and a briefing about the journey ahead. Our first immersion takes us to a quilombola community, where we will document traditions and daily life. Later, we explore the mountain landscapes, photographing human presence in activities such as football, dance, and labor routines. The day closes at a scenic viewpoint, capturing the sunset over the highlands.",
      highlights: [
        "Arrival & check-in in Portalegre",
        "Group introductions & immersion briefing",
        "Visit to a quilombola community",
        "Documentary photography of local life and traditions",
        "Sunset photography at a mountain viewpoint",
      ],
      icon: <Mountain className="w-6 h-6" />,
      image: isMobile ? portalegre01 : portalegre01PC,
      gallery: isMobile
        ? [portalegre01, portalegre02, portalegre03, portalegre04, portalegre05]
        : [portalegre01PC, portalegre02PC, portalegre03PC, portalegre04PC, portalegre05PC],
    },
    {
      day: "3 - 5",
      title: "Arrival at the Potiguar Atlantis",
      location: "São Rafael, Rio Grande do Norte",
      description:
        "Welcome to São Rafael. After check-in, we'll have an introduction to the region and prepare for our first major experience: a boat trip on the Armando Ribeiro Gonçalves Dam to witness the iconic sunset over the submerged city.",
      highlights: [
        "Arrival & Check-in",
        "Briefing on dam activities",
        "Sunset boat tour",
        "Photography of the submerged church tower",
        "Welcome dinner with local cuisine",
      ],
      icon: <Mountain className="w-6 h-6" />,
      image: isMobile ? saorafael05 : saorafael05PC,
      gallery: isMobile
        ? [saorafael01, saorafael02, saorafael03, saorafael04, saorafael05]
        : [saorafael01PC, saorafael02PC, saorafael03PC, saorafael04PC, saorafael05PC],
    },
    {
      day: "5 - 7",
      title: "The Peninsula of Wind and Salt",
      location: "Galos & Galinhos, Rio Grande do Norte",
      description:
        "We will explore the Galinhos peninsula on an unforgettable boat trip. We'll navigate through sea arms, visit the immense white pyramids of the salt flats, climb the 'Duna do Capim' (Grass Dune) for a 360º view, and experience the tranquility of a place where time moves slower.",
      highlights: [
        "Boat tour around the peninsula",
        "Visit to the salt flats and salt pyramids",
        "Climb on the Duna do Capim",
        "Donkey cart ride through the village",
        "Sunset photography at the lighthouse",
      ],
      icon: <Anchor className="w-6 h-6" />,
      image: isMobile ? galinhos03 : galinhos03PC,
      gallery: isMobile
        ? [galinhos01, galinhos02, galinhos03, galinhos04, galinhos05]
        : [galinhos01PC, galinhos02PC, galinhos03PC, galinhos04PC, galinhos05PC],
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="itinerary"
    ref={containerRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-800 mb-6">
            A Week of Immersive Exploration
          </h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
            Step into Brazil’s Northeast, a place of light, texture, and
            resilience, where your photography becomes an act of discovery.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-stone-200" />

          {itineraryEffective.map((day, index) => (
            <motion.div
              key={day.day}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-stone-800 rounded-full border-4 border-white shadow-lg z-10"
              />

              {/* Content Card */}
              <div
                className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden border border-stone-100"
                >
                  {/* Image */}
                  <div className="h-48 overflow-hidden relative">
                    <motion.img
                      src={day.gallery[selectedImages[index] || 0]}
                      alt={day.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Mini Gallery Thumbnails */}
                    <div className="absolute bottom-2 left-2 right-2 flex gap-1 justify-center">
                      {day.gallery.map((image, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() => setSelectedImages(prev => ({...prev, [index]: imgIndex}))}
                          className={`w-8 h-8 rounded-sm overflow-hidden border-2 transition-all duration-200 ${
                            (selectedImages[index] || 0) === imgIndex 
                              ? 'border-white shadow-lg scale-110' 
                              : 'border-white/50 hover:border-white/80'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${day.title} ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            draggable={false}
                            onContextMenu={(e) => e.preventDefault()}
                            onDragStart={(e) => e.preventDefault()}
                            style={{ userSelect: 'none' }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Day Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-light text-stone-800">
                        Day {day.day}
                      </span>
                      <div className="text-stone-600">{day.icon}</div>
                    </div>

                    {/* Title & Location */}
                    <h3 className="text-xl font-medium text-stone-800 mb-2">
                      {day.title}
                    </h3>
                    <p className="text-sm text-stone-500 mb-4 font-medium tracking-wide">
                      📍 {day.location}
                    </p>

                    {/* Description */}
                    <p className="text-stone-600 mb-4 font-light leading-relaxed">
                      {day.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-stone-700 mb-2">
                        Highlights:
                      </h4>
                      <ul className="space-y-1">
                        {day.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-stone-600 flex items-center"
                          >
                            <span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-2" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-stone-600 mb-6 font-light">
            Ready to embark on this transformative journey?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-stone-800 text-white px-8 py-3 rounded-full hover:bg-stone-700 transition-colors duration-300 font-light tracking-wide"
            onClick={() => {
              document
                .getElementById("invitation")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Reserve Your Spot
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
