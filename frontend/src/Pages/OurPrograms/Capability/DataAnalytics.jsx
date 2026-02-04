import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, PieChart, LineChart, Database, ArrowLeft, TrendingUp, Activity, Layers } from 'lucide-react';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';

function DataAnalytics() {
  const [isVisible, setIsVisible] = useState({});
  const [dataFlowActive, setDataFlowActive] = useState(false);
  const [chartProgress, setChartProgress] = useState([]);
  const observerRefs = useRef([]);

  useEffect(() => {
    const observers = observerRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [index]: true }));
              if (index === 0) {
                setTimeout(() => setDataFlowActive(true), 500);
              }
              if (index === 1) {
                setTimeout(() => setChartProgress([0, 1, 2, 3]), 300);
              }
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

  const capabilities = [
    {
      icon: PieChart,
      title: "Descriptive Analytics",
      description: "Understanding historical data patterns through visualization and statistical summaries.",
      color: "from-cyan-500 to-blue-600",
      percentage: 85,
      type: "pie"
    },
    {
      icon: Database,
      title: "Diagnostic Analytics",
      description: "Identifying causes and correlations to understand why events occurred.",
      color: "from-blue-600 to-indigo-600",
      percentage: 92,
      type: "database"
    },
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description: "Forecasting trends using ML models and statistical algorithms.",
      color: "from-indigo-600 to-purple-600",
      percentage: 88,
      type: "line"
    },
    {
      icon: BarChart3,
      title: "Prescriptive Analytics",
      description: "Optimizing decisions and outcomes through advanced modeling.",
      color: "from-purple-600 to-pink-600",
      percentage: 95,
      type: "bar"
    }
  ];

  const metrics = [
    { value: '10TB+', label: 'Data Processed', icon: Database },
    { value: '95%', label: 'Accuracy', icon: TrendingUp },
    { value: '1M+', label: 'Insights', icon: Activity },
    { value: '24/7', label: 'Analysis', icon: Layers }
  ];

  const industries = [
    { name: "E-Commerce", impact: "Customer behavior & sales optimization", icon: TrendingUp },
    { name: "Healthcare", impact: "Patient outcomes & operational efficiency", icon: Activity },
    { name: "Finance", impact: "Risk assessment & fraud detection", icon: BarChart3 }
  ];

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Data Flow Particles */}
          {dataFlowActive && (
            <>
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400/60 rounded-full animate-data-flow"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${4 + Math.random() * 3}s`
                  }}
                ></div>
              ))}
            </>
          )}

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            {[...Array(15)].map((_, i) => (
              <line
                key={i}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                className="animate-pulse-line"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </svg>

          {/* Gradient Orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-data-grid opacity-10"></div>
        </div>

        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 pt-8 relative z-10">
          <Link
            to="/programs/capability"
            className="inline-flex items-center text-cyan-300 hover:text-white transition-all duration-300 hover:translate-x-[-4px] group"
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
            {/* Animated Icon */}
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/50 animate-float">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              
              {/* Animated Data Points */}
              <div className="absolute inset-0">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-cyan-400 rounded-full animate-data-point"
                    style={{
                      top: '50%',
                      left: '50%',
                      animationDelay: `${i * 0.3}s`,
                      '--angle': `${i * 90}deg`
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-indigo-200 bg-clip-text text-transparent animate-gradient-x">
                Data Analytics
              </span>
            </h1>
            
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Turning data into actionable intelligence through advanced analytics and visualization.
            </p>

            {/* Key Metrics */}
            <div className="flex justify-center gap-6 mt-12 flex-wrap animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 hover:scale-110 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                  >
                    <Icon className="w-6 h-6 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <div className="text-cyan-200 text-sm">{metric.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Overview Section with Live Chart */}
        <div className="max-w-7xl mx-auto px-4 pb-16 relative z-10">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  The Analytics Journey
                </h2>
                <p className="text-cyan-100 text-lg leading-relaxed mb-4">
                  From raw data to strategic insights, our comprehensive analytics approach helps organizations make data-driven decisions.
                </p>
                <p className="text-cyan-100 text-lg leading-relaxed">
                  We combine descriptive, diagnostic, predictive, and prescriptive analytics to deliver complete business intelligence solutions.
                </p>
              </div>
              
              {/* Animated Data Visualization */}
              <div className="relative h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 border border-cyan-400/30 overflow-hidden">
                {/* Animated Line Chart */}
                <svg className="w-full h-full" viewBox="0 0 300 200">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  
                  {/* Area under curve */}
                  <path
                    d="M0,150 L50,120 L100,140 L150,80 L200,100 L250,60 L300,90 L300,200 L0,200 Z"
                    fill="url(#chartGradient)"
                    className={`transition-all duration-1000 ${isVisible[0] ? 'opacity-100' : 'opacity-0'}`}
                  />
                  
                  {/* Line */}
                  <path
                    d="M0,150 L50,120 L100,140 L150,80 L200,100 L250,60 L300,90"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="3"
                    className="animate-draw-line"
                  />
                  
                  {/* Data Points */}
                  {[0, 50, 100, 150, 200, 250, 300].map((x, i) => {
                    const yValues = [150, 120, 140, 80, 100, 60, 90];
                    return (
                      <circle
                        key={i}
                        cx={x}
                        cy={yValues[i]}
                        r="4"
                        fill="#22d3ee"
                        className="animate-pulse-point"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    );
                  })}
                </svg>
                
                {/* Floating Icons */}
                <LineChart className="absolute top-4 right-4 w-6 h-6 text-cyan-400 animate-pulse" />
                <TrendingUp className="absolute bottom-4 left-4 w-6 h-6 text-blue-400 animate-bounce-slow" />
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div 
          className="max-w-7xl mx-auto px-4 pb-20 relative z-10"
          ref={(el) => (observerRefs.current[1] = el)}
        >
          <h2 className={`text-4xl font-bold text-white mb-12 text-center transition-all duration-1000 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our Analytics Capabilities
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              const isAnimated = chartProgress.includes(i);
              
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cap.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg relative`}>
                        <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                        {/* Pulse Ring */}
                        <div className="absolute inset-0 rounded-xl border-2 border-cyan-400 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                      </div>
                      
                      {/* Percentage Circle */}
                      <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 transform -rotate-90">
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="4"
                            fill="none"
                          />
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="#22d3ee"
                            strokeWidth="4"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 28}`}
                            strokeDashoffset={`${2 * Math.PI * 28 * (1 - (isAnimated ? cap.percentage : 0) / 100)}`}
                            className="transition-all duration-1000 ease-out"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{cap.percentage}%</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors duration-300">
                      {cap.title}
                    </h3>
                    
                    <p className="text-cyan-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {cap.description}
                    </p>

                    {/* Mini Chart Indicator */}
                    <div className="mt-6 flex items-end gap-1 h-8">
                      {[...Array(8)].map((_, idx) => {
                        const height = Math.random() * 100;
                        return (
                          <div
                            key={idx}
                            className={`flex-1 bg-gradient-to-t ${cap.color} rounded-t transition-all duration-1000 hover:scale-110`}
                            style={{
                              height: isAnimated ? `${height}%` : '0%',
                              transitionDelay: `${idx * 50}ms`
                            }}
                          ></div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${cap.color} rounded-bl-full`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Industries Section */}
        <div className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
          <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:from-cyan-600/40 hover:to-blue-600/40 transition-all duration-500">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Industry Applications
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 group cursor-pointer animate-fade-in-up relative overflow-hidden"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Animated Background Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    
                    <Icon className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                      {industry.name}
                    </h4>
                    <p className="text-cyan-100 group-hover:text-white transition-colors">
                      {industry.impact}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 pb-24 relative z-10">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 text-center relative overflow-hidden group hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-data-grid-dense animate-slide-up"></div>
            </div>
            
            {/* Floating Data Icons */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <BarChart3 className="absolute top-10 left-10 w-12 h-12 text-white animate-float" />
              <PieChart className="absolute bottom-10 right-10 w-12 h-12 text-white animate-float" style={{ animationDelay: '1s' }} />
              <LineChart className="absolute top-20 right-20 w-10 h-10 text-white animate-float" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Unlock the Power of Your Data
              </h2>
              <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">
                Start your analytics journey and transform raw data into strategic insights.
              </p>
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-50 transition-all duration-300 hover:scale-110 hover:shadow-2xl group/btn"
              >
                Get Started Now
                <TrendingUp className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes data-flow {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(100vw, -100vh) scale(1);
            opacity: 0;
          }
        }

        @keyframes data-point {
          0%, 100% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateX(40px) scale(0);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateX(40px) scale(1);
            opacity: 1;
          }
        }

        @keyframes pulse-line {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
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

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
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

        @keyframes draw-line {
          0% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
        }

        @keyframes pulse-point {
          0%, 100% {
            opacity: 0.5;
            r: 4;
          }
          50% {
            opacity: 1;
            r: 6;
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

        .animate-data-flow {
          animation: data-flow linear infinite;
        }

        .animate-data-point {
          animation: data-point 3s ease-in-out infinite;
        }

        .animate-pulse-line {
          animation: pulse-line 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-draw-line {
          stroke-dasharray: 1000;
          animation: draw-line 2s ease-out forwards;
        }

        .animate-pulse-point {
          animation: pulse-point 2s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 20s linear infinite;
        }

        .bg-data-grid {
          background-image: 
            linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .bg-data-grid-dense {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </>
  );
}

export default DataAnalytics;