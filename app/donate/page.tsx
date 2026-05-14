import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Pillar from '@/components/Pillar';
import Ornament from '@/components/Ornament';
import StampButton from '@/components/StampButton';

export const metadata = {
  title: 'Invest in Impact · U.S.–Africa Allies Foundation',
  description:
    'Strategic investment in human capital and global partnership. Direct your contribution to one of six designated funds advancing U.S.–Africa cooperation.',
};

// TODO: swap to production Revere form URL before public launch
// (current URL is on merchant.reverepayments.dev — Revere sandbox).
const revereUrl = 'https://merchant.reverepayments.dev/forms/0M0hCjKf-xd-udiuJneBRuy1Jo9FSJ0r9qXqBAWTiwA=';

export default function DonatePage() {
  return (
    <>
      {/* Hero — navy */}
      <Band ground="navy">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Invest in Impact</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.4rem, 5.4vw, 4.8rem)', lineHeight: 1.02 }}>
            Invest in <em style={{ color: 'var(--brand-gold)' }}>Impact.</em>
          </h1>
          <p style={{ marginTop: '1.6rem', fontStyle: 'italic', fontSize: '1.08rem', maxWidth: '46rem', marginInline: 'auto' }}>
            Your support enables the U.S.&ndash;Africa Allies Foundation to build a future grounded in dignity, opportunity, and hope. By investing in our initiatives, you are not simply giving a gift&mdash;you are fueling the development of principled leaders and the creation of sustainable economic corridors between Africa, the United States, and Israel.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
            <StampButton href={revereUrl} variant="filled" label="Make a Secure" subLabel="Donation &rarr;" />
          </div>
          <p className="sans" style={{ marginTop: '1.2rem', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(244, 236, 214, 0.6)' }}>
            Secured by SSL &middot; Processed by Revere Payments
          </p>
        </div>
      </Band>

      {/* §I Where Your Investment Goes — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="I"
          eyebrow="Where Your Investment Goes"
          title="Strategic Investment in Human Capital and Global Partnership."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p className="dropcap">
            Every contribution is strategically allocated to our three core pillars of transformation.
          </p>
          <p>
            The U.S.&ndash;Africa Allies Foundation provides donors and partners with the opportunity to direct their contributions to specific, high-impact initiatives. Our designated funds ensure that your resources are applied directly to the pillars of development most critical to our shared mission.
          </p>
        </div>
      </Band>

      {/* §II Designated Funds — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="II"
          eyebrow="Designated Funds"
          title="Six pathways to direct your investment."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar
            numeral="I"
            title="Education &amp; Scholarship Fund: Investing in the Future of African Youth."
            body="This fund provides direct educational access by covering tuition, technology, and mentorship for high-potential students. Your support removes the financial barriers to excellence, ensuring that talent is never limited by circumstance."
          />
          <Pillar
            numeral="II"
            title="Africa Digital &amp; Cybersecurity Academy (ADCA) Fund: Building the Next Generation of Tech Leaders."
            body="Direct your support to our flagship technical residency programs. This fund finances advanced laboratory equipment, specialized cybersecurity curriculum development, and technical certifications for elite African youth."
          />
          <Pillar
            numeral="III"
            title="Women&rsquo;s Leadership &amp; Enterprise Fund: Empowering Families Through Economic Sovereignty."
            body="Focused on entrepreneurship and professional development, this fund supports women-owned businesses and leadership training. We believe that empowering a woman is the most effective way to strengthen a family and uplift an entire community."
          />
          <Pillar
            numeral="IV"
            title="Principled Leadership Academy Fund: Cultivating Character-Driven Governance."
            body="Help us train the next generation of ethical, faith-driven leaders. This fund supports our curriculum across academic, civic, and religious institutions, focusing on the character pillars essential for responsible stewardship."
          />
          <Pillar
            numeral="V"
            title="Humanitarian &amp; Community Resilience Fund: Restoring Dignity in Times of Need."
            body="This fund provides critical support to families and communities facing displacement, food insecurity, or regional instability. Your contribution goes directly to initiatives that provide immediate relief while building long-term resilience."
          />
          <Pillar
            numeral="VI"
            title="Transatlantic Dialogue &amp; Strategic Exchange Fund: Strengthening the Africa&ndash;U.S.&ndash;Israel Partnership."
            body="Support high-level policy forums, the Annual Strategic Summit, and cultural exchange programs. This fund facilitates the dialogue necessary to bridge continents and build lasting, values-based international alliances."
          />
        </div>
      </Band>

      {/* §III Philanthropic Engagement — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="III"
          eyebrow="Philanthropic Engagement"
          title="Transparency and institutional accountability."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            The U.S.&ndash;Africa Allies Foundation is a registered nonprofit organization. All contributions are utilized with the highest standards of transparency and institutional accountability.
          </p>
        </div>
        <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
          <StampButton href={revereUrl} variant="filled" label="Contribute to a" subLabel="Designated Fund &rarr;" />
          <StampButton href="mailto:info@usafricaallies.org?subject=Strategic Grant Inquiry" variant="outline" label="Discuss a" subLabel="Strategic Grant &rarr;" />
        </div>
      </Band>

      {/* §IV Ways to Give — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="IV"
          eyebrow="Ways to Give"
          title="Several pathways for individuals and institutions to partner with us."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar
            numeral="I"
            title="Direct Financial Support"
            body="Make a one-time or recurring tax-deductible contribution to sustain our ongoing operations and field projects."
          />
          <Pillar
            numeral="II"
            title="Institutional Partnerships"
            body="Corporations and foundations can sponsor specific cohorts, hubs, or summits. These partnerships offer unique opportunities for high-level engagement and brand alignment."
          />
          <Pillar
            numeral="III"
            title="Leadership &amp; Mentorship"
            body="In addition to financial resources, we value the investment of time and expertise. Share your professional experience with our emerging leaders."
          />
        </div>
        <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
          <StampButton href={revereUrl} variant="filled" label="Make a Secure" subLabel="Donation &rarr;" />
        </div>
      </Band>

      {/* §V Our Commitment to Stewardship — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="V"
          eyebrow="Our Commitment to Stewardship"
          title="Integrity is our cornerstone."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            At the U.S.&ndash;Africa Allies Foundation, integrity is our cornerstone. We ensure that every dollar is managed with transparency and directed toward initiatives that yield measurable, long-term impact for families and nations.
          </p>
          <p style={{ fontStyle: 'italic', marginTop: '2rem', textAlign: 'center' }}>
            Together, we are building a legacy of excellence.
          </p>
        </div>
        <Ornament />
      </Band>

      {/* §VI Contact the Finance & Development Office — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="VI"
          eyebrow="Contact the Finance &amp; Development Office"
          title="For major gifts, institutional grants, or wire transfers."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ textAlign: 'center', hyphens: 'manual' }}>
            Email: <a href="mailto:info@usafricaallies.org" className="pen">info@usafricaallies.org</a><br />
            Phone: <a href="tel:+12406787500" className="pen">+1 (240) 678-7500</a><br />
            Address: Washington, DC, USA
          </p>
        </div>
      </Band>
    </>
  );
}
