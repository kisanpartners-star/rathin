/**
 * Site-wide visual effects: preloader (spinning gear), scroll progress bar and the subtle animated
 * background (floating gears, induction ripples, drifting particles and a blueprint line that draws on scroll).
 * Everything is decorative, low-opacity and respects prefers-reduced-motion (see CSS).
 */
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { GEAR_POINTS } from './gear';

const SESSION_KEY = 'rathin-loaded';

export function Preloader() {
  // Client: show once per browser session. Server/pre-rendered HTML: never (so crawlers and no-JS users see content).
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false;
    try {
      return !sessionStorage.getItem(SESSION_KEY);
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!show) return undefined;
    const t = window.setTimeout(() => {
      setShow(false);
      try {
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        /* private mode: ignore */
      }
    }, 1100);
    return () => window.clearTimeout(t);
  }, [show]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="preloader"
          className="preloader"
          role="status"
          aria-label="Loading Rathin"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5 }}
        >
          <svg className="preloader__svg" viewBox="0 0 128 128" aria-hidden="true">
            <g className="preloader__gear">
              <polygon fill="#1E4FB8" points={GEAR_POINTS} />
            </g>
            <circle cx="64" cy="64" r="38" fill="#fff" />
            <text x="64" y="66" textAnchor="middle" dominantBaseline="central" fontFamily="Philosopher, Georgia, serif" fontWeight="700" fontSize="58" fill="#E3262E">
              R
            </text>
          </svg>
          <span className="preloader__name">RATHIN</span>
          <span className="preloader__tag">Manufacturing Innovation</span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

const particles = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  size: 4 + ((i * 3) % 6),
  delay: `${-(i * 1.7)}s`,
  duration: `${16 + ((i * 5) % 14)}s`,
}));

export function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  const draw = useTransform(scrollYProgress, [0, 1], [0.05, 1]);

  return (
    <div className="bg-art" aria-hidden="true">
      {/* blueprint line: draws as you scroll */}
      <svg className="bg-art__blueprint" viewBox="0 0 400 800" preserveAspectRatio="xMinYMid slice">
        <motion.path
          d="M20 0 V120 H120 V220 H60 V340 H180 V430 H90 V560 H220 V640 H140 V800"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength: draw }}
        />
        <circle cx="120" cy="120" r="5" fill="currentColor" />
        <circle cx="180" cy="340" r="5" fill="currentColor" />
        <circle cx="220" cy="560" r="5" fill="currentColor" />
      </svg>

      {/* floating gears */}
      <svg className="bg-art__gear bg-art__gear--1" viewBox="0 0 128 128">
        <polygon points={GEAR_POINTS} fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="64" cy="64" r="26" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg className="bg-art__gear bg-art__gear--2" viewBox="0 0 128 128">
        <polygon points={GEAR_POINTS} fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="64" cy="64" r="26" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg className="bg-art__gear bg-art__gear--3" viewBox="0 0 128 128">
        <polygon points={GEAR_POINTS} fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>

      {/* induction ripples */}
      <div className="bg-art__ripples">
        <span />
        <span />
        <span />
      </div>

      {particles.map((p, i) => (
        <i
          key={i}
          className="bg-art__dot"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size, animationDelay: p.delay, animationDuration: p.duration }}
        />
      ))}
    </div>
  );
}
