import { motion } from 'framer-motion';
import { FileText, Image, Printer, Type, Settings, DollarSign, UploadCloud, Info } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ArtworkRequirements = () => {
    const navigate = useNavigate();

  const sections = [
    {
      title: "General Guidelines",
      icon: <FileText className="w-6 h-6 text-coral" />,
      content: [
        "Resolution: Minimum 300 dpi for high-quality prints",
        "Color Mode: CMYK color mode for accurate color reproduction",
        "Size: Submit artwork at the size you want it printed. Ask our team for sizing help if unsure"
      ]
    },
    {
      title: "File Formats",
      icon: <Image className="w-6 h-6 text-coral" />,
      content: [
        "Accepted Formats: .AI, .PDF, .EPS, .SVG, .PSD, .PNG, .JPG",
        "For transparent backgrounds: Use formats that support transparency (e.g. PNG)",
        "Vinyl printing: Background can be left if sufficient contrast exists"
      ]
    },
    {
      title: "Vector Artwork",
      icon: <Settings className="w-6 h-6 text-coral" />,
      content: [
        "Embed or convert fonts to outlines (5pt or greater)",
        "Lines: 0.5pt thickness or greater. Outline all strokes",
        "Embed all graphics (no linked files)"
      ]
    },
    {
      title: "Print Size",
      icon: <Printer className="w-6 h-6 text-coral" />,
      content: [
        "DTF & vinyl: Max 16″ × 16″",
        "Embroidery: Max 10″ × 10″",
        "Embossed: Max 11″ × 15″",
        "Contact us for custom sizes"
      ]
    },
    {
      title: "Design Fees",
      icon: <DollarSign className="w-6 h-6 text-coral" />,
      content: [
        "Basic art & design: $45 per hour",
        "Fees communicated in advance",
        "Minimum charge: $45"
      ]
    },
    {
      title: "Additional Information",
      icon: <Info className="w-6 h-6 text-coral" />,
      content: [
        "Client responsible for proofreading",
        "Files not meeting standards may be rejected",
        "Correction service available for additional fee",
        "Our team available for assistance"
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-coral/10 transform rotate-3 scale-125"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-alice">
                  Artwork Requirements
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed font-alegreya">
                  Follow these guidelines to ensure your artwork meets our printing standards and delivers perfect results.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 max-w-xl">
                  <h3 className="font-bold text-blue-800 text-lg mb-2 flex items-center">
                    <Info className="mr-2" /> Important Note
                  </h3>
                  <p className="text-blue-700">
                    Clients are responsible for proofreading all content. Files that don't meet our standards may be rejected. Our team is available to assist with file preparation.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl "></div>
                <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-coral/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
                
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 transform rotate-3">
                    <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src="/cloth/embro.jpg"
                        alt="Vector artwork sample"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-center mt-2 text-sm text-gray-600">Vector Artwork Sample</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 transform -rotate-2 mt-8">
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-coral/10 rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src="/cloth/emboo.jpg"
                        alt="Print size comparison"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-center mt-2 text-sm text-gray-600">Print Size Comparison</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-alice">
              Artwork Specifications
            </h2>
            <div className="w-20 h-1 bg-coral mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-700 max-w-2xl mx-auto font-alegreya text-xl">
              Essential guidelines to ensure optimal print quality
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                variants={item}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-coral"></div>
                <div className="relative z-10">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-gray-100 p-3 rounded-lg group-hover:bg-coral/10 transition-colors duration-300">
                      {section.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-alice">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.content.map((point, i) => (
                      <li 
                        key={i} 
                        className="flex items-start font-alegreya"
                      >
                        <span className="flex-shrink-0 h-5 w-5 text-coral mr-2 mt-0.5">•</span>
                        <p className="text-gray-700">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Visual Tips */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 font-alice">
                Expert Recommendations
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-coral/10 flex items-center justify-center mt-1">
                    <span className="text-coral font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 font-alegreya">Vector for Logos</h4>
                    <p className="text-gray-700 mt-1 font-alegreya">
                      Use vector formats for logos and text to ensure crisp edges at any size
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-coral/10 flex items-center justify-center mt-1">
                    <span className="text-coral font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 font-alegreya">Proofread Thoroughly</h4>
                    <p className="text-gray-700 mt-1 font-alegreya">
                      Double-check all text and design elements before submission
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-coral/10 flex items-center justify-center mt-1">
                    <span className="text-coral font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 font-alegreya">Consult Our Team</h4>
                    <p className="text-gray-700 mt-1 font-alegreya">
                      When in doubt, contact us for guidance on file preparation
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6">
                <h4 className="font-bold text-gray-900 mb-3 font-alice">File Submission Tip</h4>
                <p className="text-gray-700 font-alegreya">
                  When submitting files, include a PDF proof showing placement and dimensions. This helps us verify your design intent.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="p-6">
                <h4 className="font-bold text-xl text-gray-900 mb-4 text-center font-alice">Print Size Reference</h4>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center justify-between border-b pb-3">
                    <span className="font-medium font-alegreya">DTF & Vinyl</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold">16″ × 16″</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-3">
                    <span className="font-medium font-alegreya">Embroidery</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">10″ × 10″</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-3">
                    <span className="font-medium font-alegreya">Embossed</span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-bold">11″ × 15″</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-3">
                    <span className="font-medium font-alegreya">Screen Printing</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-bold">15″ × 19″</span>
                  </div>
                </div>
                
                <div className="mt-8 bg-gray-50 rounded-lg p-4">
                  <h5 className="font-bold text-gray-900 mb-2 flex items-center font-alice">
                    <Info className="mr-2 text-coral" /> Need larger sizes?
                  </h5>
                  <p className="text-gray-700 font-alegreya">
                    Contact us for custom sizing options. Larger prints may require special techniques and have different pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="mt-20 bg-gradient-to-r from-blue-50 to-coral/10 rounded-3xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-alice">
                Need Help With Your Artwork?
              </h3>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-alegreya">
                Our design team is ready to assist you with file preparation, format conversion, and print optimization.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 font-alice">File Optimization</h4>
                  <p className="text-gray-600 font-alegreya">
                    We'll prepare your files to meet all technical requirements
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Type className="text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 font-alice">Format Conversion</h4>
                  <p className="text-gray-600 font-alegreya">
                    Convert between file types while maintaining quality
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Printer className="text-amber-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 font-alice">Print Consultation</h4>
                  <p className="text-gray-600 font-alegreya">
                    Advice on best techniques for your specific design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-20 bg-gradient-to-br from-coral/10 to-teal/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 font-alice">
              Ready to Create Your Custom Merchandise?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-alegreya">
              Submit your artwork and let's bring your vision to life with our premium printing services.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-coral hover:bg-coral/90 text-white px-12 py-4 rounded-full text-xl font-semibold transition-colors duration-300 font-alice"
            >
              Submit Artwork
            </button>
            <p className="mt-4 text-gray-600 font-alegreya">
              or email us at <span className="text-blue-600 font-semibold">artwork@apmerchandise.com</span>
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArtworkRequirements;