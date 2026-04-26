import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Pillar from '@/components/Pillar';
import Ledger from '@/components/Ledger';
import Pullquote from '@/components/Pullquote';
import Ornament from '@/components/Ornament';
import StampButton from '@/components/StampButton';
import styles from '../get-involved/form.module.css';

export const metadata = {
  title: 'Partner With Us · U.S.–Africa Allies Foundation',
  description:
    'Partnership is not transactional — it is transformational. Strategic, institutional, corporate, funding, government, and international partnerships with the U.S.–Africa Allies Foundation.',
};

export default function PartnersPage() {
  return (
    <>
      <Band ground="navy">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Partner With Us</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.4rem, 5.4vw, 4.6rem)', lineHeight: 1.02 }}>
            Partnership is<br />transformational —<br /><em style={{ color: 'var(--brand-gold)' }}>not transactional.</em>
          </h1>
          <p style={{ marginTop: '1.6rem', fontStyle: 'italic', fontSize: '1.08rem', maxWidth: '44rem', marginInline: 'auto' }}>
            Together, we build solutions that strengthen communities and
            create sustainable impact across the United States and Africa.
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader
          numeral="I"
          eyebrow="Why Partner"
          title="Lasting change requires collaboration."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p className="dropcap">
            The U.S.–Africa Allies Foundation believes that lasting change
            requires collaboration. We partner with institutions,
            organizations, agencies, businesses, and community leaders who
            share our commitment to dignity, education, empowerment, and
            leadership.
          </p>
          <p>
            Partnership allows for shared expertise, expanded reach, combined
            resources, and long-term development. Through unity, we multiply
            impact.
          </p>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader
          numeral="II"
          eyebrow="Six Categories of Partnership"
          title="Find the relationship that fits your institution."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar numeral="I"   eyebrow="Strategic Program Partners" title="Deliver programs together." body="Work directly with us to deliver leadership, education, humanitarian, and empowerment programs. Provide subject expertise, operational support, or community access." />
          <Pillar numeral="II"  eyebrow="Institutional Partners" title="Research and development." body="Collaborate with us on research, program development, capacity building, and civic engagement efforts across both continents." />
          <Pillar numeral="III" eyebrow="Corporate & Business" title="Strengthen communities while advancing CSR." body="Strengthen communities while advancing social responsibility goals through program funding, workforce development initiatives, joint outreach, or in-kind contributions." />
          <Pillar numeral="IV"  eyebrow="Funding & Grants" title="Philanthropic investment." body="Foundations, agencies, and philanthropic organizations support our mission through grants and financial investments in leadership, empowerment, and education initiatives." />
          <Pillar numeral="V"   eyebrow="Government & Civic" title="Public leadership partnership." body="We collaborate with municipal, regional, and national government bodies to promote civic leadership, public education, and community development." />
          <Pillar numeral="VI"  eyebrow="International & Cross-Continental" title="U.S.–Africa collaboration." body="Our U.S.–Africa collaboration promotes policy dialogue, cultural exchange, and global development cooperation between the two regions." />
        </div>
      </Band>

      <Band ground="gold">
        <Pullquote>
          Together, we are greater than the sum of our parts.
        </Pullquote>
      </Band>

      <Band ground="ivory">
        <SectionHeader
          numeral="III"
          eyebrow="Who Can Partner"
          title="The institutions we work with."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          <Ledger
            items={[
              { name: 'Universities & Academic Institutions', value: 'Research · Co-publishing', italic: true },
              { name: 'Nonprofits & Civil Society', value: 'Programs · Community access', italic: true },
              { name: 'Corporations & Business Associations', value: 'CSR · Workforce', italic: true },
              { name: 'Government Agencies & Embassies', value: 'Diplomatic · Civic', italic: true },
              { name: 'Faith Communities & Religious Institutions', value: 'Service · Outreach', italic: true },
              { name: 'Media & Communications', value: 'Editorial · Press', italic: true },
              { name: 'Diaspora Networks & Community Groups', value: 'Mobilization', italic: true },
            ]}
          />
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader
          numeral="IV"
          eyebrow="Our Commitment"
          title="A partnership built on trust."
          lede="We commit to partnerships that are mission-aligned, ethical, transparent, mutually beneficial, and built for the long term."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          <Ledger
            items={[
              { name: 'Mission-aligned collaboration', value: 'Required', italic: true },
              { name: 'Ethical & transparent practices', value: 'Standing', italic: true },
              { name: 'Mutually beneficial outcomes', value: 'By design', italic: true },
              { name: 'Community-centered programs', value: 'Always', italic: true },
              { name: 'Impact-driven results', value: 'Reported', italic: true },
              { name: 'Sustainable, long-term relationships', value: 'Multi-year', italic: true },
            ]}
          />
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader
          numeral="V"
          eyebrow="Open the Conversation"
          title="Tell us briefly who you are."
          lede="Partnerships begin with a conversation. We will write back to schedule the first call."
        />
        <form
          action="mailto:info@usafricaallies.org"
          method="post"
          encType="text/plain"
          className={`${styles.form} reveal`}
        >
          <label className={styles.field}>
            <span className="eyebrow">Institution</span>
            <input type="text" name="org" required />
          </label>
          <label className={styles.field}>
            <span className="eyebrow">Contact Name &amp; Title</span>
            <input type="text" name="contact" required />
          </label>
          <label className={styles.field}>
            <span className="eyebrow">Email</span>
            <input type="email" name="email" required />
          </label>
          <label className={styles.field}>
            <span className="eyebrow">Category</span>
            <select name="category" defaultValue="Strategic Program Partner">
              <option>Strategic Program Partner</option>
              <option>Institutional Partner</option>
              <option>Corporate &amp; Business</option>
              <option>Funding &amp; Grants</option>
              <option>Government &amp; Civic</option>
              <option>International &amp; Cross-Continental</option>
              <option>Other · Please describe</option>
            </select>
          </label>
          <label className={styles.field}>
            <span className="eyebrow">In one paragraph: what would partnership look like?</span>
            <textarea name="note" rows={6}></textarea>
          </label>
          <button type="submit" className={styles.submit}>Send Inquiry →</button>
        </form>

        <Ornament />

        <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
          <StampButton href="/summit" variant="filled" label="The Summit" subLabel="Date TBA" />
          <StampButton href="/platform" variant="filled" label="The Platform" subLabel="Partnerships →" />
        </div>
      </Band>
    </>
  );
}
