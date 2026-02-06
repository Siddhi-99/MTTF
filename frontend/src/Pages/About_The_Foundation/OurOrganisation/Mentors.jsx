import React from 'react';
import { motion } from 'framer-motion';
import { Heart, BookOpen, Users, Sparkles, MessageCircle, Award } from 'lucide-react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const Mentors = () =>  {
  const mentors = [
    {
      name: 'Prof. Maria Santos',
      specialization: 'Mathematics Education',
      experience: '15 years',
      students: '500+',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      quote: 'Every student has the potential to excel; they just need the right guidance.',
      expertise: ['Calculus', 'Linear Algebra', 'Statistics'],
      rating: 4.9,
      sessions: 1200,
      color: 'from-rose-500 to-pink-600'
    },
    {
      name: 'Dr. Kevin Wu',
      specialization: 'Computer Science',
      experience: '12 years',
      students: '400+',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      quote: 'Code is poetry; let me help you become a poet.',
      expertise: ['Python', 'AI/ML', 'Data Structures'],
      rating: 5.0,
      sessions: 950,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Ms. Priya Sharma',
      specialization: 'Physics & Engineering',
      experience: '10 years',
      students: '350+',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      quote: 'Understanding the universe starts with understanding the fundamentals.',
      expertise: ['Mechanics', 'Electronics', 'Quantum Physics'],
      rating: 4.8,
      sessions: 800,
      color: 'from-purple-500 to-violet-600'
    },
    {
      name: 'Mr. James Miller',
      specialization: 'Data Science',
      experience: '8 years',
      students: '300+',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      quote: 'Data tells stories; I teach you how to listen.',
      expertise: ['Machine Learning', 'Data Analysis', 'Visualization'],
      rating: 4.9,
      sessions: 720,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'Dr. Sofia Chen',
      specialization: 'Chemistry',
      experience: '14 years',
      students: '450+',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80',
      quote: 'Chemistry is the magic of understanding matter and its transformations.',
      expertise: ['Organic Chemistry', 'Biochemistry', 'Lab Techniques'],
      rating: 4.7,
      sessions: 1050,
      color: 'from-orange-500 to-amber-600'
    },
    {
      name: 'Prof. Ahmed Khan',
      specialization: 'Engineering Design',
      experience: '18 years',
      students: '600+',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      quote: 'Design thinking is the bridge between imagination and reality.',
      expertise: ['CAD/CAM', 'Mechanical Design', 'Innovation'],
      rating: 5.0,
      sessions: 1400,
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-3xl backdrop-blur-sm mb-6"
            >
              <Heart className="w-10 h-10 text-rose-400" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Mentors</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate educators dedicated to nurturing talent and inspiring the next generation of innovators
            </p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '10rem' }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1.5 bg-gradient-to-r from-rose-500 to-purple-500 mx-auto mt-8 rounded-full"
            />
          </motion.div>

          {/* Mentors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${mentor.color} opacity-0 group-hover:opacity-20 transition-all duration-500`} />

                  {/* Top Accent */}
                  <div className={`h-2 bg-gradient-to-r ${mentor.color}`} />

                  <div className="p-6">
                    {/* Profile Image */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      className="relative w-32 h-32 mx-auto mb-6"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${mentor.color} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="relative w-full h-full rounded-full object-cover border-4 border-white/20"
                      />
                      <div className={`absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r ${mentor.color} rounded-full flex items-center justify-center border-4 border-slate-900 shadow-lg`}>
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>

                    {/* Name & Specialization */}
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{mentor.name}</h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${mentor.color} bg-clip-text text-transparent mb-2`}>
                        {mentor.specialization}
                      </p>
                      
                      {/* Rating */}
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + i * 0.1 }}
                              className={i < Math.floor(mentor.rating) ? 'text-yellow-400' : 'text-gray-600'}
                            >
                              ⭐
                            </motion.span>
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">{mentor.rating}</span>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/10">
                      <MessageCircle className={`w-5 h-5 mb-2 text-transparent bg-gradient-to-r ${mentor.color} bg-clip-text`} />
                      <p className="text-sm text-gray-300 italic leading-relaxed">
                        "{mentor.quote}"
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="text-center">
                        <BookOpen className={`w-5 h-5 mx-auto mb-1 text-transparent bg-gradient-to-r ${mentor.color} bg-clip-text`} />
                        <div className="text-sm font-bold text-white">{mentor.sessions}</div>
                        <div className="text-xs text-gray-400">Sessions</div>
                      </div>
                      <div className="text-center">
                        <Users className={`w-5 h-5 mx-auto mb-1 text-transparent bg-gradient-to-r ${mentor.color} bg-clip-text`} />
                        <div className="text-sm font-bold text-white">{mentor.students}</div>
                        <div className="text-xs text-gray-400">Students</div>
                      </div>
                      <div className="text-center">
                        <Award className={`w-5 h-5 mx-auto mb-1 text-transparent bg-gradient-to-r ${mentor.color} bg-clip-text`} />
                        <div className="text-sm font-bold text-white">{mentor.experience}</div>
                        <div className="text-xs text-gray-400">Experience</div>
                      </div>
                    </div>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {mentor.expertise.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          className={`px-3 py-1 text-xs font-semibold bg-gradient-to-r ${mentor.color} rounded-full text-white`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 bg-gradient-to-r ${mentor.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow`}
                    >
                      Connect with Mentor
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-20 text-center"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 max-w-3xl mx-auto">
              <Heart className="w-12 h-12 mx-auto mb-4 text-rose-400" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Become a Mentor
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Share your expertise and inspire the next generation. Join our community of passionate educators making a real difference.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-rose-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-shadow"
              >
                Apply to Mentor
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

export default Mentors;