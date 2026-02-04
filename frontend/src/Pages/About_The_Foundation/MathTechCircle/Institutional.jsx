import React, { useState, useEffect, useRef } from 'react';

const MTTFMembership = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  const styles = {
    global: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: "'Inter', sans-serif",
    },
    body: {
      margin: 0,
      padding: 0,
      overflowX: 'hidden',
      lineHeight: 1.6,
      color: '#333',
    },
    header: {
      background: 'linear-gradient(135deg, #1a1f3a 0%, #2d3b6f 100%)',
      padding: '1.5rem 2rem',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    },
    headerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    logoIcon: {
      width: '50px',
      height: '50px',
      background: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontSize: '1.5rem',
      color: '#2d3b6f',
    },
    logoTextContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    logoText: {
      color: 'white',
      fontSize: '1.8rem',
      fontWeight: 800,
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: '2px',
    },
    logoSubtitle: {
      color: '#e8eaf0',
      fontSize: '0.75rem',
      marginTop: '-5px',
      letterSpacing: '1px',
    },
    menuBtn: {
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      padding: '10px',
    },
    menuBtnSpan: {
      display: 'block',
      width: '30px',
      height: '3px',
      background: 'white',
      borderRadius: '2px',
      transition: 'all 0.3s ease',
    },
    hero: {
      background: 'linear-gradient(135deg, #1a1f3a 0%, #2d3b6f 50%, #1a1f3a 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8rem 2rem 4rem',
      position: 'relative',
      overflow: 'hidden',
    },
    heroContent: {
      textAlign: 'center',
      maxWidth: '900px',
      position: 'relative',
      zIndex: 1,
      animation: 'fadeInUp 1s ease-out',
    },
    heroH1: {
      fontSize: '4rem',
      fontWeight: 800,
      color: 'white',
      marginBottom: '1rem',
      fontFamily: "'Poppins', sans-serif",
      lineHeight: 1.2,
    },
    heroSubtitle: {
      fontSize: '1.8rem',
      color: '#e8eaf0',
      marginBottom: '3rem',
      fontWeight: 500,
    },
    ctaButtons: {
      display: 'flex',
      gap: '1.5rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    btn: {
      padding: '1.2rem 3rem',
      fontSize: '1.1rem',
      fontWeight: 600,
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
    },
    btnPrimary: {
      background: '#4169e1',
      color: 'white',
      boxShadow: '0 8px 25px rgba(65, 105, 225, 0.4)',
      padding: '1.2rem 3rem',
      fontSize: '1.1rem',
      fontWeight: 600,
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    btnSecondary: {
      background: 'transparent',
      color: 'white',
      border: '2px solid white',
      padding: '1.2rem 3rem',
      fontSize: '1.1rem',
      fontWeight: 600,
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    contentSection: {
      padding: '5rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionIntro: {
      textAlign: 'center',
      marginBottom: '4rem',
    },
    sectionH2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#1a1f3a',
      marginBottom: '1rem',
    },
    sectionP: {
      fontSize: '1.2rem',
      color: '#6b7280',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: 1.8,
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '3rem',
    },
    benefitCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '2.5rem',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      borderLeft: '4px solid #4169e1',
    },
    benefitH3: {
      color: '#4169e1',
      fontSize: '1.5rem',
      marginBottom: '1.5rem',
      fontWeight: 700,
    },
    benefitList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    benefitListItem: {
      marginBottom: '1.5rem',
    },
    benefitStrong: {
      display: 'block',
      color: '#1a1f3a',
      fontSize: '1.1rem',
      marginBottom: '0.5rem',
    },
    benefitP: {
      color: '#6b7280',
      lineHeight: 1.7,
      margin: 0,
    },
    pricingSection: {
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e8eaf0 100%)',
      padding: '5rem 2rem',
    },
    pricingContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    pricingGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '3rem',
    },
    pricingCard: {
      background: 'white',
      borderRadius: '25px',
      padding: '3rem',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    pricingCardBefore: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '6px',
      background: 'linear-gradient(90deg, #4169e1, #5a7de8)',
    },
    pricingTier: {
      fontSize: '1.8rem',
      fontWeight: 700,
      color: '#4169e1',
      marginBottom: '0.5rem',
    },
    pricingSubtitle: {
      color: '#6b7280',
      fontSize: '0.95rem',
      marginBottom: '2rem',
    },
    pricingAmount: {
      fontSize: '3rem',
      fontWeight: 800,
      color: '#1a1f3a',
      marginBottom: '0.5rem',
    },
    pricingPeriod: {
      color: '#6b7280',
      fontSize: '1rem',
      marginBottom: '2rem',
    },
    pricingNote: {
      textAlign: 'center',
      marginTop: '3rem',
      padding: '2rem',
      background: 'white',
      borderRadius: '15px',
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      opacity: menuOpen ? 1 : 0,
      visibility: menuOpen ? 'visible' : 'hidden',
      transition: 'all 0.3s ease',
      zIndex: 1500,
    },
    navMenu: {
      position: 'fixed',
      top: 0,
      right: menuOpen ? 0 : '-100%',
      width: '350px',
      height: '100vh',
      background: 'linear-gradient(135deg, #1a1f3a 0%, #2d3b6f 100%)',
      padding: '2rem',
      transition: 'right 0.4s ease',
      zIndex: 2000,
      overflowY: 'auto',
      boxShadow: '-5px 0 25px rgba(0, 0, 0, 0.3)',
    },
    navClose: {
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '2.5rem',
      cursor: 'pointer',
      float: 'right',
      marginBottom: '2rem',
    },
    navH3: {
      color: 'white',
      fontSize: '1.5rem',
      margin: '2rem 0 1rem',
      borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
      paddingBottom: '0.5rem',
    },
    navUl: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    navLi: {
      margin: '0.8rem 0',
    },
    navA: {
      color: '#e8eaf0',
      textDecoration: 'none',
      fontSize: '1.1rem',
      padding: '0.5rem',
      display: 'block',
      transition: 'all 0.3s ease',
      borderRadius: '8px',
    },
    fadeIn: {
      opacity: 0,
      transform: 'translateY(30px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    },
  };

  const benefitsData = [
    {
      title: 'Access to Resources:',
      items: [
        {
          name: 'Educational Materials:',
          description: 'Gain access to a wealth of educational resources, including research papers, case studies, and instructional content designed to support your institution\'s academic and professional goals.'
        }
      ]
    },
    {
      title: 'Professional Development:',
      items: [
        {
          name: 'Workshops and Conferences:',
          description: 'Enjoy discounted or complimentary registration for MTTF-organized workshops, conferences, and seminars, ensuring that your institution stays updated on the latest advancements and trends in STEM.'
        },
        {
          name: 'Certification Programs:',
          description: 'Access certification and credentialing programs that enhance the qualifications and expertise of your staff members.'
        }
      ]
    },
    {
      title: 'Networking Opportunities:',
      items: [
        {
          name: 'Events and Meetups:',
          description: 'Receive invitations to exclusive networking events, regional meetups, and forums, providing opportunities to connect with peers, industry leaders, and experts in STEM fields.'
        },
        {
          name: 'Special Interest Groups:',
          description: 'Participate in special interest groups or committees that align with your institution\'s focus areas, fostering targeted discussions and collaborations.'
        }
      ]
    },
    {
      title: 'Collaboration and Partnerships:',
      items: [
        {
          name: 'Research Collaborations:',
          description: 'Engage in collaborative research projects with other member institutions, gaining access to funding opportunities and grants to support innovative research.'
        },
        {
          name: 'Industry Partnerships:',
          description: 'Establish partnerships with industry leaders for internships, joint ventures, and knowledge exchange, bridging the gap between academia and industry.'
        }
      ]
    },
    {
      title: 'Recognition and Awards:',
      items: [
        {
          name: 'Institutional Awards:',
          description: 'Become eligible for institutional awards and recognition, celebrating and honoring your institution\'s contributions to the STEM community and beyond.'
        },
        {
          name: 'Member Achievements:',
          description: 'Highlight the individual and collective achievements of your institution\'s members in MTTF publications and at events, showcasing your institution\'s excellence.'
        }
      ]
    },
    {
      title: 'Community Engagement:',
      items: [
        {
          name: 'Outreach Programs:',
          description: 'Participate in outreach and community engagement programs aimed at promoting STEM education and raising awareness about the importance of STEM in society.'
        },
        {
          name: 'Mentorship Opportunities:',
          description: 'Engage in mentorship programs, offering both mentoring and mentee opportunities to support the professional growth of your staff and students.'
        }
      ]
    },
    {
      title: 'Exclusive Member Benefits:',
      items: [
        {
          name: 'Customized Training:',
          description: 'Access tailored training programs and workshops specifically designed to meet the unique needs and goals of your institution.'
        },
        {
          name: 'Institutional Representation:',
          description: 'Gain representation in MTTF\'s governance and decision-making processes, giving your institution a voice in shaping the policies and initiatives of the foundation.'
        }
      ]
    }
  ];

  const pricingData = [
    {
      tier: 'Small Institutions',
      subtitle: '(up to 100 members)',
      amount: 'INR 50,000',
      featured: false
    },
    {
      tier: 'Medium Institutions',
      subtitle: '(101 to 500 members)',
      amount: 'INR 100,000',
      featured: true
    },
    {
      tier: 'Large Institutions',
      subtitle: '(over 500 members)',
      amount: 'INR 200,000',
      featured: false
    }
  ];

  return (
    <div style={styles.body}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@700;800&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            margin: 0;
            padding: 0;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }

          .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at 20% 50%, rgba(65, 105, 225, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(65, 105, 225, 0.1) 0%, transparent 50%);
            animation: pulse 8s ease-in-out infinite;
          }

          .benefit-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
          }

          .pricing-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          }

          .pricing-card.featured {
            border: 3px solid #4169e1;
            transform: scale(1.05);
          }

          .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(65, 105, 225, 0.5);
          }

          .btn-secondary:hover {
            background: white;
            color: #2d3b6f;
            transform: translateY(-3px);
          }

          .nav-link:hover {
            background: rgba(255, 255, 255, 0.1);
            padding-left: 1rem;
            color: white;
          }

          @media (max-width: 768px) {
            .hero h1 {
              font-size: 2.5rem !important;
            }
            .hero-subtitle {
              font-size: 1.3rem !important;
            }
            .nav-menu {
              width: 100% !important;
            }
          }
        `}
      </style>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>M</div>
            <div style={styles.logoTextContainer}>
              <div style={styles.logoText}>MTTF</div>
              <div style={styles.logoSubtitle}>MathTech Thinking Foundation</div>
            </div>
          </div>
          <button style={styles.menuBtn} onClick={toggleMenu}>
            <span style={styles.menuBtnSpan}></span>
            <span style={styles.menuBtnSpan}></span>
            <span style={styles.menuBtnSpan}></span>
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div style={styles.overlay} onClick={toggleMenu}></div>

      {/* Navigation Menu */}
      <nav style={styles.navMenu}>
        <button style={styles.navClose} onClick={toggleMenu}>×</button>
        
        <h3 style={styles.navH3}>WHO WE ARE</h3>
        <ul style={styles.navUl}>
          <li style={styles.navLi}><a href="#organisation" style={styles.navA} className="nav-link" onClick={(e) => handleNavClick(e, '#organisation')}>Our Organisation</a></li>
          <li style={styles.navLi}><a href="#advisors" style={styles.navA} className="nav-link" onClick={(e) => handleNavClick(e, '#advisors')}>Advisors</a></li>
          <li style={styles.navLi}><a href="#leaders" style={styles.navA} className="nav-link" onClick={(e) => handleNavClick(e, '#leaders')}>Leaders</a></li>
          <li style={styles.navLi}><a href="#executives" style={styles.navA} className="nav-link" onClick={(e) => handleNavClick(e, '#executives')}>Executives</a></li>
          <li style={styles.navLi}><a href="#mentors" style={styles.navA} className="nav-link" onClick={(e) => handleNavClick(e, '#mentors')}>Mentors</a></li>
          <li style={styles.navLi}><a href="#technical" style={styles.navA} className="nav-link" onClick={(e) => handleNavClick(e, '#technical')}>Technical Team</a></li>
        </ul>

        <h3 style={styles.navH3}>ABOUT MTTF</h3>
        <ul style={styles.navUl}>
          <li style={styles.navLi}><a href="#about" style={styles.navA} className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
          <li style={styles.navLi}><a href="#contact" style={styles.navA} className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
        </ul>

        <h3 style={styles.navH3}>MATHTECH CIRCLE</h3>
        <ul style={styles.navUl}>
          <li style={styles.navLi}><a href="#individual" style={styles.navA} className="nav-link" onClick={(e) => handleNavClick(e, '#individual')}>Individual Membership</a></li>
          <li style={styles.navLi}><a href="#institutional" style={styles.navA} className="nav-link" onClick={(e) => handleNavClick(e, '#institutional')}>Institutional Membership</a></li>
        </ul>

        <h3 style={styles.navH3}>CHAPTERS</h3>
        <ul style={styles.navUl}>
          <li style={styles.navLi}><a href="#student-chapter" style={styles.navA} className="nav-link" onClick={(e) => handleNavClick(e, '#student-chapter')}>Student Chapter</a></li>
          <li style={styles.navLi}><a href="#about-chapter" style={styles.navA} className="nav-link" onClick={(e) => handleNavClick(e, '#about-chapter')}>About Chapter</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero} className="hero">
        <div style={styles.heroContent}>
          <h1 style={styles.heroH1}>Institutional Membership</h1>
          <p style={styles.heroSubtitle}>MathTech Thinking Foundation (MTTF) Institutional Membership</p>
          <div style={styles.ctaButtons}>
            <button style={styles.btnPrimary} className="btn-primary" onClick={(e) => handleNavClick(e, '#learn-more')}>Learn More</button>
            <button style={styles.btnSecondary} className="btn-secondary" onClick={(e) => handleNavClick(e, '#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.contentSection} id="learn-more">
        <div style={styles.sectionIntro} className="fade-in">
          <h2 style={styles.sectionH2}>Institutional Membership with MTTF</h2>
          <p style={styles.sectionP}>
            Joining MTTF provides organizations with the tools and opportunities needed to drive innovation, 
            foster professional development, and contribute significantly to the global STEM community. 
            Be a part of a prestigious network dedicated to advancing science, technology, engineering, and mathematics.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={styles.contentSection}>
        <h2 style={{...styles.sectionH2, textAlign: 'center', marginBottom: '3rem'}}>
          Benefits of Institutional Membership
        </h2>
        
        <div style={styles.benefitsGrid}>
          {benefitsData.map((benefit, index) => (
            <div key={index} style={styles.benefitCard} className="fade-in benefit-card">
              <h3 style={styles.benefitH3}>{benefit.title}</h3>
              <ul style={styles.benefitList}>
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} style={styles.benefitListItem}>
                    <strong style={styles.benefitStrong}>{item.name}</strong>
                    <p style={styles.benefitP}>{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section style={styles.pricingSection}>
        <div style={styles.pricingContainer}>
          <div style={styles.sectionIntro} className="fade-in">
            <h2 style={styles.sectionH2}>Institutional Membership Fee</h2>
            <p style={styles.sectionP}>
              The MathTech Thinking Foundation (MTTF) offers a tiered membership fee structure to 
              accommodate institutions of varying sizes and needs. The membership fees are as follows:
            </p>
          </div>

          <div style={styles.pricingGrid}>
            {pricingData.map((pricing, index) => (
              <div 
                key={index} 
                style={styles.pricingCard} 
                className={`fade-in pricing-card ${pricing.featured ? 'featured' : ''}`}
              >
                <div style={styles.pricingCardBefore}></div>
                <div style={styles.pricingTier}>{pricing.tier}</div>
                <div style={styles.pricingSubtitle}>{pricing.subtitle}</div>
                <div style={styles.pricingAmount}>{pricing.amount}</div>
                <div style={styles.pricingPeriod}>Annual Fee</div>
              </div>
            ))}
          </div>

          <div style={styles.pricingNote} className="fade-in">
            <p style={{...styles.sectionP, margin: 0}}>
              These fees provide institutions with comprehensive access to MTTF's resources, 
              professional development programs, and networking opportunities, ensuring that all 
              members can benefit from the extensive offerings of the foundation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MTTFMembership;