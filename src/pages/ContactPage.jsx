import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Sparkles, Star } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-br from-coral/10 via-teal/10 to-purple/10 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="section-title gradient-text font-display mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Get In Touch
              </motion.h1>
              <motion.p 
                className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Ready to bring your custom merchandise ideas to life? We're here to help you every step of the way.
              </motion.p>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-coral to-teal mx-auto rounded-full mt-8"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
            <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-blue-300 to-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '3s'}}></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
              >
                <div>
                  <motion.h2 
                    className="text-4xl font-bold text-dark mb-8 font-display"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Contact Information
                  </motion.h2>
                  <motion.p 
                    className="text-gray-600 text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Have questions about our services or need a custom quote? 
                    We'd love to hear from you. Reach out using any of the methods below.
                  </motion.p>
                </div>

                <div className="space-y-8">
                  <motion.div
                    className="flex items-center space-x-6 p-8 bg-white rounded-3xl shadow-xl hover-lift group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-coral to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark text-xl mb-2">Phone</h3>
                      <p className="text-gray-600 text-lg">905-237-1464</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-6 p-8 bg-white rounded-3xl shadow-xl hover-lift group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-teal to-green-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark text-xl mb-2">Email</h3>
                      <p className="text-gray-600 text-lg">info@advancedprinting.org</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-6 p-8 bg-white rounded-3xl shadow-xl hover-lift group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark text-xl mb-2">Address</h3>
                      <p className="text-gray-600 text-lg">10330 Yonge St #1, Richmond Hill, Ontario, L4C 5N1</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-6 p-8 bg-white rounded-3xl shadow-xl hover-lift group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark text-xl mb-2">Business Hours</h3>
                      <p className="text-gray-600 text-lg">Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Enhanced Visual Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-coral/10 to-teal/10 p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                  {/* Floating decorative elements */}
                  <motion.div
                    className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-6 h-6 text-white" />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-8 left-8 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Star className="w-4 h-4 text-white" />
                  </motion.div>

                  <motion.h2 
                    className="text-4xl font-bold text-dark mb-8 font-display"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Let's Create Something Amazing Together
                  </motion.h2>
                  
                  <motion.div 
                    className="space-y-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-dark mb-3 text-xl">Fast Turnaround</h3>
                        <p className="text-gray-600 text-lg">Get your custom merchandise in as little as 7 days with our streamlined production process.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-dark mb-3 text-xl">No Minimum Orders</h3>
                        <p className="text-gray-600 text-lg">Whether you need 1 or 1000 pieces, we provide the same premium quality and attention to detail.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-dark mb-3 text-xl">Premium Quality</h3>
                        <p className="text-gray-600 text-lg">High-quality printing, embroidery, and embossing services that make your brand stand out.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-coral to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-dark mb-3 text-xl">Design Support</h3>
                        <p className="text-gray-600 text-lg">Our in-house design team can help bring your vision to life with creative expertise.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <motion.button
                      className="btn-primary text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl magnetic"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Free Quote
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ContactPage