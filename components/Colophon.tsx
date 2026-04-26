import React from 'react';
import Seal from './Seal';
import styles from './Colophon.module.css';

export default function Colophon() {
  return (
    <footer className={styles.colophon}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <Seal size={64} decorative />
          <div className={styles.wordmark}>
            <span className={styles.wordTop}>U.S. Africa</span>
            <span className={styles.wordBottom}>Allies Foundation</span>
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colHead}>The Work</h4>
          <a href="/platform" className="pen">Platform</a>
          <a href="/summit" className="pen">Founding Summit</a>
          <a href="/council" className="pen">Strategic Council</a>
          <a href="/programs" className="pen">Programs</a>
          <a href="/strategic-plan" className="pen">Strategic Plan</a>
          <a href="/resources" className="pen">Resources</a>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colHead}>Institution</h4>
          <a href="/about" className="pen">About</a>
          <a href="/founders-message" className="pen">Founder's Message</a>
          <a href="/leadership" className="pen">Leadership Board</a>
          <a href="/partners" className="pen">Partner With Us</a>
          <a href="/get-involved" className="pen">Get Involved</a>
          <a href="/contact" className="pen">Contact</a>
          <a href="/donate" className="pen">Donate</a>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colHead}>Registry</h4>
          <address className={styles.address}>
            300&nbsp;Independence&nbsp;Ave&nbsp;SE<br />
            Washington,&nbsp;D.C.&nbsp;20003<br />
            United&nbsp;States&nbsp;of&nbsp;America
          </address>
          <a href="mailto:info@usafricaallies.org" className={`${styles.registryLink} pen`}>
            info@usafricaallies.org
          </a>
          <a href="tel:+12406787500" className={`${styles.registryLink} pen`}>
            +1 (240) 678-7500
          </a>
          <span className={styles.muted}>501(c)(3) Public Charity</span>
        </div>
      </div>

      <hr className={styles.hair} />

      <div className={styles.meta}>
        <span>Vol.&nbsp;I · No.&nbsp;1 · MMXXVI</span>
        <span>Founded MMXXV</span>
        <span>usafricaallies.org</span>
      </div>

      <div className={styles.socials} aria-label="Social channels">
        <a
          href="https://www.linkedin.com/company/us-africa-allies-foundation"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8h4.5v14H.24V8zm7.5 0h4.32v1.92h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V22h-4.5v-6.24c0-1.49-.03-3.4-2.07-3.4-2.07 0-2.4 1.62-2.4 3.3V22H7.74V8z" />
          </svg>
        </a>
        <a
          href="#"
          className={styles.socialLink}
          aria-label="X (Twitter)"
          title="X"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a
          href="#"
          className={styles.socialLink}
          aria-label="Instagram"
          title="Instagram"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
          </svg>
        </a>
      </div>

      <div className={styles.legal}>
        <span>© MMXXVI · U.S.–Africa Allies Foundation</span>
        <span className={styles.legalLinks}>
          <a href="/privacy-policy" className="pen">Privacy Policy</a>
          <span className={styles.dot} aria-hidden="true">·</span>
          <a href="/terms" className="pen">Terms of Use</a>
          <span className={styles.dot} aria-hidden="true">·</span>
          <a href="/refund-policy" className="pen">Refund Policy</a>
        </span>
      </div>
    </footer>
  );
}
