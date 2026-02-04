import React from "react";

export default function AboutFoundationMegaMenu() {
  return (
    <div className="absolute left-1/2 top-full mt-6 w-[900px] -translate-x-1/2 z-50">
      <div
        className="relative rounded-3xl backdrop-blur-2xl 
        bg-gradient-to-br from-white/10 via-white/5 to-white/10 
        p-8 shadow-2xl border border-white/20 overflow-hidden"
      >
        {/* Top Accent */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400" />

        <div className="grid grid-cols-4 gap-10 text-sm">

          {/* OUR ORGANISATION */}
          <div>
            <h3 className="mb-4 font-semibold text-white uppercase tracking-wide">
              Our Organisation
            </h3>
            <ul className="space-y-3">
              <li className="text-white/80 hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                Advisors
              </li>
              <li className="text-white/80 hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                Leaders
              </li>
              <li className="text-white/80 hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                Executives
              </li>
              <li className="text-white/80 hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                Mentors
              </li>
              <li className="text-white/80 hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                Technical Team
              </li>
            </ul>
          </div>

          {/* ABOUT MTTF */}
          <div>
            <h3 className="mb-4 font-semibold text-white uppercase tracking-wide">
              About MTTF
            </h3>
            <ul className="space-y-3">
              <li className="text-white/80 hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                About
              </li>
              <li className="text-white/80 hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          {/* MATHTECH CIRCLE */}
          <div>
            <h3 className="mb-4 font-semibold text-white uppercase tracking-wide">
              MathTech Circle
            </h3>
            <ul className="space-y-3">
              <li className="text-white/80 hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                Individual Membership
              </li>
              <li className="text-white/80 hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                Institutional Membership
              </li>
            </ul>
          </div>

          {/* CHAPTERS */}
          <div>
            <h3 className="mb-4 font-semibold text-white uppercase tracking-wide">
              Chapters
            </h3>
            <ul className="space-y-3">
              <li className="text-white/80 hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                Student Chapter
              </li>
              <li className="text-white/80 hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                About Chapter
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
