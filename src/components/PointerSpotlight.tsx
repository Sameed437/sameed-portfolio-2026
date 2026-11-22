'use client';

import { useEffect } from 'react';

/**
 * One delegated listener. Any element with [data-spot] receives --mx / --my
 * (pointer position inside it) so CSS can paint a soft light that follows the
 * cursor. Fine-pointer devices only.
 */
export default function PointerSpotlight() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    let frame = 0;
    let last: PointerEvent | null = null;

    const apply = () => {
      frame = 0;
      if (!last) return;
      const host = (last.target as Element | null)?.closest?.('[data-spot]') as HTMLElement | null;
      if (!host) return;
      const r = host.getBoundingClientRect();
      host.style.setProperty('--mx', `${last.clientX - r.left}px`);
      host.style.setProperty('--my', `${last.clientY - r.top}px`);
    };
    const onMove = (e: PointerEvent) => {
      last = e;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      document.removeEventListener('pointermove', onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
