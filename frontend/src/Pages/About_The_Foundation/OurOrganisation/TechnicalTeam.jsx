import React, { useState, useEffect, useRef } from "react";
import { Code, Database, Globe, Smartphone, Shield, Cpu, Zap, Terminal } from "lucide-react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

// ─── DATA (unchanged) ────────────────────────────────────────────────────────
const techTeam = [
  {
    name: "Alex Rivera",
    role: "Lead Full-Stack Developer",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    bio: "Architecting scalable solutions that power our platform.",
    projects: "50+",
    icon: Code,
    github: "#",
    contributions: "Built entire frontend architecture",
  },
  {
    name: "Maya Patel",
    role: "DevOps Engineer",
    tech: ["Docker", "Kubernetes", "AWS"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Ensuring 99.9% uptime with robust infrastructure.",
    projects: "40+",
    icon: Database,
    github: "#",
    contributions: "Zero-downtime deployment pipeline",
  },
  {
    name: "Jordan Lee",
    role: "Frontend Architect",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    bio: "Crafting beautiful and performant user experiences.",
    projects: "60+",
    icon: Globe,
    github: "#",
    contributions: "UI/UX component library",
  },
  {
    name: "Samantha Chen",
    role: "Mobile Developer",
    tech: ["React Native", "Swift", "Kotlin"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    bio: "Building native-like mobile experiences.",
    projects: "35+",
    icon: Smartphone,
    github: "#",
    contributions: "Cross-platform mobile app",
  },
  {
    name: "Marcus Johnson",
    role: "Security Engineer",
    tech: ["Security", "Encryption", "Compliance"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: "Protecting data and ensuring compliance.",
    projects: "30+",
    icon: Shield,
    github: "#",
    contributions: "SOC 2 compliance achieved",
  },
  {
    name: "Emily Zhang",
    role: "AI/ML Engineer",
    tech: ["Python", "TensorFlow", "PyTorch"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80",
    bio: "Implementing intelligent features powered by AI.",
    projects: "45+",
    icon: Cpu,
    github: "#",
    contributions: "Recommendation engine",
  },
  {
    name: "David Kim",
    role: "Backend Engineer",
    tech: ["Python", "Django", "Redis"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "Building robust APIs and microservices.",
    projects: "55+",
    icon: Terminal,
    github: "#",
    contributions: "RESTful API framework",
  },
  {
    name: "Lisa Anderson",
    role: "QA Lead",
    tech: ["Selenium", "Jest", "Cypress"],
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80",
    bio: "Ensuring quality through comprehensive testing.",
    projects: "70+",
    icon: Zap,
    github: "#",
    contributions: "Automated test coverage 95%",
  },
];

const stats = [
  { label: "Lines of Code",      value: "1M+",    icon: Code     },
  { label: "Deployments/Month",  value: "200+",   icon: Zap      },
  { label: "Uptime",             value: "99.9%",  icon: Shield   },
  { label: "Response Time",      value: "<100ms", icon: Database },
];

// ─── HOOK ────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── FADE WRAPPER ─────────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ─── MEMBER CARD ──────────────────────────────────────────────────────────────
function MemberCard({ member, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, visible] = useInView();
  const Icon = member.icon;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? "translateY(-6px)" : "translateY(0)"
          : "translateY(32px)",
        transition: `opacity 0.65s ease ${index * 0.07}s, transform 0.65s ease ${index * 0.07}s, box-shadow 0.35s ease`,
        background: hovered ? "rgba(201,168,76,0.04)" : "#FBF6EC",
        border: `1px solid ${hovered ? "rgba(201,168,76,0.4)" : "rgba(139,112,72,0.15)"}`,
        borderRadius: "2px",
        overflow: "hidden",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        boxShadow: hovered ? "0 20px 48px rgba(139,112,72,0.12)" : "none",
        position: "relative",
      }}
    >
      {/* Top gold bar */}
      <div style={{
        height: hovered ? "2px" : "1px",
        background: "linear-gradient(90deg, transparent, #C9A84C, #E8C97A, #C9A84C, transparent)",
        transition: "height 0.3s ease",
        flexShrink: 0,
      }} />

      {/* Profile image area */}
      <div style={{
        position: "relative",
        padding: "1.75rem 1.75rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.85rem",
      }}>
        {/* Icon badge */}
        <div style={{
          position: "absolute",
          top: "1.25rem",
          right: "1.25rem",
          width: "34px", height: "34px",
          display: "flex", alignItems: "center", justifyContent: "center",
          background: hovered ? "rgba(201,168,76,0.14)" : "rgba(201,168,76,0.07)",
          border: `1px solid ${hovered ? "rgba(201,168,76,0.45)" : "rgba(201,168,76,0.2)"}`,
          borderRadius: "2px", color: "#C9A84C",
          transition: "background 0.3s, border-color 0.3s",
        }}>
          <Icon size={16} />
        </div>

        {/* Avatar */}
        <div style={{
          width: "80px", height: "80px",
          borderRadius: "50%",
          border: `2px solid ${hovered ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.2)"}`,
          overflow: "hidden",
          transition: "border-color 0.35s ease, transform 0.35s ease",
          transform: hovered ? "scale(1.04)" : "scale(1)",
          flexShrink: 0,
        }}>
          <img
            src={member.image}
            alt={member.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* Name + role */}
        <div style={{ textAlign: "center" }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1rem", fontWeight: 700,
            color: "#1A120A", margin: "0 0 0.2rem",
            letterSpacing: "-0.01em",
          }}>{member.name}</h3>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.68rem", color: "#C9A84C",
            letterSpacing: "0.1em", textTransform: "uppercase",
            margin: 0, fontWeight: 500,
          }}>{member.role}</p>
        </div>
      </div>

      {/* Divider */}
      <div style={{
        height: "1px",
        background: "rgba(201,168,76,0.15)",
        margin: "1.25rem 1.75rem",
        width: hovered ? "calc(100% - 3.5rem)" : "40%",
        transition: "width 0.4s ease",
      }} />

      {/* Body */}
      <div style={{ padding: "0 1.75rem 1.75rem", display: "flex", flexDirection: "column", flex: 1, gap: "1rem" }}>
        {/* Bio */}
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "0.78rem", color: "#7A6040",
          lineHeight: 1.75, margin: 0, fontWeight: 300,
          textAlign: "center",
        }}>{member.bio}</p>

        {/* Tech stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", justifyContent: "center" }}>
          {member.tech.map((t, i) => (
            <span key={i} style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.6rem",
              color: "#8B7048",
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.2)",
              padding: "0.18rem 0.55rem",
              borderRadius: "1px",
              letterSpacing: "0.08em",
              fontWeight: 400,
            }}>{t}</span>
          ))}
        </div>

        {/* Projects + contributions row */}
        <div style={{
          display: "flex",
          border: "1px solid rgba(201,168,76,0.15)",
          borderRadius: "1px",
          overflow: "hidden",
          background: "rgba(201,168,76,0.03)",
        }}>
          <div style={{
            flex: 1, padding: "0.75rem 0.5rem",
            textAlign: "center",
            borderRight: "1px solid rgba(201,168,76,0.15)",
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.2rem", fontWeight: 700,
              color: "#C9A84C", lineHeight: 1,
            }}>{member.projects}</div>
            <div style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.55rem", color: "rgba(90,65,40,0.45)",
              letterSpacing: "0.12em", textTransform: "uppercase",
              marginTop: "0.2rem",
            }}>Projects</div>
          </div>
          <div style={{ flex: 2, padding: "0.75rem 0.75rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.65rem", color: "#8B7048",
              lineHeight: 1.5, textAlign: "center",
              fontWeight: 300,
            }}>{member.contributions}</span>
          </div>
        </div>

        {/* GitHub link */}
        <a
          href={member.github}
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.68rem", letterSpacing: "0.15em",
            textTransform: "uppercase", color: hovered ? "#fff" : "#C9A84C",
            background: hovered ? "#C9A84C" : "transparent",
            border: "1px solid rgba(201,168,76,0.45)",
            padding: "0.65rem",
            textAlign: "center", textDecoration: "none",
            borderRadius: "1px", fontWeight: 500,
            display: "block",
            transition: "background 0.3s ease, color 0.3s ease",
            marginTop: "auto",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { e.currentTarget.style.background = hovered ? "#C9A84C" : "transparent"; e.currentTarget.style.color = hovered ? "#fff" : "#C9A84C"; }}
        >
          View GitHub →
        </a>
      </div>
    </div>
  );
}

