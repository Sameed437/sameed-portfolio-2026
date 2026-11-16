'use client';

import { useEffect } from 'react';

type Instance = { destroy: () => void; layout: () => void };
declare global {
  interface Window {
    ScrollCraft?: { mount: (root?: Element | Document) => Instance };
  }
}

/*
 * Mounts the vendored scroll-craft engine once the server-rendered markup has
 * hydrated. The engine reads data-sc-* attributes off the page and never
 * generates DOM, so React keeps owning the markup. It is never edited; page
 * behaviour lives in the components and in CSS reading --sc-p.
 */
export default function ScrollCraftMount() {
  useEffect(() => {
    let inst: Instance | null = null;
    let cancelled = false;
    import('@/scrollcraft/engine/scrollcraft.js').then(() => {
      if (cancelled || !window.ScrollCraft) return;
      inst = window.ScrollCraft.mount(document.body);
    });
    return () => {
      cancelled = true;
      inst?.destroy();
    };
  }, []);
  return null;
}
