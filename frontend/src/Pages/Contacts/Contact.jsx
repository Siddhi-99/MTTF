import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [selectedOption, setSelectedOption] = useState('');
  const [showMascot, setShowMascot] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!\n\nName: ' + formData.name + '\nEmail: ' + formData.email + '\nMessage: ' + formData.message);
    setFormData({ name: '', email: '', message: '' });
    setSelectedOption('');
  };

  const inquiryOptions = [
    { id: 'internship', icon: '💼', label: 'Internship Inquiry', placeholder: 'Hi MTTF team, I am interested in your internship program...' },
    { id: 'workshop', icon: '🎓', label: 'Workshop / Webinar', placeholder: 'Hi, I would like to know more about your workshops and webinars...' },
    { id: 'collaboration', icon: '🤝', label: 'Collaboration', placeholder: 'Hello, I am interested in collaborating with MTTF on...' },
    { id: 'support', icon: '🌐', label: 'Website / Tech Support', placeholder: 'Hi, I need help with technical support regarding...' },
    { id: 'general', icon: '❓', label: 'General Query', placeholder: 'Hi MTTF team, I have a question about...' }
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.id);
    setFormData({
      ...formData,
      message: option.placeholder
    });
  };

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600 py-16 px-4 relative overflow-hidden mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold border border-white/30">
                💬 Let's Connect
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Let's Build Something
              <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </h1>
            <p className="text-purple-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Have a question, idea, or just want to say hello? Our team at MTTF is here to turn your vision into reality. Drop us a message and let's start the conversation!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information Section */}
            <div className="space-y-6">
              {/* Address */}
              <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl p-6 hover:from-white/25 hover:to-white/10 transition-all duration-500 border border-white/20 hover:border-white/40 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-start space-x-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-emerald-400 to-teal-500 p-4 rounded-xl transform group-hover:rotate-6 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                      Visit Our Office
                      <span className="ml-2 text-emerald-300 text-sm">📍</span>
                    </h3>
                    <p className="text-purple-100 leading-relaxed">SN #4, Fazilka-Abohar Road</p>
                    <p className="text-purple-100 leading-relaxed">Near Bus Stand, Fazilka-152123</p>
                    <p className="text-emerald-300 font-semibold mt-1">Punjab, India</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl p-6 hover:from-white/25 hover:to-white/10 transition-all duration-500 border border-white/20 hover:border-white/40 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-start space-x-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-amber-400 to-orange-500 p-4 rounded-xl transform group-hover:rotate-6 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                      Give Us a Call
                      <span className="ml-2 text-amber-300 text-sm">📞</span>
                    </h3>
                    <p className="text-purple-100 text-sm mb-2">Available Mon - Sat, 9 AM - 6 PM IST</p>
                    <a href="tel:+918968294003" className="text-amber-300 font-bold text-lg hover:text-amber-200 transition-colors">
                      +91-896-829-4003
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl p-6 hover:from-white/25 hover:to-white/10 transition-all duration-500 border border-white/20 hover:border-white/40 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-start space-x-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-pink-400 to-rose-500 p-4 rounded-xl transform group-hover:rotate-6 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                      Send Us an Email
                      <span className="ml-2 text-pink-300 text-sm">✉️</span>
                    </h3>
                    <p className="text-purple-100 text-sm mb-2">We reply within 12-24 hours</p>
                    <a href="mailto:contactus@mttf.in" className="text-pink-300 font-bold text-lg hover:text-pink-200 transition-colors">
                      contactus@mttf.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Live Location Map Section */}
              <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl p-6 hover:from-white/25 hover:to-white/10 transition-all duration-500 border border-white/20 hover:border-white/40 hover:shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="mr-2 text-2xl">🗺️</span> Locate Us on Map
                </h3>
                <div className="relative h-52 bg-gradient-to-br from-purple-900/60 to-indigo-900/60 rounded-xl overflow-hidden border-2 border-white/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute w-24 h-24 bg-cyan-400 rounded-full animate-ping opacity-40"></div>
                      <div className="absolute w-20 h-20 bg-cyan-500 rounded-full animate-pulse opacity-50"></div>
                      <div className="relative w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                    <p className="text-white font-semibold text-sm">📍 Fazilka, Punjab</p>
                    <p className="text-cyan-300 text-xs">Click to view in maps</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Ready to Get Started?
              </h2>

              {/* How Can We Help You Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  How Can We Help You?
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {inquiryOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleOptionClick(option)}
                      className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                        selectedOption === option.id
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <span className="mr-1">{option.icon}</span>
                      <span className="block text-xs mt-1">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </div>

              {/* Trust Badges Section */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                  <div className="text-2xl mb-1">⏳</div>
                  <div className="text-xs font-semibold text-gray-700">Avg. Response</div>
                  <div className="text-xs text-gray-600">12 Hours</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                  <div className="text-2xl mb-1">🔐</div>
                  <div className="text-xs font-semibold text-gray-700">Data is</div>
                  <div className="text-xs text-gray-600">Secure</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                  <div className="text-2xl mb-1">📧</div>
                  <div className="text-xs font-semibold text-gray-700">We Reply to</div>
                  <div className="text-xs text-gray-600">Every Message</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Mascot */}
        <div className="fixed bottom-8 right-8 z-50">
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setShowMascot(true)}
            onMouseLeave={() => setShowMascot(false)}
            onClick={() => setShowMascot(!showMascot)}
          >
            {/* Speech Bubble */}
            {showMascot && (
              <div className="absolute bottom-20 right-0 w-64 bg-white rounded-2xl shadow-2xl p-4 animate-bounce">
                <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45"></div>
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  Hi! Need help? 😊
                </p>
                <p className="text-xs text-gray-600">
                  Drop us a message and we'll reply within 24 hours!
                </p>
              </div>
            )}
            
            {/* Mascot Robot */}
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center animate-pulse hover:scale-110 transition-transform">
              <div className="text-white text-4xl">🤖</div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 w-20 h-20 bg-blue-400 rounded-full blur-xl opacity-50 animate-ping"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;