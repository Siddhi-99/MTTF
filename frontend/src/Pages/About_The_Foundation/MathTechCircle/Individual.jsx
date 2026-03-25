import React, { useState, useEffect, useRef } from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const benefits = [
  {
    id: "01",
    title: "Networking",
    accent: "#C8A96E",
    desc: "MTTF provides a platform to connect with a diverse community of Science, Technology, Engineering, and Mathematics (STEM) professionals from around the world. This fosters valuable connections and collaborations with like-minded individuals.",
  },
  {
    id: "02",
    title: "Professional Development",
    accent: "#7EB8C9",
    desc: "Members have access to conferences, workshops, and faculty development programs organized by MTTF, which offer opportunities to expand knowledge, learn about cutting-edge research, and stay updated on the latest advancements in various STEM fields.",
  },
  {
    id: "03",
    title: "Knowledge Sharing",
    accent: "#A89BC8",
    desc: "MTTF encourages the exchange of ideas and information among members, promoting a culture of learning and innovation. You can gain insights from experts in your field and share your own expertise with others.",
  },
  {
    id: "04",
    title: "Recognition & Awards",
    accent: "#C8A96E",
    desc: "Outstanding contributions to STEM are acknowledged and celebrated within MTTF, providing recognition and honor for exceptional achievements.",
  },
  {
    id: "05",
    title: "Engaging Activities",
    accent: "#7EC9A8",
    desc: "Members can participate in various activities and events organized by MTTF Societies, tailored to different STEM disciplines, further enhancing engagement and involvement.",
  },
  {
    id: "06",
    title: "Research Support",
    accent: "#C97E7E",
    desc: "MTTF may offer technical support or sponsor events related to research and development, aiding members in their pursuit of innovative projects.",
  },
  {
    id: "07",
    title: "Collaboration Opportunities",
    accent: "#7EB8C9",
    desc: "Being part of MTTF opens doors to potential collaborations with industry leaders, researchers, and academics, leading to fruitful partnerships and joint ventures.",
  },
  {
    id: "08",
    title: "Community of Support",
    accent: "#A89BC8",
    desc: "MTTF strives to create a welcoming and supportive environment for all its members, fostering a sense of belonging and camaraderie within the STEM community.",
  },
  {
    id: "09",
    title: "Access to Resources",
    accent: "#7EC9A8",
    desc: "MTTF may provide access to exclusive resources, publications, and databases, enabling members to access valuable research materials and information.",
  },
  {
    id: "10",
    title: "Career Advancement",
    accent: "#C8A96E",
    desc: "Membership in MTTF can bolster your professional profile and open up new career opportunities through exposure to a global network of STEM professionals and organizations.",
  },
];

const faqs = [
  {
    q: "How to register for Lifetime Membership?",
    a: "First click on become a member icon, fill in the required and authentic details in the registration form and submit it. After submission, you will receive an email to activate your account. After successful activation of your account, you will get your Member ID on your email address. Further, registered members can join at most three MTTF-Societies of your interest. To join these societies, you need to log in your account, then go to MTTF-Societies and submit the details.",
  },
  {
    q: "When will the lifetime membership certificate for new registered members be provided?",
    a: "The lifetime membership certificate for new registered members will be issued in the first week of each month.",
  },
  {
    q: "What should I do if an old member did not receive their certificate?",
    a: "If any old member has not received their certificate, please provide your Member ID via WhatsApp or email us at lifetimemember@mttf.in.",
  },
];

function useInView(threshold = 0.15) {
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

function BenefitCard({ benefit, index }) {
  const [ref, visible] = useInView();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${index * 0.06}s, transform 0.7s ease ${index * 0.06}s`,
        background: hovered ? "#1C1F2E" : "#171A27",
        border: `1px solid ${hovered ? benefit.accent + "60" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "2px",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        boxShadow: hovered ? `0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px ${benefit.accent}20` : "none",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      {/* Left accent bar */}
      <div style={{
        position: "absolute",
        left: 0, top: 0, bottom: 0,
        width: hovered ? "3px" : "2px",
        background: benefit.accent,
        transition: "width 0.3s",
      }} />

      {/* ID */}
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.58rem",
        color: benefit.accent,
        letterSpacing: "0.2em",
        opacity: 0.6,
      }}>
        {benefit.id} / {String(benefits.length).padStart(2, "0")}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.25rem",
        fontWeight: 600,
        color: "#F0EDE8",
        letterSpacing: "0.01em",
        margin: 0,
      }}>
        {benefit.title}
      </h3>

      {/* Divider */}
      <div style={{
        height: "1px",
        background: `${benefit.accent}25`,
        width: hovered ? "100%" : "40%",
        transition: "width 0.4s ease",
      }} />

      {/* Desc */}
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.82rem",
        color: "rgba(240,237,232,0.45)",
        lineHeight: 1.85,
        margin: 0,
      }}>
        {benefit.desc}
      </p>
    </div>
  );
}

