import React from 'react';
import { motion } from 'framer-motion';

const Leaders = ({ onBack }) => {
  const leaders = [
    {
      name: 'Dr. Ananya Sharma',
      role: 'Founder & President',
      vision: 'Transforming STEM education globally',
      image: '👩‍💼',
      bio: 'Visionary leader with 25 years of experience in educational innovation and policy reform',
      highlights: ['Founded MTTF in 2010', 'Impacted 100K+ students', 'National Education Award 2023'],
      quote: 'Every student deserves access to world-class STEM education'
    },
    {
      name: 'Mr. Vikram Patel',
      role: 'Vice President',
      vision: 'Building sustainable education ecosystems',
      image: '👨‍💼',
      bio: 'Strategic thinker focused on scalable educational models and community engagement',
      highlights: ['10+ years in leadership', 'Established 50+ chapters', 'Education innovator'],
      quote: 'Impact through collaboration and sustainable growth'
    },
    {
      name: 'Dr. Priya Desai',
      role: 'Director of Programs',
      vision: 'Excellence in program delivery',
      image: '👩‍🎓',
      bio: 'Program design expert committed to measurable learning outcomes and student success',
      highlights: ['Designed 20+ programs', 'PhD in Education', '95% student satisfaction'],
      quote: 'Quality education is the foundation of progress'
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
        className="mb-8 flex items-center space-x-2 text-blue-300 hover:text-blue-200 backdrop-blur-lg bg-white/10 px-6 py-3 rounded-full border border-white/20"
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
        <div className="text-6xl mb-4">👑</div>
        <h2 className="text-5xl font-bold text-white mb-4">
          Our <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Leaders</span>
        </h2>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
          Visionary leaders steering our mission toward excellence
        </p>
      </motion.div>

      {/* Leaders Grid */}
      <div className="max-w-5xl mx-auto space-y-8">
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 group-hover:from-blue-500/20 group-hover:to-indigo-500/20 transition-all duration-500" />

              <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Avatar */}
                <motion.div
                  className="text-8xl md:text-9xl"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {leader.image}
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2">{leader.name}</h3>
                  <p className="text-blue-300 text-xl font-semibold mb-2">{leader.role}</p>
                  <p className="text-indigo-300 italic mb-4">{leader.vision}</p>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">{leader.bio}</p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-4">
                    {leader.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center space-x-2 justify-center md:justify-start"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        <span className="text-sm text-gray-300">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="border-l-4 border-blue-400 pl-4 italic text-blue-200 mt-4"
                  >
                    "{leader.quote}"
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Leaders;
