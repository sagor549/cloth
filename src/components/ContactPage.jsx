import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Check } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
     
      
      <main className="">
        {/* Hero Section - Enhanced */}
        <section className="relative  bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-10 w-48 h-48 rounded-full bg-coral"></div>
            <div className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-teal"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 font-display"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="block">Get In Touch</span>
                <span className="block mt-2 text-2xl md:text-3xl font-normal italic text-gray-600">
                  Let's create something amazing together
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-700 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Ready to bring your custom merchandise ideas to life? Our team is here to help you every step of the way.
              </motion.p>
              
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <a 
                  href="tel:905-237-1464" 
                  className="inline-flex items-center px-6 py-3 bg-coral text-white font-medium rounded-lg shadow-lg hover:bg-coral-dark transition-all duration-300"
                >
                  <Phone className="mr-2" />
                  Call Now: 905-237-1464
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Content - Modernized */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information - Card Style */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <h2 className="text-3xl font-bold text-dark mb-8 font-display pb-4 border-b border-gray-200">
                    Contact Information
                  </h2>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Have questions about our services or need a custom quote? 
                    We'd love to hear from you. Reach out using any of the methods below.
                  </p>

                  <div className="space-y-6">
                    {[
                      { 
                        icon: <Phone className="w-6 h-6 text-white" />, 
                        bg: "bg-gradient-to-br from-coral to-orange-500",
                        title: "Phone", 
                        content: "905-237-1464",
                        link: "tel:905-237-1464"
                      },
                      { 
                        icon: <Mail className="w-6 h-6 text-white" />, 
                        bg: "bg-gradient-to-br from-teal to-blue-500",
                        title: "Email", 
                        content: "info@advancedprinting.org",
                        link: "mailto:info@advancedprinting.org"
                      },
                      { 
                        icon: <MapPin className="w-6 h-6 text-white" />, 
                        bg: "bg-gradient-to-br from-indigo-500 to-purple-600",
                        title: "Address", 
                        content: "10330 Yonge St #1, Richmond Hill, Ontario, L4C 5N1",
                        link: "https://maps.google.com/?q=10330+Yonge+St+%231,+Richmond+Hill,+Ontario,+L4C+5N1"
                      },
                      { 
                        icon: <Clock className="w-6 h-6 text-white" />, 
                        bg: "bg-gradient-to-br from-amber-500 to-yellow-500",
                        title: "Business Hours", 
                        content: "Mon-Fri: 9AM-6PM | Sat: 10AM-4PM",
                        link: null
                      }
                    ].map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.link}
                        target={item.link ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className={`flex items-start space-x-5 p-5 rounded-xl hover:shadow-md transition-all duration-300 ${
                          item.link ? "cursor-pointer" : "cursor-default"
                        }`}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`${item.bg} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0`}>
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-dark text-lg">{item.title}</h3>
                          <p className="text-gray-600 mt-1">{item.content}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                  
                  {/* Map Preview */}
                  <div className="mt-10 rounded-xl overflow-hidden border border-gray-200">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.031444051624!2d-79.4383227!3d43.817091299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2cff565c9e0d%3A0x5b1d1c6f2d6b3e1f!2s10330%20Yonge%20St%20%231%2C%20Richmond%20Hill%2C%20ON%20L4C%205N1!5e0!3m2!1sen!2sca!4v1716768000000!5m2!1sen!2sca" 
                      width="100%" 
                      height="250" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-xl"
                    ></iframe>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form - Added functionality */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 h-full">
                  <h2 className="text-3xl font-bold text-dark mb-6 font-display">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
                      <select 
                        id="service" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-all appearance-none bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="printing">Custom Printing</option>
                        <option value="embroidery">Embroidery</option>
                        <option value="promo">Promotional Products</option>
                        <option value="apparel">Apparel</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                      <textarea 
                        id="message" 
                        rows="5" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="consent" 
                        className="w-5 h-5 text-coral rounded focus:ring-coral"
                      />
                      <label htmlFor="consent" className="ml-2 text-gray-600">
                        I agree to the privacy policy and terms of service
                      </label>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-coral to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
            
            {/* Why Choose Us Section - Enhanced */}
            <motion.div
              className="mt-24"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-dark font-display mb-4">
                  Why Choose Advanced Printing?
                </h2>
                <p className="text-xl text-gray-600">
                  We're committed to delivering exceptional quality and service for all your custom merchandise needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Fast Turnaround",
                    description: "Get your custom merchandise in as little as 7 days with our efficient production process.",
                    icon: <Clock className="w-8 h-8" />,
                    color: "from-blue-500 to-indigo-600"
                  },
                  {
                    title: "No Minimum Orders",
                    description: "Whether you need 1 or 1000 pieces, we accommodate orders of all sizes without minimum requirements.",
                    icon: <Check className="w-8 h-8" />,
                    color: "from-green-500 to-teal-600"
                  },
                  {
                    title: "Premium Quality",
                    description: "Experience high-quality printing, embroidery, and finishing with our state-of-the-art equipment.",
                    icon: "⭐",
                    color: "from-amber-500 to-yellow-500"
                  },
                  {
                    title: "Design Support",
                    description: "Our in-house design team helps bring your vision to life with professional creative assistance.",
                    icon: "✏️",
                    color: "from-purple-500 to-pink-500"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300"
                    whileHover={{ y: -10 }}
                  >
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl mb-6 bg-gradient-to-br ${item.color}`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ContactPage