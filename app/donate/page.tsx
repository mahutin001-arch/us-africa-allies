'use client';

import { useState } from 'react';
import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Pillar from '@/components/Pillar';
import Ledger from '@/components/Ledger';
import Pullquote from '@/components/Pullquote';
import Ornament from '@/components/Ornament';
import styles from './donate.module.css';

export default function DonatePage() {
  const [amount, setAmount] = useState(250);
  const [custom, setCustom] = useState('');
  const presets = [25, 50, 100, 250, 500, 1000];

  const payPalUrl = `https://www.paypal.com/donate?business=daniel.edah@usafricaallies.org&amount=${amount}&currency_code=USD&item_name=US-Africa+Allies+Foundation`;

  return (
    <>
      <Band ground="navy">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Give &middot; Investment in People &middot; Investment in Nations</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.4rem, 5.4vw, 4.8rem)', lineHeight: 1.02 }}>
            More than<br /><em style={{ color: 'var(--brand-gold)' }}>charity.</em>
          </h1>
          <p style={{ marginTop: '1.6rem', fontStyle: 'italic', fontSize: '1.08rem', maxWidth: '44rem', marginInline: 'auto' }}>
            A donation to the U.S.–Africa Allies Foundation is more than
            charity — it is an investment in God&rsquo;s work through people.
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader
          numeral="I"
          eyebrow="Lasting Impact"
          title="Every contribution creates lasting impact."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p className="dropcap">
            Your generosity fuels programs that create lasting, measurable
            impact across the United States and Africa. When you give, you
            join a faith-driven movement dedicated to human dignity,
            opportunity, and long-term transformation.
          </p>
        </div>
        <div className="sheet" style={{ marginTop: '2rem' }}>
          <Ledger
            items={[
              { name: 'Scholarships for underserved students', value: 'Education · Leadership', italic: true },
              { name: 'Leadership Development Programs', value: 'Youth · Emerging leaders', italic: true },
              { name: "Women's Empowerment & Entrepreneurship", value: 'Initiatives', italic: true },
              { name: 'Humanitarian Relief', value: 'Families in crisis', italic: true },
              { name: 'Community Development', value: 'Outreach programs', italic: true },
              { name: 'U.S.–Africa Civic, Cultural & Faith Exchange', value: 'Initiatives', italic: true },
            ]}
          />
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader
          numeral="II"
          eyebrow="Ways to Give"
          title="Four ways to support the work."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar numeral="I"   eyebrow="Option I"   title="One-Time."            body="A single contribution that immediately supports programs, outreach, and humanitarian assistance wherever it is needed most." />
          <Pillar numeral="II"  eyebrow="Option II"  title="Monthly."             body="Monthly partners sustain our long-term mission. Even modest recurring gifts create continuous impact, allowing us to expand programs with stability and confidence." />
          <Pillar numeral="III" eyebrow="Option III" title="Annual."              body="Annual donors support large-scale initiatives and provide the foundation with the strength to plan, grow, and develop new leadership and education programs." />
          <Pillar numeral="IV"  eyebrow="Option IV"  title="Corporate & Foundation." body="We welcome grants, sponsorships, CSR partnerships, and corporate philanthropic support. Organizations may sponsor programs, events, or trainings." />
        </div>
      </Band>

      <Band ground="ivory" id="give">
        <SectionHeader
          numeral="III"
          eyebrow="Make a Gift"
          title="Choose an amount."
          lede="All gifts support the Foundation's programs across the United States and Africa."
        />

        <div className={`${styles.panel} reveal`}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>One-time or recurring</h3>
          <p style={{ color: 'var(--ink-soft)', fontSize: '0.95rem', marginBottom: '1.2rem', textAlign: 'left', hyphens: 'manual' }}>
            Select an amount, or enter a custom value.
          </p>

          <div className={styles.amountRow}>
            {presets.map((v) => (
              <button
                key={v}
                type="button"
                className={`${styles.amountBtn} ${amount === v && !custom ? styles.amountActive : ''}`}
                onClick={() => {
                  setAmount(v);
                  setCustom('');
                }}
              >
                ${v.toLocaleString()}
              </button>
            ))}
            <input
              type="number"
              placeholder="Other amount"
              value={custom}
              onChange={(e) => {
                setCustom(e.target.value);
                const parsed = parseInt(e.target.value, 10);
                if (!Number.isNaN(parsed) && parsed > 0) setAmount(parsed);
              }}
              className={styles.customInput}
            />
          </div>

          <div className={styles.methods}>
            <a href={payPalUrl} target="_blank" rel="noopener" className={styles.methodBtn}>
              Give via PayPal →
            </a>
            <a href="/contact" className={`${styles.methodBtn} ${styles.methodOutline}`}>
              Bank Transfer Instructions →
            </a>
          </div>

          <p className="sans" style={{ marginTop: '1.2rem', fontSize: '0.66rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
            Funds support programs, outreach, and humanitarian work unless otherwise designated.
          </p>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader
          numeral="IV"
          eyebrow="Designated Funds"
          title="Direct your gift to a specific cause."
          lede="Donors may designate gifts to one of the Foundation's standing funds."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar numeral="I"   eyebrow="Fund I"   title="Scholarship Sponsorship."     body="Provide direct educational access by covering tuition, books, mentoring, technology, or program participation. Your sponsorship changes a life forever." />
          <Pillar numeral="II"  eyebrow="Fund II"  title="Women's Empowerment Fund."    body="Support women-owned businesses, entrepreneurship training, and micro-grant programs. Empower a woman, uplift a family, strengthen a community." />
          <Pillar numeral="III" eyebrow="Fund III" title="Leadership Academy Fund."     body="Help train the next generation of ethical, faith-driven leaders across schools, churches, civic institutions, and communities." />
          <Pillar numeral="IV"  eyebrow="Fund IV"  title="Humanitarian Relief Fund."    body="Provide direct support to families facing crisis, food insecurity, displacement, or instability. Your gift restores dignity and hope in times of need." />
          <Pillar numeral="V"   eyebrow="Fund V"   title="Community Development."       body="Support neighborhood outreach programs, civic engagement, and infrastructure that builds lasting community resilience." />
          <Pillar numeral="VI"  eyebrow="Fund VI"  title="U.S.–Africa Exchange."        body="Fund cross-continental dialogue, cultural exchange programs, and policy forums that strengthen the U.S.–Africa partnership." />
        </div>
      </Band>

      <Band ground="gold">
        <Pullquote>
          When you give, you plant seeds that outlive you.
        </Pullquote>
      </Band>

      <Band ground="ivory">
        <SectionHeader
          numeral="V"
          eyebrow="Stewardship Pledge"
          title="We steward every gift with faith and accountability."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            We pledge full financial transparency and responsible stewardship
            of every dollar entrusted to us — compliance with U.S. nonprofit
            standards, clear program reporting, annual impact reports, and
            ethical, dignified outreach in every program we run.
          </p>
        </div>
        <Ornament />
      </Band>
    </>
  );
}
