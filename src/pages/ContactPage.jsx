import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react';
import emailjs from 'emailjs-com';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    user_message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const SERVICE_ID = 'service_0wx2eep';
    const TEMPLATE_ID = 'template_mb4gtkv';
    const PUBLIC_KEY = 'n8kbbJ3UfJSEn4FHD';

    emailjs.init(PUBLIC_KEY);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData)
      .then(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          user_name: '',
          user_email: '',
          user_phone: '',
          user_message: ''
        });
      })
      .catch((error) => {
        setIsSubmitting(false);
        setSubmitError('Failed to send message. Please try again.');
        console.error('Email sending error:', error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header />
      
      <main className="">
        {/* Form Section */}
        <section className="py-10 bg-gradient-to-br from-coral/10 via-teal/10 to-purple/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100"
            >
              <div className="text-center mb-10">
                <motion.h1 
                  className="text-3xl md:text-4xl font-bold text-dark mb-4 font-alice"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Get a Free Quote
                </motion.h1>
                <motion.p 
                  className="text-gray-600 max-w-2xl mx-auto font-alegreya"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Fill out this form and our team will get back to you within 24 hours
                </motion.p>
              </div>
              
              {submitSuccess ? (
                <motion.div 
                  className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700 mb-6">
                    Your message has been sent successfully. We'll contact you shortly.
                  </p>
                  <button
                    onClick={() => navigate('/')}
                    className="px-6 py-3 bg-white border-2 border-green-500 text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    Back to Homepage
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="user_name" className="block text-gray-700 mb-2 font-medium">Full Name *</label>
                      <input 
                        type="text" 
                        name="user_name"
                        id="user_name"
                        required
                        value={formData.user_name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="user_email" className="block text-gray-700 mb-2 font-medium">Email *</label>
                      <input 
                        type="email" 
                        name="user_email"
                        id="user_email"
                        required
                        value={formData.user_email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="user_phone" className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                    <input 
                      type="tel" 
                      name="user_phone"
                      id="user_phone"
                      value={formData.user_phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="user_message" className="block text-gray-700 mb-2 font-medium">Message *</label>
                    <textarea 
                      name="user_message"
                      id="user_message"
                      required
                      rows={5}
                      value={formData.user_message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                      placeholder="Tell us about your project, quantities, timeline, etc..."
                    />
                  </div>
                  
                  {submitError && (
                    <div className="text-red-500 bg-red-50 p-3 rounded-lg border border-red-200">
                      {submitError}
                    </div>
                  )}
                  
                  <motion.button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center py-4 bg-gradient-to-r from-coral to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <>
                        <span className="mr-2">Get Your Free Quote</span>
                        <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
              
              <motion.div 
                className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="font-semibold text-dark mb-3">What happens next?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>We review your request within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Our specialist contacts you with a quote</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>We discuss your project requirements</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Details Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-dark mb-4 font-alice"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Contact Information
              </motion.h2>
              <motion.p 
                className="text-gray-600 max-w-2xl mx-auto font-alegreya"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Reach out to us through any of these channels
              </motion.p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: <Phone className="w-8 h-8 text-white" />, 
                  bg: "bg-gradient-to-br from-coral to-orange-500",
                  title: "Phone", 
                  content: "905-237-1464",
                  link: "tel:905-237-1464"
                },
                { 
                  icon: <Mail className="w-8 h-8 text-white" />, 
                  bg: "bg-gradient-to-br from-teal to-blue-500",
                  title: "Email", 
                  content: "info@advancedprinting.org",
                  link: "mailto:info@advancedprinting.org"
                },
                { 
                  icon: <MapPin className="w-8 h-8 text-white" />, 
                  bg: "bg-gradient-to-br from-indigo-500 to-purple-600",
                  title: "Address", 
                  content: "10330 Yonge St #1, Richmond Hill, Ontario, L4C 5N1",
                  link: "https://maps.google.com/?q=10330+Yonge+St+%231,+Richmond+Hill,+Ontario,+L4C+5N1"
                },
                { 
                  icon: <Clock className="w-8 h-8 text-white" />, 
                  bg: "bg-gradient-to-br from-amber-500 to-yellow-500",
                  title: "Business Hours", 
                  content: "Mon-Fri: 9AM-6PM | Sat: 10AM-4PM",
                  link: null
                }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link || undefined}
                  target={item.link ? "_blank" : undefined}
                  rel={item.link ? "noopener noreferrer" : undefined}
                  className={`flex flex-col items-center text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300 ${
                    item.link ? "cursor-pointer" : "cursor-default"
                  } bg-gradient-to-br from-white to-gray-50 border border-gray-100`}
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index + 0.6 }}
                >
                  <div className={`${item.bg} w-20 h-20 rounded-full flex items-center justify-center mb-6`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xl text-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </motion.a>
              ))}
            </div>
            
            <motion.div
              className="mt-16 rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.031444051624!2d-79.4383227!3d43.817091299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2cff565c9e0d%3A0x5b1d1c6f2d6b3e1f!2s10330%20Yonge%20St%20%231%2C%20Richmond%20Hill%2C%20ON%20L4C%205N1!5e0!3m2!1sen!2sca!4v1716768000000!5m2!1sen!2sca" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Advanced Printing Location"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;