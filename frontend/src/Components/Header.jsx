import React, { useState, useEffect, useRef } from "react";
import OurProgramsMegaMenu from "./OurProgramsMegaMenu";
import ResearchIdeasMegaMenu from "./ResearchIdeasMegaMenu";
import AboutFoundationMegaMenu from "./AboutFoundationMegaMenu";
import { Link, useLocation } from "react-router-dom";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --cream: #FAF8F3;
    --beige: #F2EDE4;
    --gold: #C9A84C;
    --gold-light: #E8C96A;
    --charcoal: #1C1A17;
    --mid: #6B6560;
    --divider: rgba(201,168,76,0.25);
  }

  .lux-header {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 50;
    font-family: 'DM Sans', sans-serif;
    transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
  }

  .lux-accent-bar {
    background: var(--gold);
    height: 2px;
    width: 100%;
  }

  .lux-header-inner {
    background: rgba(250, 248, 243, 0.97);
    border-bottom: 1px solid var(--divider);
    transition: background 0.4s ease, box-shadow 0.4s ease;
  }

  .lux-header.scrolled .lux-header-inner {
    background: rgba(250, 248, 243, 0.99);
    box-shadow: 0 4px 32px rgba(28,26,23,0.08);
    border-bottom: 1px solid rgba(201,168,76,0.35);
  }

  .lux-nav-wrap {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 40px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  /* ── Logo ── */
  .lux-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    flex-shrink: 0;
  }

  .lux-logo-mark {
    width: 40px;
    height: 40px;
    border: 1.5px solid var(--gold);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-shrink: 0;
  }

  .lux-logo-mark::before {
    content: '';
    position: absolute;
    inset: 3px;
    background: var(--gold);
    opacity: 0.1;
  }

  .lux-logo-text {
    display: flex;
    flex-direction: column;
    line-height: 1;
  }

  .lux-logo-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    font-weight: 600;
    color: var(--charcoal);
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .lux-logo-sub {
    font-size: 9px;
    font-weight: 400;
    color: var(--gold);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin-top: 4px;
  }

  /* ── Nav ── */
  .lux-nav {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  .lux-nav-item {
    position: relative;
  }

  .lux-nav-link {
    position: relative;
    display: inline-block;
    padding: 8px 16px;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--mid);
    text-decoration: none;
    transition: color 0.25s ease;
    white-space: nowrap;
  }

  .lux-nav-link::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 16px;
    right: 16px;
    height: 1px;
    background: var(--gold);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
  }

  .lux-nav-link:hover,
  .lux-nav-link.active {
    color: var(--charcoal);
  }

  .lux-nav-link:hover::after,
  .lux-nav-link.active::after {
    transform: scaleX(1);
  }

  /* Dot separator between nav items */
  .lux-nav-dot {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(201,168,76,0.4);
    flex-shrink: 0;
    margin: 0 2px;
  }

  /* Hover buffer to prevent flicker */
  .lux-menu-buffer {
    position: absolute;
    left: 0;
    top: 100%;
    height: 24px;
    width: 100%;
  }

  /* Mega menu container */
  .lux-mega-wrapper {
    position: absolute;
    left: 0;
    top: calc(100% + 1rem);
  }

  /* ── CTA ── */
  .lux-cta {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 22px;
    background: var(--charcoal);
    color: var(--gold-light);
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    text-decoration: none;
    border: 1px solid var(--charcoal);
    transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
    position: relative;
    overflow: hidden;
  }

  .lux-cta::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gold);
    transform: translateX(-101%);
    transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
  }

  .lux-cta:hover::before {
    transform: translateX(0);
  }

  .lux-cta:hover {
    color: var(--charcoal);
    border-color: var(--gold);
  }

  .lux-cta span,
  .lux-cta svg {
    position: relative;
    z-index: 1;
  }

  .lux-cta svg {
    transition: transform 0.3s ease;
  }

  .lux-cta:hover svg {
    transform: translateX(3px);
  }

  /* Bottom divider */
  .lux-header-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold) 20%, var(--gold) 80%, transparent);
    opacity: 0.2;
  }

  @media (max-width: 1024px) {
    .lux-nav-wrap { padding: 0 24px; }
  }

  @media (max-width: 768px) {
    .lux-nav { display: none; }
    .lux-cta { display: none; }
    .lux-nav-wrap { height: 60px; }
  }
