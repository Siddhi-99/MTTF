import React from "react";
import { Link } from "react-router-dom";
import {
  Cpu,
  Briefcase,
  Award,
  CalendarDays,
  Lightbulb,
} from "lucide-react";

const programSections = [
  {
    title: "Capability",
    icon: <Cpu size={22} />,
    items: [
      { name: "Artificial Intelligence", path: "/programs/capability/artificial-intelligence" },
      { name: "Business Intelligence", path: "/programs/capability/business-intelligence" },
      { name: "Bioinformatics", path: "/programs/capability/bioinformatics" },
      { name: "Computational Mathematics", path: "/programs/capability/computational-mathematics" },
      { name: "Data Analytics", path: "/programs/capability/data-analytics" },
      { name: "Quantum Computing", path: "/programs/capability/quantum-computing" },
    ],
  },
  {
    title: "Consultancy Services",
    icon: <Briefcase size={22} />,
    items: [
      {
        name: "Expert Consultancy Services",
        path: "/programs/consultancy-services/expert-consultancy",
      },
      {
        name: "Logistic Support Services",
        path: "/programs/consultancy-services/logistic-support",
      },
      {
        name: "National & International Conference Support",
        path: "/programs/consultancy-services/conference-support",
      },
    ],
  },
  {
    title: "Awards",
    icon: <Award size={22} />,
    items: [
      { name: "Awards 2025", path: "/programs/awards/2025" },
      { name: "Awards 2024", path: "/programs/awards/2024" },
    ],
  },
  {
    title: "Events",
    icon: <CalendarDays size={22} />,
    items: [{ name: "Upcoming Events", path: "/programs/events" }],
  },
];

export default function OurProgramsMegaMenu() {
  return (
    <div className="absolute left-1/2 top-full mt-6 -translate-x-1/2 w-[85vw] max-w-6xl z-50">
      <div className="relative rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/20 shadow-2xl overflow-hidden">

        {/* Top Accent */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400" />

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-10">
          {programSections.map((section, i) => (
            <div key={i} className="space-y-5">
              <div className="flex items-center gap-3 text-blue-400">
                {section.icon}
                <h4 className="text-sm font-semibold uppercase tracking-wider">
                  {section.title}
                </h4>
              </div>

              <ul className="space-y-3">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <Link
                      to={item.path}
                      className="text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 px-10 py-6 flex justify-between items-center bg-black/20">
          <p className="text-sm text-white/70 flex items-center gap-2">
            <Lightbulb size={18} />
            Discover MTTF’s capabilities, consultancy, awards, and events
          </p>

          <Link
            to="/programs"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
