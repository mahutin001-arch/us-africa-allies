import React from 'react';

type OrnamentProps = {
  color?: string;
  className?: string;
};

/**
 * Centered ornamental rule: two short lines flanking a small ring with inner dot.
 * Width 120px, rendered as inline SVG.
 */
export default function Ornament({ color = 'var(--brand-gold)', className }: OrnamentProps) {
  return (
    <div className={className} style={{ display: 'flex', justifyContent: 'center', padding: '2.5em 0' }}>
      <svg
        width="120"
        height="12"
        viewBox="0 0 120 12"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <line x1="0" y1="6" x2="44" y2="6" stroke={color} strokeWidth="1" />
        <line x1="76" y1="6" x2="120" y2="6" stroke={color} strokeWidth="1" />
        <circle cx="60" cy="6" r="4.5" fill="none" stroke={color} strokeWidth="1" />
        <circle cx="60" cy="6" r="1.2" fill={color} />
      </svg>
    </div>
  );
}
