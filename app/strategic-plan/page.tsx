import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Pillar from '@/components/Pillar';
import Ledger from '@/components/Ledger';
import Pullquote from '@/components/Pullquote';
import Ornament from '@/components/Ornament';
import StampButton from '@/components/StampButton';

export const metadata = {
  title: 'Strategic Plan 2026–2031 · U.S.–Africa Allies Foundation',
  description:
    'A five-year roadmap for governance, economic growth, human dignity, and strategic cooperation between the United States and Africa.',
};

export default function StrategicPlanPage() {
  return (
    <>
      <Band ground="navy">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Strategic Plan · MMXXVI–MMXXXI</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.4rem, 5.4vw, 4.8rem)', lineHeight: 1.02 }}>
            Strengthening<br />values-based<br /><em style={{ color: 'var(--brand-gold)' }}>partnerships.</em>
          </h1>
          <p style={{ marginTop: '1.6rem', fontStyle: 'italic', fontSize: '1.08rem', maxWidth: '44rem', marginInline: 'auto' }}>
            A five-year roadmap for governance, economic growth, human dignity,
            and strategic cooperation between the United States and Africa.
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader
          numeral="I"
          eyebrow="The Plan"
          title="A values-driven institution."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p className="dropcap">
            The U.S.–Africa Allies Foundation is a values-driven institution
            dedicated to fostering sustainable partnerships between the United
            States and African nations. Its mission is to advance democratic
            governance, economic growth, human dignity, and social stability
            in Africa while strategically supporting U.S. interests in
            alignment with USAID&rsquo;s latest orientations.
          </p>
          <p>
            A signature activity is the U.S.–Africa Strategic Council, an
            annual summit convening African leaders, U.S. policymakers,
            entrepreneurs, and civil society to coordinate programs, exchange
            best practices, and set a shared agenda for development and
            partnership.
          </p>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader
          numeral="II"
          eyebrow="Vision & Mission"
          title="Where we are headed."
        />
        <div className="sheet" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
          <div className="reveal">
            <span className="eyebrow">Vision</span>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', lineHeight: 1.45, color: 'var(--ivory)', marginTop: '0.8rem', textAlign: 'left', hyphens: 'manual' }}>
              A prosperous, free, and stable Africa partnered with a globally
              engaged United States, united through shared values and
              strategic collaboration.
            </p>
          </div>
          <div className="reveal">
            <span className="eyebrow">Mission</span>
            <p style={{ fontSize: '1rem', lineHeight: 1.65, marginTop: '0.8rem', textAlign: 'left', hyphens: 'manual' }}>
              To catalyze partnerships that advance governance, economic
              prosperity, democratic freedoms, human dignity, and strategic
              cooperation between Africa and the United States, fully aligned
              with AUDA-NEPAD, Agenda 2063, and U.S. strategic interests.
            </p>
          </div>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader
          numeral="III"
          eyebrow="Strategic Objectives"
          title="Nine objectives for 2026–2031."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar numeral="I"    eyebrow="Objective I"    title="Democracy & Media Freedom" body="Support independent media and journalist networks in countries where democracy is under threat. Legal support, capacity-building, and civic education programs. Promote AUDA-NEPAD-aligned governance initiatives." />
          <Pillar numeral="II"   eyebrow="Objective II"   title="Governance & Conservative Leadership" body="Leadership training for political parties and emerging leaders. Policy advisory for governance reforms, economic policy, and family-centered legislation. Exchange programs with U.S. governance institutions." />
          <Pillar numeral="III"  eyebrow="Objective III"  title="Entrepreneurship, Technology & Diaspora Investment" body="Incubators and accelerators in agritech, fintech, renewable energy, and digital economy. Mentorship, venture capital, and U.S.–Africa market linkages. Diaspora-led investment networks aligned with AUDA-NEPAD industrialization and youth employment strategies." />
          <Pillar numeral="IV"   eyebrow="Objective IV"   title="Family, Pro-Life & Human Dignity" body="Support pro-life organizations and maternal-child health programs. Faith-based and community engagement initiatives. Policy advocacy reinforcing human dignity and social cohesion." />
          <Pillar numeral="V"    eyebrow="Objective V"    title="Trade, Industrialization & AGOA" body="Export readiness and AGOA optimization programs. Industrial zone development and SME financing. Public-private partnership facilitation and U.S. investment engagement." />
          <Pillar numeral="VI"   eyebrow="Objective VI"   title="Energy & Infrastructure" body="Renewable energy and off-grid electrification projects. Infrastructure project preparation facilities. Technical and financial support for industrial zones and energy projects." />
          <Pillar numeral="VII"  eyebrow="Objective VII"  title="Security & Resilience" body="Training in cybersecurity, border management, and counterterrorism. Intelligence sharing and civil-military coordination. Disaster response and resilience programs." />
          <Pillar numeral="VIII" eyebrow="Objective VIII" title="Diaspora Engagement" body="Diaspora investment funds targeting entrepreneurship and infrastructure. Professional exchange programs and mentorship. Policy advocacy linking diaspora expertise with African governments." />
          <Pillar numeral="IX"   eyebrow="Objective IX"   title="U.S.–Africa Strategic Council" body="Annual high-level summit in Washington, D.C., or Africa rotational venues. Policy dialogues aligned with AUDA-NEPAD and Agenda 2063 priorities. Showcase youth entrepreneurship, pro-life initiatives, governance reforms, and media freedom programs. Facilitate networking, partnerships, and investment matchmaking." />
        </div>
      </Band>

      <Band ground="gold">
        <Pullquote>
          A commitment to principled, long-term engagement — building the
          institutions, relationships, and economic foundations that will
          define the U.S.–Africa partnership for generations.
        </Pullquote>
      </Band>

      <Band ground="navy">
        <SectionHeader
          numeral="IV"
          eyebrow="Communications & Positioning"
          title="How the Foundation is positioned."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            The Foundation will be recognized as a leading institution for
            values-based U.S.–Africa cooperation. Our communications strategy
            positions the Foundation across three distinct dimensions:
          </p>
        </div>
        <div className="sheet" style={{ marginTop: '2rem' }}>
          <Ledger
            items={[
              { name: 'U.S. Audience', value: 'Values-driven institution · Democracy · Family · Enterprise', italic: true },
              { name: 'African Audience', value: 'Catalyst for economic & governance transformation', italic: true },
              { name: 'Global Audience', value: 'Organizer of the U.S.–Africa Strategic Council', italic: true },
            ]}
          />
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader
          numeral="V"
          eyebrow="Conclusion"
          title="A commitment to principled, long-term engagement."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            The U.S.–Africa Allies Foundation integrates values-based
            principles, AUDA-NEPAD frameworks, Agenda 2063 priorities, and
            U.S. strategic interests, with the U.S.–Africa Strategic Council
            as a central coordinating and visibility mechanism.
          </p>
          <p>
            Through governance, media freedom, entrepreneurship, family and
            human dignity initiatives, and strategic partnerships, the
            Foundation will contribute to a prosperous, stable, and
            self-reliant Africa, while strengthening U.S. influence and
            global leadership.
          </p>
          <p>
            This Strategic Plan represents our commitment to principled,
            long-term engagement — building the institutions, relationships,
            and economic foundations that will define the U.S.–Africa
            partnership for generations to come.
          </p>
        </div>

        <Ornament />

        <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
          <StampButton href="/council" variant="filled" label="The Council" subLabel="Mandate →" />
          <StampButton href="/partners" variant="filled" label="Partner" subLabel="With Us →" />
        </div>
      </Band>
    </>
  );
}
