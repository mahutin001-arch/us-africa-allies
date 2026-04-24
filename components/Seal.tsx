import React from 'react';
import styles from './Seal.module.css';

type SealProps = {
  size?: number;
  color?: string;
  framed?: boolean;
  decorative?: boolean;
  ghosted?: boolean;
  className?: string;
};

export default function Seal({
  size = 64,
  color,
  framed = false,
  decorative = false,
  ghosted = false,
  className,
}: SealProps) {
  const ringStyle = color ? { borderColor: color } : undefined;
  const wrapStyle: React.CSSProperties = {
    width: size,
    height: size,
  };

  const alt = decorative ? '' : 'U.S. Africa Allies Foundation Seal';
  const imgAriaProps = decorative
    ? { 'aria-hidden': true as const }
    : { role: 'img' as const, 'aria-label': alt };

  if (framed) {
    const outer = Math.round(size * 1.38);
    const inner = Math.round(size * 1.18);
    return (
      <div
        className={`${styles.framed} ${ghosted ? styles.ghosted : ''} ${className ?? ''}`}
        style={{ width: outer, height: outer }}
        {...imgAriaProps}
      >
        <span
          className={styles.ring}
          style={{ width: outer, height: outer, ...ringStyle }}
          aria-hidden="true"
        />
        <span
          className={styles.ringInner}
          style={{ width: inner, height: inner, ...ringStyle }}
          aria-hidden="true"
        />
        <img
          src="/assets/logo1.png"
          alt={alt}
          width={size}
          height={size}
          style={wrapStyle}
          className={styles.img}
        />
      </div>
    );
  }

  return (
    <img
      src="/assets/logo1.png"
      alt={alt}
      width={size}
      height={size}
      className={`${styles.img} ${ghosted ? styles.ghosted : ''} ${className ?? ''}`}
      {...imgAriaProps}
    />
  );
}
