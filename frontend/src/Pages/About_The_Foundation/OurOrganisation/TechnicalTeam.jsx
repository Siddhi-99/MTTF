import React from 'react';
import { motion } from 'framer-motion';

const TechnicalTeam = ({ onBack }) => {
  const team = [
    {
      name: 'Siddhi Shah',
      role: 'Full Stack Developer',
      image: '👨‍💻',
      bio: 'Building scalable web applications and learning management systems',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
      projects: ['LMS Platform', 'Student Portal', 'Admin Dashboard'],
      github: 'Following Siddhi-99',
      experience: '3 years'
    },
    {
      name: 'Ms. Anjali Desai',
      role: 'Frontend Developer',
      image: '👩‍💻',
      bio: 'Crafting beautiful and intuitive user interfaces',
      skills: ['React', 'TypeScript', 'Tailwind', 'Figma'],
      projects: ['Website Redesign', 'Mobile App UI', 'Component Library'],
      github: 'anjalidev',
      experience: '4 years'
    },
    {
      name: 'Mr. Rahul Joshi',
      role: 'Backend Developer',
      image: '👨‍💻',
      bio: 'Architecting robust APIs and database systems',
      skills: ['Python', 'Django', 'PostgreSQL', 'Redis'],
      projects: ['API Gateway', 'Authentication System', 'Data Pipeline'],
      github: 'rahuljdev',
      experience: '5 years'
    },
    {
      name: 'Ms. Pooja Nair',
      role: 'DevOps Engineer',
      image: '👩‍💻',
      bio: 'Automating deployments and maintaining infrastructure',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS'],
      projects: ['Cloud Migration', 'Auto-scaling', 'Monitoring Setup'],
      github: 'poojadevops',
      experience: '4 years'
    },
    {
      name: 'Mr. Varun Kumar',
      role: 'Mobile Developer',
      image: '👨‍💻',
      bio: 'Creating cross-platform mobile experiences',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      projects: ['MTTF Mobile App', 'Offline Mode', 'Push Notifications'],
      github: 'varunmobile',
      experience: '3 years'
    },
    {
      name: 'Ms. Shreya Patel',
      role: 'UI/UX Designer',
      image: '👩‍🎨',
      bio: 'Designing delightful user experiences',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      projects: ['Design System', 'User Flows', 'Accessibility Audit'],
      github: 'shreyauxdesign',
      experience: '4 years'
    },
    {
      name: 'Mr. Aryan Singh',
      role: 'Data Engineer',
      image: '👨‍💻',
      bio: 'Building data pipelines and analytics systems',
      skills: ['Python', 'Spark', 'Airflow', 'BigQuery'],
      projects: ['Analytics Dashboard', 'Data Warehouse', 'ETL Pipelines'],
      github: 'aryandataeng',
      experience: '3 years'
    },
    {
      name: 'Ms. Isha Gupta',
      role: 'QA Engineer',
      image: '👩‍💻',
      bio: 'Ensuring quality through comprehensive testing',
      skills: ['Selenium', 'Jest', 'Cypress', 'API Testing'],
      projects: ['Test Automation', 'Performance Testing', 'QA Framework'],
      github: 'ishaqaeng',
      experience: '3 years'
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
        className="mb-8 flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 backdrop-blur-lg bg-white/10 px-6 py-3 rounded-full border border-white/20"
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
        <div className="text-6xl mb-4">⚙️</div>
        <h2 className="text-5xl font-bold text-white mb-4">
          Our <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Technical Team</span>
        </h2>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
          Tech innovators building cutting-edge digital solutions
        </p>
      </motion.div>

      {/* Team Stats */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-5xl mx-auto mb-12 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-cyan-400 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              8
            </motion.div>
            <div className="text-sm text-gray-300">Team Members</div>
          </div>
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-teal-400 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              30+
            </motion.div>
            <div className="text-sm text-gray-300">Years Combined</div>
          </div>
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-cyan-300 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              25+
            </motion.div>
            <div className="text-sm text-gray-300">Projects</div>
          </div>
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-teal-300 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              99.9%
            </motion.div>
            <div className="text-sm text-gray-300">Uptime</div>
          </div>
        </div>
      </motion.div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotateY: -20 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ delay: 0.05 * index, duration: 0.5 }}
            whileHover={{ y: -10, rotateY: 5 }}
            className="group"
          >
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 h-full overflow-hidden shadow-xl">
              {/* Tech Grid Background */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-8 grid-rows-8 h-full">
                  {[...Array(64)].map((_, i) => (
                    <div key={i} className="border border-cyan-400" />
                  ))}
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Avatar & Experience */}
                <div className="flex items-start justify-between mb-3">
                  <motion.div
                    className="text-5xl"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {member.image}
                  </motion.div>
                  <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-400/30">
                    {member.experience}
                  </span>
                </div>

                {/* Name & Role */}
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-300 text-sm font-semibold mb-2">{member.role}</p>

                {/* Bio */}
                <p className="text-gray-300 text-xs leading-relaxed mb-3">{member.bio}</p>

                {/* Skills */}
                <div className="mb-3">
                  <p className="text-xs text-gray-400 mb-1">Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-0.5 bg-cyan-500/10 text-cyan-300 rounded border border-cyan-400/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="mb-3">
                  <p className="text-xs text-gray-400 mb-1">Recent Projects:</p>
                  <div className="space-y-1">
                    {member.projects.map((project, i) => (
                      <div key={i} className="flex items-center space-x-1">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                        <span className="text-xs text-gray-400">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center space-x-1 text-xs text-cyan-300">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>{member.github}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechnicalTeam;
