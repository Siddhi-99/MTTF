import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Dna,
  Microscope,
  Activity,
  Pill,
  ArrowLeft,
} from "lucide-react";

import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

function Bioinformatics() {
  const [isVisible, setIsVisible] = useState({});
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

  const researchAreas = [
    {
      icon: Dna,
      title: "Genomics",
      description:
        "DNA sequence analysis, genome mapping, genetic variation studies, and next-generation sequencing analysis.",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: Microscope,
      title: "Proteomics",
      description:
        "Protein structure prediction, function analysis, protein-protein interactions, and computational modeling.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Activity,
      title: "Systems Biology",
      description:
        "Computational modeling of biological systems, pathway analysis, and network-based approaches.",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: Pill,
      title: "Drug Discovery",
      description:
        "Computational drug design, molecular docking, virtual screening, and pharmaceutical research.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const applications = [
    {
      title: "Personalized Medicine",
      description: "Tailored treatments based on genetic profiles",
      delay: "0ms",
    },
    {
      title: "Disease Research",
      description: "Understanding genetic basis of diseases",
      delay: "150ms",
    },
    {
      title: "Drug Development",
      description: "Accelerating pharmaceutical innovation",
      delay: "300ms",
    },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <Header />

      {/* ================= MAIN CONTENT ================= */}
      <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 pt-8 relative z-10">
          <Link
            to="/programs/capability"
            className="inline-flex items-center text-purple-300 hover:text-white transition-all duration-300 hover:translate-x-[-4px] group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-[-4px]" />
            Back to Capabilities
          </Link>
        </div>

        {/* Hero Section */}
        <div 
          className="max-w-7xl mx-auto px-4 pt-20 pb-16 relative z-10"
          ref={(el) => (observerRefs.current[0] = el)}
        >
          <div className={`text-center transition-all duration-1000 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 mb-6 animate-bounce-slow shadow-2xl shadow-purple-500/50">
              <Dna className="w-10 h-10 text-white animate-spin-slow" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 animate-gradient">
              Bioinformatics
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              Bridging biology and computational science to analyze biological
              data and advance life sciences research through innovative
              computational approaches.
            </p>
          </div>
        </div>

        {/* Overview Section */}
        <div 
          className="max-w-7xl mx-auto px-4 pb-16 relative z-10"
          ref={(el) => (observerRefs.current[1] = el)}
        >
          <div className={`bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/30 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-white mb-6 relative inline-block">
              Overview
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full"></span>
            </h2>
            <p className="text-purple-100 text-lg leading-relaxed mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Our Bioinformatics program combines biology, computer science, and
              mathematics to understand and analyze complex biological data.
            </p>
            <p className="text-purple-100 text-lg leading-relaxed animate-fade-in" style={{ animationDelay: "400ms" }}>
              Through interdisciplinary collaboration and cutting-edge research,
              we empower students and researchers to tackle challenging problems
              in modern biology and medicine.
            </p>
          </div>
        </div>

        {/* Research Areas Section */}
        <div 
          className="max-w-7xl mx-auto px-4 pb-16 relative z-10"
          ref={(el) => (observerRefs.current[2] = el)}
        >
          <h2 className={`text-4xl font-bold text-white mb-12 text-center transition-all duration-1000 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Research Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ 
                    transitionDelay: `${index * 150}ms`,
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-purple-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {area.description}
                  </p>
                  <div className="mt-4 h-1 w-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Applications Section */}
        <div 
          className="max-w-7xl mx-auto px-4 pb-20 relative z-10"
          ref={(el) => (observerRefs.current[3] = el)}
        >
          <div className={`bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:from-purple-600/40 hover:to-pink-600/40 transition-all duration-500 ${isVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-white mb-6">
              Real-World Applications
            </h2>
            <p className="text-purple-100 text-lg leading-relaxed mb-8">
              Bioinformatics plays a crucial role in advancing healthcare,
              agriculture, and environmental conservation.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-xl group cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: app.delay }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <div className="w-6 h-6 border-2 border-white rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                    {app.title}
                  </h4>
                  <p className="text-purple-100 group-hover:text-white transition-colors duration-300">
                    {app.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div 
          className="max-w-7xl mx-auto px-4 pb-24 relative z-10"
          ref={(el) => (observerRefs.current[4] = el)}
        >
          <div className={`bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-[1.02] ${isVisible[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
              Shape the Future of Life Sciences
            </h2>
            <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
              Join our bioinformatics community and contribute to groundbreaking
              discoveries.
            </p>
            <Link
              to="/membership"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-fade-in-up group"
              style={{ animationDelay: "400ms" }}
            >
              <span className="inline-flex items-center">
                Get Started
                <ArrowLeft className="w-5 h-5 ml-2 rotate-180 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </>
  );
}

export default Bioinformatics;