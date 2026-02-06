import React from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function ResearchIdeasMegaMenu() {
  return (
    <div className="absolute left-1/2 top-full mt-6 -translate-x-1/2 w-[85vw] max-w-6xl z-50">
      <div className="relative rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/20 shadow-2xl overflow-hidden">

        {/* Top Accent */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400" />

        {/* Content */}
        <div className="p-10">
          <div className="max-w-xl">
            {/* Title */}
            <div className="flex items-center gap-3 text-blue-400 mb-5">
              <BookOpen size={22} />
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                Blog
              </h4>
            </div>

            {/* Links */}
            <ul className="space-y-3">
              <li>
                <Link
                  to="/blogs"
                  className="text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  All Blogs
                </Link>
              </li>

              <li>
                <Link
                  to="/blogs/ai-ml"
                  className="text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  AI & Machine Learning
                </Link>
              </li>

              <li>
                <Link
                  to="/blogs/data-science"
                  className="text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Data Science
                </Link>
              </li>

              <li>
                <Link
                  to="/blogs/education"
                  className="text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  STEM Education
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}