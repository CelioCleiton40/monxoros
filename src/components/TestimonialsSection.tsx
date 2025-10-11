import { motion } from 'framer-motion';
import { Star, Quote, Play } from 'lucide-react';
import { useState } from 'react';

// Import dos assets locais
import testimonialsVideo from "../assets/TestimonialsSection/video/testimonials-01.webm";
import testimonialsPoster from "../assets/TestimonialsSection/img/testimonials-img-01.png";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  video: string;
  poster: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 4,
    name: "Carlos Mendes",
    role: "Documentary Filmmaker",
    company: "Nordeste Films",
    content: "The cultural and visual richness of the Sertão is incomparable. This expedition provided me with exceptional material for my next documentary about Northeast Brazil.",
    video: testimonialsVideo,
    poster: testimonialsPoster,
    rating: 5
  },
  {
    id: 5,
    name: "Lucia Ferreira",
    role: "Visual Artist",
    company: "Atelier Sertão",
    content: "The arid landscapes and the strength of Sertão nature inspired a new series of works. The expedition connected my art with northeastern roots in a profound way.",
    video: "https://www.w3schools.com/html/movie.mp4",
    poster: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    id: 6,
    name: "Roberto Lima",
    role: "Journalist",
    company: "Revista Nordeste",
    content: "An exceptional journalistic journey. Each stop revealed authentic stories and unique characters that enriched my report on Sertão culture.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.header
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            What Our Participants Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Discover how our photographic expedition to Sertão has impacted the lives and careers 
            of photographers, artists and content creators
          </p>
        </motion.header>

        {/* Testimonials Grid */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.section>

        {/* Call to Action */}
        <motion.footer
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-base text-gray-600 mb-6 font-light">
            Ready to create your own story in the Sertão?
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-md font-medium text-sm hover:bg-gray-800 transition-colors duration-200"
          >
            Reserve Your Spot
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.footer>
      </div>
    </section>
  );
};

// Card com vídeo otimizado
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      viewport={{ once: true }}
      className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
    >
      {/* Video */}
      <div className="relative mb-6 rounded-lg overflow-hidden w-full aspect-[1/1] md:aspect-video bg-gray-100">
        {!isPlaying ? (
          <>
            {/* Poster estático */}
            <img
              src={testimonial.poster}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              loading="lazy"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              style={{ userSelect: 'none' }}
            />
            {/* Botão Play */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-3xl md:text-5xl hover:bg-black/40 transition-colors duration-200"
            >
              <Play className="w-8 h-8 md:w-12 md:h-12" />
            </button>
          </>
        ) : (
          <video
            src={testimonial.video}
            className="w-full h-full object-cover"
            controls
            autoPlay
            playsInline
            controlsList="nodownload noplaybackrate"
            onContextMenu={(e) => e.preventDefault()}
            disablePictureInPicture
          />
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col mb-4">
        <h3 className="text-base font-medium text-gray-900">{testimonial.name}</h3>
        <p className="text-sm text-gray-600">{testimonial.role}</p>
        <p className="text-xs text-gray-500">{testimonial.company}</p>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${i < testimonial.rating ? 'text-gray-800 fill-gray-800' : 'text-gray-300'}`}
          />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-gray-700 text-sm leading-relaxed font-light">
        <Quote className="w-4 h-4 text-gray-400 mb-2 inline-block mr-1" />
        {testimonial.content}
      </blockquote>
    </motion.article>
  );
};

export default TestimonialsSection;
