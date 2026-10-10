import { EnquiryForm } from '../components/EnquiryForm';
import { Button } from '../components/Button';
import { Icon, type IconKey } from '../components/Icon';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { SEO } from '../components/SEO';
import { siteConfig, telLink, whatsappLink } from '../data/siteConfig';

const promises: { icon: IconKey; title: string; text: string }[] = [
  { icon: 'stopwatch', title: 'Quick response', text: 'Our service team contacts you during working hours to understand the problem.' },
  { icon: 'wrench', title: 'Rathin and other brands', text: 'We repair Rathin machines and other commercial induction equipment.' },
  { icon: 'shield', title: 'Warranty claims', text: 'Choose "Warranty Claim" and keep your invoice handy. New machines carry a 1 year warranty.' },
  { icon: 'cogs', title: 'Spares, PCB and coil', text: 'Tested replacement parts and clear estimates before any work begins.' },
];

export default function RequestService() {
  return (
    <>
      <SEO
        title="Request For Service | Induction Repair & AMC | Rathin"
        description="Raise an induction repair, maintenance, AMC, installation, spare parts or warranty claim request with Rathin. Our service team will contact you shortly."
        path="/request-service"
        keywords={['induction repair request', 'induction service request', 'induction warranty claim', 'induction spare parts']}
      />
      <PageHero title="Request For Service" subtitle="Repair, maintenance, AMC, spares, installation or a new machine enquiry." image="/assets/banners/banner-request.webp" crumbs={[{ label: 'Request For Service' }]} />

      <section className="section section--blush">
        <div className="container request">
          <Reveal kind="left" className="card-panel request__form">
            <h2 className="card-panel__title">Tell Us What You Need</h2>
            <p className="card-panel__sub">Fill in the form and our team will contact you shortly.</p>
            <EnquiryForm kind="service" />
          </Reveal>

          <Reveal kind="right" className="request__side">
            <ul className="promise-list">
              {promises.map((p) => (
                <li key={p.title} className="promise">
                  <span className="promise__icon">
                    <Icon name={p.icon} />
                  </span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="request__direct">
              <h3>Faster? Reach us directly</h3>
              <div className="request__buttons">
                <Button variant="whatsapp" icon="whatsapp" href={whatsappLink('Hello Rathin, I need help with a service request.')}>
                  WhatsApp
                </Button>
                <Button variant="primary" icon="phone" href={telLink}>
                  {siteConfig.phoneDisplay}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
