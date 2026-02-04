import React from 'react';
import { motion } from 'framer-motion';

const Mentors = ({ onBack }) => {
  const mentors = [
    {
      name: 'Dr. Amit Verma',
      specialization: 'Mathematics',
      level: 'Senior Mentor',
      image: '🧮',
      bio: 'PhD in Mathematics, specializing in advanced calculus and problem-solving',
      mentees: 150,
      years: 8,
      achievements: ['Olympiad coach', '98% success rate', 'Published author'],
      focus: ['Competition Math', 'Advanced Calculus', 'Problem Solving']
    },
    {
      name: 'Ms. Riya Sharma',
      specialization: 'Physics',
      level: 'Senior Mentor',
      image: '⚛️',
      bio: 'IIT graduate passionate about making physics accessible and exciting',
      mentees: 120,
      years: 6,
      achievements: ['JEE topper', 'Physics Olympiad', 'Research publications'],
      focus: ['Classical Mechanics', 'Electromagnetism', 'Modern Physics']
    },
    {
      name: 'Mr. Karthik Iyer',
      specialization: 'Computer Science',
      level: 'Lead Mentor',
      image: '💻',
      bio: 'Software engineer turned educator, teaching coding and algorithms',
      mentees: 200,
      years: 5,
      achievements: ['FAANG engineer', 'Open source contributor', 'Hackathon judge'],
      focus: ['Programming', 'Data Structures', 'Web Development']
    },
    {
      name: 'Dr. Lakshmi Nair',
      specialization: 'Chemistry',
      level: 'Senior Mentor',
      image: '🧪',
      bio: 'Chemistry researcher with a passion for hands-on experiments',
      mentees: 90,
      years: 7,
      achievements: ['PhD researcher', 'Lab innovations', 'Science fair judge'],
      focus: ['Organic Chemistry', 'Lab Techniques', 'Chemical Analysis']
    },
    {
      name: 'Mr. Sameer Patel',
      specialization: 'Engineering',
      level: 'Mentor',
      image: '⚙️',
      bio: 'Mechanical engineer mentoring future innovators and problem solvers',
      mentees: 75,
      years: 4,
      achievements: ['Design patents', 'Innovation awards', 'Industry projects'],
      focus: ['Design Thinking', 'Robotics', 'Project Management']
    },
    {
      name: 'Ms. Divya Krishnan',
      specialization: 'Biology',
      level: 'Mentor',
      image: '🧬',
      bio: 'Biotechnology specialist inspiring the next generation of life scientists',
      mentees: 85,
      years: 5,
      achievements: ['Research papers', 'Medical entrance', 'Lab coordinator'],
      focus: ['Molecular Biology', 'Genetics', 'Biotechnology']
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
        className="mb-8 flex items-center space-x-2 text-green-300 hover:text-green-200 backdrop-blur-lg bg-white/10 px-6 py-3 rounded-full border border-white/20"
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
        <div className="text-6xl mb-4">🌟</div>
        <h2 className="text-5xl font-bold text-white mb-4">
          Our <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Mentors</span>
        </h2>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
          Dedicated educators nurturing the next generation of STEM leaders
        </p>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto mb-12 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6"
      >
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-green-400 mb-1">720+</div>
            <div className="text-sm text-gray-300">Total Mentees</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-1">6</div>
            <div className="text-sm text-gray-300">Specializations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-400 mb-1">35+</div>
            <div className="text-sm text-gray-300">Years Combined</div>
          </div>
        </div>
      </motion.div>

      {/* Mentors Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 h-full overflow-hidden shadow-xl">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 group-hover:from-green-500/20 group-hover:to-emerald-500/20 transition-all duration-500" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className="text-5xl"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {mentor.image}
                  </motion.div>
                  <span className="text-xs px-3 py-1 bg-green-500/20 text-green-300 rounded-full border border-green-400/30">
                    {mentor.level}
                  </span>
                </div>

                {/* Name & Specialization */}
                <h3 className="text-xl font-bold text-white mb-1">{mentor.name}</h3>
                <p className="text-green-300 font-semibold mb-3">{mentor.specialization}</p>

                {/* Bio */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{mentor.bio}</p>

                {/* Stats */}
                <div className="flex items-center space-x-4 mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <span className="text-green-400">👥</span>
                    <span className="text-gray-300">{mentor.mentees} mentees</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-emerald-400">📅</span>
                    <span className="text-gray-300">{mentor.years} years</span>
                  </div>
                </div>

                {/* Focus Areas */}
                <div className="mb-3">
                  <p className="text-xs text-gray-400 mb-2">Focus Areas:</p>
                  <div className="flex flex-wrap gap-1">
                    {mentor.focus.map((area, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-green-500/10 text-green-300 rounded-full border border-green-400/20"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <p className="text-xs text-gray-400 mb-2">Key Achievements:</p>
                  <div className="space-y-1">
                    {mentor.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                        <span className="text-xs text-gray-400">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Mentors;
