import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Pillar from '@/components/Pillar';
import Ledger from '@/components/Ledger';
import Ornament from '@/components/Ornament';
import StampButton from '@/components/StampButton';
import styles from './form.module.css';

export const metadata = {
  title: 'Get Involved · U.S.–Africa Allies Foundation',
  description:
    'Six pathways to join the U.S.–Africa Allies Foundation — volunteers, mentors, committee members, ambassadors, donors, and interns.',
};

export default function GetInvolvedPage() {
  return (
    <>
      <Band ground="navy">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Get Involved</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.4rem, 5.4vw, 4.6rem)', lineHeight: 1.02 }}>
            Transformation is the<br />work of a <em style={{ color: 'var(--brand-gold)' }}>community.</em>
          </h1>
          <p style={{ marginTop: '1.6rem', fontStyle: 'italic', fontSize: '1.08rem', maxWidth: '44rem', marginInline: 'auto' }}>
            There are six pathways into the Foundation. Each is a real seat at
            the table — chosen, recorded, and acknowledged.
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader
          numeral="I"
          eyebrow="Six Pathways"
          title="Pick the seat that fits you."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar numeral="I"   eyebrow="Volunteers"         title="Volunteers are the heartbeat of our movement." body="Through service, compassion, and dedication, you help deliver programs and support communities — leadership academies, women's empowerment, humanitarian aid, administrative and event coordination." />
          <Pillar numeral="II"  eyebrow="Mentors"            title="Mentors change lives." body="By guiding youth and women through education and leadership development, mentors shape the next generation of leaders — academic and career guidance, life skills, personal empowerment." />
          <Pillar numeral="III" eyebrow="Committee Service"  title="Contribute your expertise." body="Passionate about governance, programs, or strategy? Contribute your expertise to one of our working committees — Finance & Audit, Leadership & Governance, Fundraising & Partnerships." />
          <Pillar numeral="IV"  eyebrow="Ambassadors"        title="Represent the Foundation in your community." body="Ambassadors represent the Foundation's mission in their communities — building relationships, supporting events, mobilizing resources, and advocating on social media." />
          <Pillar numeral="V"   eyebrow="Donors"             title="Allow the Foundation to grow." body="Financial partners allow the Foundation to grow, scale, and respond quickly to community needs across both continents — scholarships for students, training for emerging leaders, food and support for families, women's empowerment programs." />
          <Pillar numeral="VI"  eyebrow="Internships"        title="Hands-on experience." body="We offer internship opportunities for youth, students, and young professionals who want hands-on experience in community development and leadership — program support & research, communications & outreach, leadership development." />
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader
          numeral="II"
          eyebrow="How to Begin"
          title="Becoming part of the Foundation is simple."
          lede="Choose a pathway, submit your interest, and our team will connect with you personally."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          <Ledger
            numbered
            items={[
              { name: 'Choose your pathway above', value: 'Step One', italic: true },
              { name: 'Submit your interest via the form below', value: 'Step Two', italic: true },
              { name: 'Our team connects within 48 hours', value: 'Step Three', italic: true },
              { name: 'Begin your journey with the Foundation', value: 'Step Four', italic: true },
            ]}
          />
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader
          numeral="III"
          eyebrow="Express Your Interest"
          title="Submit a brief enrollment."
          lede="We respond to every inquiry within 48 hours."
        />
        <form
          action="mailto:info@usafricaallies.org"
          method="post"
          encType="text/plain"
          className={`${styles.form} reveal`}
        >
          <label className={styles.field}>
            <span className="eyebrow">Full Name</span>
            <input type="text" name="name" required />
          </label>
          <label className={styles.field}>
            <span className="eyebrow">Email</span>
            <input type="email" name="email" required />
          </label>
          <label className={styles.field}>
            <span className="eyebrow">Profession · Affiliation</span>
            <input type="text" name="role" />
          </label>
          <label className={styles.field}>
            <span className="eyebrow">City · Country</span>
            <input type="text" name="location" />
          </label>
          <label className={styles.field}>
            <span className="eyebrow">Which pathway?</span>
            <select name="track" defaultValue="Volunteer">
              <option>Volunteer</option>
              <option>Mentor</option>
              <option>Committee Service</option>
              <option>Ambassador</option>
              <option>Donor · Financial Partner</option>
              <option>Internship</option>
            </select>
          </label>
          <label className={styles.field}>
            <span className="eyebrow">In one paragraph: why this work?</span>
            <textarea name="note" rows={5}></textarea>
          </label>
          <button type="submit" className={styles.submit}>Submit →</button>
        </form>

        <Ornament />
        <p className="sans" style={{ textAlign: 'center', fontStyle: 'italic', fontFamily: 'var(--serif)', fontSize: '1.05rem', color: 'var(--ink-soft)', marginTop: '1rem' }}>
          You have a role in shaping the future of nations, one life at a time.
        </p>
      </Band>
    </>
  );
}
