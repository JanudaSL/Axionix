import { useState, useEffect, useRef } from 'react';
import { Award, ChevronLeft, ChevronRight, Pause, Play, X, Maximize2 } from 'lucide-react';
import ba1 from '../Home/images/ba1.jpg';
import ba2 from '../Home/images/ba2.jpg';
import ba3 from '../Home/images/ba3.jpg';
import ba4 from '../Home/images/ba4.jpeg';
import ba4jpg from '../Home/images/ba4.jpg';
import ba6 from '../Home/images/ba6.jpg';
import ba7 from '../Home/images/ba7.jpg';
import ba8 from '../Home/images/ba8.jpg';
import ba9 from '../Home/images/ba9.jpg';
import ba10 from '../Home/images/ba10.jpg';

export default function AwardsCeremonyGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const imageRef = useRef(null);

  const ceremonyImages = [
    { url: ba1, title: 'Award Ceremony 1', description: 'Excellence in Innovation' },
    { url: ba2, title: 'Award Ceremony 2', description: 'Outstanding Achievement' },
    { url: ba3, title: 'Award Ceremony 3', description: 'Team Excellence' },
    { url: ba4, title: 'Award Ceremony 4', description: 'Leadership Recognition' },
    { url: ba4jpg, title: 'Award Ceremony 5', description: 'Best Performance' },
    { url: ba6, title: 'Award Ceremony 6', description: 'Industry Excellence' },
    { url: ba7, title: 'Award Ceremony 7', description: 'Innovation Champion' },
    { url: ba8, title: 'Award Ceremony 8', description: 'Distinguished Service' },
    { url: ba9, title: 'Award Ceremony 9', description: 'Achievement Excellence' },
    { url: ba10, title: 'Award Ceremony 10', description: 'Outstanding Contribution' }
  ];

  const minSwipeDistance = 50;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isPlaying || isFullscreen) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ceremonyImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, isFullscreen, ceremonyImages.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false);
      if (e.key === ' ') { 
        e.preventDefault(); 
        togglePlayPause(); 
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, isPlaying]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % ceremonyImages.length);
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + ceremonyImages.length) % ceremonyImages.length);
  const goToSlide = (index) => setCurrentIndex(index);
  const togglePlayPause = () => setIsPlaying(!isPlaying);

  return (
    <>
      <section className="relative bg-white py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className={`text-center mb-6 sm:mb-10 md:mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-full border border-yellow-200">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
              <span className="text-xs sm:text-sm font-medium text-yellow-900">Gallery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight px-4">
              <span className="bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Awards Ceremony
              </span>
              <br />
              <span className="text-gray-900">Moments</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4">
              Capturing excellence, celebrating achievements, and honoring outstanding contributions
            </p>
          </div>

          {/* Main Gallery */}
          <div className="max-w-6xl mx-auto">
            <div className={`relative group transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Main Image Card */}
              <div className="relative bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border border-gray-100">
                {/* Image Container */}
                <div 
                  ref={imageRef}
                  className="relative bg-gradient-to-br from-gray-50 to-gray-100 touch-pan-y" 
                  style={{ paddingBottom: '56.25%' }}
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                >
                  <img
                    src={ceremonyImages[currentIndex].url}
                    alt={ceremonyImages[currentIndex].title}
                    className="absolute inset-0 w-full h-full object-contain transition-all duration-700"
                    loading="lazy"
                    draggable="false"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Navigation Buttons - Hidden on small mobile, visible on hover/desktop */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/95 hover:bg-white shadow-lg backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-gray-900 opacity-60 group-hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100 border border-gray-200 active:scale-95"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/95 hover:bg-white shadow-lg backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-gray-900 opacity-60 group-hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100 border border-gray-200 active:scale-95"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Top Controls */}
                <div className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6 flex items-center justify-between z-10">
                  {/* Counter */}
                  <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full shadow-lg border border-gray-200">
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">
                      {currentIndex + 1} <span className="text-gray-400">/</span> {ceremonyImages.length}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-1.5 sm:gap-2">
                    <button
                      onClick={togglePlayPause}
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-white/95 hover:bg-white backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg border border-gray-200"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause className="w-4 h-4 text-gray-900" /> : <Play className="w-4 h-4 text-gray-900 ml-0.5" />}
                    </button>
                    <button
                      onClick={() => setIsFullscreen(true)}
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-white/95 hover:bg-white backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg border border-gray-200"
                      aria-label="Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4 text-gray-900" />
                    </button>
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/95 to-transparent backdrop-blur-md p-3 sm:p-4 md:p-6">
                  <div className="flex items-end justify-between gap-3 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1 truncate">
                        {ceremonyImages[currentIndex].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">
                        {ceremonyImages[currentIndex].description}
                      </p>
                    </div>
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-yellow-500 flex-shrink-0" />
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 sm:mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 transition-all duration-500 ease-out"
                  style={{ width: `${((currentIndex + 1) / ceremonyImages.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className={`mt-6 sm:mt-8 md:mt-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-1.5 sm:gap-2 md:gap-3">
                {ceremonyImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 active:scale-95 ${
                      currentIndex === index
                        ? 'ring-2 sm:ring-3 ring-yellow-500 scale-105 shadow-lg'
                        : 'ring-1 ring-gray-200 hover:ring-2 hover:ring-yellow-400 hover:scale-105 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      draggable="false"
                    />
                    {currentIndex === index && (
                      <div className="absolute inset-0 bg-yellow-500/10"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Info */}
            <div className="mt-6 sm:mt-10 md:mt-16 text-center px-4">
              <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span>{ceremonyImages.length} Premium Photos</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                <span className="hidden sm:inline">Swipe or use ← → keys</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-3 sm:p-4 md:p-6 border-b border-gray-200">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 mr-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-gray-900 text-xs sm:text-sm md:text-base truncate">{ceremonyImages[currentIndex].title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 truncate">{ceremonyImages[currentIndex].description}</p>
              </div>
            </div>
            <button
              onClick={() => setIsFullscreen(false)}
              className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-900" />
            </button>
          </div>

          {/* Image Container */}
          <div 
            className="flex-1 relative flex items-center justify-center p-3 sm:p-6 md:p-8 bg-gray-50"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={ceremonyImages[currentIndex].url}
              alt={ceremonyImages[currentIndex].title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              draggable="false"
            />

            {/* Navigation */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white hover:bg-gray-50 active:bg-gray-100 shadow-xl rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border border-gray-200"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-900" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white hover:bg-gray-50 active:bg-gray-100 shadow-xl rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border border-gray-200"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-900" />
            </button>
          </div>

          {/* Footer */}
          <div className="p-3 sm:p-4 md:p-6 border-t border-gray-200 bg-white">
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm font-medium text-gray-900">{currentIndex + 1}</span>
              <span className="text-sm text-gray-400">/</span>
              <span className="text-sm text-gray-500">{ceremonyImages.length}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}