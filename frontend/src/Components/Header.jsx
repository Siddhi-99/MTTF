import React, { useState, useEffect } from "react";
import OurProgramsMegaMenu from "./OurProgramsMegaMenu";
import ResearchIdeasMegaMenu from "./ResearchIdeasMegaMenu";
import AboutFoundationMegaMenu from "./AboutFoundationMegaMenu";
import { Link, useLocation } from "react-router-dom";



const navItems = [
  { name: "Home", href: "/" },
  { name: "Our Programs", href: "/programs" },
  { name: "Research & Ideas", href: "/research" },
  { name: "About the Foundation", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const location = useLocation();

const isActive = (path) => location.pathname === path;

  const [scrolled, setScrolled] = useState(false);

  //  single state instead of 3 booleans
  const [openMenu, setOpenMenu] = useState(null); 
  // values: "programs" | "research" | "about" | null

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-2xl transition-all duration-500
      ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl shadow-2xl border border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold shadow-lg">
            M
          </div>
          <div>
            <h1 className="font-semibold leading-none">MTTF</h1>
            <p className="text-xs text-gray-300">
              MathTech Thinking Foundation
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-2 relative">
          {navItems.map((item) => {
            const menuKey =
              item.name === "Our Programs"
                ? "programs"
                : item.name === "Research & Ideas"
                ? "research"
                : item.name === "About the Foundation"
                ? "about"
                : null;

            return (
              <div
  key={item.name}
  className="relative"
  onMouseEnter={() => menuKey && setOpenMenu(menuKey)}
  onMouseLeave={() => menuKey && setOpenMenu(null)}
>
  {/* Nav Link */}
  <Link
  to={item.href}
  onClick={() => {
    setActive(item.name);
    setOpenMenu(null);
  }}
 className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
  ${
    isActive(item.href)
      ? "text-white bg-blue-600 shadow-md"
      : "text-gray-200 hover:text-white hover:bg-white/10"
  }`}

>
  {item.name}
</Link>


  {/* 🔥 Hover buffer (prevents gap flicker) */}
  {menuKey && (
    <div className="absolute left-0 top-full h-4 w-full"></div>
  )}

  {/* Mega Menu */}
  {menuKey === "programs" && openMenu === "programs" && (
    <div className="absolute left-0 top-[calc(100%+1rem)]">
      <OurProgramsMegaMenu />
    </div>
  )}

  {menuKey === "research" && openMenu === "research" && (
    <div className="absolute left-0 top-[calc(100%+1rem)]">
      <ResearchIdeasMegaMenu />
    </div>
  )}

  {menuKey === "about" && openMenu === "about" && (
    <div className="absolute left-0 top-[calc(100%+1rem)]">
      <AboutFoundationMegaMenu />
    </div>
  )}
</div>

            );
          })}
        </nav>

        {/* CTA */}
        <Link
  to="/membership"
  className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 font-semibold shadow-lg hover:scale-105 transition-transform"
>
  Membership Registration
</Link>

      </div>
    </header>
  );
}
