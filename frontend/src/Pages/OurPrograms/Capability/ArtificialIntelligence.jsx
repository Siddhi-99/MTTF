import React from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  Network,
  Eye,
  MessageSquare,
  Sparkles,
  Zap,
  Code,
  Database,
} from "lucide-react";

import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

function ArtificialIntelligence() {
  const keyAreas = [
    {
      icon: Brain,
      title: "Machine Learning",
      description:
        "Advanced ML algorithms, supervised and unsupervised learning, and predictive modeling techniques.",
    },
    {
      icon: Network,
      title: "Neural Networks",
      description:
        "Deep learning architectures, convolutional networks, and recurrent neural networks for complex pattern recognition.",
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description:
        "Text analysis, sentiment analysis, language understanding, and generation technologies.",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description:
        "Image recognition, object detection, facial recognition, and visual data processing.",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes particle-float {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(100px, -800px) rotate(360deg);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
        
        .particle {
          animation: particle-float 15s linear infinite;
        }
        
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
      `}</style>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-[#050b2e] via-[#0b1c4d] to-[#0f2b6d] relative overflow-hidden">
        {/* ===== Animated Background Elements ===== */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large Glowing Orbs */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
          
          {/* Rotating Gradient Circles */}
          <div className="absolute top-20 right-1/4 w-64 h-64 border-2 border-blue-400/20 rounded-full animate-rotate-slow" />
          <div className="absolute bottom-40 left-1/3 w-48 h-48 border-2 border-indigo-400/20 rounded-full animate-rotate-slow" style={{ animationDelay: '5s', animationDirection: 'reverse' }} />
          
          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-2 h-2 bg-blue-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: '-20px',
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            />
          ))}
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ 
                 backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                 backgroundSize: '50px 50px'
               }} 
          />
          
          {/* Tech Icons Floating */}
          <div className="absolute top-32 left-20 opacity-10 animate-float">
            <Code className="w-12 h-12 text-blue-400" />
          </div>
          <div className="absolute top-64 right-32 opacity-10 animate-float" style={{ animationDelay: '1s' }}>
            <Database className="w-16 h-16 text-indigo-400" />
          </div>
          <div className="absolute bottom-32 right-1/4 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
            <Zap className="w-10 h-10 text-purple-400" />
          </div>
        </div>

        {/* ===== Hero Section with Enhanced Animations ===== */}
        <div className="max-w-7xl mx-auto px-4 pt-32 pb-24 relative z-10">
          <div className="text-center">
            {/* Animated Icon Container */}
            <div className="relative inline-block mb-8 animate-slide-up">
              {/* Outer Ring */}
              <div className="absolute inset-0 w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-500/30 to-indigo-600/30 blur-xl animate-pulse-glow" />
              
              {/* Main Icon */}
              <div className="relative inline-flex items-center justify-center w-28 h-28 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl animate-float">
                <Brain className="w-14 h-14 text-white animate-pulse" />
                
                {/* Sparkle Effects */}
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-300 animate-pulse" />
                <Sparkles className="absolute -bottom-1 -left-1 w-4 h-4 text-blue-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>

            {/* Title with Gradient */}
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight animate-slide-up delay-1">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-2">
              Engineering intelligent systems that learn, reason, and evolve — 
              <span className="text-blue-300 font-semibold"> shaping the next era of digital intelligence.</span>
            </p>

            {/* Decorative Line */}
            <div className="mt-8 flex justify-center gap-2 animate-slide-up delay-3">
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full" />
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full" />
            </div>
          </div>
        </div>

        {/* ===== Overview Section ===== */}
        <div className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-white/20 hover:border-blue-400/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] animate-slide-up delay-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-indigo-600 rounded-full" />
              <h2 className="text-3xl font-bold text-white">Overview</h2>
            </div>

            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              Our Artificial Intelligence program advances intelligent technologies by blending 
              <span className="text-blue-300 font-semibold"> theory, experimentation, and real-world deployment</span> of AI systems.
            </p>

            <p className="text-blue-100 text-lg leading-relaxed">
              From predictive intelligence to cognitive automation, we cultivate innovation-driven minds prepared for future challenges.
            </p>
          </div>
        </div>

        {/* ===== Key Areas Section ===== */}
        <div className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Key Areas of Focus
            </span>
          </h2>
          <p className="text-center text-blue-300 mb-14 text-lg">Explore our specialized domains of expertise</p>

          <div className="grid md:grid-cols-2 gap-8">
            {keyAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 
                             hover:border-blue-400/60 transition-all duration-500
                             hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]
                             hover:-translate-y-2 cursor-pointer
                             animate-slide-up"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  {/* Icon with Glow Effect */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 w-16 h-16 bg-blue-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600
                                    flex items-center justify-center
                                    group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-blue-100 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-6 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-sm font-semibold mr-2">Learn more</span>
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== Research Section with Cards ===== */}
        <div className="max-w-7xl mx-auto px-4 pb-24 relative z-10">
          <div className="bg-gradient-to-r from-blue-600/30 to-indigo-600/30 backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-white/20 hover:border-blue-400/30 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">Research & Innovation</h2>
            </div>

            <p className="text-blue-100 text-lg leading-relaxed mb-10">
              We explore ethical, scalable, and industry-ready AI systems through interdisciplinary research and applied innovation.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Ethical AI",
                  desc: "Transparent, fair and accountable AI systems",
                  icon: "🛡️"
                },
                {
                  title: "Industry Applications",
                  desc: "Healthcare, fintech, education & automation",
                  icon: "🏭"
                },
                {
                  title: "Future Technologies",
                  desc: "AGI, self-learning & adaptive systems",
                  icon: "🚀"
                }
              ].map(({ title, desc, icon }, i) => (
                <div
                  key={i}
                  className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer border border-white/10 hover:border-blue-400/40"
                >
                  <div className="text-4xl mb-4">{icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {title}
                  </h4>
                  <p className="text-blue-100">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== CTA Section with Enhanced Design ===== */}
        <div className="max-w-7xl mx-auto px-4 pb-28 relative z-10">
          <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-14 text-center shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }} />
            </div>

            {/* Glowing Effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Join Our AI Community
              </h2>

              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                Collaborate, innovate, and build the intelligent systems of tomorrow.
              </p>

              <Link
                to="/membership"
                className="inline-flex items-center gap-2 bg-white text-blue-700 px-10 py-4 rounded-full
                           font-semibold text-lg hover:scale-105 transition-all duration-300
                           shadow-xl hover:shadow-2xl group"
              >
                <span>Get Started</span>
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ArtificialIntelligence;