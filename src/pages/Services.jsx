import { Link } from 'react-router-dom';
import { useScrollBlur } from '../hooks/useScrollBlur';
import FadeInSection from '../components/FadeInSection';

const SERVICES = [
  {
    icon: <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    title: 'Web Development',
    desc: 'From simple landing pages to complex enterprise platforms, we build fast, scalable, and secure web applications using the latest technologies.',
    features: ['React / Next.js', 'Node.js & REST APIs', 'Database Design', 'Performance Optimization'],
  },
  {
    icon: <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    title: 'Mobile App Development',
    desc: 'Native iOS & Android apps plus cross-platform solutions that deliver smooth, engaging experiences across all devices.',
    features: ['React Native', 'iOS (Swift)', 'Android (Kotlin)', 'App Store Deployment'],
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/></svg>,
    title: 'UI/UX Design',
    desc: 'Beautiful, intuitive interfaces crafted through research, prototyping, and user testing — design that converts visitors into customers.',
    features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing'],
  },
  {
    icon: <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: 'E-Commerce Solutions',
    desc: 'End-to-end online store development with payment integration, inventory management, and conversion-optimised checkout flows.',
    features: ['Shopify / WooCommerce', 'Payment Gateways', 'Inventory Systems', 'Analytics Integration'],
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
    title: 'Cloud & DevOps',
    desc: 'Scalable cloud infrastructure, CI/CD pipelines, and deployment automation that keeps your product running reliably at any scale.',
    features: ['AWS / GCP / Azure', 'Docker & Kubernetes', 'CI/CD Pipelines', '24/7 Monitoring'],
  },
  {
    icon: <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>,
    title: 'Custom Software',
    desc: 'Bespoke software solutions built around your specific workflows — ERP, CRM, dashboards, and automation tools.',
    features: ['Requirements Analysis', 'Custom Architecture', 'Integration & APIs', 'Ongoing Support'],
  },
];

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'We start by understanding your business, goals, and users.' },
  { step: '02', title: 'Design', desc: 'Wireframes, prototypes, and design reviews before a single line of code.' },
  { step: '03', title: 'Development', desc: 'Agile sprints with regular demos and transparent communication.' },
  { step: '04', title: 'Launch', desc: 'Testing, deployment, and handover — with post-launch support.' },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
    <path d="M3 7h8M8 4l3 3-3 3" />
  </svg>
);

export default function Services() {
  const heroBlur = useScrollBlur(300);

  return (
    <div className="page">

      {/* ── PAGE HERO ── */}
      <section style={{
        minHeight: '50vh', display: 'flex', alignItems: 'center',
        paddingTop: '162px', paddingBottom: '40px', position: 'relative', overflow: 'hidden',
        background: `
          linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%),
          url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&auto=format&fit=crop') center/cover no-repeat
        `,
        filter: `blur(${heroBlur}px)`,
        transition: 'filter 0.1s ease-out',
      }}>
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <div className="badge" style={{ margin: '0 auto 18px' }}><span className="badge-dot" /> What We Do</div>
          <h1 style={{ fontSize: 'clamp(34px, 5vw, 52px)', marginBottom: 16 }}>Our Services</h1>
          <p style={{ color: 'var(--gray-500)', fontSize: 17, maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.7 }}>
            Comprehensive technology solutions designed to accelerate your growth and transform your business.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Get a Quote <ArrowIcon /></Link>
            <Link to="/technologies" className="btn btn-outline">View Technologies</Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <FadeInSection className="section section-alt">
        <div className="container">
          <div className="grid-3">
            {SERVICES.map(({ icon, title, desc, features }) => (
              <div key={title} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="icon-box">{icon}</div>
                <h3 style={{ fontSize: 17, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 13, color: 'var(--gray-500)', lineHeight: 1.65, marginBottom: 20, flex: 1 }}>{desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--gray-500)' }}>
                      <span style={{ width: 16, height: 16, borderRadius: '50%', background: 'var(--blue-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4l2 2 3-3" stroke="var(--blue)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* ── PROCESS ── */}
      <FadeInSection className="section">
        <div className="container">
          <div className="section-head">
            <h2>How We Work</h2>
            <p>A proven process that delivers results, on time and on budget</p>
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4,1fr)', 
            gap: 32, 
            position: 'relative',
            padding: '40px 0',
          }}>
            {PROCESS.map(({ step, title, desc }, idx) => (
              <div key={step} style={{ 
                textAlign: 'center', 
                position: 'relative',
                background: 'var(--white)',
                padding: '32px 24px',
                borderRadius: '16px',
                border: '1px solid var(--gray-200)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: `linear-gradient(135deg, var(--blue), var(--blue-dark))`,
                  color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 18,
                  boxShadow: '0 4px 12px rgba(26,60,255,0.3)',
                }}>{step}</div>
                <h3 style={{ fontSize: 17, marginBottom: 10, fontWeight: 700 }}>{title}</h3>
                <p style={{ fontSize: 13, color: 'var(--gray-500)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){ .container div[style*="repeat(4,1fr)"]{grid-template-columns:repeat(2,1fr)!important;} }`}</style>
      </FadeInSection>

      {/* ── CTA ── */}
      <FadeInSection className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-text">
              <h2>Need a Custom Solution?</h2>
              <p>Tell us about your project and we'll get back to you within 24 hours.</p>
            </div>
            <Link to="/contact" className="btn btn-white">Start a Project →</Link>
          </div>
        </div>
      </FadeInSection>

    </div>
  );
}
