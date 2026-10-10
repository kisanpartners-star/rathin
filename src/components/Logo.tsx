import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cx } from '../utils/cx';

/** Inline SVG gear + R, used when /assets/logo.png is missing and for the footer fallback. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" role="img" aria-label="Rathin gear logo">
      <polygon
        fill="#1E4FB8"
        points="113,64 123.8,69.3 121.1,82.5 109.1,83.2 103.6,92.8 109.3,103.4 99.3,112.5 89.2,106 79.1,110.6 77.5,122.5 64,124 59.7,112.8 48.9,110.6 40.5,119.2 28.7,112.5 31.8,101 24.4,92.8 12.5,94.9 6.9,82.5 16.2,75 15,64 4.2,58.7 6.9,45.5 18.9,44.8 24.4,35.2 18.7,24.6 28.7,15.5 38.8,22 48.9,17.4 50.5,5.5 64,4 68.3,15.2 79.1,17.4 87.5,8.8 99.3,15.5 96.2,27 103.6,35.2 115.5,33.1 121.1,45.5 111.8,53"
      />
      <circle cx="64" cy="64" r="38" fill="#fff" />
      <text x="64" y="66" textAnchor="middle" dominantBaseline="central" fontFamily="Philosopher, Georgia, serif" fontWeight="700" fontSize="58" fill="#E3262E">
        R
      </text>
    </svg>
  );
}

interface LogoProps {
  className?: string;
  /** "card" puts the logo on a white pill so it stays readable on dark backgrounds */
  variant?: 'default' | 'card';
  onClick?: () => void;
}

export function Logo({ className, variant = 'default', onClick }: LogoProps) {
  const [failed, setFailed] = useState(false);
  return (
    <Link to="/" className={cx('logo', variant === 'card' && 'logo--card', className)} aria-label="Rathin - Manufacturing Innovation - Home" onClick={onClick}>
      {failed ? (
        <span className="logo__fallback">
          <LogoMark className="logo__mark" />
          <span className="logo__text">
            <span className="logo__name">RATHIN</span>
            <span className="logo__tag">Manufacturing Innovation</span>
          </span>
        </span>
      ) : (
        <img
          className="logo__img"
          src="/assets/logo.png"
          alt="Rathin - Manufacturing Innovation"
          width={465}
          height={278}
          onError={() => setFailed(true)}
        />
      )}
    </Link>
  );
}
