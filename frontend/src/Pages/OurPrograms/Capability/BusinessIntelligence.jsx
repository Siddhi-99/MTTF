import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart, Target, Database, ArrowLeft, LineChart, PieChart } from 'lucide-react';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';

function BusinessIntelligence() {
  const [isVisible, setIsVisible] = useState({});
  const [chartAnimations, setChartAnimations] = useState([]);
  const observerRefs = useRef([]);

  useEffect(() => {
    const observers = observerRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [index]: true }));
              if (index === 1) {
                // Trigger chart animations when services section is visible
                setTimeout(() => setChartAnimations([0, 1, 2, 3]), 200);
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

  const services = [
    {
      icon: BarChart,
      title: "Data Visualization",
      description: "Interactive dashboards, real-time reporting, and visual analytics for better decision-making.",
      color: "from-blue-500 to-cyan-400",
      stats: "95%",
      statLabel: "Clarity"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecasting future trends, behavior prediction, and advanced statistical modeling.",
      color: "from-cyan-500 to-blue-500",
      stats: "87%",
      statLabel: "Accuracy"
    },
    {
      icon: Target,
      title: "Performance Metrics",
      description: "KPI tracking, performance monitoring, and strategic business intelligence solutions.",
      color: "from-blue-600 to-indigo-500",
      stats: "92%",
      statLabel: "Efficiency"
    },
    {
      icon: Database,
      title: "Data Warehousing",
      description: "Centralized data management, ETL processes, and enterprise data integration.",
      color: "from-indigo-500 to-purple-500",
      stats: "99%",
      statLabel: "Reliability"
    }
  ];

  const benefits = [
    { label: "Faster Decisions", value: "3x", icon: TrendingUp },
    { label: "Cost Reduction", value: "40%", icon: Target },
    { label: "Data Accuracy", value: "99%", icon: BarChart },
    { label: "ROI Increase", value: "250%", icon: LineChart }
  ];

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Data Stream Lines */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-data-stream"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: '-100%',
                  width: '100%',
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${8 + Math.random() * 4}s`
                }}
              ></div>
            ))}
          </div>

          {/* Floating Data Points */}
          <div className="absolute top-20 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>

        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 pt-8 relative z-10">
          <Link
            to="/programs/capability"
            className="inline-flex items-center text-blue-300 hover:text-white transition-all duration-300 hover:translate-x-[-4px] group"
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
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-2xl shadow-blue-500/50 animate-float">
                <TrendingUp className="w-10 h-10 text-white animate-pulse-gentle" />
              </div>
              {/* Orbiting Dots */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full -translate-x-1/2"></div>
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full -translate-x-1/2"></div>
                <div className="absolute top-1/2 left-0 w-2 h-2 bg-indigo-400 rounded-full -translate-y-1/2"></div>
                <div className="absolute top-1/2 right-0 w-2 h-2 bg-purple-400 rounded-full -translate-y-1/2"></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent animate-gradient-x">
                Business Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Transform data into actionable insights and drive strategic decision-making with cutting-edge analytics.
            </p>

            {/* Key Metrics */}
            <div className="flex justify-center gap-6 mt-12 flex-wrap animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 hover:scale-110 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                    style={{ animationDelay: `${400 + index * 100}ms` }}
                  >
                    <Icon className="w-6 h-6 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-white">{benefit.value}</div>
                    <div className="text-blue-200 text-sm">{benefit.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="max-w-7xl mx-auto px-4 pb-16 relative z-10">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why Business Intelligence?
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-4">
                  In today's data-driven world, organizations need powerful tools to extract meaningful insights from their data and make informed decisions quickly.
                </p>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Our BI solutions combine advanced analytics, intuitive visualization, and predictive modeling to give you a competitive edge.
                </p>
              </div>
              
              {/* Animated Chart Visualization */}
              <div className="relative h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-400/30">
                <div className="absolute inset-0 flex items-end justify-around p-6">
                  {[65, 85, 72, 95, 78].map((height, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 flex-1">
                      <div 
                        className="w-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t-lg transition-all duration-1000 hover:scale-105 relative overflow-hidden group"
                        style={{ 
                          height: isVisible[0] ? `${height}%` : '0%',
                          transitionDelay: `${i * 100}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                      </div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    </div>
                  ))}
                </div>
                <PieChart className="absolute top-4 right-4 w-8 h-8 text-cyan-400 animate-spin-very-slow" />
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div 
          className="max-w-7xl mx-auto px-4 pb-20 relative z-10"
          ref={(el) => (observerRefs.current[1] = el)}
        >
          <h2 className={`text-4xl font-bold text-white mb-12 text-center transition-all duration-1000 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isAnimated = chartAnimations.includes(i);
              
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      
                      {/* Stat Badge */}
                      <div className="text-right">
                        <div className={`text-2xl font-bold text-white transition-all duration-1000 ${isAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                          {service.stats}
                        </div>
                        <div className="text-xs text-blue-300">{service.statLabel}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-blue-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Animated Progress Bar */}
                    <div className="mt-6 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${service.color} transition-all duration-1000 ease-out`}
                        style={{ width: isAnimated ? service.stats : '0%' }}
                      ></div>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl ${service.color} rounded-tl-full`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
          <div className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:from-blue-600/40 hover:to-cyan-600/40 transition-all duration-500">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Real-World Applications
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Retail Analytics", desc: "Customer behavior tracking and sales optimization", icon: Target },
                { title: "Financial Forecasting", desc: "Revenue prediction and risk analysis", icon: TrendingUp },
                { title: "Healthcare Insights", desc: "Patient data analysis and treatment optimization", icon: BarChart }
              ].map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 group cursor-pointer animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <Icon className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                      {useCase.title}
                    </h4>
                    <p className="text-blue-100 group-hover:text-white transition-colors">
                      {useCase.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 pb-24 relative z-10">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center relative overflow-hidden group hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-grid-pattern-dense animate-slide-diagonal"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Data?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Start leveraging business intelligence to make smarter decisions and drive growth.
              </p>
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-110 hover:shadow-2xl group/btn"
              >
                Get Started Today
                <TrendingUp className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes data-stream {
          0% {
            left: -100%;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
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

        @keyframes slide-diagonal {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-50%, -50%);
          }
        }

        .animate-data-stream {
          animation: data-stream linear infinite;
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
          animation: spin-slow 30s linear infinite;
        }

        .animate-spin-very-slow {
          animation: spin-very-slow 20s linear infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-slide-diagonal {
          animation: slide-diagonal 30s linear infinite;
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
    </>
  );
}

export default BusinessIntelligence;