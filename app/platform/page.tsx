import Band from '@/components/Band';
import SectionHeader from '@/components/SectionHeader';
import Ledger from '@/components/Ledger';
import Pillar from '@/components/Pillar';
import Ornament from '@/components/Ornament';
import StampButton from '@/components/StampButton';
import Pullquote from '@/components/Pullquote';

export const metadata = {
  title: 'Opportunities & Strategic Connections Platform · U.S.–Africa Allies Foundation',
  description:
    'Building bridges for trade, investment, and strategic partnerships across the United States, Africa, and Israel.',
};

export default function PlatformPage() {
  return (
    <>
      {/* Title band — navy */}
      <Band ground="navy">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Opportunities &amp; Strategic Connections Platform</span>
          <h1 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.6rem, 6vw, 5rem)', lineHeight: 1.02 }}>
            Building bridges<br />for trade and <em style={{ color: 'var(--brand-gold)' }}>investment.</em>
          </h1>
          <p style={{ marginTop: '1.6rem', fontStyle: 'italic', fontSize: '1.1rem', maxWidth: '44rem', marginInline: 'auto' }}>
            A dedicated initiative to facilitate meaningful, sustainable
            partnerships across the United States, Africa, and Israel —
            connecting individuals, entrepreneurs, companies, investors, and
            institutions.
          </p>
        </div>
      </Band>

      {/* §I The Platform — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="I"
          eyebrow="The Platform"
          title="Connections that make development real."
        />
        <div className="column prose reveal" style={{ marginTop: '3rem' }}>
          <p className="dropcap">
            The U.S.–Africa Allies Foundation&rsquo;s Opportunities &amp;
            Strategic Connections Platform is designed to facilitate
            meaningful, sustainable partnerships between individuals,
            entrepreneurs, companies, investors, and institutions across the
            United States, Africa, and Israel.
          </p>
          <p>
            We recognize that real development — the kind that transforms
            lives, builds strong nations, and creates generational wealth —
            does not happen through aid alone. It happens when capable people
            and organizations connect purposefully, share resources
            strategically, and work together toward shared goals.
          </p>
          <p>This platform exists to make those connections possible.</p>
        </div>
      </Band>

      {/* §II What we facilitate — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="II"
          eyebrow="What We Facilitate"
          title="Six categories of connection."
        />
        <div className="sheet" style={{ marginTop: '3rem' }}>
          <Ledger
            numbered
            items={[
              { name: 'Trade & Import/Export Partnerships', value: 'U.S. ↔ Africa', italic: true },
              { name: 'Investment Opportunities', value: 'Key sectors · Emerging markets', italic: true },
              { name: 'Strategic Alliances', value: 'Institutions · Governments · NGOs', italic: true },
              { name: 'Diaspora Reconnection', value: 'Global African Diaspora', italic: true },
              { name: 'Israel–Africa–U.S. Trilateral', value: 'Business &amp; innovation', italic: true },
              { name: 'Leadership Development', value: 'Executive exchange', italic: true },
            ]}
          />
        </div>
      </Band>

      {/* §III Who we serve — ivory, pillars */}
      <Band ground="ivory">
        <SectionHeader
          numeral="III"
          eyebrow="Who We Serve"
          title="A broad community of change-makers."
          lede="Whether you are an individual professional or a multinational corporation, there is a pathway designed for you."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar numeral="I"   eyebrow="Individuals & Professionals" title="Career and network builders." body="Professionals, academics, and advocates seeking to build cross-continental careers and networks rooted in purpose." />
          <Pillar numeral="II"  eyebrow="Entrepreneurs & Startups" title="Founders scaling across borders." body="Founders and startups looking to scale across borders, access new markets, and find aligned co-founders and partners." />
          <Pillar numeral="III" eyebrow="Established Companies" title="Market entry and distribution." body="Established businesses seeking market entry, distribution partnerships, and on-the-ground relationships in the U.S. or Africa." />
          <Pillar numeral="IV"  eyebrow="Investors & Capital" title="Vetted opportunities across African economies." body="Impact investors and capital allocators looking for vetted, high-potential opportunities across African economies." />
          <Pillar numeral="V"   eyebrow="Institutions" title="Formal strategic partnerships." body="Universities, research bodies, faith organizations, and government agencies seeking formal strategic partnerships." />
          <Pillar numeral="VI"  eyebrow="African Diaspora" title="Bridges back to the continent." body="African Americans and the global African Diaspora building bridges of investment, knowledge, and culture back to the continent." />
        </div>
      </Band>

      {/* Pullquote — gold */}
      <Band ground="gold">
        <Pullquote>
          By contributing, you are investing in preventive diplomacy,
          principled leadership, and the preservation of freedom.
        </Pullquote>
      </Band>

      {/* §IV Trilateral Framework — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="IV"
          eyebrow="The Trilateral Framework"
          title="Three regions. One opportunity."
          lede="A unique framework connecting three regions with deep historical, cultural, and economic ties — creating opportunities that transcend traditional bilateral approaches."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar numeral="I"   title="United States" body="The world's largest economy, home to a powerful African Diaspora community and leading technology, finance, and agriculture sectors seeking expansion into African markets." />
          <Pillar numeral="II"  title="Africa" body="The world's fastest-growing continent, with 1.4 billion people, abundant natural resources, and a young, entrepreneurial population driving the next wave of global growth." />
          <Pillar numeral="III" title="Israel" body="A global leader in technology, agri-tech, water management, cybersecurity, and innovation — whose expertise is uniquely suited to address key development challenges across Africa." />
        </div>
      </Band>

      {/* §V Opportunity Categories — ivory */}
      <Band ground="ivory">
        <SectionHeader
          numeral="V"
          eyebrow="Opportunity Categories"
          title="Where partnerships happen."
        />
        <div style={{ marginTop: '2rem' }}>
          <Pillar numeral="I"   eyebrow="Commerce" title="Trade & Commerce." body="Import/export facilitation, trade finance, supply chain partnerships, and business-to-business matching across all sectors — agriculture, manufacturing, retail, logistics, and more." />
          <Pillar numeral="II"  eyebrow="Capital" title="Investment Capital." body="Equity investment, impact capital deployment, joint ventures, real estate development, and infrastructure financing across emerging African markets with strong sovereign backing." />
          <Pillar numeral="III" eyebrow="Innovation" title="Innovation Partnerships." body="Technology transfer, joint R&D, fintech, agri-tech, health-tech, and digital infrastructure partnerships — especially leveraging Israeli and U.S. innovation ecosystems." />
          <Pillar numeral="IV"  eyebrow="Cooperation" title="Strategic Cooperation." body="Executive exchange, policy dialogue, academic partnerships, faith-based collaboration, and government-to-government memoranda of understanding." />
        </div>
      </Band>

      {/* §VI Submit profile — navy */}
      <Band ground="navy">
        <SectionHeader
          numeral="VI"
          eyebrow="Submit Your Profile"
          title="Let us match you with the right partners."
          lede="Submit your opportunity profile and our team will match you with the right partners, investors, or collaborators across the U.S.–Africa–Israel corridor."
        />
        <Ornament color="rgba(203,165,78,.8)" />
        <div className="reveal" style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
          <StampButton href="mailto:daniel.edah@usafricaallies.org?subject=Opportunities Platform" variant="filled" label="Submit Profile" subLabel="Begin →" />
          <StampButton href="/summit" variant="outline" label="The Summit" subLabel="June MMXXVI" />
        </div>
      </Band>
    </>
  );
}
