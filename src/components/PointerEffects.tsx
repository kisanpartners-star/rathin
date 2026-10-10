/**
 * Pointer effects.
 *  - Button ripple: every device.
 *  - Desktop only (mouse, hover-capable, no reduced-motion): soft cursor follower, card spotlight + tilt
 *    (elements with data-fx / data-tilt) and magnetic buttons (data-magnetic).
 * Touch devices never mount the cursor or run the mouse handlers.
 */
import { useEffect, useRef, useState } from 'react';

const INTERACTIVE = 'a, button, input, select, textarea, label, summary, [role="button"], [data-cursor]';

export function PointerEffects() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [fine, setFine] = useState(false);

  // ripple (all devices)
  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>('.btn');
      if (!target || target.classList.contains('is-disabled')) return;
      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.4;
      const span = document.createElement('span');
      span.className = 'btn__ripple';
      span.style.width = span.style.height = `${size}px`;
      span.style.left = `${e.clientX - rect.left - size / 2}px`;
      span.style.top = `${e.clientY - rect.top - size / 2}px`;
      target.appendChild(span);
      window.setTimeout(() => span.remove(), 650);
    };
    document.addEventListener('pointerdown', onDown, { passive: true });
    return () => document.removeEventListener('pointerdown', onDown);
  }, []);

  // desktop-only effects
  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reduce) return undefined;
    setFine(true);
    document.documentElement.classList.add('has-cursor');

    let tx = -100;
    let ty = -100;
    let rx = -100;
    let ry = -100;
    let raf = 0;
    let card: HTMLElement | null = null;
    let magnet: HTMLElement | null = null;

    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const resetCard = (el: HTMLElement | null) => {
      if (!el) return;
      el.style.removeProperty('--rx');
      el.style.removeProperty('--ry');
      el.classList.remove('is-fx');
    };
    const resetMagnet = (el: HTMLElement | null) => {
      if (!el) return;
      el.style.removeProperty('--tx');
      el.style.removeProperty('--ty');
    };

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
      const target = e.target as HTMLElement | null;
      ring.current?.classList.toggle('is-hover', Boolean(target?.closest(INTERACTIVE)));

      const c = target?.closest<HTMLElement>('[data-fx]') ?? null;
      if (c !== card) {
        resetCard(card);
        card = c;
      }
      if (c) {
        const r = c.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        c.style.setProperty('--mx', `${e.clientX - r.left}px`);
        c.style.setProperty('--my', `${e.clientY - r.top}px`);
        c.classList.add('is-fx');
        if (c.hasAttribute('data-tilt')) {
          c.style.setProperty('--rx', `${((0.5 - py) * 7).toFixed(2)}deg`);
          c.style.setProperty('--ry', `${((px - 0.5) * 9).toFixed(2)}deg`);
        }
      }

      const m = target?.closest<HTMLElement>('[data-magnetic]') ?? null;
      if (m !== magnet) {
        resetMagnet(magnet);
        magnet = m;
      }
      if (m) {
        const r = m.getBoundingClientRect();
        m.style.setProperty('--tx', `${((e.clientX - (r.left + r.width / 2)) * 0.22).toFixed(1)}px`);
        m.style.setProperty('--ty', `${((e.clientY - (r.top + r.height / 2)) * 0.3).toFixed(1)}px`);
      }
    };
    const onLeaveDoc = () => {
      resetCard(card);
      resetMagnet(magnet);
      card = null;
      magnet = null;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeaveDoc);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeaveDoc);
      document.documentElement.classList.remove('has-cursor');
    };
  }, []);

  if (!fine) return null;
  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
