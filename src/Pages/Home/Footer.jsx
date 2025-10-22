import { useState, useEffect } from 'react';
import { 
  ArrowUp,
  ExternalLink
} from 'lucide-react';
import axionixLogo from '../Home/images/axi.png';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update year when component mounts
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-200/50"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-center">
            {/* Company Info */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <img 
                  src={axionixLogo} 
                  alt="AXIONIX Logo" 
                  className="h-16 w-auto mr-3"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback logo */}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hidden items-center justify-center mr-3">
                  <span className="text-white font-bold text-2xl">A</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-gray-900">AXIONIX</span>
                  <span className="text-base text-gray-600">Growing with You</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                We're here to help you grow. Providing innovative solutions and exceptional service to drive your business forward.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-600 text-sm text-center md:text-left">
                <p className="mb-1">© {currentYear} AXIONIX. All rights reserved.</p>
                <p className="flex items-center justify-center md:justify-start gap-1.5 text-xs">
                  <span>Project, Idea & Design by</span>
                  <a 
                    href="https://kjanuda.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors duration-200 group"
                  >
                    Januda Janandith
                    <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                </p>
              </div>
              
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="group flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
                aria-label="Back to top"
              >
                <ArrowUp size={16} className="text-gray-700 group-hover:-translate-y-0.5 transition-transform duration-200" />
                <span className="text-sm text-gray-700">Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}