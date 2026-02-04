import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import { 
  Users, 
  Brain, 
  Target, 
  Award,
  ArrowLeft,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  Rocket,
  TrendingUp,
  Code,
  BookOpen,
  Zap,
  User,
  Building2,
  ChevronRight
} from "lucide-react";

export default function ExpertConsultancyServices() {
  const expertiseAreas = [
    {
      title: "Technology & Innovation Consulting",
      icon: <Code size={32} />,
      color: "from-blue-500 to-cyan-600",
      points: [
        "AI, ML, and Data Science guidance",
        "Software product strategy",
        "Technology roadmap planning",
        "Emerging tech adoption (AI, IoT, Cloud)"
      ]
    },
    {
      title: "Research & Development Support",
      icon: <BookOpen size={32} />,
      color: "from-purple-500 to-pink-600",
      points: [
        "Assistance in research projects",
        "Literature review & methodology support",
        "Prototype development guidance",
        "Industry-relevant problem statements"
      ]
    },
    {
      title: "Startup & Entrepreneurship Consulting",
      icon: <Rocket size={32} />,
      color: "from-orange-500 to-red-600",
      points: [
        "Idea validation",
        "Business model planning",
        "Pitch deck preparation",
        "MVP (Minimum Viable Product) guidance"
      ]
    },
    {
      title: "Academic & Industry Mentorship",
      icon: <GraduationCap size={32} />,
      color: "from-green-500 to-emerald-600",
      points: [
        "Project mentorship for students",
        "Industry expert sessions",
        "Career roadmap planning",
        "Skill development guidance"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Understand Your Need",
      description: "Meeting + problem discussion",
      icon: <Users size={28} />
    },
    {
      number: "02",
      title: "Analyze & Plan",
      description: "Identify best approach",
      icon: <Target size={28} />
    },
    {
      number: "03",
      title: "Expert Guidance",
      description: "Mentorship, strategy, and technical support",
      icon: <Brain size={28} />
    },
    {
      number: "04",
      title: "Implementation & Review",
      description: "Execution + feedback loop",
      icon: <CheckCircle2 size={28} />
    }
  ];

  const benefits = [
    { icon: <CheckCircle2 size={20} />, text: "Industry-ready knowledge" },
    { icon: <CheckCircle2 size={20} />, text: "Practical problem-solving skills" },
    { icon: <CheckCircle2 size={20} />, text: "Real-world project exposure" },
    { icon: <CheckCircle2 size={20} />, text: "Strong technical foundation" },
    { icon: <CheckCircle2 size={20} />, text: "Career & startup guidance" }
  ];

  const targetAudience = [
    {
      icon: <User size={40} />,
      title: "Students",
      color: "from-blue-500 to-indigo-600",
      points: [
        "Final year projects",
        "Internships",
        "Research work"
      ]
    },
    {
      icon: <Rocket size={40} />,
      title: "Entrepreneurs",
      color: "from-purple-500 to-pink-600",
      points: [
        "Early-stage startups",
        "Idea validation",
        "Product development"
      ]
    },
    {
      icon: <Building2 size={40} />,
      title: "Institutions & Organizations",
      color: "from-orange-500 to-red-600",
      points: [
        "Tech collaborations",
        "Workshops",
        "Consultancy projects"
      ]
    }
  ];

  const highlightProjects = [
    {
      title: "AI-based Smart Agriculture System",
      category: "Agriculture Tech",
      gradient: "from-green-500/20 to-emerald-600/20",
      border: "border-green-500/30"
    },
    {
      title: "Campus Automation Platform",
      category: "Education Tech",
      gradient: "from-blue-500/20 to-cyan-600/20",
      border: "border-blue-500/30"
    },
    {
      title: "Healthcare Analytics Dashboard",
      category: "Healthcare",
      gradient: "from-red-500/20 to-pink-600/20",
      border: "border-red-500/30"
    },
    {
      title: "Startup MVP: AI Chatbot",
      category: "AI & ML",
      gradient: "from-purple-500/20 to-indigo-600/20",
      border: "border-purple-500/30"
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

      {/* Hero Section - NEW DESIGN */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-400/30 mb-6">
            <Zap size={20} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-semibold">Section 1</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Expert Consultancy Services
          </h1>
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            From Ideas to Impact
          </div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
            Industry-aligned guidance for innovation, research, and real-world problem solving.
          </p>
          <p className="text-lg text-gray-400 max-w-5xl mx-auto leading-relaxed">
            Connect with leading experts in Science, Technology, Engineering, and Mathematics. Our distinguished panel of consultants brings decades of combined experience to help you achieve your research, academic, and industry objectives.
          </p>
        </div>
      </section>

      {/* Our Areas of Expertise - ENHANCED GRID */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Areas of Expertise
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive consulting services across technology, research, entrepreneurship, and mentorship
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  {area.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {area.title}
                </h3>

                <ul className="space-y-3">
                  {area.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-400">
                      <ChevronRight size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultancy Services We Offer */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Consultancy Services We Offer
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Research Consultation",
                points: [
                  "Research methodology guidance",
                  "Literature review assistance",
                  "Data analysis support",
                  "Publication strategy"
                ]
              },
              {
                title: "Industry Solutions",
                points: [
                  "Technology implementation",
                  "Process optimization",
                  "Innovation workshops",
                  "Custom solutions development"
                ]
              },
              {
                title: "Academic Support",
                points: [
                  "Curriculum development",
                  "Faculty training programs",
                  "Student mentorship",
                  "Project evaluation"
                ]
              },
              {
                title: "Strategic Advisory",
                points: [
                  "Technology roadmap planning",
                  "Digital transformation",
                  "R&D strategy",
                  "Innovation management"
                ]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Award size={24} className="text-blue-400" />
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400">
                      <CheckCircle2 size={18} className="text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work - PROCESS SECTION */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How We Work
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our proven 4-step process ensures successful outcomes for every project
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all group"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {step.description}
                </p>

                {/* Connecting Arrow (except last one) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 text-purple-400">
                    <ChevronRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Gain - VALUE SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              What You Gain
            </h2>
            <p className="text-gray-400">
              Transform your ideas into impactful solutions with our expert guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gradient-to-r from-gray-800/80 to-gray-900/50 rounded-xl p-4 border border-gray-700/50 hover:border-green-500/50 transition-all group"
              >
                <div className="text-green-400 group-hover:scale-125 transition-transform">
                  {benefit.icon}
                </div>
                <span className="text-gray-300 text-sm font-medium">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Avail This - TARGET AUDIENCE */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Who Can Avail This?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our consultancy services are designed for diverse stakeholders
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${audience.color} flex items-center justify-center text-white mx-auto mb-6 group-hover:rotate-6 transition-transform shadow-lg`}>
                  {audience.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">
                  {audience.title}
                </h3>

                <ul className="space-y-3 text-left">
                  {audience.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Projects - PROJECT SHOWCASE */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Highlight Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real-world projects that showcase the power of expert consultancy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlightProjects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${project.gradient} backdrop-blur-sm rounded-xl p-6 border ${project.border} hover:transform hover:scale-105 transition-all duration-300 cursor-pointer`}
              >
                <div className="absolute top-4 right-4">
                  <TrendingUp size={24} className="text-white/50 group-hover:text-white transition-colors" />
                </div>

                <div className="mt-8">
                  <div className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight size={20} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/30 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Connect with Our Experts Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experienced consultants guide you toward success
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contacts"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all shadow-lg"
            >
              Request Consultation
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