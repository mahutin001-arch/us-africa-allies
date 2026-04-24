import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Ornament from '@/components/Ornament';
import StampButton from '@/components/StampButton';
import FounderPortrait from '@/components/FounderPortrait';

export const metadata = {
  title: "Founder's Message · U.S.–Africa Allies Foundation",
  description:
    "A message from Daniel Edah, founder and president of the U.S.–Africa Allies Foundation: leadership is not a position — it is a calling.",
};

export default function FoundersMessagePage() {
  return (
    <>
      <Band ground="navy">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>A Message from the Founder</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.4rem, 5.4vw, 4.8rem)', lineHeight: 1.02 }}>
            Leadership is not a position —<br />it is a <em style={{ color: 'var(--brand-gold)' }}>calling.</em>
          </h1>
          <p style={{ marginTop: '1.6rem', fontStyle: 'italic', fontSize: '1.05rem', maxWidth: '40rem', marginInline: 'auto' }}>
            By Daniel Edah · Founder &amp; President · U.S.–Africa Allies Foundation
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <div className="column-wide reveal" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '3rem', alignItems: 'center', paddingBottom: '3rem', borderBottom: '1px solid var(--hair)' }}>
          <FounderPortrait size={180} />
          <div className="prose" style={{ margin: 0 }}>
            <span className="eyebrow">The Author</span>
            <h3 style={{ fontSize: '1.6rem', margin: '0.4rem 0 0.3rem' }}>Daniel Edah</h3>
            <p className="sans" style={{ fontSize: '0.75rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-muted)', margin: '0 0 1rem' }}>Founder · President</p>
            <p>
              Daniel Edah leads the U.S.–Africa Allies Foundation with a
              vision of principled partnership between the United States and
              Africa — built not on charity, but on collaboration, dignity,
              and shared purpose.
            </p>
          </div>
        </div>

        <div className="column prose reveal" style={{ marginTop: '4rem' }}>
          <p className="dropcap">
            Leadership is not a position — it is a calling. It demands courage,
            responsibility, compassion, and an unwavering commitment to the
            well-being of others. The U.S.–Africa Allies Foundation was born
            from a sacred conviction: that the strength of families shapes the
            strength of nations, that partnership between the United States
            and Africa is essential for shared progress, and that all true
            leadership must ultimately glorify God through service, integrity,
            and dignity.
          </p>
          <p>
            Across the United States and throughout Africa, millions of people
            carry extraordinary potential yet lack access to opportunity.
            Young people are eager to lead but have never been shown the way.
            Women bear tremendous social and economic responsibility but
            remain underserved and under-supported. Families struggle without
            the safety, stability, and empowerment they deserve. Communities
            face humanitarian crises, instability, and economic inequality
            that hinder growth.
          </p>
        </div>

        <Ornament />

        <div className="column prose reveal">
          <h3 style={{ textAlign: 'center', fontStyle: 'italic', margin: '1rem 0 2rem' }}>
            We exist because nations rise when families are strengthened.
          </h3>
          <p>
            We exist because nations rise when families are strengthened, when
            leaders are principled and ethical, and when every act of service
            reflects a higher purpose. We exist to uplift those whom the world
            has overlooked and to honor God through work that restores dignity
            and expands opportunity.
          </p>
          <p>
            Our foundation is built on a simple but profound belief: leadership
            begins with responsibility and flourishes through service. Our
            programs are designed to raise a generation of U.S. and African
            leaders who understand that real strength comes not from power,
            but from purpose — purpose anchored in faith, compassion, and
            accountability.
          </p>
        </div>

        <Ornament />

        <div className="column prose reveal">
          <h3 style={{ textAlign: 'center', fontStyle: 'italic', margin: '1rem 0 2rem' }}>
            Building people who build nations.
          </h3>
          <p>
            We do not measure success by titles or recognition, but by the
            families strengthened, the nations uplifted, and the U.S.–Africa
            partnerships or joint ventures formed through our work.
          </p>
          <p>
            The U.S.–Africa Allies Foundation is not merely an initiative — it
            is a movement. A movement to restore dignity, expand education,
            empower women, and invest in leaders who will transform their
            communities and shape the future of nations. A movement grounded
            in the belief that God-fearing people, equipped with the right
            tools, opportunities, and support, can change the course of
            history.
          </p>
        </div>

        <Ornament />

        <div className="column prose reveal">
          <h3 style={{ textAlign: 'center', fontStyle: 'italic', margin: '1rem 0 2rem' }}>
            This foundation is a personal covenant.
          </h3>
          <p>
            This foundation is not an academic exercise or a theoretical
            concept. It is a personal covenant — to serve others, to uplift
            the vulnerable, and to build bridges across cultures, nations, and
            generations.
          </p>
          <p>
            I stand firmly in the conviction that true leadership is measured
            not by how many follow, but by how many rise because you chose to
            serve. Every program we deliver, every young person we empower,
            every woman we support, and every family we strengthen reflects
            this greater calling.
          </p>
          <p>May our work always honor God, uplift nations, and strengthen the families that form their foundation.</p>
        </div>

        <Ornament />

        <div className="column prose reveal">
          <h3 style={{ textAlign: 'center', fontStyle: 'italic', margin: '1rem 0 2rem' }}>
            Together, we can build a better future.
          </h3>
          <p>
            To everyone reading this: your life has meaning. Your contribution
            matters. You have a role in shaping the future — whether through
            partnership, support, leadership, or action. The work ahead of us
            is great, but so is the potential within the people we serve.
          </p>
          <p>
            Together, we can build a world where leadership is ethical,
            opportunity is accessible, and dignity is protected for all.
          </p>
          <p>
            My hope is that this foundation becomes a beacon of excellence,
            compassion, and integrity — a place where leaders are formed,
            where communities find support, and where nations discover the
            strength of unity.
          </p>
          <p style={{ marginTop: '2.5rem' }}>It is an honor to serve.</p>

          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '2.2rem', color: 'var(--navy)', lineHeight: 1, marginTop: '2rem' }}>
            Daniel Edah
          </p>
          <p className="sans" style={{ fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--brand-gold)', marginTop: '0.8rem' }}>
            Founder &amp; President · U.S.–Africa Allies Foundation
          </p>
        </div>

        <Ornament />

        <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
          <StampButton href="/strategic-plan" variant="filled" label="Strategic Plan" subLabel="Read →" />
          <StampButton href="/get-involved" variant="filled" label="Join" subLabel="The Movement →" />
          <StampButton href="/contact" variant="filled" label="Write" subLabel="To the Founder →" />
        </div>
      </Band>
    </>
  );
}
