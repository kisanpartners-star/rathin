import type { ReactNode } from 'react';
import { siteConfig, telLink } from '../data/siteConfig';
import { Button } from './Button';
import { Reveal } from './Reveal';
import { RequestServiceButton } from './RequestServiceButton';

interface Props {
  title?: ReactNode;
  text?: string;
  serviceType?: string;
}

/** Dark call-to-action band with the blinking Request For Service button (used at the end of pages). */
export function CtaBand({
  title = (
    <>
      Ready to Upgrade Your Kitchen? <em>Talk to Rathin</em>
    </>
  ),
  text = 'Tell us what you cook and how much. We will recommend the right induction equipment, quote clearly and stand behind it with a 1 year warranty.',
  serviceType,
}: Props) {
  return (
    <section className="cta-band" aria-label="Contact Rathin">
      <div className="container cta-band__inner">
        <Reveal className="cta-band__text">
          <h2 className="cta-band__title">{title}</h2>
          <p>{text}</p>
        </Reveal>
        <Reveal kind="scale" delay={0.1} className="cta-band__actions">
          <RequestServiceButton size="lg" serviceType={serviceType} />
          <Button variant="light" size="lg" icon="phone" href={telLink}>
            {siteConfig.phoneDisplay}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
