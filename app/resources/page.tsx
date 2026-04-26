import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Ornament from '@/components/Ornament';
import StampButton from '@/components/StampButton';
import styles from './resources.module.css';

export const metadata = {
  title: 'Resources & Publications · U.S.–Africa Allies Foundation',
  description:
    'Articles, perspectives, and publications from the U.S.–Africa Allies Foundation on leadership, families, faith, and U.S.–Africa partnership.',
};

type Entry = {
  year: string;
  meta: string;
  title: string;
  desc: string;
  href?: string;
};

const FOUNDATIONAL: Entry[] = [
  {
    year: 'MMXXVI',
    meta: 'Founder · Letter',
    title: 'Leadership Is Not a Position — It Is a Calling',
    desc: "Daniel Edah reflects on the founding conviction behind the U.S.–Africa Allies Foundation and the responsibility of principled leadership.",
    href: '/founders-message',
  },
  {
    year: 'MMXXVI',
    meta: 'Perspective',
    title: 'Strengthening U.S.–Africa Partnership in a Defining Decade',
    desc: 'An analysis of the strategic opportunity for values-based partnership between the United States and African nations.',
  },
  {
    year: 'MMXXVI',
    meta: 'Essay · Family',
    title: 'Why Families Are the Foundation of National Stability',
    desc: 'Exploring the link between strong family units and the broader resilience of communities, economies, and nations.',
  },
  {
    year: 'MMXXVI',
    meta: 'Announcement',
    title: 'U.S.–Africa Allies Foundation Launches Leadership Academy',
    desc: 'The Foundation announces the opening of its Leadership Academy program, bringing ethical leadership training to youth across both continents.',
  },
];

const PERSPECTIVES: Entry[] = [
  {
    year: 'MMXXVI',
    meta: 'Essay · Women',
    title: 'Women as Nation-Builders: The Case for Investing in Women’s Leadership',
    desc: 'How empowering women creates a multiplier effect across families, communities, and national economies.',
  },
  {
    year: 'MMXXVI',
    meta: 'Perspective · Faith',
    title: 'Faith, Governance, and Ethical Leadership in the 21st Century',
    desc: 'A perspective on the role of faith-inspired values in creating accountable, servant-driven leaders in public and private life.',
  },
  {
    year: 'MMXXVI',
    meta: 'Press Coverage',
    title: 'Foundation Featured in U.S.–Africa Diaspora Summit Coverage',
    desc: "Press coverage of the Foundation’s participation in cross-continental dialogue on leadership, governance, and shared prosperity.",
  },
  {
    year: 'MMXXVI',
    meta: 'Essay · Civic',
    title: 'Patriotism as a Development Strategy: Lessons from Both Continents',
    desc: 'Examining how civic pride, national responsibility, and patriotism contribute to social cohesion and long-term development.',
  },
  {
    year: 'MMXXVI',
    meta: 'Reflection',
    title: 'Building People Who Build Nations',
    desc: "Reflections on why the Foundation believes that every investment in a person is ultimately an investment in the nation they will help build.",
  },
];

function Row({ entry }: { entry: Entry }) {
  return (
    <div className={`${styles.row} reveal`}>
      <div className={styles.meta}>
        <div className={styles.year}>{entry.year}</div>
        <div className={styles.metaLabel}>{entry.meta}</div>
      </div>
      <div className={styles.body}>
        <div className={styles.title}>{entry.title}</div>
        <div className={styles.desc}>{entry.desc}</div>
        {entry.href && (
          <a href={entry.href} className={`pen ${styles.link}`}>Read →</a>
        )}
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <Band ground="navy">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Resources &amp; Publications</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.6rem, 6vw, 5rem)', lineHeight: 1.02 }}>
            Read. Learn.<br /><em style={{ color: 'var(--brand-gold)' }}>Act.</em>
          </h1>
          <p style={{ marginTop: '1.6rem', fontStyle: 'italic', fontSize: '1.08rem', maxWidth: '44rem', marginInline: 'auto' }}>
            Articles, perspectives, and publications from the U.S.–Africa
            Allies Foundation. Join the movement that is turning ideas into
            impact across two continents.
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader
          numeral="I"
          eyebrow="Foundational Writings"
          title="Articles by and about the Foundation."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          {FOUNDATIONAL.map((e, i) => <Row key={i} entry={e} />)}
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader
          numeral="II"
          eyebrow="Perspectives"
          title="Reflections on the work."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          {PERSPECTIVES.map((e, i) => <Row key={i} entry={e} />)}
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader
          numeral="III"
          eyebrow="Subscribe"
          title="Receive new publications by email."
          lede="The latest articles, policy perspectives, program updates, and news from the U.S.–Africa Allies Foundation — delivered when published."
        />
        <form
          action="mailto:info@usafricaallies.org?subject=Newsletter Subscription"
          method="post"
          encType="text/plain"
          className="reveal"
          style={{ display: 'grid', gap: '1.2rem', maxWidth: '32rem', margin: '3rem auto 0' }}
        >
          <label>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '0.3rem' }}>Name</span>
            <input type="text" name="name" required className={styles.input} />
          </label>
          <label>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '0.3rem' }}>Email</span>
            <input type="email" name="email" required className={styles.input} />
          </label>
          <button type="submit" className={styles.submit}>Subscribe →</button>
        </form>

        <Ornament />
        <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
          <StampButton href="/founders-message" variant="filled" label="Founder's" subLabel="Letter →" />
          <StampButton href="/get-involved" variant="filled" label="Get Involved" subLabel="Join →" />
        </div>
      </Band>
    </>
  );
}
