import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, TrendingUp, Cpu, GitBranch, ArrowLeft, Sigma, Binary, Infinity } from 'lucide-react';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';

function ComputationalMathematics() {
  const [isVisible, setIsVisible] = useState({});
  const [formulaPositions, setFormulaPositions] = useState([]);
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

  // Generate random positions for floating formulas
  useEffect(() => {
    const positions = Array.from({ length: 15 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10
    }));
    setFormulaPositions(positions);
  }, []);

  const focusAreas = [
    {
      icon: Calculator,
      title: "Numerical Analysis",
      description: "Algorithms, numerical methods, and error analysis.",
      color: "from-indigo-500 to-blue-600",
      formula: "∫ f(x)dx",
      stat: "99.9%",
      statLabel: "Precision"
    },
    {
      icon: TrendingUp,
      title: "Optimization",
      description: "Linear, nonlinear, and constrained optimization techniques.",
      color: "from-blue-600 to-purple-600",
      formula: "min f(x)",
      stat: "O(log n)",
      statLabel: "Complexity"
    },
    {
      icon: GitBranch,
      title: "Mathematical Modeling",
      description: "Simulation, differential equations, and system modeling.",
      color: "from-purple-600 to-indigo-600",
      formula: "dy/dx = f(x)",
      stat: "∞",
      statLabel: "Applications"
    },
    {
      icon: Cpu,
      title: "Scientific Computing",
      description: "High-performance and parallel computing solutions.",
      color: "from-indigo-600 to-cyan-600",
      formula: "P = NP?",
      stat: "10⁹",
      statLabel: "Operations/sec"
    }
  ];

  const mathematicalSymbols = ['∑', '∫', '∂', '∇', 'π', 'θ', 'λ', 'Σ', '∞', '≈', '≤', '≥', '∈', '∀', '∃'];

  const applications = [
    { title: "Physics Simulations", desc: "Modeling complex physical systems", icon: Cpu },
    { title: "Financial Modeling", desc: "Risk analysis and portfolio optimization", icon: TrendingUp },
    { title: "Engineering Solutions", desc: "Structural analysis and optimization", icon: GitBranch }
  ];

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Mathematical Symbols */}
          {formulaPositions.map((pos, i) => (
            <div
              key={i}
              className="absolute text-white/5 text-4xl font-bold animate-float-formula"
              style={{
                top: `${pos.top}%`,
                left: `${pos.left}%`,
                animationDelay: `${pos.delay}s`,
                animationDuration: `${pos.duration}s`
              }}
            >
              {mathematicalSymbols[i % mathematicalSymbols.length]}
            </div>
          ))}

          {/* Geometric Patterns */}
          <div className="absolute top-20 right-20 w-96 h-96 border-4 border-indigo-500/20 rounded-full animate-spin-very-slow"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 border-4 border-purple-500/20 rotate-45 animate-pulse-slow"></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-40 left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-40 right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-math-grid opacity-10"></div>
        </div>

        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 pt-8 relative z-10">
          <Link
            to="/programs/capability"
            className="inline-flex items-center text-indigo-300 hover:text-white transition-all duration-300 hover:translate-x-[-4px] group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-[-4px]" />
            Back to Capabilities
          </Link>
        </div>

        {/* Hero Section */}
        <div 
          className="max-w-7xl mx-auto px-4 pt-20 pb-16 text-center relative z-10"
          ref={(el) => (observerRefs.current[0] = el)}
        >
          <div className={`transition-all duration-1000 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Animated Icon with Mathematical Symbols */}
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-indigo-500/50 animate-float">
                <Calculator className="w-10 h-10 text-white animate-pulse-gentle" />
              </div>
              
              {/* Orbiting Mathematical Symbols */}
              <div className="absolute inset-0 animate-spin-slow">
                <Sigma className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 text-indigo-400" />
                <Infinity className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 text-purple-400" />
              </div>
              <div className="absolute inset-0 animate-spin-reverse">
                <Binary className="absolute top-1/2 -left-2 -translate-y-1/2 w-6 h-6 text-blue-400" />
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-6 h-6 text-indigo-400 font-bold text-xl">π</div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200 bg-clip-text text-transparent animate-gradient-x">
                Computational Mathematics
              </span>
            </h1>
            
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Advanced mathematical methods powered by computation to solve complex real-world problems.
            </p>

            {/* Key Stats */}
            <div className="flex justify-center gap-6 mt-12 flex-wrap animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              {[
                { value: '∞', label: 'Possibilities', icon: Infinity },
                { value: 'O(1)', label: 'Efficiency', icon: TrendingUp },
                { value: '100%', label: 'Accuracy', icon: Calculator }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 hover:scale-110 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                  >
                    <Icon className="w-6 h-6 text-indigo-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-indigo-200 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="max-w-7xl mx-auto px-4 pb-16 relative z-10">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  The Power of Mathematical Computation
                </h2>
                <p className="text-indigo-100 text-lg leading-relaxed mb-4">
                  Computational mathematics bridges the gap between theoretical mathematics and practical problem-solving through algorithmic approaches.
                </p>
                <p className="text-indigo-100 text-lg leading-relaxed">
                  From numerical analysis to optimization, we employ cutting-edge computational techniques to tackle challenges across science and engineering.
                </p>
              </div>
              
              {/* Animated Mathematical Visualization */}
              <div className="relative h-64 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-indigo-400/30 flex items-center justify-center overflow-hidden group">
                {/* Animated Grid */}
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                
                {/* Animated Wave Function */}
                <svg className="w-full h-32 relative z-10" viewBox="0 0 400 100">
                  <path
                    d="M0,50 Q50,20 100,50 T200,50 T300,50 T400,50"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    className="animate-draw-path"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="50%" stopColor="#c084fc" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating Formula */}
                <div className="absolute top-4 right-4 text-indigo-300 text-xl font-mono animate-pulse">
                  Σ(n=1→∞)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Focus Areas */}
        <div 
          className="max-w-7xl mx-auto px-4 pb-20 relative z-10"
          ref={(el) => (observerRefs.current[1] = el)}
        >
          <h2 className={`text-4xl font-bold text-white mb-12 text-center transition-all duration-1000 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Focus Areas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {focusAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <div 
                  key={i} 
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-500 hover:shadow-2xl group cursor-pointer relative overflow-hidden ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ 
                    transitionDelay: `${i * 150}ms`,
                    animationDelay: `${i * 150}ms`
                  }}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Mathematical Pattern Background */}
                  <div className="absolute top-0 right-0 text-8xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500">
                    {area.formula}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      
                      {/* Stat Badge */}
                      <div className="text-right bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm border border-white/20">
                        <div className="text-xl font-bold text-white font-mono">
                          {area.stat}
                        </div>
                        <div className="text-xs text-indigo-300">{area.statLabel}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-200 transition-colors duration-300">
                      {area.title}
                    </h3>
                    
                    <p className="text-indigo-100 leading-relaxed group-hover:text-white transition-colors duration-300 mb-4">
                      {area.description}
                    </p>

                    {/* Formula Display */}
                    <div className="inline-block bg-indigo-900/50 rounded-lg px-4 py-2 border border-indigo-500/30">
                      <code className="text-indigo-300 font-mono text-sm">{area.formula}</code>
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${area.color} animate-border-glow`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Applications Section */}
        <div className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
          <div className="bg-gradient-to-r from-indigo-600/30 to-purple-600/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:from-indigo-600/40 hover:to-purple-600/40 transition-all duration-500">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Real-World Applications
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {applications.map((app, index) => {
                const Icon = app.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 group cursor-pointer animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <Icon className="w-10 h-10 text-indigo-400 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                      {app.title}
                    </h4>
                    <p className="text-indigo-100 group-hover:text-white transition-colors">
                      {app.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 pb-24 relative z-10">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center relative overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-500">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-math-grid-dense animate-slide-diagonal"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Master Mathematical Computing
              </h2>
              <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                Join us to explore the intersection of mathematics and computation.
              </p>
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-50 transition-all duration-300 hover:scale-110 hover:shadow-2xl group/btn"
              >
                Start Learning
                <Calculator className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes float-formula {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.05;
          }
          25% {
            opacity: 0.1;
          }
          50% {
            transform: translateY(-30px) translateX(20px) rotate(5deg);
            opacity: 0.05;
          }
          75% {
            opacity: 0.08;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-gentle {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
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

        @keyframes spin-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes spin-very-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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

        @keyframes border-glow {
          0%, 100% {
            opacity: 0.3;
            filter: blur(10px);
          }
          50% {
            opacity: 0.6;
            filter: blur(15px);
          }
        }

        @keyframes draw-path {
          0% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
        }

        @keyframes slide-diagonal {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-50%, -50%);
          }
        }

        .animate-float-formula {
          animation: float-formula linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 25s linear infinite;
        }

        .animate-spin-very-slow {
          animation: spin-very-slow 60s linear infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-border-glow {
          animation: border-glow 2s ease-in-out infinite;
        }

        .animate-draw-path {
          animation: draw-path 3s ease-in-out infinite;
        }

        .animate-slide-diagonal {
          animation: slide-diagonal 30s linear infinite;
        }

        .bg-math-grid {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 2px, transparent 2px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 2px, transparent 2px);
          background-size: 60px 60px;
        }

        .bg-math-grid-dense {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </>
  );
}

export default ComputationalMathematics;