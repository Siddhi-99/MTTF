import React, { useState, useEffect, useRef } from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const benefits = [
  {
    id: "01",
    category: "Access to Resources",
    accent: "#C8A96E",
    items: [
      {
        title: "Journals & Publications",
        desc: "Gain unlimited access to a vast array of scholarly journals, publications, and databases, providing valuable research materials to support academic and scientific endeavors.",
      },
      {
        title: "Educational Materials",
        desc: "Benefit from comprehensive access to a variety of educational resources, including webinars, online courses, and training modules, designed to enhance learning and skill development.",
      },
    ],
  },
  {
    id: "02",
    category: "Professional Development",
    accent: "#7EB8C9",
    items: [
      {
        title: "Workshops & Conferences",
        desc: "Enjoy discounted or complimentary registration for MTTF-organized workshops, conferences, and seminars, ensuring your institution stays updated on the latest advancements in STEM.",
      },
      {
        title: "Certification Programs",
        desc: "Access certification and credentialing programs that enhance the qualifications and expertise of your staff members.",
      },
    ],
  },
  {
    id: "03",
    category: "Networking Opportunities",
    accent: "#A89BC8",
    items: [
      {
        title: "Events & Meetups",
        desc: "Receive invitations to exclusive networking events, regional meetups, and forums, providing opportunities to connect with peers, industry leaders, and experts in STEM fields.",
      },
      {
        title: "Special Interest Groups",
        desc: "Participate in special interest groups or committees that align with your institution's focus areas, fostering targeted discussions and collaborations.",
      },
    ],
  },
  {
    id: "04",
    category: "Collaboration & Partnerships",
    accent: "#7EC9A8",
    items: [
      {
        title: "Research Collaborations",
        desc: "Engage in collaborative research projects with other member institutions, gaining access to funding opportunities and grants to support innovative research.",
      },
      {
        title: "Industry Partnerships",
        desc: "Establish partnerships with industry leaders for internships, joint ventures, and knowledge exchange, bridging the gap between academia and industry.",
      },
    ],
  },
  {
    id: "05",
    category: "Recognition & Awards",
    accent: "#C8A96E",
    items: [
      {
        title: "Institutional Awards",
        desc: "Become eligible for institutional awards and recognition, celebrating and honoring your institution's contributions to the STEM community and beyond.",
      },
      {
        title: "Member Achievements",
        desc: "Highlight the individual and collective achievements of your institution's members in MTTF publications and at events, showcasing your institution's excellence.",
      },
    ],
  },
  {
    id: "06",
    category: "Community Engagement",
    accent: "#C97E7E",
    items: [
      {
        title: "Outreach Programs",
        desc: "Participate in outreach and community engagement programs aimed at promoting STEM education and raising awareness about the importance of STEM in society.",
      },
      {
        title: "Mentorship Opportunities",
        desc: "Engage in mentorship programs, offering both mentoring and mentee opportunities to support the professional growth of your staff and students.",
      },
    ],
  },
  {
    id: "07",
    category: "Exclusive Member Benefits",
    accent: "#7EB8C9",
    items: [
      {
        title: "Customized Training",
        desc: "Access tailored training programs and workshops specifically designed to meet the unique needs and goals of your institution.",
      },
      {
        title: "Institutional Representation",
        desc: "Gain representation in MTTF's governance and decision-making processes, giving your institution a voice in shaping the policies and initiatives of the foundation.",
      },
    ],
  },
];

