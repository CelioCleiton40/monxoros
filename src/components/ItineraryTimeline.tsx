"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { Anchor, Mountain, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

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

export interface TimelineDay {
  day: string;
  title: string;
  location: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
  image: string;
  gallery: string[];
}

export interface ItineraryTimelineProps {
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  itineraryDays?: TimelineDay[];
  autoplay?: boolean;
}

// Accessible thumbnail button with ARIA and keyboard support
function ThumbnailButton(props: {
  isSelected: boolean;
  onSelect: () => void;
  imageSrc: string;
  alt: string;
}) {
  const { isSelected, onSelect, imageSrc, alt } = props;
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      aria-label={isSelected ? `${alt} selected` : `Select ${alt}`}
      className={`w-8 h-8 rounded-sm overflow-hidden border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
        isSelected ? "border-white shadow-lg scale-110" : "border-white/50 hover:border-white/80"
      }`}
    >
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-full object-cover"
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        style={{ userSelect: "none" }}
      />
    </button>
  );
}

export default function ItineraryTimeline({
  id = "itinerary",
  className = "",
  title = "A Week of Immersive Exploration",
  subtitle = "Step into Brazil’s Northeast, a place of light, texture, and resilience, where your photography becomes an act of discovery.",
  ctaText = "Reserve Your Spot",
  onCtaClick,
  itineraryDays,
  autoplay = false,
}: ItineraryTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImages, setSelectedImages] = useState<{[key: number]: number}>({});
  const [activeDay, setActiveDay] = useState(0);

  // --- State Hooks ---
  const [isMobile, setIsMobile] = useState(false);

  // --- Effect Hooks ---
  // Effect to detect screen size (mobile/desktop)
  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth <= 768);
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // --- Memoized Data ---
  // Default itinerary content preserved as originally provided
  const defaultItineraryDays: TimelineDay[] = useMemo(() => [
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
  ], [isMobile]);

  const itineraryEffective: TimelineDay[] = itineraryDays ?? defaultItineraryDays;

  const onThumbnailSelect = useCallback((dayIndex: number, imgIndex: number) => {
    setSelectedImages((prev) => ({ ...prev, [dayIndex]: imgIndex }));
  }, []);

  const handleNextDay = useCallback(() => {
    setActiveDay((prev) => (prev + 1) % itineraryEffective.length);
  }, [itineraryEffective.length]);

  const handlePrevDay = useCallback(() => {
    setActiveDay((prev) => (prev - 1 + itineraryEffective.length) % itineraryEffective.length);
  }, [itineraryEffective.length]);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNextDay, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNextDay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  
  return (
    <section
      id={id}
      ref={containerRef}
      className={cn("py-20 bg-white", className)}
      aria-labelledby={`${id}-title`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 id={`${id}-title`} className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-800 mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Layout principal inspirado em AnimatedTestimonials (grid 2 colunas) */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Coluna da imagem com animação */}
          <div>
            <div className="relative min-h-[18rem] md:min-h-[22rem] w-full">
              <AnimatePresence>
                {(() => {
                  const day = itineraryEffective[activeDay];
                  const currentImage = day.gallery[selectedImages[activeDay] || 0] || day.image;
                  return (
                    <motion.div
                      key={currentImage}
                      initial={{ opacity: 0, scale: 0.9, z: -100, rotate: randomRotateY() }}
                      animate={{ opacity: 1, scale: 1, z: 0, rotate: 0, y: [0, -40, 0] }}
                      exit={{ opacity: 0, scale: 0.9, z: 100, rotate: randomRotateY() }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <img
                        src={currentImage}
                        alt={day.title}
                        width={900}
                        height={600}
                        draggable={false}
                        className="h-full w-full rounded-3xl object-contain bg-stone-100 p-1 md:p-2"
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                      />
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>
            {/* Thumbnails acessíveis para o dia ativo */}
            <div
              className="mt-3 flex gap-1 justify-center"
              role="group"
              aria-label={`Selecionar imagem para ${itineraryEffective[activeDay].title}`}
            >
              {itineraryEffective[activeDay].gallery.map((image, imgIndex) => (
                <ThumbnailButton
                  key={imgIndex}
                  isSelected={(selectedImages[activeDay] || 0) === imgIndex}
                  onSelect={() => onThumbnailSelect(activeDay, imgIndex)}
                  imageSrc={image}
                  alt={`${itineraryEffective[activeDay].title} ${imgIndex + 1}`}
                />
              ))}
            </div>

            {/* Controles abaixo da imagem no mobile */}
            <div className="mt-4 flex gap-4 justify-center md:hidden">
              <button
                onClick={handlePrevDay}
                className="h-8 w-8 rounded-full bg-stone-200 hover:bg-stone-300 transition-colors flex items-center justify-center group/button focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-label="Previous day"
              >
                <svg className="h-5 w-5 text-stone-800 group-hover/button:-rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={handleNextDay}
                className="h-8 w-8 rounded-full bg-stone-200 hover:bg-stone-300 transition-colors flex items-center justify-center group/button focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-label="Next day"
              >
                <svg className="h-5 w-5 text-stone-800 group-hover/button:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Coluna de conteúdo do dia ativo */}
          <div className="flex justify-between flex-col py-2">
            <motion.div
              key={activeDay}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              role="region"
              aria-label={`Day ${itineraryEffective[activeDay].day}: ${itineraryEffective[activeDay].title}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-light text-stone-800">
                    {itineraryEffective[activeDay].title}
                  </h3>
                  <p className="text-sm text-stone-500">Day {itineraryEffective[activeDay].day}</p>
                </div>
                <div className="text-stone-600" aria-hidden="true">{itineraryEffective[activeDay].icon}</div>
              </div>

              <p className="text-sm text-stone-600 mb-4 font-medium tracking-wide">
                📍 {itineraryEffective[activeDay].location}
              </p>

              {/* Animação leve palavra por palavra, mantendo o texto intacto */}
              <motion.p className="text-base md:text-lg text-stone-700 mt-2 leading-relaxed font-light">
                {itineraryEffective[activeDay].description.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 4 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>

              <div className="mt-6">
                <h4 className="text-stone-800 font-medium mb-2">Highlights</h4>
                <ul className="space-y-1" role="list">
                  {itineraryEffective[activeDay].highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-stone-700 flex items-center" role="listitem">
                      <span className="w-1.5 h-1.5 bg-stone-500 rounded-full mr-2" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Controles (prev/next) visíveis apenas em desktop */}
            <div className="hidden md:flex gap-4 pt-4">
              <button
                onClick={handlePrevDay}
                className="h-8 w-8 rounded-full bg-stone-200 hover:bg-stone-300 transition-colors flex items-center justify-center group/button focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-label="Previous day"
              >
                <svg className="h-5 w-5 text-stone-800 group-hover/button:-rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={handleNextDay}
                className="h-8 w-8 rounded-full bg-stone-200 hover:bg-stone-300 transition-colors flex items-center justify-center group/button focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-label="Next day"
              >
                <svg className="h-5 w-5 text-stone-800 group-hover/button:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTAs – primary and secondary standardized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="flex items-center justify-center mb-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-sm font-medium shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-amber-500 animate-pulse" aria-hidden="true" />
              Limited seats available
            </span>
          </div>
          <p className="text-stone-700 mb-6 font-medium text-lg">
            Ready to embark on this transformative journey?
          </p>
          <div className="flex items-center justify-center">
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-black font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl drop-shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              onClick={() => {
                if (onCtaClick) {
                  onCtaClick();
                } else {
                  document.getElementById("invitation")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              aria-label={ctaText}
            >
              {ctaText}
              <ArrowRight className="ml-3 h-5 w-5 text-black/80 transition-transform duration-300 group-hover:translate-x-0.5" />
            </motion.button>
          </div>
          <p className="mt-3 text-xs text-stone-500">No commitment — join a small group of passionate photographers.</p>
        </motion.div>
      </div>
    </section>
  );
}

