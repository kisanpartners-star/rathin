import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { CtaBand } from '../components/CtaBand';
import { WarrantyBanner } from '../components/home/HomeSections';
import { Icon } from '../components/Icon';
import { Img } from '../components/Img';
import { Lightbox } from '../components/Lightbox';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { RequestServiceButton } from '../components/RequestServiceButton';
import { SectionHeading } from '../components/SectionHeading';
import { SEO } from '../components/SEO';
import { DataTableView } from '../components/DataTableView';
import { guides, stageTable } from '../data/products';
import { amcPlans, amcRows, processSteps, services } from '../data/services';
import { cx } from '../utils/cx';
import { serviceListSchema } from '../utils/schema';

function Cell({ v }: { v: boolean | string }) {
  if (v === true) return <Icon name="checkCircle" className="amc__yes" title="Included" />;
  if (v === false) return <Icon name="minus" className="amc__no" title="Not included" />;
  return <>{v}</>;
}

const installGuides = [guides.wiring, guides.cookware, guides.levels, guides.panel, guides.glass];
const installImages = installGuides.map((g) => g.image!);

export default function Services() {
  const [light, setLight] = useState<number | null>(null);
  return (
    <>
      <SEO
        title="Induction Repair, AMC & Installation Services | Rathin"
        description="Rathin induction repair and service, AMC, spare parts, PCB and coil replacement, installation, operator training and custom manufacturing for commercial kitchens in India."
        path="/services"
        keywords={['induction repair and service', 'induction AMC', 'induction PCB repair', 'induction coil replacement', 'induction installation', 'custom kitchen equipment manufacturing']}
        jsonLd={serviceListSchema(services)}
      />
      <PageHero
        title="Sales, Service and AMC for Induction Kitchens"
        subtitle="Buy new machines, repair existing ones and keep every kitchen running with Rathin."
        image="/assets/banners/banner-services.webp"
        crumbs={[{ label: 'Services' }]}
      />

      <section className="section section--blush">
        <div className="container">
          <SectionHeading
            eyebrow="What We Do"
            title={<>Eight Services, <em>One Partner</em></>}
            subtitle="Select a service to read the details or raise a request straight away."
          />
          <div className="grid grid--4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 0.07}>
                <a href={`#${s.slug}`} className="service-card service-card--light" data-fx="">
                  <span className="service-card__icon">
                    <Icon name={s.icon} />
                  </span>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p>{s.short}</p>
                  <span className="service-card__more">
                    Read more <Icon name="arrowRight" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.slug} id={s.slug} className={cx('section service-detail', i % 2 === 0 ? 'section--white' : 'section--blue')}>
          <div className={cx('container service-detail__grid', i % 2 === 1 && 'service-detail__grid--rev')}>
            <Reveal kind={i % 2 === 0 ? 'left' : 'right'} className="service-detail__media">
              <Img src={s.image.src} alt={s.image.alt} width={s.image.width ?? 1000} height={s.image.height ?? 750} />
            </Reveal>
            <Reveal kind={i % 2 === 0 ? 'right' : 'left'} className="service-detail__text">
              <span className="service-detail__icon">
                <Icon name={s.icon} />
              </span>
              <h2 className="service-detail__title">{s.title}</h2>
              {s.details.map((d) => (
                <p key={d}>{d}</p>
              ))}
              <ul className="tick-list">
                {s.bullets.map((b) => (
                  <li key={b}>
                    <Icon name="checkCircle" /> {b}
                  </li>
                ))}
              </ul>
              <RequestServiceButton serviceType={s.formType} label={`Request ${s.title}`} />
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section section--white" id="installation-guide">
        <div className="container">
          <SectionHeading
            eyebrow="Installation Guide"
            title={<>Power, Wiring and Cookware <em>Made Simple</em></>}
            subtitle="What our technicians check on every installation, and what your kitchen should prepare before delivery."
          />
          <div className="install__grid">
            {installGuides.map((g, i) => (
              <Reveal key={g.id} delay={(i % 3) * 0.08}>
                <article className="guide">
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
                  <button type="button" className="guide__img" onClick={() => setLight(i)} aria-label={`Enlarge: ${g.title}`}>
                    <Img src={g.image!.src} alt={g.image!.alt} width={g.image!.width} height={g.image!.height} />
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="install__tip">
            <h3>Heavy-duty 380 V units</h3>
            <p>Big wok, stock pot and kettle models use eight power stages. Share the rating of your machine and we will confirm cable size, breaker and earthing before installation.</p>
            <DataTableView table={stageTable} />
          </div>
        </div>
      </section>

      <section className="section section--blush">
        <div className="container">
          <SectionHeading eyebrow="Service Process" title={<>How a Service Request <em>Works</em></>} />
          <ol className="steps">
            {processSteps.map((s, i) => (
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

      <section className="section section--white" id="amc">
        <div className="container">
          <SectionHeading
            eyebrow="Annual Maintenance Contract"
            title={<>Induction AMC Plans to <em>Fit Your Kitchen</em></>}
            subtitle="Preventive visits, priority response and discounted spares. Pricing depends on the number and type of machines - request a quote."
          />
          <div className="amc">
            {amcPlans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 0.1}>
                <article className={cx('amc__plan', plan.highlight && 'amc__plan--hl')}>
                  {plan.highlight ? <span className="amc__flag">Most Popular</span> : null}
                  <h3 className="amc__name">{plan.name}</h3>
                  <p className="amc__tag">{plan.tagline}</p>
                  <ul className="amc__rows">
                    {amcRows.map((row) => (
                      <li key={row.label}>
                        <span>{row.label}</span>
                        <strong>
                          <Cell v={row[plan.id]} />
                        </strong>
                      </li>
                    ))}
                  </ul>
                  <RequestServiceButton serviceType="Maintenance / AMC" label="Get AMC Quote" full />
                </article>
              </Reveal>
            ))}
          </div>
          <p className="note note--center">Plans are illustrative and can be customised. <Link to="/contact">Contact us</Link> to design an AMC for your kitchen.</p>
        </div>
      </section>

      <WarrantyBanner />

      <section className="section section--blush">
        <div className="container container--narrow center">
          <SectionHeading eyebrow="Need Help Now?" title={<>Raise a Service Request <em>in a Minute</em></>} subtitle="Fill the short form and our team will call you back." />
          <Reveal>
            <Button to="/request-service" variant="outline" icon="clipboard">
              Open the full request page
            </Button>
          </Reveal>
        </div>
      </section>

      <CtaBand />
      <Lightbox images={installImages} index={light} onClose={() => setLight(null)} onIndexChange={setLight} />
    </>
  );
}
