import React from 'react';
import styles from './StampButton.module.css';

type StampButtonProps = {
  href?: string;
  onClick?: () => void;
  label: string;
  subLabel?: string;
  variant?: 'filled' | 'outline';
  size?: number;
  className?: string;
};

/**
 * Circular seal-stamp CTA.
 * Two variants: filled gold with navy text; ivory outlined for darker sections.
 * Hover: fills with brand gold, rotates -2deg, label inverts to navy.
 */
export default function StampButton({
  href,
  onClick,
  label,
  subLabel,
  variant = 'filled',
  size = 144,
  className,
}: StampButtonProps) {
  const cls = `${styles.stamp} ${styles[variant]} ${className ?? ''}`;
  const style: React.CSSProperties = { width: size, height: size };
  const content = (
    <>
      <span className={styles.outerRing} aria-hidden="true" />
      <span className={styles.innerRing} aria-hidden="true" />
      <span className={styles.labels}>
        <span className={styles.label}>{label}</span>
        {subLabel && <span className={styles.sub}>{subLabel}</span>}
      </span>
    </>
  );

  if (href) {
    return (
      <a className={cls} style={style} href={href}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={cls} style={style} onClick={onClick}>
      {content}
    </button>
  );
}
