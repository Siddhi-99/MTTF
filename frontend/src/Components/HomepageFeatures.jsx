import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Target, Lightbulb, Rocket, Shield } from 'lucide-react';

const MTTFHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      id: 1,
      icon: <Users className="w-10 h-10" />,
      title: "CONSULTING",
      subtitle: "Community Building",
      description: "Connect with like-minded individuals and build lasting professional relationships.",
      color: "from-[#5067AA] to-[#86A6DE]",
      bgColor: "bg-[#5067AA]",
      number: "01"
    },
    {
      id: 2,
      icon: <Target className="w-10 h-10" />,
      title: "STRATEGY",
      subtitle: "Skill Development",
      description: "Access workshops and resources to enhance your capabilities with strategic planning.",
      color: "from-[#86A6DE] to-[#5067AA]",
      bgColor: "bg-[#86A6DE]",
      number: "02"
    },
    {
      id: 3,
      icon: <Lightbulb className="w-10 h-10" />,
      title: "IDEAS",
      subtitle: "Innovation Hub",
      description: "Transform your creative concepts into reality with our innovative approach.",
      color: "from-[#32457B] to-[#5067AA]",
      bgColor: "bg-[#32457B]",
      number: "03"
    },
    {
      id: 4,
      icon: <Rocket className="w-10 h-10" />,
      title: "NEW MEDIA",
      subtitle: "Digital Solutions",
      description: "Stay ahead with cutting-edge digital media strategies and modern technology.",
      color: "from-[#5067AA] to-[#32457B]",
      bgColor: "bg-[#5067AA]",
      number: "04"
    },
    {
      id: 5,
      icon: <Shield className="w-10 h-10" />,
      title: "SECURITY",
      subtitle: "Data Protection",
      description: "Ensure robust security measures and protect your valuable data.",
      color: "from-[#86A6DE] to-[#32457B]",
      bgColor: "bg-[#86A6DE]",
      number: "05"
    }
  ];

  const partners = [
    { name: "Partner 1", logo: "P1" },
    { name: "Partner 2", logo: "P2" },
    { name: "Partner 3", logo: "P3" },
    { name: "Partner 4", logo: "P4" },
    { name: "Partner 5", logo: "P5" },
    { name: "Partner 6", logo: "P6" },
    { name: "Partner 7", logo: "P7" },
    { name: "Partner 8", logo: "P8" },
    { name: "Partner 9", logo: "P9" },
    { name: "Partner 10", logo: "P10" }
  ];

  const glimpses = [
    { id: 1, title: "Workshop 2024", color: "from-[#5067AA] to-[#86A6DE]" },
    { id: 2, title: "Community Event", color: "from-[#86A6DE] to-[#32457B]" },
    { id: 3, title: "Tech Meetup", color: "from-[#32457B] to-[#5067AA]" },
    { id: 4, title: "Annual Conference", color: "from-[#5067AA] to-[#32457B]" },
    { id: 5, title: "Networking Session", color: "from-[#86A6DE] to-[#5067AA]" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % glimpses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + glimpses.length) % glimpses.length);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Welcome Section */}
      <section className="relative overflow-hidden py-24 px-4 bg-gradient-to-br from-[#32457B] via-[#5067AA] to-[#86A6DE]">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#86A6DE]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#5067AA]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block backdrop-blur-xl bg-white/10 px-6 py-2 rounded-full border border-white/20 shadow-lg">
                <span className="text-white/90 font-semibold text-sm tracking-widest uppercase">Welcome</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
                Welcome to <span className="text-[#86A6DE]">MTTF</span>
              </h1>
              
              <div className="backdrop-blur-xl bg-white/10 p-8 rounded-3xl border border-white/20 shadow-2xl">
                <p className="text-lg text-white/90 leading-relaxed">
                  Join our vibrant community dedicated to fostering growth, innovation, and collaboration. 
                  We bring together passionate individuals to create meaningful impact through technology and shared learning experiences.
                </p>
              </div>
              
              <button className="group relative bg-gradient-to-r from-[#5067AA] to-[#86A6DE] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <span className="flex items-center gap-3">
                  Explore More
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
              </button>
            </div>
            
            <div className="relative">
              <div className="w-full h-[500px] backdrop-blur-2xl bg-white/10 rounded-[3rem] shadow-2xl border border-white/20 overflow-hidden transform hover:scale-105 transition-all duration-700">
                <div className="relative h-full flex flex-col items-center justify-center text-white p-8">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 w-48 h-48 -m-8 border-2 border-[#86A6DE]/30 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
                    
                    <div className="relative w-40 h-40 bg-gradient-to-br from-[#5067AA]/40 to-[#86A6DE]/40 backdrop-blur-xl rounded-full flex items-center justify-center border-4 border-white/30 shadow-2xl">
                      <Users className="w-20 h-20 drop-shadow-2xl" />
                    </div>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <p className="text-3xl font-bold drop-shadow-2xl">
                      Join Our Community
                    </p>
                    <p className="text-white/80 text-sm backdrop-blur-sm bg-white/10 px-6 py-2 rounded-full border border-white/20">
                      1000+ Active Members
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-[#86A6DE]/10 px-6 py-2 rounded-full border border-[#86A6DE]/30 mb-6">
              <span className="text-[#32457B] font-semibold text-sm tracking-wider">WHAT WE OFFER</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#32457B] mb-6">
              OUR SERVICES
            </h2>
            <p className="text-[#5067AA] text-lg max-w-3xl mx-auto">
              Comprehensive solutions designed to elevate your business and drive innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl border border-[#86A6DE]/20 p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#5067AA]/40"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="absolute top-4 right-4 text-[#86A6DE]/20 font-bold text-4xl group-hover:text-[#86A6DE]/40 transition-colors duration-300">
                  {service.number}
                </div>

                <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 shadow-lg mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <div className="w-full h-full bg-white/90 rounded-2xl flex items-center justify-center text-[#32457B]">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#32457B] mb-2 text-center group-hover:text-[#5067AA] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-sm text-[#5067AA] mb-4 font-medium text-center group-hover:text-[#32457B] transition-colors duration-300">
                  {service.subtitle}
                </p>

                <p className="text-sm text-[#5067AA]/80 leading-relaxed text-center">
                  {service.description}
                </p>

                <button className={`mt-6 px-6 py-2 rounded-full text-sm font-semibold text-white ${service.bgColor} opacity-0 group-hover:opacity-100 transition-all duration-300 mx-auto block hover:shadow-lg hover:scale-105`}>
                  more info
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#32457B] via-[#5067AA] to-[#86A6DE]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 backdrop-blur-xl bg-white/10 p-10 rounded-3xl border border-white/30 shadow-2xl hover:shadow-white/20 transition-all duration-500">
              <div className="inline-block bg-white/10 px-5 py-2 rounded-full border border-white/30">
                <span className="text-white font-bold text-xs tracking-widest uppercase">Team • Customer • Community</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                We Work With the <br/>
                <span className="text-[#86A6DE]">Best Partners</span>
              </h2>
              
              <p className="text-white/90 text-lg leading-relaxed backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10">
                While we are at the forefront and specialize in design-build, we constantly collaborate with a number of delivery methods and are confident we can find the process that will best help you meet your goals.
              </p>
              
              <button className="group bg-gradient-to-r from-[#86A6DE] to-white text-[#32457B] px-8 py-3 rounded-full font-bold hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Read More
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>

            <div className="backdrop-blur-xl bg-white/10 p-10 rounded-3xl border border-white/30 shadow-2xl">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Our Business Partners</h3>
                <p className="text-white/70 text-sm">Trusted collaborations driving innovation and excellence</p>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="group backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-lg flex items-center justify-center border border-white/20 hover:border-[#86A6DE]/60 cursor-pointer transform hover:scale-110 hover:-translate-y-2 hover:rotate-3 transition-all duration-500"
                    style={{
                      animation: `fadeInScale 0.8s ease-out ${index * 0.1}s both`
                    }}
                  >
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#5067AA] to-[#86A6DE] rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-all duration-300">
                        {partner.logo}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-white/60 text-xs italic bg-white/5 px-4 py-2 rounded-full inline-block border border-white/10">
                  Trusted by industry-leading companies worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 backdrop-blur-xl bg-white/10 p-12 rounded-3xl border border-white/30 shadow-2xl">
            <div className="text-center mb-12">
              <div className="inline-block bg-white/10 px-6 py-2 rounded-full border border-white/20 mb-4">
                <span className="text-white font-semibold text-sm tracking-wider uppercase">Brand Partners</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">
                Brands We've <span className="text-[#86A6DE]">Collaborated With</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[...partners, ...partners.slice(0, 2)].map((partner, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-md bg-white/10 p-8 rounded-xl border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
                  style={{
                    animation: `slideInLeft 1s ease-out ${index * 0.15}s both`
                  }}
                >
                  <div className="text-white/80 group-hover:text-white font-bold text-sm transition-colors duration-300">
                    {partner.logo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.8) translateY(20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </section>

      {/* Glimpses Section */}
      <section className="py-20 px-4 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#32457B] mb-4">Glimpses</h2>
            <p className="text-[#5067AA] text-lg bg-white px-6 py-2 rounded-full border border-[#86A6DE]/30 inline-block">
              Moments from our events and activities
            </p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl border border-[#86A6DE]/30">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {glimpses.map((glimpse) => (
                  <div key={glimpse.id} className="min-w-full">
                    <div className={`h-96 bg-gradient-to-br ${glimpse.color} rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden group`}>
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="text-white text-center relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                        <p className="text-3xl font-bold mb-2">{glimpse.title}</p>
                        <p className="text-lg opacity-90">Event Photo {glimpse.id}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-[#F8F8F8] p-3 rounded-full shadow-xl transition-all duration-300 border border-[#86A6DE]/30 transform hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-[#32457B]" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-[#F8F8F8] p-3 rounded-full shadow-xl transition-all duration-300 border border-[#86A6DE]/30 transform hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-[#32457B]" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {glimpses.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 border border-[#86A6DE]/30 ${
                    currentSlide === index 
                      ? 'bg-[#5067AA] w-8' 
                      : 'bg-[#86A6DE] w-3 hover:scale-125'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MTTFHomepage;