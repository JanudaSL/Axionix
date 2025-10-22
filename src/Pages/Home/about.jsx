import { useState } from 'react';
import { 
  User, 
  Award, 
  Leaf, 
  Target,
  Globe,
  Heart,
  Code
} from 'lucide-react';

export default function About() {
  const [activeCard, setActiveCard] = useState(null);

  const projectStats = [
    { icon: User, label: "Developer", value: "Januda", color: "text-blue-600" },
    { icon: Target, label: "Focus Area", value: "Ballerina", color: "text-purple-600" },
    { icon: Leaf, label: "Platform Built", value: "EcoGreen360", color: "text-emerald-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200/30 to-gray-300/30"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About This
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800"> Project</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A personal initiative dedicated to creating sustainable solutions through innovative technology and environmental awareness.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center ${activeCard === index ? 'scale-110' : ''} transition-transform duration-300`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              My Journey & Vision
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                As an undergraduate student, I embarked on this project with a vision of creating meaningful environmental impact through innovation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My focus on the <span className="font-semibold text-green-600">Ballerina</span> programming language 
                led me to develop comprehensive solutions designed to promote sustainable practices and environmental awareness.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I believe that technology should serve a greater purpose, and my mission is to leverage 
                my skills to build solutions that benefit both businesses and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Leveraging modern technology to create impactful solutions
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
              <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Promoting eco-friendly practices and environmental awareness
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
              <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Passion</h3>
              <p className="text-gray-600">
                Driven by dedication to make a positive difference
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}