import { siteConfig, whatsappLink } from '../data/siteConfig';
import { cx } from '../utils/cx';
import { Icon, type IconKey } from './Icon';

interface Props {
  className?: string;
  size?: 'sm' | 'md';
  /** include WhatsApp (used on the contact page) */
  whatsapp?: boolean;
}

export function SocialLinks({ className, size = 'md', whatsapp = false }: Props) {
  const items: { key: IconKey; label: string; href: string }[] = [
    { key: 'facebook', label: 'Facebook', href: siteConfig.social.facebook },
    { key: 'instagram', label: 'Instagram', href: siteConfig.social.instagram },
    { key: 'linkedin', label: 'LinkedIn', href: siteConfig.social.linkedin },
    { key: 'youtube', label: 'YouTube', href: siteConfig.social.youtube },
    { key: 'x', label: 'X (Twitter)', href: siteConfig.social.x },
  ];
  if (whatsapp) items.push({ key: 'whatsapp', label: 'WhatsApp', href: whatsappLink() });

  return (
    <ul className={cx('social', `social--${size}`, className)}>
      {items
        .filter((i) => i.href)
        .map((i) => (
          <li key={i.label}>
            <a href={i.href} target="_blank" rel="noopener noreferrer" aria-label={`Rathin on ${i.label}`} className="social__link" data-tip={i.label}>
              <Icon name={i.key} />
            </a>
          </li>
        ))}
    </ul>
  );
}
