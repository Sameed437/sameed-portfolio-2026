'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

/*
 * One IntersectionObserver shared by every Reveal on the page.
 * Elements unobserve themselves after firing, so the observer empties
 * out as the visitor scrolls and costs nothing once the page is read.
 */
let shared: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  if (!shared) {
    shared = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
  }
  return shared;
}

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger in milliseconds. */
  delay?: number;
};

export default function Reveal({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = getObserver();
    if (!obs) {
      // No observer support — show the content rather than hiding it forever.
      el.classList.add('is-visible');
      return;
    }

    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
