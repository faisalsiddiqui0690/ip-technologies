import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import iplogo from "../assets/ipshopylogo.png" ;
import slider1 from "../assets/slider1.jpeg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import { useScrollBlur } from '../hooks/useScrollBlur';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import FadeInSection from '../components/FadeInSection';

const SLIDES = [
  {
    title: 'Building the Future, One Solution at a Time',
    subtitle: 'Custom web, mobile & cloud solutions engineered for performance, scale, and real business impact.',
    ctaPrimary: 'Explore Services',
    ctaSecondary: 'View Our Work',
    image: slider1,
  },
  {
    title: 'Innovative Technology Solutions',
    subtitle: 'Transform your business with cutting-edge web and mobile applications designed for growth.',
    ctaPrimary: 'Our Services',
    ctaSecondary: 'Contact Us',
    image: slider2,
  },
  {
    title: 'Your Partner in Digital Excellence',
    subtitle: 'Expert development team ready to bring your vision to life with modern technologies.',
    ctaPrimary: 'Get Started',
    ctaSecondary: 'Learn More',
    image: slider3,
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
  const heroBlur = useScrollBlur(300);
  const [showEcommerceModal, setShowEcommerceModal] = useState(null); // null, 'marketplace', 'sellerhub', 'shipments'

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
        paddingTop: 62, // Offset for fixed header
        filter: `blur(${heroBlur}px)`,
        transition: 'filter 0.1s ease-out',
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
                  filter: 'brightness(0.95)',
                }}
              />
              {/* Minimal overlay for better text readability */}
              <div style={{
                position: 'absolute', inset: 0,
                background: `
                  linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 100%)
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
      <FadeInSection className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, alignItems: 'center' }}>
            <div style={{ paddingRight: '10px' }}>
              <img
                src={iplogo}
                alt="Team"
                style={{ borderRadius: 2, width: '80%', objectFit: 'cover', aspectRatio: '4/3', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
            <div style={{ paddingLeft: '40px' }}>
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
          </div>
        </div>
      </FadeInSection>

      {/* ── SERVICES PREVIEW ── */}
      <FadeInSection className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>Our Services</h2>
            <p>Comprehensive technology solutions and e-commerce platforms tailored to your business needs</p>
          </div>
          <div className="grid-3">
            {/* IPShopy Marketplace Card */}
            <div 
              className="card" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column',
                cursor: 'pointer',
                border: '2px solid #ff6b35',
                background: 'linear-gradient(135deg, rgba(255,107,53,0.03) 0%, rgba(255,107,53,0.08) 100%)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onClick={() => setShowEcommerceModal('marketplace')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,107,53,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div className="icon-box" style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)' }}>
                <svg viewBox="0 0 24 24" style={{ stroke: 'white', strokeWidth: 1.8, fill: 'none' }}>
                  <rect x="2" y="7" width="20" height="14" rx="2"/>
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                  <line x1="12" y1="11" x2="12" y2="17"/>
                  <line x1="9" y1="14" x2="15" y2="14"/>
                </svg>
              </div>
              <h3 style={{ fontSize: 17, marginBottom: 10 }}>IPShopy Marketplace</h3>
              <p style={{ fontSize: 13, color: 'var(--gray-500)', lineHeight: 1.65, marginBottom: 16, flex: 1 }}>
                0% commission marketplace platform with integrated shipping solutions.
              </p>
              <button 
                style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '10px 16px',
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginTop: 'auto',
                  boxShadow: '0 2px 8px rgba(255,107,53,0.3)',
                }}
              >
                Learn More →
              </button>
            </div>

            {/* IPShopy Seller Hub Card */}
            <div 
              className="card" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column',
                cursor: 'pointer',
                border: '2px solid #1a3cff',
                background: 'linear-gradient(135deg, rgba(26,60,255,0.03) 0%, rgba(26,60,255,0.08) 100%)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onClick={() => setShowEcommerceModal('sellerhub')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,60,255,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div className="icon-box" style={{ background: 'linear-gradient(135deg, #1a3cff 0%, #0a1a6b 100%)' }}>
                <svg viewBox="0 0 24 24" style={{ stroke: 'white', strokeWidth: 1.8, fill: 'none' }}>
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18"/>
                  <path d="M9 21V9"/>
                </svg>
              </div>
              <h3 style={{ fontSize: 17, marginBottom: 10 }}>IPShopy Seller Hub</h3>
              <p style={{ fontSize: 13, color: 'var(--gray-500)', lineHeight: 1.65, marginBottom: 16, flex: 1 }}>
                Complete seller dashboard with analytics, inventory & order management.
              </p>
              <button 
                style={{
                  background: 'linear-gradient(135deg, #1a3cff 0%, #0a1a6b 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '10px 16px',
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginTop: 'auto',
                  boxShadow: '0 2px 8px rgba(26,60,255,0.3)',
                }}
              >
                Learn More →
              </button>
            </div>

            {/* IPShopy Shipments Card */}
            <div 
              className="card" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column',
                cursor: 'pointer',
                border: '2px solid #00b894',
                background: 'linear-gradient(135deg, rgba(0,184,148,0.03) 0%, rgba(0,184,148,0.08) 100%)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onClick={() => setShowEcommerceModal('shipments')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,184,148,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div className="icon-box" style={{ background: 'linear-gradient(135deg, #00b894 0%, #00a383 100%)' }}>
                <svg viewBox="0 0 24 24" style={{ stroke: 'white', strokeWidth: 1.8, fill: 'none' }}>
                  <rect x="1" y="3" width="15" height="13" rx="2"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <h3 style={{ fontSize: 17, marginBottom: 10 }}>IPShopy Shipments</h3>
              <p style={{ fontSize: 13, color: 'var(--gray-500)', lineHeight: 1.65, marginBottom: 16, flex: 1 }}>
                End-to-end logistics with real-time tracking and competitive rates.
              </p>
              <button 
                style={{
                  background: 'linear-gradient(135deg, #00b894 0%, #00a383 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '10px 16px',
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginTop: 'auto',
                  boxShadow: '0 2px 8px rgba(0,184,148,0.3)',
                }}
              >
                Learn More →
              </button>
            </div>

            {/* Web Development Card */}
            <div className="card">
              <div className="icon-box">
                <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h3 style={{ fontSize: 16, marginBottom: 8 }}>Web Development</h3>
              <p style={{ fontSize: 13, color: 'var(--gray-500)', lineHeight: 1.65 }}>
                Custom web applications built with modern technologies for optimal performance and scalability.
              </p>
            </div>

            {/* Mobile App Development Card */}
            <div className="card">
              <div className="icon-box">
                <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              </div>
              <h3 style={{ fontSize: 16, marginBottom: 8 }}>Mobile App Development</h3>
              <p style={{ fontSize: 13, color: 'var(--gray-500)', lineHeight: 1.65 }}>
                Native and cross-platform mobile solutions that deliver exceptional user experiences.
              </p>
            </div>

            {/* UI/UX Design Card */}
            <div className="card">
              <div className="icon-box">
                <svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/></svg>
              </div>
              <h3 style={{ fontSize: 16, marginBottom: 8 }}>UI/UX Design</h3>
              <p style={{ fontSize: 13, color: 'var(--gray-500)', lineHeight: 1.65 }}>
                User-centered design that combines aesthetics with functionality for maximum engagement.
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/services" className="btn btn-primary">View All Services <ArrowIcon /></Link>
          </div>
        </div>
      </FadeInSection>

      {/* ── TRUSTED BY ── */}
      {/* <FadeInSection>
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
      </FadeInSection> */}

      {/* ── CTA BANNER ── */}
      <FadeInSection className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-text">
              <h2>Ready to Transform Your Business?</h2>
              <p>Let's build something extraordinary together. Talk to our team today.</p>
            </div>
            <Link to="/contact" className="btn btn-white">Get in Touch →</Link>
          </div>
        </div>
      </FadeInSection>

      {/* E-commerce Modal Popup - Same as Services page */}
      {showEcommerceModal && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setShowEcommerceModal(null)}
        >
          <div 
            style={{
              background: 'white',
              borderRadius: 20,
              maxWidth: 700,
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              position: 'relative',
              animation: 'modalSlideIn 0.3s ease-out',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowEcommerceModal(null)}
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                width: 36,
                height: 36,
                borderRadius: '50%',
                border: 'none',
                background: 'var(--gray-100)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--gray-200)';
                e.target.style.transform = 'rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'var(--gray-100)';
                e.target.style.transform = 'rotate(0deg)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gray-900)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {/* Header Banner - Dynamic based on service */}
            <div style={{
              background: showEcommerceModal === 'marketplace' 
                ? 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)'
                : showEcommerceModal === 'sellerhub'
                ? 'linear-gradient(135deg, #1a3cff 0%, #0a1a6b 100%)'
                : 'linear-gradient(135deg, #00b894 0%, #00a383 100%)',
              padding: '40px 32px',
              borderRadius: '20px 20px 0 0',
              color: 'white',
              textAlign: 'center',
            }}>
              <div style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                background: 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}>
                {showEcommerceModal === 'marketplace' ? (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2"/>
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                    <line x1="12" y1="11" x2="12" y2="17"/>
                    <line x1="9" y1="14" x2="15" y2="14"/>
                  </svg>
                ) : showEcommerceModal === 'sellerhub' ? (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M3 9h18"/>
                    <path d="M9 21V9"/>
                  </svg>
                ) : (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" rx="2"/>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/>
                    <circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                )}
              </div>
              <h2 style={{ fontSize: 28, marginBottom: 8, fontWeight: 800 }}>
                {showEcommerceModal === 'marketplace' ? 'IPShopy Marketplace' 
                 : showEcommerceModal === 'sellerhub' ? 'IPShopy Seller Hub' 
                 : 'IPShopy Shipments'}
              </h2>
              <p style={{ fontSize: 16, opacity: 0.95 }}>
                {showEcommerceModal === 'marketplace' ? 'Your Gateway to E-commerce Success'
                 : showEcommerceModal === 'sellerhub' ? 'Complete Seller Management Dashboard'
                 : 'Smart Logistics & Shipping Solutions'}
              </p>
            </div>

            {/* Content */}
            <div style={{ padding: '40px 32px' }}>
              {/* Introduction */}
              <div style={{ marginBottom: 32 }}>
                <h3 style={{ fontSize: 20, marginBottom: 12, color: 'var(--gray-900)' }}>About This Service</h3>
                
                {showEcommerceModal === 'marketplace' && (
                  <>
                    <p style={{ fontSize: 15, color: 'var(--gray-500)', lineHeight: 1.7, marginBottom: 16 }}>
                      We are revolutionizing online commerce with India's most seller-friendly marketplace platform. 
                      At IPShopy, we believe in empowering businesses by providing a seamless, cost-effective ecosystem 
                      where sellers can thrive without the burden of high commissions.
                    </p>
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(255,107,53,0.08) 0%, rgba(255,140,66,0.08) 100%)',
                      border: '1px solid rgba(255,107,53,0.2)',
                      borderRadius: 12,
                      padding: 20,
                      marginBottom: 24,
                    }}>
                      <p style={{ 
                        fontSize: 16, 
                        fontWeight: 600, 
                        color: '#ff6b35', 
                        margin: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        0% Commission on All Sales - Keep 100% of Your Profits!
                      </p>
                    </div>
                  </>
                )}

                {showEcommerceModal === 'sellerhub' && (
                  <>
                    <p style={{ fontSize: 15, color: 'var(--gray-500)', lineHeight: 1.7, marginBottom: 16 }}>
                      The IPShopy Seller Hub is your command center for managing your entire e-commerce business. 
                      From real-time analytics to inventory tracking and order management, everything you need 
                      to grow your business is available in one intuitive, easy-to-use dashboard.
                    </p>
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(26,60,255,0.08) 0%, rgba(10,26,107,0.08) 100%)',
                      border: '1px solid rgba(26,60,255,0.2)',
                      borderRadius: 12,
                      padding: 20,
                      marginBottom: 24,
                    }}>
                      <p style={{ 
                        fontSize: 16, 
                        fontWeight: 600, 
                        color: '#1a3cff', 
                        margin: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        All-in-One Dashboard - Manage Everything from One Place!
                      </p>
                    </div>
                  </>
                )}

                {showEcommerceModal === 'shipments' && (
                  <>
                    <p style={{ fontSize: 15, color: 'var(--gray-500)', lineHeight: 1.7, marginBottom: 16 }}>
                      IPShopy Shipments takes the complexity out of e-commerce logistics. Our integrated shipping 
                      solution provides competitive rates, real-time tracking, and reliable delivery partners 
                      to ensure your products reach customers safely and on time.
                    </p>
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(0,184,148,0.08) 0%, rgba(0,163,131,0.08) 100%)',
                      border: '1px solid rgba(0,184,148,0.2)',
                      borderRadius: 12,
                      padding: 20,
                      marginBottom: 24,
                    }}>
                      <p style={{ 
                        fontSize: 16, 
                        fontWeight: 600, 
                        color: '#00b894', 
                        margin: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Pan-India Delivery - Fast, Reliable & Trackable!
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Key Features */}
              <div style={{ marginBottom: 32 }}>
                <h3 style={{ fontSize: 20, marginBottom: 16, color: 'var(--gray-900)' }}>Key Features</h3>
                <div style={{ display: 'grid', gap: 16 }}>
                  {(showEcommerceModal === 'marketplace' ? [
                    {
                      title: 'Zero Commission Model',
                      desc: 'List and sell unlimited products without paying any platform fees or commissions.',
                      icon: '💰'
                    },
                    {
                      title: 'Integrated Shipping',
                      desc: 'Built-in IPShopy Shipments integration for seamless order fulfillment.',
                      icon: '📦'
                    },
                    {
                      title: 'Seller Hub Access',
                      desc: 'Complete dashboard for analytics, inventory, and order management.',
                      icon: '📊'
                    },
                    {
                      title: 'Pan-India Reach',
                      desc: 'Connect with millions of customers across India.',
                      icon: '🇮🇳'
                    },
                    {
                      title: 'Secure Payments',
                      desc: 'Fast, reliable payment settlements with complete transparency.',
                      icon: '🔒'
                    },
                    {
                      title: 'Marketing Support',
                      desc: 'Promotional campaigns and marketing tools to boost visibility.',
                      icon: '📢'
                    },
                  ] : showEcommerceModal === 'sellerhub' ? [
                    {
                      title: 'Real-Time Analytics',
                      desc: 'Track sales, revenue, and performance metrics with detailed dashboards.',
                      icon: '📈'
                    },
                    {
                      title: 'Inventory Management',
                      desc: 'Automated stock tracking, low-stock alerts, and bulk upload capabilities.',
                      icon: '📦'
                    },
                    {
                      title: 'Order Processing',
                      desc: 'Streamlined order management from placement to delivery confirmation.',
                      icon: '✅'
                    },
                    {
                      title: 'Customer Insights',
                      desc: 'Understand your customers with detailed behavior and purchase analytics.',
                      icon: '👥'
                    },
                    {
                      title: 'Automated Notifications',
                      desc: 'Keep customers informed with automated order status updates.',
                      icon: '🔔'
                    },
                    {
                      title: 'Multi-Platform Sync',
                      desc: 'Manage multiple sales channels from a single unified dashboard.',
                      icon: '🔄'
                    },
                  ] : [
                    {
                      title: 'Competitive Rates',
                      desc: 'Negotiated shipping rates that save you money on every order.',
                      icon: '💵'
                    },
                    {
                      title: 'Real-Time Tracking',
                      desc: 'Live shipment tracking for you and your customers.',
                      icon: '📍'
                    },
                    {
                      title: 'Multiple Partners',
                      desc: 'Integration with India\'s most reliable courier and logistics partners.',
                      icon: '🚚'
                    },
                    {
                      title: 'Automated Pickup',
                      desc: 'Schedule automatic pickups from your warehouse or location.',
                      icon: '⏰'
                    },
                    {
                      title: 'COD Support',
                      desc: 'Cash on delivery option with fast remittance cycles.',
                      icon: '💰'
                    },
                    {
                      title: 'Returns Management',
                      desc: 'Hassle-free reverse logistics for returns and exchanges.',
                      icon: '↩️'
                    },
                  ]).map((feature, idx) => (
                    <div 
                      key={idx}
                      style={{
                        display: 'flex',
                        gap: 16,
                        padding: 16,
                        borderRadius: 12,
                        background: 'var(--gray-50)',
                        border: '1px solid var(--gray-100)',
                        transition: 'transform 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div style={{
                        fontSize: 28,
                        flexShrink: 0,
                      }}>{feature.icon}</div>
                      <div>
                        <h4 style={{ fontSize: 15, fontWeight: 600, color: 'var(--gray-900)', marginBottom: 4 }}>
                          {feature.title}
                        </h4>
                        <p style={{ fontSize: 13, color: 'var(--gray-500)', lineHeight: 1.6, margin: 0 }}>
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div style={{
                background: showEcommerceModal === 'marketplace'
                  ? 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)'
                  : showEcommerceModal === 'sellerhub'
                  ? 'linear-gradient(135deg, #1a3cff 0%, #0a1a6b 100%)'
                  : 'linear-gradient(135deg, #00b894 0%, #00a383 100%)',
                borderRadius: 16,
                padding: 28,
                textAlign: 'center',
                color: 'white',
              }}>
                <h3 style={{ fontSize: 20, marginBottom: 8 }}>
                  {showEcommerceModal === 'marketplace' ? 'Ready to Start Selling?'
                   : showEcommerceModal === 'sellerhub' ? 'Ready to Grow Your Business?'
                   : 'Ready to Simplify Shipping?'}
                </h3>
                <p style={{ fontSize: 14, marginBottom: 20, opacity: 0.9 }}>
                  {showEcommerceModal === 'marketplace' ? 'Join thousands of successful sellers on IPShopy.com'
                   : showEcommerceModal === 'sellerhub' ? 'Get access to powerful seller tools and analytics'
                   : 'Start shipping with confidence today'}
                </p>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a 
                    href="https://www.ipshopy.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'white',
                      color: showEcommerceModal === 'marketplace' ? '#ff6b35'
                        : showEcommerceModal === 'sellerhub' ? '#1a3cff'
                        : '#00b894',
                      padding: '12px 28px',
                      borderRadius: 9,
                      fontSize: 14,
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      transition: 'transform 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 4px 12px rgba(255,255,255,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    {showEcommerceModal === 'marketplace' ? 'Visit IPShopy.com'
                     : showEcommerceModal === 'sellerhub' ? 'Access Seller Hub'
                     : 'Explore Shipments'}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                  <button
                    onClick={() => setShowEcommerceModal(null)}
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      padding: '12px 28px',
                      borderRadius: 9,
                      fontSize: 14,
                      fontWeight: 600,
                      border: '1.5px solid rgba(255,255,255,0.4)',
                      cursor: 'pointer',
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
