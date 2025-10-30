import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Users, MapPin, DollarSign } from "lucide-react";
import ApplicationForm from "./ApplicationForm";

export default function InvitationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
    }, 2000);
  };

  const expeditionDetails = [
    { icon: <Calendar className="w-6 h-6" />, label: "Dates", value: "March 15–21, 2026" },
    { icon: <Users className="w-6 h-6" />, label: "Group Size", value: "6 Photographers Only" },
    { icon: <MapPin className="w-6 h-6" />, label: "Location", value: "Northeast Brazil" },
    { icon: <DollarSign className="w-6 h-6" />, label: "Investment", value: "To Be Agreed" },
  ];

  const included = [
    "7 days of guided photography instruction",
    "Private transportation throughout",
    "Professional photography guide",
    "Cultural experiences & community visits",
    "Portfolio review & critique sessions",
  ];

  return (
    <section id="invitation" className="relative overflow-hidden bg-stone-900 text-white py-20" aria-labelledby="invitation-title">
      {/* 🔹 Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-stone-900 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-stone-900 to-transparent" />

      {/* 🔹 Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        {/* 🔹 Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mb-16 text-center"
        >
          <h2 id="invitation-title" className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Your Invitation Awaits
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Join us for an intimate photographic journey through Brazil’s most captivating landscapes.
            Limited to just 6 photographers for a truly personal experience.
          </p>
        </motion.header>

        {/* 🔹 Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side – Details */}
          <motion.article
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-light mb-8">Expedition Details</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {expeditionDetails.map((detail, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                >
                  <div className="text-white/70">{detail.icon}</div>
                  <div>
                    <p className="text-sm text-white/60">{detail.label}</p>
                    <p className="font-light text-white">{detail.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-light mb-4">What’s Included</h4>
              <ul className="space-y-3">
                {included.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0">✓</div>
                    <span className="text-white/80 font-light">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.article>

          {/* Right Side – CTA */}
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="lg:pl-8"
          >
            <div className="p-8 bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl shadow-xl">
              <h3 className="text-2xl font-light text-center mb-6">Reserve Your Place</h3>

              <div className="text-center mb-8">
                <div className="text-4xl font-light mb-2">Only 6 Spots</div>
                <p className="text-white/70">Available for this exclusive expedition</p>
                <div className="mt-4 text-sm text-white/60">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2" />
                  3 spots remaining
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-white text-stone-900 py-4 rounded-full font-medium tracking-wide shadow-lg hover:bg-white/90 transition-all duration-300 mb-6"
              >
                Apply Now
              </motion.button>

              <div className="text-center text-sm text-white/60 space-y-2">
                <p>• No payment required to apply</p>
                <p>• Personal interview process</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* 🔹 Animated Modal */}
      <ApplicationForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isSubmitted={isSubmitted}
        onSubmit={handleSubmit}
      />
    </section>
  );
}
