import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { lqip } from '../data/lqip';
import { cx } from '../utils/cx';

interface ImgProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
  /** above-the-fold images: load immediately */
  priority?: boolean;
  sizes?: string;
  draggable?: boolean;
}

/**
 * <img> with width/height (no layout shift), lazy loading and a soft fade-in once loaded.
 * The image stays visible if JavaScript is unavailable (the fade only applies to images still loading after hydration).
 */
export function Img({ src, alt, width, height, className, style, priority = false, sizes, draggable }: ImgProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (el && !el.complete) setPending(true);
  }, [src]);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      draggable={draggable}
      className={cx('img', pending && 'img--pending', className)}
      style={lqip[src] ? { backgroundImage: `url(${lqip[src]})`, ...style } : style}
      onLoad={() => setPending(false)}
      onError={() => setPending(false)}
    />
  );
}
