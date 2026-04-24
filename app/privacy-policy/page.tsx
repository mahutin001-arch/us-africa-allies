import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Ornament from '@/components/Ornament';

export const metadata = {
  title: 'Privacy Policy · U.S.–Africa Allies Foundation',
  description:
    'How the U.S.–Africa Allies Foundation collects, uses, and protects the personal information of donors, visitors, and program participants.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Band ground="navy">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Legal · Privacy</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.4rem, 5.4vw, 4.8rem)', lineHeight: 1.02 }}>
            Privacy <em style={{ color: 'var(--brand-gold)' }}>Policy.</em>
          </h1>
          <p style={{ marginTop: '1.6rem', fontStyle: 'italic', fontSize: '1.08rem', maxWidth: '44rem', marginInline: 'auto' }}>
            Your trust is a foundation of our work. This policy explains what
            we collect, why we collect it, and how we protect it.
          </p>
          <p className="sans" style={{ marginTop: '1.6rem', fontSize: '0.66rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(226,194,116,0.78)' }}>
            Effective 24 April 2026
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader numeral="I" eyebrow="Who We Are" title="The responsible organization." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p className="dropcap">
            The U.S.–Africa Allies Foundation (&ldquo;the Foundation,&rdquo;
            &ldquo;we,&rdquo; or &ldquo;us&rdquo;) is a 501(c)(3) public
            charity registered in the United States, with its headquarters at
            300 Independence Avenue SE, Washington, D.C. 20003. The Foundation
            is the controller of personal information collected through this
            website and any services we operate.
          </p>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader numeral="II" eyebrow="What We Collect" title="Only what the work requires." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            We collect only the information needed to operate our programs,
            process donations, and communicate with those who engage with us.
            Categories of information we may collect include:
          </p>
          <p>
            <strong>Contact information</strong> — name, email address, postal
            address, phone number, and professional affiliation when you
            contact us, subscribe to communications, register for programs, or
            make a donation.
          </p>
          <p>
            <strong>Donation information</strong> — amount, frequency,
            designation, and payment method. Payment card details are
            collected and processed by our third-party payment processors
            (PayPal and Revere Payments) and are never stored on our servers.
          </p>
          <p>
            <strong>Correspondence</strong> — the content of messages you
            send us through contact forms, email, or other channels.
          </p>
          <p>
            <strong>Website usage</strong> — standard log data such as IP
            address, browser type, referring page, and pages viewed, collected
            automatically through server logs and any analytics tools we use.
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader numeral="III" eyebrow="How We Use It" title="Purposes limited to the mission." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            We use the information we collect to:
          </p>
          <p>
            &mdash; process and acknowledge donations, issue tax-deduction
            receipts, and comply with financial and reporting obligations;
          </p>
          <p>
            &mdash; respond to inquiries, partnership proposals, and program
            applications;
          </p>
          <p>
            &mdash; send periodic updates on the Foundation&rsquo;s work,
            events, and impact to those who have asked to receive them;
          </p>
          <p>
            &mdash; operate, secure, and improve our website and programs;
          </p>
          <p>
            &mdash; comply with applicable law and protect the rights, safety,
            and property of the Foundation, our partners, and the public.
          </p>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader numeral="IV" eyebrow="How We Share It" title="We never sell your information." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            The Foundation does not sell, rent, or trade personal information.
            We share information only with:
          </p>
          <p>
            <strong>Service providers</strong> that help us operate — payment
            processors, email platforms, website hosting, and analytics — each
            bound by confidentiality obligations and permitted to use the
            information only for the services they provide to us.
          </p>
          <p>
            <strong>Legal and regulatory authorities</strong> when required by
            law, court order, or to protect the rights, safety, and property
            of the Foundation, our partners, or the public.
          </p>
          <p>
            <strong>Partner organizations</strong> only with your prior
            consent, for example when you apply to a joint program.
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader numeral="V" eyebrow="Retention & Security" title="Held only as long as needed." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            We retain personal information only for as long as is necessary
            for the purposes described above, for as long as required to meet
            legal, tax, and accounting obligations, or to resolve disputes.
            Donation records are retained for the period required by U.S.
            nonprofit record-keeping standards.
          </p>
          <p>
            We use reasonable administrative, technical, and physical
            safeguards designed to protect personal information from loss,
            misuse, and unauthorized access. No method of transmission over
            the internet is perfectly secure, and we cannot guarantee absolute
            security.
          </p>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader numeral="VI" eyebrow="Your Rights" title="You remain in control." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            You may at any time request to access, correct, or delete the
            personal information we hold about you, and you may withdraw
            consent to future communications by using the unsubscribe link in
            any email or by contacting us directly. Where applicable law
            grants additional rights &mdash; such as the right to data
            portability or to object to processing &mdash; we will honor those
            rights in accordance with that law.
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader numeral="VII" eyebrow="Cookies & Analytics" title="Transparent and minimal." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            Our website may use cookies and similar technologies to operate
            essential features, remember preferences, and understand usage
            patterns. You can control cookies through your browser settings.
            Disabling certain cookies may limit functionality.
          </p>
          <p>
            If we use third-party analytics, we configure them to minimize
            personal data collection and do not use them to build advertising
            profiles.
          </p>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader numeral="VIII" eyebrow="Children's Privacy" title="We do not knowingly collect from minors." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            Our website is not directed to children under 13. We do not
            knowingly collect personal information from children under 13
            without verifiable parental consent. If you believe a child has
            provided us with personal information, please contact us and we
            will delete the information promptly.
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader numeral="IX" eyebrow="Changes to This Policy" title="Material updates will be announced." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            We may update this Privacy Policy from time to time. When we make
            material changes, we will revise the effective date at the top of
            this page and, where appropriate, notify you by email or through
            a notice on our website.
          </p>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader numeral="X" eyebrow="Contact Us" title="Questions, requests, and concerns." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            If you have any question about this Privacy Policy or how we
            handle personal information, please contact us at:
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
