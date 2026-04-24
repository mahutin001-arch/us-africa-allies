import React from 'react';
import styles from './Pillar.module.css';

type PillarProps = {
  numeral: string;
  title: string | React.ReactNode;
  body: string | React.ReactNode;
  eyebrow?: string;
};

export default function Pillar({ numeral, title, body, eyebrow }: PillarProps) {
  return (
    <article className={`${styles.pillar} reveal`}>
      <div className={styles.numeral} aria-hidden="true">{numeral}.</div>
      <div className={styles.body}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{body}</p>
      </div>
    </article>
  );
}
