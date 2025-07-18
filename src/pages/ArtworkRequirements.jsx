import { motion } from 'framer-motion';
import { FileText, Image, Printer, Type, Settings, DollarSign, UploadCloud } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const ArtworkRequirements = () => {
    const navigate = useNavigate();

  const sections = [
    {
      title: "General Guidelines",
      icon: <FileText className="w-6 h-6 text-coral" />,
      content: [
        "Accepted Formats: .AI, .EPS, .PDF, .PSD, .PNG, .JPG",
        "Resolution: 300-600 dpi for high-quality prints",
        "Color Mode: CMYK for accurate color matching",
        "Size: Provide artwork at exact print dimensions"
      ]
    },
    {
      title: "Vector Artwork (Illustrator)",
      icon: <Settings className="w-6 h-6 text-coral" />,
      content: [
        "Convert all text to outlines",
        "Transform strokes to outlines",
        "Embed all images (no linked files)",
        "Use Pathfinder instead of clipping masks"
      ]
    },
    {
      title: "Raster Artwork (Photoshop)",
      icon: <Image className="w-6 h-6 text-coral" />,
      content: [
        "Keep colors on separate layers",
        "Embed all images",
        "Maintain 300-600 dpi resolution",
        "Use transparent backgrounds where needed"
      ]
    },
    {
      title: "Print Area & Placement",
      icon: <Printer className="w-6 h-6 text-coral" />,
      content: [
        "Max size: 12.5″ × 16.5″ (screen) / 15″ × 19″ (DTG)",
        "Contact us for custom sizes",
        "Specify garment placement clearly"
      ]
    },
    {
      title: "Typography & Lines",
      icon: <Type className="w-6 h-6 text-coral" />,
      content: [
        "Min font: 8pt (standard), 12pt (metallic)",
        "Knocked-out text: 12pt+",
        "Min stroke weight: 0.5pt"
      ]
    },
    {
      title: "Technical Specifications",
      icon: <Settings className="w-6 h-6 text-coral" />,
      content: [
        "Our team handles halftones",
        "Client responsible for proofreading",
        "Include 0.125″ bleeds for edge designs"
      ]
    },
    {
      title: "Design Fees",
      icon: <DollarSign className="w-6 h-6 text-coral" />,
      content: [
        "$60-$80/hr (minimum $60)",
        "Fees communicated in advance",
        "Extra charges for complex designs"
      ]
    },
    {
      title: "Submission Process",
      icon: <UploadCloud className="w-6 h-6 text-coral" />,
      content: [
        "Follow these specs for best results",
        "Our team available for assistance",
        "Ensure files meet requirements to avoid delays"
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
                  At AP Merchandise, we transform your vision into exceptional prints. Follow these guidelines to ensure perfect results every time.
                </p>
                
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
                    <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                      <img
    src="/cloth/embro.jpg"
    alt="Description"
    className=" object-contain"
  />
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 transform -rotate-2 mt-8">
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-coral/10 rounded-lg flex items-center justify-center">
                      <img
    src="/cloth/emboo.jpg"
    alt="Description"
    className=" object-contain"
  />
                    </div>
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
              Essential Guidelines
            </h2>
            <div className="w-20 h-1 bg-coral mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-700 max-w-2xl mx-auto font-alegreya text-xl">
              Follow these specifications to ensure your artwork prints perfectly
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
                Pro Tips for Perfect Prints
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-coral/10 flex items-center justify-center mt-1">
                    <span className="text-coral font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 font-alegreya">CMYK is Crucial</h4>
                    <p className="text-gray-700 mt-1 font-alegreya">
                      Design in CMYK to avoid color shifts in printing
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-coral/10 flex items-center justify-center mt-1">
                    <span className="text-coral font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 font-alegreya">Bleed for Edge Designs</h4>
                    <p className="text-gray-700 mt-1 font-alegreya">
                      Add 0.125" bleed for graphics that reach garment edges
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-coral/10 flex items-center justify-center mt-1">
                    <span className="text-coral font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 font-alegreya">Vector vs Raster</h4>
                    <p className="text-gray-700 mt-1 font-alegreya">
                      Use vector for logos/text, raster for photo-realistic images
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>

         
        </div>

        <section className="py-20 bg-gradient-to-br from-coral/10 to-teal/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 italic font-alice">
              Ready to Create Your Custom Merchandise?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-alegreya">
              Let's bring your vision to life with our premium printing and embroidery services.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-coral hover:bg-coral/90 text-white px-12 py-4 rounded-full text-lg font-semibold transition-colors duration-300"
            >
              Get Started Today
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArtworkRequirements;