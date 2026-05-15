import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Pillar from '@/components/Pillar';
import Pullquote from '@/components/Pullquote';
import Ornament from '@/components/Ornament';
import StampButton from '@/components/StampButton';

export default function HomePage() {
  return (
    <>
      {/* Hero — navy */}
      <Band ground="navy">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto' }}>
          <h1
            style={{
              fontFamily: 'var(--sans)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              fontSize: 'clamp(2rem, 4.6vw, 3.6rem)',
              lineHeight: 1.12,
              color: 'var(--ivory)',
              hyphens: 'manual',
              WebkitHyphens: 'manual',
              wordBreak: 'keep-all',
              overflowWrap: 'normal',
            }}
          >
            U.S.&ndash;Africa Allies Foundation
          </h1>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.4rem)',
              color: 'var(--brand-gold)',
              marginTop: '1.6rem',
              lineHeight: 1.4,
              hyphens: 'manual',
              WebkitHyphens: 'manual',
              wordBreak: 'keep-all',
              overflowWrap: 'normal',
              textAlign: 'center',
            }}
          >
            Building Leaders. Strengthening Families. Advancing Partnerships.
          </p>
          <p
            style={{
              marginTop: '2rem',
              fontStyle: 'italic',
              fontSize: '1.08rem',
              maxWidth: '46rem',
              marginInline: 'auto',
            }}
          >
            Fostering strategic, values-based cooperation between the United
            States and Africa to create a future grounded in dignity,
            opportunity, and hope.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
            <StampButton href="/partners" variant="filled" label="Partner" subLabel="With Us &rarr;" />
            <StampButton href="/about" variant="outline" label="Learn Our" subLabel="Mission &rarr;" />
          </div>
        </div>
      </Band>

      {/* Who We Are — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="I"
          eyebrow="Who We Are"
          title="A Washington, D.C.-based nonprofit organization."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p className="dropcap">
            The U.S.&ndash;Africa Allies Foundation is a Washington, D.C.-based nonprofit organization dedicated to strengthening the bond between nations through principled leadership and meaningful international collaboration. We believe that sustainable progress is built on strong families, principled leadership, investment in human capital, and mutual respect.
          </p>
        </div>
      </Band>

      {/* Our Focus Areas — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="II"
          eyebrow="Our Focus Areas"
          title="We transform vision into impact through five strategic domains."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar numeral="I"   title="Principled Leadership" body="Equipping emerging leaders with the character, vision, and skills needed to serve with integrity." />
          <Pillar numeral="II"  title="Human Capital &amp; Education" body="Expanding access to technical training, mentorship, and opportunities that empower the next generation." />
          <Pillar numeral="III" title="Strategic Partnerships" body="Connecting governments, businesses, and civil society to drive sustainable development and innovation." />
          <Pillar numeral="IV"  title="Humanitarian Resilience" body="Supporting families and vulnerable communities through initiatives that restore dignity and hope." />
          <Pillar numeral="V"   title="Transatlantic Engagement" body="Promoting stronger ties through cultural exchange, institutional collaboration, and shared initiatives." />
        </div>
      </Band>

      {/* Signature Initiatives — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="III"
          eyebrow="Signature Initiatives"
          title="Direct access to our flagship platforms for global change."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar
            numeral="I"
            title="Transatlantic Business Leaders Network (TBLN)"
            body="An economic corridor uniting Africa, the United States, and Israel."
          />
          <Pillar
            numeral="II"
            title="U.S.&ndash;Africa Strategic Council"
            body="The premier forum for high-level governance and the Annual Partnership Summit."
          />
          <Pillar
            numeral="III"
            title="Africa Digital &amp; Cybersecurity Academy (ADCA)"
            body="Training the next generation of elite technical leaders."
          />
        </div>
        <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
          <StampButton href="/network" variant="filled" label="TBLN" subLabel="Explore &rarr;" />
          <StampButton href="/council" variant="filled" label="The Council" subLabel="View &rarr;" />
          <StampButton href="/adca" variant="filled" label="ADCA" subLabel="Learn &rarr;" />
        </div>
      </Band>

      {/* Pullquote — gold */}
      <Band ground="gold">
        <Pullquote>
          At the heart of our work is the conviction that true leadership is rooted in character.
        </Pullquote>
      </Band>

      {/* A Message From our Founder — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="IV"
          eyebrow="A Message From our Founder"
          title="True leadership is rooted in character."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p style={{ fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.6 }}>
            &ldquo;At the heart of our work is the conviction that true leadership is rooted in character. It is measured not only by success, but by the willingness to serve others, uplift communities, and leave a positive legacy for future generations. We believe Africa and the United States can accomplish great things together through mutual respect, shared responsibility, and enduring partnership.&rdquo;
          </p>
          <p style={{ textAlign: 'right', marginTop: '1.5rem' }}>
            &mdash; Daniel Edah
          </p>
        </div>
      </Band>

      {/* Join the Mission — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="V"
          eyebrow="Join the Mission"
          title="We invite leaders from business, academia, and public service to join us in building a future of shared prosperity."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar numeral="I"   title="Partner" body="Align your organization with our strategic goals." />
          <Pillar numeral="II"  title="Mentor" body="Shape the trajectory of emerging African leaders." />
          <Pillar numeral="III" title="Invest" body="Support initiatives that create measurable, long-term impact." />
        </div>
        <Ornament />
        <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
          <StampButton href="/get-involved" variant="filled" label="Get Involved" subLabel="Today &rarr;" />
        </div>
      </Band>
    </>
  );
}
