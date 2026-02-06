import React from 'react';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';

function About() {
  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600 py-16 px-4 relative overflow-hidden mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/30">
                🏛️ About MTTF
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              MathTech Thinking
              <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Foundation
              </span>
            </h1>
            <p className="text-purple-100 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation of mathematical thinkers and technology innovators
            </p>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:scale-105 transition-all duration-500 hover:bg-white/15">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-purple-100 text-lg leading-relaxed">
                To foster mathematical thinking and technological innovation among students and professionals, 
                creating a platform where ideas transform into reality through collaborative learning and research.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:scale-105 transition-all duration-500 hover:bg-white/15">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-purple-100 text-lg leading-relaxed">
                To become a global hub for mathematical excellence and technological advancement, 
                where innovation knows no boundaries and every mind has the opportunity to shine.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Core Values</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/20 hover:scale-105 transition-all duration-500 hover:bg-white/15">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
                <p className="text-purple-100 text-sm">Pursuing the highest standards in mathematical thinking and innovation</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/20 hover:scale-105 transition-all duration-500 hover:bg-white/15">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Collaboration</h3>
                <p className="text-purple-100 text-sm">Building partnerships that foster growth and innovation</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/20 hover:scale-105 transition-all duration-500 hover:bg-white/15">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Learning</h3>
                <p className="text-purple-100 text-sm">Continuous education and knowledge sharing for all members</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/20 hover:scale-105 transition-all duration-500 hover:bg-white/15">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                <p className="text-purple-100 text-sm">Encouraging creative solutions and groundbreaking ideas</p>
              </div>
            </div>
          </div>

          {/* What We Do Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:scale-105 transition-all duration-500 hover:bg-white/15">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Research & Development</h3>
                <p className="text-purple-100 leading-relaxed">
                  Conducting cutting-edge research in mathematics and technology, pushing the boundaries of what's possible.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:scale-105 transition-all duration-500 hover:bg-white/15">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Education & Training</h3>
                <p className="text-purple-100 leading-relaxed">
                  Providing comprehensive training programs, workshops, and courses to enhance mathematical and technological skills.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:scale-105 transition-all duration-500 hover:bg-white/15">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Consultancy Services</h3>
                <p className="text-purple-100 leading-relaxed">
                  Offering expert consultancy services to organizations seeking mathematical and technological solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white text-center mb-12">Our Impact</h2>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold text-yellow-300 mb-2">5000+</div>
                  <div className="text-purple-100 text-lg">Students Mentored</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-cyan-300 mb-2">50+</div>
                  <div className="text-purple-100 text-lg">Research Projects</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-emerald-300 mb-2">100+</div>
                  <div className="text-purple-100 text-lg">Workshops Conducted</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-pink-300 mb-2">25+</div>
                  <div className="text-purple-100 text-lg">Partner Institutions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-6">Join Our Community</h2>
              <p className="text-purple-100 text-xl mb-8 max-w-2xl mx-auto">
                Be part of a vibrant community of mathematicians, technologists, and innovators. 
                Together, we can shape the future of mathematical thinking and technological advancement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:scale-105 transition-transform shadow-lg">
                  Become a Member
                </button>
                <button className="px-8 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white hover:bg-white hover:text-purple-600 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
