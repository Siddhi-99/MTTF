import { useState, useEffect, useRef } from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const sections = [
  {
    id: 1,
    icon: "🌐",
    title: "Complex Challenges",
    subtitle: "Beyond Analytical Limits",
    body: "The present era is characterized by increasingly complex scientific and technological challenges. Computational science provides tools to simulate, model, and analyze complex systems — enabling researchers to understand and solve intricate problems that traditional analytical methods alone cannot address.",
    accent: "#FF6B6B",
  },
  {
    id: 2,
    icon: "📊",
    title: "Big Data & Insights",
    subtitle: "Mining the Data Ocean",
    body: "We live in the era of big data — vast amounts generated across every field. Computational science handles and analyzes this data to extract meaningful insights, identify patterns, and drive informed decisions. Algorithms for processing and visualizing large datasets lead to valuable discoveries.",
    accent: "#00C9FF",
  },
  {
    id: 3,
    icon: "⚙️",
    title: "Optimization & Efficiency",
    subtitle: "Peak Performance by Design",
    body: "In a world where efficiency is paramount, computational science offers powerful tools to optimize processes, designs, and systems — from supply chains to energy grids and manufacturing. Computational methods identify optimal solutions, reduce costs, and maximize resource utilization.",
    accent: "#FFD93D",
  },
  {
    id: 4,
    icon: "🔮",
    title: "Prediction & Forecasting",
    subtitle: "Seeing Tomorrow, Today",
    body: "Computational models and simulations enable accurate prediction of diverse phenomena — weather patterns, financial trends, disease spread. These capabilities provide invaluable insights that aid in informed decision-making, policy planning, and proactive problem solving.",
    accent: "#A78BFA",
  },
  {
    id: 5,
    icon: "🤝",
    title: "Interdisciplinary Collaboration",
    subtitle: "Where Disciplines Converge",
    body: "The present era demands collaboration across disciplines. Computational science serves as common ground where researchers from diverse fields exchange ideas and leverage shared tools to solve multidisciplinary challenges — integrating knowledge and expertise for innovative solutions.",
    accent: "#00FFB2",
  },
  {
    id: 6,
    icon: "🚀",
    title: "Technological Advancements",
    subtitle: "Power Beyond Imagination",
    body: "Advances in computing power, algorithms, and software have vastly expanded computational capabilities. High-performance computing, parallel processing, and sophisticated algorithms now let researchers tackle problems and run simulations at scales previously considered unimaginable.",
    accent: "#FF9A3C",
  },
  {
    id: 7,
    icon: "💡",
    title: "Innovation & Discovery",
    subtitle: "The Virtual Laboratory",
    body: "Computational science fosters innovation and drives breakthroughs. It lets researchers explore ideas, simulate scenarios, test hypotheses, and uncover patterns that lead to discoveries across fields. By accelerating experimentation, it propels scientific progress and technological innovation.",
    accent: "#F472B6",
  },
];

function HexGrid() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const hexSize = 36;
    const hexW = hexSize * Math.sqrt(3);
    const hexH = hexSize * 2;

    function drawHex(x, y, size, opacity) {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(255,107,107,${opacity})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.005;
      const cols = Math.ceil(canvas.width / hexW) + 2;
      const rows = Math.ceil(canvas.height / (hexH * 0.75)) + 2;
      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const x = col * hexW + (row % 2 === 0 ? 0 : hexW / 2);
          const y = row * hexH * 0.75;
          const dist = Math.sin(col * 0.3 + row * 0.5 + t) * 0.5 + 0.5;
          drawHex(x, y, hexSize - 2, dist * 0.12);
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}

