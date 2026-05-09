'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 200, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 200, damping: 28, mass: 0.6 });
  const dotX = useSpring(x, { stiffness: 600, damping: 35, mass: 0.3 });
  const dotY = useSpring(y, { stiffness: 600, damping: 35, mass: 0.3 });
  const lastInteractive = useRef<Element | null>(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;
    setEnabled(true);
    document.body.classList.add('has-custom-cursor');

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as Element | null;
      const interactive = target?.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor="hover"]'
      );
      if (interactive !== lastInteractive.current) {
        lastInteractive.current = interactive ?? null;
        setHovering(Boolean(interactive));
      }
    };
    const leave = () => {
      x.set(-100);
      y.set(-100);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', leave);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
        style={{ x: dotX, y: dotY }}
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          style={{
            width: hovering ? 10 : 6,
            height: hovering ? 10 : 6,
            boxShadow: '0 0 12px rgba(255,255,255,0.8)',
            transition: 'width 200ms ease, height 200ms ease',
          }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99]"
        style={{ x: ringX, y: ringY }}
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/70"
          style={{
            width: hovering ? 56 : 36,
            height: hovering ? 56 : 36,
            boxShadow:
              '0 0 24px rgba(124,58,237,0.45), inset 0 0 12px rgba(124,58,237,0.25)',
            transition:
              'width 220ms cubic-bezier(.2,.8,.2,1), height 220ms cubic-bezier(.2,.8,.2,1), border-color 200ms',
          }}
        />
      </motion.div>
    </>
  );
}
