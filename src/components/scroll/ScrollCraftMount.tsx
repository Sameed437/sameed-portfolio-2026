'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

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
 *
 * The engine collects its acts and cues once, at mount. This component lives
 * in the root layout, so it survives client-side navigation while the page
 * underneath is replaced. Without a re-mount per route, going /studio -> /
 * (for example by clicking the name in the navbar) leaves the new page's
 * [data-sc-cue] elements at their CSS default of opacity 0: the hero text is
 * missing and nothing animates. Keying the effect on the pathname tears the
 * engine down and mounts it again against the new DOM.
 */
export default function ScrollCraftMount() {
  const pathname = usePathname();

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
  }, [pathname]);
  return null;
}
