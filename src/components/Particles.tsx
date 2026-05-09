'use client';

import { useEffect, useRef } from 'react';

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
};

export default function Particles({
  density = 60,
  color = '124,58,237',
}: {
  density?: number;
  color?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let dots: Dot[] = [];
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.floor((w * h) / 18000) + density;
      dots = new Array(target).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.5 + 0.2,
      }));
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${d.alpha})`;
        ctx.fill();
      }
      // connect close dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i];
          const b = dots[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.strokeStyle = `rgba(${color}, ${(1 - dist / 110) * 0.18})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    if (!reduced) raf = requestAnimationFrame(tick);
    else {
      // draw once
      ctx.clearRect(0, 0, w, h);
      dots.forEach((d) => {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${d.alpha})`;
        ctx.fill();
      });
    }

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [density, color]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 h-full w-full"
      style={{ display: 'block' }}
    />
  );
}
