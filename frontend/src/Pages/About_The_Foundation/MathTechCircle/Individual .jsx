import React, { useState } from 'react';

export default function MTTFMembership() {
  const [activeSection, setActiveSection] = useState('membership');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        :root {
          --primary-navy: #0f172a;
          --primary-blue: #3b82f6;
          --accent-blue: #60a5fa;
          --text-light: #e2e8f0;
          --text-muted: #94a3b8;
          --card-bg: rgba(15, 23, 42, 0.7);
          --gradient-start: rgba(59, 130, 246, 0.15);
          --gradient-end: rgba(96, 165, 250, 0.05);
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          color: var(--text-light);
          line-height: 1.6;
        }
        
        .heading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
        }
        
        .nav-link {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-blue);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .benefit-card {
          background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .benefit-card:hover {
          transform: translateY(-8px);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
        }
        
        .pricing-card {
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        
        .pricing-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
          transition: left 0.6s ease;
        }
        
        .pricing-card:hover::before {
          left: 100%;
        }
        
        .pricing-card:hover {
          transform: scale(1.05);
          border-color: var(--primary-blue);
        }
        
        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s ease, height 0.6s ease;
        }
        
        .btn-primary:hover::before {
          width: 300px;
          height: 300px;
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        
        .slide-up {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .faq-item {
          transition: all 0.3s ease;
        }
        
        .faq-item:hover {
          background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
        }
        
        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
          margin: 4rem 0;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl heading">M</span>
              </div>
              <div>
                <h1 className="text-xl font-bold heading text-white">MTTF</h1>
                <p className="text-xs text-blue-300">MathTech Thinking Foundation</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="nav-link text-sm font-medium text-gray-300 hover:text-white">Home</a>
              <a href="#about" className="nav-link text-sm font-medium text-gray-300 hover:text-white">About MTTF</a>
              <a href="#membership" className="nav-link text-sm font-medium text-blue-400 hover:text-white">Membership</a>
              <a href="#circle" className="nav-link text-sm font-medium text-gray-300 hover:text-white">Mathtech Circle</a>
              <a href="#chapters" className="nav-link text-sm font-medium text-gray-300 hover:text-white">Chapters</a>
            </nav>
            
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold heading mb-6 fade-in bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
            Become a Member
          </h2>
          <p className="text-xl text-gray-300 mb-8 slide-up" style={{ animationDelay: '0.2s' }}>
            The lifetime membership fee for Indians is ₹2000 and for international members is $200. 
            An invoice link will be sent after registration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up" style={{ animationDelay: '0.4s' }}>
            <button className="btn-primary px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg relative z-10">
              Learn More
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-lg transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold heading mb-4 text-center">Why should you join us?</h3>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto text-center mb-12">
            MTTF invites all professionals in Science, Technology, Engineering, and Mathematics to join our community. 
            MTTF Societies encompass fields like engineering, mathematics, science, and computer science, organizing key 
            events such as conferences, workshops, training, internships, and faculty development programs. These gatherings 
            create valuable opportunities for networking, knowledge-sharing, and collaborative problem-solving. MTTF Society 
            committee members also play an active role in planning and organizing activities, contributing to a vibrant 
            professional community.
          </p>
          
          <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=600&fit=crop" 
              alt="MTTF Community" 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold heading mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Benefits of Joining MTTF
          </h3>
          <p className="text-lg text-gray-300 mb-12 text-center max-w-4xl mx-auto">
            As a member of MTTF, you gain access to a wide array of benefits designed to enhance your professional 
            growth and networking opportunities. Some of the key member benefits at MTTF include:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "👥",
                title: "Networking",
                description: "MTTF provides a platform to connect with a diverse community of Science, Technology, Engineering, and Mathematics (STEM) professionals from around the world. This fosters valuable connections and collaborations with like-minded individuals."
              },
              {
                icon: "📚",
                title: "Professional Development",
                description: "Members have access to conferences, workshops, and faculty development programs organized by MTTF, which offer opportunities to expand knowledge, learn about cutting-edge research, and stay updated on the latest advancements in various STEM fields."
              },
              {
                icon: "💡",
                title: "Knowledge Sharing",
                description: "MTTF encourages the exchange of ideas and information among members, promoting a culture of learning and innovation. You can gain insights from experts in your field and share your own expertise with others."
              },
              {
                icon: "🏆",
                title: "Recognition and Awards",
                description: "Outstanding contributions to STEM are acknowledged and celebrated within MTTF, providing recognition and honor for exceptional achievements."
              },
              {
                icon: "🎯",
                title: "Engaging Activities",
                description: "Members can participate in various activities and events organized by MTTF Societies, tailored to different STEM disciplines, further enhancing engagement and involvement."
              },
              {
                icon: "🔬",
                title: "Research Support",
                description: "MTTF may offer technical support or sponsor events related to research and development, aiding members in their pursuit of innovative projects."
              },
              {
                icon: "🤝",
                title: "Collaboration Opportunities",
                description: "Being part of MTTF opens doors to potential collaborations with industry leaders, researchers, and academics, leading to fruitful partnerships and joint ventures."
              },
              {
                icon: "🌟",
                title: "Community of Support",
                description: "MTTF strives to create a welcoming and supportive environment for all its members, fostering a sense of belonging and camaraderie within the STEM community."
              },
              {
                icon: "📖",
                title: "Access to Resources",
                description: "MTTF may provide access to exclusive resources, publications, and databases, enabling members to access valuable research materials and information."
              },
              {
                icon: "🚀",
                title: "Career Advancement",
                description: "Membership in MTTF can bolster your professional profile and open up new career opportunities through exposure to a global network of STEM professionals and organizations."
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="benefit-card p-6 rounded-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-bold heading mb-3 text-blue-300">{benefit.title}</h4>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="btn-primary px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg relative z-10">
              View All Members
            </button>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-6xl mx-auto"></div>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold heading mb-12 text-center">Lifetime Membership Fee</h3>
          <p className="text-lg text-gray-300 mb-12 text-center max-w-4xl mx-auto">
            New Members, who registered on 1/1/2022 onwards, are required to pay their membership fee within the current 
            month after registration. After the fee confirmation, a membership certificate will be sent via the registered 
            email address.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="pricing-card bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500/30 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold heading mb-2 text-blue-400">₹2000</div>
              <div className="text-xl font-semibold mb-6 text-gray-300">for India</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Lifetime access to all benefits</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Digital membership certificate</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Join up to 3 MTTF Societies</span>
                </li>
              </ul>
            </div>
            
            <div className="pricing-card bg-gradient-to-br from-blue-900 to-blue-800 border-2 border-blue-400 rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <div className="text-5xl font-bold heading mb-2 text-white">$200</div>
              <div className="text-xl font-semibold mb-6 text-blue-200">for International</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-100">Lifetime access to all benefits</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-100">Digital membership certificate</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-100">Join up to 3 MTTF Societies</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/30 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <p className="text-gray-300 text-center">
              <span className="font-semibold text-blue-400">Special pricing:</span> Interested candidates from most 
              underdeveloped countries, such as Eritrea, Guinea, Madagascar, Nigeria, Ethiopia, Malawi, Sierra Leone, 
              Liberia, Congo, and Burundi, only need to pay <span className="font-bold text-green-400">$100</span>. 
              An invoice link will be sent after registration.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-6xl mx-auto"></div>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold heading mb-12 text-center">Frequently Asked Questions</h3>
          
          <div className="space-y-4">
            {[
              {
                question: "How to register for Lifetime Membership?",
                answer: "First click on become a member icon, fill in the required and authentic details in the registration form and submit it. After submission, you will receive an email to activate your account. After successful activation of your account, you will get your Member ID on your email address. Further, registered members can join at most three MTTF-Societies of your interest. To join these societies, you need to log in your account, then go to MTTF-Societies and submit the details."
              },
              {
                question: "When will the lifetime membership certificate for new registered members be provided?",
                answer: "The lifetime membership certificate for new registered members will be issued in the first week of each month."
              },
              {
                question: "What should I do if an old member did not receive their certificate?",
                answer: "If an old member has not received their membership certificate, they should contact MTTF support through the official contact channels provided on the website."
              }
            ].map((faq, index) => (
              <div key={index} className="faq-item border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40">
                <h4 className="text-lg font-semibold heading mb-3 text-blue-400">
                  {index + 1}. {faq.question}
                </h4>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-blue-500/20 py-12 px-4 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="font-bold heading mb-4 text-blue-400">Our Organization</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">Academics</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Executives</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Missions</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Technical Team</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold heading mb-4 text-blue-400">About MTTF</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold heading mb-4 text-blue-400">Mathtech Circle</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">Individual Membership</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Institutional Membership</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold heading mb-4 text-blue-400">Chapters</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">Student Chapter</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">About Chapter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-500/20 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              Udyami Registered MSME • Section 8 • DAB
            </p>
            <p className="text-gray-400 text-sm mt-2">
              An International Educational foundation empowering learners and professionals through Science, 
              Technology, Engineering, and Mathematics.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              © 2026 MathTech Thinking Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}