import Hero from '@/components/Hero';
import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Pillar from '@/components/Pillar';
import Pullquote from '@/components/Pullquote';
import Ledger from '@/components/Ledger';
import StampButton from '@/components/StampButton';
import Ornament from '@/components/Ornament';
import FounderPortrait from '@/components/FounderPortrait';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* §I The Foundation — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="I"
          eyebrow="The Foundation"
          title="Values before programs."
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
        <Ornament />
      </Band>

      {/* §II Three Convictions — navy, with pillars */}
      <Band ground="navy" id="pillars">
        <SectionHeader
          numeral="II"
          eyebrow="Three Convictions"
          title="Leadership. Family. Partnership."
          lede="Every initiative flows from three foundational convictions about how nations rise."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar
            numeral="I"
            eyebrow="Leadership"
            title="Values before programs."
            body="Every initiative begins with character. We train ethical leaders who transform families, communities, and nations across the U.S.–Africa corridor — from youth academies to executive forums."
          />
          <Pillar
            numeral="II"
            eyebrow="Family"
            title="Families first."
            body="The family unit is the bedrock of every strong society. We invest in families to create lasting generational change — from Washington to Accra, from Lagos to Los Angeles."
          />
          <Pillar
            numeral="III"
            eyebrow="Partnership"
            title="Partnership, not dependency."
            body="Strategic alliances built on mutual respect and shared purpose. America and Africa rise together — united by values, enterprise, and a long-term vision for human dignity."
          />
        </div>
      </Band>

      {/* §III Founder — ivory, portrait + quote */}
      <Band ground="ivory">
        <SectionHeader
          numeral="III"
          eyebrow="From the Founder"
          title="Leadership is not a position — it is a calling."
        />
        <div
          className="sheet reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'center',
            marginTop: '3rem',
          }}
        >
          <FounderPortrait size={220} />
          <div className="prose" style={{ margin: 0, maxWidth: '44rem' }}>
            <p style={{ fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--oxblood)', lineHeight: 1.4, textAlign: 'left', hyphens: 'manual' }}>
              &ldquo;The strength of a nation is built on the strength of its
              families — and the strength of its alliances.&rdquo;
            </p>
            <p>
              Daniel Edah leads the Foundation with a vision of principled
              partnership between the United States and Africa — built not on
              charity, but on collaboration, dignity, and shared purpose.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              <a href="/founders-message" className="pen">Read the full message →</a>
            </p>
          </div>
        </div>
      </Band>

      {/* §IV Pullquote — gold ground */}
      <Band ground="gold">
        <Pullquote>
          In strengthening families, we uplift nations — and in serving people,
          we glorify God.
        </Pullquote>
      </Band>

      {/* §V Summit announcement — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="V"
          eyebrow="Foundation Announcement"
          title={<>The Founding Summit<br />of the U.S.–Africa Strategic Council.</>}
          lede="Hosted by the U.S.–Africa Allies Foundation at the United States Capitol, Washington, D.C."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          <Ledger
            items={[
              { name: 'Date', value: 'June 11–12, MMXXVI', italic: true },
              { name: 'Venue', value: 'United States Capitol · Washington, D.C.', italic: true },
              { name: 'Convening', value: 'U.S. · African Nations · Israel · Diaspora', italic: true },
              { name: 'Format', value: 'By invitation', italic: true },
            ]}
          />
          <div className="column prose reveal" style={{ marginTop: '3rem' }}>
            <p>
              The Council is envisioned as a values-based platform bringing
              together leaders from the United States, all African nations,
              Israel, and the global African Diaspora to advance trade,
              investment, leadership cooperation, and long-term economic
              stability grounded in shared ethical principles.
            </p>
            <p>
              Rooted in family-centered, country-centered, and God-centered
              values, the Council affirms the importance of strong families,
              national sovereignty, democratic governance, and strategic
              partnership as the foundation for lasting prosperity and security
              across both continents.
            </p>
          </div>
          <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '4rem' }}>
            <StampButton href="/summit" variant="filled" label="Summit Details" subLabel="Read →" />
            <StampButton href="/council" variant="outline" label="The Council" subLabel="Mandate →" />
          </div>
        </div>
      </Band>

      {/* §VI Measurable Impact + Platform teaser — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="VI"
          eyebrow="Measurable Impact"
          title="Real lives. Real results."
        />
        <div className="column-wide" style={{ marginTop: '3rem' }}>
          <Ledger
            items={[
              { name: 'Leaders Trained', value: 'I,000+', italic: true },
              { name: 'Partner Organizations', value: 'XL+', italic: true },
              { name: 'Core Programs', value: 'VII', italic: true },
              { name: 'Nations Engaged', value: 'XX+', italic: true },
            ]}
          />
        </div>

        <Ornament />

        <div className="column prose reveal" style={{ marginTop: '2rem' }}>
          <p className="dropcap">
            The Foundation&rsquo;s <em>Opportunities &amp; Strategic Connections
            Platform</em> facilitates practical partnerships between individuals,
            entrepreneurs, companies, investors, and institutions across the
            United States, Africa, and Israel.
          </p>
          <p>
            The Platform exists to make those connections possible — building
            bridges for trade, investment, and strategic partnership between
            three regions with deep historical, cultural, and economic ties.
          </p>
          <p style={{ marginTop: '1.8em' }}>
            <a href="/platform" className="pen">Explore the Platform →</a>
          </p>
        </div>
      </Band>

      {/* §VII Eight Values — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="VII"
          eyebrow="Eight Values"
          title="One foundation."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          <Ledger
            numbered
            items={[
              { name: 'Faith-Centered', value: 'Grounded in moral conviction', italic: true },
              { name: 'Family First', value: 'Bedrock of strong nations', italic: true },
              { name: 'Patriotism', value: 'Service before status', italic: true },
              { name: 'Integrity', value: 'Highest ethical standards', italic: true },
              { name: 'Mutual Respect', value: 'Dignity across continents', italic: true },
              { name: 'Service', value: 'Community before self', italic: true },
              { name: 'Innovation', value: 'Enterprise and creativity', italic: true },
              { name: 'Human Dignity', value: 'The worth of every person', italic: true },
            ]}
          />
        </div>
      </Band>

      {/* §VIII CTA — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="VIII"
          eyebrow="Stand With the Alliance"
          title="Principled leaders. Prosperous nations."
          lede="Join a growing movement of families, leaders, and institutions building a stronger future on both sides of the Atlantic."
        />

        <div className="sheet reveal" style={{ marginTop: '4rem' }}>
          <div className="what-we-do">
            <article>
              <span className="eyebrow">I. Leadership</span>
              <h3>Leadership Development</h3>
              <p>Ethical training academies and youth empowerment programs across the corridor.</p>
            </article>
            <article>
              <span className="eyebrow">II. Family</span>
              <h3>Family Strengthening</h3>
              <p>Reinforcing the family unit as the bedrock of healthy societies and nations.</p>
            </article>
            <article>
              <span className="eyebrow">III. Economy</span>
              <h3>Economic Partnership</h3>
              <p>Strategic alliances between American and African enterprises with real market access.</p>
            </article>
            <article>
              <span className="eyebrow">IV. Dialogue</span>
              <h3>Policy &amp; Dialogue</h3>
              <p>High-level forums shaping the future of U.S.–Africa diplomatic and civic relations.</p>
            </article>
          </div>
        </div>

        <Ornament />

        <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
          <StampButton href="/donate" variant="filled" label="Donate" subLabel="Support →" />
          <StampButton href="/about" variant="filled" label="About" subLabel="The Foundation →" />
          <StampButton href="mailto:daniel.edah@usafricaallies.org?subject=Partnership" variant="filled" label="Partner" subLabel="Inquire →" />
        </div>
      </Band>
    </>
  );
}
