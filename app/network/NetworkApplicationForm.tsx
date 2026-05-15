'use client';

import { useState } from 'react';
import styles from '../get-involved/form.module.css';

const AFRICAN_COUNTRIES = [
  'Algeria',
  'Angola',
  'Benin',
  'Botswana',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cameroon',
  'Central African Republic',
  'Chad',
  'Comoros',
  "Côte d'Ivoire",
  'Democratic Republic of the Congo',
  'Djibouti',
  'Egypt',
  'Equatorial Guinea',
  'Eritrea',
  'Eswatini',
  'Ethiopia',
  'Gabon',
  'Gambia',
  'Ghana',
  'Guinea',
  'Guinea-Bissau',
  'Kenya',
  'Lesotho',
  'Liberia',
  'Libya',
  'Madagascar',
  'Malawi',
  'Mali',
  'Mauritania',
  'Mauritius',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Niger',
  'Nigeria',
  'Republic of the Congo',
  'Rwanda',
  'São Tomé and Príncipe',
  'Senegal',
  'Seychelles',
  'Sierra Leone',
  'Somalia',
  'South Africa',
  'South Sudan',
  'Sudan',
  'Tanzania',
  'Togo',
  'Tunisia',
  'Uganda',
  'Zambia',
  'Zimbabwe',
];

const US_STATES = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

const DIASPORA_TYPES = ['African Diaspora', 'US Diaspora', 'Israeli Diaspora'];

export default function NetworkApplicationForm() {
  const [region, setRegion] = useState('Africa');

  return (
    <form
      action="mailto:info@usafricaallies.org?subject=Transatlantic Business Leaders Network — Membership Application"
      method="post"
      encType="text/plain"
      className={`${styles.form} reveal`}
    >
      <label className={styles.field}>
        <span className="eyebrow">Full Name</span>
        <input type="text" name="name" required />
      </label>
      <label className={styles.field}>
        <span className="eyebrow">Company &middot; Organization</span>
        <input type="text" name="company" required />
      </label>
      <label className={styles.field}>
        <span className="eyebrow">Email</span>
        <input type="email" name="email" required />
      </label>
      <label className={styles.field}>
        <span className="eyebrow">Country &middot; Region</span>
        <select name="region" value={region} onChange={(e) => setRegion(e.target.value)}>
          <option>Africa</option>
          <option>United States</option>
          <option>Israel</option>
          <option>Diaspora &middot; Other</option>
        </select>
      </label>

      {region === 'Africa' && (
        <label className={styles.field}>
          <span className="eyebrow">Specify Country</span>
          <select name="location" defaultValue="">
            <option value="" disabled>— Select a country —</option>
            {AFRICAN_COUNTRIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
      )}

      {region === 'United States' && (
        <label className={styles.field}>
          <span className="eyebrow">Specify State</span>
          <select name="location" defaultValue="">
            <option value="" disabled>— Select a state —</option>
            {US_STATES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
      )}

      {region === 'Diaspora · Other' && (
        <label className={styles.field}>
          <span className="eyebrow">Specify Diaspora</span>
          <select name="location" defaultValue="">
            <option value="" disabled>— Select diaspora —</option>
            {DIASPORA_TYPES.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </label>
      )}

      <label className={styles.field}>
        <span className="eyebrow">Business Sector</span>
        <input
          type="text"
          name="sector"
          placeholder="e.g. Agriculture · Fintech · Manufacturing · Energy"
          required
        />
      </label>
      <label className={styles.field}>
        <span className="eyebrow">Partnership Needs</span>
        <select name="needs" defaultValue="Buyers & suppliers">
          <option>Buyers &amp; suppliers</option>
          <option>Investors &amp; capital</option>
          <option>Technology &amp; innovation partners</option>
          <option>Joint venture co-founders</option>
          <option>Distribution &amp; market entry</option>
          <option>Multiple of the above</option>
        </select>
      </label>
      <label className={styles.field}>
        <span className="eyebrow">Business Description</span>
        <textarea
          name="description"
          rows={6}
          placeholder="In one paragraph, describe your business and the partnerships you are seeking."
          required
        ></textarea>
      </label>
      <button type="submit" className={styles.submit}>
        Submit Application &rarr;
      </button>
    </form>
  );
}
