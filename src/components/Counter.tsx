import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

interface Props {
  value: number;
  suffix?: string;
  duration?: number;
}

/** Counts up from 0 when scrolled into view. Pre-rendered HTML contains the final number (good for SEO / no-JS). */
export function Counter({ value, suffix = '', duration = 1.8 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const [n, setN] = useState(typeof window === 'undefined' ? value : 0);

  useEffect(() => {
    if (!inView) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(value);
      return undefined;
    }
    const controls = animate(0, value, { duration, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
