import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown, Users, Calendar, MapPin } from "lucide-react";
import hero from "../assets/HeroSection/img/Hero.jpg"
import heroMobile from "../assets/HeroSection/img/Hero-Mobile.jpg"

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);



  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {!isMobile ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            poster={hero}
            onContextMenu={(e) => e.preventDefault()}
            controlsList="nodownload noplaybackrate"
          >
            {/*<source
              src="https://videocdn.cdnpk.net/videos/9a9c4acb-abde-432d-98a1-a613357c6b41/horizontal/previews/clear/large.mp4?token=exp=1758283822~hmac=07bd264a0b13d8aa189f128d8f4e08bf07626946d022257fcb025d98f6ef3c95"
              type="video/mp4"
            />}
            {/* Fallback image for unsupported browsers */}
            <img
              src={hero}
              alt="Dramatic Sertão landscape at golden hour - Photography expedition through Northeast Brazil's Caatinga biome"
              loading="eager"
              className="w-full h-full object-cover"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              style={{ userSelect: 'none' }}
            />
          </video>
        ) : (
          <img
            src={heroMobile}
            alt="Dramatic Sertão landscape at golden hour - Photography expedition through Northeast Brazil's Caatinga biome"
            loading="eager"
            className="w-full h-full object-cover"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            style={{ userSelect: 'none' }}
          />
        )}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-6 text-amber-400 drop-shadow-lg">
            Monxoros Photographic
            <br />
            <span className="text-amber-400 drop-shadow-lg">Expedition</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed mb-8 max-w-2xl drop-shadow-md">
            An intimate journey through Brazil's most authentic landscapes. 
            Capture the essence of a land where every image tells a profound story.
          </p>

          {/* Journey Details */}
          <div className="flex flex-wrap gap-6 mb-8 items-center justify-center text-white/80 drop-shadow-sm">
            <div className="flex items-center gap-2 drop-shadow-sm">
              <Users className="w-5 h-5 text-amber-400 drop-shadow-sm" />
              <span className="text-sm md:text-base">6 Photographers</span>
            </div>
            <div className="flex items-center gap-2 drop-shadow-sm">
              <Calendar className="w-5 h-5 text-amber-400 drop-shadow-sm" />
              <span className="text-sm md:text-base">7 Days</span>
            </div>
            <div className="flex items-center gap-2 drop-shadow-sm">
              <MapPin className="w-5 h-5 text-amber-400 drop-shadow-sm" />
              <span className="text-sm md:text-base">Northern or Northeastern Brazil</span>
            </div>
            <div className="flex items-center gap-2 drop-shadow-sm">
              <Calendar className="w-5 h-5 text-amber-400 drop-shadow-sm" />
              <span className="text-sm md:text-base">March 2026</span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('invitation')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl drop-shadow-md"
          >
            Reserve Your Spot
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/70 cursor-pointer"
          onClick={() => {
            document
              .getElementById("manifesto")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
