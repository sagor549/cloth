import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/#products' },
    { name: 'Services', href: '/#services' },
    { name: 'About us', href: '/#about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact us', href: '/contact' },
  ];

  const handleNavClick = (href) => {
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Phone Bar - Reduced gap */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            className="bg-white text-dark"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="max-w-7xl mx-auto flex justify-end px-4">
              <motion.div 
                className="flex items-center space-x-2 text-sm font-medium py-1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Phone className="w-5 h-5 text-coral" />
                <span className='text-base font-medium font-alegreya'>905-237-1464</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header - Positioned closer to top */}
      <motion.header
        className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-all duration-300 ${
          isScrolled ? 'py-1 shadow-md' : 'md:py-1 py-1'  // Reduced vertical padding
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ marginTop: isScrolled ? '0' : '-0.5rem' }}  // Increased negative margin
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"> {/* Added overflow-hidden */}
          {/* Desktop Navigation - All items equally spaced */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {navItems.slice(0, 3).map((item, index) => (
              <motion.div 
                key={item.name}
                className="flex-1 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                  <Link
                    to={item.href}
                    onClick={scrollToTop}
                    className="text-gray-700 hover:text-coral transition-all duration-300 font-medium relative group text-lg"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-gray-700 hover:text-coral transition-all duration-300 font-medium relative group text-lg"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></span>
                  </button>
                )}
              </motion.div>
            ))}
            
            {/* Logo - Centered with equal spacing - ORIGINAL SIZE */}
            <motion.div 
              className="flex-shrink-0 mx-2"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link to="/" onClick={scrollToTop} className="flex items-center">
                <motion.img 
                  src="/logo.png" 
                  alt="Merchandise Logo" 
                  className={`object-contain transition-all duration-300 ${
                    isScrolled ? 'h-20' : 'h-24'  // Original logo size
                  }`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                />
              </Link>
            </motion.div>
            
            {navItems.slice(3).map((item, index) => (
              <motion.div 
                key={item.name}
                className="flex-1 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
              >
                {item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                  <Link
                    to={item.href}
                    onClick={scrollToTop}
                    className="text-gray-700 hover:text-coral transition-all duration-300 font-medium relative group text-lg"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-gray-700 hover:text-coral transition-all duration-300 font-medium relative group text-lg"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></span>
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Header - Fixed centering */}
          <div className="lg:hidden flex items-center justify-between w-full">
            {/* Mobile Menu Button - Increased size */}
            <motion.button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-9 h-9" />
                ) : (
                  <Menu className="w-9 h-9" />
                )}
              </motion.div>
            </motion.button>
            
            {/* Centered Mobile Logo - ORIGINAL SIZE */}
            <div className="flex-grow flex justify-center overflow-hidden"> {/* Added overflow-hidden */}
              <motion.div 
                className="flex-shrink-0"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
              >
                <Link to="/" onClick={scrollToTop} className="flex items-center">
                  <motion.img 
                    src="/logo.png" 
                    alt="Merchandise Logo" 
                    className={`object-contain transition-all duration-300 ${
                      isScrolled ? 'h-20' : 'h-24'  // Original logo size
                    }`}
                  />
                </Link>
              </motion.div>
            </div>
            
            {/* Placeholder for spacing - Matches menu button width */}
            <div className="w-[52px]"></div> {/* Calculated: button width (w-9 = 2.25rem) + padding (p-2 = 0.5rem) */}
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="lg:hidden mt-2 pb-2 overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <nav className="flex flex-col space-y-3 pt-2">
                  {navItems.map((item, index) => (
                    <motion.div 
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      {item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                        <Link
                          to={item.href}
                          className="text-gray-700 hover:text-coral transition-colors duration-200 font-medium block py-2 px-4 rounded-lg hover:bg-gray-50 text-lg"
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            scrollToTop()
                          }}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleNavClick(item.href)}
                          className="text-gray-700 hover:text-coral transition-colors duration-200 font-medium text-left w-full py-2 px-4 rounded-lg hover:bg-gray-50 text-lg"
                        >
                          {item.name}
                        </button>
                      )}
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};

export default Header;