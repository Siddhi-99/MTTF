import React from "react";
import { Link } from "react-router-dom";

export default function ResearchIdeasMegaMenu() {
  return (
    <div
      className="
        absolute left-1/2 top-full mt-6 -translate-x-1/2
        w-[90vw] max-w-6xl
        rounded-2xl
        bg-gradient-to-br from-[#0b1220] via-[#0e1627] to-[#0b1220]
        border border-white/10
        shadow-2xl
        px-10 py-8
        text-white
      "
    >
      {/* Content wrapper */}
      <div className="max-w-xl">
        {/* Title */}
        <h3 className="text-sm font-semibold tracking-widest text-white/80 uppercase mb-4">
          Blog
        </h3>

        {/* Divider */}
        <div className="h-px w-32 bg-white/20 mb-6" />

        {/* Links */}
        <div className="space-y-5">
          <Link
            to="/blogs"
            className="block text-lg font-medium text-white hover:underline underline-offset-4"
          >
            All Blogs
          </Link>

          <Link
            to="/blogs/ai-ml"
            className="block text-lg text-white/80 hover:text-white transition"
          >
            AI & Machine Learning
          </Link>

          <Link
            to="/blogs/data-science"
            className="block text-lg text-white/80 hover:text-white transition"
          >
            Data Science
          </Link>

          <Link
            to="/blogs/education"
            className="block text-lg text-white/80 hover:text-white transition"
          >
            STEM Education
          </Link>
        </div>
      </div>

      {/* Close icon (visual only) */}
      <div className="absolute top-6 right-6 text-white/70 text-2xl pointer-events-none">
        ×
      </div>
    </div>
  );
}
