import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, TrendingUp, Dna, Calculator, BarChart3, Cpu } from 'lucide-react';
import Header from '../../../Components/Header';

function CapabilityLanding() {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const observerRefs = useRef([]);

  useEffect(() => {
    const observers = observerRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [index]: true }));
            }
          });
        },
        { threshold: 0.1 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const capabilities = [
    {
      id: 1,
      title: "Artificial Intelligence",
      description: "Advanced ML algorithms, neural networks, and cognitive computing solutions for next-generation intelligent systems.",
      icon: Brain,
      link: "/programs/capability/artificial-intelligence",
      color: "from-blue-500 to-purple-600",
      gradient: "from-blue-500/20 to-purple-600/20"
    },
    {
      id: 2,
      title: "Business Intelligence",
      description: "Transform data into actionable insights with predictive analytics, visualization, and strategic decision-making tools.",
      icon: TrendingUp,
      link: "/programs/capability/business-intelligence",
      color: "from-blue-600 to-cyan-500",
      gradient: "from-blue-600/20 to-cyan-500/20"
    },
    {
      id: 3,
      title: "Bioinformatics",
      description: "Computational analysis of biological data, genomics research, and innovative solutions in life sciences.",
      icon: Dna,
      link: "/programs/capability/bioinformatics",
      color: "from-purple-500 to-pink-600",
      gradient: "from-purple-500/20 to-pink-600/20"
    },
    {
      id: 4,
      title: "Computational Mathematics",
      description: "Advanced mathematical modeling, numerical analysis, and optimization techniques for complex problem-solving.",
      icon: Calculator,
      link: "/programs/capability/computational-mathematics",
      color: "from-indigo-500 to-blue-600",
      gradient: "from-indigo-500/20 to-blue-600/20"
    },
    {
      id: 5,
      title: "Data Analytics",
      description: "Extract meaningful insights through statistical methods, predictive modeling, and comprehensive data analysis.",
      icon: BarChart3,
      link: "/programs/capability/data-analytics",
      color: "from-cyan-500 to-blue-600",
      gradient: "from-cyan-500/20 to-blue-600/20"
    },
    {
      id: 6,
      title: "Quantum Computing",
      description: "Exploring quantum algorithms, cryptography, and next-generation computational paradigms for breakthrough solutions.",
      icon: Cpu,
      link: "/programs/capability/quantum-computing",
      color: "from-violet-500 to-purple-600",
      gradient: "from-violet-500/20 to-purple-600/20"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Cursor Glow Effect */}
        <div 
          className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        ></div>
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div 
        className="pt-32 pb-20 px-4 relative z-10"
        ref={(el) => (observerRefs.current[0] = el)}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-8">
              <div className="flex items-center gap-3 px-6 py-3 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 animate-fade-in">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <span className="text-blue-200 text-sm font-medium">Discover Our Expertise</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
              Our <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent animate-gradient-x">Capabilities</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Comprehensive solutions designed to empower learners and professionals through 
              cutting-edge technology and innovative research across multiple domains.
            </p>
            
            {/* Floating Stats */}
            <div className="flex justify-center gap-8 mt-12 flex-wrap animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-white">6+</div>
                <div className="text-blue-200 text-sm">Capabilities</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-blue-200 text-sm">Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-blue-200 text-sm">Learners</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Grid */}
      <div 
        className="max-w-7xl mx-auto px-4 pb-20 relative z-10"
        ref={(el) => (observerRefs.current[1] = el)}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Link
                key={capability.id}
                to={capability.link}
                className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/20 overflow-hidden ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${capability.color} animate-border-spin`}></div>
                  <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-blue-900/90 to-indigo-900/90 backdrop-blur-lg"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                    <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                    {capability.title}
                  </h3>

                  {/* Description */}
                  <p className="text-blue-100 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    {capability.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center text-blue-300 font-semibold group-hover:text-white transition-colors duration-300">
                    <span className="relative">
                      Learn More
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${capability.color} rounded-bl-full`}></div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div 
        className="max-w-7xl mx-auto px-4 pb-20 relative z-10"
        ref={(el) => (observerRefs.current[2] = el)}
      >
        <div className={`bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-grid-pattern-dense animate-slide-up"></div>
          </div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
              Ready to Explore Our Capabilities?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Join our community and discover how MTTF's innovative programs can transform your learning journey.
            </p>
            <Link
              to="/membership"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-110 hover:shadow-2xl group/btn animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              Join the Community
              <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-30px) translateX(-10px);
          }
          50% {
            transform: translateY(-15px) translateX(10px);
          }
          75% {
            transform: translateY(-25px) translateX(-5px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes border-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes slide-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-border-spin {
          animation: border-spin 8s linear infinite;
        }

        .animate-slide-up {
          animation: slide-up 20s linear infinite;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .bg-grid-pattern-dense {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </div>
  );
}

export default CapabilityLanding;