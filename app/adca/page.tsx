import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Ornament from '@/components/Ornament';
import StampButton from '@/components/StampButton';

export const metadata = {
  title: 'Africa Digital & Cybersecurity Academy (ADCA) · U.S.–Africa Allies Foundation',
  description:
    'A premier technical training initiative designed to equip African youth with elite skills in cybersecurity and digital economy management.',
};

export default function AdcaPage() {
  return (
    <>
      {/* Hero — navy */}
      <Band ground="navy">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Signature Initiative</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.2rem, 5vw, 4.4rem)', lineHeight: 1.06 }}>
            Africa Digital &amp; <em style={{ color: 'var(--brand-gold)' }}>Cybersecurity Academy.</em>
          </h1>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              fontSize: '0.78rem',
              color: 'var(--brand-gold)',
              marginTop: '1.2rem',
            }}
          >
            (ADCA)
          </p>
          <p style={{ marginTop: '1.8rem', fontStyle: 'italic', fontSize: '1.08rem', maxWidth: '46rem', marginInline: 'auto' }}>
            Building Vetted Human Capital for the Digital Age.
          </p>
        </div>
      </Band>

      {/* §I Overview — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="I"
          eyebrow="The Academy"
          title="Equipping African youth with elite digital skills."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p className="dropcap">
            The ADCA is a premier technical training initiative designed to equip African youth with elite skills in cybersecurity and digital economy management. Through our intensive residency programs, we develop the principled tech leaders of tomorrow.
          </p>
        </div>
        <Ornament />
        <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
          <StampButton
            href="mailto:info@usafricaallies.org?subject=Africa Digital %26 Cybersecurity Academy (ADCA) — Inquiry"
            variant="filled"
            label="Learn About"
            subLabel="the Academy &rarr;"
          />
        </div>
      </Band>
    </>
  );
}