function FaqItem({ faq, index, number }) {
  const [ref, visible] = useInView();
  const [open, setOpen] = useState(false);
  return (
    <div
      ref={ref}
      onClick={() => setOpen(!open)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
        border: `1px solid ${open ? "rgba(200,169,110,0.3)" : "rgba(255,255,255,0.06)"}`,
        background: open ? "rgba(200,169,110,0.04)" : "#171A27",
        padding: "1.75rem 2rem",
        cursor: "pointer",
        borderRadius: "2px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.58rem",
            color: "#C8A96E",
            letterSpacing: "0.15em",
            flexShrink: 0,
            paddingTop: "0.15rem",
            opacity: 0.7,
          }}>
            {String(number).padStart(2, "0")}
          </span>
          <h4 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.1rem",
            fontWeight: 600,
            color: open ? "#F0EDE8" : "rgba(240,237,232,0.75)",
            margin: 0,
            lineHeight: 1.4,
          }}>
            {faq.q}
          </h4>
        </div>
        <div style={{
          width: 22,
          height: 22,
          border: "1px solid rgba(200,169,110,0.3)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: "#C8A96E",
          fontSize: "0.9rem",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease",
        }}>
          +
        </div>
      </div>
      {open && (
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.85rem",
          color: "rgba(240,237,232,0.45)",
          lineHeight: 1.85,
          margin: "1.25rem 0 0 2.1rem",
        }}>
          {faq.a}
        </p>
      )}
    </div>
  );
}

// ── Inline PricingCard (individual version) ──
function PricingCard({ plan, index }) {
  const [ref, visible] = useInView();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${index * 0.12}s, transform 0.7s ease ${index * 0.12}s`,
        position: "relative",
        background: plan.featured ? "linear-gradient(160deg, #1C2240 0%, #1A2038 100%)" : "#171A27",
        border: plan.featured
          ? "1px solid rgba(200,169,110,0.4)"
          : `1px solid ${hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "2px",
        padding: "2.5rem 2rem",
        overflow: "hidden",
        boxShadow: plan.featured
          ? "0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,169,110,0.15)"
          : hovered ? "0 20px 40px rgba(0,0,0,0.3)" : "none",
        cursor: "default",
      }}
    >
      {/* Top bar */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "2px",
        background: plan.featured
          ? "linear-gradient(90deg, #C8A96E, #E8C98E, #C8A96E)"
          : "rgba(255,255,255,0.06)",
      }} />

      {/* Tag */}
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.58rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: plan.featured ? "#C8A96E" : "rgba(240,237,232,0.3)",
        marginBottom: "1.5rem",
        padding: "0.25rem 0.6rem",
        border: `1px solid ${plan.featured ? "rgba(200,169,110,0.3)" : "rgba(255,255,255,0.08)"}`,
        display: "inline-block",
      }}>
        {plan.tag}
      </div>

      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.5rem",
        fontWeight: 600,
        color: plan.featured ? "#F0EDE8" : "rgba(240,237,232,0.8)",
        marginBottom: "0.25rem",
      }}>
        {plan.label}
      </div>

      <div style={{
        height: "1px",
        background: plan.featured ? "rgba(200,169,110,0.2)" : "rgba(255,255,255,0.06)",
        margin: "1.25rem 0",
      }} />

      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.58rem",
        color: "rgba(240,237,232,0.3)",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        marginBottom: "0.4rem",
      }}>
        Lifetime Fee
      </div>

      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "2.2rem",
        fontWeight: 600,
        color: plan.featured ? "#C8A96E" : "#F0EDE8",
        letterSpacing: "-0.01em",
        marginBottom: "1rem",
      }}>
        {plan.amount}
      </div>

      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.75rem",
        color: "rgba(240,237,232,0.3)",
        lineHeight: 1.7,
        margin: 0,
      }}>
        {plan.note}
      </p>
    </div>
  );
}

