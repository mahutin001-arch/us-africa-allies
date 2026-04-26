import React from 'react';
import Seal from './Seal';
import StampButton from './StampButton';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`${styles.hero} ground-navy on-navy`}>
      {/* Ghosted seal sits behind centered mobile copy; hidden on desktop. */}
      <img
        src="/assets/logo1.png"
        alt=""
        aria-hidden="true"
        className={styles.sealGhost}
      />

      <div className={styles.inner}>
        <div className={styles.copyCol}>
          <div className={`${styles.eyebrow} reveal`}>
            <span className={styles.eyeLine} aria-hidden="true" />
            <span>Established · MMXXV · Washington, D.C.</span>
          </div>

          <h1 className={`${styles.display} reveal`}>
            Building Strong <em>Families.</em><br />
            Strengthening Partnership.
          </h1>

          <p className={`${styles.lede} reveal`}>
            A values-based foundation committed to principled leadership,
            family empowerment, and transformative cooperation between the
            United States and the nations of Africa.
          </p>

          <div className={`${styles.ctaRow} reveal`}>
            <StampButton
              href="/summit"
              variant="filled"
              label="Founding Summit"
              subLabel="Date TBA"
              size={156}
            />
            <StampButton
              href="/platform"
              variant="outline"
              label="The Platform"
              subLabel="Trade · Invest"
              size={156}
            />
          </div>

          <ul className={`${styles.metaStrip} reveal`}>
            <li><span aria-hidden="true" className={styles.sect}>§</span>&nbsp;United States Capitol</li>
            <li><span aria-hidden="true" className={styles.sect}>§</span>&nbsp;Date to be announced</li>
            <li><span aria-hidden="true" className={styles.sect}>§</span>&nbsp;By Invitation</li>
          </ul>
        </div>

        {/* Framed seal · desktop-only (5-col right slot at >=960px) */}
        <div className={styles.sealCol}>
          <Seal size={360} framed decorative className={styles.sealLarge} />
        </div>
      </div>
    </section>
  );
}
