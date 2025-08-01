import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mail, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
const currentYear = new Date().getFullYear();
const navigate = useNavigate();
const location = useLocation();
const [pendingScroll, setPendingScroll] = useState(null);

// Handle pending scrolls after navigation
useEffect(() => {
if (pendingScroll && location.pathname === '/') {
const scrollToElement = () => {
const element = document.querySelector(pendingScroll);
if (element) {
element.scrollIntoView({ behavior: 'smooth' });
setPendingScroll(null);
return true;
}
return false;
};


  // Try immediately
  if (!scrollToElement()) {
    // If element not found, try again after a delay
    const retryInterval = setInterval(() => {
      if (scrollToElement()) {
        clearInterval(retryInterval);
      }
    }, 100);
    
    // Stop trying after 1 second
    setTimeout(() => {
      clearInterval(retryInterval);
      setPendingScroll(null);
    }, 1000);
  }
}


}, [location, pendingScroll]);

const footerNavItems = [
{ name: 'Home', href: '/' },
{ name: 'Products', href: '/#products' },
{ name: 'Services', href: '/#services' },
{ name: 'Requirements', href: '/artwork-requirements' },
{ name: 'Gallery', href: '/gallery' },
{ name: 'Contact us', href: '/contact' },
];

const handleNavClick = (href, e) => {
if (href.startsWith('/#')) {
e?.preventDefault(); // Prevent default navigation
const hash = href.substring(1); // Remove the leading /


  if (location.pathname !== '/') {
    // Set pending scroll and navigate to home
    setPendingScroll(hash);
    navigate('/');
  } else {
    // Already on home page - scroll directly
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If element not found, set pending scroll to retry
      setPendingScroll(hash);
    }
  }
} else {
  // For regular page navigation, scroll to top
  scrollToTop();
}


};

const scrollToTop = () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
};

return (
<footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-12 border-t border-gray-800 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-coral via-purple-500 to-blue-500 opacity-20"></div>
<div className="absolute bottom-20 left-10 w-20 h-20 bg-coral/10 rounded-full blur-xl"></div>
<div className="absolute top-10 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>


  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Brand Column */}
      <div className="flex flex-col items-center md:items-start">
        <Link to="/" onClick={scrollToTop} className="mb-6">
          <div className="flex items-center justify-center">
            <div className="rounded-full w-28 flex items-center justify-center p-0 overflow-hidden">
              <img 
                src="cloth/whitelogo.png" 
                alt="Advanced Printing Logo" 
                className="object-contain"
              />
            </div>
          </div>
        </Link>
        
        <p className="text-gray-400 mb-8 text-center md:text-left max-w-md font-alegreya text-lg leading-relaxed">
          We specialize in turning your brand into wearable art with premium 
          printing, embroidery, and promotional products.
        </p>
        
        <div className="flex space-x-6">
          <a
            href="mailto:info@advancedprinting.org"
            className="bg-coral/20 hover:bg-coral/30 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg shadow-coral/10"
          >
            <Mail className="w-6 h-6 text-white" />
          </a>
          
          <a
            href="https://www.instagram.com/ap.merchandise/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:to-pink-600 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg shadow-purple-500/20"
          >
            <Instagram className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
      
      {/* Explore Links */}
      <div className="md:col-span-1 lg:col-span-1">
        <h3 className="text-2xl font-bold mb-6 font-alice border-b border-gray-700 pb-2">Explore</h3>
        <ul className="space-y-5 font-alegreya">
          {footerNavItems.map((item, index) => (
            <li key={index}>
              {item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                <Link 
                  to={item.href}
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-coral transition-colors duration-300 font-alegreya text-lg flex items-center group"
                >
                  <span className="w-2 h-2 bg-coral rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item.name}
                </Link>
              ) : (
                <button
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="text-gray-400 hover:text-coral transition-colors duration-300 font-alegreya text-lg flex items-center group w-full text-left"
                >
                  <span className="w-2 h-2 bg-coral rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Contact Info */}
      <div>
        <h3 className="text-2xl font-bold mb-6 font-alice border-b border-gray-700 pb-2">Contact Us</h3>
        <ul className="space-y-5 font-alegreya text-lg">
          <li className="flex items-start">
            <div className="mt-1 mr-4 text-coral">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-400">
              10330 Yonge St #1, Richmond Hill,<br />
              Ontario, L4C 5N1
            </span>
          </li>
          
          <li className="flex items-start">
            <div className="mt-1 mr-4 text-coral">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <span className="text-gray-400">905-237-1464</span>
          </li>
          
          <li className="flex items-start">
            <div className="mt-1 mr-4 text-coral">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <span className="text-gray-400">info@advancedprinting.org</span>
          </li>
          
          <li className="flex items-start">
            <div className="mt-1 mr-4 text-coral">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-400">
              Monday - Friday: 9AM - 7PM<br />
              Saturday: 12PM - 4PM
            </span>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0 font-alegreya text-lg">
        &copy; {currentYear} Advanced Printing. All rights reserved.
      </p>
      
      <div className="flex space-x-8">
        <Link 
          to="/privacy" 
          onClick={scrollToTop}
          className="text-gray-500 hover:text-white transition-colors duration-300 font-alegreya text-lg"
        >
          Privacy Policy
        </Link>
        <Link 
          to="/terms" 
          onClick={scrollToTop}
          className="text-gray-500 hover:text-white transition-colors duration-300 font-alegreya text-lg"
        >
          Terms of Service
        </Link>
      </div>
    </div>
  </div>
</footer>


)
}

export default Footer;