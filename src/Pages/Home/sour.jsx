import { Github, ExternalLink, Star, Code, GitFork, BookOpen, Linkedin } from 'lucide-react';
import balbgImage from '../Home/images/balbg.png';

export default function GitHubSourceSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={balbgImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-800/60 to-gray-900/60"></div>

      {/* Floating Icons Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <Code size={40} />
        </div>
        <div className="absolute bottom-20 right-20 opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
          <GitFork size={35} />
        </div>
        <div className="absolute top-40 right-40 opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
          <Star size={30} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              <Github size={40} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Open Source & Community
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Dive into the code on GitHub, explore our technical articles and insights, and join our growing developer community across social platforms.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <Star className="mx-auto mb-3 text-yellow-400" size={32} />
              <p className="text-3xl font-bold mb-1">Star</p>
              <p className="text-sm text-gray-400">Support the project</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <GitFork className="mx-auto mb-3 text-blue-400" size={32} />
              <p className="text-3xl font-bold mb-1">Fork</p>
              <p className="text-sm text-gray-400">Build your own version</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <Code className="mx-auto mb-3 text-green-400" size={32} />
              <p className="text-3xl font-bold mb-1">Contribute</p>
              <p className="text-sm text-gray-400">Submit pull requests</p>
            </div>
          </div>

          {/* Main GitHub Button */}
          <div className="mb-8">
            <a 
              href="https://github.com/JanudaSL/Ecogreen360.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
            >
              <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Explore Source Code</span>
              <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Social Links Section */}
          <div className="mb-12">
            <p className="text-gray-400 text-sm mb-4 uppercase tracking-wider">Follow & Learn More This Ecogreen360 </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Blog Link */}
              <a 
                href="https://janudajanandithkodithuwakku.blogspot.com/2025/10/ecogreen360-revolutionizing-greenhouse.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                <BookOpen size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Blog</span>
                <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>

              {/* Medium Link */}
              <a 
                href="https://medium.com/@janudakodi/building-cloud-native-iot-platforms-with-ballerina-a-real-world-case-study-29fc41be84cf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                <span>Medium</span>
                <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>

              {/* LinkedIn Link */}
              <a 
                href="https://www.linkedin.com/posts/januda-kodithuwakku_ecogreen360-teamaxionix-innovatewithballerina2025-activity-7382239656949682176-t6Vq?utm_source=share&utm_medium=member_desktop&rcm=ACoAADakzegBZdbFsS92fzZaiKSrsT1mjQzk_Ks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>LinkedIn</span>
                <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>

              {/* Portfolio Link */}
              
            </div>
          </div>

          {/* Bottom Attribution */}
          <div className="pt-8 border-t border-white/10">
            
           
          </div>
        </div>
      </div>
    </section>
  );
}