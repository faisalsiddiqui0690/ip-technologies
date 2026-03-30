import { Link } from 'react-router-dom';

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
        minHeight: '70vh', display: 'flex', alignItems: 'center',
        padding: '120px 32px 60px', position: 'relative', overflow: 'hidden',
        background: `
          radial-gradient(ellipse 65% 70% at 90% 25%, rgba(0,212,255,0.10) 0%, transparent 60%),
          radial-gradient(ellipse 50% 55% at 5% 90%, rgba(26,60,255,0.08) 0%, transparent 60%),
          var(--gray-50)
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

      {/* ── STATS ── */}
      <section style={{ 
        background: `linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%)`, 
        padding: '60px 32px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.1,
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32, textAlign: 'center' }}>
            {STATS.map((s, idx) => (
              <div key={s.label} style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '28px 20px',
                border: '1px solid rgba(255,255,255,0.2)',
              }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 42, fontWeight: 800, color: 'white', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', marginTop: 8, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:600px){ section div[style*="repeat(4,1fr)"]{grid-template-columns:repeat(2,1fr)!important;} }`}</style>
      </section>

      {/* ── MISSION ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format&fit=crop"
                alt="Office"
                style={{ borderRadius: 20, width: '100%', objectFit: 'cover', aspectRatio: '4/3', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
            <div>
              <div className="badge"><span className="badge-dot" /> Our Mission</div>
              <h2 style={{ fontSize: 'clamp(24px,3.5vw,34px)', marginBottom: 18 }}>
                Empowering Businesses Through Technology
              </h2>
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.8, marginBottom: 16 }}>
                Founded in 2014, IP Technologies has grown from a small startup into a trusted technology partner
                for over 500 businesses across India and globally. Our mission is simple: deliver world-class
                digital solutions that drive measurable results.
              </p>
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.8 }}>
                We combine deep technical expertise with a genuine passion for problem-solving — making us the
                team businesses turn to when they need solutions that truly work.
              </p>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){ .container div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;} }`}</style>
      </section>

      {/* ── VALUES ── */}
      <section className="section section-alt">
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
      </section>

      {/* ── TEAM ── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Meet the Team</h2>
            <p>The talented people behind every solution we deliver</p>
          </div>
          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(4,1fr