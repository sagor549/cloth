import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('cloth/bgf.jpg')",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0,0,0,0.4)"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-alice"
          >
            Ready to Print Something Awesome?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-alegreya"
          >
            Let's bring your ideas to life — and make them look amazing
          </motion.p>
          
          <motion.div>
            <Link 
              to="/contact" 
              className="inline-block bg-coral hover:bg-coral-dark text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
