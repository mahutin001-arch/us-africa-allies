import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Ledger from '@/components/Ledger';
import Pillar from '@/components/Pillar';
import Pullquote from '@/components/Pullquote';
import Ornament from '@/components/Ornament';
import StampButton from '@/components/StampButton';

export const metadata = {
  title: 'Strategic Council · U.S.–Africa Allies Foundation',
  description:
    'A permanent platform for high-level dialogue, strategic cooperation, and practical partnership between the United States, African nations, Israel, and the global African Diaspora.',
};

export default function CouncilPage() {
  return (
    <>
      {/* Title band — navy */}
      <Band ground="navy">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>The U.S.–Africa Strategic Council</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.6rem, 6vw, 5rem)', lineHeight: 1.02 }}>
            A permanent<br />platform for<br /><em style={{ color: 'var(--brand-gold)' }}>strategic cooperation.</em>
          </h1>
          <p style={{ marginTop: '1.6rem', fontStyle: 'italic', fontSize: '1.1rem', maxWidth: '44rem', marginInline: 'auto' }}>
            The Strategic Council serves as a permanent platform for high-level
            dialogue, strategic cooperation, and practical partnership between
            the United States, African nations, Israel, and the global African
            Diaspora.
          </p>
        </div>
      </Band>

      {/* §I Mandate — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="I"
          eyebrow="Mandate"
          title="A values-based platform for the long term."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p className="dropcap">
            The U.S.–Africa Strategic Council will serve as a permanent
            platform for high-level dialogue, strategic cooperation, and
            practical partnership between the United States, African nations,
            Israel, and the global African Diaspora.
          </p>
          <p>
            Its mandate encompasses four core areas of cooperation, each
            grounded in shared values and a long-term vision for mutual
            prosperity and stability: trade and investment, leadership and
            governance, security and resilience, and faith-based civic
            cooperation.
          </p>
        </div>
      </Band>

      {/* §II Core areas — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="II"
          eyebrow="Four Areas of Cooperation"
          title="Where the Council does its work."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar numeral="I"   eyebrow="Trade &amp; Investment" title="Moving capital in both directions." body="Facilitating commercial and investment partnerships between U.S. and African markets, with Israel as key strategic partner in the trilateral framework." />
          <Pillar numeral="II"  eyebrow="Leadership &amp; Governance" title="Principled public life." body="Leadership training, policy advisory, and governance exchange programs between conservative political institutions, emerging leaders, and civic bodies." />
          <Pillar numeral="III" eyebrow="Security &amp; Resilience" title="Shared security architecture." body="Cybersecurity, border management, counterterrorism, intelligence sharing, and disaster response coordination grounded in shared values." />
          <Pillar numeral="IV"  eyebrow="Civic Cooperation" title="Faith, family, and community." body="Faith-based civic engagement, diaspora mobilization, and pro-family policy advocacy reinforcing human dignity and social cohesion." />
        </div>
      </Band>

      {/* Pullquote — gold */}
      <Band ground="gold">
        <Pullquote>
          Family-centered, country-centered, God-centered — the foundation for
          lasting prosperity and security across both continents.
        </Pullquote>
      </Band>

      {/* §III Convening structure — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="III"
          eyebrow="Convening Structure"
          title="How the Council operates."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          <Ledger
            items={[
              { name: 'Annual Summit', value: 'Rotational · Washington &amp; Africa', italic: true },
              { name: 'Working Groups', value: 'Thematic · Year-round', italic: true },
              { name: 'Policy Dialogues', value: 'AUDA-NEPAD &amp; Agenda 2063', italic: true },
              { name: 'Member Composition', value: 'U.S. · Africa · Israel · Diaspora', italic: true },
              { name: 'Output', value: 'Briefs · Communiqués · Roadmaps', italic: true },
            ]}
          />
        </div>
      </Band>

      {/* §IV Founding Summit link — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="IV"
          eyebrow="Founding Summit"
          title="The Council is inaugurated at the Capitol."
          lede="The Council's permanent work begins with the Founding Summit at the United States Capitol — date to be announced."
        />
        <Ornament color="rgba(203,165,78,.8)" />
        <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
          <StampButton href="/summit" variant="filled" label="The Summit" subLabel="Date TBA →" />
          <StampButton href="/platform" variant="outline" label="The Platform" subLabel="Partnerships →" />
        </div>
      </Band>

    </>
  );
}
