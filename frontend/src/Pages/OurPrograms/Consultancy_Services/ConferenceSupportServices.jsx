import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import { 
  Calendar, 
  Users, 
  Globe, 
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  Mic,
  Video,
  Award,
  Network
} from "lucide-react";

export default function ConferenceSupportServices() {
  const services = [
    {
      icon: <Calendar size={40} />,
      title: "Conference Planning & Coordination",
      description: "Comprehensive end-to-end conference planning with systematic execution",
      features: [
        "End-to-end conference planning",
        "Schedule management",
        "Speaker & delegate coordination",
        "Session timeline management"
      ]
    },
    {
      icon: <Mic size={40} />,
      title: "Speaker & Keynote Management",
      description: "Professional handling of speakers and keynote presentations",
      features: [
        "Speaker invitation handling",
        "Travel & accommodation support",
        "Session moderation assistance",
        "Live Q&A coordination"
      ]
    },
    {
      icon: <BookOpen size={40} />,
      title: "Paper Submission & Review Support",
      description: "Technical system for research paper management and peer review",
      features: [
        "Research paper submission portal",
        "Abstract review tracking",
        "Reviewer assignment system",
        "Acceptance notification management"
      ]
    },
    {
      icon: <Users size={40} />,
      title: "Registration & Ticketing System",
      description: "Streamlined digital registration and participant management",
      features: [
        "Online participant registration",
        "Digital conference pass generation",
        "QR code-based entry system",
        "Payment tracking integration"
      ]
    },
    {
      icon: <Video size={40} />,
      title: "Virtual & Hybrid Conference Support",
      description: "Modern solutions for online and hybrid conference formats",
      features: [
        "Live streaming management",
        "Zoom / Google Meet integration",
        "Real-time chat moderation",
        "Online polling & feedback collection"
      ]
    },
    {
      icon: <Network size={40} />,
      title: "Logistics & Venue Support",
      description: "Complete venue coordination and technical infrastructure setup",
      features: [
        "Venue setup coordination",
        "Stage & AV support",
        "Seating arrangement planning",
        "Technical troubleshooting"
      ]
    },
    {
      icon: <Globe size={40} />,
      title: "International Collaboration & Networking",
      description: "Facilitating global research partnerships and knowledge exchange",
      features: [
        "Connecting global researchers",
        "Cross-border academic partnerships",
        "International speaker collaborations",
        "Knowledge exchange platform"
      ]
    },
    {
      icon: <Award size={40} />,
      title: "Post-Conference Analytics & Reports",
      description: "Comprehensive analysis and impact assessment of conference outcomes",
      features: [
        "Participant engagement analysis",
        "Feedback report generation",
        "Attendance statistics",
        "Conference impact summary"
      ]
    }
  ];

  const conferenceTypes = [
    {
      icon: <Globe size={32} />,
      title: "International Conferences",
      description: "Large-scale global events with participants from multiple countries",
      capacity: "500-2000+ attendees"
    },
    {
      icon: <Network size={32} />,
      title: "National Conferences",
      description: "Nationwide academic and research conferences",
      capacity: "200-1000 attendees"
    },
    {
      icon: <Mic size={32} />,
      title: "Symposiums & Seminars",
      description: "Focused discussions on specific topics and research areas",
      capacity: "50-300 attendees"
    },
    {
      icon: <Award size={32} />,
      title: "Workshops & Bootcamps",
      description: "Hands-on training sessions and skill development programs",
      capacity: "20-200 attendees"
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
            <Calendar size={20} />
            <span className="text-sm font-semibold">Section 3</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            National & International Conference Support
          </h1>
          
          {/* Animated Subtitle with gradient */}
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
            Empowering Conferences Across Borders
          </h2>
          
          {/* Description - First paragraph */}
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
            Elevate your academic conferences with our comprehensive support services. 
            From initial planning to post-conference publications, we provide everything 
            you need to host successful national and international conferences.
          </p>
          
          {/* Description - Second paragraph */}
          <p className="text-lg text-gray-400 max-w-5xl mx-auto leading-relaxed">
            Connect with leading experts in Science, Technology, Engineering, and Mathematics. 
            Our distinguished team brings decades of combined experience to help you achieve 
            your research, academic, and industry objectives with seamless conference execution.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Our Conference Support Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Icon */}
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
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
                      <CheckCircle2 size={18} className="text-purple-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Types */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Types of Conferences We Support
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conferenceTypes.map((type, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center text-purple-400 mb-4">
                  {type.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                  {type.description}
                </p>
                <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs">
                  {type.capacity}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Conference Organizing Timeline
          </h2>
          
          <div className="space-y-6">
            {[
              {
                phase: "12-18 Months Before",
                title: "Initial Planning",
                tasks: ["Select theme and dates", "Form organizing committee", "Secure venue", "Budget planning"]
              },
              {
                phase: "6-12 Months Before",
                title: "Program Development",
                tasks: ["Invite keynote speakers", "Call for papers", "Create conference website", "Open registration"]
              },
              {
                phase: "3-6 Months Before",
                title: "Preparation Phase",
                tasks: ["Review submissions", "Finalize schedule", "Arrange accommodation", "Marketing campaign"]
              },
              {
                phase: "1-3 Months Before",
                title: "Final Arrangements",
                tasks: ["Confirm all bookings", "Prepare conference materials", "Technical setup", "Participant communication"]
              },
              {
                phase: "During Conference",
                title: "Execution",
                tasks: ["Registration management", "Technical support", "Speaker coordination", "Live streaming"]
              },
              {
                phase: "After Conference",
                title: "Follow-up",
                tasks: ["Publish proceedings", "Distribute certificates", "Feedback collection", "Financial closure"]
              }
            ].map((stage, index) => (
              <div
                key={index}
                className="relative flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-32">
                  <div className="text-purple-400 font-semibold text-sm">
                    {stage.phase}
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-r from-gray-800/80 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {stage.title}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {stage.tasks.map((task, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-400 text-sm">
                        <CheckCircle2 size={16} className="text-purple-400 flex-shrink-0" />
                        {task}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Our Track Record
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Conferences Organized</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
              <div className="text-4xl font-bold text-pink-400 mb-2">20+</div>
              <div className="text-gray-300 text-sm">Countries Represented</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
              <div className="text-4xl font-bold text-indigo-400 mb-2">15K+</div>
              <div className="text-gray-300 text-sm">Total Participants</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
              <div className="text-4xl font-bold text-violet-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-purple-500/30 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Organize Your Conference?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experienced team help you create a memorable and successful conference
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contacts"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all shadow-lg"
            >
              Schedule Consultation
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