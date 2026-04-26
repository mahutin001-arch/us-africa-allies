import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Ledger from '@/components/Ledger';
import Ornament from '@/components/Ornament';
import styles from '../get-involved/form.module.css';

export const metadata = {
  title: 'Contact · U.S.–Africa Allies Foundation',
  description:
    'Every message matters. Every request is important. Every voice deserves to be heard. Contact the U.S.–Africa Allies Foundation.',
};

export default function ContactPage() {
  return (
    <>
      <Band ground="navy">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Contact</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.4rem, 5.4vw, 4.8rem)', lineHeight: 1.02 }}>
            Get in <em style={{ color: 'var(--brand-gold)' }}>touch.</em>
          </h1>
          <p style={{ marginTop: '1.6rem', fontStyle: 'italic', fontSize: '1.08rem', maxWidth: '44rem', marginInline: 'auto' }}>
            &ldquo;Whether you are seeking partnership, support, program
            information, volunteer opportunities, or media inquiries — every
            message matters. Every request is important. Every voice deserves
            to be heard.&rdquo;
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <div className="sheet" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          <div className="reveal">
            <span className="eyebrow">§ I · Send a Message</span>
            <h2 style={{ margin: '0.8rem 0 2rem', fontSize: '2rem' }}>Reach the Foundation directly.</h2>

            <form
              action="mailto:info@usafricaallies.org"
              method="post"
              encType="text/plain"
              className={styles.form}
              style={{ margin: 0 }}
            >
              <label className={styles.field}>
                <span className="eyebrow">Your Name</span>
                <input type="text" name="name" required />
              </label>
              <label className={styles.field}>
                <span className="eyebrow">Email</span>
                <input type="email" name="email" required />
              </label>
              <label className={styles.field}>
                <span className="eyebrow">Affiliation (optional)</span>
                <input type="text" name="affiliation" />
              </label>
              <label className={styles.field}>
                <span className="eyebrow">Subject</span>
                <select name="subject" defaultValue="Questions & Information">
                  <option>Questions &amp; Information</option>
                  <option>Institutional Partnership</option>
                  <option>Press &amp; Communications</option>
                  <option>Donor Support</option>
                  <option>Program Participation</option>
                  <option>Strategic Council Summit</option>
                  <option>Opportunities Platform</option>
                  <option>General Correspondence</option>
                </select>
              </label>
              <label className={styles.field}>
                <span className="eyebrow">Your Message</span>
                <textarea name="message" rows={6} required></textarea>
              </label>
              <button type="submit" className={styles.submit}>Send Message →</button>
            </form>
          </div>

          <div className="reveal">
            <span className="eyebrow">§ II · Direct Channels</span>
            <h2 style={{ margin: '0.8rem 0 2rem', fontSize: '2rem' }}>Or write to us plainly.</h2>

            <Ledger
              items={[
                { name: 'Email', value: <a href="mailto:info@usafricaallies.org" className="pen">info@usafricaallies.org</a> },
                { name: 'Phone', value: <a href="tel:+12406787500" className="pen">+1 (240) 678-7500</a> },
                { name: 'Website', value: <a href="https://usafricaallies.org" className="pen">usafricaallies.org</a> },
              ]}
            />

            <hr className="hair" style={{ margin: '3rem 0' }} />

            <span className="eyebrow">§ III · Office</span>
            <h3 style={{ margin: '0.8rem 0 1rem', fontSize: '1.3rem' }}>Headquarters</h3>
            <address style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--ink-soft)', lineHeight: 1.55 }}>
              U.S.–Africa Allies Foundation<br />
              Washington, D.C.<br />
              United States of America
            </address>

            <hr className="hair" style={{ margin: '3rem 0' }} />

            <span className="eyebrow">§ IV · Service Standards</span>
            <div style={{ marginTop: '1.2rem' }}>
              <Ledger
                items={[
                  { name: 'Professionalism & respect', value: 'Always', italic: true },
                  { name: 'Every inquiry valued', value: 'Standing', italic: true },
                  { name: 'Transparency in all communications', value: 'Required', italic: true },
                  { name: 'Timely & accurate information', value: 'Delivered', italic: true },
                  { name: 'Privacy & data protection', value: 'Protected', italic: true },
                ]}
              />
            </div>
          </div>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader
          numeral="V"
          eyebrow="Reach the Right Department"
          title="How we route your message."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          <Ledger
            items={[
              { name: 'Questions & Information', value: 'Programs · Partnerships · Events', italic: true },
              { name: 'Institutional Partners', value: 'Universities · Nonprofits · Government · Business', italic: true },
              { name: 'Press & Communications', value: 'Interviews · Media requests', italic: true },
              { name: 'Donor Support', value: 'Online giving · Sponsorship · Documentation', italic: true },
              { name: 'Program Participation', value: 'Students · Youth · Women · Community members', italic: true },
            ]}
          />
        </div>
        <Ornament color="rgba(203,165,78,.8)" />
      </Band>
    </>
  );
}
