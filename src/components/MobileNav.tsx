/** Fixed bottom navigation for phones/tablets (hidden on desktop). Includes iOS safe-area padding (see CSS). */
import { NavLink } from 'react-router-dom';
import { bottomNavItems } from '../data/siteConfig';
import { cx } from '../utils/cx';
import { Icon } from './Icon';

export function MobileNav() {
  return (
    <nav className="bottom-nav" aria-label="Quick navigation">
      <ul className="bottom-nav__list">
        {bottomNavItems.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} end={item.to === '/'} className={({ isActive }) => cx('bottom-nav__link', isActive && 'is-active')}>
              <span className="bottom-nav__icon">
                <Icon name={item.icon} />
              </span>
              <span className="bottom-nav__label">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