`;

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

  // single state instead of 3 booleans
  const [openMenu, setOpenMenu] = useState(null);
  // values: "programs" | "research" | "about" | null

  // Timer reference to prevent premature closing
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle menu opening
  const handleMenuOpen = (menuKey) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenMenu(menuKey);
  };

  // Function to handle menu closing with delay
  const handleMenuClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
    }, 300);
  };

  return (
    <>
      <style>{styles}</style>

      <header className={`lux-header${scrolled ? " scrolled" : ""}`}>

        {/* Gold accent bar */}
        <div className="lux-accent-bar" />

        <div className="lux-header-inner">
          <div className="lux-nav-wrap">

            {/* Logo */}
            <div className="lux-logo">
              <div className="lux-logo-mark">
                <svg
                  width="18" height="18" viewBox="0 0 18 18"
                  fill="none" xmlns="http://www.w3.org/2000/svg"
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <path
                    d="M9 2L16 8V16H12V12H6V16H2V8L9 2Z"
                    stroke="#C9A84C" strokeWidth="1.2"
                    strokeLinejoin="round" fill="none"
                  />
                </svg>
              </div>
              <div className="lux-logo-text">
                <span className="lux-logo-name">MTTF</span>
                <span className="lux-logo-sub">MathTech Thinking Foundation</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="lux-nav">
              {navItems.map((item, i) => {
                const menuKey =
                  item.name === "Our Programs"
                    ? "programs"
                    : item.name === "Research & Ideas"
                    ? "research"
                    : item.name === "About the Foundation"
                    ? "about"
                    : null;

                return (
                  <React.Fragment key={item.name}>
                    {i > 0 && <span className="lux-nav-dot" />}
                    <div
                      className="lux-nav-item"
                      onMouseEnter={() => menuKey && handleMenuOpen(menuKey)}
                      onMouseLeave={() => menuKey && handleMenuClose()}
                    >
                      {/* Nav Link */}
                      <Link
                        to={item.href}
                        onClick={() => {
                          setOpenMenu(null);
                          if (closeTimer.current) {
                            clearTimeout(closeTimer.current);
                            closeTimer.current = null;
                          }
                        }}
                        className={`lux-nav-link${isActive(item.href) ? " active" : ""}`}
                      >
                        {item.name}
                      </Link>

                      {/* Hover buffer (prevents gap flicker) */}
                      {menuKey && openMenu === menuKey && (
                        <div className="lux-menu-buffer" />
                      )}

                      {/* Mega Menu — Programs */}
                      {menuKey === "programs" && openMenu === "programs" && (
                        <div
                          className="lux-mega-wrapper"
                          onMouseEnter={() => handleMenuOpen("programs")}
                          onMouseLeave={() => handleMenuClose()}
                        >
                          <OurProgramsMegaMenu />
                        </div>
                      )}

                      {/* Mega Menu — Research */}
                      {menuKey === "research" && openMenu === "research" && (
                        <div
                          className="lux-mega-wrapper"
                          onMouseEnter={() => handleMenuOpen("research")}
                          onMouseLeave={() => handleMenuClose()}
                        >
                          <ResearchIdeasMegaMenu />
                        </div>
                      )}

                      {/* Mega Menu — About */}
                      {menuKey === "about" && openMenu === "about" && (
                        <div
                          className="lux-mega-wrapper"
                          onMouseEnter={() => handleMenuOpen("about")}
                          onMouseLeave={() => handleMenuClose()}
                        >
                          <AboutFoundationMegaMenu />
                        </div>
                      )}
                    </div>
                  </React.Fragment>
                );
              })}
            </nav>

            {/* CTA */}
            <Link to="/membership" className="lux-cta">
              <span>Membership Registration</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M1 6H11M7 2L11 6L7 10"
                  stroke="currentColor" strokeWidth="1.2"
                  strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </Link>

          </div>

          {/* Subtle gold divider */}
          <div className="lux-header-divider" />
        </div>
      </header>
    </>
  );
}