/**
 * Home hero slider (edit the slides in src/data/home.ts).
 * - fills the screen with an image OR video background (object-fit: cover, no empty space)
 * - typewriter headline, staggered text, fade + zoom transitions, progress bars, arrows, swipe, pause on hover
 */
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { A11y, Autoplay, EffectFade, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { heroSlides, type HeroSlide, type TitlePart } from '../data/home';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { cx } from '../utils/cx';
import { Button } from './Button';
import { Icon } from './Icon';
import { Img } from './Img';
import { RequestServiceButton } from './RequestServiceButton';

const DELAY = 7000;

/** Types the headline character by character while the slide is active. The full text stays in the DOM for SEO. */
function TypedTitle({ parts, active, reduced }: { parts: TitlePart[]; active: boolean; reduced: boolean }) {
  const total = parts.reduce((n, p) => n + p.text.length, 0);
  const [count, setCount] = useState(typeof window === 'undefined' ? total : 0);

  useEffect(() => {
    if (reduced || !active) {
      setCount(total);
      return undefined;
    }
    setCount(0);
    let i = 0;
    const timer = window.setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= total) window.clearInterval(timer);
    }, 38);
    return () => window.clearInterval(timer);
  }, [active, total, reduced]);

  let left = count;
  const live = parts.map((p, i) => {
    const take = Math.max(0, Math.min(p.text.length, left));
    left -= take;
    return (
      <span key={i} className={p.highlight ? 'text-gradient-fire' : undefined}>
        {p.text.slice(0, take)}
      </span>
    );
  });

  return (
    <span className="typed">
      <span className="typed__full">
        {parts.map((p, i) => (
          <span key={i}>{p.text}</span>
        ))}
      </span>
      <span className="typed__live" aria-hidden="true">
        {live}
        {active && count < total ? <i className="typed__caret" /> : null}
      </span>
    </span>
  );
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } } };

function SlideView({ slide, index, active, reduced }: { slide: HeroSlide; index: number; active: boolean; reduced: boolean }) {
  const fullText = slide.title.map((p) => p.text).join('');
  const Heading = index === 0 ? 'h1' : 'h2';
  const videoRef = useRef<HTMLVideoElement>(null);

  // only the visible video plays (saves battery and bandwidth)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (active) void v.play().catch(() => undefined);
    else v.pause();
  }, [active]);

  return (
    <div className={cx('hero-slide', slide.showcase && 'hero-slide--showcase', active && 'is-active')}>
      <div className="hero-slide__media">
        {slide.type === 'video' ? (
          <video
            ref={videoRef}
            className="hero-slide__bg"
            src={slide.src}
            poster={slide.poster}
            autoPlay
            muted
            loop
            playsInline
            preload={index === 0 ? 'auto' : 'metadata'}
            aria-hidden="true"
          />
        ) : (
          <Img
            src={slide.src}
            alt={slide.showcase ? '' : slide.alt}
            width={slide.width}
            height={slide.height}
            className={cx('hero-slide__bg', slide.showcase && 'hero-slide__bg--blur')}
            priority={index === 0}
          />
        )}
        {slide.showcase && slide.type === 'image' ? (
          <div className="hero-slide__frame">
            <Img src={slide.src} alt={slide.alt} width={slide.width} height={slide.height} className="hero-slide__photo" priority={index === 0} />
          </div>
        ) : null}
      </div>
      <div className="hero-slide__overlay" aria-hidden="true" />

      <div className="container hero-slide__content">
        <motion.div variants={container} initial={false} animate={active ? 'show' : 'hidden'} className="hero-slide__inner">
          <motion.span variants={item} className="hero-slide__badge">
            <Icon name={slide.badge.icon} /> {slide.badge.text}
          </motion.span>
          <motion.div variants={item}>
            <Heading className="hero-slide__title" aria-label={fullText}>
              <TypedTitle parts={slide.title} active={active} reduced={reduced} />
            </Heading>
          </motion.div>
          <motion.p variants={item} className="hero-slide__sub">
            {slide.subtitle}
          </motion.p>
          <motion.div variants={item} className="hero-slide__buttons">
            <Button to="/products" variant="light" icon="box" size="md">
              Explore Products
            </Button>
            <RequestServiceButton size="md" />
          </motion.div>
          <motion.ul variants={item} className="hero-slide__highlights" aria-label="Key benefits">
            {slide.highlights.map((h) => (
              <li key={h.label}>
                <Icon name={h.icon} /> {h.label}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
}

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const swiper = useRef<SwiperType | null>(null);
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Rathin induction kitchen equipment highlights">
      <Swiper
        className="hero__swiper"
        modules={[Autoplay, EffectFade, Keyboard, A11y]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1100}
        rewind
        keyboard={{ enabled: true }}
        autoplay={reduced ? false : { delay: DELAY, disableOnInteraction: false, pauseOnMouseEnter: true }}
        onSwiper={(s) => {
          swiper.current = s;
        }}
        onSlideChange={(s) => setActive(s.realIndex)}
        a11y={{ slideRole: 'group' }}
      >
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <SlideView slide={slide} index={i} active={active === i} reduced={reduced} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button type="button" className="hero__arrow hero__arrow--prev" onClick={() => swiper.current?.slidePrev()} aria-label="Previous slide">
        <Icon name="chevronLeft" />
      </button>
      <button type="button" className="hero__arrow hero__arrow--next" onClick={() => swiper.current?.slideNext()} aria-label="Next slide">
        <Icon name="chevronRight" />
      </button>

      <div className="hero__progress" role="tablist" aria-label="Choose slide">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={`Slide ${i + 1}: ${s.badge.text}`}
            className={cx('hero__bar', active === i && 'is-active', i < active && 'is-done')}
            onClick={() => swiper.current?.slideTo(i)}
          >
            <span key={active === i ? `run-${active}` : 'idle'} style={{ animationDuration: `${DELAY}ms` }} />
          </button>
        ))}
      </div>
    </section>
  );
}
