import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const PreviewPage = () => {
  const navigate = useNavigate();

  const handleSeeDetails = () => {
    navigate('/artwork-requirements');
  };

  return (
    <div className=" bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Company header */}
        <div className="text-center mb-12">
          <motion.h1 
            className="section-title text-gray-900 tracking-tight mb-2 font-alice"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Artwork Recommendations
          </motion.h1>
          
        </div>
        
        {/* Main content */}
        <motion.div 
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
        
          
          <div className="relative font-alegreya text-xl">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-coral/10 rounded-full mix-blend-multiply opacity-50 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-coral/10 rounded-full mix-blend-multiply opacity-50 blur-xl"></div>
            
            {/* Content */}
            <div className="relative ">
              <div className="prose prose-lg max-w-none text-gray-700 mb-10">
                <motion.p 
                  className="mb-6 text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  At AP Merchandise, we maintain <span className="font-semibold text-coral">strict quality standards</span> for all print projects. 
                  To ensure premium results, we recommend artwork files that meet specific technical specifications.
                </motion.p>
                
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Recommendations:</h3>
                  <ul className="space-y-3">
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="flex-shrink-0 mt-1 mr-3">
                        <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center">
                          <span className="text-coral font-bold">1
</span>
                        </div>
                      </div>
                      <span>Minimum 300 dpi resolution
</span>
                    </motion.li>
                    
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="flex-shrink-0 mt-1 mr-3">
                        <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center">
                          <span className="text-coral font-bold">2</span>
                        </div>
                      </div>
                      <span>CMYK color mode </span>
                    </motion.li>
                    
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <div className="flex-shrink-0 mt-1 mr-3">
                        <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center">
                          <span className="text-coral font-bold">3</span>
                        </div>
                      </div>
                      <span> All text and lines outlined for vector files
</span>
                    </motion.li>
                    
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0 }}
                    >
                      <div className="flex-shrink-0 mt-1 mr-3">
                        <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center">
                          <span className="text-coral font-bold">4</span>
                        </div>
                      </div>
                      <span>Artwork in the actual printing size</span>
                    </motion.li>
                    
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 }}
                    >
                      <div className="flex-shrink-0 mt-1 mr-3">
                        <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center">
                          <span className="text-coral font-bold">5</span>
                        </div>
                      </div>
                      <span>Proofread all files before submitting
</span>
                    </motion.li>
                  </ul>
                </motion.div>
                
                
              </div>
              
              <div className="mt-10 text-center">
                <motion.button
                  onClick={handleSeeDetails}
                  className="relative group bg-coral text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-coral-dark"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                >
                  <span className="relative z-10 font-alice">View Complete Recommendations</span>
                </motion.button>
                <motion.p 
                  className="mt-4 text-gray-500 text-sm font-alegreya"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  It's ok if you don't have all of these
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
        
        
      </div>
    </div>
  );
};

export default PreviewPage;