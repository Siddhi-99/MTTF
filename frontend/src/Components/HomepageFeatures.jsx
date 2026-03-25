import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Target, Lightbulb, Rocket, Shield } from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --gold: #C9A84C;
    --gold-light: #E8C96A;
    --gold-pale: rgba(201,168,76,0.10);
    --cream: #FAF8F3;
    --beige: #F2EDE4;
    --charcoal: #1C1A17;
    --mid: #6B6560;
    --divider: rgba(201,168,76,0.2);
  }

  /* ── Shared typography ── */
  .lux-section-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 16px;
  }

  .lux-section-eyebrow-line {
    display: block;
    width: 32px;
    height: 1px;
    background: var(--gold);
    opacity: 0.6;
  }

  .lux-serif-heading {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 400;
    line-height: 1.1;
    color: var(--charcoal);
    letter-spacing: -0.01em;
  }

  .lux-serif-heading em {
    font-style: italic;
    color: var(--gold);
  }

  .lux-body {
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    color: var(--mid);
    line-height: 1.75;
  }

  .lux-gold-rule {
    width: 48px;
    height: 1px;
    background: var(--gold);
    opacity: 0.5;
    margin: 20px 0;
  }

  /* ── Welcome Section ── */
  .lux-welcome {
    background: var(--cream);
    padding: 112px 24px;
    position: relative;
    overflow: hidden;
  }

  .lux-welcome::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--gold) 40%, var(--gold) 60%, transparent);
    opacity: 0.5;
  }

  /* Decorative large letter */
  .lux-welcome-deco {
    position: absolute;
    top: 40px;
    right: -20px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 320px;
    font-weight: 600;
    color: rgba(201,168,76,0.045);
    line-height: 1;
    pointer-events: none;
    user-select: none;
    letter-spacing: -0.05em;
  }

  .lux-welcome-inner {
    max-width: 1320px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .lux-welcome-heading {
    font-size: clamp(52px, 6vw, 80px);
  }

  .lux-welcome-card {
    border: 1px solid var(--divider);
    background: #fff;
    padding: 32px 36px;
    margin: 28px 0;
    position: relative;
  }

  .lux-welcome-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 3px;
    height: 100%;
    background: var(--gold);
  }

  .lux-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 32px;
    background: var(--charcoal);
    color: var(--gold-light);
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
    text-decoration: none;
  }

  .lux-btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gold);
    transform: translateX(-101%);
    transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
  }

  .lux-btn-primary:hover::before { transform: translateX(0); }
  .lux-btn-primary:hover { color: var(--charcoal); }
  .lux-btn-primary span, .lux-btn-primary svg { position: relative; z-index: 1; }
  .lux-btn-primary svg { transition: transform 0.3s ease; }
  .lux-btn-primary:hover svg { transform: translateX(3px); }

  /* Right panel */
  .lux-welcome-panel {
    border: 1px solid var(--divider);
    background: #fff;
    padding: 56px 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 28px;
    position: relative;
    min-height: 420px;
  }

  .lux-welcome-panel::after {
    content: '';
    position: absolute;
    bottom: 0; right: 0;
    width: 80px;
    height: 80px;
    border-right: 2px solid var(--gold);
    border-bottom: 2px solid var(--gold);
    opacity: 0.25;
  }

  .lux-welcome-panel::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 80px;
    height: 80px;
    border-left: 2px solid var(--gold);
    border-top: 2px solid var(--gold);
    opacity: 0.25;
  }

  .lux-icon-ring {
    width: 120px;
    height: 120px;
    border: 1px solid var(--divider);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: var(--cream);
  }

  .lux-icon-ring::before {
    content: '';
    position: absolute;
    inset: 6px;
    border: 1px solid var(--gold);
    opacity: 0.3;
  }

  .lux-badge-pill {
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    border: 1px solid var(--divider);
    padding: 6px 16px;
    background: var(--cream);
  }

  /* ── Services Section ── */
  .lux-services {
    background: #fff;
    padding: 112px 24px;
    position: relative;
  }

  .lux-services-inner {
    max-width: 1320px;
    margin: 0 auto;
  }

  .lux-services-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 72px;
    gap: 40px;
  }

  .lux-services-heading {
    font-size: clamp(42px, 5vw, 64px);
  }

  .lux-services-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1px;
    background: var(--divider);
    border: 1px solid var(--divider);
  }

  .lux-service-card {
    background: #fff;
    padding: 40px 28px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
    transition: background 0.3s ease;
    cursor: default;
    overflow: hidden;
  }

  .lux-service-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 100%;
    height: 2px;
    background: var(--gold);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
  }

  .lux-service-card:hover {
    background: var(--cream);
  }

  .lux-service-card:hover::after {
    transform: scaleX(1);
  }

  .lux-service-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 13px;
    font-weight: 400;
    color: var(--gold);
    letter-spacing: 0.1em;
    opacity: 0.8;
  }

  .lux-service-icon {
    width: 52px;
    height: 52px;
    border: 1px solid var(--divider);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--charcoal);
    transition: border-color 0.3s ease, background 0.3s ease;
    background: #fff;
  }

  .lux-service-card:hover .lux-service-icon {
    border-color: var(--gold);
    background: var(--gold-pale);
  }

  .lux-service-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    font-weight: 500;
    color: var(--charcoal);
    letter-spacing: 0.04em;
  }

  .lux-service-subtitle {
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
  }

  .lux-service-desc {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 300;
    color: var(--mid);
    line-height: 1.7;
  }

  .lux-service-more {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold);
    margin-top: auto;
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .lux-service-card:hover .lux-service-more {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── Partners Section ── */
  .lux-partners {
    background: var(--charcoal);
    padding: 112px 24px;
    position: relative;
    overflow: hidden;
  }

  .lux-partners::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold) 40%, var(--gold) 60%, transparent);
    opacity: 0.3;
  }

  .lux-partners-inner {
    max-width: 1320px;
    margin: 0 auto;
  }

  .lux-partners-top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: start;
    margin-bottom: 80px;
  }

  .lux-partners-heading {
    font-size: clamp(40px, 4.5vw, 60px);
    color: var(--cream);
  }

  .lux-partners-heading em {
    color: var(--gold-light);
  }

  .lux-partners-text {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 300;
    color: rgba(250,248,243,0.65);
    line-height: 1.8;
    margin-bottom: 32px;
  }

  .lux-btn-outline-gold {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 28px;
    border: 1px solid rgba(201,168,76,0.4);
    color: var(--gold-light);
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .lux-btn-outline-gold:hover {
    background: var(--gold);
    border-color: var(--gold);
    color: var(--charcoal);
  }

  /* Partner grid header */
  .lux-partners-right-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: rgba(250,248,243,0.35);
    margin-bottom: 28px;
  }

  .lux-partner-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: rgba(201,168,76,0.1);
    border: 1px solid rgba(201,168,76,0.1);
  }

  .lux-partner-item {
    background: rgba(250,248,243,0.03);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 28px;
    transition: background 0.25s ease;
    cursor: pointer;
  }

  .lux-partner-item:hover {
    background: rgba(201,168,76,0.08);
  }

  .lux-partner-logo {
    width: 48px;
    height: 48px;
    border: 1px solid rgba(201,168,76,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Cormorant Garamond', serif;
    font-size: 14px;
    font-weight: 500;
    color: rgba(250,248,243,0.5);
    letter-spacing: 0.05em;
    transition: color 0.25s ease, border-color 0.25s ease;
  }

  .lux-partner-item:hover .lux-partner-logo {
    color: var(--gold-light);
    border-color: rgba(201,168,76,0.45);
  }

  /* Brand strip */
  .lux-brand-strip {
    border-top: 1px solid rgba(201,168,76,0.12);
    padding-top: 64px;
  }

  .lux-brand-strip-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(250,248,243,0.3);
    margin-bottom: 32px;
    text-align: center;
  }

  .lux-brand-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1px;
    background: rgba(201,168,76,0.08);
    border: 1px solid rgba(201,168,76,0.08);
  }

  .lux-brand-item {
    background: transparent;
    padding: 32px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Cormorant Garamond', serif;
    font-size: 13px;
    color: rgba(250,248,243,0.3);
    letter-spacing: 0.08em;
    transition: color 0.25s ease, background 0.25s ease;
    cursor: pointer;
  }

  .lux-brand-item:hover {
    color: var(--gold-light);
    background: rgba(201,168,76,0.05);
  }

  /* ── Glimpses Section ── */
  .lux-glimpses {
    background: var(--cream);
    padding: 112px 24px;
  }

  .lux-glimpses-inner {
    max-width: 1320px;
    margin: 0 auto;
  }

  .lux-glimpses-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 56px;
    gap: 32px;
  }

  .lux-glimpses-heading {
    font-size: clamp(40px, 5vw, 60px);
  }

  .lux-glimpse-slide {
    border: 1px solid var(--divider);
    overflow: hidden;
    position: relative;
  }

  .lux-glimpse-frame {
    height: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .lux-glimpse-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(28,26,23,0.65) 0%, transparent 60%);
  }

  .lux-glimpse-label {
    position: absolute;
    bottom: 40px;
    left: 48px;
    z-index: 2;
  }

  .lux-glimpse-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 32px;
    font-weight: 400;
    color: #fff;
    letter-spacing: 0.02em;
    display: block;
    margin-bottom: 8px;
  }

  .lux-glimpse-sub {
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-light);
  }

  /* Nav arrows */
  .lux-slider-nav {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .lux-arrow-btn {
    width: 48px;
    height: 48px;
    border: 1px solid var(--divider);
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--charcoal);
    transition: all 0.25s ease;
  }

  .lux-arrow-btn:hover {
    background: var(--charcoal);
    border-color: var(--charcoal);
    color: var(--gold-light);
  }

  /* Indicators */
  .lux-glimpse-indicators {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 24px;
  }

  .lux-glimpse-dot {
    height: 1px;
    background: rgba(28,26,23,0.2);
    transition: all 0.4s ease;
    cursor: pointer;
    width: 20px;
    border: none;
    padding: 0;
  }

  .lux-glimpse-dot.active {
    background: var(--gold);
    width: 40px;
  }

  /* Gradient backgrounds for glimpse slides */
  .glimpse-bg-1 { background: linear-gradient(135deg, #2a3a6b, #4a6aad); }
  .glimpse-bg-2 { background: linear-gradient(135deg, #6a92c8, #2a3a6b); }
  .glimpse-bg-3 { background: linear-gradient(135deg, #243060, #4a6aad); }
  .glimpse-bg-4 { background: linear-gradient(135deg, #4a6aad, #243060); }
  .glimpse-bg-5 { background: linear-gradient(135deg, #6a92c8, #4a6aad); }

  /* Responsive */
  @media (max-width: 1024px) {
    .lux-services-grid { grid-template-columns: repeat(3, 1fr); }
    .lux-brand-grid { grid-template-columns: repeat(4, 1fr); }
  }

  @media (max-width: 768px) {
    .lux-welcome-inner { grid-template-columns: 1fr; gap: 48px; }
    .lux-services-header { flex-direction: column; align-items: flex-start; }
    .lux-services-grid { grid-template-columns: 1fr 1fr; }
    .lux-partners-top { grid-template-columns: 1fr; gap: 48px; }
    .lux-partner-grid { grid-template-columns: repeat(3, 1fr); }
    .lux-brand-grid { grid-template-columns: repeat(3, 1fr); }
    .lux-glimpses-header { flex-direction: column; align-items: flex-start; }
  }

  @media (max-width: 480px) {
    .lux-services-grid { grid-template-columns: 1fr; }
    .lux-brand-grid { grid-template-columns: repeat(2, 1fr); }
  }
`;

const MTTFHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      id: 1,
      icon: <Users className="w-5 h-5" />,
      title: "CONSULTING",
      subtitle: "Community Building",
      description: "Connect with like-minded individuals and build lasting professional relationships.",
      color: "from-[#5067AA] to-[#86A6DE]",
      bgColor: "bg-[#5067AA]",
      number: "01"
    },
    {
      id: 2,
      icon: <Target className="w-5 h-5" />,
      title: "STRATEGY",
      subtitle: "Skill Development",
      description: "Access workshops and resources to enhance your capabilities with strategic planning.",
      color: "from-[#86A6DE] to-[#5067AA]",
      bgColor: "bg-[#86A6DE]",
      number: "02"
    },
    {
      id: 3,
      icon: <Lightbulb className="w-5 h-5" />,
      title: "IDEAS",
      subtitle: "Innovation Hub",
      description: "Transform your creative concepts into reality with our innovative approach.",
      color: "from-[#32457B] to-[#5067AA]",
      bgColor: "bg-[#32457B]",
      number: "03"
    },
    {
      id: 4,
      icon: <Rocket className="w-5 h-5" />,
      title: "NEW MEDIA",
      subtitle: "Digital Solutions",
      description: "Stay ahead with cutting-edge digital media strategies and modern technology.",
      color: "from-[#5067AA] to-[#32457B]",
      bgColor: "bg-[#5067AA]",
      number: "04"
    },
    {
      id: 5,
      icon: <Shield className="w-5 h-5" />,
      title: "SECURITY",
      subtitle: "Data Protection",
      description: "Ensure robust security measures and protect your valuable data.",
      color: "from-[#86A6DE] to-[#32457B]",
      bgColor: "bg-[#86A6DE]",
      number: "05"
    }
  ];

  const partners = [
    { name: "Partner 1", logo: "P1" },
    { name: "Partner 2", logo: "P2" },
    { name: "Partner 3", logo: "P3" },
    { name: "Partner 4", logo: "P4" },
    { name: "Partner 5", logo: "P5" },
    { name: "Partner 6", logo: "P6" },
    { name: "Partner 7", logo: "P7" },
    { name: "Partner 8", logo: "P8" },
    { name: "Partner 9", logo: "P9" },
    { name: "Partner 10", logo: "P10" }
  ];

  const glimpses = [
    { id: 1, title: "Workshop 2024", color: "from-[#5067AA] to-[#86A6DE]" },
    { id: 2, title: "Community Event", color: "from-[#86A6DE] to-[#32457B]" },
    { id: 3, title: "Tech Meetup", color: "from-[#32457B] to-[#5067AA]" },
    { id: 4, title: "Annual Conference", color: "from-[#5067AA] to-[#32457B]" },
    { id: 5, title: "Networking Session", color: "from-[#86A6DE] to-[#5067AA]" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % glimpses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + glimpses.length) % glimpses.length);
  };

  const glimpseBgs = ['glimpse-bg-1','glimpse-bg-2','glimpse-bg-3','glimpse-bg-4','glimpse-bg-5'];

  return (
    <>
      <style>{styles}</style>

      <div style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* ── Welcome Section ── */}
        <section className="lux-welcome">
          <div className="lux-welcome-deco">M</div>
          <div className="lux-welcome-inner">

            {/* Left */}
            <div>
              <div className="lux-section-eyebrow">
                <span className="lux-section-eyebrow-line" />
                Welcome
                <span className="lux-section-eyebrow-line" />
              </div>

              <h1 className="lux-serif-heading lux-welcome-heading">
                Welcome to <br /><em>MTTF</em>
              </h1>

              <div className="lux-gold-rule" />

              <div className="lux-welcome-card">
                <p className="lux-body" style={{ fontSize: "15px" }}>
                  Join our vibrant community dedicated to fostering growth, innovation, and collaboration.
                  We bring together passionate individuals to create meaningful impact through technology and shared learning experiences.
                </p>
              </div>

              <button className="lux-btn-primary">
                <span>Explore More</span>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 6.5H12M7.5 2L12 6.5L7.5 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Right panel */}
            <div className="lux-welcome-panel">
              <div className="lux-icon-ring">
                <Users style={{ width: 36, height: 36, color: "var(--charcoal)" }} />
              </div>

              <div style={{ textAlign: "center" }}>
                <p className="lux-serif-heading" style={{ fontSize: "28px", marginBottom: "12px" }}>
                  Join Our Community
                </p>
                <div className="lux-gold-rule" style={{ margin: "0 auto 16px" }} />
              </div>

              <span className="lux-badge-pill">1000+ Active Members</span>
            </div>

          </div>
        </section>

        {/* ── Services Section ── */}
        <section className="lux-services">
          <div className="lux-services-inner">
            <div className="lux-services-header">
              <div>
                <div className="lux-section-eyebrow">
                  <span className="lux-section-eyebrow-line" />
                  What We Offer
                </div>
                <h2 className="lux-serif-heading lux-services-heading">
                  Our <em>Services</em>
                </h2>
              </div>
              <p className="lux-body" style={{ maxWidth: "360px", fontSize: "14px", textAlign: "right" }}>
                Comprehensive solutions designed to elevate your work and drive innovation
              </p>
            </div>

            <div className="lux-services-grid">
              {services.map((service) => (
                <div key={service.id} className="lux-service-card">
                  <span className="lux-service-num">{service.number}</span>
                  <div className="lux-service-icon">
                    {service.icon}
                  </div>
                  <div>
                    <p className="lux-service-title">{service.title}</p>
                    <p className="lux-service-subtitle" style={{ marginTop: "6px" }}>{service.subtitle}</p>
                  </div>
                  <p className="lux-service-desc">{service.description}</p>
                  <button className="lux-service-more">
                    More Info
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M1 5.5H10M6.5 2L10 5.5L6.5 9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Partners Section ── */}
        <section className="lux-partners">
          <div className="lux-partners-inner">
            <div className="lux-partners-top">

              {/* Left */}
              <div>
                <div className="lux-section-eyebrow" style={{ color: "rgba(232,201,106,0.7)" }}>
                  <span className="lux-section-eyebrow-line" />
                  Team · Customer · Community
                </div>
                <h2 className="lux-serif-heading lux-partners-heading">
                  We Work With the <br /><em>Best Partners</em>
                </h2>
                <div className="lux-gold-rule" style={{ opacity: 0.3 }} />
                <p className="lux-partners-text">
                  While we are at the forefront and specialize in design-build, we constantly collaborate with a number of delivery methods and are confident we can find the process that will best help you meet your goals.
                </p>
                <button className="lux-btn-outline-gold">
                  Read More
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M1 5.5H10M6.5 2L10 5.5L6.5 9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Right */}
              <div>
                <p className="lux-partners-right-label">Our Business Partners</p>
                <div className="lux-partner-grid">
                  {partners.map((partner, index) => (
                    <div key={index} className="lux-partner-item">
                      <div className="lux-partner-logo">{partner.logo}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Brand strip */}
            <div className="lux-brand-strip">
              <p className="lux-brand-strip-label">Brands We've Collaborated With</p>
              <div className="lux-brand-grid">
                {[...partners, ...partners.slice(0, 2)].map((partner, index) => (
                  <div key={index} className="lux-brand-item">
                    {partner.logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Glimpses Section ── */}
        <section className="lux-glimpses">
          <div className="lux-glimpses-inner">
            <div className="lux-glimpses-header">
              <div>
                <div className="lux-section-eyebrow">
                  <span className="lux-section-eyebrow-line" />
                  Gallery
                </div>
                <h2 className="lux-serif-heading lux-glimpses-heading">
                  <em>Glimpses</em>
                </h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "12px" }}>
                <p className="lux-body" style={{ fontSize: "13px" }}>
                  Moments from our events and activities
                </p>
                <div className="lux-slider-nav">
                  <button className="lux-arrow-btn" onClick={prevSlide}>
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="lux-arrow-btn" onClick={nextSlide}>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Slide */}
            <div className="lux-glimpse-slide">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {glimpses.map((glimpse, i) => (
                  <div key={glimpse.id} style={{ minWidth: "100%" }}>
                    <div className={`lux-glimpse-frame ${glimpseBgs[i]}`}>
                      <div className="lux-glimpse-overlay" />
                      <div className="lux-glimpse-label">
                        <span className="lux-glimpse-title">{glimpse.title}</span>
                        <span className="lux-glimpse-sub">Event Photo {glimpse.id}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicators */}
            <div className="lux-glimpse-indicators">
              {glimpses.map((_, index) => (
                <button
                  key={index}
                  className={`lux-glimpse-dot${currentSlide === index ? " active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default MTTFHomepage;