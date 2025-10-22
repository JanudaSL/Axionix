import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import axionixLogo from '../Home/images/axi.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set background transparency based on scroll position
      setIsScrolled(currentScrollY > 50);
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setIsVisible(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-white shadow-sm border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src={axionixLogo} 
                alt="AXIONIX Logo" 
                className={`h-20 w-auto mr-3 transition-all duration-300 ${
                  isScrolled ? 'h-16' : 'h-20'
                }`}
                onError={(e) => {
                  // Fallback if image fails to load
                  console.log('Image failed to load, showing fallback');
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback logo if image doesn't load */}
              <div className={`w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full items-center justify-center mr-3 hidden transition-all duration-300 ${
                isScrolled ? 'w-8 h-8' : 'w-10 h-10'
              }`}>
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">
                
              </span>
            </div>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-12">
            <Link
              to="/"
              className={`text-sm font-medium tracking-wide uppercase transition-all duration-200 ${
                isActive('/') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-blue-600'
              } ${isScrolled ? 'hover:text-blue-500' : 'hover:text-blue-600'}`}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium tracking-wide uppercase transition-all duration-200 ${
                isActive('/about') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-blue-600'
              } ${isScrolled ? 'hover:text-blue-500' : 'hover:text-blue-600'}`}
            >
              ABOUT
            </Link>
            
            <Link
              to="/contact"
              className={`text-sm font-medium tracking-wide uppercase transition-all duration-200 ${
                isActive('/contact') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-blue-600'
              } ${isScrolled ? 'hover:text-blue-500' : 'hover:text-blue-600'}`}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`text-gray-700 hover:text-blue-600 p-2 transition-colors duration-200 ${
                isScrolled ? 'hover:text-blue-500' : 'hover:text-blue-600'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-t border-gray-200/50' 
          : 'bg-white border-t border-gray-200'
      }`}>
        <div className="px-4 pt-4 pb-6 space-y-4">
          {/* Mobile Logo */}
          <div className="flex items-center justify-center pb-4 border-b border-gray-100">
            
            
          </div>

          <Link
            to="/"
            className={`block py-3 px-2 text-base font-medium tracking-wide uppercase transition-colors duration-200 ${
              isActive('/') 
                ? 'text-blue-600 border-l-4 border-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
            }`}
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className={`block py-3 px-2 text-base font-medium tracking-wide uppercase transition-colors duration-200 ${
              isActive('/about') 
                ? 'text-blue-600 border-l-4 border-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
            }`}
            onClick={() => setIsOpen(false)}
          >
            ABOUT US
          </Link>
          
          <Link
            to="/contact"
            className={`block py-3 px-2 text-base font-medium tracking-wide uppercase transition-colors duration-200 ${
              isActive('/contact') 
                ? 'text-blue-600 border-l-4 border-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
            }`}
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}