import React from 'react';
import styles from './Ledger.module.css';

type LedgerItem = {
  numeral?: string;
  name: string | React.ReactNode;
  value?: string | React.ReactNode;
  italic?: boolean;
};

type LedgerProps = {
  items: LedgerItem[];
  numbered?: boolean;
  className?: string;
};

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

export default function Ledger({ items, numbered = false, className }: LedgerProps) {
  return (
    <ul className={`${styles.ledger} ${className ?? ''}`}>
      {items.map((item, i) => (
        <li key={i} className={`${styles.row} reveal`}>
          {numbered && (
            <span className={styles.numeral} aria-hidden="true">
              {item.numeral ?? ROMAN[i] ?? i + 1}.
            </span>
          )}
          <span className={styles.name}>{item.name}</span>
          <span className={styles.leader} aria-hidden="true" />
          {item.value && (
            <span className={`${styles.value} ${item.italic ? styles.italic : ''}`}>
              {item.value}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
