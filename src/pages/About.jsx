import { Link } from 'react-router-dom';
import iplogo from "../assets/ipshopylogo.png" ;
import { useScrollBlur } from '../hooks/useScrollBlur';
import FadeInSection from '../components/FadeInSection';

const TEAM = [
  { name: 'Rahul Mehta', role: 'CEO & Co-Founder', initials: 'RM', color: '#1a3cff' },
  { name: 'Priya Sharma', role: 'CTO', initials: 'PS', color: '#0f6e56' },
  { name: 'Arjun Patel', role: 'Head of Design', initials: 'AP', color: '#993556' },
  { name: 'Sneha Iyer', role: 'Lead Engineer', initials: 'SI', color: '#854F0B' },
];

const VALUES = [
  {
    icon: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Quality First',
    desc: 'We deliver excellence in every line of code and every pixel of design.',
  },
  {
    icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
    title: 'On-Time Delivery',
    desc: 'We respect deadlines and communicate proactively every step of the way.',
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'Client Partnership',
    desc: 'We treat every project as our own — your success is our success.',
  },
  {
    icon: <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: 'Innovation Driven',
    desc: 'We stay ahead of the curve to bring you modern, future-proof solutions.',
  },
];

const STATS = [
  { num: '500+', label: 'Happy Clients' },
  { num: '10+', label: 'Years Experience' },
  { num: '250+', label: 'Projects Delivered' },
  { num: '15+', label: 'Team Members' },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
    <path d="M3 7h8M8 4l3 3-3 3" />
  </svg>
);

export default function About() {
  return (
    <div className="page">

      {/* ── PAGE HERO ── */}
      <section style={{
        minHeight: '50vh', display: 'flex', alignItems: 'center',
        paddingTop: '162px', paddingBottom: '40px', position: 'relative', overflow: 'hidden',
        background: `
          linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%),
          url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop') center/cover no-repeat
        `,
      }}>
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <div className="badge" style={{ margin: '0 auto 18px' }}><span className="badge-dot" /> Our Story</div>
          <h1 style={{ fontSize: 'clamp(34px, 5vw, 52px)', marginBottom: 16 }}>About IP Technologies</h1>
          <p style={{ color: 'var(--gray-500)', fontSize: 17, maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.7 }}>
            A passionate team of technologists dedicated to building digital solutions that make a real difference.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Work With Us <ArrowIcon /></Link>
            <Link to="/services" className="btn btn-outline">Our Services</Link>
          </div>
        </div>
      </section>

    

      {/* ── MISSION ── */}
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
      
      {/* ── VALUES ── */}
      <FadeInSection className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we build and every relationship we form</p>
          </div>
          <div className="grid-2">
            {VALUES.map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div className="icon-box" style={{ flexShrink: 0 }}>{icon}</div>
                <div>
                  <h3 style={{ fontSize: 16, marginBottom: 6 }}>{title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--gray-500)', lineHeight: 1.65 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
  {/* ── STATS ── */}
      <FadeInSection className="section section-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32, textAlign: 'center' }}>
            {STATS.map((s, idx) => (
              <div key={s.label} style={{
                background: 'var(--white)',
                borderRadius: '16px',
                padding: '32px 24px',
                border: '1px solid var(--gray-200)',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 42, fontWeight: 800, color: 'var(--blue)', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 14, color: 'var(--gray-500)', marginTop: 8, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:600px){ section div[style*="repeat(4,1fr)"]{grid-template-columns:repeat(2,1fr)!important;} }`}</style>
      </FadeInSection>
      {/* ── TEAM ── */}
      <FadeInSection className="section">
        <div className="container">
          <div className="section-head">
            <h2>Meet the Team</h2>
            <p>The talented people behind every solution we deliver</p>
          </div>
          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
            {TEAM.map(({ name, role, initials, color }) => (
              <div key={name} className="card" style={{ 
                textAlign: 'center',
                transition: 'transform 0.2s, box-shadow 0.2s',
                padding: '32px 20px',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${color}20, ${color}10)`, 
                  border: `2.5px solid ${color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 22, 
                  color,
                  boxShadow: `0 4px 16px ${color}25`,
                }}>{initials}</div>
                <h3 style={{ fontSize: 17, marginBottom: 6, fontWeight: 700 }}>{name}</h3>
                <p style={{ fontSize: 13, color: 'var(--blue)', fontWeight: 500 }}>{role}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){ .container div[style*="repeat(4,1fr)"]{grid-template-columns:repeat(2,1fr)!important;} }`}</style>
      </FadeInSection>

      {/* ── CTA ── */}
      <FadeInSection className="section section-alt" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{
            borderRadius: '20px',
            padding: '48px 40px',
            background: 'var(--white)',
            border: '1px solid var(--gray-200)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
          }}>
            <div>
              <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', marginBottom: 8 }}>Let's Work Together</h2>
              <p style={{ color: 'var(--gray-500)', fontSize: 14 }}>Have a project in mind? We'd love to hear about it.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Get in Touch →</Link>
          </div>
        </div>
      </FadeInSection>

    </div>
  );
}
