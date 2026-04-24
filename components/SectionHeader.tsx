import React from 'react';
import styles from './SectionHeader.module.css';

type SectionHeaderProps = {
  numeral: string;
  eyebrow?: string;
  title: string | React.ReactNode;
  lede?: string | React.ReactNode;
  className?: string;
};

export default function SectionHeader({
  numeral,
  eyebrow,
  title,
  lede,
  className,
}: SectionHeaderProps) {
  return (
    <header className={`${styles.head} reveal ${className ?? ''}`}>
      <span className={styles.numeral} aria-hidden="true">
        <span className={styles.numeralGlyph}>§</span>
        <span className={styles.numeralRoman}>{numeral}</span>
      </span>
      <div className={styles.titleBlock}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className={styles.title}>{title}</h2>
        {lede && <p className={styles.lede}>{lede}</p>}
      </div>
    </header>
  );
}
