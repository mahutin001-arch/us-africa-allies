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
          <h4 className={styles.colHead}>Signature Initiatives</h4>
          <a href="/network" className="pen">Transatlantic Business Leaders Network (TBLN)</a>
          <a href="/council" className="pen">U.S.&ndash;Africa Strategic Council</a>
          <a href="/adca" className="pen">Africa Digital &amp; Cybersecurity Academy (ADCA)</a>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colHead}>Institution</h4>
          <a href="/about" className="pen">About</a>
          <a href="/founders-message" className="pen">Founder&rsquo;s Message</a>
          <a href="/leadership" className="pen">Leadership &amp; Board</a>
          <a href="/partners" className="pen">Partner With Us</a>
          <a href="/get-involved" className="pen">Get Involved</a>
          <a href="/contact" className="pen">Contact</a>
          <a href="/donate" className="pen">Donate</a>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colHead}>Headquarters</h4>
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
          <span className={styles.muted}>501(C)(3) Public Charity</span>
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
          href="https://www.facebook.com/share/1iv8qXb5Ep/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label="Facebook"
          title="Facebook"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
          </svg>
        </a>
        <a
          href="https://x.com/USAfricaAllies"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label="X (Twitter)"
          title="X"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
