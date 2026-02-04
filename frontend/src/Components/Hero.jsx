import React, { useEffect, useState } from "react";

const images = [
  // AI & ML
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80",

  // Data Science
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80",

  // Mathematics
  "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=2000&q=80",

  // Programming / Technology
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80",

  // Research & Innovation
  "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?auto=format&fit=crop&w=2000&q=80"
];

export default function MTTFHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000); // slide every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Slider */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out
              ${index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"}
            `}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Overlay (lighter than before for better image visibility) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="max-w-5xl text-center text-white">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            MathTech Thinking <br />
            <span className="text-blue-400">Foundation</span>
          </h1>

          <p className="text-blue-300 text-lg md:text-xl font-medium mb-4">
            Udyam-Registered MSME • Section 8 • 12AB
          </p>

          <p className="text-white/85 text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed">
            An international educational foundation empowering learners and
            professionals through Science, Technology, Engineering, and Mathematics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all shadow-xl text-lg font-semibold">
              Explore Programs
            </button>
            <button className="px-8 py-4 rounded-xl border border-white/70 hover:bg-white hover:text-black transition-all text-lg font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all
              ${i === current ? "bg-blue-400 scale-125" : "bg-white/50"}
            `}
          />
        ))}
      </div>

    </section>
  );
}