// ─── MAIN ────────────────────────────────────────────────────────────────────
const TechnicalTeam = () => {
  const [heroRef, heroVisible] = useInView(0.05);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#FBF6EC", color: "#1A120A" }}>
      <style>{`
        @keyframes goldShimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes floatDot {
          0%, 100% { transform: translateY(0); opacity: 0.3; }
          50%       { transform: translateY(-7px); opacity: 0.65; }
        }
        @keyframes rotateSlow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #FBF6EC; }
        ::-webkit-scrollbar-thumb { background: #C9A84C; border-radius: 1px; }
      `}</style>

      <Header />

      <main style={{ flex: 1 }}>

        {/* ── HERO ── */}
        <section
          ref={heroRef}
          style={{
            position: "relative",
            minHeight: "68vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "7rem 2rem 5rem",
            textAlign: "center",
            overflow: "hidden",
            borderBottom: "1px solid rgba(139,112,72,0.1)",
          }}
        >
          {/* Grid */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `
              linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }} />
          {/* Glow */}
          <div style={{
            position: "absolute", pointerEvents: "none",
            top: "50%", left: "50%",
            width: "700px", height: "480px",
            background: "radial-gradient(ellipse, rgba(201,168,76,0.1) 0%, transparent 70%)",
            transform: "translate(-50%,-50%)",
          }} />
          {/* Rings */}
          <div style={{
            position: "absolute", pointerEvents: "none",
            top: "50%", left: "50%",
            width: "440px", height: "440px",
            border: "1px solid rgba(201,168,76,0.08)", borderRadius: "50%",
            animation: "rotateSlow 42s linear infinite",
          }} />
          <div style={{
            position: "absolute", pointerEvents: "none",
            top: "50%", left: "50%",
            width: "620px", height: "620px",
            border: "1px dashed rgba(201,168,76,0.05)", borderRadius: "50%",
            animation: "rotateSlow 68s linear infinite reverse",
          }} />
          {/* Floating dots */}
          {[
            { top: "16%", left: "10%",  delay: "0s",   dur: "3.2s" },
            { top: "76%", left: "8%",   delay: "0.9s", dur: "3.8s" },
            { top: "18%", right: "9%",  delay: "0.4s", dur: "4.2s" },
            { top: "72%", right: "12%", delay: "1.3s", dur: "3.5s" },
          ].map((d, i) => (
            <div key={i} style={{
              position: "absolute", pointerEvents: "none",
              width: 4, height: 4, borderRadius: "50%", background: "#C9A84C",
              animation: `floatDot ${d.dur} ease-in-out infinite`,
              animationDelay: d.delay,
              top: d.top, left: d.left, right: d.right,
            }} />
          ))}

          {/* Content */}
          <div style={{
            position: "relative", zIndex: 1,
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 1s ease, transform 1s ease",
          }}>
            {/* Icon badge */}
            <div style={{
              width: "72px", height: "72px",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "2px", color: "#C9A84C",
              margin: "0 auto 2rem",
            }}>
              <Code size={28} />
            </div>

            {/* Eyebrow */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.7rem",
              border: "1px solid rgba(201,168,76,0.28)",
              padding: "0.45rem 1.3rem", marginBottom: "2.25rem",
              background: "rgba(201,168,76,0.05)", borderRadius: "1px",
            }}>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#C9A84C", flexShrink: 0 }} />
              <span style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.62rem", letterSpacing: "0.25em",
                textTransform: "uppercase", color: "#C9A84C", fontWeight: 500,
              }}>MathTech Thinking Foundation</span>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#C9A84C", flexShrink: 0 }} />
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              fontWeight: 700, lineHeight: 1.02,
              letterSpacing: "-0.025em", color: "#1A120A",
              margin: "0 0 0.5rem",
            }}>
              Technical{" "}
              <span style={{
                fontStyle: "italic",
                background: "linear-gradient(120deg, #C9A84C 0%, #E8C97A 38%, #B8965A 72%, #C9A84C 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "goldShimmer 5s linear infinite",
              }}>Team</span>
            </h1>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1rem, 2.2vw, 1.3rem)",
              fontStyle: "italic", color: "rgba(90,65,40,0.52)",
              maxWidth: "560px", margin: "1.25rem auto 2.5rem",
              lineHeight: 1.75,
            }}>
              The brilliant minds building and maintaining our cutting-edge technology stack.
            </p>

            {/* Stats bar */}
            <div style={{
              display: "inline-flex", flexWrap: "wrap",
              border: "1px solid rgba(201,168,76,0.2)",
              background: "rgba(201,168,76,0.03)",
              borderRadius: "2px",
            }}>
              {stats.map(({ value, label, icon: StatIcon }, i, arr) => (
                <div key={label} style={{
                  padding: "1rem 1.5rem", textAlign: "center",
                  borderRight: i < arr.length - 1 ? "1px solid rgba(201,168,76,0.15)" : "none",
                }}>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.55rem", fontWeight: 700,
                    color: "#C9A84C", lineHeight: 1,
                  }}>{value}</div>
                  <div style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.52rem", color: "rgba(90,65,40,0.38)",
                    letterSpacing: "0.15em", textTransform: "uppercase",
                    marginTop: "0.3rem", fontWeight: 400,
                  }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTRO STRIP ── */}
        <div style={{
          background: "rgba(201,168,76,0.03)",
          borderBottom: "1px solid rgba(139,112,72,0.1)",
          padding: "3rem 2rem", textAlign: "center",
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1rem, 2.3vw, 1.4rem)",
            fontStyle: "italic", color: "rgba(90,65,40,0.58)",
            maxWidth: "780px", margin: "0 auto", lineHeight: 1.75,
          }}>
            "A team defined not just by technical excellence, but by a shared
            commitment to building technology that educates, empowers, and endures."
          </p>
        </div>

        {/* ── TEAM GRID ── */}
        <section style={{ maxWidth: "1300px", margin: "0 auto", padding: "5rem 2rem" }}>
          {/* Section label */}
          <FadeIn>
            <div style={{
              display: "flex", alignItems: "center",
              gap: "1.25rem", marginBottom: "3rem", flexWrap: "wrap",
            }}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 700, color: "#1A120A",
                letterSpacing: "-0.02em", margin: 0, flexShrink: 0,
              }}>Meet the Team</h2>
              <div style={{ flex: 1, height: "1px", background: "rgba(139,112,72,0.15)", minWidth: "24px" }} />
              <div style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.6rem", color: "rgba(201,168,76,0.65)",
                letterSpacing: "0.2em", textTransform: "uppercase",
                fontWeight: 500, flexShrink: 0,
              }}>{techTeam.length} Engineers</div>
            </div>
          </FadeIn>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}>
            {techTeam.map((member, i) => (
              <MemberCard key={i} member={member} index={i} />
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{
          background: "#1A120A",
          borderTop: "1px solid rgba(201,168,76,0.15)",
          padding: "5rem 2rem",
        }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <FadeIn>
              <div style={{ textAlign: "center" }}>
                <div style={{
                  width: "60px", height: "60px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  borderRadius: "2px", color: "#C9A84C",
                  margin: "0 auto 1.5rem",
                }}>
                  <Terminal size={24} />
                </div>

                <div style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.6rem", color: "#C9A84C",
                  letterSpacing: "0.25em", textTransform: "uppercase",
                  marginBottom: "1rem", fontWeight: 500,
                }}>Join the Team</div>

                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                  fontWeight: 700, color: "#E8D9C0",
                  letterSpacing: "-0.02em", margin: "0 0 1rem", lineHeight: 1.2,
                }}>
                  Build the Future With Us
                </h2>

                <p style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.9rem", color: "rgba(232,217,192,0.45)",
                  marginBottom: "2.5rem", lineHeight: 1.8,
                  maxWidth: "520px", margin: "0 auto 2.5rem",
                  fontWeight: 300,
                }}>
                  We're always looking for talented developers to join our mission.
                  Build the future of education technology with us.
                </p>

                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                  <button style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.72rem", letterSpacing: "0.2em",
                    textTransform: "uppercase", color: "#fff",
                    background: "#C9A84C", border: "none",
                    padding: "0.9rem 2.2rem", cursor: "pointer",
                    borderRadius: "1px", fontWeight: 500,
                    transition: "background 0.3s ease, transform 0.3s ease",
                  }}
                    onMouseEnter={e => { e.target.style.background = "#B8965A"; e.target.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.target.style.background = "#C9A84C"; e.target.style.transform = "translateY(0)"; }}
                  >
                    View Open Positions
                  </button>
                  <button style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.72rem", letterSpacing: "0.2em",
                    textTransform: "uppercase", color: "#C9A84C",
                    background: "transparent",
                    border: "1px solid rgba(201,168,76,0.4)",
                    padding: "0.9rem 2.2rem", cursor: "pointer",
                    borderRadius: "1px", fontWeight: 400,
                    transition: "border-color 0.3s ease, background 0.3s ease",
                  }}
                    onMouseEnter={e => { e.target.style.background = "rgba(201,168,76,0.08)"; e.target.style.borderColor = "rgba(201,168,76,0.8)"; }}
                    onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(201,168,76,0.4)"; }}
                  >
                    Tech Stack Docs
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default TechnicalTeam;