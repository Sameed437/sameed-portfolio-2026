'use client';

import { useEffect, useRef, useState } from 'react';

/*
 * Counts up once, when the number first scrolls into view.
 *
 * Values arrive as strings like "20+" or "3+", so the numeric part animates
 * and any prefix/suffix is preserved verbatim.
 *
 * The effect depends only on primitives. Depending on the regex match array
 * would re-run it every render (a new array each time), which resets the
 * value to 0 on a loop and leaves the counter stuck at zero.
 */
const PARTS = /^(\D*)(\d+)(.*)$/;

export default function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  const match = PARTS.exec(value);
  const prefix = match ? match[1] : '';
  const suffix = match ? match[3] : '';
  const target = match ? Number(match[2]) : 0;
  const animatable = match !== null;

  // Server and first client render both show the real number, so the markup
  // hydrates cleanly and the value is correct even if the effect never runs.
  const [shown, setShown] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el || !animatable) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) return;

    let raf = 0;
    let start = 0;
    setShown(0);

    const obs = new IntersectionObserver(
      (entries, o) => {
        if (!entries[0].isIntersecting) return;
        o.disconnect();

        const step = (t: number) => {
          if (!start) start = t;
          const p = Math.min((t - start) / 1100, 1);
          // ease-out cubic, so it settles instead of stopping dead
          setShown(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(step);
        };

        raf = requestAnimationFrame(step);
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
    );

    obs.observe(el);

    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, animatable]);

  if (!animatable) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}
