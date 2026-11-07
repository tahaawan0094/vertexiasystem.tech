import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import CornerBracket from './CornerBracket';
import './Work.css';

export default function Work() {
  const projects = [
    {
      id: '01',
      meta: 'PHARMACY · MANAGEMENT',
      title: 'PHARMACY POS',
      subtext: 'Complete billing, inventory management, and expiry tracking with owner mobile app sync.',
      img: '/Products section/32aaabb4-7092-4d41-b2c7-7378e46ed4fd.webp',
      href: '#contact',
    },
    {
      id: '02',
      meta: 'AUTOMOTIVE · WORKSHOP',
      title: 'GARAGE CRM & POS',
      subtext: 'Streamlined work orders, vehicle tracking, quotations, and mechanics management.',
      img: '/Products section/a6399e82-3731-46e4-a1db-1ea86b38e858.webp',
      href: '#contact',
    },
    {
      id: '03',
      meta: 'FOOD & BEVERAGE · POS',
      title: 'RESTAURANT MANAGEMENT SOFTWARE',
      subtext: 'Efficient order workflow, kitchen management, and fast counter billing system.',
      img: '/Products section/b51ff4b4-db00-41cb-9548-35f42bb03b18.webp',
      href: '#contact',
    },
    {
      id: '04',
      meta: 'RETAIL · COMING SOON',
      title: 'VERTEXIA MINI MART CRM',
      subtext: 'Comprehensive retail store management, stock control, and cash flow tracking.',
      img: '/Products section/b51ff4b4-db00-41cb-9548-35f42bb03b18.webp',
      href: '#contact',
    },
  ];

  return (
    <section className="work-section" id="work" aria-label="Products we shipped.">
      <div className="work-container">
        {/* Section Header */}
        <div className="work-head">
          <div className="work-title-group">
            <div className="work-pill">
              <span className="pill-cube" aria-hidden="true"></span>
              <span className="pill-bracket">[</span>
              <span className="pill-label">SELECTED WORK</span>
              <span className="pill-bracket">]</span>
            </div>

            <h2 className="work-headline">
              PRODUCTS WE <span className="work-accent">SHIPPED.</span>
            </h2>
          </div>

          <p className="work-description">
            Practical software systems and management solutions built for modern businesses. Designed for everyday operational efficiency.
          </p>
        </div>

        {/* 2-Column Projects Grid */}
        <div className="work-grid" role="list">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.href}
              className="work-card"
              role="listitem"
            >
              {/* Card Image Container */}
              <div className="card-media">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="card-img"
                />
                <span className="card-badge">
                  {project.id}
                </span>
              </div>

              {/* Card Meta & Title */}
              <span className="card-meta">{project.meta}</span>
              <h3 className="card-title">{project.title}</h3>

              {/* Card Sub-text / Stat Bar */}
              <div className="card-metric-row">
                <p className="card-subtext">{project.subtext}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA Button: ALL CASE STUDIES */}
        <div className="work-bottom-cta">
          <CornerBracket offset={4} cornerColor="rgba(20, 18, 27, 0.45)">
            <a href="#contact" className="action-button btn-case-studies">
              <span className="btn-title">ALL CASE STUDIES</span>
              <span className="btn-icon-box box-black">
                <ArrowUpRight size={14} strokeWidth={2.8} />
              </span>
            </a>
          </CornerBracket>
        </div>
      </div>
    </section>
  );
}
