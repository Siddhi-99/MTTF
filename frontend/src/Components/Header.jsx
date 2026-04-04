import React, { useState, useEffect, useRef } from "react";
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
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuOpen = (menuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menuKey);
  };

  const handleMenuClose = () => {
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
    }, 250);
  };

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .header-root {
          font-family: 'DM Sans', sans-serif;
        }

        .header-inner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          transition: all 0.4s ease;
        }

        .header-inner.scrolled {
          background: rgba(254, 249, 239, 0.97);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 2px 32px rgba(180, 145, 60, 0.08);
        }

        .header-inner.top {
          background: rgba(254, 249, 239, 0.92);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .header-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }

        /* Thin gold divider at bottom */
        .header-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(185, 148, 60, 0.35), transparent);
        }

        /* Logo */
        .logo-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .logo-mark {
          width: 38px;
          height: 38px;
          border: 1.5px solid #b9943c;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .logo-mark::before {
          content: '';
          position: absolute;
          inset: 3px;
          border: 1px solid rgba(185, 148, 60, 0.4);
        }

        .logo-mark-letter {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 500;
          color: #b9943c;
          letter-spacing: 0.5px;
        }

        .logo-text-wrap {
          display: flex;
          flex-direction: column;
          gap: 0px;
        }

        .logo-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 16px;
          font-weight: 600;
          color: #1a1610;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          line-height: 1.1;
        }

        .logo-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 9.5px;
          font-weight: 300;
          color: #8a7a5a;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        /* Nav */
        .nav-list {
          display: none;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        @media (min-width: 768px) {
          .nav-list {
            display: flex;
          }
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          display: block;
          padding: 8px 16px;
          font-size: 12.5px;
          font-weight: 400;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: #4a3f2a;
          text-decoration: none;
          transition: color 0.25s ease;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 16px;
          right: 16px;
          height: 1px;
          background: #b9943c;
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: left;
        }

        .nav-link:hover {
          color: #b9943c;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          transform: scaleX(1);
        }

        .nav-link.active {
          color: #b9943c;
        }

        /* CTA Button */
        .cta-btn {
          display: none;
          align-items: center;
          gap: 10px;
          padding: 11px 24px;
          background: #1a1610;
          color: #f0e4c4;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #b9943c;
          transform: translateX(-100%);
          transition: transform 0.35s ease;
          z-index: 0;
        }

        .cta-btn:hover::before {
          transform: translateX(0);
        }

        .cta-btn:hover {
          border-color: #b9943c;
          color: #fff;
        }

        .cta-btn span,
        .cta-btn svg {
          position: relative;
          z-index: 1;
        }

        @media (min-width: 768px) {
          .cta-btn {
            display: flex;
          }
        }

        /* Mega menu container */
        .mega-menu-wrap {
          position: absolute;
          top: calc(100% + 16px);
          left: 0;
        }
      `}</style>

      <header className="header-root">
        <div className={`header-inner ${scrolled ? "scrolled" : "top"}`}>
          <div className="header-container">

            {/* Logo */}
            <Link to="/" className="logo-wrap">
              <div className="logo-mark">
                <span className="logo-mark-letter">M</span>
              </div>
              <div className="logo-text-wrap">
                <span className="logo-title">MTTF</span>
                <span className="logo-sub">MathTech Thinking Foundation</span>
              </div>
            </Link>

            {/* Navigation */}
            <nav>
              <ul className="nav-list">
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
                    <li
                      key={item.name}
                      className="nav-item"
                      onMouseEnter={() => menuKey && handleMenuOpen(menuKey)}
                      onMouseLeave={() => menuKey && handleMenuClose()}
                    >
                      <Link
                        to={item.href}
                        className={`nav-link${isActive(item.href) ? " active" : ""}`}
                      >
                        {item.name}
                      </Link>

                      {/* Mega Menus */}
                      {menuKey === "programs" && openMenu === "programs" && (
                        <div
                          className="mega-menu-wrap"
                          onMouseEnter={() => handleMenuOpen("programs")}
                          onMouseLeave={() => handleMenuClose()}
                        >
                          <OurProgramsMegaMenu />
                        </div>
                      )}

                      {menuKey === "research" && openMenu === "research" && (
                        <div
                          className="mega-menu-wrap"
                          onMouseEnter={() => handleMenuOpen("research")}
                          onMouseLeave={() => handleMenuClose()}
                        >
                          <ResearchIdeasMegaMenu />
                        </div>
                      )}

                      {menuKey === "about" && openMenu === "about" && (
                        <div
                          className="mega-menu-wrap"
                          onMouseEnter={() => handleMenuOpen("about")}
                          onMouseLeave={() => handleMenuClose()}
                        >
                          <AboutFoundationMegaMenu />
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* CTA Button */}
            <Link to="/auth" className="cta-btn">
              <span>Join Membership</span>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path
                  d="M1 6H11M7 2L11 6L7 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

          </div>

          {/* Premium thin divider */}
          <div className="header-divider" />
        </div>
      </header>
    </>
  );
}