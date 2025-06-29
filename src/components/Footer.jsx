import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Logo & Info - Spanning 8 columns */}
          <div className="md:col-span-8 flex flex-col md:flex-row items-start gap-8">
            {/* Large Logo without background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 2 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <img 
                src="/logo.png" 
                alt="Merchandise Logo" 
                className="w-36 h-36 md:w-96 md:h-56 object-contain top-9"
              />
            </motion.div>
            
            {/* Information */}
            <div className="space-y-5 mt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-2xl font-bold font-display italic mb-6">Merchandise</div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-coral flex-shrink-0" />
                    <span className="text-lg font-medium">905-237-1464</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-coral flex-shrink-0" />
                    <span className="text-lg font-medium">info@advancedprinting.org</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-coral text-lg font-medium flex-shrink-0">@</span>
                    <span className="text-lg font-medium">ap.merchandise</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                    <span className="text-lg font-medium">10330 Yonge St #1, Richmond Hill, Ontario, L4C 5N1</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Social Links - Spanning 4 columns */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8 w-full"
            >
              <h3 className="text-xl font-bold font-display italic text-center md:text-right">
                Connect With Us
              </h3>
              <div className="flex flex-wrap justify-center md:justify-end gap-4">
                {[
                  { icon: <Facebook className="w-5 h-5" />, href: "#" },
                  { icon: <Twitter className="w-5 h-5" />, href: "#" },
                  { icon: <Instagram className="w-5 h-5" />, href: "#" },
                  { icon: <MessageCircle className="w-5 h-5" />, href: "#" }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-coral transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
              
              <motion.div
                className="mt-4 bg-gradient-to-r from-coral to-orange-500 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <a 
                  href="tel:905-237-1464" 
                  className="flex items-center justify-center space-x-2 py-3 px-6 text-white font-medium"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-lg">Call Now: 905-237-1464</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="text-center text-gray-500 pt-16 mt-16 border-t border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-lg">© 2025 Advanced Printing & Merchandise. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer