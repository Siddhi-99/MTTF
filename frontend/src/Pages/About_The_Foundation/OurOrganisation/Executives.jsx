import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Mail, Phone, Linkedin, ChevronDown, Star } from 'lucide-react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const Executives = () => {
  const [selectedExecutive, setSelectedExecutive] = useState(null);

  const executives = [
    {
      name: 'Mr. Robert Chen',
      role: 'Chief Executive Officer',
      department: 'Executive Leadership',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      bio: 'Transformational leader with 20+ years driving organizational growth and innovation in the education sector.',
      responsibilities: ['Strategic vision and direction','Board governance and stakeholder relations','Organizational culture and values','Financial oversight and sustainability'],
      achievements: ['Grew organization revenue by 300%','Expanded to 15 new markets','Led successful $20M fundraising'],
      contact: { email: 'robert.chen@mttf.org', phone: '+1 (555) 001-0001', linkedin: '#' },
    },
    {
      name: 'Ms. Jennifer Williams',
      role: 'Chief Financial Officer',
      department: 'Finance & Administration',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80',
      bio: 'Financial strategist ensuring fiscal responsibility and sustainable growth through data-driven decisions.',
      responsibilities: ['Financial planning and analysis','Budget management and controls','Risk management and compliance','Investment strategy'],
      achievements: ['Implemented cost-saving measures saving $5M','Achieved 98% budget accuracy','AAA credit rating maintenance'],
      contact: { email: 'jennifer.w@mttf.org', phone: '+1 (555) 001-0002', linkedin: '#' },
    },
    {
      name: 'Dr. Marcus Johnson',
      role: 'Chief Academic Officer',
      department: 'Academic Excellence',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      bio: 'Educational innovator committed to academic excellence and cutting-edge curriculum development.',
      responsibilities: ['Curriculum design and quality','Faculty development','Academic partnerships','Student outcomes assessment'],
      achievements: ['95% student satisfaction rate','Partnerships with 50+ universities','Award-winning programs'],
      contact: { email: 'marcus.j@mttf.org', phone: '+1 (555) 001-0003', linkedin: '#' },
    },
    {
      name: 'Ms. Aisha Patel',
      role: 'Chief Technology Officer',
      department: 'Technology & Innovation',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: 'Tech visionary leveraging cutting-edge technology to enhance educational experiences and outcomes.',
      responsibilities: ['Technology strategy and roadmap','Digital transformation initiatives','Platform architecture','Cybersecurity and data privacy'],
      achievements: ['Launched AI-powered learning platform','Reduced system downtime by 99.9%','Led digital transformation'],
      contact: { email: 'aisha.p@mttf.org', phone: '+1 (555) 001-0004', linkedin: '#' },
    },
    {
      name: 'Mr. Thomas Anderson',
      role: 'Chief Marketing Officer',
      department: 'Marketing & Communications',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      bio: 'Brand strategist building awareness and engagement through innovative marketing campaigns.',
      responsibilities: ['Brand strategy and positioning','Digital marketing campaigns','Public relations','Community engagement'],
      achievements: ['500% increase in brand awareness','2M+ social media followers','Award-winning campaigns'],
      contact: { email: 'thomas.a@mttf.org', phone: '+1 (555) 001-0005', linkedin: '#' },
    },
    {
      name: 'Dr. Lisa Kumar',
      role: 'Chief People Officer',
      department: 'Human Resources',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      bio: 'People champion fostering a culture of excellence, diversity, and continuous growth.',
      responsibilities: ['Talent acquisition and retention','Learning and development','Culture and engagement','Diversity and inclusion'],
      achievements: ['92% employee satisfaction','Reduced turnover by 40%','Best workplace award winner'],
      contact: { email: 'lisa.k@mttf.org', phone: '+1 (555) 001-0006', linkedin: '#' },
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
          0%,100% { opacity:1; }
          50%      { opacity:0.25; }
        }
        @keyframes rotateSlow    { from { transform:translate(-50%,-50%) rotate(0deg);   } to { transform:translate(-50%,-50%) rotate(360deg);  } }
        @keyframes rotateReverse { from { transform:translate(-50%,-50%) rotate(0deg);   } to { transform:translate(-50%,-50%) rotate(-360deg); } }

        .exec-main {
          flex:1;
          background:linear-gradient(158deg,#F7F3EA 0%,#EDE5CC 55%,#E4D5A8 100%);
          padding:6rem 1.5rem 5rem;
          position:relative; overflow:hidden;
          font-family:'DM Sans',sans-serif;
        }

        .exec-card {
          background:#FAF8F2; border:1px solid #E8E0CC; border-radius:4px;
          overflow:hidden; position:relative; height:100%;
          transition:all 0.4s cubic-bezier(0.23,1,0.32,1);
        }
        .exec-card::before {
          content:''; position:absolute; top:0; left:0;
          width:0; height:2px;
          background:linear-gradient(90deg,#C9A84C,#E8C96A,transparent);
          transition:width 0.45s cubic-bezier(0.23,1,0.32,1); z-index:2;
        }
        .exec-card:hover::before { width:100%; }
        .exec-card:hover { border-color:#C9A84C; box-shadow:0 24px 52px rgba(139,109,56,0.14); background:#FEFCF7; }

        .eyebrow {
          font-family:'DM Sans',sans-serif; font-size:0.65rem; letter-spacing:0.22em;
          color:#C9A84C; text-transform:uppercase; font-weight:500;
          display:flex; align-items:center; gap:0.5rem; justify-content:center; margin-bottom:1rem;
        }
        .eyebrow-line { display:inline-block; width:28px; height:1px; background:#C9A84C; }

        .view-btn {
          width:100%; padding:0.7rem; background:#1C1208; color:#F7F3EA;
          font-family:'DM Sans',sans-serif; font-size:0.7rem; font-weight:500;
          letter-spacing:0.14em; text-transform:uppercase; border:1px solid #1C1208;
          border-radius:2px; cursor:pointer; transition:all 0.3s ease;
          display:flex; align-items:center; justify-content:center; gap:0.5rem;
        }
        .view-btn:hover { background:#C9A84C; border-color:#C9A84C; transform:translateY(-1px); }

        ::-webkit-scrollbar { width:3px; }
        ::-webkit-scrollbar-track { background:#F7F3EA; }
        ::-webkit-scrollbar-thumb { background:#C9A84C; border-radius:2px; }
      `}</style>

      <Header />

      <main className="exec-main">
        {/* Rotating rings */}
        <div style={{ position:'absolute', top:'50%', left:'50%', width:'600px', height:'600px', border:'1px solid rgba(201,168,76,0.07)', borderRadius:'50%', animation:'rotateSlow 50s linear infinite', pointerEvents:'none' }} />
        <div style={{ position:'absolute', top:'50%', left:'50%', width:'900px', height:'900px', border:'1px dashed rgba(201,168,76,0.04)', borderRadius:'50%', animation:'rotateReverse 75s linear infinite', pointerEvents:'none' }} />
        {/* Glow */}
        <div style={{ position:'absolute', top:'30%', left:'50%', transform:'translateX(-50%)', width:'800px', height:'500px', background:'radial-gradient(ellipse,rgba(201,168,76,0.08) 0%,transparent 70%)', pointerEvents:'none' }} />
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
            transition={{ duration:0.7 }}
            style={{ textAlign:'center', marginBottom:'4.5rem' }}
          >
            <motion.div
              initial={{ scale:0, rotate:-180 }}
              animate={{ scale:1, rotate:0 }}
              transition={{ type:'spring', stiffness:200 }}
              style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:'64px', height:'64px', background:'#F5EFD8', border:'1px solid #E8D89A', borderRadius:'4px', marginBottom:'1.75rem', color:'#C9A84C' }}
            >
              <Briefcase size={26} />
            </motion.div>

            <div className="eyebrow">
              <span className="eyebrow-line" />
              Leadership Team
              <span className="eyebrow-line" />
            </div>

            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(2.6rem,6vw,5rem)', fontWeight:900, lineHeight:1.05, letterSpacing:'-0.025em', color:'#1C1208', marginBottom:'0.4rem' }}>
              Executive
            </h1>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(2.6rem,6vw,5rem)', fontWeight:900, lineHeight:1.05, letterSpacing:'-0.025em', marginBottom:'1.25rem', fontStyle:'italic', background:'linear-gradient(135deg,#C9A84C 0%,#8B6D38 40%,#E8C96A 100%)', backgroundSize:'200% auto', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', animation:'shimmer 4s linear infinite' }}>
              Leadership
            </h1>

            <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:'1rem', color:'#6B5C3E', maxWidth:'540px', margin:'0 auto 2rem', lineHeight:1.78, fontWeight:300 }}>
              Meet the executive team steering our organization towards excellence and innovation
            </p>

            <motion.div
              initial={{ width:0 }}
              animate={{ width:'10rem' }}
              transition={{ delay:0.5, duration:0.8 }}
              style={{ height:'1px', background:'linear-gradient(90deg,transparent,#C9A84C,transparent)', margin:'0 auto' }}
            />
          </motion.div>

          {/* ── Executives Grid ── */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))', gap:'1.5rem' }}>
            {executives.map((exec, index) => (
              <motion.div
                key={index}
                initial={{ opacity:0, y:40 }}
                animate={{ opacity:1, y:0 }}
                transition={{ delay:index*0.1 }}
                whileHover={{ y:-6 }}
                style={{ cursor:'pointer', display:'flex' }}
                onClick={() => setSelectedExecutive(exec)}
              >
                <ExecCard exec={exec} index={index} />
              </motion.div>
            ))}
          </div>

          {/* ── Modal ── */}
          <AnimatePresence>
            {selectedExecutive && (
              <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                exit={{ opacity:0 }}
                style={{ position:'fixed', inset:0, background:'rgba(28,18,8,0.75)', backdropFilter:'blur(6px)', zIndex:50, display:'flex', alignItems:'center', justifyContent:'center', padding:'1.5rem' }}
                onClick={() => setSelectedExecutive(null)}
              >
                <motion.div
                  initial={{ scale:0.92, y:40 }}
                  animate={{ scale:1, y:0 }}
                  exit={{ scale:0.92, y:40 }}
                  transition={{ type:'spring', damping:20, stiffness:200 }}
                  onClick={e => e.stopPropagation()}
                  style={{ maxWidth:'820px', width:'100%', background:'#FAF8F2', border:'1px solid #C9A84C', borderRadius:'4px', overflow:'hidden', boxShadow:'0 40px 80px rgba(139,109,56,0.2)', maxHeight:'90vh', overflowY:'auto', position:'relative' }}
                >
                  {/* Gold top bar */}
                  <div style={{ height:'2px', background:'linear-gradient(90deg,transparent,#C9A84C,#E8C96A,#C9A84C,transparent)' }} />
                  {/* Clipped corner */}
                  <div style={{ position:'absolute', top:2, right:0, width:22, height:22, background:'#C9A84C', clipPath:'polygon(100% 0,0 0,100% 100%)' }} />

                  <div style={{ padding:'2.5rem' }}>
                    <div style={{ display:'flex', flexDirection:'column', gap:'2rem' }}>
                      {/* Top row */}
                      <div style={{ display:'flex', gap:'2rem', flexWrap:'wrap', alignItems:'flex-start' }}>
                        {/* Image */}
                        <div style={{ position:'relative', flexShrink:0 }}>
                          <div style={{ position:'absolute', inset:'-3px', borderRadius:'4px', border:'2px solid #C9A84C' }} />
                          <img
                            src={selectedExecutive.image}
                            alt={selectedExecutive.name}
                            style={{ width:'140px', height:'140px', borderRadius:'4px', objectFit:'cover', display:'block', position:'relative', zIndex:1 }}
                          />
                          <div style={{ position:'absolute', bottom:'-8px', right:'-8px', width:'28px', height:'28px', background:'#C9A84C', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', border:'2px solid #FAF8F2', zIndex:2 }}>
                            <Star size={12} color="#fff" />
                          </div>
                        </div>

                        {/* Name block */}
                        <div style={{ flex:1, minWidth:'200px' }}>
                          <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:'0.62rem', letterSpacing:'0.2em', color:'#C9A84C', textTransform:'uppercase', fontWeight:500, marginBottom:'0.4rem' }}>
                            {selectedExecutive.department}
                          </div>
                          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.5rem,3vw,2.2rem)', fontWeight:700, color:'#1C1208', margin:'0 0 0.3rem', letterSpacing:'-0.02em' }}>
                            {selectedExecutive.name}
                          </h2>
                          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1rem', fontWeight:600, color:'#C9A84C', margin:'0 0 1rem', letterSpacing:'0.02em' }}>
                            {selectedExecutive.role}
                          </p>
                          <div style={{ height:'1px', background:'linear-gradient(90deg,#C9A84C40,transparent)', marginBottom:'1rem' }} />
                          <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:'0.875rem', color:'#6B5C3E', lineHeight:1.8, fontWeight:300, margin:0 }}>
                            {selectedExecutive.bio}
                          </p>
                        </div>
                      </div>

                      {/* Responsibilities + Achievements */}
                      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'1.5rem' }}>
                        {/* Responsibilities */}
                        <div style={{ background:'#F5EFD8', border:'1px solid #E8D89A', borderRadius:'4px', padding:'1.5rem' }}>
                          <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:'0.62rem', letterSpacing:'0.18em', color:'#C9A84C', textTransform:'uppercase', fontWeight:500, marginBottom:'1rem', display:'flex', alignItems:'center', gap:'0.4rem' }}>
                            <span style={{ display:'inline-block', width:16, height:1, background:'#C9A84C' }} />
                            Key Responsibilities
                          </div>
                          {selectedExecutive.responsibilities.map((resp, i) => (
                            <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'0.6rem', marginBottom:'0.5rem' }}>
                              <span style={{ marginTop:'0.45rem', width:5, height:5, borderRadius:'50%', background:'#C9A84C', flexShrink:0, display:'inline-block' }} />
                              <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:'0.82rem', color:'#6B5C3E', fontWeight:300, lineHeight:1.6 }}>{resp}</span>
                            </div>
                          ))}
                        </div>

                        {/* Achievements */}
                        <div style={{ background:'#FAF8F2', border:'1px solid #E8E0CC', borderRadius:'4px', padding:'1.5rem' }}>
                          <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:'0.62rem', letterSpacing:'0.18em', color:'#C9A84C', textTransform:'uppercase', fontWeight:500, marginBottom:'1rem', display:'flex', alignItems:'center', gap:'0.4rem' }}>
                            <Star size={11} color="#C9A84C" />
                            Notable Achievements
                          </div>
                          {selectedExecutive.achievements.map((ach, i) => (
                            <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'0.6rem', marginBottom:'0.5rem' }}>
                              <span style={{ marginTop:'0.45rem', width:5, height:5, background:'#C9A84C', flexShrink:0, display:'inline-block', borderRadius:'1px', transform:'rotate(45deg)' }} />
                              <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:'0.82rem', color:'#6B5C3E', fontWeight:300, lineHeight:1.6 }}>{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Contact */}
                      <div style={{ display:'flex', flexWrap:'wrap', gap:'1.25rem', paddingTop:'0.5rem', borderTop:'1px solid #EDE4CC' }}>
                        {[
                          { href:`mailto:${selectedExecutive.contact.email}`, icon:<Mail size={13} color="#C9A84C" />, label:selectedExecutive.contact.email },
                          { href:`tel:${selectedExecutive.contact.phone}`, icon:<Phone size={13} color="#C9A84C" />, label:selectedExecutive.contact.phone },
                          { href:selectedExecutive.contact.linkedin, icon:<Linkedin size={13} color="#C9A84C" />, label:'LinkedIn' },
                        ].map((link, i) => (
                          <a key={i} href={link.href} style={{ display:'inline-flex', alignItems:'center', gap:'0.45rem', fontFamily:"'DM Sans',sans-serif", fontSize:'0.78rem', color:'#8B6D38', textDecoration:'none', fontWeight:400, transition:'color 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.color='#1C1208'}
                            onMouseLeave={e => e.currentTarget.style.color='#8B6D38'}
                          >
                            {link.icon}
                            {link.label}
                          </a>
                        ))}
                      </div>

                      {/* Close */}
                      <button
                        onClick={() => setSelectedExecutive(null)}
                        style={{ width:'100%', padding:'0.8rem', background:'transparent', color:'#8B6D38', fontFamily:"'DM Sans',sans-serif", fontSize:'0.72rem', fontWeight:500, letterSpacing:'0.14em', textTransform:'uppercase', border:'1px solid #D8CBA8', borderRadius:'2px', cursor:'pointer', transition:'all 0.3s ease' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor='#C9A84C'; e.currentTarget.style.color='#C9A84C'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor='#D8CBA8'; e.currentTarget.style.color='#8B6D38'; }}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </main>

      <Footer />
    </div>
  );
};

// ── Exec Card ──
function ExecCard({ exec, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="exec-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width:'100%' }}
    >
      {/* Clipped corner */}
      <div style={{ position:'absolute', top:0, right:0, width:20, height:20, background:hovered?'#C9A84C':'#E8DFC4', clipPath:'polygon(100% 0,0 0,100% 100%)', transition:'background 0.3s', zIndex:2 }} />
      {/* Card number */}
      <div style={{ position:'absolute', top:'1.1rem', left:'1.4rem', fontFamily:"'Cormorant Garamond',serif", fontSize:'0.68rem', color:'#C9A84C', letterSpacing:'0.15em', fontWeight:600, zIndex:2 }}>
        {String(index+1).padStart(2,'0')}
      </div>

      <div style={{ padding:'2rem' }}>
        {/* Avatar */}
        <div style={{ position:'relative', width:'80px', height:'80px', margin:'1rem auto 1.5rem' }}>
          <div style={{ position:'absolute', inset:'-3px', borderRadius:'50%', border:`2px solid ${hovered?'#C9A84C':'#E8D89A'}`, transition:'border-color 0.35s' }} />
          <img
            src={exec.image}
            alt={exec.name}
            style={{ width:'100%', height:'100%', borderRadius:'50%', objectFit:'cover', display:'block', position:'relative', zIndex:1 }}
          />
          <div style={{ position:'absolute', bottom:'-4px', right:'-4px', width:'26px', height:'26px', background:'#C9A84C', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', border:'2px solid #FAF8F2', zIndex:2 }}>
            <Star size={11} color="#fff" />
          </div>
        </div>

        {/* Name + role */}
        <div style={{ textAlign:'center', marginBottom:'1rem' }}>
          <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.15rem', fontWeight:700, color:'#1C1208', margin:'0 0 0.25rem', letterSpacing:'-0.01em' }}>
            {exec.name}
          </h3>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'0.88rem', fontWeight:600, color:'#C9A84C', margin:'0 0 0.2rem', letterSpacing:'0.02em' }}>
            {exec.role}
          </p>
          <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:'0.7rem', color:'#9C8B6E', fontWeight:400, letterSpacing:'0.08em', textTransform:'uppercase' }}>
            {exec.department}
          </p>
        </div>

        {/* Divider */}
        <div style={{ height:'1px', background:hovered?'linear-gradient(90deg,transparent,#C9A84C50,transparent)':'#EDE4CC', marginBottom:'1rem', transition:'background 0.3s' }} />

        {/* Bio */}
        <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:'0.82rem', color:'#6B5C3E', lineHeight:1.8, marginBottom:'1.5rem', fontWeight:300, display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient:'vertical', overflow:'hidden' }}>
          {exec.bio}
        </p>

        {/* View details button */}
        <button className="view-btn">
          View Details
          <ChevronDown size={13} />
        </button>
      </div>

      {/* Bottom hover rule */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'1px', background:'linear-gradient(90deg,transparent,#C9A84C,transparent)', opacity:hovered?1:0, transition:'opacity 0.35s' }} />
    </div>
  );
}

export default Executives;