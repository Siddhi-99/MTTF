import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Lock, Zap, Network, ArrowLeft, Atom, Binary, Shield, Sparkles } from 'lucide-react';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';

function QuantumComputing() {
  const [isVisible, setIsVisible] = useState({});
  const [quantumState, setQuantumState] = useState(0);
  const [particlePositions, setParticlePositions] = useState([]);
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

  // Quantum state oscillation
  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumState((prev) => (prev + 1) % 2);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Generate quantum particle positions
  useEffect(() => {
    const positions = Array.from({ length: 25 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      scale: 0.5 + Math.random() * 1
    }));
    setParticlePositions(positions);
  }, []);

  const researchAreas = [
    {
      icon: Zap,
      title: "Quantum Algorithms",
      description: "Development of quantum computational methods, Shor's algorithm, Grover's algorithm, and quantum optimization techniques.",
      color: "from-violet-500 to-purple-600",
      notation: "|ψ⟩",
      metric: "O(√n)"
    },
    {
      icon: Lock,
      title: "Quantum Cryptography",
      description: "Secure communication using quantum key distribution, post-quantum cryptography, and quantum-safe security protocols.",
      color: "from-purple-600 to-pink-600",
      notation: "|0⟩|1⟩",
      metric: "100%"
    },
    {
      icon: Network,
      title: "Quantum Simulation",
      description: "Simulating quantum systems, molecular dynamics, and material science applications using quantum computers.",
      color: "from-indigo-500 to-violet-600",
      notation: "⟨ψ|H|ψ⟩",
      metric: "10⁹x"
    },
    {
      icon: Cpu,
      title: "Quantum Machine Learning",
      description: "Integrating quantum computing with AI, quantum neural networks, and hybrid classical-quantum algorithms.",
      color: "from-violet-600 to-indigo-600",
      notation: "∑ᵢ αᵢ|i⟩",
      metric: "Hybrid"
    }
  ];

  const impacts = [
    { title: "Drug Discovery", desc: "Molecular simulation for new medicines", icon: Atom },
    { title: "Optimization", desc: "Solving complex logistics and scheduling", icon: Network },
    { title: "Cryptography", desc: "Quantum-safe security protocols", icon: Shield }
  ];

  const quantumStats = [
    { value: '50+', label: 'Qubits', icon: Atom },
    { value: '99.9%', label: 'Fidelity', icon: Sparkles },
    { value: '10⁹x', label: 'Speedup', icon: Zap },
    { value: '∞', label: 'Potential', icon: Binary }
  ];

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Quantum Particle Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Quantum Particles */}
          {particlePositions.map((pos, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-violet-400 rounded-full animate-quantum-float"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                animationDelay: `${pos.delay}s`,
                animationDuration: `${pos.duration}s`,
                transform: `scale(${pos.scale})`
              }}
            >
              <div className="absolute inset-0 bg-violet-400 rounded-full animate-pulse-glow"></div>
            </div>
          ))}

          {/* Quantum Entanglement Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
            {[...Array(12)].map((_, i) => (
              <path
                key={`line-${i}`}
                d={`M${Math.random() * 100}%,${Math.random() * 100}% Q${Math.random() * 100}%,${Math.random() * 100}% ${Math.random() * 100}%,${Math.random() * 100}%`}
                stroke="url(#quantumGradient)"
                strokeWidth="1"
                fill="none"
                className="animate-quantum-path"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </svg>

          {/* Orbiting Quantum Spheres */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96">
            <div className="absolute inset-0 border-2 border-violet-500/20 rounded-full animate-orbit-slow"></div>
            <div className="absolute inset-4 border-2 border-purple-500/20 rounded-full animate-orbit-reverse"></div>
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-violet-400 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-quantum"></div>
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          
          {/* Quantum Grid */}
          <div className="absolute inset-0 bg-quantum-grid opacity-5"></div>
        </div>

        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 pt-8 relative z-10">
          <Link
            to="/programs/capability"
            className="inline-flex items-center text-violet-300 hover:text-white transition-all duration-300 hover:translate-x-[-4px] group"
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
            {/* Quantum Superposition Icon */}
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-violet-500/50 animate-float relative">
                <Cpu className={`w-10 h-10 text-white transition-all duration-500 ${quantumState === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} absolute`} />
                <Atom className={`w-10 h-10 text-white transition-all duration-500 ${quantumState === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} absolute`} />
              </div>
              
              {/* Quantum State Indicators */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-violet-400 rounded-full animate-pulse-quantum"></div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full animate-pulse-quantum" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              {/* Superposition Rings */}
              <div className="absolute inset-0 -m-4">
                <div className="absolute inset-0 border-2 border-violet-400/30 rounded-full animate-ping-slow"></div>
                <div className="absolute inset-0 border border-purple-400/40 rounded-full animate-ping-slow" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-violet-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent animate-gradient-x">
                Quantum Computing
              </span>
            </h1>
            
            <p className="text-xl text-violet-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Exploring the frontiers of quantum computing technology and its revolutionary 
              applications in solving previously intractable computational problems.
            </p>

            {/* Quantum Stats */}
            <div className="flex justify-center gap-6 mt-12 flex-wrap animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              {quantumStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 hover:scale-110 hover:bg-white/20 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Icon className="w-6 h-6 text-violet-400 mx-auto mb-2 group-hover:scale-110 transition-transform relative z-10" />
                    <div className="text-2xl font-bold text-white relative z-10">{stat.value}</div>
                    <div className="text-violet-200 text-sm relative z-10">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div 
          className="max-w-7xl mx-auto px-4 pb-16 relative z-10"
          ref={(el) => (observerRefs.current[1] = el)}
        >
          <div className={`bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/30 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
                <p className="text-violet-100 text-lg leading-relaxed mb-6">
                  Our Quantum Computing program is at the forefront of one of the most exciting technological 
                  revolutions of our time. We explore quantum mechanics, quantum information theory, and their 
                  applications to develop algorithms and systems that harness the power of quantum phenomena.
                </p>
                <p className="text-violet-100 text-lg leading-relaxed">
                  Students and researchers work with quantum programming languages, simulators, and real quantum 
                  hardware to develop solutions for cryptography, optimization, drug discovery, and artificial 
                  intelligence.
                </p>
              </div>
              
              {/* Quantum Bit Visualization */}
              <div className="relative h-64 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl p-6 border border-violet-400/30 flex items-center justify-center overflow-hidden">
                {/* Bloch Sphere Representation */}
                <div className="relative w-48 h-48">
                  {/* Sphere */}
                  <div className="absolute inset-0 border-2 border-violet-400/40 rounded-full"></div>
                  <div className="absolute inset-2 border border-purple-400/30 rounded-full"></div>
                  
                  {/* State Vector */}
                  <div className="absolute top-1/2 left-1/2 w-1 h-24 bg-gradient-to-b from-violet-400 to-purple-600 origin-bottom animate-quantum-vector" style={{ transform: 'translate(-50%, -100%)' }}></div>
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-violet-400 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-quantum shadow-lg shadow-violet-500/50"></div>
                  
                  {/* Axis Labels */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-violet-300 text-sm font-mono">|0⟩</div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-purple-300 text-sm font-mono">|1⟩</div>
                  
                  {/* Orbiting Particles */}
                  <div className="absolute inset-0 animate-orbit-slow">
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-violet-400 rounded-full -translate-x-1/2"></div>
                  </div>
                  <div className="absolute inset-0 animate-orbit-reverse">
                    <div className="absolute top-1/2 right-0 w-2 h-2 bg-purple-400 rounded-full -translate-y-1/2"></div>
                  </div>
                </div>

                {/* Quantum Notation */}
                <div className="absolute top-4 right-4 text-violet-300 font-mono text-sm">
                  <div className="animate-fade-in">|ψ⟩ = α|0⟩ + β|1⟩</div>
                </div>
              </div>
            </div>
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
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer relative overflow-hidden ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ 
                    transitionDelay: `${index * 150}ms`,
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Quantum Notation Background */}
                  <div className="absolute top-4 right-4 text-8xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500 font-mono">
                    {area.notation}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg relative`}>
                        <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                        {/* Pulse Ring */}
                        <div className="absolute inset-0 rounded-xl border-2 border-violet-400 opacity-0 group-hover:opacity-100 animate-ping-slow"></div>
                      </div>
                      
                      {/* Metric Badge */}
                      <div className="bg-violet-900/50 rounded-lg px-3 py-2 backdrop-blur-sm border border-violet-500/30">
                        <div className="text-lg font-bold text-white font-mono">{area.metric}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-200 transition-colors duration-300">
                      {area.title}
                    </h3>
                    
                    <p className="text-violet-100 leading-relaxed group-hover:text-white transition-colors duration-300 mb-4">
                      {area.description}
                    </p>

                    {/* Quantum State Indicator */}
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${area.color} animate-quantum-progress`}></div>
                      </div>
                      <span className="text-violet-300 text-xs font-mono">{area.notation}</span>
                    </div>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl ${area.color} rounded-tl-full`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Impact Section */}
        <div className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
          <div className="bg-gradient-to-r from-violet-600/30 to-purple-600/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:from-violet-600/40 hover:to-purple-600/40 transition-all duration-500">
            <h2 className="text-3xl font-bold text-white mb-6">Future Impact</h2>
            <p className="text-violet-100 text-lg leading-relaxed mb-8">
              Quantum computing promises to revolutionize industries from pharmaceuticals to finance, 
              offering exponential speedups for specific computational problems and enabling entirely 
              new types of calculations.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {impacts.map((impact, index) => {
                const Icon = impact.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 group cursor-pointer relative overflow-hidden animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Animated Background Wave */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    
                    <Icon className="w-10 h-10 text-violet-400 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-200 transition-colors">
                      {impact.title}
                    </h4>
                    <p className="text-violet-100 group-hover:text-white transition-colors">
                      {impact.desc}
                    </p>
                    
                    {/* Quantum Particles */}
                    <div className="absolute top-2 right-2 flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse-quantum"
                          style={{ animationDelay: `${i * 0.3}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 pb-24 relative z-10">
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl p-12 text-center relative overflow-hidden group hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-500">
            {/* Quantum Wave Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-quantum-grid-dense animate-quantum-wave"></div>
            </div>
            
            {/* Floating Quantum Symbols */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <div className="absolute top-10 left-10 text-4xl text-white font-mono animate-float">|ψ⟩</div>
              <div className="absolute bottom-10 right-10 text-4xl text-white font-mono animate-float" style={{ animationDelay: '1s' }}>⟨φ|</div>
              <div className="absolute top-20 right-20 text-3xl text-white font-mono animate-float" style={{ animationDelay: '0.5s' }}>∑</div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pioneer Quantum Computing
              </h2>
              <p className="text-violet-100 text-lg mb-8 max-w-2xl mx-auto">
                Join the quantum revolution and shape the future of computation.
              </p>
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 bg-white text-violet-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-violet-50 transition-all duration-300 hover:scale-110 hover:shadow-2xl group/btn"
              >
                Explore Program
                <Cpu className="w-5 h-5 group-hover/btn:rotate-180 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes quantum-float {
          0%, 100% {
            transform: translate(0, 0) scale(var(--scale, 1));
            opacity: 0.3;
          }
          25% {
            opacity: 0.6;
          }
          50% {
            transform: translate(20px, -30px) scale(var(--scale, 1));
            opacity: 0.4;
          }
          75% {
            opacity: 0.7;
          }
        }

        @keyframes quantum-path {
          0%, 100% {
            opacity: 0.2;
            stroke-dasharray: 100;
            stroke-dashoffset: 0;
          }
          50% {
            opacity: 0.6;
            stroke-dashoffset: 50;
          }
        }

        @keyframes orbit-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbit-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes pulse-quantum {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
            box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.8);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(3);
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
            transform: scale(1.1);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
          100% {
            transform: scale(2);
            opacity: 0;
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

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes quantum-vector {
          0%, 100% {
            transform: translate(-50%, -100%) rotate(-15deg);
          }
          50% {
            transform: translate(-50%, -100%) rotate(15deg);
          }
        }

        @keyframes quantum-progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes quantum-wave {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-quantum-float {
          animation: quantum-float linear infinite;
        }

        .animate-quantum-path {
          animation: quantum-path 3s ease-in-out infinite;
        }

        .animate-orbit-slow {
          animation: orbit-slow 30s linear infinite;
        }

        .animate-orbit-reverse {
          animation: orbit-reverse 25s linear infinite;
        }

        .animate-pulse-quantum {
          animation: pulse-quantum 2s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-quantum-vector {
          animation: quantum-vector 4s ease-in-out infinite;
        }

        .animate-quantum-progress {
          animation: quantum-progress 3s ease-out forwards;
        }

        .animate-quantum-wave {
          animation: quantum-wave 25s linear infinite;
        }

        .bg-quantum-grid {
          background-image: 
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .bg-quantum-grid-dense {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </>
  );
}

export default QuantumComputing;