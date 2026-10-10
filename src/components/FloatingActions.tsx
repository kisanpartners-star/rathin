/**
 * Always-visible round action buttons.
 *  - bottom-left: Call, Email, WhatsApp (lifted above the mobile bottom nav)
 *  - bottom-right: scroll to top
 */
import { useScrolled } from '../hooks/useScrolled';
import { mailtoLink, siteConfig, telLink, whatsappLink } from '../data/siteConfig';
import { cx } from '../utils/cx';
import { Icon } from './Icon';

export function FloatingActions() {
  const showTop = useScrolled(520);

  return (
    <>
      <div className="fab-group" role="group" aria-label="Contact Rathin quickly">
        <a className="fab fab--call" href={telLink} aria-label={`Call Rathin on ${siteConfig.phoneDisplay}`} data-tip="Call us">
          <Icon name="phone" />
        </a>
        <a className="fab fab--mail" href={mailtoLink('Enquiry from website')} aria-label="Email Rathin" data-tip="Email us">
          <Icon name="mail" />
        </a>
        <a
          className="fab fab--wa"
          href={whatsappLink('Hello Rathin, I would like to know more about your induction kitchen equipment.')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Rathin on WhatsApp"
          data-tip="WhatsApp"
        >
          <Icon name="whatsapp" />
        </a>
      </div>

      <button
        type="button"
        className={cx('to-top', showTop && 'is-visible')}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        tabIndex={showTop ? 0 : -1}
      >
        <Icon name="arrowUp" />
      </button>
    </>
  );
}
