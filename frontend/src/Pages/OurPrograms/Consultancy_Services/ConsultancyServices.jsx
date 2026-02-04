import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import { 
  Users, 
  Truck, 
  Calendar, 
  ArrowRight,
  CheckCircle,
  Briefcase
} from "lucide-react";

export default function ConsultancyServices() {
  const services = [
    {
      title: "Expert Consultancy Services",
      icon: <Users size={48} />,
      description: "Access world-class expertise in STEM fields with our panel of distinguished consultants and subject matter experts.",
      link: "/programs/consultancy-services/expert-consultancy",
      features: [
        "Industry Expert Network",
        "Academic Consultants",
        "Research Guidance",
        "Strategic Advisory"
      ]
    },
    {
      title: "Logistic Support Services",
      icon: <Truck size={48} />,
      description: "Comprehensive logistical support for your research projects, events, and organizational initiatives.",
      link: "/programs/consultancy-services/logistic-support",
      features: [
        "Event Management",
        "Resource Coordination",
        "Equipment Support",
        "Venue Arrangements"
      ]
    },
    {
      title: "Conference Support Services",
      icon: <Calendar size={48} />,
      description: "End-to-end support for organizing successful national and international conferences and symposiums.",
      link: "/programs/consultancy-services/conference-support",
      features: [
        "Conference Planning",
        "Speaker Coordination",
        "Publication Support",
        "Technical Assistance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 mb-6">
            <Briefcase size={20} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-semibold">Our Programs</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Consultancy Services
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering organizations and researchers with expert guidance, 
            logistical excellence, and comprehensive conference support services
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Icon */}
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-400">
                      <CheckCircle size={18} className="text-blue-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold group-hover:gap-4 transition-all"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>

                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose MTTF Consultancy Services?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            With years of experience in STEM education and research, 
            we provide unparalleled support tailored to your specific needs
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Supported</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-gray-300">Expert Consultants</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <div className="text-4xl font-bold text-indigo-400 mb-2">50+</div>
              <div className="text-gray-300">Conferences Organized</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss how our consultancy services can support your goals
          </p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            Contact Us
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}