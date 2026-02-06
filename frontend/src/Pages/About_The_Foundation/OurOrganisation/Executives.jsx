import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Mail, Phone, Linkedin, ChevronDown, Star } from 'lucide-react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const Executives = () => {
  const [selectedExecutive, setSelectedExecutive] = useState(null);

  const executives = [
    {
      name: 'Mr. Robert Chen',
      role: 'Chief Executive Officer',
      department: 'Executive Leadership',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      bio: 'Transformational leader with 20+ years driving organizational growth and innovation in the education sector.',
      responsibilities: [
        'Strategic vision and direction',
        'Board governance and stakeholder relations',
        'Organizational culture and values',
        'Financial oversight and sustainability'
      ],
      achievements: [
        'Grew organization revenue by 300%',
        'Expanded to 15 new markets',
        'Led successful $20M fundraising'
      ],
      contact: { email: 'robert.chen@mttf.org', phone: '+1 (555) 001-0001', linkedin: '#' },
      color: 'from-blue-600 to-indigo-700'
    },
    {
      name: 'Ms. Jennifer Williams',
      role: 'Chief Financial Officer',
      department: 'Finance & Administration',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80',
      bio: 'Financial strategist ensuring fiscal responsibility and sustainable growth through data-driven decisions.',
      responsibilities: [
        'Financial planning and analysis',
        'Budget management and controls',
        'Risk management and compliance',
        'Investment strategy'
      ],
      achievements: [
        'Implemented cost-saving measures saving $5M',
        'Achieved 98% budget accuracy',
        'AAA credit rating maintenance'
      ],
      contact: { email: 'jennifer.w@mttf.org', phone: '+1 (555) 001-0002', linkedin: '#' },
      color: 'from-emerald-600 to-teal-700'
    },
    {
      name: 'Dr. Marcus Johnson',
      role: 'Chief Academic Officer',
      department: 'Academic Excellence',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      bio: 'Educational innovator committed to academic excellence and cutting-edge curriculum development.',
      responsibilities: [
        'Curriculum design and quality',
        'Faculty development',
        'Academic partnerships',
        'Student outcomes assessment'
      ],
      achievements: [
        '95% student satisfaction rate',
        'Partnerships with 50+ universities',
        'Award-winning programs'
      ],
      contact: { email: 'marcus.j@mttf.org', phone: '+1 (555) 001-0003', linkedin: '#' },
      color: 'from-purple-600 to-pink-700'
    },
    {
      name: 'Ms. Aisha Patel',
      role: 'Chief Technology Officer',
      department: 'Technology & Innovation',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: 'Tech visionary leveraging cutting-edge technology to enhance educational experiences and outcomes.',
      responsibilities: [
        'Technology strategy and roadmap',
        'Digital transformation initiatives',
        'Platform architecture',
        'Cybersecurity and data privacy'
      ],
      achievements: [
        'Launched AI-powered learning platform',
        'Reduced system downtime by 99.9%',
        'Led digital transformation'
      ],
      contact: { email: 'aisha.p@mttf.org', phone: '+1 (555) 001-0004', linkedin: '#' },
      color: 'from-cyan-600 to-blue-700'
    },
    {
      name: 'Mr. Thomas Anderson',
      role: 'Chief Marketing Officer',
      department: 'Marketing & Communications',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      bio: 'Brand strategist building awareness and engagement through innovative marketing campaigns.',
      responsibilities: [
        'Brand strategy and positioning',
        'Digital marketing campaigns',
        'Public relations',
        'Community engagement'
      ],
      achievements: [
        '500% increase in brand awareness',
        '2M+ social media followers',
        'Award-winning campaigns'
      ],
      contact: { email: 'thomas.a@mttf.org', phone: '+1 (555) 001-0005', linkedin: '#' },
      color: 'from-orange-600 to-red-700'
    },
    {
      name: 'Dr. Lisa Kumar',
      role: 'Chief People Officer',
      department: 'Human Resources',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      bio: 'People champion fostering a culture of excellence, diversity, and continuous growth.',
      responsibilities: [
        'Talent acquisition and retention',
        'Learning and development',
        'Culture and engagement',
        'Diversity and inclusion'
      ],
      achievements: [
        '92% employee satisfaction',
        'Reduced turnover by 40%',
        'Best workplace award winner'
      ],
      contact: { email: 'lisa.k@mttf.org', phone: '+1 (555) 001-0006', linkedin: '#' },
      color: 'from-pink-600 to-rose-700'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm mb-6"
            >
              <Briefcase className="w-10 h-10 text-blue-400" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Executive <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Leadership</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the executive team steering our organization towards excellence and innovation
            </p>
          </motion.div>

          {/* Executives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((exec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedExecutive(exec)}
              >
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl h-full">
                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exec.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Top Bar */}
                  <div className={`h-2 bg-gradient-to-r ${exec.color}`} />

                  <div className="p-6">
                    {/* Profile Section */}
                    <div className="relative mb-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative w-32 h-32 mx-auto"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${exec.color} rounded-full blur-xl opacity-50`} />
                        <img
                          src={exec.image}
                          alt={exec.name}
                          className="relative w-full h-full rounded-full object-cover border-4 border-white/20"
                        />
                        <div className={`absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r ${exec.color} rounded-full flex items-center justify-center border-4 border-slate-900`}>
                          <Star className="w-5 h-5 text-white" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Info */}
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-white mb-1">{exec.name}</h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${exec.color} bg-clip-text text-transparent mb-1`}>
                        {exec.role}
                      </p>
                      <p className="text-xs text-gray-400">{exec.department}</p>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-3">
                      {exec.bio}
                    </p>

                    {/* View Details Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-2 bg-gradient-to-r ${exec.color} text-white font-semibold rounded-xl flex items-center justify-center gap-2`}
                    >
                      View Details
                      <ChevronDown className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Modal */}
          <AnimatePresence>
            {selectedExecutive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedExecutive(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, y: 50 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 50 }}
                  onClick={(e) => e.stopPropagation()}
                  className="max-w-4xl w-full backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
                >
                  <div className={`h-2 bg-gradient-to-r ${selectedExecutive.color}`} />
                  
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Image */}
                      <img
                        src={selectedExecutive.image}
                        alt={selectedExecutive.name}
                        className="w-48 h-48 rounded-2xl object-cover border-4 border-white/20"
                      />

                      {/* Content */}
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-white mb-2">{selectedExecutive.name}</h2>
                        <p className={`text-xl font-semibold bg-gradient-to-r ${selectedExecutive.color} bg-clip-text text-transparent mb-4`}>
                          {selectedExecutive.role}
                        </p>
                        <p className="text-gray-300 mb-6">{selectedExecutive.bio}</p>

                        {/* Responsibilities */}
                        <div className="mb-6">
                          <h3 className="text-lg font-bold text-white mb-3">Key Responsibilities</h3>
                          <div className="space-y-2">
                            {selectedExecutive.responsibilities.map((resp, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${selectedExecutive.color}`} />
                                <span className="text-sm text-gray-300">{resp}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h3 className="text-lg font-bold text-white mb-3">Notable Achievements</h3>
                          <div className="space-y-2">
                            {selectedExecutive.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <Star className={`w-4 h-4 mt-0.5 text-transparent bg-gradient-to-r ${selectedExecutive.color} bg-clip-text`} />
                                <span className="text-sm text-gray-300">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Contact */}
                        <div className="flex flex-wrap gap-4">
                          <a href={`mailto:${selectedExecutive.contact.email}`} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white">
                            <Mail className="w-4 h-4" />
                            {selectedExecutive.contact.email}
                          </a>
                          <a href={`tel:${selectedExecutive.contact.phone}`} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white">
                            <Phone className="w-4 h-4" />
                            {selectedExecutive.contact.phone}
                          </a>
                          <a href={selectedExecutive.contact.linkedin} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white">
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedExecutive(null)}
                      className="mt-6 w-full py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Executives;