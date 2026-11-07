import React from 'react';
import './Clients.css';

export default function Clients() {
  const solutions = [
    {
      id: '01',
      name: 'PHARMACY POS',
      subtitle: 'Billing, Inventory & Expiry Tracking',
      isComingSoon: false,
    },
    {
      id: '02',
      name: 'GARAGE CRM & POS',
      subtitle: 'Work Orders & Vehicle Management',
      isComingSoon: false,
    },
    {
      id: '03',
      name: 'RESTAURANT SOFTWARE',
      subtitle: 'Order & Kitchen Workflow',
      isComingSoon: false,
    },
    {
      id: '04',
      name: 'MINI MART CRM',
      subtitle: 'Coming Soon',
      isComingSoon: true,
    },
    {
      id: '05',
      name: 'CUSTOM SOFTWARE',
      subtitle: 'Tailored Business Solutions',
      isComingSoon: false,
    },
    {
      id: '06',
      name: 'NEW SYSTEM',
      subtitle: 'Coming Soon',
      isComingSoon: true,
    },
    {
      id: '07',
      name: 'NEW SYSTEM',
      subtitle: 'Coming Soon',
      isComingSoon: true,
    },
    {
      id: '08',
      name: 'NEW SYSTEM',
      subtitle: 'Coming Soon',
      isComingSoon: true,
    },
  ];

  return (
    <section className="clients-section" id="solutions" aria-label="Built for businesses that want to work smarter">
      <div className="clients-container">
        {/* Section Header */}
        <div className="clients-head">
          <div className="clients-title-group">
            <div className="clients-pill">
              <span className="pill-cube" aria-hidden="true"></span>
              <span className="pill-bracket">[</span>
              <span className="pill-label">SOLUTIONS</span>
              <span className="pill-bracket">]</span>
            </div>

            <h2 className="clients-headline">
              BUILT FOR BUSINESSES
              <br />
              THAT WANT TO <span className="headline-accent">WORK SMARTER</span>
            </h2>
          </div>

          <p className="clients-description">
            Practical software systems, POS suites, and custom management solutions designed to streamline daily operations for growing businesses.
          </p>
        </div>

        {/* 8-Grid Solution Cards */}
        <div className="clients-grid" role="list">
          {solutions.map((item) => (
            <div
              key={item.id}
              className={`client-cell ${item.isComingSoon ? 'cell-coming-soon' : ''}`}
              role="listitem"
              tabIndex={0}
            >
              <span className="cell-index">{item.id}</span>

              {/* Default Face (Only Heading) */}
              <div className="cell-content">
                <span className="solution-title">
                  {item.name}
                </span>
              </div>

              {/* Hover Result Slide-up */}
              <div className="cell-hover-overlay" aria-hidden="true">
                <b className="hover-name">{item.name}</b>
                <span className="hover-metric">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
