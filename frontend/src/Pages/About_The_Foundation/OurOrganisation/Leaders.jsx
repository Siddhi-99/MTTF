import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Zap, Globe } from 'lucide-react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const Leaders = () => {
  const leaders = [
    {
      name: 'Dr. James Morrison',
      role: 'Executive Director',
      expertise: 'Organizational Leadership',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'Visionary leader with 25 years of experience transforming educational institutions globally.',
      contributions: ['Founded 5 educational initiatives', 'Impacted 100K+ students', 'Award-winning leader'],
      social: { linkedin: '#', twitter: '#', email: '#' },
      color: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'Ms. Linda Zhang',
      role: 'Director of Operations',
      expertise: 'Strategic Planning & Execution',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
      bio: 'Expert in operational excellence and strategic implementation with proven track record.',
      contributions: ['Scaled operations 10x', 'Process optimization expert', '15+ years leadership'],
      social: { linkedin: '#', twitter: '#', email: '#' },
      color: 'from-violet-500 to-purple-600'
    },
    {
      name: 'Dr. Ahmed Hassan',
      role: 'Director of Academic Programs',
      expertise: 'Curriculum Innovation',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      bio: 'Pioneering educator revolutionizing STEM education through innovative methodologies.',
      contributions: ['Designed 20+ programs', 'Ph.D. in Education', 'International acclaim'],
      social: { linkedin: '#', twitter: '#', email: '#' },
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Mrs. Sofia Rodriguez',
      role: 'Director of Research',
      expertise: 'Educational Research & Analytics',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      bio: 'Leading researcher in educational outcomes and data-driven learning strategies.',
      contributions: ['60+ research publications', 'Data science expert', 'Policy advisor'],
      social: { linkedin: '#', twitter: '#', email: '#' },
      color: 'from-pink-500 to-rose-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 150 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm mb-6"
            >
              <Users className="w-10 h-10 text-purple-400" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Leaders</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Driving innovation and excellence through visionary leadership and unwavering commitment
            </p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="h-1.5 w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mt-8 rounded-full"
            />
          </motion.div>

          {/* Leaders Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03, rotateY: 2 }}
                className="group"
              >
                <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${leader.color} opacity-0 group-hover:opacity-10 transition-all duration-500`} />

                  {/* Top Accent */}
                  <div className={`h-2 bg-gradient-to-r ${leader.color}`} />

                  <div className="p-8 flex flex-col md:flex-row gap-6">
                    {/* Profile Image */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative flex-shrink-0"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${leader.color} rounded-2xl blur-2xl opacity-40`} />
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="relative w-48 h-48 rounded-2xl object-cover border-4 border-white/20 shadow-xl"
                      />
                      <div className={`absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r ${leader.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <Target className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white mb-2">{leader.name}</h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${leader.color} bg-clip-text text-transparent mb-2`}>
                        {leader.role}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                        <Zap className="w-4 h-4" />
                        <span className="italic">{leader.expertise}</span>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-6">
                        {leader.bio}
                      </p>

                      {/* Contributions */}
                      <div className="space-y-2 mb-6">
                        {leader.contributions.map((contribution, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${leader.color}`} />
                            <span className="text-sm text-gray-400">{contribution}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-3">
                        {Object.entries(leader.social).map(([platform, link]) => (
                          <motion.a
                            key={platform}
                            href={link}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-10 h-10 rounded-full bg-gradient-to-r ${leader.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
                          >
                            {platform === 'linkedin' && '💼'}
                            {platform === 'twitter' && '🐦'}
                            {platform === 'email' && '📧'}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { icon: Users, label: 'Team Members', value: '50+', color: 'from-blue-500 to-cyan-500' },
              { icon: Globe, label: 'Countries', value: '30+', color: 'from-purple-500 to-pink-500' },
              { icon: Target, label: 'Projects', value: '100+', color: 'from-emerald-500 to-teal-500' },
              { icon: Zap, label: 'Impact', value: '200K+', color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-3 text-transparent bg-gradient-to-r ${stat.color} bg-clip-text`} />
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Leaders;