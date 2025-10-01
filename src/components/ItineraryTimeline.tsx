import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Anchor,
  Footprints,
  Mountain,
  Sailboat,
  User,
} from "lucide-react";

interface TimelineDay {
  day: number;
  title: string;
  location: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
  image: string;
}

const itinerary: TimelineDay[] = [
  {
  day: 1,
  title: "Arrival in the Mountainous Sertão",
  location: "Porta Alegre, Rio Grande do Norte",
  description: "Upon arrival and check-in, we gather for introductions and a briefing about the journey ahead. Our first immersion takes us to a quilombola community, where we will document traditions and daily life. Later, we explore the mountain landscapes, photographing human presence in activities such as football, dance, and labor routines. The day closes at a scenic viewpoint, capturing the sunset over the highlands.",
  highlights:[
    "Arrival & check-in in Portalegre",
    "Group introductions & immersion briefing",
    "Visit to a quilombola community",
    "Documentary photography of local life and traditions",
    "Sunset photography at a mountain viewpoint"
  ],
  icon: <Mountain className="w-6 h-6" />,
  image: "src/assets/exploration/Schedule-day1-3/Schedule-day1-3-Portalegre-01.jpg"
},
  {
    day: 2,
    title: "Journey into the Sertão",
    location: "Welcome to the mountain refuge of Porta Alegre",
    description:
      "Travel deep into the interior. First encounters with the dramatic landscape and local communities.",
    highlights: [
      "Landscape photography",
      "Local market portraits",
      "Sunset at Porta Alegre",
      "Traditional dinner",
    ],
    icon: <Mountain className="w-6 h-6" />,
    image:
      "src/assets/exploration/Schedule-day1-3/Schedule-day1-3-Portalegre-02.jpg",
  },
  {
  day: 3,
  title: "Arrival at the Potiguar Atlantis",
  location: "São Rafael, Rio Grande do Norte",
  description: "Welcome to São Rafael. After check-in, we'll have an introduction to the region and prepare for our first major experience: a boat trip on the Armando Ribeiro Gonçalves Dam to witness the iconic sunset over the submerged city.",
  highlights: [
    "Arrival & Check-in",
    "Briefing on dam activities",
    "Sunset boat tour",
    "Photography of the submerged church tower",
    "Welcome dinner with local cuisine"
  ],
  icon: <Anchor className="w-6 h-6" />,
  image: "src/assets/exploration/Schedule-day1-3/Schedule-day1-3-Portalegre-03.jpg"
},
  {
  day: 4,
  title: "Trails and Traditions",
  location: "Hills & Rural Area of São Rafael, RN",
  description: "Today, we'll explore the terrain around São Rafael. The morning will be dedicated to hiking a trail through the hills, focusing on landscape photography of the caatinga biome and the views overlooking the dam. In the afternoon, we'll visit a rural community to learn about life in the sertão and listen to the stories of those who live in harmony with this environment.",
  highlights: [
    "Guided hike through the hills",
    "Caatinga landscape photography",
    "Visit to a rural property",
    "Conversation circle with locals",
    "Late afternoon 'sertanejo' coffee"
  ],
  icon: <Footprints className="w-6 h-6" />,
  image: "src/assets/exploration/Schedule-day3-5/Schedule-day3-5-SaoRafael-05.jpg"
},
  {
    day: 5,
    title: "Quilombola Culture and Heritage",
    location: "Jucuri Quilombola Community, São Rafael",
    description:
      "A day of deep immersion in the Jucuri Quilombola Community. We will go beyond photographic technique to connect with the stories, culture, and daily life of the residents. The focus will be on creating respectful portraits and documenting the community's richness, listening to and learning from its elders.",
    highlights: [
      "Conversation circle with community leaders",
    "Experience with local culture and crafts",
    "Portrait workshop with residents",
    "Traditional lunch in the community",
    "Storytelling with the elders"
    ],
    icon: <User className="w-6 h-6" />,
    image:
      "src/assets/exploration/Schedule-day3-5/Schedule-day3-5-SaoRafael-03.jpg",
  },
  {
    day: 6,
    title: "The Peninsula of Wind and Salt",
    location: "Galos & Galinhos, Rio Grande do Norte",
    description:
      "We will explore the Galinhos peninsula on an unforgettable boat trip. We'll navigate through sea arms, visit the immense white pyramids of the salt flats, climb the 'Duna do Capim' (Grass Dune) for a 360º view, and experience the tranquility of a place where time moves slower.",
    highlights: [
      "Boat tour around the peninsula",
    "Visit to the salt flats and salt pyramids",
    "Climb on the Duna do Capim",
    "Donkey cart ride through the village",
    "Sunset photography at the lighthouse"
    ],
    icon: <Sailboat className="w-6 h-6" />,
    image:
      "src/assets/exploration/Schedule-day5-7/Schedule-day5-7-Galinhos-02.jpg",
  },
  {
    day: 7,
    title: "Reflection & Departure",
    location: "Return to Recife",
    description:
      "Final portfolio review, group critique, and celebration of the journey. Departure preparations.",
    highlights: [
      "Portfolio presentation",
      "Group critique",
      "Celebration dinner",
      "Airport transfer",
    ],
    icon: <MapPin className="w-6 h-6" />,
    image:
      "src/assets/exploration/Schedule-day5-7/Schedule-day5-7-Galinhos-03.jpg",
  },
];

export default function ItineraryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

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
    <section ref={containerRef} className="py-20 bg-white">
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
            Step into Brazil’s Northeast, a place of light, texture, and resilience, where your photography becomes an act of discovery.
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

          {itinerary.map((day, index) => (
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
                  <div className="h-48 overflow-hidden">
                    <motion.img
                      src={day.image}
                      alt={day.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
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
