import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Technologies', to: '/technologies' },
];

const LogoMark = () => (
  <span style={{
    width: 28, height: 28, borderRadius: 7,
    background: 'var(--blue)', display: 'flex',
    alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  }}>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 10L7 4L12 10" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const fn = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const isScrolled = currentScrollY > 40;

          setScrolled(isScrolled);
          setVisible(currentScrollY < lastScrollY || currentScrollY < 60);
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, [lastScrollY]);

  useEffect(() => setMobileOpen(false), [location]);

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 62,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',

        // Always transparent - no white background
        background: 'transparent',

        // Glassmorphism effect - always blurred, stronger when scrolled
        backdropFilter: scrolled 
          ? 'blur(24px) saturate(180%)' 
          : 'blur(12px) saturate(140%)',
        WebkitBackdropFilter: scrolled 
          ? 'blur(24px) saturate(180%)' 
          : 'blur(12px) saturate(140%)',

        // Subtle border that becomes more visible on scroll
        borderBottom: scrolled 
          ? '1px solid rgba(255, 255, 255, 0.18)' 
          : '1px solid rgba(255, 255, 255, 0.08)',

        // Shadow only appears when scrolled
        boxShadow: scrolled 
          ? '0 8px 32px rgba(0, 0, 0, 0.12)' 
          : 'none',

        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)',
      }}>

        {/* Logo */}
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          textDecoration: 'none',
        }}>
          <LogoMark />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 800,
            fontSize: 17,
            color: 'var(--gray-900)',
            letterSpacing: '-0.03em',
            WebkitFontSmoothing: 'antialiased',
            textShadow: '0 2px 8px rgba(0,0,0,0.12)',
          }}>IP Technologies</span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="desktop-nav">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: isActive(to) ? 'var(--blue)' : 'var(--gray-900)',
                background: isActive(to) ? 'var(--blue-light)' : 'transparent',
                padding: '6px 13px',
                borderRadius: 8,
                transition: 'color 0.18s, background 0.18s',
              }}
            >
              {label}
            </Link>
          ))}

          <Link
            to="/contact"
            style={{
              marginLeft: 10,
              background: 'var(--blue)',
              color: 'white',
              padding: '7px 20px',
              borderRadius: 9,
              fontSize: 13,
              fontWeight: 600,
              transition: 'background 0.18s',
              boxShadow: '0 2px 8px rgba(26,60,255,0.3)',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--blue-dark)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--blue)'}
          >
            Get in Touch
          </Link>
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          className="hamburger-btn"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: 5,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 4,
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 22,
                height: 2,
                background: 'var(--gray-900)',
                borderRadius: 2,
                transition: '0.3s',
              }}
            />
          ))}
        </button>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: 62,
          left: 0,
          right: 0,
          zIndex: 99,
          background: 'white',
          borderBottom: '1px solid var(--gray-200)',
          padding: '16px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}>
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              style={{
                fontSize: 15,
                fontWeight: 500,
                padding: '10px 12px',
                borderRadius: 8,
                color: isActive(to) ? 'var(--blue)' : 'var(--gray-900)',
                background: isActive(to) ? 'var(--blue-light)' : 'transparent',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            style={{
              marginTop: 8,
              background: 'var(--blue)',
              color: 'white',
              padding: '11px 16px',
              borderRadius: 9,
              fontSize: 14,
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            Get in Touch
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}