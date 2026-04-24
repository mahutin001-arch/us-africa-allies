import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Ornament from '@/components/Ornament';

export const metadata = {
  title: 'Terms of Use · U.S.–Africa Allies Foundation',
  description:
    'The terms that govern use of the U.S.–Africa Allies Foundation website, donation services, and programs.',
};

export default function TermsPage() {
  return (
    <>
      <Band ground="navy">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Legal · Terms</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.4rem, 5.4vw, 4.8rem)', lineHeight: 1.02 }}>
            Terms of <em style={{ color: 'var(--brand-gold)' }}>Use.</em>
          </h1>
          <p style={{ marginTop: '1.6rem', fontStyle: 'italic', fontSize: '1.08rem', maxWidth: '44rem', marginInline: 'auto' }}>
            The covenant between the Foundation and those who use its website,
            make donations, or participate in its programs.
          </p>
          <p className="sans" style={{ marginTop: '1.6rem', fontSize: '0.66rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(226,194,116,0.78)' }}>
            Effective 24 April 2026
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader numeral="I" eyebrow="Acceptance" title="By using the site, you accept these terms." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p className="dropcap">
            These Terms of Use govern your access to and use of the website,
            services, and donation platforms operated by the U.S.&ndash;Africa
            Allies Foundation (&ldquo;the Foundation,&rdquo; &ldquo;we,&rdquo;
            or &ldquo;us&rdquo;). By accessing or using the site, you agree to
            be bound by these Terms. If you do not agree, please do not use
            the site.
          </p>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader numeral="II" eyebrow="About the Foundation" title="A registered public charity." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            The U.S.&ndash;Africa Allies Foundation is a 501(c)(3) public
            charity organized under the laws of the United States, with its
            principal office at 300 Independence Avenue SE, Washington, D.C.
            20003. Contributions to the Foundation are tax-deductible in the
            United States to the extent permitted by law.
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader numeral="III" eyebrow="Permitted Use" title="How the website may be used." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            You may use this website for lawful personal, educational, and
            philanthropic purposes. You may not:
          </p>
          <p>
            &mdash; use the site in any way that violates applicable law or
            regulation;
          </p>
          <p>
            &mdash; impersonate the Foundation, its officers, or any other
            person;
          </p>
          <p>
            &mdash; attempt to gain unauthorized access to, interfere with,
            or disrupt any portion of the site or its underlying
            infrastructure;
          </p>
          <p>
            &mdash; use automated means to scrape, harvest, or collect content
            or personal data from the site without our written permission;
          </p>
          <p>
            &mdash; use the Foundation&rsquo;s name, seal, or materials to
            imply endorsement of any product, service, or cause without
            written authorization.
          </p>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader numeral="IV" eyebrow="Donations" title="The terms that govern a gift." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            By submitting a donation, you represent that you are at least 18
            years of age, that you are using a payment method you are
            authorized to use, and that the funds are not derived from any
            unlawful activity.
          </p>
          <p>
            Donations are processed by our third-party payment processor
            (Revere Payments). By donating, you also agree to that
            processor&rsquo;s terms and privacy policy, available on its
            website.
          </p>
          <p>
            Donors will receive a written acknowledgment from the Foundation
            for each gift, which may serve as a record for tax-deduction
            purposes. The Foundation cannot guarantee that any given gift
            will be deductible on any individual donor&rsquo;s tax return;
            donors should consult their own tax advisors.
          </p>
          <p>
            For information about refunds, cancellations, and recurring
            contributions, see our{' '}
            <a href="/refund-policy" className="pen">Refund Policy</a>.
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader numeral="V" eyebrow="Intellectual Property" title="Content and marks." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            All text, images, designs, logos, seal, and other content on this
            website, unless otherwise noted, are the property of the
            Foundation or are used with permission. You may view, download,
            and print materials for personal, non-commercial use, provided
            that copyright and other proprietary notices are preserved. You
            may not reproduce, republish, distribute, or adapt any material
            for commercial purposes without our prior written permission.
          </p>
          <p>
            The name &ldquo;U.S.&ndash;Africa Allies Foundation&rdquo; and the
            Foundation seal are trademarks of the Foundation. Use of these
            marks in any form requires written authorization.
          </p>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader numeral="VI" eyebrow="Disclaimers" title="The site is provided 'as is.'" />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            The website and its content are provided on an &ldquo;as
            is&rdquo; and &ldquo;as available&rdquo; basis. The Foundation
            makes no warranties, express or implied, regarding the operation
            of the site or the accuracy, completeness, or reliability of its
            content. We do not warrant that the site will be uninterrupted,
            secure, or free of errors, viruses, or other harmful components.
          </p>
          <p>
            Information on the website is provided for general informational
            purposes and does not constitute legal, financial, tax, or
            professional advice.
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader numeral="VII" eyebrow="Limitation of Liability" title="The extent of our responsibility." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            To the fullest extent permitted by law, the Foundation and its
            directors, officers, employees, volunteers, and agents shall not
            be liable for any indirect, incidental, special, consequential, or
            punitive damages arising out of or related to your use of the
            site, even if we have been advised of the possibility of such
            damages. Our aggregate liability for any claim arising out of or
            related to the site shall not exceed one hundred U.S. dollars
            (USD 100).
          </p>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader numeral="VIII" eyebrow="Governing Law" title="Jurisdiction and venue." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the District of Columbia and the federal laws of the
            United States applicable therein, without regard to conflict of
            law principles. Any dispute arising out of or related to these
            Terms or your use of the site shall be resolved exclusively in the
            federal or local courts located in the District of Columbia, and
            you consent to the personal jurisdiction and venue of those
            courts.
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader numeral="IX" eyebrow="Changes" title="We may update these terms." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            We may update these Terms from time to time. Material changes
            will be indicated by revising the effective date at the top of
            this page. Your continued use of the site after any such update
            constitutes acceptance of the revised Terms.
          </p>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader numeral="X" eyebrow="Contact" title="Reach the Foundation." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            Questions about these Terms may be directed to:
          </p>
          <p>
            U.S.&ndash;Africa Allies Foundation<br />
            300 Independence Avenue SE<br />
            Washington, D.C. 20003<br />
            United States of America
          </p>
          <p>
            Email: <a href="mailto:daniel.edah@usafricaallies.org" className="pen">daniel.edah@usafricaallies.org</a><br />
            Telephone: <a href="tel:+12406787500" className="pen">+1 (240) 678-7500</a>
          </p>
        </div>
        <Ornament color="rgba(203,165,78,.8)" />
      </Band>
    </>
  );
}
