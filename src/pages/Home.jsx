import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SLIDES = [
  {
    title: 'Building the Future, One Solution at a Time',
    subtitle: 'Custom web, mobile & cloud solutions engineered for performance, scale, and real business impact.',
    ctaPrimary: 'Explore Services',
    ctaSecondary: 'View Our Work',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop',
  },
  {
    title: 'Innovative Technology Solutions',
    subtitle: 'Transform your business with cutting-edge web and mobile applications designed for growth.',
    ctaPrimary: 'Our Services',
    ctaSecondary: 'Contact Us',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&auto=format&fit=crop',
  },
  {
    title: 'Your Partner in Digital Excellence',
    subtitle: 'Expert development team ready to bring your vision to life with modern technologies.',
    ctaPrimary: 'Get Started',
    ctaSecondary: 'Learn More',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop',
  },
];

const SERVICES = [
  {
    icon: <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    title: 'Web Development',
    desc: 'Custom web applications built with modern technologies for optimal performance and scalability.',
  },
  {
    icon: <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    title: 'Mobile App Development',
    desc: 'Native and cross-platform mobile solutions that deliver exceptional user experiences.',
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/></svg>,
    title: 'UI/UX Design',
    desc: 'User-centered design that combines aesthetics with functionality for maximum engagement.',
  },
];

