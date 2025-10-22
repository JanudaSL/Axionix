import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, Search, User, Globe, Play } from 'lucide-react';
import eco from '../Home/images/eco37.png';
import eco1 from '../Home/images/gr1.jpg';
import eco2 from '../Home/images/gr2.jpg';


const AutoCarouselHeader = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: eco,
      title: "",
      subtitle: "",
      description: "",
    },
    {
      id: 2,
      image: eco1,
      title: "ECOGREEN360",
      subtitle: "Smart IoT Greenhouse Management Platform with AI Integration",
      description: "",
    },
    {
      id: 3,
      image: eco2,
      title: "ECOGREEN360",
      subtitle: "Intelligent IoT Greenhouse Management",
      description: "",
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full">
      {/* Carousel Header Section */}
      <div className="relative w-full h-screen min-h-[100vh] max-h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full min-h-[100vh]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105'
                }`}
              >
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${slide.image})`,
                    backgroundAttachment: 'scroll',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh',
                    minWidth: '100vw',
                    WebkitBackgroundSize: 'cover',
                    MozBackgroundSize: 'cover',
                    OBackgroundSize: 'cover',
                  }}
                >
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-4 lg:px-8">
                    <div className="w-full max-w-7xl mx-auto">
                      <div className="text-center px-2 sm:px-4">
                        {slide.title && (
                          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 xs:mb-3 sm:mb-4 leading-tight">
                            {slide.title}
                          </h1>
                        )}
                        {slide.subtitle && (
                          <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl text-blue-200 mb-2 xs:mb-3 sm:mb-4 font-light">
                            {slide.subtitle}
                          </h2>
                        )}
                        {slide.description && (
                          <p className="text-sm xs:text-base sm:text-lg text-white/90 mb-4 xs:mb-6 sm:mb-8 max-w-full sm:max-w-2xl mx-auto leading-relaxed">
                            {slide.description}
                          </p>
                        )}
                        {(slide.title || slide.subtitle || slide.description) && (
                          <div className="mt-4 sm:mt-6">
                            
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-1 xs:left-2 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 active:bg-white/40 backdrop-blur-sm rounded-full p-1.5 xs:p-2 sm:p-3 transition-all duration-300 group touch-manipulation shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 group-active:scale-95 transition-transform" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-1 xs:right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 active:bg-white/40 backdrop-blur-sm rounded-full p-1.5 xs:p-2 sm:p-3 transition-all duration-300 group touch-manipulation shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 group-active:scale-95 transition-transform" />
            </button>

            {/* Slide Indicators */}
            {slides.length > 1 && (
              <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
                <div className="flex space-x-1.5 xs:space-x-2 sm:space-x-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation shadow-sm ${
                        index === currentSlide
                          ? 'bg-white scale-125 shadow-md'
                          : 'bg-white/50 hover:bg-white/75 active:bg-white/90'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-30 h-0.5 xs:h-1 bg-white/20">
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{
                  width: `${((currentSlide + 1) / slides.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="w-full py-6 xs:py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 xs:mb-8 sm:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4 px-2 leading-tight">
              Project Showcase
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-full sm:max-w-2xl mx-auto px-2 xs:px-4 leading-relaxed">
              Watch our latest project demonstration and learn more about our innovative solutions.
            </p>
          </div>

          <div className="max-w-full sm:max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-md xs:shadow-lg sm:shadow-2xl overflow-hidden border border-gray-200 mx-1 xs:mx-2 sm:mx-0">
              {/* Responsive Video Wrapper (16:9) */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/hUZeVqmaUMY?start=517&mute=1"
                  title="Project Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoCarouselHeader;