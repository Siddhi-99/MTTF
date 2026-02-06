import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, BookOpen, TrendingUp } from 'lucide-react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const Advisors = () => {
  const advisors = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Strategy Advisor',
      expertise: 'Educational Technology & Innovation',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: 'Former Dean of MIT Education, pioneering STEM integration methodologies with over two decades of transformative leadership.',
      achievements: ['20+ years in EdTech', 'Published 50+ research papers', 'Global education consultant'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Prof. Rajesh Kumar',
      role: 'Academic Excellence Advisor',
      expertise: 'Mathematics & Curriculum Development',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      bio: 'Award-winning mathematician with extensive experience in curriculum design and educational policy development.',
      achievements: ['Fields Medal nominee', 'Developed 15+ curricula', 'Educational policy maker'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Dr. Emily Chen',
      role: 'Technology Integration Advisor',
      expertise: 'AI in Education & Digital Learning',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      bio: 'Leading expert in AI-powered learning platforms and adaptive education systems for next-generation learners.',
      achievements: ['Founded 3 EdTech startups', 'AI researcher', 'TEDx speaker'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Mr. David Thompson',
      role: 'Industry Partnership Advisor',
      expertise: 'Corporate Relations & Funding',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      bio: 'Former Fortune 500 executive specializing in education partnerships and strategic funding initiatives.',
      achievements: ['Secured $50M+ funding', '100+ corporate partnerships', 'Business strategist'],
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Research & Development Advisor',
      expertise: 'Computational Sciences & Research',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80',
      bio: 'Distinguished researcher in computational mathematics with groundbreaking contributions to the field.',
      achievements: ['30+ peer-reviewed publications', 'Patent holder', 'International speaker'],
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'Prof. Michael Anderson',
      role: 'Global Outreach Advisor',
      expertise: 'International Education & Partnerships',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      bio: 'Expert in building international education networks and fostering cross-cultural academic collaborations.',
      achievements: ['Partnerships in 40+ countries', 'UN Education consultant', 'Cultural ambassador'],
      color: 'from-violet-500 to-purple-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm mb-6"
            >
              <Award className="w-16 h-16 text-blue-400" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Advisors</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Distinguished experts providing strategic guidance, wisdom, and vision to drive our mission forward
            </p>
            
            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '12rem' }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"
            />
          </motion.div>

          {/* Advisors Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl h-full">
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${advisor.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Top Accent Bar */}
                  <div className={`h-2 bg-gradient-to-r ${advisor.color}`} />

                  <div className="p-6">
                    {/* Profile Image */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative w-32 h-32 mx-auto mb-6"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${advisor.color} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                      <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="relative w-full h-full rounded-full object-cover border-4 border-white/20"
                      />
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center border-4 border-slate-900">
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                    </motion.div>

                    {/* Name & Role */}
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{advisor.name}</h3>
                      <p className={`text-transparent bg-gradient-to-r ${advisor.color} bg-clip-text font-semibold mb-2`}>
                        {advisor.role}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                        <BookOpen className="w-4 h-4" />
                        <span className="italic">{advisor.expertise}</span>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                      {advisor.bio}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold mb-2">
                        <TrendingUp className="w-4 h-4" />
                        <span>Key Achievements</span>
                      </div>
                      {advisor.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-start gap-3 group/item"
                        >
                          <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${advisor.color} group-hover/item:scale-150 transition-transform`} />
                          <span className="text-sm text-gray-400 group-hover/item:text-gray-300 transition-colors">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Glow */}
                  <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${advisor.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Join Our Advisory Board
              </h3>
              <p className="text-gray-300 mb-6">
                We're always looking for passionate experts to guide our mission
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Advisors;