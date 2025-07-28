import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, Check, Paperclip, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
}, []);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    
    // Validate file count
    if (selectedFiles.length + files.length > 3) {
      setSubmitError('Maximum 3 files allowed');
      return;
    }
    
    // Validate file sizes
    const oversizedFiles = files.filter(file => file.size > 10 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      setSubmitError('File size exceeds 10MB limit');
      return;
    }
    
    setSelectedFiles(prev => [...prev, ...files]);
    setSubmitError('');
  };

  const removeFile = (index) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      // Create a new FormData object from the form
      const formData = new FormData(formRef.current);
      
      // Clear existing files and add selected files
      formData.delete('user_files');
      selectedFiles.forEach(file => {
        formData.append('user_files', file);
      });

      // Send form using EmailJS
      await emailjs.sendForm(
        'service_3y7mwuz',
        'template_bcthlio',
        formRef.current,
        '6Ev23gj-s46loCZGA',
        formData
      );

      // Success handling
      setSubmitSuccess(true);
      formRef.current.reset();
      setSelectedFiles([]);
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header />

      <main>
        <section className="py-10 bg-gradient-to-br from-coral/10 via-teal/10 to-purple/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4 font-alice">
                  Get a Free Quote
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto font-alegreya">
                  Fill out the form and get the best quote from a team with 7 years of experience and 1000+ happy clients.
                </p>
              </div>

              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center font-alegreya">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-alegreya">Thank You!</h3>
                  <p className="text-green-700 mb-6">
                    Your message has been sent successfully. We'll contact you shortly.
                  </p>
                  <button
                    onClick={() => navigate('/')}
                    className="px-6 py-3 bg-white border-2 border-green-500 text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    Back to Homepage
                  </button>
                </div>
              ) : (
                <form 
                  ref={formRef}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  encType="multipart/form-data"  // Essential for file uploads
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-alegreya">
                    <div>
                      <label htmlFor="user_name" className="block text-gray-700 mb-2 font-medium">Full Name *</label>
                      <input 
                        type="text"
                        name="user_name"
                        id="user_name"
                        required
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="user_phone" className="block text-gray-700 mb-2 font-medium font-alegreya">Phone Number</label>
                    <input 
                      type="tel"
                      name="user_phone"
                      id="user_phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  {/* File Upload Section */}
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium font-alegreya">
                      Upload Files (Optional)
                    </label>
                    <div className="flex items-center">
                      <input 
                        type="file"
                        name="user_files"  // Must match parameter name in EmailJS
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        multiple
                        className="hidden"
                        accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.ai,.psd,.zip"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current.click()}
                        className="flex items-center px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <Paperclip className="w-5 h-5 mr-2" />
                        Select Files
                      </button>
                      <span className="ml-3 text-gray-500 text-sm">
                        Max 3 files (10MB each)
                      </span>
                    </div>
                    
                    {/* Selected files preview */}
                    {selectedFiles.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {selectedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border">
                            <div className="flex items-center truncate">
                              <Paperclip className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                              <span className="text-sm truncate">{file.name}</span>
                              <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">
                                ({(file.size / 1024 / 1024).toFixed(2)}MB)
                              </span>
                            </div>
                            <button 
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-gray-500 hover:text-red-500 ml-2"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="user_message" className="block text-gray-700 mb-2 font-medium font-alegreya">Message *</label>
                    <textarea 
                      name="user_message"
                      id="user_message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-all font-alegreya"
                      placeholder="Tell us about your project, quantities, timeline, etc..."
                    />
                  </div>
                  {submitError && (
                    <div className="text-red-500 bg-red-50 p-3 rounded-lg border border-red-200">
                      {submitError}
                    </div>
                  )}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex font-alice items-center justify-center py-4 bg-gradient-to-r from-coral to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span className="mr-2">Get Your Free Quote</span>
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}

              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-semibold text-dark mb-3 font-alice">What happens next?</h3>
                <ul className="space-y-2 text-gray-600 font-alegreya">
                  <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" /> We review your request within 24 hours</li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" /> Our specialist contacts you with a quote</li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" /> We discuss your project requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 font-alice">
              Contact Information
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-alegreya mb-12">
              Reach out to us through any of these channels
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-alegreya">
              {[
                { icon: <Phone className="w-8 h-8 text-white font-alegreya" />, bg: "bg-gradient-to-br from-coral to-orange-500", title: "Phone", content: "905-237-1464", link: "tel:905-237-1464" },
                { icon: <Mail className="w-8 h-8 text-white" />, bg: "bg-gradient-to-br from-teal to-blue-500", title: "Email", content: "info@advancedprinting.org", link: "mailto:info@advancedprinting.org" },
                { icon: <MapPin className="w-8 h-8 text-white" />, bg: "bg-gradient-to-br from-indigo-500 to-purple-600", title: "Address", content: "10330 Yonge St #1, Richmond Hill, Ontario, L4C 5N1", link: "https://maps.google.com/?q=10330+Yonge+St+%231,+Richmond+Hill,+Ontario,+L4C+5N1" },
                { icon: <Clock className="w-8 h-8 text-white" />, bg: "bg-gradient-to-br from-amber-500 to-yellow-500", title: "Business Hours", content: "Mon-Fri: 9AM-6PM | Sat: 10AM-4PM" }
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.link || undefined}
                  target={item.link ? "_blank" : undefined}
                  rel={item.link ? "noopener noreferrer" : undefined}
                  className={`flex flex-col items-center text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300 ${item.link ? "cursor-pointer" : "cursor-default"} bg-gradient-to-br from-white to-gray-50 border border-gray-100`}
                >
                  <div className={`${item.bg} w-20 h-20 rounded-full flex items-center justify-center mb-6`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xl text-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </a>
              ))}
            </div>

            <div className="mt-16 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;