const pricing = [
  {
    tier: "Small",
    sub: "Up to 100 members",
    amount: "INR 50,000",
    tag: "Starter",
    featured: false,
  },
  {
    tier: "Medium",
    sub: "101 to 500 members",
    amount: "INR 1,00,000",
    tag: "Most Popular",
    featured: true,
  },
  {
    tier: "Large",
    sub: "Over 500 members",
    amount: "INR 2,00,000",
    tag: "Enterprise",
    featured: false,
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
        transition: `opacity 0.7s ease ${index * 0.08}s, transform 0.7s ease ${index * 0.08}s`,
        background: hovered ? "#1C1F2E" : "#171A27",
        border: `1px solid ${hovered ? benefit.accent + "60" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "2px",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        boxShadow: hovered ? `0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px ${benefit.accent}20` : "none",
      }}
    >
      {/* Left accent bar */}
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: hovered ? "3px" : "2px",
        background: benefit.accent,
        transition: "width 0.3s",
      }} />

      {/* ID */}
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.6rem",
        color: benefit.accent,
        letterSpacing: "0.2em",
        marginBottom: "0.5rem",
        opacity: 0.7,
      }}>
        {benefit.id} / {String(benefits.length).padStart(2, "0")}
      </div>

      {/* Category */}
      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.25rem",
        fontWeight: 600,
        color: "#F0EDE8",
        marginBottom: "1.5rem",
        letterSpacing: "0.01em",
      }}>
        {benefit.category}
      </h3>

      {/* Items */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {benefit.items.map((item, i) => (
          <div key={i}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.35rem",
            }}>
              <span style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: benefit.accent,
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: benefit.accent,
                letterSpacing: "0.02em",
              }}>
                {item.title}
              </span>
            </div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.82rem",
              color: "rgba(240,237,232,0.45)",
              lineHeight: 1.8,
              margin: 0,
              paddingLeft: "0.85rem",
            }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

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
        transform: visible
          ? plan.featured ? "scale(1.04)" : "scale(1)"
          : "translateY(40px)",
        transition: `opacity 0.7s ease ${index * 0.12}s, transform 0.7s ease ${index * 0.12}s`,
        position: "relative",
        background: plan.featured
          ? "linear-gradient(160deg, #1C2240 0%, #1A2038 100%)"
          : "#171A27",
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
        flexShrink: 0,
        flex: plan.featured ? "0 0 calc(34% - 1rem)" : "0 0 calc(28% - 1rem)",
      }}
    >
      {/* Top bar */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
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
        fontSize: "2rem",
        fontWeight: 700,
        color: plan.featured ? "#F0EDE8" : "rgba(240,237,232,0.85)",
        marginBottom: "0.25rem",
      }}>
        {plan.tier}
      </div>

      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.78rem",
        color: "rgba(240,237,232,0.35)",
        marginBottom: "2rem",
        letterSpacing: "0.02em",
      }}>
        {plan.sub}
      </div>

      {/* Divider */}
      <div style={{
        height: "1px",
        background: plan.featured
          ? "rgba(200,169,110,0.2)"
          : "rgba(255,255,255,0.06)",
        marginBottom: "1.5rem",
      }} />

      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.6rem",
        color: "rgba(240,237,232,0.3)",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        marginBottom: "0.4rem",
      }}>
        Annual Fee
      </div>

      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.9rem",
        fontWeight: 600,
        color: plan.featured ? "#C8A96E" : "#F0EDE8",
        letterSpacing: "-0.01em",
      }}>
        {plan.amount}
      </div>
    </div>
  );
}

export default function Institutional() {
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
            @keyframes fadeUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes shimmer {
              0% { background-position: -200% center; }
              100% { background-position: 200% center; }
            }
            @keyframes floatDot {
              0%, 100% { transform: translateY(0); opacity: 0.4; }
              50% { transform: translateY(-8px); opacity: 0.8; }
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
                position: "absolute",
                inset: 0,
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
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: "700px",
                height: "500px",
                background: "radial-gradient(ellipse, rgba(200,169,110,0.07) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              {/* Floating dots */}
              {[
                { top: "18%", left: "12%", delay: "0s" },
                { top: "72%", left: "8%", delay: "0.8s" },
                { top: "22%", right: "10%", delay: "0.4s" },
                { top: "68%", right: "14%", delay: "1.2s" },
              ].map((dot, i) => (
                <div key={i} style={{
                  position: "absolute",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#C8A96E",
                  animation: `floatDot ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: dot.delay,
                  ...dot,
                }} />
              ))}

              <div style={{
                position: "relative",
                zIndex: 1,
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
                  <span style={{
                    width: 5, height: 5, borderRadius: "50%", background: "#C8A96E",
                  }} />
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#C8A96E",
                  }}>
                    MathTech Thinking Foundation
                  </span>
                  <span style={{
                    width: 5, height: 5, borderRadius: "50%", background: "#C8A96E",
                  }} />
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
                  Institutional
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
                  maxWidth: "540px",
                  margin: "1.5rem auto 3rem",
                  lineHeight: 1.8,
                }}>
                  Joining MTTF provides organizations with the tools and opportunities needed to drive
                  innovation, foster professional development, and contribute significantly to the global
                  STEM community.
                </p>

                {/* Stats row */}
                <div style={{
                  display: "flex",
                  gap: "0",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  border: "1px solid rgba(200,169,110,0.15)",
                  background: "rgba(200,169,110,0.03)",
                  maxWidth: "560px",
                  margin: "0 auto",
                }}>
                  {[["07", "Benefit Areas"], ["03", "Membership Tiers"], ["∞", "STEM Reach"]].map(([val, label], i) => (
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
                color: "rgba(240,237,232,0.6)",
                maxWidth: "820px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}>
                "Be a part of a prestigious network dedicated to advancing science, technology,
                engineering, and mathematics."
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
              }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 600,
                  color: "#F0EDE8",
                  letterSpacing: "-0.02em",
                  flexShrink: 0,
                }}>
                  Member Benefits
                </div>
                <div style={{ flex: 1, height: "1px", background: "rgba(200,169,110,0.15)" }} />
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  color: "rgba(200,169,110,0.5)",
                  letterSpacing: "0.15em",
                  flexShrink: 0,
                }}>
                  07 AREAS
                </div>
              </div>

              {/* Benefits grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
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
            </div>

            {/* ── PRICING ── */}
            <div style={{
              background: "#0B0D18",
              borderTop: "1px solid rgba(200,169,110,0.1)",
              padding: "6rem 2rem",
            }}>
              <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
                    Annual Fee Structure
                  </div>
                  <h2 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    fontWeight: 600,
                    color: "#F0EDE8",
                    letterSpacing: "-0.02em",
                    marginBottom: "1rem",
                  }}>
                    Institutional Membership Fee
                  </h2>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9rem",
                    color: "rgba(240,237,232,0.4)",
                    maxWidth: "560px",
                    margin: "0 auto",
                    lineHeight: 1.8,
                  }}>
                    MTTF offers a tiered membership fee structure to accommodate institutions of varying
                    sizes and needs.
                  </p>
                </div>

                {/* Pricing cards */}
                <div style={{
                  display: "flex",
                  gap: "1.5rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}>
                  {pricing.map((plan, i) => (
                    <PricingCard key={plan.tier} plan={plan} index={i} />
                  ))}
                </div>

                {/* Note */}
                <div style={{
                  marginTop: "3rem",
                  padding: "2rem 2.5rem",
                  border: "1px solid rgba(200,169,110,0.15)",
                  background: "rgba(200,169,110,0.03)",
                  textAlign: "center",
                }}>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(240,237,232,0.4)",
                    lineHeight: 1.85,
                    margin: 0,
                    maxWidth: "720px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}>
                    These fees provide institutions with comprehensive access to MTTF's resources,
                    professional development programs, and networking opportunities, ensuring that all
                    members can benefit from the extensive offerings of the foundation.
                  </p>
                </div>
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