import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Ledger from '@/components/Ledger';
import Pillar from '@/components/Pillar';
import Pullquote from '@/components/Pullquote';
import Ornament from '@/components/Ornament';
import StampButton from '@/components/StampButton';

export const metadata = {
  title: 'Founding Summit · U.S.–Africa Allies Foundation',
  description:
    'Founding Summit of the U.S.–Africa Strategic Council, June 11–12, 2026 at the United States Capitol — bringing together leaders from the U.S., African nations, Israel, and the global African Diaspora.',
};

export default function SummitPage() {
  return (
    <>
      {/* Title band — navy */}
      <Band ground="navy">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Foundation Announcement · MMXXVI</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.4rem, 5.6vw, 4.8rem)', lineHeight: 1.02 }}>
            The Founding Summit<br />of the U.S.–Africa<br /><em style={{ color: 'var(--brand-gold)' }}>Strategic Council.</em>
          </h1>
          <p style={{ marginTop: '1.6rem', fontStyle: 'italic', fontSize: '1.1rem', maxWidth: '44rem', marginInline: 'auto' }}>
            Hosted by the U.S.–Africa Allies Foundation — bringing together
            leaders from the United States, all African nations, Israel, and
            the global African Diaspora.
          </p>
          <div style={{ marginTop: '3rem' }}>
            <Ledger
              items={[
                { name: 'Date', value: 'June 11–12, MMXXVI', italic: true },
                { name: 'Venue', value: 'United States Capitol · Washington, D.C.', italic: true },
                { name: 'Format', value: 'By invitation', italic: true },
              ]}
            />
          </div>
        </div>
      </Band>

      {/* §I The Announcement — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="I"
          eyebrow="The Announcement"
          title="A values-based platform."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p className="dropcap">
            We are pleased to announce that on June 11–12, 2026, at the United
            States Capitol in Washington, D.C., the U.S.–Africa Allies
            Foundation will host the Founding Summit of the U.S.–Africa
            Strategic Council.
          </p>
          <p>
            The Council is envisioned as a values-based platform bringing
            together leaders from the United States, all African nations,
            Israel, and the global African Diaspora to advance trade,
            investment, leadership cooperation, and long-term economic
            stability grounded in shared ethical principles.
          </p>
          <p>
            Rooted in family-centered, country-centered, and God-centered
            values, the Summit affirms the importance of strong families,
            national sovereignty, democratic governance, and strategic
            partnership as the foundation for lasting prosperity and security
            across both continents.
          </p>
        </div>
      </Band>

      {/* §II Three pillars — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="II"
          eyebrow="Three Pillars"
          title="The convictions that anchor the Council."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar numeral="I"   eyebrow="Family-Centered"  title="The foundation of every society." body="The family unit is the irreplaceable foundation of stable, prosperous societies. Every initiative flows from this conviction." />
          <Pillar numeral="II"  eyebrow="Country-Centered" title="Sovereign nations. Patriotic service." body="National sovereignty, patriotism, and democratic governance form the bedrock of sustainable partnerships between nations." />
          <Pillar numeral="III" eyebrow="God-Centered"     title="Moral accountability." body="Leadership grounded in faith, reverence for God, and moral responsibility produces justice, accountability, and lasting prosperity." />
        </div>
      </Band>

      {/* Pullquote — gold */}
      <Band ground="gold">
        <Pullquote>
          Strong families. National sovereignty. Democratic governance.
          Strategic partnership. The foundation for lasting prosperity.
        </Pullquote>
      </Band>

      {/* §III Attendees — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="III"
          eyebrow="Convening"
          title="Who will attend the Summit."
          lede="The Founding Summit gathers leaders from four constituencies. Participation is by invitation only."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar numeral="I"   title="United States" body="Members of Congress, senior government officials, business leaders, investors, civil society representatives, and faith community leaders." />
          <Pillar numeral="II"  title="All African Nations" body="Heads of state representatives, ministers, African Union delegates, business associations, and civil society leaders from across the continent." />
          <Pillar numeral="III" title="Israel" body="Israeli government officials, business leaders, and strategic partners committed to the U.S.–Africa–Israel trilateral cooperation framework." />
          <Pillar numeral="IV"  title="Global African Diaspora" body="Diaspora leaders, entrepreneurs, investors, academics, and community organizers from across Europe, North America, and beyond." />
        </div>
      </Band>

      {/* §IV Expected outcomes — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="IV"
          eyebrow="Expected Outcomes"
          title="What the Founding Summit will produce."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          <Ledger
            numbered
            items={[
              { name: 'Priority Sectors', value: 'U.S.–Africa trade expansion', italic: true },
              { name: 'Working Groups', value: 'Thematic · Commercial &amp; investment', italic: true },
              { name: 'Strategic Cooperation Roadmap', value: 'Ongoing implementation', italic: true },
              { name: 'Summary Report', value: 'Published for policymakers', italic: true },
              { name: 'Permanent Working Platform', value: 'Strengthened partnerships', italic: true },
              { name: 'Strategic Visibility', value: 'Values-based cooperation', italic: true },
            ]}
          />
        </div>
      </Band>

      {/* §V Register — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="V"
          eyebrow="Register Your Interest"
          title="Join us at the U.S. Capitol on 11–12 June MMXXVI."
          lede="Register your interest today to receive Summit updates and participation details."
        />
        <Ornament />
        <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
          <StampButton href="mailto:daniel.edah@usafricaallies.org?subject=Strategic Council Summit" variant="filled" label="Register" subLabel="Interest →" />
          <StampButton href="/council" variant="filled" label="The Council" subLabel="Ongoing work →" />
        </div>
      </Band>
    </>
  );
}
