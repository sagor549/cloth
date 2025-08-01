import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const scrollTimeoutRef = useRef(null);
  const retryCountRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/#products' },
    { name: 'Services', href: '/#services' },
    { name: 'Recommendations', href: '/artwork-requirements' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact us', href: '/contact' },
  ];

  const scrollToElement = (hash) => {
    const element = document.querySelector(hash);
    if (element) {
      // Calculate offset based on header height
      const headerHeight = document.querySelector('header')?.offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 20;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      return true;
    }
    return false;
  };

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('/#')) {
      const hash = href.substring(1);
      
      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
      
      // If we're already on home page
      if (location.pathname === '/') {
        // Try to scroll immediately
        if (!scrollToElement(hash)) {
          // If element not found, try again after a short delay
          scrollTimeoutRef.current = setTimeout(() => {
            if (!scrollToElement(hash)) {
              // Final attempt after animation completes
              scrollTimeoutRef.current = setTimeout(() => {
                scrollToElement(hash);
              }, 500);
            }
          }, 100);
        }
      } 
      // If we're not on home page
      else {
        navigate('/');
        // Wait for navigation to complete
        scrollTimeoutRef.current = setTimeout(() => {
          if (!scrollToElement(hash)) {
            // If element not found, try again after a short delay
            scrollTimeoutRef.current = setTimeout(() => {
              scrollToElement(hash);
            }, 300);
          }
        }, 100);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Phone Bar */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div className="bg-white text-dark">
            <div className="max-w-7xl mx-auto flex justify-end px-4">
              <div className="flex items-center space-x-2 text-sm font-medium py-1">
                <Phone className="w-4 h-4 text-coral" />
                <span className='text-base font-sm '>905-237-1464</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-all duration-300 ${
          isScrolled ? 'py-1 shadow-md' : 'md:py-1 py-1'
        }`}
        style={{ marginTop: isScrolled ? '0' : '-0.5rem' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {navItems.slice(0, 3).map((item) => (
              <div key={item.name} className="flex-1 text-center">
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
              </div>
            ))}

            {/* Logo */}
            <motion.div className="flex-shrink-0 mx-2 relative bottom-[1px]">
              <Link to="/" onClick={scrollToTop} className="flex items-center">
                <img 
                  src="/cloth/logo.png" 
                  alt="Merchandise Logo" 
                  className={`object-contain transition-all duration-300 ${
                    isScrolled ? 'h-20' : 'h-28'
                  }`}
                />
              </Link>
            </motion.div>

            {navItems.slice(3).map((item) => (
              <div key={item.name} className="flex-1 text-center">
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
              </div>
            ))}
          </div>

          {/* Mobile Header */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <motion.button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
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

            <div className="flex-grow flex justify-center overflow-hidden">
              <motion.div className="flex-shrink-0">
                <Link to="/" onClick={scrollToTop} className="flex items-center">
                  <img 
                    src="/cloth/logo.png" 
                    alt="Merchandise Logo" 
                    className={`object-contain transition-all duration-300 ${
                      isScrolled ? 'h-20' : 'h-24'
                    }`}
                  />
                </Link>
              </motion.div>
            </div>

            <div className="w-[52px]"></div>
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
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                        <Link
                          to={item.href}
                          className="text-gray-700 hover:text-coral transition-colors duration-200 font-medium block py-2 px-4 rounded-lg hover:bg-gray-50 text-lg"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            scrollToTop();
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
                    </div>
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