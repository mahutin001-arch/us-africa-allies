import React from 'react';
import styles from './FounderPortrait.module.css';

type FounderPortraitProps = {
  size?: number;
  className?: string;
  alt?: string;
};

/**
 * Circular framed portrait of the founder, mirroring the Seal component's
 * engraved-ring treatment. Two concentric gold hairlines outside the image,
 * rendered on either ivory or navy grounds.
 */
export default function FounderPortrait({
  size = 200,
  className,
  alt = 'Daniel Edah, Founder & President',
}: FounderPortraitProps) {
  const outer = Math.round(size * 1.14);
  const inner = Math.round(size * 1.06);
  return (
    <div className={`${styles.frame} ${className ?? ''}`} style={{ width: outer, height: outer }}>
      <span className={styles.ringOuter} style={{ width: outer, height: outer }} aria-hidden="true" />
      <span className={styles.ringInner} style={{ width: inner, height: inner }} aria-hidden="true" />
      <img
        src="/assets/founders-headshot.jpeg"
        alt={alt}
        width={size}
        height={size}
        className={styles.img}
        style={{ width: size, height: size }}
      />
    </div>
  );
}
