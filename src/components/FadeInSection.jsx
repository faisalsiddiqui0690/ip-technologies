import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

export default function FadeInSection({ children, className = '', delay = 0 }) {
  const [setRef, isVisible] = useScrollFadeIn(0.1);

  return (
    <div
      ref={setRef}
      className={`fade-in-section ${className} ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
