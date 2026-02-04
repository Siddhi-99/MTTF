import React from 'react';
import { motion } from 'framer-motion';

const Advisors = ({ onBack }) => {
  const advisors = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Strategy Advisor',
      expertise: 'Educational Technology & Innovation',
      image: '👩‍🏫',
      bio: 'Former Dean of MIT Education, pioneering STEM integration methodologies',
      achievements: ['20+ years in EdTech', 'Published 50+ research papers', 'Global education consultant']
    },
    {
      name: 'Prof. Rajesh Kumar',
      role: 'Academic Excellence Advisor',
      expertise: 'Mathematics & Curriculum Development',
      image: '👨‍🔬',
      bio: 'Award-winning mathematician with extensive experience in curriculum design',
      achievements: ['Fields Medal nominee', 'Developed 15+ curricula', 'Educational policy maker']
    },
    {
      name: 'Dr. Emily Chen',
      role: 'Technology Integration Advisor',
      expertise: 'AI in Education & Digital Learning',
      image: '👩‍💻',
      bio: 'Leading expert in AI-powered learning platforms and adaptive education',
      achievements: ['Founded 3 EdTech startups', 'AI researcher', 'TEDx speaker']
    },
    {
      name: 'Mr. David Thompson',
      role: 'Industry Partnership Advisor',
      expertise: 'Corporate Relations & Funding',
      image: '👨‍💼',
      bio: 'Former Fortune 500 executive specializing in education partnerships',
      achievements: ['Secured $50M+ funding', '100+ corporate partnerships', 'Business strategist']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-screen py-12 px-6"
    >
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        className="mb-8 flex items-center space-x-2 text-amber-300 hover:text-amber-200 backdrop-blur-lg bg-white/10 px-6 py-3 rounded-full border border-white/20"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="font-semibold">Back</span>
      </motion.button>

      {/* Header */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-16"
      >
        <div className="text-6xl mb-4">🎯</div>
        <h2 className="text-5xl font-bold text-white mb-4">
          Our <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Advisors</span>
        </h2>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
          Distinguished experts providing strategic guidance and wisdom
        </p>
      </motion.div>

      {/* Advisors Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {advisors.map((advisor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 h-full overflow-hidden shadow-2xl">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10">
                {/* Avatar */}
                <motion.div
                  className="text-7xl mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {advisor.image}
                </motion.div>

                {/* Name & Role */}
                <h3 className="text-2xl font-bold text-white mb-2">{advisor.name}</h3>
                <p className="text-amber-300 font-semibold mb-2">{advisor.role}</p>
                <p className="text-blue-200 text-sm mb-4 italic">{advisor.expertise}</p>

                {/* Bio */}
                <p className="text-gray-300 leading-relaxed mb-4">{advisor.bio}</p>

                {/* Achievements */}
                <div className="space-y-2">
                  {advisor.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-amber-400 rounded-full" />
                      <span className="text-sm text-gray-300">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Advisors;
