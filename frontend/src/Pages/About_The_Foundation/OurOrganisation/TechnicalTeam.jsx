import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Shield, Cpu, Zap, Terminal } from 'lucide-react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const TechnicalTeam = () => {
  const techTeam = [
    {
      name: 'Alex Rivera',
      role: 'Lead Full-Stack Developer',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      bio: 'Architecting scalable solutions that power our platform.',
      projects: '50+',
      icon: Code,
      color: 'from-cyan-500 to-blue-600',
      github: '#',
      contributions: 'Built entire frontend architecture'
    },
    {
      name: 'Maya Patel',
      role: 'DevOps Engineer',
      tech: ['Docker', 'Kubernetes', 'AWS'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: 'Ensuring 99.9% uptime with robust infrastructure.',
      projects: '40+',
      icon: Database,
      color: 'from-purple-500 to-pink-600',
      github: '#',
      contributions: 'Zero-downtime deployment pipeline'
    },
    {
      name: 'Jordan Lee',
      role: 'Frontend Architect',
      tech: ['Next.js', 'TypeScript', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      bio: 'Crafting beautiful and performant user experiences.',
      projects: '60+',
      icon: Globe,
      color: 'from-emerald-500 to-teal-600',
      github: '#',
      contributions: 'UI/UX component library'
    },
    {
      name: 'Samantha Chen',
      role: 'Mobile Developer',
      tech: ['React Native', 'Swift', 'Kotlin'],
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      bio: 'Building native-like mobile experiences.',
      projects: '35+',
      icon: Smartphone,
      color: 'from-orange-500 to-red-600',
      github: '#',
      contributions: 'Cross-platform mobile app'
    },
    {
      name: 'Marcus Johnson',
      role: 'Security Engineer',
      tech: ['Security', 'Encryption', 'Compliance'],
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      bio: 'Protecting data and ensuring compliance.',
      projects: '30+',
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      github: '#',
      contributions: 'SOC 2 compliance achieved'
    },
    {
      name: 'Emily Zhang',
      role: 'AI/ML Engineer',
      tech: ['Python', 'TensorFlow', 'PyTorch'],
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80',
      bio: 'Implementing intelligent features powered by AI.',
      projects: '45+',
      icon: Cpu,
      color: 'from-violet-500 to-purple-600',
      github: '#',
      contributions: 'Recommendation engine'
    },
    {
      name: 'David Kim',
      role: 'Backend Engineer',
      tech: ['Python', 'Django', 'Redis'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      bio: 'Building robust APIs and microservices.',
      projects: '55+',
      icon: Terminal,
      color: 'from-blue-500 to-indigo-600',
      github: '#',
      contributions: 'RESTful API framework'
    },
    {
      name: 'Lisa Anderson',
      role: 'QA Lead',
      tech: ['Selenium', 'Jest', 'Cypress'],
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80',
      bio: 'Ensuring quality through comprehensive testing.',
      projects: '70+',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      github: '#',
      contributions: 'Automated test coverage 95%'
    }
  ];

  const stats = [
    { label: 'Lines of Code', value: '1M+', icon: Code },
    { label: 'Deployments/Month', value: '200+', icon: Zap },
    { label: 'Uptime', value: '99.9%', icon: Shield },
    { label: 'Response Time', value: '<100ms', icon: Database }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-20 px-4 sm:px-6 lg:px-8">
        {/* Animated Grid Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl backdrop-blur-sm mb-6 border border-cyan-500/20"
            >
              <Code className="w-12 h-12 text-cyan-400" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-mono">
              <span className="text-cyan-400">&lt;</span>
              Technical
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"> Team </span>
              <span className="text-cyan-400">/&gt;</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-mono">
              The brilliant minds building and maintaining our cutting-edge technology stack
            </p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 w-40 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-8 rounded-full"
            />
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                <div className="text-3xl font-bold text-white font-mono mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl overflow-hidden shadow-2xl h-full">
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-20 transition-all duration-500`} />

                  {/* Top Bar with Icon */}
                  <div className={`h-1 bg-gradient-to-r ${member.color}`} />
                  
                  <div className="p-6">
                    {/* Icon Badge */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${member.color} flex items-center justify-center shadow-lg`}
                    >
                      <member.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative w-24 h-24 mx-auto mb-4"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${member.color} rounded-full blur-lg opacity-50`} />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="relative w-full h-full rounded-full object-cover border-2 border-white/20"
                      />
                    </motion.div>

                    {/* Info */}
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-bold text-white mb-1 font-mono">{member.name}</h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-2`}>
                        {member.role}
                      </p>
                      <p className="text-xs text-gray-400 mb-3">{member.bio}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {member.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-lg text-gray-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4 p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-center flex-1">
                        <Code className="w-4 h-4 mx-auto mb-1 text-cyan-400" />
                        <div className="text-sm font-bold text-white font-mono">{member.projects}</div>
                        <div className="text-xs text-gray-500">Projects</div>
                      </div>
                      <div className="w-px h-8 bg-white/10"></div>
                      <div className="text-center flex-1">
                        <Zap className="w-4 h-4 mx-auto mb-1 text-yellow-400" />
                        <div className="text-xs text-gray-400 leading-tight">{member.contributions}</div>
                      </div>
                    </div>

                    {/* GitHub Link */}
                    <motion.a
                      href={member.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`block w-full py-2 bg-gradient-to-r ${member.color} text-white text-sm font-semibold rounded-xl text-center font-mono`}
                    >
                      View GitHub →
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-20"
          >
            <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-10 text-center">
              <Terminal className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-3xl font-bold text-white mb-4 font-mono">
                <span className="text-cyan-400">$</span> Join Our Team
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We're always looking for talented developers to join our mission. Build the future of education technology with us.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl shadow-lg font-mono"
                >
                  View Open Positions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-xl backdrop-blur-sm font-mono hover:bg-white/20 transition-colors"
                >
                  Tech Stack Docs
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TechnicalTeam;