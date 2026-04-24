import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Pillar from '@/components/Pillar';
import Ledger from '@/components/Ledger';
import Pullquote from '@/components/Pullquote';
import Ornament from '@/components/Ornament';
import StampButton from '@/components/StampButton';
import FounderPortrait from '@/components/FounderPortrait';

export const metadata = {
  title: 'Leadership Board · U.S.–Africa Allies Foundation',
  description:
    'The Board of Directors of the U.S.–Africa Allies Foundation — committed to ethical governance, strategic vision, and measurable impact.',
};

export default function LeadershipPage() {
  return (
    <>
      <Band ground="navy">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Leadership &amp; Board</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.4rem, 5.4vw, 4.6rem)', lineHeight: 1.02 }}>
            A leadership team<br />committed to<br /><em style={{ color: 'var(--brand-gold)' }}>transforming nations.</em>
          </h1>
          <p style={{ marginTop: '1.6rem', fontStyle: 'italic', fontSize: '1.08rem', maxWidth: '44rem', marginInline: 'auto' }}>
            The Foundation is guided by a leadership team committed to ethical
            governance, strategic vision, and measurable impact. Our Board
            provides oversight to ensure transparency, accountability, and
            alignment with our charitable mission.
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader
          numeral="I"
          eyebrow="Founder & President"
          title="Daniel Edah."
        />
        <div
          className="column-wide reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'center',
            marginTop: '3rem',
          }}
        >
          <FounderPortrait size={220} />
          <div className="prose" style={{ margin: 0 }}>
            <span className="eyebrow">The Founder</span>
            <h3 style={{ fontSize: '1.6rem', margin: '0.4rem 0 0.3rem' }}>Daniel Edah</h3>
            <p className="sans" style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-muted)', margin: '0 0 1rem' }}>Founder · President · Convener</p>
            <p>
              Daniel Edah provides strategic leadership and long-term vision
              for the organization, overseeing programs, partnerships, and
              external relations. His role includes guiding the
              Foundation&rsquo;s mission to strengthen leadership, civic
              engagement, and cooperation between the United States and
              Africa.
            </p>
          </div>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader
          numeral="II"
          eyebrow="Board of Directors"
          title="The standing body."
        />
        <div className="column-wide" style={{ marginTop: '3rem' }}>
          <Ledger
            numbered
            items={[
              {
                name: <strong>Daniel Edah</strong>,
                value: 'Founder · President',
                italic: true,
              },
              {
                name: <strong>Akim E. Djekinnou</strong>,
                value: 'Treasurer',
                italic: true,
              },
              {
                name: <strong>Mynor Armando Requeno</strong>,
                value: 'Secretary',
                italic: true,
              },
            ]}
          />
        </div>

        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            <strong>Akim E. Djekinnou</strong> oversees financial management,
            budgeting, reporting, and internal controls, ensuring fiscal
            responsibility and adherence to all fiduciary and regulatory
            standards.
          </p>
          <p>
            <strong>Mynor Armando Requeno</strong> is responsible for
            maintaining official records, documenting board actions, ensuring
            compliance with governance requirements, and safeguarding the
            integrity of the Foundation&rsquo;s corporate documentation.
          </p>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader
          numeral="III"
          eyebrow="Guiding Principles"
          title="The ethical framework that guides every decision."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar numeral="I"   title="Integrity" body="Truth is non-negotiable in every decision and communication." />
          <Pillar numeral="II"  title="Transparency" body="Openness builds credibility with donors, partners, and communities." />
          <Pillar numeral="III" title="Service" body="Leaders serve first — position is earned through sacrifice." />
          <Pillar numeral="IV"  title="Vision" body="Leadership must look beyond the present to shape the future." />
          <Pillar numeral="V"   title="Accountability" body="Governance protects trust and safeguards the mission." />
          <Pillar numeral="VI"  title="Courage" body="Bold decisions create generational impact and lasting change." />
        </div>
      </Band>

      <Band ground="gold">
        <Pullquote>
          Each member carries the responsibility of empowering leaders,
          strengthening communities, and shaping a future where dignity and
          opportunity are within reach for all.
        </Pullquote>
      </Band>

      <Band ground="ivory">
        <SectionHeader
          numeral="IV"
          eyebrow="The Board's Mandate"
          title="Operating at the highest standard of governance."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            The Board ensures that the U.S.–Africa Allies Foundation operates
            at the highest standard of governance and impact. Our directors
            are responsible for ensuring that the Foundation:
          </p>
        </div>
        <div className="sheet" style={{ marginTop: '2rem' }}>
          <Ledger
            items={[
              { name: 'Operates with integrity and full regulatory compliance', value: 'Standing', italic: true },
              { name: 'Maintains strong financial accountability and stewardship', value: 'Audited', italic: true },
              { name: 'Builds ethical and effective programs with measurable outcomes', value: 'Reported', italic: true },
              { name: 'Forms strategic partnerships across the United States and Africa', value: 'Active', italic: true },
              { name: 'Protects beneficiaries through safeguarding mechanisms', value: 'Mandated', italic: true },
              { name: 'Remains mission-focused and people-centered in all decisions', value: 'Always', italic: true },
            ]}
          />
        </div>

        <Ornament />

        <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
          <StampButton href="/council" variant="filled" label="The Council" subLabel="Mandate →" />
          <StampButton href="/about" variant="filled" label="About" subLabel="The Foundation →" />
        </div>
      </Band>
    </>
  );
}
