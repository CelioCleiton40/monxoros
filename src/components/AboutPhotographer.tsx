import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Camera, Award, Globe, Heart, ArrowRight } from "lucide-react";
import JbSegundo from "../assets/AboutPhotographer/Photographer/JbSegundo.jpg";

const AboutPhotographer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "International Recognition",
      description:
        "Featured in National Geographic, TIME, and Aperture Magazine",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Experience",
      description: "Over 16 years documenting communities and culture across Brazil’s Northeast.",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Master Educator",
      description: "Mentored over 200 photographers worldwide",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Cultural Advocate",
      description: "Dedicated to authentic storytelling and community respect",
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 bg-stone-50 overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 md:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }} // Adicionado um 'ease' para suavidade
            className="relative"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src={JbSegundo}
                  alt="José Bezerra - Master photographer specializing in Northeast Brazil landscapes and cultural documentation"
                  className="w-full h-auto aspect-[3/4] object-cover"
                  loading="eager"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  style={{ userSelect: "none" }}
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <blockquote className="text-white text-lg font-light italic leading-relaxed">
                    "Photography is not about the camera—it's about seeing with
                    your heart and capturing the soul of a moment."
                  </blockquote>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="absolute -top-8 -right-8 w-32 h-32 border-2 border-stone-300 rounded-full"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.05, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.6 }}
                className="absolute -bottom-12 -left-12 w-48 h-48 border border-stone-300 rounded-full"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
            
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-800 mb-4"
              >
                Meet Your Guide
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl md:text-2xl font-light text-stone-600 mb-6"
              >
                Jose Bezerra
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-stone-500 font-medium tracking-wide uppercase text-sm"
              >
                Master Documentary Photographer & Cultural Storyteller
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <p className="text-stone-700 leading-relaxed font-light text-lg">
                Born in the heart of Brazil’s Northeast, Jose Bezerra has spent the past eleven years capturing the resilience and quiet beauty of communities across the region. His work goes beyond documentation—it serves as a bridge between worlds, inviting viewers to connect with the profound humanity found in the everyday lives of the people he photographs.
              </p>

              <p className="text-stone-600 leading-relaxed font-light">
                Jose Bezerra believes that the most powerful photographs emerge from genuine human connection. His approach blends technical precision with deep cultural empathy, ensuring that every image honors both the subject and the story it reveals.
His photography is also used by social scientists, universities, and educators to illustrate the culture of the Northeast, providing a visual window into the traditions, labor, and daily life of these communities.
              </p>

              <p className="text-stone-600 leading-relaxed font-light">
                “The Sertão taught me that beauty isn’t found in perfection—it’s discovered in authenticity, in the raw truth of human experience. This expedition is my invitation for you to see with different eyes and to capture stories that truly matter.”
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-stone-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-stone-600 mt-1">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-800 mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-stone-600 font-light leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-stone-100 p-6 rounded-lg border-l-4 border-stone-400"
            >
              <p className="text-stone-700 font-light italic leading-relaxed">
                "Every photographer I've had the privilege to mentor has taught
                me something new. This expedition isn't just about what I can
                share with you—it's about the stories we'll discover together
                and the perspectives you'll bring to this ancient landscape."
              </p>
              <p className="text-stone-500 text-sm mt-3 font-medium">
                — Jose Bezerra
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          onClick={() => {
            window.open('discover-my-work-products');
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="mt-12 group inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-md font-medium text-sm hover:bg-gray-800 transition-colors duration-200"
        >
          Discover My Work & Products
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default AboutPhotographer;
