import { Link } from 'react-router-dom';

const COLS = [
  {
    title: 'Services',
    links: [
      { label: 'Web Development', to: '/services' },
      { label: 'Mobile Apps', to: '/services' },
      { label: 'UI/UX Design', to: '/services' },
      { label: 'Cloud Solutions', to: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Technologies', to: '/technologies' },
      { label: 'Case Studies', to: '/about' },
      { label: 'Careers', to: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact Us', to: '/contact' },
      { label: 'LinkedIn', to: '/' },
      { label: 'Twitter / X', to: '/' },
      { label: 'GitHub', to: '/' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0d1022', color: 'rgba(255,255,255,0.48)', fontFamily: 'var(--font-body)' }}>
      <div className="container" style={{ padding: '56px 32px 28px' }}>

        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 48, marginBottom: 48,
        }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, textDecoration: 'none' }}>
              <span style={{
                width: 28, height: 28, borderRadius: 7, background: 'var(--blue)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 10L7 4L12 10" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span style={{
                fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 17,
                color: 'white', letterSpacing: '-0.03em',
              }}>IP Technologies</span>
            </Link>
            <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 220 }}>
              Empowering businesses with cutting-edge technology solutions since 2014.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
              {[
                { label: 'in', title: 'LinkedIn' },
                { label: '𝕏', title: 'Twitter' },
                { label: 'gh', title: 'GitHub' },
              ].map(({ label, title }) => (
                <a key={title} href="/" title={title} style={{
                  width: 32, height: 32, borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.45)', fontSize: 12, textDecoration: 'none',
                  transition: 'background 0.18s, color 0.18s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; }}
                >{label}</a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLS.map(col => (
            <div key={col.title}>
              <h4 style={{
                fontFamily: 'var(--font-head)', fontSize: 11, fontWeight: 700,
                color: 'white', letterSpacing: '0.08em', textTransform: 'uppercase',
                marginBottom: 18,
              }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} style={{ fontSize: 13, color: 'rgba(255,255,255,0.42)', textDecoration: 'none', transition: 'color 0.16s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'white'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.42)'}
                    >{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{ fontSize: 12 }}>© {new Date().getFullYear()} IP Technologies. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service'].map(t => (
              <a key={t} href="/" style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.16s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
              >{t}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
