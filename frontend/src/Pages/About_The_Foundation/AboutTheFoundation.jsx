import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OurOrganisation from './OurOrganisation/OurOrganisation';
import AboutMTTF from './AboutMTTF/AboutMTTF';

const AboutTheFoundation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch(activeSection) {
      case 'organisation':
        return <OurOrganisation onBack={() => setActiveSection('home')} />;
      case 'about-mttf':
        return <AboutMTTF onBack={() => setActiveSection('home')} />;
      default:
        return <HomePage onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>
    </div>
  );
};

const HomePage = ({ onNavigate }) => {
  const sections = [
    {
      id: 'organisation',
      title: 'Our Organisation',
      description: 'Meet the dedicated team driving our mission forward',
      icon: '🏢',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'about-mttf',
      title: 'About MTTF',
      description: 'Learn about our foundation, vision, and impact',
      icon: '📚',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-20"
    >
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-20"
      >
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          About The <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Foundation</span>
        </h1>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
          Discover the people and purpose behind MathTech Thinking Foundation
        </p>
      </motion.div>

      {/* Section Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            onClick={() => onNavigate(section.id)}
            className="cursor-pointer group"
          >
            <div className="relative h-full">
              {/* Glassmorphic Card */}
              <div className="relative h-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 overflow-hidden shadow-2xl">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  className="text-6xl mb-6"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {section.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {section.title}
                </h3>
                <p className="text-blue-200 text-lg leading-relaxed mb-6">
                  {section.description}
                </p>

                {/* Arrow */}
                <motion.div
                  className="flex items-center text-blue-300 font-semibold"
                  initial={{ x: 0 }}
                  whileHover={{ x: 10 }}
                >
                  Explore
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutTheFoundation;
