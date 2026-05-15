import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Pillar from '@/components/Pillar';
import Ledger from '@/components/Ledger';
import Pullquote from '@/components/Pullquote';
import Ornament from '@/components/Ornament';
import StampButton from '@/components/StampButton';
import NetworkApplicationForm from './NetworkApplicationForm';

export const metadata = {
  title: 'Transatlantic Business Leaders Network · U.S.–Africa Allies Foundation',
  description:
    'A curated international business network connecting African, American, and Israeli entrepreneurs, executives, and investors. Initiated by the U.S.–Africa Allies Foundation.',
};

export default function NetworkPage() {
  return (
    <>
      {/* Hero — navy */}
      <Band ground="navy">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Transatlantic Business Leaders Network</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.4rem, 5.4vw, 4.8rem)', lineHeight: 1.02 }}>
            African, American &amp; Israeli<br />Business Leaders building<br /><em style={{ color: 'var(--brand-gold)' }}>global partnerships.</em>
          </h1>
          <p style={{ marginTop: '1.6rem', fontStyle: 'italic', fontSize: '1.08rem', maxWidth: '46rem', marginInline: 'auto' }}>
            A curated business network initiated by the U.S.–Africa Allies
            Foundation, connecting entrepreneurs, executives, and investors
            across Africa and the United States, and including strategic
            participation from Israeli business leaders and innovators.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
            <StampButton href="#apply" variant="filled" label="Apply for" subLabel="Membership →" />
            <StampButton href="#about" variant="outline" label="Explore the" subLabel="Network →" />
          </div>
        </div>
      </Band>

      {/* §I About the Network — ivory */}
      <Band ground="ivory" id="about">
        <SectionHeader
          numeral="I"
          eyebrow="About the Network"
          title="Beyond networking — into execution."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p className="dropcap">
            The Transatlantic Business Leaders Network is a structured platform
            designed to connect serious business actors across Africa and the
            United States, while opening participation to Israeli entrepreneurs,
            innovators, and investors.
          </p>
          <p>
            The Network is initiated and coordinated by the U.S.–Africa Allies
            Foundation, which provides governance, strategic oversight, and
            institutional continuity. While the Foundation remains focused on
            strengthening U.S.–Africa relations, the Network expands the
            operational ecosystem to include Israel — particularly in areas of
            innovation, technology, investment, and enterprise development.
          </p>
          <p>
            The goal is to move beyond networking into real business execution,
            joint ventures, and scalable cross-border partnerships.
          </p>
        </div>
      </Band>

      {/* §II What We Do — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="II"
          eyebrow="What We Do"
          title="Four areas of focus."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar numeral="I"   eyebrow="Connectivity"        title="Transatlantic and Israel business connectivity." body="We connect verified entrepreneurs, executives, and investors across Africa, the United States, and Israel — building a single international ecosystem from three regions." />
          <Pillar numeral="II"  eyebrow="Marketplace"         title="An active opportunity marketplace." body="Members showcase and access buyers and suppliers, investors and funding partners, technology providers, and strategic business collaborators." />
          <Pillar numeral="III" eyebrow="Joint Ventures"      title="Innovation and joint venture development." body="Cross-border teams form to develop real business projects combining African market potential, U.S. capital and scale, and Israeli innovation and technology." />
          <Pillar numeral="IV"  eyebrow="Forums"              title="Business and investment forums." body="High-level forums and roundtables focused on investment matchmaking, trade expansion, technology transfer, and strategic partnerships." />
        </div>
      </Band>

      {/* §III Who Can Join — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="III"
          eyebrow="Membership Audience"
          title="Open to active business leaders."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          <Ledger
            items={[
              { name: 'Entrepreneurs &amp; business owners', value: 'Founders · Operators', italic: true },
              { name: 'Corporate executives', value: 'Leadership · Strategy', italic: true },
              { name: 'Investors &amp; venture capital groups', value: 'Capital · Funds', italic: true },
              { name: 'Technology innovators &amp; startups', value: 'Africa · U.S. · Israel', italic: true },
              { name: 'Import / export operators', value: 'Trade · Distribution', italic: true },
              { name: 'Industry professionals with active business activity', value: 'Verified', italic: true },
            ]}
          />
        </div>
        <p className="sans" style={{ textAlign: 'center', marginTop: '2.4rem', fontSize: '0.66rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
          Membership is based on business activity and seriousness of engagement.
        </p>
      </Band>

      {/* §IV Member Value — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="IV"
          eyebrow="Member Value"
          title="What you gain."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          <Ledger
            numbered
            items={[
              { name: 'A high-level international business ecosystem', value: 'Africa · U.S. · Israel', italic: true },
              { name: 'Visibility across three regions', value: 'Direct exposure', italic: true },
              { name: 'Direct access to buyers, suppliers, and investors', value: 'Verified members', italic: true },
              { name: 'Structured matchmaking and partnership facilitation', value: 'Coordinated', italic: true },
              { name: 'Joint venture development opportunities', value: 'Cross-border', italic: true },
              { name: 'Exclusive business and investment forums', value: 'Members only', italic: true },
            ]}
          />
        </div>
      </Band>

      {/* Pullquote — gold */}
      <Band ground="gold">
        <Pullquote>
          Beyond networking — into real business execution, joint ventures, and
          scalable cross-border partnerships.
        </Pullquote>
      </Band>

      {/* §V How It Works — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="V"
          eyebrow="Membership Pathway"
          title="Six steps from application to active partnership."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar numeral="I"   eyebrow="Step One"   title="Apply online." body="Submit your business profile and partnership objectives through the application form below." />
          <Pillar numeral="II"  eyebrow="Step Two"   title="Verification." body="The Foundation team reviews and validates your business activity. Proof of existing operations is required." />
          <Pillar numeral="III" eyebrow="Step Three" title="Membership activation." body="On approval, complete annual membership payment and receive onboarding materials. A member profile is created and activated." />
          <Pillar numeral="IV"  eyebrow="Step Four"  title="Network access." body="Join virtual networking sessions, thematic groups, and the opportunity marketplace. Begin posting and discovering opportunities." />
          <Pillar numeral="V"   eyebrow="Step Five"  title="Business collaboration." body="Form cross-regional teams across Africa, the United States, and Israel to develop joint ventures and live business projects." />
          <Pillar numeral="VI"  eyebrow="Step Six"   title="Physical convenings." body="Participate in business forums, investment meetings, and strategic summits across the participating regions." />
        </div>
      </Band>

      {/* §VI Eligibility & Fees — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="VI"
          eyebrow="Eligibility &amp; Fees"
          title="What is required to join."
          lede="Membership is reserved for individuals and institutions with active business or investment activity and a credible commitment to cross-border collaboration."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          <Ledger
            items={[
              { name: 'Existing business or investment activity', value: 'Africa · U.S. · Israel', italic: true },
              { name: 'Active partnership, market, supplier, or capital sought', value: 'Required', italic: true },
              { name: 'Commitment to cross-border business collaboration', value: 'Required', italic: true },
              { name: 'Annual Membership Fee', value: 'Supports platform &amp; programming', italic: true },
            ]}
          />
        </div>
      </Band>

      {/* §VII Vision — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="VII"
          eyebrow="Vision"
          title="A global ecosystem for shared prosperity."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            We are building a global business ecosystem anchored in
            U.S.–Africa cooperation and extended to Israel&rsquo;s innovation
            and technology strengths — creating scalable partnerships,
            investment flows, and shared prosperity across three regions.
          </p>
        </div>
        <Ornament />
      </Band>

      {/* §VIII Apply — navy */}
      <Band ground="navy" id="apply">
        <SectionHeader
          numeral="VIII"
          eyebrow="Apply for Membership"
          title="Join. Build across borders. Scale globally."
          lede="Submit your application below. The Secretariat will review and respond within five business days."
        />
        <NetworkApplicationForm />

        <Ornament color="rgba(203,165,78,.8)" />

        <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
          <StampButton href="mailto:info@usafricaallies.org?subject=Transatlantic Business Leaders Network — Inquiry" variant="filled" label="Contact" subLabel="Secretariat →" />
        </div>
      </Band>
    </>
  );
}
