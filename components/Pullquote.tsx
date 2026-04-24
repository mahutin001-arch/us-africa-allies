import React from 'react';
import styles from './Pullquote.module.css';

type PullquoteProps = {
  children: React.ReactNode;
  attribution?: string;
};

export default function Pullquote({ children, attribution }: PullquoteProps) {
  return (
    <blockquote className={`${styles.pq} reveal`}>
      <span className={styles.openmark} aria-hidden="true">"</span>
      <p className={styles.text}>{children}</p>
      {attribution && <footer className={styles.attr}>— {attribution}</footer>}
    </blockquote>
  );
}
