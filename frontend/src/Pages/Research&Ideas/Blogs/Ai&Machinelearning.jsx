import { useState, useEffect, useRef } from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const sections = [
  {
    id: 1,
    icon: "⚡",
    title: "Computational Power",
    subtitle: "The Engine of Intelligence",
    body: "AI and ML algorithms require substantial computational power to process large datasets, train complex models, and make accurate predictions. High-performance resources—including GPUs and TPUs—are essential for handling these demanding tasks.",
    accent: "#00FFB2",
  },
  {
    id: 2,
    icon: "🗄️",
    title: "Data Processing",
    subtitle: "Turning Raw Into Refined",
    body: "AI and ML rely on extensive data processing and analysis. Computing enables efficient preprocessing, cleaning, and transformation of raw data. Parallel processing and distributed computing handle large-scale tasks with speed and precision.",
    accent: "#FF6B6B",
  },
  {
    id: 3,
    icon: "🧠",
    title: "Model Training",
    subtitle: "Learning Through Iteration",
    body: "Training AI and ML models involves iterative computations and optimizations. Techniques like gradient descent, backpropagation, and stochastic optimization rely heavily on computational power to update model parameters and minimize errors.",
    accent: "#FFD93D",
  },
  {
    id: 4,
    icon: "🔬",
    title: "Deep Learning",
    subtitle: "Layers of Intelligence",
    body: "Deep Learning uses neural networks with multiple layers, requiring extensive resources for forward and backward passes, gradient computation, and weight updates. High-performance computing enables faster training and breakthroughs across domains.",
    accent: "#6C63FF",
  },
  {
    id: 5,
    icon: "⚙️",
    title: "Real-Time Inference",
    subtitle: "Thinking at the Speed of Now",
    body: "AI and ML models must make predictions in real-time. Computing resources enable efficient deployment for rapid decision-making in image recognition, NLP, autonomous vehicles, and recommendation systems.",
    accent: "#00C9FF",
  },
  {
    id: 6,
    icon: "🔧",
    title: "Algorithm Optimization",
    subtitle: "Refining the Edge",
    body: "Computing facilitates development and optimization of AI algorithms. Researchers fine-tune models, explore hyperparameter spaces, and conduct experiments to enhance performance, increase accuracy, and reduce computational complexity.",
    accent: "#FF9A3C",
  },
  {
    id: 7,
    icon: "☁️",
    title: "Scalability & Deployment",
    subtitle: "From Lab to the World",
    body: "Cloud computing and distributed systems allow flexible, scalable deployment of AI/ML applications. Organizations handle increasing workloads, adapt to changing demands, and deploy solutions in production environments at any scale.",
    accent: "#A8FF78",
  },
];

function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,178,${p.opacity})`;
        ctx.fill();
      });
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0,255,178,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
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
          ? `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)`
          : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? section.accent : "rgba(255,255,255,0.08)"}`,
        borderRadius: "2px",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transition: "all 0.35s cubic-bezier(0.23,1,0.32,1)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px ${section.accent}22` : "none",
        animationDelay: `${index * 0.08}s`,
        animation: "fadeSlideIn 0.6s ease both",
      }}
    >
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: hovered ? "100%" : "0%",
        height: "2px",
        background: section.accent,
        transition: "width 0.4s cubic-bezier(0.23,1,0.32,1)",
      }} />

      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
        <span style={{
          fontSize: "1.8rem",
          background: `${section.accent}18`,
          border: `1px solid ${section.accent}40`,
          borderRadius: "4px",
          width: "52px",
          height: "52px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "transform 0.3s",
          transform: hovered ? "scale(1.1) rotate(-5deg)" : "scale(1)",
        }}>
          {section.icon}
        </span>
        <div>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.65rem",
            color: section.accent,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "0.25rem",
            opacity: 0.8,
          }}>
            {String(section.id).padStart(2, "0")} — {section.subtitle}
          </div>
          <h3 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "1.2rem",
            fontWeight: 800,
            color: "#fff",
            margin: 0,
            letterSpacing: "-0.02em",
          }}>
            {section.title}
          </h3>
        </div>
      </div>

      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.88rem",
        color: "rgba(255,255,255,0.55)",
        lineHeight: 1.75,
        margin: 0,
      }}>
        {section.body}
      </p>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap";
    document.head.appendChild(link1);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#050508", color: "#fff" }}>
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes headerIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #050508; }
        ::-webkit-scrollbar-thumb { background: #00FFB2; border-radius: 2px; }
      `}</style>

      <Header />

      <main className="flex-grow" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {/* Hero Section */}
        <div style={{
          position: "relative",
          overflow: "hidden",
          padding: "6rem 2rem 4rem",
          textAlign: "center",
          minHeight: "420px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <ParticleCanvas />

          {/* Grid overlay */}
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(0,255,178,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,178,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1, animation: "headerIn 0.8s ease both" }}>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              color: "#00FFB2",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
            }}>
              <span style={{ animation: "pulse 2s ease infinite", display: "inline-block", width: 6, height: 6, background: "#00FFB2", borderRadius: "50%" }} />
              MAR 25, 2026 — COMPUTING IN AI & ML
              <span style={{ animation: "pulse 2s ease infinite 1s", display: "inline-block", width: 6, height: 6, background: "#00FFB2", borderRadius: "50%" }} />
            </div>

            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              marginBottom: "1.5rem",
            }}>
              <span style={{ color: "#fff" }}>Computing at the</span>
              <br />
              <span style={{
                background: "linear-gradient(135deg, #00FFB2 0%, #00C9FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Heart of Tomorrow
              </span>
            </h1>

            <p style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.45)",
              maxWidth: "560px",
              lineHeight: 1.7,
              margin: "0 auto",
            }}>
              Exploring how computational power, data infrastructure, and intelligent systems
              converge to drive the next wave of AI breakthroughs.
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "1.25rem 2rem",
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
          background: "rgba(0,255,178,0.02)",
        }}>
          {[["7", "Core Pillars"], ["∞", "Possibilities"], ["2026", "Updated"]].map(([val, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.6rem",
                fontWeight: 900,
                color: "#00FFB2",
                letterSpacing: "-0.03em",
              }}>{val}</div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Cards Grid */}
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 2rem 6rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.25rem",
        }}>
          {sections.map((section, i) => (
            <Card key={section.id} section={section} index={i} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}