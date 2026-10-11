import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '../components/Button';
import { DataTableView } from '../components/DataTableView';
import { CtaBand } from '../components/CtaBand';
import { EnquiryForm } from '../components/EnquiryForm';
import { Icon } from '../components/Icon';
import { Img } from '../components/Img';
import { Lightbox } from '../components/Lightbox';
import { PageHero } from '../components/PageHero';
import { ProductCard } from '../components/ProductCard';
import { RequestServiceButton } from '../components/RequestServiceButton';
import { SectionHeading } from '../components/SectionHeading';
import { SEO } from '../components/SEO';
import { categoryLabel, getProduct, guides, relatedProducts } from '../data/products';
import { siteConfig, whatsappLink } from '../data/siteConfig';
import { cx } from '../utils/cx';
import { productSchema } from '../utils/schema';
import { clipTitle, fitDescription } from '../utils/seoText';
import NotFound from './NotFound';

const tabs = [
  { id: 'description', label: 'Overview' },
  { id: 'specs', label: 'Models and Specs' },
  { id: 'features', label: 'Features' },
  { id: 'applications', label: 'Applications' },
  { id: 'warranty', label: 'Warranty' },
] as const;
type TabId = (typeof tabs)[number]['id'];

export default function ProductDetail() {
  const { slug = '' } = useParams();
  const product = getProduct(slug);
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [guideLight, setGuideLight] = useState<number | null>(null);
  const [tab, setTab] = useState<TabId>('description');
  const [zoom, setZoom] = useState<{ x: number; y: number } | null>(null);

  if (!product) return <NotFound />;
  const related = relatedProducts(product, 6);
  const main = product.gallery[active] ?? product.image;
  const guideList = product.guides.map((g) => guides[g]);
  const guideImages = guideList.filter((g) => g.image).map((g) => g.image!);
  const waMsg = `Hello Rathin, I am interested in the ${product.name} (${product.model}). Please share details and a quote.`;

  return (
    <>
      <SEO
        title={clipTitle(product.name)}
        description={fitDescription(`${product.name} (${product.model}) by Rathin. ${product.shortDescription}`)}
        path={`/products/${product.slug}`}
        type="product"
        image={product.image.src}
        imageAlt={product.image.alt}
        keywords={[product.name, product.model, categoryLabel(product.category), ...product.keywords]}
        jsonLd={productSchema(product)}
      />
      <PageHero
        title={product.name}
        subtitle={product.tagline}
        image="/assets/banners/banner-products.webp"
        crumbs={[{ label: 'Products', to: '/products' }, { label: product.name }]}
      />

      <section className="section section--white pd">
        <div className="container pd__grid">
          {/* ------------------------------- gallery */}
          <div className="pd-gallery">
            <div
              className={cx('pd-gallery__main', zoom && 'is-zoom')}
              onMouseMove={(e) => {
                if (!window.matchMedia('(hover: hover)').matches) return;
                const r = e.currentTarget.getBoundingClientRect();
                setZoom({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
              }}
              onMouseLeave={() => setZoom(null)}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.button
                  key={main.src}
                  type="button"
                  className="pd-gallery__btn"
                  onClick={() => setLightbox(active)}
                  aria-label="Open image full screen"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Img
                    src={main.src}
                    alt={main.alt}
                    width={1200}
                    height={900}
                    priority
                    className="pd-gallery__img"
                    style={zoom ? { transformOrigin: `${zoom.x}% ${zoom.y}%`, transform: 'scale(1.9)' } : undefined}
                  />
                </motion.button>
              </AnimatePresence>
              <span className="pd-gallery__hint">
                <Icon name="zoom" /> Click to enlarge
              </span>
            </div>
            <ul className="pd-gallery__thumbs">
              {product.gallery.map((g, i) => (
                <li key={g.src}>
                  <button type="button" className={cx('pd-thumb', i === active && 'is-active')} onClick={() => setActive(i)} aria-label={`Show image ${i + 1}`} aria-current={i === active}>
                    <Img src={g.src} alt="" width={1200} height={900} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ------------------------------- info */}
          <div className="pd-info">
            <span className="pd-info__cat">
              <Icon name="tag" /> {categoryLabel(product.category)} &middot; {product.model}
            </span>
            <h2 className="pd-info__title">{product.name}</h2>
            <p className="pd-info__short">{product.shortDescription}</p>

            <ul className="pd-highlights">
              {product.highlights.map((h) => (
                <li key={h.label}>
                  <Icon name={h.icon} /> {h.label}
                </li>
              ))}
            </ul>

            <p className="pd-price">
              <Icon name="rupee" /> <span><strong>Price on request.</strong> Share your requirement and we will send a clear quote.</span>
            </p>

            <div className="pd-actions">
              <Button href="#enquiry" variant="primary" icon="send">
                Enquire Now
              </Button>
              <RequestServiceButton productName={product.name} serviceType="New Machine Enquiry" label="Request For Service" />
              <Button variant="whatsapp" icon="whatsapp" href={whatsappLink(waMsg)}>
                WhatsApp
              </Button>
              <Button variant="outline" icon="download" href="/assets/brochures/rathin-brochure.pdf" target="_blank">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>

        {/* ------------------------------- tabs */}
        <div className="container pd-tabs">
          <div className="tabs" role="tablist" aria-label="Product information">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={tab === t.id}
                aria-controls={`panel-${t.id}`}
                tabIndex={tab === t.id ? 0 : -1}
                className={cx('tabs__tab', tab === t.id && 'is-active')}
                onClick={() => setTab(t.id)}
                onKeyDown={(e) => {
                  const i = tabs.findIndex((x) => x.id === tab);
                  if (e.key === 'ArrowRight') setTab(tabs[(i + 1) % tabs.length].id);
                  if (e.key === 'ArrowLeft') setTab(tabs[(i - 1 + tabs.length) % tabs.length].id);
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="tabs__panel" role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`}>
            {tab === 'description' ? (
              <div className="prose">
                {product.description.map((d) => (
                  <p key={d}>{d}</p>
                ))}
              </div>
            ) : null}
            {tab === 'specs' ? (
              <>
                <h3 className="pd-subhead">Key specifications</h3>
                <div className="spec-table-wrap">
                  <table className="spec-table">
                    <caption className="sr-only">Key specifications of {product.name}</caption>
                    <tbody>
                      {product.specs.map((s) => (
                        <tr key={s.label}>
                          <th scope="row">{s.label}</th>
                          <td>{s.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <h3 className="pd-subhead">Available models</h3>
                {product.tables.map((t) => (
                  <DataTableView key={t.title} table={t} />
                ))}
                <p className="note">Specifications follow the manufacturer catalogue and may be customised. Custom sizes and power ratings are available on request.</p>
              </>
            ) : null}
            {tab === 'features' ? (
              <ul className="tick-list">
                {product.features.map((f) => (
                  <li key={f}>
                    <Icon name="checkCircle" /> {f}
                  </li>
                ))}
              </ul>
            ) : null}
            {tab === 'applications' ? (
              <ul className="tick-list">
                {product.applications.map((f) => (
                  <li key={f}>
                    <Icon name="utensils" /> {f}
                  </li>
                ))}
              </ul>
            ) : null}
            {tab === 'warranty' ? (
              <ul className="tick-list">
                {product.warranty.map((f) => (
                  <li key={f}>
                    <Icon name="shield" /> {f}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </section>

      {/* ------------------------------- guides */}
      {guideList.length ? (
        <section className="section section--blush" aria-labelledby="guides-title">
          <div className="container">
            <SectionHeading eyebrow="Know Before You Buy" title={<>Cookware, Power and <em>Connection Guide</em></>} subtitle="Everything your kitchen team needs to choose vessels, wire the machine and use every power level." />
            <div className="guides">
              {guideList.map((g) => {
                const li = g.image ? guideImages.findIndex((x) => x.src === g.image!.src) : -1;
                return (
                  <article key={g.id} className={cx('guide', g.table && 'guide--table')}>
                    <div className="guide__text">
                      <h3>{g.title}</h3>
                      <p>{g.text}</p>
                      {g.bullets ? (
                        <ul className="tick-list">
                          {g.bullets.map((b) => (
                            <li key={b}>
                              <Icon name="checkCircle" /> {b}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                    {g.image ? (
                      <button type="button" className="guide__img" onClick={() => setGuideLight(li)} aria-label={`Enlarge: ${g.title}`}>
                        <Img src={g.image.src} alt={g.image.alt} width={g.image.width} height={g.image.height} />
                      </button>
                    ) : null}
                    {g.table ? <DataTableView table={g.table} /> : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {/* ------------------------------- related */}
      <section className="section section--white">
        <div className="container">
          <SectionHeading eyebrow="You May Also Like" title={<>Related <em>Induction Products</em></>} />
          <Swiper
            className="related"
            modules={[Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            pagination={{ clickable: true }}
            grabCursor
          >
            {related.map((p, i) => (
              <SwiperSlide key={p.slug} className="related__slide">
                <ProductCard product={p} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ------------------------------- enquiry */}
      <section className="section section--white" id="enquiry">
        <div className="container enquiry">
          <div className="enquiry__text">
            <SectionHeading
              align="left"
              eyebrow="Enquire Now"
              title={<>Get a Quote for the <em>{product.model}</em></>}
              subtitle={`Tell us your kitchen requirement and power supply. Our team will reply during working hours (${siteConfig.hours.display}).`}
            />
            <ul className="tick-list">
              <li><Icon name="shield" /> 1 year warranty on every new machine</li>
              <li><Icon name="truck" /> Pan-India delivery, installation and training</li>
              <li><Icon name="ruler" /> Custom size and power on request</li>
            </ul>
            <p>
              Prefer to talk? <Link to="/contact">Contact our team</Link> or message us on WhatsApp.
            </p>
          </div>
          <div className="card-panel">
            <EnquiryForm kind="product" productName={product.name} submitLabel="Send Enquiry" />
          </div>
        </div>
      </section>

      <CtaBand serviceType="New Machine Enquiry" />
      <Lightbox images={guideImages} index={guideLight} onClose={() => setGuideLight(null)} onIndexChange={setGuideLight} />
      <Lightbox images={product.gallery} index={lightbox} onClose={() => setLightbox(null)} onIndexChange={setLightbox} />
    </>
  );
}
