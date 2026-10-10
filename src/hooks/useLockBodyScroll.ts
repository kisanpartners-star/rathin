import { useEffect } from 'react';

let lockCount = 0;

/** Locks page scrolling while `locked` is true (used by the modal, drawer and lightbox). Supports nesting. */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return undefined;
    const body = document.body;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    if (lockCount === 0) {
      body.style.overflow = 'hidden';
      if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;
    }
    lockCount += 1;
    return () => {
      lockCount = Math.max(0, lockCount - 1);
      if (lockCount === 0) {
        body.style.overflow = '';
        body.style.paddingRight = '';
      }
    };
  }, [locked]);
}