const STATS = [
  { num: '500+', label: 'Happy Clients' },
  { num: '10+', label: 'Years Experience' },
  { num: '98%', label: 'Client Retention' },
  { num: '250+', label: 'Projects Delivered' },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
    <path d="M3 7h8M8 4l3 3-3 3" />
  </svg>
);

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <div className="page">

      {/* ── HERO SLIDER ── */}
      <section style={{
        minHeight: '90vh', position: 'relative', overflow: 'hidden',
        paddingTop: 0,
      }}>
        {/* Background image for each slide */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          {SLIDES.map((slide, index) => (
            <div
              key={index}
              style={{
                position: 'absolute', inset: 0,
                opacity: index === currentSlide ? 1 : 0,
                visibility: index === currentSlide ? 'visible' : 'hidden',
                transition: 'opacity 0.6s ease-in-out, visibility 0.6s',
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.85)',
                }}
              />
              {/* Overlay for better text readability */}
              <div style={{
                position: 'absolute', inset: 0,
                background: `
                  linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.45) 100%)
                `,
              }} />
            </div>
          ))}
        </div>

        <div className="dot-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} />

        {/* Slides container */}
        <div style={{ position: 'relative', height: '100%' }}>
          {SLIDES.map((slide, index) => (
            <div
              key={index}
              style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '120px 32px 60px',
                opacity: index === currentSlide ? 1 : 0,
                visibility: index === currentSlide ? 'visible' : 'hidden',
                transition: 'opacity 0.6s ease-in-out, visibility 0.6s',
              }}
            >
              <div style={{ 
                position: 'relative', 
                zIndex: 2, 
                maxWidth: 900,
                textAlign: 'center',
                marginTop: '40px',
              }}>
                <div style={{
                  display: 'inline-flex',
                  marginBottom: '24px',
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                  opacity: index === currentSlide ? 1 : 0,
                  transition: 'transform 0.6s ease-out, opacity 0.6s',
                  transitionDelay: index === currentSlide ? '0.1s' : '0s',
                }}>
                  <div className="badge">
                    <span className="badge-dot" /> Trusted by 500+ businesses globally
                  </div>
                </div>

                <h1 style={{ 
                  fontSize: 'clamp(38px, 6vw, 64px)', 
                  lineHeight: 1.1, 
                  marginBottom: 24,
                  color: '#0d1022',
                  fontWeight: 800,
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                  opacity: index === currentSlide ? 1 : 0,
                  transition: 'transform 0.6s ease-out, opacity 0.6s',
                  transitionDelay: index === currentSlide ? '0.2s' : '0s',
                }}>
                  {slide.title}
                </h1>

                <p style={{ 
                  color: '#2d3154', 
                  fontSize: 19, 
                  lineHeight: 1.7, 
                  maxWidth: 650, 
                  marginBottom: 36,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontWeight: 500,
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                  opacity: index === currentSlide ? 1 : 0,
                  transition: 'transform 0.6s ease-out, opacity 0.6s',
                  transitionDelay: index === currentSlide ? '0.3s' : '0s',
                }}>
                  {slide.subtitle}
                </p>

                <div style={{ 
                  display: 'flex', gap: 12, flexWrap: 'wrap',
                  justifyContent: 'center',
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                  opacity: index === currentSlide ? 1 : 0,
                  transition: 'transform 0.6s ease-out, opacity 0.6s',
                  transitionDelay: index === currentSlide ? '0.4s' : '0s',
                }}>
                  <Link to="/services" className="btn btn-primary">
                    {slide.ctaPrimary} <ArrowIcon />
                  </Link>
                  <Link to="/about" className="btn btn-outline">
                    {slide.ctaSecondary}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          style={{
            position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)',
            width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--gray-200)',
            background: 'var(--white)', cursor: 'pointer', zIndex: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: 'var(--shadow-md)', transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => e.target.style.background = 'var(--gray-50)'}
          onMouseLeave={(e) => e.target.style.background = 'var(--white)'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          style={{
            position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)',
            width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--gray-200)',
            background: 'var(--white)', cursor: 'pointer', zIndex: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: 'var(--shadow-md)', transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => e.target.style.background = 'var(--gray-50)'}
          onMouseLeave={(e) => e.target.style.background = 'var(--white)'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Dots indicator */}
        <div style={{
          position: 'absolute', bottom: 120, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: 10, zIndex: 10,
        }}>
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: index === currentSlide ? 28 : 10,
                height: 10,
                borderRadius: 5,
                border: 'none',
                background: index === currentSlide ? 'var(--blue)' : 'var(--gray-200)',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats row (shown on all slides) */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '24px 0',
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.97))',
          boxShadow: '0 -2px 20px rgba(0,0,0,0.06)',
          zIndex: 5,
        }}>
          <div className="container">
            <div className="stats-row" style={{ 
              marginTop: 0, 
              paddingTop: 0, 
              border: 'none',
              justifyContent: 'center',
              gap: '60px',
            }}>
              {STATS.map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div className="stat-num" style={{ fontSize: 36 }}>{s.num}</div>
                  <div className="stat-lbl" style={{ fontSize: 13 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
            <div>
              <div className="badge"><span className="badge-dot" /> About Us</div>
              <h2 style={{ fontSize: 'clamp(24px,3.5vw,34px)', marginBottom: 16 }}>About IP Technologies</h2>
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.75, marginBottom: 28 }}>
                We are a team of passionate technologists dedicated to helping businesses
                thrive in the digital age. With years of experience across multiple domains,
                we deliver solutions that make a real impact.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
                {[{ num: '500+', label: 'Happy Clients' }, { num: '10+', label: 'Years Experience' }].map(s => (
                  <div key={s.label} style={{ background: 'var(--gray-50)', borderRadius: 12, padding: '18px 20px', border: '1px solid var(--gray-100)' }}>
                    <div className="stat-num" style={{ fontSize: 26 }}>{s.num}</div>
                    <div className="stat-lbl">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn btn-outline" style={{ borderColor: 'var(--blue)', color: 'var(--blue)' }}>
                Learn More <ArrowIcon />
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                alt="Team"
                style={{ borderRadius: 20, width: '100%', objectFit: 'cover', aspectRatio: '4/3', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>Our Services</h2>
            <p>Comprehensive technology solutions tailored to your business needs</p>
          </div>
          <div className="grid-3">
            {SERVICES.map(({ icon, title, desc }) => (
              <div key={title} className="card">
                <div className="icon-box">{icon}</div>
                <h3 style={{ fontSize: 16, marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13, color: 'var(--gray-500)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/services" className="btn btn-primary">View All Services <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section style={{ padding: '36px 32px', borderTop: '1px solid var(--gray-100)', borderBottom: '1px solid var(--gray-100)' }}>
        <p style={{ textAlign: 'center', fontSize: 11, fontWeight: 600, color: 'var(--gray-400)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 28 }}>
          Trusted by industry leaders
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 24, alignItems: 'center', opacity: 0.45, filter: 'grayscale(1)' }}>
          {[1,2,3,4,5,6].map(i => (
            <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={`https://via.placeholder.com/110x40?text=Logo+${i}`} alt={`Logo ${i}`} style={{ height: 32, objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-text">
              <h2>Ready to Transform Your Business?</h2>
              <p>Let's build something extraordinary together. Talk to our team today.</p>
            </div>
            <Link to="/contact" className="btn btn-white">Get in Touch →</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          section div[style*="repeat(6,1fr)"] {
            grid-template-columns: repeat(3,1fr) !important;
          }
          .stats-row {
            gap: 24px !important;
          }
          .stat-num {
            font-size: 28px !important;
          }
        }
        
        @media (max-width: 600px) {
          section div[style*="repeat(3,1fr)"] {
            grid-template-columns: repeat(2,1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
