import React from 'react';
import { motion } from 'framer-motion';

const Executives = ({ onBack }) => {
  const executives = [
    {
      name: 'Ms. Kavya Reddy',
      role: 'Chief Operating Officer',
      department: 'Operations',
      image: '👩‍💼',
      bio: 'Streamlining operations and ensuring organizational efficiency',
      expertise: ['Operations Management', 'Process Optimization', 'Team Leadership'],
      projects: ['Automated workflow systems', 'Reduced costs by 30%', 'Scaled operations 10x']
    },
    {
      name: 'Mr. Arjun Mehta',
      role: 'Chief Financial Officer',
      department: 'Finance',
      image: '👨‍💻',
      bio: 'Managing financial strategy and ensuring sustainable growth',
      expertise: ['Financial Planning', 'Budget Management', 'Investment Strategy'],
      projects: ['$5M fund management', 'Financial sustainability plan', 'Transparent reporting']
    },
    {
      name: 'Dr. Sneha Gupta',
      role: 'Chief Academic Officer',
      department: 'Academics',
      image: '👩‍🏫',
      bio: 'Driving academic excellence and curriculum innovation',
      expertise: ['Curriculum Design', 'Quality Assurance', 'Faculty Development'],
      projects: ['15+ new courses', 'Teacher training programs', 'Academic partnerships']
    },
    {
      name: 'Mr. Rohit Singh',
      role: 'Chief Technology Officer',
      department: 'Technology',
      image: '👨‍💻',
      bio: 'Leading digital transformation and technology innovation',
      expertise: ['Software Development', 'IT Infrastructure', 'Innovation Strategy'],
      projects: ['Built learning platform', 'Mobile app launch', 'Cloud migration']
    },
    {
      name: 'Ms. Neha Kapoor',
      role: 'Chief Marketing Officer',
      department: 'Marketing & Outreach',
      image: '👩‍💼',
      bio: 'Building brand presence and expanding community reach',
      expertise: ['Digital Marketing', 'Brand Strategy', 'Community Building'],
      projects: ['500% social growth', '50+ media features', 'National campaigns']
    },
    {
      name: 'Mr. Aditya Kumar',
      role: 'Chief Human Resources Officer',
      department: 'Human Resources',
      image: '👨‍💼',
      bio: 'Fostering talent development and organizational culture',
      expertise: ['Talent Acquisition', 'Culture Building', 'Employee Engagement'],
      projects: ['Hired 200+ members', 'Wellness programs', '95% retention rate']
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
        className="mb-8 flex items-center space-x-2 text-purple-300 hover:text-purple-200 backdrop-blur-lg bg-white/10 px-6 py-3 rounded-full border border-white/20"
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
        <div className="text-6xl mb-4">💼</div>
        <h2 className="text-5xl font-bold text-white mb-4">
          Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Executives</span>
        </h2>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
          Executive leadership driving operational excellence
        </p>
      </motion.div>

      {/* Executives Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {executives.map((exec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="group"
          >
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 h-full overflow-hidden shadow-xl">
              {/* Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                whileHover={{ scale: 1.1 }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Avatar */}
                <motion.div
                  className="text-6xl mb-3"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {exec.image}
                </motion.div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-white mb-1">{exec.name}</h3>
                <p className="text-purple-300 font-semibold text-sm mb-1">{exec.role}</p>
                <p className="text-pink-300 text-xs mb-3 italic">{exec.department}</p>

                {/* Bio */}
                <p className="text-gray-300 text-sm leading-relaxed mb-3">{exec.bio}</p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {exec.expertise.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-purple-500/20 text-purple-200 rounded-full border border-purple-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Projects */}
                <div className="space-y-1">
                  {exec.projects.map((project, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-xs text-gray-400">{project}</span>
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

export default Executives;
