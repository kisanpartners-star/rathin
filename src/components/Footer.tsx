import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import { fullAddress, mailtoLink, navItems, siteConfig, telLink } from '../data/siteConfig';
import { Icon } from './Icon';
import { Logo } from './Logo';
import { RequestServiceButton } from './RequestServiceButton';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo variant="card" />
          <p className="footer__about">
            {siteConfig.brandName} manufactures commercial induction kitchen equipment in stainless steel and services induction machines across India, with a 1 year warranty on every new machine.
          </p>
          <SocialLinks />
        </div>

        <nav aria-label="Footer quick links">
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__list">
            {navItems.map((n) => (
              <li key={n.to}>
                <Link to={n.to}>
                  <Icon name="angleRight" /> {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer products">
          <h3 className="footer__title">Our Products</h3>
          <ul className="footer__list">
            {categories.map((c) => (
              <li key={c.id}>
                <Link to={`/products?category=${c.id}`}>
                  <Icon name="angleRight" /> {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="footer__title">Contact</h3>
          <ul className="footer__contact">
            <li>
              <Icon name="map" /> <span>{fullAddress()}</span>
            </li>
            <li>
              <Icon name="phone" /> <a href={telLink}>{siteConfig.phoneDisplay}</a>
            </li>
            <li>
              <Icon name="mail" /> <a href={mailtoLink()}>{siteConfig.email}</a>
            </li>
            <li>
              <Icon name="clock" /> <span>{siteConfig.hours.display}</span>
            </li>
          </ul>
          <RequestServiceButton size="md" />
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            &copy; {year} {siteConfig.brandName} - {siteConfig.tagline}. All rights reserved.
          </p>
          <p className="footer__made">
            <Icon name="industry" /> Proudly made in India
          </p>
        </div>
      </div>
    </footer>
  );
}
