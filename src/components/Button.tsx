/**
 * One button component for the whole site.
 * variants: primary (blue gradient) | cta (red-orange gradient) | outline | ghost | dark | light | whatsapp
 * It renders a <Link> when `to` is set, an <a> when `href` is set, otherwise a <button>.
 */
import type { MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cx } from '../utils/cx';
import { Icon, type IconKey } from './Icon';

export interface ButtonProps {
  variant?: 'primary' | 'cta' | 'outline' | 'ghost' | 'dark' | 'light' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  icon?: IconKey;
  iconRight?: IconKey;
  /** blinking / pulsing glow (used on every Request For Service button) */
  blink?: boolean;
  full?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: 'button' | 'submit';
  ariaLabel?: string;
  /** marks the element the focus trap should focus first */
  autoFocus?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  blink = false,
  full = false,
  loading = false,
  disabled = false,
  className,
  children,
  to,
  href,
  target,
  rel,
  onClick,
  type = 'button',
  ariaLabel,
  autoFocus,
}: ButtonProps) {
  const classes = cx(
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    blink && 'btn--blink',
    full && 'btn--full',
    loading && 'is-loading',
    disabled && 'is-disabled',
    className,
  );

  const content = (
    <>
      <span className="btn__shine" aria-hidden="true" />
      {loading ? <Icon name="spinner" className="btn__icon btn__spin" /> : icon ? <Icon name={icon} className="btn__icon" /> : null}
      <span className="btn__label">{children}</span>
      {iconRight && !loading ? <Icon name={iconRight} className="btn__icon btn__icon--right" /> : null}
    </>
  );

  const magnetic = variant === 'cta' || variant === 'primary' ? { 'data-magnetic': '' } : {};

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} aria-label={ariaLabel} {...magnetic}>
        {content}
      </Link>
    );
  }
  if (href) {
    const external = /^https?:/i.test(href);
    return (
      <a
        href={href}
        className={classes}
        target={target ?? (external ? '_blank' : undefined)}
        rel={rel ?? (external ? 'noopener noreferrer' : undefined)}
        onClick={onClick}
        aria-label={ariaLabel}
        {...magnetic}
      >
        {content}
      </a>
    );
  }
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-busy={loading || undefined}
      data-autofocus={autoFocus ? '' : undefined}
      {...magnetic}
    >
      {content}
    </button>
  );
}
