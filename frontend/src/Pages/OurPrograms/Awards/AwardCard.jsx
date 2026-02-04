// frontend/src/Pages/OurPrograms/Awards/AwardCard.jsx
import React from "react";
import {
  SparklesIcon,
  AcademicCapIcon,
  BeakerIcon,
  GlobeAltIcon,
  UsersIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline"; // if you already use heroicons

// Simple icon map – choose what you need per award type
const iconMap = {
  innovation: SparklesIcon,
  academic: AcademicCapIcon,
  research: BeakerIcon,
  global: GlobeAltIcon,
  community: UsersIcon,
  technology: CodeBracketIcon,
};

function AwardCard({ award }) {
  const Icon = iconMap[award.icon] || SparklesIcon;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 px-5 py-5 sm:px-6 sm:py-6 shadow-lg shadow-slate-950/40 backdrop-blur transition hover:-translate-y-1.5 hover:border-blue-400/80 hover:shadow-blue-500/30">
      {/* Glow gradient */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition opacity-">
        <div className="absolute -inset-x-10 top-0 h-24 bg-gradient-to-b from-blue-500/20 via-transparent to-transparent blur-2xl" />
      </div>

      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="inline-flex items-center justify-center rounded-xl bg-slate-900/80 border border-slate-700/70 p-2.5 text-blue-300 group-hover:border-blue-400/90 group-hover:text-blue-200 transition">
          <Icon className="h-5 w-5" />
        </div>

        {award.year && (
          <span className="rounded-full bg-slate-900/80 border border-slate-700/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-300/90">
            {award.year}
          </span>
        )}
      </div>

      {/* Content */}
      <h3 className="mt-4 text-base sm:text-lg font-semibold text-slate-50 group-hover:text-blue-50">
        {award.title}
      </h3>

      <p className="mt-2 text-xs sm:text-sm text-slate-300/85">
        {award.description}
      </p>

      {/* Focus areas / bullets */}
      {award.focus && award.focus.length > 0 && (
        <ul className="mt-3 space-y-1.5 text-xs text-slate-300/90">
          {award.focus.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span className="mt-1 h-1 w-1 rounded-full bg-blue-400 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Footer row */}
      <div className="mt-4 flex items-center justify-between text-[11px] sm:text-xs">
        <div className="flex items-center gap-2 text-slate-300/80">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>{award.audience}</span>
        </div>

        {award.status && (
          <span
            className={`rounded-full border px-2 py-0.5 font-medium ${
              award.status === "Open"
                ? "border-emerald-400/80 bg-emerald-500/10 text-emerald-300"
                : "border-slate-500/80 bg-slate-500/10 text-slate-200"
            }`}
          >
            {award.status}
          </span>
        )}
      </div>
    </article>
  );
}

export default AwardCard;