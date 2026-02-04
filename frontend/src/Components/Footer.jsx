import React from "react";
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden pt-40 pb-12 text-white">

      {/* Professional Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#32457B] via-[#5067AA] to-[#32457B]"></div>

      {/* Floating Glow Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#86A6DE]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#5067AA]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '500ms'}}></div>

      {/* Divider Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-[#86A6DE]/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* CTA Glass Strip */}
        <div className="mb-24 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl hover:shadow-[#86A6DE]/20 transition-all duration-500">
          <h3 className="text-3xl md:text-4xl font-bold">
            Ready to grow with <span className="text-[#86A6DE]">MTTF</span>?
          </h3>
          <button className="px-10 py-4 rounded-2xl bg-gradient-to-r from-[#5067AA] to-[#86A6DE] font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
            Join the Community
          </button>
        </div>

        {/* Main Footer Card */}
        <div className="backdrop-blur-2xl bg-white/5 border border-white/20 rounded-3xl shadow-2xl">

          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 px-10 py-16">

            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5067AA] to-[#86A6DE] flex items-center justify-center font-bold text-xl shadow-lg">
                  M
                </div>
                <div>
                  <h3 className="text-xl font-semibold">MTTF</h3>
                  <p className="text-xs text-white/60">
                    MathTech Thinking Foundation
                  </p>
                </div>
              </div>

              <p className="text-sm text-white/70 leading-relaxed max-w-sm">
                An international educational foundation empowering learners,
                innovators, and professionals through STEM education, research,
                and community-driven initiatives.
              </p>
            </div>

            {/* Foundation */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#86A6DE] mb-6">
                Foundation
              </h4>
              <ul className="space-y-3 text-sm text-white/65">
                {["About Us", "Leadership", "Vision & Mission", "Membership"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:text-[#86A6DE] transition hover:translate-x-1 inline-block"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#86A6DE] mb-6">
                Contact
              </h4>
              <div className="space-y-3 text-sm text-white/65">
                <p className="hover:text-[#86A6DE] transition cursor-pointer">contactus@mttf.in</p>
                <p className="hover:text-[#86A6DE] transition cursor-pointer">+91 89682 94003</p>
                <p className="leading-relaxed">
                  Fazilka–Abohar Road<br />
                  Fazilka – 152123<br />
                  Punjab, India
                </p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#86A6DE] mb-6">
                Connect
              </h4>

              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-12 h-12 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20
                  hover:bg-[#86A6DE]/30 hover:border-[#86A6DE] transition-all
                  flex items-center justify-center shadow-lg hover:scale-110"
                >
                  <Instagram size={20} />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20
                  hover:bg-[#5067AA]/30 hover:border-[#5067AA] transition-all
                  flex items-center justify-center shadow-lg hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-12 h-12 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20
                  hover:bg-[#86A6DE]/30 hover:border-[#86A6DE] transition-all
                  flex items-center justify-center shadow-lg hover:scale-110"
                >
                  <Twitter size={20} />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-12 h-12 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20
                  hover:bg-[#5067AA]/30 hover:border-[#5067AA] transition-all
                  flex items-center justify-center shadow-lg hover:scale-110"
                >
                  <Facebook size={20} />
                </a>
              </div>

            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/50">
              © 2024 MathTech Thinking Foundation. All rights reserved.
            </p>

            <div className="flex gap-6 text-xs text-white/60">
              {["Privacy Policy", "Terms of Use", "Cookies"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-[#86A6DE] transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;