export default function Individual() {
  const [heroRef, heroVisible] = useInView(0.05);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <>
          <style>{`
            @keyframes shimmer {
              0% { background-position: -200% center; }
              100% { background-position: 200% center; }
            }
            @keyframes floatDot {
              0%, 100% { transform: translateY(0); opacity: 0.4; }
              50% { transform: translateY(-8px); opacity: 0.8; }
            }
            @keyframes rotateSlow {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            ::-webkit-scrollbar { width: 3px; }
            ::-webkit-scrollbar-track { background: #0F111C; }
            ::-webkit-scrollbar-thumb { background: #C8A96E; border-radius: 2px; }
          `}</style>

          <div style={{
            background: "#0F111C",
            color: "#F0EDE8",
            fontFamily: "'DM Sans', sans-serif",
            overflowX: "hidden",
          }}>

            {/* ── HERO ── */}
            <div
              ref={heroRef}
              style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "6rem 2rem",
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              {/* Background grid */}
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `
                  linear-gradient(rgba(200,169,110,0.04) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(200,169,110,0.04) 1px, transparent 1px)
                `,
                backgroundSize: "72px 72px",
                pointerEvents: "none",
              }} />

              {/* Radial glow */}
              <div style={{
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%,-50%)",
                width: "700px", height: "500px",
                background: "radial-gradient(ellipse, rgba(200,169,110,0.07) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              {/* Rotating ring */}
              <div style={{
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%,-50%)",
                width: "420px", height: "420px",
                border: "1px solid rgba(200,169,110,0.06)",
                borderRadius: "50%",
                animation: "rotateSlow 40s linear infinite",
                pointerEvents: "none",
              }} />
              <div style={{
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%,-50%)",
                width: "580px", height: "580px",
                border: "1px dashed rgba(200,169,110,0.04)",
                borderRadius: "50%",
                animation: "rotateSlow 60s linear infinite reverse",
                pointerEvents: "none",
              }} />

              {/* Floating dots */}
              {[
                { top: "18%", left: "12%", delay: "0s", dur: "3s" },
                { top: "72%", left: "8%", delay: "0.8s", dur: "3.5s" },
                { top: "22%", right: "10%", delay: "0.4s", dur: "4s" },
                { top: "68%", right: "14%", delay: "1.2s", dur: "3.2s" },
                { top: "45%", left: "4%", delay: "0.6s", dur: "5s" },
              ].map((dot, i) => (
                <div key={i} style={{
                  position: "absolute",
                  width: 5, height: 5,
                  borderRadius: "50%",
                  background: "#C8A96E",
                  animation: `floatDot ${dot.dur} ease-in-out infinite`,
                  animationDelay: dot.delay,
                  top: dot.top, left: dot.left, right: dot.right,
                }} />
              ))}

              {/* Hero content */}
              <div style={{
                position: "relative", zIndex: 1,
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 1s ease, transform 1s ease",
              }}>
                {/* Eyebrow */}
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  border: "1px solid rgba(200,169,110,0.25)",
                  padding: "0.4rem 1.25rem",
                  marginBottom: "2.5rem",
                  background: "rgba(200,169,110,0.04)",
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#C8A96E" }} />
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#C8A96E",
                  }}>
                    MathTech Thinking Foundation
                  </span>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#C8A96E" }} />
                </div>

                <h1 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(3rem, 8vw, 6.5rem)",
                  fontWeight: 600,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  marginBottom: "1rem",
                  color: "#F0EDE8",
                }}>
                  Individual
                  <br />
                  <span style={{
                    fontStyle: "italic",
                    background: "linear-gradient(120deg, #C8A96E 0%, #E8C98E 40%, #C8A96E 80%)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "shimmer 4s linear infinite",
                  }}>
                    Membership
                  </span>
                </h1>

                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1.05rem",
                  color: "rgba(240,237,232,0.45)",
                  maxWidth: "580px",
                  margin: "1.5rem auto 3rem",
                  lineHeight: 1.8,
                }}>
                  MTTF invites all professionals in Science, Technology, Engineering, and Mathematics
                  to join our community — organizing conferences, workshops, training, internships,
                  and faculty development programs.
                </p>

                {/* Stats */}
                <div style={{
                  display: "flex",
                  gap: "0",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  border: "1px solid rgba(200,169,110,0.15)",
                  background: "rgba(200,169,110,0.03)",
                  maxWidth: "580px",
                  margin: "0 auto",
                }}>
                  {[["10", "Member Benefits"], ["₹2K", "India Fee"], ["$200", "Int'l Fee"]].map(([val, label], i) => (
                    <div key={label} style={{
                      flex: "1 1 140px",
                      padding: "1.25rem 1rem",
                      textAlign: "center",
                      borderRight: i < 2 ? "1px solid rgba(200,169,110,0.15)" : "none",
                    }}>
                      <div style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "2rem",
                        fontWeight: 600,
                        color: "#C8A96E",
                      }}>{val}</div>
                      <div style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.55rem",
                        color: "rgba(240,237,232,0.25)",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        marginTop: "0.2rem",
                      }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── INTRO STRIP ── */}
            <div style={{
              borderTop: "1px solid rgba(200,169,110,0.12)",
              borderBottom: "1px solid rgba(200,169,110,0.12)",
              background: "rgba(200,169,110,0.03)",
              padding: "3rem 2rem",
              textAlign: "center",
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                fontStyle: "italic",
                color: "rgba(240,237,232,0.55)",
                maxWidth: "860px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}>
                "MTTF Societies encompass fields like engineering, mathematics, science, and computer
                science — creating valuable opportunities for networking, knowledge-sharing, and
                collaborative problem-solving."
              </p>
            </div>

            {/* ── BENEFITS ── */}
            <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "6rem 2rem" }}>
              {/* Section header */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                marginBottom: "4rem",
                flexWrap: "wrap",
              }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 600,
                  color: "#F0EDE8",
                  letterSpacing: "-0.02em",
                  flexShrink: 0,
                }}>
                  Benefits of Joining MTTF
                </div>
                <div style={{ flex: 1, height: "1px", background: "rgba(200,169,110,0.15)", minWidth: "30px" }} />
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  color: "rgba(200,169,110,0.5)",
                  letterSpacing: "0.15em",
                  flexShrink: 0,
                }}>
                  10 BENEFITS
                </div>
              </div>

              {/* Intro text */}
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                color: "rgba(240,237,232,0.4)",
                maxWidth: "680px",
                lineHeight: 1.85,
                marginBottom: "3rem",
              }}>
                As a member of MTTF, you gain access to a wide array of benefits designed to enhance
                your professional growth and networking opportunities. Some of the key member benefits
                at MTTF include:
              </p>

              {/* Benefits grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.04)",
              }}>
                {benefits.map((benefit, i) => (
                  <div key={benefit.id} style={{ background: "#0F111C", padding: "1px" }}>
                    <BenefitCard benefit={benefit} index={i} />
                  </div>
                ))}
              </div>

              {/* View All Members CTA */}
              <div style={{ textAlign: "center", marginTop: "3rem" }}>
                <button
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#C8A96E",
                    background: "transparent",
                    border: "1px solid rgba(200,169,110,0.35)",
                    padding: "0.85rem 2.5rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={e => {
                    e.target.style.background = "rgba(200,169,110,0.08)";
                    e.target.style.borderColor = "rgba(200,169,110,0.6)";
                  }}
                  onMouseLeave={e => {
                    e.target.style.background = "transparent";
                    e.target.style.borderColor = "rgba(200,169,110,0.35)";
                  }}
                >
                  View All Members
                </button>
              </div>
            </div>

            {/* ── PRICING ── */}
            <div style={{
              background: "#0B0D18",
              borderTop: "1px solid rgba(200,169,110,0.1)",
              padding: "6rem 2rem",
            }}>
              <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#C8A96E",
                    marginBottom: "1rem",
                    opacity: 0.7,
                  }}>
                    Lifetime Membership Fee
                  </div>
                  <h2 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    fontWeight: 600,
                    color: "#F0EDE8",
                    letterSpacing: "-0.02em",
                    marginBottom: "1.25rem",
                  }}>
                    Simple, One-Time Investment
                  </h2>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.88rem",
                    color: "rgba(240,237,232,0.4)",
                    maxWidth: "560px",
                    margin: "0 auto",
                    lineHeight: 1.85,
                  }}>
                    New members registered on 1/1/2022 onwards are required to pay their membership
                    fee within the current month after registration. A membership certificate will be
                    sent after fee confirmation.
                  </p>
                </div>

                {/* Pricing cards */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "1.5rem",
                  marginBottom: "2.5rem",
                }}>
                  {[
                    {
                      label: "For India",
                      amount: "₹2,000",
                      tag: "Indian Members",
                      note: "One-time lifetime fee",
                      featured: false,
                    },
                    {
                      label: "International",
                      amount: "$200",
                      tag: "Global Members",
                      note: "Invoice sent post registration",
                      featured: true,
                    },
                    {
                      label: "Developing Nations",
                      amount: "$100",
                      tag: "Special Pricing",
                      note: "Eritrea, Guinea, Madagascar, Nigeria, Ethiopia, Malawi, Sierra Leone, Liberia, Congo & Burundi",
                      featured: false,
                    },
                  ].map((plan, i) => (
                    <PricingCard key={plan.label} plan={plan} index={i} />
                  ))}
                </div>
              </div>
            </div>

            {/* ── FAQ ── */}
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "6rem 2rem" }}>
              {/* Header */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                marginBottom: "3rem",
              }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  fontWeight: 600,
                  color: "#F0EDE8",
                  letterSpacing: "-0.02em",
                  flexShrink: 0,
                }}>
                  Frequently Asked
                </div>
                <div style={{ flex: 1, height: "1px", background: "rgba(200,169,110,0.15)" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {faqs.map((faq, i) => (
                  <FaqItem key={i} faq={faq} index={i} number={i + 1} />
                ))}
              </div>
            </div>

          </div>
        </>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}