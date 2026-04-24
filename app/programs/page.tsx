import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Pillar from '@/components/Pillar';
import Ledger from '@/components/Ledger';
import Pullquote from '@/components/Pullquote';
import Ornament from '@/components/Ornament';
import StampButton from '@/components/StampButton';

export const metadata = {
  title: 'Programs & Initiatives · U.S.–Africa Allies Foundation',
  description:
    'Six programs that strengthen families, develop leaders, expand education, empower women, and support communities across the United States and Africa.',
};

export default function ProgramsPage() {
  return (
    <>
      <Band ground="navy">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Programs &amp; Initiatives</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.4rem, 5.4vw, 4.8rem)', lineHeight: 1.02 }}>
            When people are<br />empowered,<br /><em style={{ color: 'var(--brand-gold)' }}>nations rise.</em>
          </h1>
          <p style={{ marginTop: '1.6rem', fontStyle: 'italic', fontSize: '1.08rem', maxWidth: '44rem', marginInline: 'auto' }}>
            Our programs are not temporary interventions — they are investments
            in human potential, dignity, and destiny.
          </p>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader
          numeral="I"
          eyebrow="Program I"
          title="Leadership Development & Civic Empowerment"
          lede="To cultivate ethical, principled, and community-driven leaders capable of influencing positive change across the United States and Africa."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          <Ledger
            items={[
              { name: 'Leadership Academy', value: 'Intensive training for emerging leaders', italic: true },
              { name: 'Civic Responsibility Workshops', value: 'Ethics · Governance · Service', italic: true },
              { name: 'Mentorship Pipeline', value: 'Youth ↔ established leaders', italic: true },
              { name: 'Public Speaking & Advocacy', value: 'Training', italic: true },
            ]}
          />
          <div className="prose reveal" style={{ marginTop: '2rem', paddingLeft: '1.2rem', borderLeft: '3px solid var(--brand-gold)', maxWidth: 'var(--measure)' }}>
            <span className="eyebrow">Intended Impact</span>
            <p style={{ marginTop: '0.4rem' }}>
              To raise a generation of bold, ethical leaders equipped to serve
              their communities with integrity and vision.
            </p>
          </div>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader
          numeral="II"
          eyebrow="Program II"
          title="Education, Scholarships & Academic Access"
          lede="To expand educational opportunity for underserved youth and eliminate barriers to academic success."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          <Ledger
            items={[
              { name: 'Scholarship Fund', value: 'Multi-region student support', italic: true },
              { name: 'Digital Literacy', value: 'Modern workforce readiness', italic: true },
              { name: 'Academic Mentorship', value: 'Tutoring · Support · Guidance', italic: true },
              { name: 'School Partnership Support', value: 'Strengthening local institutions', italic: true },
            ]}
          />
          <div className="prose reveal" style={{ marginTop: '2rem', paddingLeft: '1.2rem', borderLeft: '3px solid var(--brand-gold)', maxWidth: 'var(--measure)' }}>
            <span className="eyebrow">Intended Impact</span>
            <p style={{ marginTop: '0.4rem' }}>Education that opens doors, unlocks potential, and breaks cycles of poverty.</p>
          </div>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader
          numeral="III"
          eyebrow="Program III"
          title="Women's Empowerment & Family Support"
          lede="To support women and mothers through financial empowerment, leadership development, and community support."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          <Ledger
            items={[
              { name: 'Entrepreneurship Training', value: 'Business skills · Financial literacy', italic: true },
              { name: 'Micro-Grant Access', value: 'Small capital for women-owned businesses', italic: true },
              { name: 'Support Circles', value: 'Safe spaces for empowerment', italic: true },
              { name: 'Vocational Training', value: 'Marketable skills', italic: true },
            ]}
          />
          <div className="prose reveal" style={{ marginTop: '2rem', paddingLeft: '1.2rem', borderLeft: '3px solid var(--brand-gold)', maxWidth: 'var(--measure)' }}>
            <span className="eyebrow">Intended Impact</span>
            <p style={{ marginTop: '0.4rem' }}>Women equipped with confidence, resources, and economic independence.</p>
          </div>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader
          numeral="IV"
          eyebrow="Program IV"
          title="Humanitarian Assistance & Community Support"
          lede="To provide relief, stability, and dignity to vulnerable families and communities experiencing hardship."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          <Ledger
            items={[
              { name: 'Food Distribution', value: 'Hunger relief programs', italic: true },
              { name: 'Emergency Response', value: 'Crisis assistance', italic: true },
              { name: 'Family Stability', value: 'Strengthening homes · Protecting children', italic: true },
              { name: 'Community Outreach', value: 'Initiatives', italic: true },
            ]}
          />
          <div className="prose reveal" style={{ marginTop: '2rem', paddingLeft: '1.2rem', borderLeft: '3px solid var(--brand-gold)', maxWidth: 'var(--measure)' }}>
            <span className="eyebrow">Intended Impact</span>
            <p style={{ marginTop: '0.4rem' }}>Communities strengthened through compassion, support, and responsive humanitarian care.</p>
          </div>
        </div>
      </Band>

      <Band ground="ivory">
        <SectionHeader
          numeral="V"
          eyebrow="Program V"
          title="Economic Empowerment & Workforce Development"
          lede="To equip youth and adults with the skills, tools, and confidence needed to thrive in today's economy."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          <Ledger
            items={[
              { name: 'Workforce Readiness', value: 'Resume building · Interview skills', italic: true },
              { name: 'Business Development', value: 'Startups · Micro-enterprises', italic: true },
              { name: 'Industry Partnerships', value: 'Connecting participants with employers', italic: true },
              { name: 'Financial Literacy', value: 'Budgeting · Credit · Stability', italic: true },
            ]}
          />
          <div className="prose reveal" style={{ marginTop: '2rem', paddingLeft: '1.2rem', borderLeft: '3px solid var(--brand-gold)', maxWidth: 'var(--measure)' }}>
            <span className="eyebrow">Intended Impact</span>
            <p style={{ marginTop: '0.4rem' }}>A prepared workforce capable of contributing to national economic growth.</p>
          </div>
        </div>
      </Band>

      <Band ground="navy">
        <SectionHeader
          numeral="VI"
          eyebrow="Program VI"
          title="U.S.–Africa Civic Exchange & Diaspora Cooperation"
          lede="To build bridges between cultures, institutions, and leaders across the United States and Africa."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          <Ledger
            items={[
              { name: 'Civic Exchange Forums', value: 'Cross-cultural learning & leadership', italic: true },
              { name: 'Policy Dialogues', value: 'Governance · Development · Diplomacy', italic: true },
              { name: 'Cultural Exchange', value: 'Strengthening unity & understanding', italic: true },
              { name: 'Diaspora Collaboration', value: 'Mobilizing global African leadership', italic: true },
            ]}
          />
          <div className="prose reveal" style={{ marginTop: '2rem', paddingLeft: '1.2rem', borderLeft: '3px solid var(--brand-gold)', maxWidth: 'var(--measure)' }}>
            <span className="eyebrow">Intended Impact</span>
            <p style={{ marginTop: '0.4rem' }}>Stronger transcontinental relationships and a shared vision for future progress.</p>
          </div>
        </div>
      </Band>

      <Band ground="gold">
        <Pullquote>When people are empowered, nations rise.</Pullquote>
      </Band>

      <Band ground="ivory">
        <SectionHeader
          numeral="VII"
          eyebrow="Monitoring, Evaluation & Learning"
          title="How we measure impact."
          lede="Four dimensions guide every assessment of our work."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar numeral="I"   title="Reach"          body="How many lives and communities our programs touch directly and indirectly." />
          <Pillar numeral="II"  title="Depth"          body="The quality and transformative power of change in each participant's life." />
          <Pillar numeral="III" title="Sustainability" body="Whether outcomes endure long after the program cycle ends." />
          <Pillar numeral="IV"  title="Scalability"    body="Our capacity to expand successful models across new regions and communities." />
        </div>

        <Ornament />

        <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
          <StampButton href="/strategic-plan" variant="filled" label="Strategic Plan" subLabel="Read →" />
          <StampButton href="/get-involved" variant="filled" label="Get Involved" subLabel="Join →" />
        </div>
      </Band>
    </>
  );
}
