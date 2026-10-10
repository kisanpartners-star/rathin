/**
 * Home page sections (after the hero). Each is a small component so you can reorder them in pages/Home.tsx.
 */
import { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { A11y, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { aboutChecklist, faqs, galleryImages, howItWorks, industries, testimonials, whyChoose } from '../../data/home';
import { featuredProducts } from '../../data/products';
import { services } from '../../data/services';
import { siteConfig } from '../../data/siteConfig';
import { cx } from '../../utils/cx';
import { Button } from '../Button';
import { Counter } from '../Counter';
import { Icon, type IconKey } from '../Icon';
import { Img } from '../Img';
import { Lightbox } from '../Lightbox';
import { ProductCard } from '../ProductCard';
import { Reveal } from '../Reveal';
import { RequestServiceButton } from '../RequestServiceButton';
import { SectionHeading } from '../SectionHeading';

/* -------------------------------------------------------------- 2. STATS STRIP */
export function StatsStrip() {
  return (
    <section className="stats" aria-label="Rathin in numbers">
      <div className="container stats__grid">
        {siteConfig.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} kind="up" className="stats__item">
            <span className="stats__icon">
              <Icon name={s.icon as IconKey} />
            </span>
            <strong className="stats__value">
              <Counter value={s.value} suffix={s.suffix} />
            </strong>
            <span className="stats__label">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ 3. ABOUT */
export function AboutSection() {
  return (
    <section className="section section--white" id="about">
      <div className="container about">
        <div className="about__collage">
          <Reveal kind="wipe" className="about__img about__img--1">
            <Img src="/assets/images/about/about-1.jpg" alt="Rathin induction tilting boiling kettle in stainless steel" width={900} height={1200} />
          </Reveal>
          <Reveal kind="wipe" delay={0.15} className="about__img about__img--2">
            <Img src="/assets/images/about/about-2.jpg" alt="Rathin floor-standing commercial induction cooktops" width={900} height={900} />
          </Reveal>
          <Reveal kind="wipe" delay={0.3} className="about__img about__img--3">
            <Img src="/assets/images/about/about-3.jpg" alt="Rathin induction griddle flat top on wheels" width={900} height={675} />
          </Reveal>
          <Reveal kind="scale" delay={0.4} className="about__badge">
            <Icon name="shield" />
            <strong>1 Year</strong>
            <span>Warranty on every new machine</span>
          </Reveal>
        </div>

        <div className="about__text">
          <SectionHeading
            align="left"
            eyebrow="About Rathin"
            title={
              <>
                Induction Kitchen Equipment, <em>Built in India</em>
              </>
            }
          />
          <Reveal>
            <p>
              Rathin is a manufacturer, seller and service provider of commercial induction kitchen equipment. From a single cooktop for a cafeteria to tilting kettles for a 2,000-meal canteen, every machine is fabricated in stainless steel and tested before it leaves our factory.
            </p>
            <p>
              We stay with you after the sale. Raise a service request and our team responds, whether the machine is a Rathin or another induction brand.
            </p>
          </Reveal>
          <ul className="checklist">
            {aboutChecklist.map((c, i) => (
              <Reveal key={c} delay={0.05 * i} className="checklist__item" kind="left">
                <Icon name="checkCircle" /> <span>{c}</span>
              </Reveal>
            ))}
          </ul>
          <Reveal className="about__actions">
            <Button to="/services" variant="primary" iconRight="arrowRight">
              Learn More
            </Button>
            <Button to="/contact" variant="outline" icon="phone">
              Talk to Us
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- 4. FEATURED PRODUCTS */
export function FeaturedProducts() {
  const list = featuredProducts().slice(0, 6);
  return (
    <section className="section section--blush">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Products"
          title={
            <>
              Induction Machines Built for <em>Heavy Daily Use</em>
            </>
          }
          subtitle="Cooktops, woks, griddles, bratt pans and boiling kettles from 3.5 kW to 15 kW, with SS 304 construction and a 1 year warranty."
        />
        <div className="grid grid--3">
          {list.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
        <Reveal className="section__more">
          <Button to="/products" variant="primary" size="lg" iconRight="arrowRight">
            View All Products
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- 5. WHY CHOOSE */
export function WhyChoose() {
  return (
    <section className="section section--white">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Rathin"
          title={
            <>
              Reliable Induction, <em>Backed by People</em>
            </>
          }
          subtitle="We are manufacturers, so the machine, the spares and the service all come from one accountable team."
        />
        <div className="grid grid--3">
          {whyChoose.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.08}>
              <div className="feature-card" data-fx="">
                <span className="feature-card__icon">
                  <Icon name={w.icon} />
                </span>
                <h3 className="feature-card__title">{w.title}</h3>
                <p>{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------- 6. SERVICES OVERVIEW */
export function ServicesOverview() {
  return (
    <section className="section section--blue">
      <div className="container">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Sales, Repair, AMC and <em>Everything After</em>
            </>
          }
          subtitle="One partner for buying, installing, servicing and customising commercial induction equipment."
        />
        <div className="grid grid--4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.07}>
              <Link to={`/services#${s.slug}`} className="service-card" data-fx="">
                <span className="service-card__icon">
                  <Icon name={s.icon} />
                </span>
                <h3 className="service-card__title">{s.title}</h3>
                <p>{s.short}</p>
                <span className="service-card__more">
                  Learn more <Icon name="arrowRight" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- 7. PARALLAX CTA */
export function ParallaxCta() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  return (
    <section ref={ref} className="parallax" aria-label="Upgrade your kitchen to induction">
      <motion.div className="parallax__bg" style={{ y, backgroundImage: 'url(/assets/images/parallax.jpg)' }} aria-hidden="true" />
      <div className="parallax__overlay" aria-hidden="true" />
      <div className="container parallax__inner">
        <Reveal>
          <span className="eyebrow eyebrow--light">Go Induction</span>
          <h2 className="parallax__title">
            Upgrade Your Kitchen to <em>Induction</em>
          </h2>
          <p>Cooler kitchens, faster cooking, lower energy bills and no open flame. Tell us your menu and we will size the right machines for you.</p>
          <div className="parallax__actions">
            <RequestServiceButton size="lg" serviceType="New Machine Enquiry" label="Get a Quote" />
            <Button to="/products" variant="light" size="lg" icon="box">
              Browse Products
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- 8. HOW IT WORKS */
export function HowItWorks() {
  return (
    <section className="section section--blush">
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title={
            <>
              From Enquiry to <em>Cooking</em> in 4 Steps
            </>
          }
        />
        <ol className="steps">
          {howItWorks.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12} className="steps__item">
              <li>
                <span className="steps__num">{i + 1}</span>
                <span className="steps__icon">
                  <Icon name={s.icon} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- 9. INDUSTRIES */
export function Industries() {
  return (
    <section className="section section--white">
      <div className="container">
        <SectionHeading
          eyebrow="Industries We Serve"
          title={
            <>
              Trusted in Kitchens of <em>Every Size</em>
            </>
          }
        />
        <ul className="tiles">
          {industries.map((ind, i) => (
            <Reveal key={ind.label} kind="scale" delay={(i % 4) * 0.06}>
              <li className="tile" data-fx="">
                <span className="tile__icon">
                  <Icon name={ind.icon} />
                </span>
                <span className="tile__label">{ind.label}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- 10. WARRANTY BANNER */
export function WarrantyBanner() {
  const points = ['Covers manufacturing defects and electronic parts', 'Phone, WhatsApp and on-site support', 'Genuine spares for the life of the machine', 'Optional AMC after the warranty year'];
  return (
    <section className="warranty" aria-label="1 year warranty and support">
      <div className="container warranty__inner">
        <Reveal kind="scale" className="warranty__shield">
          <Icon name="shield" />
          <strong>1</strong>
          <span>YEAR</span>
        </Reveal>
        <Reveal className="warranty__text">
          <h2>
            <em>1 Year Warranty</em> and Lifetime Support
          </h2>
          <ul>
            {points.map((p) => (
              <li key={p}>
                <Icon name="check" /> {p}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal kind="right" className="warranty__cta">
          <RequestServiceButton size="lg" serviceType="Warranty Claim" label="Claim Warranty Service" />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ 11. TESTIMONIALS */
export function Testimonials() {
  return (
    <section className="section section--blush">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              What Kitchens Say About <em>Rathin</em>
            </>
          }
        />
        <Swiper
          className="testimonials"
          modules={[Autoplay, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, pauseOnMouseEnter: true, disableOnInteraction: false }}
          grabCursor
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.quote} className="testimonials__slide">
              <figure className="testimonial">
                <Icon name="quote" className="testimonial__mark" />
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                  {t.placeholder ? <em className="testimonial__sample">Sample</em> : null}
                </figcaption>
                <span className="testimonial__stars" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <Icon key={n} name="star" />
                  ))}
                </span>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- 12. GALLERY */
export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="section section--white">
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              Rathin Machines in <em>Close-Up</em>
            </>
          }
          subtitle="Tap any photo to view it full screen."
        />
        <ul className="gallery">
          {galleryImages.map((img, i) => (
            <Reveal key={img.src} kind="scale" delay={(i % 4) * 0.06}>
              <li>
                <button type="button" className="gallery__item" onClick={() => setOpen(i)} aria-label={`Open image: ${img.alt}`}>
                  <Img src={img.src} alt={img.alt} width={1200} height={900} className="gallery__img" />
                  <span className="gallery__zoom">
                    <Icon name="zoom" />
                  </span>
                </button>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
      <Lightbox images={galleryImages} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </section>
  );
}

/* ------------------------------------------------------------------- 13. FAQ */
export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="section section--blue">
      <div className="container container--narrow">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions Kitchens <em>Ask Us</em>
            </>
          }
        />
        <div className="faq">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={f.q} delay={Math.min(i, 5) * 0.04}>
                <div className={cx('faq__item', isOpen && 'is-open')}>
                  <h3 className="faq__q">
                    <button type="button" aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-btn-${i}`} onClick={() => setOpenIndex(isOpen ? null : i)}>
                      <span>{f.q}</span>
                      <Icon name={isOpen ? 'minus' : 'plus'} />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="a"
                        id={`faq-${i}`}
                        role="region"
                        aria-labelledby={`faq-btn-${i}`}
                        className="faq__a"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <p>{f.a}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
