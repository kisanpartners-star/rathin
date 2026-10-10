/**
 * Slim top bar + sticky header (shrinks on scroll) + animated mobile drawer.
 * Desktop: logo left, nav in one row, blinking Request For Service button at the far right.
 */
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import { useScrolled } from '../hooks/useScrolled';
import { fullAddress, mailtoLink, navItems, siteConfig, telLink } from '../data/siteConfig';
import { cx } from '../utils/cx';
import { Icon } from './Icon';
import { Logo } from './Logo';
import { Portal } from './Portal';
import { RequestServiceButton } from './RequestServiceButton';
import { SocialLinks } from './SocialLinks';

/** Slim bar above the header: phone, email, hours, social icons. Hidden on small screens. */
export function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <ul className="topbar__list">
          <li>
            <a href={telLink}>
              <Icon name="phone" /> {siteConfig.phoneDisplay}
            </a>
          </li>
          <li>
            <a href={mailtoLink()}>
              <Icon name="mail" /> {siteConfig.email}
            </a>
          </li>
          <li className="topbar__hours">
            <Icon name="clock" /> {siteConfig.hours.display}
          </li>
        </ul>
        <SocialLinks className="topbar__social" size="sm" />
      </div>
    </div>
  );
}

function Drawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Portal>
      <AnimatePresence>{open ? <DrawerPanel key="drawer" onClose={onClose} /> : null}</AnimatePresence>
    </Portal>
  );
}

function DrawerPanel({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLElement>(null);
  useFocusTrap(ref, true, onClose);
  useLockBodyScroll(true);

  return (
    <motion.div
      className="drawer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.aside
        ref={ref}
        className="drawer__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.38 }}
      >
        <div className="drawer__top">
          <Logo onClick={onClose} />
          <button type="button" className="drawer__close" onClick={onClose} aria-label="Close menu" data-autofocus="">
            <Icon name="close" />
          </button>
        </div>

        <nav aria-label="Mobile menu" className="drawer__nav">
          <ul>
            {navItems.map((item, i) => (
              <motion.li
                key={item.to}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + i * 0.05, duration: 0.3 }}
              >
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => cx('drawer__link', isActive && 'is-active')}
                  onClick={onClose}
                >
                  <span className="drawer__link-icon">
                    <Icon name={item.icon} />
                  </span>
                  <span>{item.label}</span>
                  <Icon name="chevronRight" className="drawer__link-arrow" />
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="drawer__cta">
          <RequestServiceButton full size="lg" onBeforeOpen={onClose} />
        </div>

        <div className="drawer__bottom">
          <ul className="drawer__contact">
            <li>
              <a href={telLink}>
                <Icon name="phone" /> {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={mailtoLink()}>
                <Icon name="mail" /> {siteConfig.email}
              </a>
            </li>
            <li>
              <Icon name="map" /> <span>{fullAddress()}</span>
            </li>
          </ul>
          <SocialLinks />
        </div>
      </motion.aside>
    </motion.div>
  );
}

export function Header() {
  const scrolled = useScrolled(24);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // close the drawer whenever the route changes
  useEffect(() => setMenuOpen(false), [pathname]);

  // the 5 page links; the 6th nav item (Request For Service) is the blinking button at the far right
  const links = navItems.filter((n) => n.to !== '/request-service');

  return (
    <>
      <header className={cx('header', scrolled && 'header--scrolled')}>
        <div className="container header__inner">
          <Logo className="header__logo" />

          <nav className="header__nav" aria-label="Primary">
            <ul className="header__list">
              {links.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === '/'} className={({ isActive }) => cx('nav-link', isActive && 'is-active')}>
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <RequestServiceButton size="sm" className="header__cta" />
            <button
              type="button"
              className="header__burger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-haspopup="dialog"
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
        <Link to="/request-service" className="sr-only">
          Request For Service page
        </Link>
      </header>
      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
