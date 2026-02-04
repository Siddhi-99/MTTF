// frontend/src/Pages/OurPrograms/Awards/Awards2025.jsx
import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import AwardCard from "./AwardCard";
import { awards2025 } from "./awards2025Data";

function Awards2025() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
      <div className="fixed inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_top,_#3b82f6_0,_transparent_55%),_radial-gradient(circle_at_bottom,_#6366f1_0,_transparent_55%)]" />

      <Header />

      <main className="flex-1 pt-28 pb-20">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Label */}
          <div className="inline-flex items-center rounded-full bg-slate-900/60 border border-slate-700/60 px-3 py-1 text-xs font-medium text-slate-200 mb-4 backdrop-blur">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
            Awards · 2025
          </div>

          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                MTTF{" "}
                <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
                  Awards 2025
                </span>
              </h1>
              <p className="mt-4 max-w-2xl text-sm sm:text-base text-slate-200/80">
                Celebrating outstanding contributions in Science, Technology,
                Engineering, and Mathematics.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {awards2025.map((award) => (
              <AwardCard key={award.id} award={award} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Awards2025;
