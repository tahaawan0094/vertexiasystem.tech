import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import CornerBracket from './CornerBracket';
import './Team.css';

export default function Team() {
  const members = [
    {
      id: '01',
      indexLabel: '01 / 04',
      name: 'TAHA AWAN',
      role: 'FOUNDER & CEO',
      bio: "Leads Vertexia's vision and technical direction, building practical business management systems and POS solutions.",
      img: 'https://framerusercontent.com/images/f1K8uX0R20TR08SVHFRVMcUYynQ.webp?scale-down-to=512',
    },
    {
      id: '02',
      indexLabel: '02 / 04',
      name: 'MUHAMMAD AMMAR',
      role: 'CO-FOUNDER & CTO',
      bio: 'Directs technical infrastructure and core architecture across POS and business CRM deployments.',
      img: '/team/ammar.jpg',
    },
    {
      id: '03',
      indexLabel: '03 / 04',
      name: 'MUZAMMIL',
      role: 'LEAD FULL-STACK ENGINEER',
      bio: 'Builds responsive dashboards, desktop engines, and seamless inventory management workflows.',
      img: 'https://framerusercontent.com/images/ttEI0xj8oO9R62yUVgqNYC5iI.webp?scale-down-to=512',
    },
    {
      id: '04',
      indexLabel: '04 / 04',
      name: 'EXPANDING SOON',
      role: 'JOIN OUR TEAM',
      bio: 'We are always looking for exceptional engineers and designers to join us in Karachi.',
      img: 'https://framerusercontent.com/images/r5DWwmgFNES10VnTX6UQQJmYXI4.webp?scale-down-to=512',
      defaultHover: true, // As shown in screenshot
    },
  ];

  return (
    <section className="team-section" id="about" aria-label="The people who ship it">
      <div className="team-container">
        {/* Section Header */}
        <div className="team-head">
          <div className="team-title-group">
            <div className="team-pill">
              <span className="pill-cube" aria-hidden="true"></span>
              <span className="pill-bracket">[</span>
              <span className="pill-label">THE TEAM</span>
              <span className="pill-bracket">]</span>
            </div>

            <h2 className="team-headline">
              THE PEOPLE WHO <span className="team-accent">SHIP</span> IT
            </h2>
          </div>

          <div className="team-head-side">
            <p className="team-description">
              Senior engineers and system architects who have built products for businesses and scale-ups. The people on your kickoff call are the people writing your code.
            </p>

            <div className="team-cta-wrap">
              <CornerBracket offset={4} cornerColor="rgba(20, 18, 27, 0.45)">
                <a href="#about" className="action-button btn-team-cta">
                  <span className="btn-title">MEET THE WHOLE TEAM</span>
                  <span className="btn-icon-box box-black">
                    <ArrowUpRight size={14} strokeWidth={2.8} />
                  </span>
                </a>
              </CornerBracket>
            </div>
          </div>
        </div>

        {/* 4 Team Member Cards */}
        <div className="team-grid" role="list">
          {members.map((member) => (
            <article
              key={member.id}
              className={`team-card ${member.defaultHover ? 'is-active-card' : ''}`}
              role="listitem"
              tabIndex={0}
            >
              {/* Photo Container */}
              <div className="team-photo-wrapper">
                <img
                  src={member.img}
                  alt={`${member.name}, ${member.role}`}
                  loading="lazy"
                  decoding="async"
                  className="team-photo"
                />

                {/* Index Pill: 01 / 04 */}
                <div className="team-index-pill" aria-hidden="true">
                  <span>{member.indexLabel}</span>
                </div>

                {/* Hover Quote / Bio Overlay */}
                <div className="team-bio-overlay" aria-hidden="true">
                  <p className="team-bio-text">{member.bio}</p>
                </div>
              </div>

              {/* Meta Name & Role */}
              <div className="team-meta">
                <h3 className="member-name">{member.name}</h3>
                <div className="member-role">
                  <span className="role-cube" aria-hidden="true"></span>
                  <span className="role-title">{member.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
