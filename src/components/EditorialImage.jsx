import { useState } from 'react';

export default function EditorialImage({ src, alt, label, sublabel, hue = 200, objectFit = 'cover', className = '' }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    const stripe = `hsl(${hue}, 22%, 84%)`;
    const stripeAlt = `hsl(${hue}, 22%, 90%)`;
    const inkCol = `hsl(${hue}, 28%, 24%)`;
    const pid = `fb-${hue}-${(label || 'x').replace(/\s+/g, '')}`;
    return (
      <svg
        className={className}
        width="100%"
        height="100%"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        style={{ display: 'block' }}
      >
        <defs>
          <pattern id={pid} width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <rect width="18" height="18" fill={stripeAlt} />
            <rect width="9" height="18" fill={stripe} />
          </pattern>
        </defs>
        <rect width="400" height="300" fill={`url(#${pid})`} />
        <rect x="0" y="0" width="400" height="300" fill={inkCol} opacity="0.04" />
        <text x="32" y="48" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="2.4" fill={inkCol} opacity="0.7">
          {(sublabel || 'PLACEHOLDER').toUpperCase()}
        </text>
        <text x="32" y="180" fontFamily="Instrument Serif, serif" fontSize="56" fill={inkCol}>
          {label || ''}
        </text>
        <line x1="32" y1="208" x2="120" y2="208" stroke={inkCol} strokeWidth="1" opacity="0.5" />
        <text x="32" y="270" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill={inkCol} opacity="0.45">
          DROP-IN PHOTO · 4:3
        </text>
      </svg>
    );
  }

  return (
    <img
      src={src}
      alt={alt || label || ''}
      className={className}
      style={{ width: '100%', height: '100%', objectFit }}
      onError={() => setFailed(true)}
    />
  );
}
