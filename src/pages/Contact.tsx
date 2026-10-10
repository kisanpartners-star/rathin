import { CtaBand } from '../components/CtaBand';
import { EnquiryForm } from '../components/EnquiryForm';
import { Icon, type IconKey } from '../components/Icon';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { SEO } from '../components/SEO';
import { SocialLinks } from '../components/SocialLinks';
import { fullAddress, mailtoLink, siteConfig, telLink, whatsappLink } from '../data/siteConfig';
import { localBusinessSchema } from '../utils/schema';

export default function Contact() {
  const cards: { icon: IconKey; title: string; body: string; href?: string }[] = [
    { icon: 'map', title: 'Visit Us', body: fullAddress() },
    { icon: 'phone', title: 'Call Us', body: siteConfig.phoneDisplay, href: telLink },
    { icon: 'mail', title: 'Email Us', body: siteConfig.email, href: mailtoLink('Enquiry from website') },
    { icon: 'whatsapp', title: 'WhatsApp', body: 'Chat with our team', href: whatsappLink() },
    { icon: 'clock', title: 'Working Hours', body: `${siteConfig.hours.display}. ${siteConfig.hours.note}` },
  ];

  return (
    <>
      <SEO
        title="Contact Rathin | Induction Equipment Manufacturer"
        description="Contact Rathin for commercial induction cooktops, woks, griddles, tilting bratt pans, boiling kettles, repair and AMC. Call, WhatsApp, email or visit us in Bengaluru."
        path="/contact"
        keywords={['contact induction manufacturer', 'induction cooktop supplier Bengaluru', 'induction repair near me']}
        jsonLd={localBusinessSchema()}
      />
      <PageHero title="Contact Rathin" subtitle="Tell us about your kitchen. We reply quickly with advice and a clear quote." image="/assets/banners/banner-contact.webp" crumbs={[{ label: 'Contact Us' }]} />

      <section className="section section--blush">
        <div className="container contact">
          <Reveal kind="left" className="contact__form">
            <div className="card-panel">
              <h2 className="card-panel__title">Send Us a Message</h2>
              <p className="card-panel__sub">All fields marked * are required. Your details are emailed straight to our team.</p>
              <EnquiryForm kind="contact" />
            </div>
          </Reveal>

          <Reveal kind="right" className="contact__side">
            <div className="map">
              <iframe
                title="Rathin location on Google Maps"
                src={siteConfig.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <ul className="info-cards">
              {cards.map((c) => (
                <li key={c.title} className="info-card">
                  <span className="info-card__icon">
                    <Icon name={c.icon} />
                  </span>
                  <div>
                    <h3>{c.title}</h3>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {c.body}
                      </a>
                    ) : (
                      <p>{c.body}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="contact__social">
              <h3>Follow Rathin</h3>
              <SocialLinks whatsapp />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--white">
        <div className="container container--narrow center">
          <SectionHeading eyebrow="Existing Customer?" title={<>Need Service or a <em>Spare Part</em>?</>} subtitle="Use the Request For Service form so your request reaches the service team directly." />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
