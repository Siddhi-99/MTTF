import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import { 
  Truck, 
  Box, 
  MapPin, 
  Calendar,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Shield,
  Zap
} from "lucide-react";

export default function LogisticSupportServices() {
  const services = [
    {
      icon: <Calendar size={40} />,
      title: "Event Management",
      description: "Complete planning and execution of academic and research events",
      features: [
        "Venue booking and setup",
        "Registration management",
        "Catering arrangements",
        "Audio-visual equipment"
      ]
    },
    {
      icon: <Box size={40} />,
      title: "Resource Coordination",
      description: "Efficient management of resources for research and educational projects",
      features: [
        "Equipment procurement",
        "Material sourcing",
        "Inventory management",
        "Distribution logistics"
      ]
    },
    {
      icon: <MapPin size={40} />,
      title: "Venue & Facilities",
      description: "Access to world-class facilities and venues for your events",
      features: [
        "Conference halls",
        "Laboratory spaces",
        "Meeting rooms",
        "Exhibition areas"
      ]
    },
    {
      icon: <Truck size={40} />,
      title: "Transportation Services",
      description: "Reliable transportation solutions for equipment and participants",
      features: [
        "Equipment transport",
        "Participant shuttles",
        "International shipping",
        "On-site mobility"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Clock size={32} />,
      title: "Time Efficiency",
      description: "Focus on your core work while we handle the logistics"
    },
    {
      icon: <Shield size={32} />,
      title: "Reliable Support",
      description: "Dependable service backed by years of experience"
    },
    {
      icon: <Zap size={32} />,
      title: "Quick Response",
      description: "Rapid deployment and problem resolution"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Header />

      {/* Breadcrumb */}
      <section className="pt-32 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/programs/consultancy-services"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Consultancy Services
          </Link>
        </div>
      </section>

      {/* Hero Section */}
<section className="pb-20 px-4">
  <div className="max-w-7xl mx-auto text-center">
    {/* Section Badge */}
    <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full border border-blue-500/30 mb-8">
      <Truck size={20} />
      <span className="text-sm font-semibold">Section 1</span>
    </div>
    
    {/* Main Heading */}
    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
      Logistic Support Services
    </h1>
    
    {/* Subtitle with gradient */}
    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
      From Planning to Execution
    </h2>
    
    {/* Description - First paragraph */}
    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
      Comprehensive logistical solutions designed to streamline your research projects, 
      academic events, and organizational initiatives.
    </p>
    
    {/* Description - Second paragraph */}
    <p className="text-lg text-gray-400 max-w-5xl mx-auto leading-relaxed">
      From venue coordination to equipment management, we handle every detail so you can 
      focus on what matters most. Our experienced team brings decades of combined experience 
      to help you achieve your research, academic, and organizational objectives.
    </p>
  </div>
</section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Our Logistic Support Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Icon */}
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-400">
                      <CheckCircle2 size={18} className="text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Why Choose Our Logistic Support?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700/50 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center text-green-400 mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Our Support Process
          </h2>
          
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Needs Assessment",
                description: "We begin by understanding your specific logistical requirements, timeline, and budget constraints."
              },
              {
                step: "02",
                title: "Planning & Coordination",
                description: "Our team develops a comprehensive logistics plan, coordinating all necessary resources and vendors."
              },
              {
                step: "03",
                title: "Execution & Monitoring",
                description: "We implement the plan with precision, continuously monitoring progress and adjusting as needed."
              },
              {
                step: "04",
                title: "Follow-up & Support",
                description: "Post-event analysis and ongoing support to ensure everything meets your expectations."
              }
            ].map((phase, index) => (
              <div
                key={index}
                className="flex gap-6 items-start bg-gradient-to-r from-gray-800/50 to-transparent rounded-xl p-6 border-l-4 border-green-500"
              >
                <div className="text-5xl font-bold text-green-500/20">
                  {phase.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700/50">
              <div className="text-5xl font-bold text-green-400 mb-2">300+</div>
              <div className="text-gray-300">Events Supported</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700/50">
              <div className="text-5xl font-bold text-emerald-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700/50">
              <div className="text-5xl font-bold text-teal-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-12 border border-green-500/30 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Need Logistic Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us handle the logistics while you focus on your research and innovation
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contacts"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all shadow-lg"
            >
              Request Support
            </Link>
            <Link
              to="/programs/consultancy-services"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all border border-gray-600"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}