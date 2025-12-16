import { motion } from 'framer-motion';
import { Facebook,Instagram, Mail, Phone, MapPin, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/josebezerrafotografia",
      label: "Facebook",
      handle: "@josebezerrafotografia"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/jb_segundo/",
      label: "Instagram",
      handle: "@jb_segundo"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:josebezerra@monxorosexpedition.com",
      label: "Email",
      handle: "josebezerra@monxorosexpedition.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      href: "+1(407)4850370",
      label: "Phone",
      handle: "+1(407)4850370"
    }
  ];
interface quickLinks {
  name: string;
  href: string;
  isExternal?: boolean;
  isRoute?: boolean;
}
  const quickLinks = [
    { name: "About the Expedition", href: "#itinerary" },
    { name: "Gallery", href: "https://fineartamerica.com/profiles/jose-bezerra", isExternal: true},
    { name: "Testimonials", href: "#testimonials" },
    { name: "Apply Now", href: "#invitation" },
    { name: "About José Bezerra", href: "#about" },
    { name: "Privacy Policy", href: "/privacy-policy", isRoute: true }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="bg-stone-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 md:px-8 py-16 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Camera className="w-8 h-8 text-stone-400" />
              <h3 className="text-2xl font-light tracking-wide">
                Monxoro Photographic
              </h3>
            </div>
            
            <p className="text-stone-300 font-light leading-relaxed mb-6 max-w-md">
              An intimate photographic journey through Northeast Brazil, 
              where ancient landscapes meet timeless stories. Limited to 6 
              photographers for an authentic, transformative experience.
            </p>

            <div className="flex items-center space-x-2 text-stone-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-light">
                Caatinga Region, Northeast Brazil
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-medium mb-6 text-stone-200">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-stone-400 hover:text-white transition-colors duration-300 font-light text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-stone-400 hover:text-white transition-colors duration-300 font-light text-sm no-underline"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-medium mb-6 text-stone-200">
              Connect
            </h4>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-3 text-stone-400 hover:text-white transition-colors duration-300 group"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                  <div>
                    <div className="text-sm font-light">{social.label}</div>
                    <div className="text-xs text-stone-500">{social.handle}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="border-t border-stone-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-stone-500 text-sm">
              <div className="flex items-center space-x-2">
                <span>© 2025 Monxoro Expeditions.</span>
                <span className="hidden md:inline">All rights reserved.</span>
              </div>
              <Link 
                to="/privacy-policy" 
                className="text-stone-400 hover:text-white transition-colors duration-300 underline"
              >
                Privacy Policy
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 text-stone-500 text-sm">
              <span>Developed by</span>
              
              <span>Célio Cleiton, Software Engineer.</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </footer>
  );
}