function Card({ section, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? `linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)`
          : "rgba(255,255,255,0.015)",
        border: `1px solid ${hovered ? section.accent + "99" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "0px",
        padding: "2.25rem",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
        transform: hovered ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)",
        boxShadow: hovered
          ? `0 24px 50px rgba(0,0,0,0.5), inset 0 0 40px ${section.accent}08`
          : "none",
        animationDelay: `${index * 0.1}s`,
        animation: "cardIn 0.7s cubic-bezier(0.23,1,0.32,1) both",
        clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
      }}
    >
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "16px",
        height: "16px",
        background: hovered ? section.accent : "rgba(255,255,255,0.1)",
        transition: "background 0.3s",
        clipPath: "polygon(100% 0, 0 0, 100% 100%)",
      }} />

      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        height: "2px",
        width: hovered ? "100%" : "0%",
        background: `linear-gradient(90deg, ${section.accent}, transparent)`,
        transition: "width 0.5s cubic-bezier(0.23,1,0.32,1)",
      }} />

      <div style={{
        position: "absolute",
        top: "1.25rem",
        right: "1.5rem",
        fontFamily: "'Space Mono', monospace",
        fontSize: "0.6rem",
        color: section.accent,
        opacity: hovered ? 0.9 : 0.3,
        transition: "opacity 0.3s",
        letterSpacing: "0.1em",
      }}>
        {String(section.id).padStart(2, "0")}
      </div>

      <div style={{
        width: "56px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.75rem",
        background: `${section.accent}12`,
        border: `1px solid ${section.accent}30`,
        marginBottom: "1.25rem",
        transition: "all 0.3s",
        transform: hovered ? "rotate(8deg) scale(1.1)" : "rotate(0deg) scale(1)",
        boxShadow: hovered ? `0 0 20px ${section.accent}30` : "none",
      }}>
        {section.icon}
      </div>

      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "0.6rem",
        color: section.accent,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        marginBottom: "0.4rem",
        opacity: 0.7,
      }}>
        {section.subtitle}
      </div>

      <h3 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "1.25rem",
        fontWeight: 800,
        color: "#fff",
        margin: "0 0 1rem",
        letterSpacing: "-0.03em",
      }}>
        {section.title}
      </h3>

      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.875rem",
        color: "rgba(255,255,255,0.5)",
        lineHeight: 1.8,
        margin: 0,
      }}>
        {section.body}
      </p>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#07080F", color: "#fff" }}>
      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(32px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #07080F; }
        ::-webkit-scrollbar-thumb { background: #FF6B6B; }
      `}</style>

      <Header />

      {/* Fixed scanline effect */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: "linear-gradient(90deg, transparent, rgba(255,107,107,0.3), transparent)",
        animation: "scanline 6s linear infinite",
        zIndex: 10,
        pointerEvents: "none",
      }} />

      <main className="flex-grow" style={{ fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
        {/* Hero Section */}
        <div style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "480px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "7rem 2rem 4rem",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,107,107,0.12)",
        }}>
          <HexGrid />

          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(255,107,107,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1, animation: "heroIn 0.9s cubic-bezier(0.23,1,0.32,1) both" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1px solid rgba(255,107,107,0.3)",
              padding: "0.35rem 1rem",
              marginBottom: "2rem",
              background: "rgba(255,107,107,0.05)",
            }}>
              <span style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#FF6B6B",
                display: "inline-block",
                animation: "blink 1.5s ease infinite",
              }} />
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.62rem",
                color: "#FF6B6B",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}>
                WED MAR 25, 2026
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.4rem, 7vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              marginBottom: "1rem",
            }}>
              <span style={{ color: "rgba(255,255,255,0.9)" }}>Why</span>{" "}
              <span style={{
                background: "linear-gradient(135deg, #FF6B6B 0%, #FFD93D 60%, #FF9A3C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Computational
              </span>
              <br />
              <span style={{ color: "rgba(255,255,255,0.9)" }}>Science</span>{" "}
              <span style={{
                fontStyle: "italic",
                fontWeight: 700,
                color: "rgba(255,255,255,0.3)",
                fontSize: "clamp(1.5rem,4vw,3rem)",
                letterSpacing: "-0.02em",
              }}>Matters</span>
            </h1>

            <p style={{
              fontStyle: "italic",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.4)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}>
              From big data to breakthroughs — how computational science powers the present era
              of discovery, optimization, and interdisciplinary innovation.
            </p>
          </div>
        </div>

        {/* Metrics Strip */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "0",
          flexWrap: "wrap",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(255,107,107,0.03)",
        }}>
          {[
            ["07", "Pillars of Impact"],
            ["∞", "Data Generated"],
            ["2026", "Publication Date"],
            ["01", "Common Ground"],
          ].map(([val, label], i) => (
            <div key={label} style={{
              padding: "1.5rem 2.5rem",
              textAlign: "center",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
              flex: "1 1 140px",
            }}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.8rem",
                fontWeight: 900,
                color: "#FF6B6B",
                letterSpacing: "-0.04em",
              }}>{val}</div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.58rem",
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginTop: "0.2rem",
              }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Intro Text */}
        <div style={{ maxWidth: "760px", margin: "4rem auto 0", padding: "0 2rem", textAlign: "center" }}>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.85 }}>
            Computational science holds{" "}
            <span style={{ color: "#FF6B6B", fontWeight: 500 }}>significant importance</span>{" "}
            in the present era — a key enabler of scientific progress, innovation, and
            informed decision-making in today's rapidly evolving world.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{
          maxWidth: "1200px",
          margin: "3rem auto 0",
          padding: "2rem 2rem 6rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
          gap: "1px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.04)",
        }}>
          {sections.map((section, i) => (
            <div key={section.id} style={{ background: "#07080F", padding: "1px" }}>
              <Card section={section} index={i} />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}