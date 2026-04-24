import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Ornament from '@/components/Ornament';

export const metadata = {
  title: 'Refund Policy · U.S.–Africa Allies Foundation',
  description:
    'How the U.S.–Africa Allies Foundation handles refund requests, duplicate transactions, and cancellation of recurring donations.',
};

export default function RefundPolicyPage() {
  return (
    <>
      <Band ground="navy">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Legal · Refunds</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.4rem, 5.4vw, 4.8rem)', lineHeight: 1.02 }}>
            Refund <em style={{ color: 'var(--brand-gold)' }}>Policy.</em>
          </h1>
          <p style={{ marginTop: '1.6rem', fontStyle: 'italic', fontSize: '1.08rem', maxWidth: '44rem', marginInline: 'auto' }}>
            Our commitment to donor intent, stewardship, and good-faith
            handling of every gift we receive.
          </p>
          <p className="sans" style={{ marginTop: '1.6rem', fontSize: '0.66rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(226,194,116,0.78)' }}>
            Effective 24 April 2026
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader numeral="I" eyebrow="General Policy" title="Donations are generally non-refundable." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p className="dropcap">
            The U.S.&ndash;Africa Allies Foundation is a 501(c)(3) public
            charity. Donations are treated as charitable contributions and
            are generally non-refundable. Once a donation is processed, the
            funds are committed to the Foundation&rsquo;s programs and
            operations. We nevertheless recognize that genuine errors and
            exceptional circumstances occur, and we review every refund
            request in good faith.
          </p>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader numeral="II" eyebrow="Exceptions" title="When a refund may be issued." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            We will consider refund requests in the following circumstances:
          </p>
          <p>
            <strong>Duplicate transaction</strong> &mdash; the same donation
            was processed more than once due to a technical error.
          </p>
          <p>
            <strong>Incorrect amount</strong> &mdash; the amount charged
            differs materially from the amount the donor intended to give,
            provided the request is made within thirty (30) days of the
            transaction.
          </p>
          <p>
            <strong>Unauthorized transaction</strong> &mdash; the donation
            was made without the authorization of the cardholder or account
            owner (for example, in cases of fraud or family misuse).
          </p>
          <p>
            <strong>Processor error</strong> &mdash; the payment processor
            (Revere Payments) completed a transaction in error or in a manner
            inconsistent with the donor&rsquo;s stated instructions.
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader numeral="III" eyebrow="How to Request a Refund" title="The process is direct." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            To request a refund, please contact us by email at{' '}
            <a href="mailto:daniel.edah@usafricaallies.org" className="pen">daniel.edah@usafricaallies.org</a>
            {' '}or by telephone at{' '}
            <a href="tel:+12406787500" className="pen">+1 (240) 678-7500</a>.
            Include in your request:
          </p>
          <p>
            &mdash; the donor&rsquo;s full name and email address used at the
            time of the donation;
          </p>
          <p>
            &mdash; the date and amount of the transaction;
          </p>
          <p>
            &mdash; the last four digits of the payment method used, or the
            transaction reference number;
          </p>
          <p>
            &mdash; a brief description of the reason for the request.
          </p>
          <p>
            We will review the request promptly and respond within ten (10)
            business days. Approved refunds are returned to the original
            payment method and typically appear on donor statements within
            five to ten business days after processing. If a tax-deduction
            acknowledgment has already been issued for the refunded gift, the
            Foundation will also issue a corrected acknowledgment.
          </p>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader numeral="IV" eyebrow="Recurring Donations" title="How to modify or cancel monthly giving." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            Donors who have established a recurring (monthly, quarterly, or
            annual) gift may modify or cancel future contributions at any
            time by contacting us at{' '}
            <a href="mailto:daniel.edah@usafricaallies.org" className="pen">daniel.edah@usafricaallies.org</a>
            {' '}or through the donor portal of the payment processor that
            handled the original gift.
          </p>
          <p>
            Cancellation requests received at least five (5) business days
            before the next scheduled payment will stop all further
            contributions. Payments already processed prior to the
            cancellation are generally non-refundable, but may be considered
            under the exceptions in Section II.
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader numeral="V" eyebrow="Designated Funds" title="Donor intent is honored." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            When a donor directs a gift to a specific designated fund, the
            Foundation will honor that designation to the fullest extent
            possible. If the designated purpose cannot be fulfilled &mdash;
            for example, because the fund has already met its goal or the
            program has concluded &mdash; we will contact the donor to
            discuss redirection. If the donor cannot be reached within a
            reasonable period, the gift will be applied to the area of
            greatest need consistent with the Foundation&rsquo;s mission.
          </p>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader numeral="VI" eyebrow="Contact" title="Questions about this policy." />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p>
            For any question about this Refund Policy, or to request a refund,
            please contact us:
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
