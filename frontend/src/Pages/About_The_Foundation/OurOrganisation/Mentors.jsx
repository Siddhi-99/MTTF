import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, BookOpen, Users, Sparkles, MessageCircle, Award } from 'lucide-react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const Mentors = () => {
  const mentors = [
    {
      name: 'Prof. Maria Santos',
      specialization: 'Mathematics Education',
      experience: '15 years',
      students: '500+',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      quote: 'Every student has the potential to excel; they just need the right guidance.',
      expertise: ['Calculus', 'Linear Algebra', 'Statistics'],
      rating: 4.9,
      sessions: 1200,
      num: '01',
    },
    {
      name: 'Dr. Kevin Wu',
      specialization: 'Computer Science',
      experience: '12 years',
      students: '400+',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      quote: 'Code is poetry; let me help you become a poet.',
      expertise: ['Python', 'AI/ML', 'Data Structures'],
      rating: 5.0,
      sessions: 950,
      num: '02',
    },
    {
      name: 'Ms. Priya Sharma',
      specialization: 'Physics & Engineering',
      experience: '10 years',
      students: '350+',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      quote: 'Understanding the universe starts with understanding the fundamentals.',
      expertise: ['Mechanics', 'Electronics', 'Quantum Physics'],
      rating: 4.8,
      sessions: 800,
      num: '03',
    },
    {
      name: 'Mr. James Miller',
      specialization: 'Data Science',
      experience: '8 years',
      students: '300+',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      quote: 'Data tells stories; I teach you how to listen.',
      expertise: ['Machine Learning', 'Data Analysis', 'Visualization'],
      rating: 4.9,
      sessions: 720,
      num: '04',
    },
    {
      name: 'Dr. Sofia Chen',
      specialization: 'Chemistry',
      experience: '14 years',
      students: '450+',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80',
      quote: 'Chemistry is the magic of understanding matter and its transformations.',
      expertise: ['Organic Chemistry', 'Biochemistry', 'Lab Techniques'],
      rating: 4.7,
      sessions: 1050,
      num: '05',
    },
    {
      name: 'Prof. Ahmed Khan',
      specialization: 'Engineering Design',
      experience: '18 years',
      students: '600+',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      quote: 'Design thinking is the bridge between imagination and reality.',
      expertise: ['CAD/CAM', 'Mechanical Design', 'Innovation'],
      rating: 5.0,
      sessions: 1400,
      num: '06',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&family=Playfair+Display:ital,wght@0,700;0,900;1,600&display=swap');

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes pulseGold {
          0%,100% { opacity:1;    }
          50%      { opacity:0.25; }
        }
        @keyframes rotateSlow    { from { transform:translate(-50%,-50%) rotate(0deg);   } to { transform:translate(-50%,-50%) rotate(360deg);  } }
        @keyframes rotateReverse { from { transform:translate(-50%,-50%) rotate(0deg);   } to { transform:translate(-50%,-50%) rotate(-360deg); } }
        @keyframes starPop {
          from { opacity:0; transform:scale(0); }
          to   { opacity:1; transform:scale(1); }
        }

        .mentors-main {
          flex:1;
          background: linear-gradient(158deg, #F7F3EA 0%, #EDE5CC 55%, #E4D5A8 100%);
          padding: 6rem 1.5rem 5rem;
          position: relative; overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        .eyebrow {
          font-family:'DM Sans',sans-serif; font-size:0.65rem; letter-spacing:0.22em;
          color:#C9A84C; text-transform:uppercase; font-weight:500;
          display:flex; align-items:center; gap:0.5rem; justify-content:center; margin-bottom:1rem;
        }
        .eyebrow-line { display:inline-block; width:28px; height:1px; background:#C9A84C; }

        .mentor-card {
          background: #FAF8F2; border: 1px solid #E8E0CC; border-radius: 4px;
          overflow: hidden; position: relative; height: 100%;
          transition: all 0.4s cubic-bezier(0.23,1,0.32,1);
        }
        .mentor-card::before {
          content:''; position:absolute; top:0; left:0;
          width:0; height:2px;
          background: linear-gradient(90deg,#C9A84C,#E8C96A,transparent);
          transition: width 0.45s cubic-bezier(0.23,1,0.32,1); z-index:2;
        }
        .mentor-card:hover::before { width:100%; }
        .mentor-card:hover {
          border-color:#C9A84C;
          box-shadow:0 24px 52px rgba(139,109,56,0.14);
          background:#FEFCF7;
        }

        .tag {
          display:inline-block; padding:0.25rem 0.7rem;
          border:1px solid rgba(201,168,76,0.35); border-radius:1px;
          font-family:'DM Sans',sans-serif; font-size:0.62rem;
          color:#8B6D38; letter-spacing:0.1em; text-transform:uppercase; font-weight:500;
          background:transparent; transition:all 0.3s ease;
        }
        .mentor-card:hover .tag { background:rgba(201,168,76,0.08); border-color:rgba(201,168,76,0.6); }

        .connect-btn {
          width:100%; padding:0.75rem;
          background:#1C1208; color:#F7F3EA;
          font-family:'DM Sans',sans-serif; font-size:0.7rem; font-weight:500;
          letter-spacing:0.14em; text-transform:uppercase;
          border:1px solid #1C1208; border-radius:2px;
          cursor:pointer; transition:all 0.35s ease;
        }
        .connect-btn:hover { background:#C9A84C; border-color:#C9A84C; transform:translateY(-1px); }

        ::-webkit-scrollbar { width:3px; }
        ::-webkit-scrollbar-track { background:#F7F3EA; }
        ::-webkit-scrollbar-thumb { background:#C9A84C; border-radius:2px; }
      `}</style>

      <Header />

      <main className="mentors-main">
        {/* Rotating rings */}
        <div style={{ position:'absolute', top:'50%', left:'50%', width:'600px', height:'600px', border:'1px solid rgba(201,168,76,0.07)', borderRadius:'50%', animation:'rotateSlow 50s linear infinite', pointerEvents:'none' }} />
        <div style={{ position:'absolute', top:'50%', left:'50%', width:'900px', height:'900px', border:'1px dashed rgba(201,168,76,0.04)', borderRadius:'50%', animation:'rotateReverse 75s linear infinite', pointerEvents:'none' }} />
        {/* Glow */}
        <div style={{ position:'absolute', top:'25%', left:'50%', transform:'translateX(-50%)', width:'800px', height:'500px', background:'radial-gradient(ellipse,rgba(201,168,76,0.08) 0%,transparent 70%)', pointerEvents:'none' }} />
        {/* Grid */}
        <div style={{ position:'absolute', inset:0, backgroundImage:`linear-gradient(rgba(201,168,76,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.04) 1px,transparent 1px)`, backgroundSize:'72px 72px', pointerEvents:'none' }} />
        {/* Corner brackets */}
        {[
          { top:'1.5rem', left:'1.5rem', borderTop:'1px solid #C9A84C', borderLeft:'1px solid #C9A84C' },
          { top:'1.5rem', right:'1.5rem', borderTop:'1px solid #C9A84C', borderRight:'1px solid #C9A84C' },
          { bottom:'1.5rem', left:'1.5rem', borderBottom:'1px solid #C9A84C', borderLeft:'1px solid #C9A84C' },
          { bottom:'1.5rem', right:'1.5rem', borderBottom:'1px solid #C9A84C', borderRight:'1px solid #C9A84C' },
        ].map((s,i) => <div key={i} style={{ position:'absolute', width:48, height:48, opacity:0.4, ...s }} />)}

        <div style={{ maxWidth:'1200px', margin:'0 auto', position:'relative', zIndex:1 }}>

          {/* ── Page Header ── */}
          <motion.div
            initial={{ opacity:0, y:-24 }}
            animate={{ opacity:1, y:0 }}
            style={{ textAlign:'center', marginBottom:'4.5rem' }}
          >
            <motion.div
              initial={{ scale:0 }}
              animate={{ scale:1 }}
              transition={{ type:'spring', stiffness:200, delay:0.2 }}
              style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:'64px', height:'64px', background:'#F5EFD8', border:'1px solid #E8D89A', borderRadius:'4px', marginBottom:'1.75rem', color:'#C9A84C' }}
            >
              <Heart size={26} />
            </motion.div>

            <div className="eyebrow">
              <span className="eyebrow-line" />
              Passionate Educators
              <span className="eyebrow-line" />
            </div>

            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(2.6rem,6vw,5rem)', fontWeight:900, lineHeight:1.05, letterSpacing:'-0.025em', color:'#1C1208', marginBottom:'0.4rem' }}>
              Our
            </h1>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(2.6rem,6vw,5rem)', fontWeight:900, lineHeight:1.05, letterSpacing:'-0.025em', marginBottom:'1.25rem', fontStyle:'italic', background:'linear-gradient(135deg,#C9A84C 0%,#8B6D38 40%,#E8C96A 100%)', backgroundSize:'200% auto', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', animation:'shimmer 4s linear infinite' }}>
              Mentors
            </h1>

            <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:'1rem', color:'#6B5C3E', maxWidth:'520px', margin:'0 auto 2rem', lineHeight:1.78, fontWeight:300 }}>
              Passionate educators dedicated to nurturing talent and inspiring the next generation of innovators
            </p>

            <motion.div
              initial={{ width:0 }}
              animate={{ width:'10rem' }}
              transition={{ delay:0.5, duration:0.8 }}
              style={{ height:'1px', background:'linear-gradient(90deg,transparent,#C9A84C,transparent)', margin:'0 auto' }}
            />
          </motion.div>

          {/* ── Mentors Grid ── */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))', gap:'1.5rem', marginBottom:'5rem' }}>
            {mentors.map((mentor, index) => (
              <motion.div
                key={index}
                initial={{ opacity:0, scale:0.92 }}
                animate={{ opacity:1, scale:1 }}
                transition={{ delay:index*0.1, type:'spring' }}
                whileHover={{ y:-6, scale:1.01 }}
                style={{ display:'flex' }}
              >
                <MentorCard mentor={mentor} />
              </motion.div>
            ))}
          </div>

          {/* ── Bottom CTA ── */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:0.9 }}
          >
            <div style={{ maxWidth:'680px', margin:'0 auto', background:'linear-gradient(158deg,#1C1208 0%,#2E1F08 100%)', border:'1px solid #3D2A0A', borderRadius:'4px', padding:'4rem 3rem', textAlign:'center', position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:'linear-gradient(90deg,transparent,#C9A84C,transparent)' }} />
              {[
                { top:'1.2rem', left:'1.2rem', borderTop:'1px solid #C9A84C40', borderLeft:'1px solid #C9A84C40' },
                { top:'1.2rem', right:'1.2rem', borderTop:'1px solid #C9A84C40', borderRight:'1px solid #C9A84C40' },
                { bottom:'1.2rem', left:'1.2rem', borderBottom:'1px solid #C9A84C40', borderLeft:'1px solid #C9A84C40' },
                { bottom:'1.2rem', right:'1.2rem', borderBottom:'1px solid #C9A84C40', borderRight:'1px solid #C9A84C40' },
              ].map((s,i) => <div key={i} style={{ position:'absolute', width:32, height:32, ...s }} />)}

              <div style={{ width:'52px', height:'52px', background:'#C9A84C', borderRadius:'4px', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.5rem' }}>
                <Heart size={22} color="#fff" />
              </div>

              <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:'0.65rem', letterSpacing:'0.22em', color:'#C9A84C', textTransform:'uppercase', fontWeight:500, marginBottom:'1.25rem', display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem' }}>
                <span style={{ display:'inline-block', width:20, height:1, background:'#C9A84C' }} />
                Join the Team
                <span style={{ display:'inline-block', width:20, height:1, background:'#C9A84C' }} />
              </div>

              <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.6rem,3vw,2.4rem)', fontWeight:700, color:'#F7F3EA', letterSpacing:'-0.02em', margin:'0 0 1rem' }}>
                Become a{' '}
                <span style={{ fontStyle:'italic', background:'linear-gradient(135deg,#C9A84C,#E8C96A)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                  Mentor
                </span>
              </h3>

              <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:'0.9rem', color:'rgba(247,243,234,0.55)', maxWidth:'460px', margin:'0 auto 2.5rem', lineHeight:1.78, fontWeight:300 }}>
                Share your expertise and inspire the next generation. Join our community of passionate educators making a real difference.
              </p>

              <motion.button
                whileHover={{ scale:1.03 }}
                whileTap={{ scale:0.97 }}
                style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.85rem 2.4rem', background:'#C9A84C', color:'#fff', fontFamily:"'DM Sans',sans-serif", fontSize:'0.75rem', fontWeight:500, letterSpacing:'0.14em', textTransform:'uppercase', border:'1px solid #C9A84C', borderRadius:'2px', cursor:'pointer', transition:'all 0.35s ease' }}
                onMouseEnter={e => { e.currentTarget.style.background='#B8965A'; }}
                onMouseLeave={e => { e.currentTarget.style.background='#C9A84C'; }}
              >
                Apply to Mentor
              </motion.button>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

// ── Mentor Card ──
function MentorCard({ mentor }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="mentor-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width:'100%' }}
    >
      {/* Clipped corner */}
      <div style={{ position:'absolute', top:0, right:0, width:20, height:20, background:hovered?'#C9A84C':'#E8DFC4', clipPath:'polygon(100% 0,0 0,100% 100%)', transition:'background 0.3s', zIndex:2 }} />
      {/* Number */}
      <div style={{ position:'absolute', top:'1.1rem', left:'1.4rem', fontFamily:"'Cormorant Garamond',serif", fontSize:'0.68rem', color:'#C9A84C', letterSpacing:'0.15em', fontWeight:600, zIndex:2 }}>
        {mentor.num}
      </div>

      <div style={{ padding:'2rem' }}>
        {/* Avatar */}
        <motion.div
          whileHover={{ scale:1.06, rotate:3 }}
          style={{ position:'relative', width:'80px', height:'80px', margin:'1rem auto 1.25rem' }}
        >
          <div style={{ position:'absolute', inset:'-3px', borderRadius:'50%', border:`2px solid ${hovered?'#C9A84C':'#E8D89A'}`, transition:'border-color 0.35s' }} />
          <img
            src={mentor.image}
            alt={mentor.name}
            style={{ width:'100%', height:'100%', borderRadius:'50%', objectFit:'cover', display:'block', position:'relative', zIndex:1 }}
          />
          <div style={{ position:'absolute', bottom:'-5px', right:'-5px', width:'26px', height:'26px', background:'#C9A84C', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', border:'2px solid #FAF8F2', zIndex:2 }}>
            <Sparkles size={11} color="#fff" />
          </div>
        </motion.div>

        {/* Name & specialization */}
        <div style={{ textAlign:'center', marginBottom:'0.85rem' }}>
          <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.15rem', fontWeight:700, color:'#1C1208', margin:'0 0 0.25rem', letterSpacing:'-0.01em' }}>
            {mentor.name}
          </h3>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'0.9rem', fontWeight:600, color:'#C9A84C', margin:'0 0 0.5rem', letterSpacing:'0.02em' }}>
            {mentor.specialization}
          </p>

          {/* Star rating */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'0.35rem' }}>
            <div style={{ display:'flex' }}>
              {[...Array(5)].map((_,i) => (
                <motion.span
                  key={i}
                  initial={{ opacity:0, scale:0 }}
                  animate={{ opacity:1, scale:1 }}
                  transition={{ delay:0.5 + i*0.08 }}
                  style={{ fontSize:'0.7rem', color: i < Math.floor(mentor.rating) ? '#C9A84C' : '#D8CBA8' }}
                >
                  ★
                </motion.span>
              ))}
            </div>
            <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'0.8rem', color:'#9C8B6E', fontWeight:600 }}>
              {mentor.rating}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height:'1px', background:hovered?'linear-gradient(90deg,transparent,#C9A84C50,transparent)':'#EDE4CC', marginBottom:'1rem', transition:'background 0.3s' }} />

        {/* Quote */}
        <div style={{ background:'rgba(201,168,76,0.05)', border:'1px solid rgba(201,168,76,0.18)', borderRadius:'2px', padding:'0.85rem 1rem', marginBottom:'1rem', position:'relative' }}>
          <MessageCircle size={13} color="#C9A84C" style={{ marginBottom:'0.35rem' }} />
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'0.9rem', fontStyle:'italic', color:'#5C4A32', lineHeight:1.65, margin:0, fontWeight:500 }}>
            "{mentor.quote}"
          </p>
        </div>

        {/* Stats row */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0.5rem', marginBottom:'1rem' }}>
          {[
            { icon:<BookOpen size={13} color="#C9A84C" />, value:mentor.sessions, label:'Sessions' },
            { icon:<Users    size={13} color="#C9A84C" />, value:mentor.students,  label:'Students' },
            { icon:<Award    size={13} color="#C9A84C" />, value:mentor.experience,label:'Exp.'    },
          ].map((s,i) => (
            <div key={i} style={{ textAlign:'center', padding:'0.5rem 0.25rem', background:'#F5EFD8', border:'1px solid #E8D89A', borderRadius:'2px' }}>
              <div style={{ display:'flex', justifyContent:'center', marginBottom:'0.2rem' }}>{s.icon}</div>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'0.95rem', fontWeight:700, color:'#1C1208', lineHeight:1 }}>{s.value}</div>
              <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:'0.55rem', color:'#9C8B6E', letterSpacing:'0.1em', textTransform:'uppercase', fontWeight:500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Expertise tags */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem', marginBottom:'1.25rem' }}>
          {mentor.expertise.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity:0, scale:0 }}
              animate={{ opacity:1, scale:1 }}
              transition={{ delay:0.6 + i*0.08 }}
              className="tag"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale:1.02 }}
          whileTap={{ scale:0.97 }}
          className="connect-btn"
        >
          Connect with Mentor
        </motion.button>
      </div>

      {/* Bottom hover rule */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'1px', background:'linear-gradient(90deg,transparent,#C9A84C,transparent)', opacity:hovered?1:0, transition:'opacity 0.35s' }} />
    </div>
  );
}

export default Mentors;