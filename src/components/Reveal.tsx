/** Scroll-reveal wrapper (fade-up / slide / scale / clip-path wipe) powered by Framer Motion whileInView. */
import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Kind = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade' | 'wipe';

const variants: Record<Kind, Variants> = {
  up: { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -32 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -48 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 48 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  wipe: {
    hidden: { opacity: 0.2, clipPath: 'inset(0 100% 0 0 round 16px)', scale: 1.04 },
    show: { opacity: 1, clipPath: 'inset(0 0% 0 0 round 16px)', scale: 1 },
  },
};

interface RevealProps {
  children: ReactNode;
  kind?: Kind;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({ children, kind = 'up', delay = 0, duration = 0.7, className, once = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants[kind]}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '0px 0px -8% 0px', amount: 0.15 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
