/**
 * Image lightbox: cross-fade between images, animated close (scale-down + fade), prev/next arrows,
 * keyboard (Esc, left/right) and swipe support on touch screens.
 */
import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import type { ImageRef } from '../data/types';
import { Icon } from './Icon';
import { Portal } from './Portal';

interface Props {
  images: ImageRef[];
  /** null = closed */
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

function Panel({ images, index, onClose, onIndexChange }: Props & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap(ref, true, onClose);
  useLockBodyScroll(true);
  const count = images.length;
  const go = (delta: number) => onIndexChange((index + delta + count) % count);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, count]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60 || info.velocity.x < -500) go(1);
    else if (info.offset.x > 60 || info.velocity.x > 500) go(-1);
  };

  const img = images[index];
  return (
    <motion.div
      ref={ref}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      tabIndex={-1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.28 }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close image viewer" data-autofocus="">
        <Icon name="close" />
      </button>
      <div className="lightbox__count" aria-live="polite">
        {index + 1} / {count}
      </div>

      {count > 1 ? (
        <>
          <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => go(-1)} aria-label="Previous image">
            <Icon name="chevronLeft" />
          </button>
          <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => go(1)} aria-label="Next image">
            <Icon name="chevronRight" />
          </button>
        </>
      ) : null}

      <div className="lightbox__stage" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={img.src}
            className="lightbox__figure"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.26, ease: 'easeOut' }}
            drag={count > 1 ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.35}
            onDragEnd={onDragEnd}
          >
            <img className="lightbox__img" src={img.src} alt={img.alt} draggable={false} />
            <figcaption className="lightbox__caption">{img.alt}</figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function Lightbox(props: Props) {
  return (
    <Portal>
      <AnimatePresence>{props.index !== null ? <Panel key="lightbox" {...props} index={props.index} /> : null}</AnimatePresence>
    </Portal>
  );
}
