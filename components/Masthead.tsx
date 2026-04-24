'use client';

import React, { useEffect, useState } from 'react';
import Seal from './Seal';
import styles from './Masthead.module.css';

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Founder', href: '/founders-message' },
  { label: 'Programs', href: '/programs' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Plan', href: '/strategic-plan' },
  { label: 'Engage', href: '/get-involved' },
];

const DRAWER_NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: "Founder's Message", href: '/founders-message' },
  { label: 'Programs & Initiatives', href: '/programs' },
  { label: 'Strategic Plan', href: '/strategic-plan' },
  { label: 'Leadership Board', href: '/leadership' },
  { label: 'Strategic Council', href: '/council' },
  { label: 'Founding Summit', href: '/summit' },
  { label: 'Platform', href: '/platform' },
  { label: 'Resources', href: '/resources' },
  { label: 'Partner With Us', href: '/partners' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Contact', href: '/contact' },
  { label: 'Donate', href: '/donate' },
];

export default function Masthead() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`${styles.masthead} ${scrolled ? styles.solid : ''}`}>
      <div className={styles.inner}>
        <a href="/" className={styles.brand} aria-label="U.S.–Africa Allies Foundation — Home">
          <Seal size={44} decorative />
          <span className={styles.wordmark}>
            <span className={styles.wordTop}>U.S. Africa</span>
            <span className={styles.wordBottom}>Allies Foundation</span>
          </span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="/donate" className={styles.donate}>Donate</a>

        <span className={styles.volmark}>
          Vol.&nbsp;I · No.&nbsp;1 · MMXXVI
        </span>

        <button
          className={styles.burger}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`} aria-hidden={!open}>
        <div className={styles.drawerHead}>
          <img src="/assets/logo1.png" alt="" className={styles.drawerSeal} aria-hidden="true" />
          <button
            className={styles.drawerClose}
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className={styles.drawerNav} aria-label="Primary (mobile)">
          {DRAWER_NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.drawerFoot}>Vol.&nbsp;I · No.&nbsp;1 · MMXXVI</div>
      </div>
    </header>
  );
}
