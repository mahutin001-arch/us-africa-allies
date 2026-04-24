import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Ledger from '@/components/Ledger';
import Pillar from '@/components/Pillar';
import Pullquote from '@/components/Pullquote';
import Ornament from '@/components/Ornament';
import StampButton from '@/components/StampButton';

export const metadata = {
  title: 'About · U.S.–Africa Allies Foundation',
  description:
    'A transcontinental movement dedicated to strengthening families, uplifting nations, and glorifying God through service-driven leadership.',
};

export default function AboutPage() {
  return (
    <>
      {/* Title band — navy */}
      <Band ground="navy">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>About the Foundation</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.6rem, 6vw, 5rem)', lineHeight: 1.02 }}>
            Building people<br /><em style={{ color: 'var(--brand-gold)' }}>who build nations.</em>
          </h1>
          <p style={{ marginTop: '1.6rem', fontStyle: 'italic', fontSize: '1.1rem', maxWidth: '40rem', marginInline: 'auto' }}>
            A transcontinental movement dedicated to strengthening families,
            uplifting nations, and glorifying God through service-driven
            leadership.
          </p>
        </div>
      </Band>

      {/* §I Who we are — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="I"
          eyebrow="Who We Are"
          title="A bridge between two continents."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p className="dropcap">
            The U.S.–Africa Allies Foundation is a transcontinental movement
            dedicated to strengthening families, uplifting nations, and
            glorifying God through service-driven leadership. We believe that
            when families are empowered, communities flourish — and when
            communities flourish, nations rise.
          </p>
          <p>
            Across the United States and Africa, we serve families, empower
            youth, uplift women, expand education, and support civil society
            through programs that restore dignity, expand opportunity, and
            cultivate leaders rooted in integrity and compassion.
          </p>
          <p>We are more than an organization — we are a bridge.</p>
        </div>
      </Band>

      {/* §II Vision — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="II"
          eyebrow="Our Vision"
          title={<>A world where every individual has the opportunity to learn, lead, thrive, and live with dignity.</>}
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            A future where leadership is principled and rooted in service.
            Where families are stable and flourishing. Where communities are
            resilient. Where women are fully empowered. Where youth rise with
            courage and purpose. Where nations grow stronger through shared
            values and shared responsibility.
          </p>
          <p>
            This is the future we are committed to building — one that reflects
            both human dignity and divine purpose.
          </p>
        </div>
      </Band>

      {/* Pullquote — gold */}
      <Band ground="gold">
        <Pullquote>
          In strengthening families, we uplift nations — and in serving people,
          we glorify God.
        </Pullquote>
      </Band>

      {/* §III Mission — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="III"
          eyebrow="Our Mission"
          title="Grounded in faith. Driven by service. Focused on impact."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            To develop ethical and God-fearing leaders, strengthen families,
            expand educational access, empower women, uplift vulnerable
            communities, and foster collaboration between the United States and
            Africa through programs, partnerships, and humanitarian action.
          </p>
          <p>
            Our mission is grounded in faith, driven by service, and focused on
            impact — because in strengthening families, we uplift nations, and
            in serving people, we glorify God.
          </p>
        </div>
      </Band>

      {/* §IV Core Principles — navy (pillars) */}
      <Band ground="navy">
        <SectionHeader
          numeral="IV"
          eyebrow="Core Principles"
          title="The ethical framework that guides every decision."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar numeral="I"   title="Integrity" body="We uphold the highest standard of honesty, ethics, and transparency in all we do." />
          <Pillar numeral="II"  title="Dignity" body="We honor the inherent worth of every human being without exception." />
          <Pillar numeral="III" title="Service" body="Leadership begins with serving others first — position follows purpose." />
          <Pillar numeral="IV"  title="Excellence" body="We pursue the highest level of quality in all programs and operations." />
          <Pillar numeral="V"   title="Accountability" body="We manage resources responsibly and steward donor trust with care." />
          <Pillar numeral="VI"  title="Courage" body="We confront challenges with boldness, compassion, and conviction." />
        </div>
      </Band>

      {/* §V Leadership — ivory */}
      <Band ground="ivory" id="leadership">
        <SectionHeader
          numeral="V"
          eyebrow="Leadership"
          title="A leadership team committed to transforming nations."
        />
        <div className="column-wide" style={{ marginTop: '3rem' }}>
          <Ledger
            numbered
            items={[
              { name: <strong>Daniel Edah</strong>, value: 'Founder · President', italic: true },
              { name: <strong>Akim E. Djekinnou</strong>, value: 'Treasurer', italic: true },
              { name: <strong>Mynor Armando Requeno</strong>, value: 'Secretary', italic: true },
            ]}
          />
          <div className="prose reveal" style={{ marginTop: '3rem', maxWidth: 'var(--measure)', marginInline: 'auto' }}>
            <p>
              The Board ensures that the U.S.–Africa Allies Foundation operates
              at the highest standard of governance and impact — with full
              regulatory compliance, financial accountability, and a
              mission-focused, people-centered approach in every decision.
            </p>
          </div>
        </div>
      </Band>

      {/* §VI Articles of Conviction — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="VI"
          eyebrow="Articles of Conviction"
          title="A few statements of belief."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem', fontStyle: 'italic' }}>
          <p><em>That nations rise when families are strengthened.</em></p>
          <p><em>That leadership is not a position — it is a calling.</em></p>
          <p><em>That partnership between the United States and Africa is essential for shared progress.</em></p>
          <p><em>That all true leadership must ultimately glorify God through service, integrity, and dignity.</em></p>
        </div>
        <Ornament color="rgba(203,165,78,.8)" />
        <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
          <StampButton href="/summit" variant="outline" label="The Summit" subLabel="June MMXXVI" />
          <StampButton href="/platform" variant="outline" label="The Platform" subLabel="Partnerships →" />
        </div>
      </Band>

      {/* Press correspondence */}
      <Band ground="ivory" id="press">
        <SectionHeader
          numeral="VII"
          eyebrow="Press"
          title="Editorial correspondence."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            For interviews, press statements, or media requests, correspond
            with the Foundation&rsquo;s office at{' '}
            <a href="mailto:daniel.edah@usafricaallies.org" className="pen">
              daniel.edah@usafricaallies.org
            </a>
            . We respond within five business days.
          </p>
        </div>
      </Band>
    </>
  );
}
