import type { ReactNode } from 'react';
import { cx } from '../utils/cx';
import { Reveal } from './Reveal';

interface Props {
  eyebrow?: string;
  /** Use <em> inside to get the gradient highlight: title={<>Why Choose <em>Rathin</em></>} */
  title: ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
  /** light text for dark backgrounds */
  light?: boolean;
  /** heading level (the page's single h1 lives in the hero / page banner, so sections use h2) */
  as?: 'h2' | 'h3';
  className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', light = false, as: Tag = 'h2', className }: Props) {
  return (
    <Reveal className={cx('section-heading', `section-heading--${align}`, light && 'section-heading--light', className)}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Tag className="section-heading__title">{title}</Tag>
      <span className="section-heading__bar" aria-hidden="true" />
      {subtitle ? <p className="section-heading__sub">{subtitle}</p> : null}
    </Reveal>
  );
}
