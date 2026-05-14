import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Pillar from '@/components/Pillar';
import Ledger from '@/components/Ledger';
import Ornament from '@/components/Ornament';
import StampButton from '@/components/StampButton';
import Pullquote from '@/components/Pullquote';
import FounderPortrait from '@/components/FounderPortrait';

export const metadata = {
  title: 'About · U.S.–Africa Allies Foundation',
  description:
    'A Washington, D.C.-based nonprofit organization dedicated to strengthening the bond between nations through principled leadership and meaningful international collaboration.',
};

export default function AboutPage() {
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
            <StampButton href="#mission" variant="outline" label="Learn Our" subLabel="Mission &rarr;" />
          </div>
        </div>
      </Band>

      {/* §I Who We Are — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="I"
          eyebrow="Who We Are"
          title="A Washington, D.C.-based nonprofit organization."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p className="dropcap">
            The U.S.&ndash;Africa Allies Foundation is a Washington, D.C.-based nonprofit organization dedicated to strengthening the bond between nations through principled leadership and meaningful international collaboration. We believe that sustainable progress is built on four pillars: strong families, ethical leadership, investment in human capital, and mutual respect.
          </p>
        </div>
      </Band>

      {/* §II Our Mission & Vision — navy */}
      <Band ground="navy" id="mission">
        <SectionHeader
          numeral="II"
          eyebrow="Our Mission &amp; Vision"
          title="Pathways for shared prosperity."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <h3 style={{ color: 'var(--ivory)', marginBottom: '1rem' }}>Our Mission</h3>
          <p>
            To advance collaboration between Africa and the United States by fostering engagement across public institutions, private enterprise, academia, and civil society. Through dialogue, human capital development, and principled leadership initiatives, we create pathways for shared prosperity.
          </p>
          <h3 style={{ color: 'var(--ivory)', marginTop: '2.4rem', marginBottom: '1rem' }}>Our Vision</h3>
          <p>
            A future where Africa and the United States work together through trusted partnerships and empowered leadership to create lasting opportunities for future generations.
          </p>
        </div>
      </Band>

      {/* §III Core Pillars — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="III"
          eyebrow="Core Pillars"
          title="Focus areas."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar numeral="I"   title="Principled Leadership" body="Equipping emerging leaders with the character, vision, and skills needed to serve with integrity." />
          <Pillar numeral="II"  title="Human Capital &amp; Education" body="Expanding access to technical training, mentorship, and opportunities that empower the next generation." />
          <Pillar numeral="III" title="Strategic Partnerships" body="Connecting governments, businesses, and civil society to drive sustainable development and innovation." />
          <Pillar numeral="IV"  title="Humanitarian Resilience" body="Supporting families and vulnerable communities through initiatives that restore dignity and hope." />
          <Pillar numeral="V"   title="Transatlantic Engagement" body="Promoting stronger ties through cultural exchange, institutional collaboration, and shared initiatives." />
        </div>
      </Band>

      {/* §IV Signature Initiatives — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="IV"
          eyebrow="Our Signature Initiatives"
          title="From digital transformation to high-level diplomacy."
          lede="These projects represent our commitment to measurable impact across the African continent and the United States."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar
            numeral="I"
            eyebrow="Africa &ndash; United States &ndash; Israel"
            title="Transatlantic Business Leaders Network (TBLN)"
            body="Driving Shared Prosperity Through Principled Enterprise. The TBLN is a flagship initiative of the U.S.–Africa Allies Foundation designed to build a values-based economic corridor between Africa, the United States, and Israel. By integrating Israeli innovation and technology with American enterprise and African potential, we foster sustainable trade, local manufacturing, and the responsible transformation of raw materials. We believe that robust, high-trust partnerships are the backbone of economic sovereignty and long-term stability across these three regions."
          />
          <Pillar
            numeral="II"
            title="U.S.&ndash;Africa Strategic Council"
            body="Elevating Dialogue and Principled Governance. The U.S.–Africa Strategic Council is a high-level forum that brings together policymakers, diplomats, and civil society leaders to ensure that strategic alliances are built on mutual respect and long-term stability. As a core initiative of the Foundation, the Council serves as the formal convening body for the Annual Transatlantic Leadership & Partnership Summit. By bridging the gap between the TBLN and public institutions, the Council creates a unique platform where economic leadership and public governance meet to advance shared prosperity."
          />
          <Pillar
            numeral="III"
            title="Africa Digital &amp; Cybersecurity Academy (ADCA)"
            body="Building Vetted Human Capital for the Digital Age. The ADCA is a premier technical training initiative designed to equip African youth with elite skills in cybersecurity and digital economy management. Through our intensive residency programs, we develop the principled tech leaders of tomorrow."
          />
        </div>
        <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
          <StampButton href="/network" variant="filled" label="Explore" subLabel="Network &rarr;" />
          <StampButton href="/council" variant="filled" label="The Council" subLabel="View &rarr;" />
          <StampButton href="/adca" variant="filled" label="The Academy" subLabel="Learn &rarr;" />
        </div>
      </Band>

      {/* §V Leadership & Board — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="V"
          eyebrow="Leadership &amp; Board"
          title="Character, service, and sustainable partnerships."
          lede="At the U.S.–Africa Allies Foundation, leadership is defined by a commitment to character, service, and the development of sustainable partnerships. Our work is guided by experienced professionals and global citizens dedicated to fostering transformative cooperation between nations."
        />

        {/* Daniel Edah bio */}
        <div
          className="sheet reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'start',
            marginTop: '3rem',
          }}
        >
          <FounderPortrait size={220} />
          <div className="prose" style={{ margin: 0, maxWidth: '44rem' }}>
            <h3 style={{ marginBottom: '0.3rem', textAlign: 'left' }}>Daniel Edah</h3>
            <p className="sans" style={{ fontSize: '0.66rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--brand-gold)', marginBottom: '1.5rem', textAlign: 'left', hyphens: 'manual' }}>
              Founder &amp; President
            </p>
            <p>
              Daniel Edah is a Strategic Partnership Consultant, Political Leader, and a recognized voice for African sovereignty and principled leadership. With a career spanning international civil service and high-level diplomacy, he founded the U.S.–Africa Allies Foundation to serve as a catalyst for values-based collaboration between the United States, Africa, and strategic global partners.
            </p>
            <p>
              A former presidential candidate in Benin and an alumnus of the U.S. State Department&rsquo;s International Visitor Leadership Program (IVLP), Mr. Edah has spent over a decade advocating for economic independence through human capital development and the local transformation of resources. His vision for a &ldquo;vetted&rdquo; generation of African leaders is the driving force behind the Foundation&rsquo;s most ambitious initiatives.
            </p>
          </div>
        </div>

        {/* Key Accolades & Credentials */}
        <div className="column-wide reveal" style={{ marginTop: '4rem' }}>
          <span className="eyebrow">Key Accolades &amp; Credentials</span>
          <div style={{ marginTop: '1.2rem' }}>
            <Ledger
              items={[
                { name: <strong>Academic Foundations</strong>, value: 'Degrees in Sociology, Anthropology, and Project Management; specialized certification in Economic, Social, and Cultural Rights.', italic: true },
                { name: <strong>Honors</strong>, value: 'Awarded a Doctorate Honoris Causa in International Relations and Diplomacy (2023) and the Distinguished African Inspirational Leadership Award.', italic: true },
                { name: <strong>Published Author</strong>, value: <span>Author of several works on leadership and change, including <em>Il fera beau</em> and <em>We Will Do It</em>.</span>, italic: true },
                { name: <strong>Global Engagement</strong>, value: 'Regularly featured on international platforms such as BBC News Afrique and VOA Afrique, discussing strategic development and governance.', italic: true },
              ]}
            />
          </div>
        </div>

        {/* Governance & Advisory */}
        <div className="column prose reveal" style={{ marginTop: '4rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Governance &amp; Advisory</h3>
          <p>
            The Foundation is led by a Board of Directors supported by a diverse advisors and partners comprising leaders from the private sector, academia, and public service. This collective expertise ensures that our initiatives - ranging from the Transatlantic Business Leaders Network to the Africa Digital &amp; Cybersecurity Academy - are executed with technical excellence and moral clarity.
          </p>
        </div>

        {/* Board of Directors */}
        <div className="column-wide reveal" style={{ marginTop: '3rem' }}>
          <span className="eyebrow">Board of Directors</span>
          <div style={{ marginTop: '1.2rem' }}>
            <Ledger
              numbered
              items={[
                { name: <strong>Daniel Edah</strong>, value: 'Founder · President', italic: true },
                { name: <strong>Akim E. Djekinnou</strong>, value: 'Treasurer', italic: true },
                { name: <strong>Mynor Armando Requeno</strong>, value: 'Secretary', italic: true },
              ]}
            />
          </div>
        </div>

        {/* Board bios */}
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            Daniel Edah provides strategic leadership and long-term vision for the organization, overseeing programs, partnerships, and external relations. His role includes guiding the Foundation&rsquo;s mission to strengthen leadership, civic engagement, and cooperation between the United States and Africa.
          </p>
          <p>
            Akim E. Djekinnou oversees financial management, budgeting, reporting, and internal controls, ensuring fiscal responsibility and adherence to all fiduciary and regulatory standards.
          </p>
          <p>
            Mynor Armando Requeno is responsible for maintaining official records, documenting board actions, ensuring compliance with governance requirements, and safeguarding the integrity of the Foundation&rsquo;s corporate documentation.
          </p>
        </div>

        {/* Country & State Representatives */}
        <div className="column reveal" style={{ marginTop: '3rem', textAlign: 'center' }}>
          <span className="eyebrow">Our Country &amp; State Representatives</span>
          <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--ink-soft)' }}>
            To be announced soon
          </p>
        </div>
      </Band>

      {/* Pullquote — gold */}
      <Band ground="gold">
        <Pullquote>
          At the heart of our work is the conviction that true leadership is rooted in character.
        </Pullquote>
      </Band>

      {/* §VI Message From the Founder — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="VI"
          eyebrow="A Message From the Founder"
          title="True leadership is rooted in character."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p style={{ fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.6 }}>
            &ldquo;At the heart of our work is the conviction that true leadership is rooted in character. It is measured not only by success, but by the willingness to serve others, uplift communities, and leave a positive legacy for future generations. We believe Africa and the United States can accomplish great things together through mutual respect, shared responsibility, and enduring partnership.&rdquo;
          </p>
          <p style={{ textAlign: 'right', marginTop: '1.5rem' }}>
            &mdash; Daniel Edah, Founder
          </p>
        </div>
      </Band>

      {/* §VII Our Values — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="VII"
          eyebrow="Our Values"
          title="The principles that guide every partnership."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar numeral="I"   title="Integrity" body="Maintaining the highest moral standards in every partnership." />
          <Pillar numeral="II"  title="Excellence" body="Striving for quality and impact in all initiatives." />
          <Pillar numeral="III" title="Mutual Respect" body="Valuing the unique contributions of both African and American partners." />
          <Pillar numeral="IV"  title="Shared Responsibility" body="Working together toward common goals and sustainable progress." />
        </div>
      </Band>

      {/* §VIII Get Involved — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="VIII"
          eyebrow="Get Involved"
          title="Four pathways to join the work."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          <Ledger
            numbered
            items={[
              { name: <strong>Partner With Us</strong>, value: '' },
              { name: <strong>Donate &mdash; Invest</strong>, value: '' },
              { name: <strong>Volunteer</strong>, value: '' },
              { name: <strong>Mentor</strong>, value: '' },
            ]}
          />
        </div>
        <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
          <StampButton href="/partners" variant="filled" label="Partner" subLabel="With Us &rarr;" />
          <StampButton href="/donate" variant="filled" label="Donate" subLabel="Invest &rarr;" />
          <StampButton href="/get-involved" variant="outline" label="Volunteer" subLabel="Mentor &rarr;" />
        </div>
      </Band>

      {/* §IX Contact Information — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="IX"
          eyebrow="Contact Information"
          title="Reach the Foundation directly."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ textAlign: 'center', hyphens: 'manual' }}>
            <strong>U.S.&ndash;Africa Allies Foundation</strong><br />
            300 Independence Ave SE<br />
            Washington, D.C. 20003<br />
            United States of America
          </p>
          <p style={{ marginTop: '2rem', textAlign: 'center', hyphens: 'manual' }}>
            Email: <a href="mailto:info@usafricaallies.org" className="pen">info@usafricaallies.org</a><br />
            <a href="tel:+12406787500" className="pen">+1 (240) 678-7500</a>
          </p>
        </div>
        <Ornament />
      </Band>
    </>
  );
}
