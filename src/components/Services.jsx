import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import CornerBracket from './CornerBracket';
import './Services.css';

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);

  const servicesData = [
    {
      id: '01',
      title: 'WEB APPLICATIONS',
      tabTitle: 'WEB APPLICATIONS',
      slabTitle: 'WEB APPLICATIONS',
      desc: 'Custom web-based business applications, dashboards, and management portals built with modern frameworks.',
      metricNum: '12 ms',
      metricLabel: 'MEDIAN SERVER RESPONSE',
      tools: ['REACT.JS', 'NEXT.JS', 'TAILWIND CSS', 'NODE.JS'],
      layerName: '01 · WEB LAYER',
    },
    {
      id: '02',
      title: 'MOBILE APPS',
      tabTitle: 'MOBILE APPS',
      slabTitle: 'MOBILE APPS',
      desc: 'Cross-platform mobile applications and companion business apps built for seamless operations and real-time alerts.',
      metricNum: '4.9 ★',
      metricLabel: 'AVERAGE CLIENT SATISFACTION',
      tools: ['REACT NATIVE', 'EXPO', 'REST API'],
      layerName: '02 · MOBILE LAYER',
    },
    {
      id: '03',
      title: 'POS SYSTEMS',
      tabTitle: 'POS SYSTEMS',
      slabTitle: 'POS SYSTEMS',
      desc: 'Tailor-made point-of-sale systems with fast billing, inventory management, and expiry tracking.',
      metricNum: '3.8x',
      metricLabel: 'FASTER BILLING & CHECKOUT',
      tools: ['BILLING', 'INVENTORY', 'EXPIRY TRACKING'],
      layerName: '03 · POS LAYER',
    },
    {
      id: '04',
      title: 'CRM & WORKFLOWS',
      tabTitle: 'CRM & WORKFLOWS',
      slabTitle: 'CRM & WORKFLOWS',
      desc: 'Complete customer relationship and operational workflow management for service workshops and retail businesses.',
      metricNum: '+31%',
      metricLabel: 'OPERATIONAL EFFICIENCY',
      tools: ['WORK ORDERS', 'INVOICES', 'CUSTOMERS'],
      layerName: '04 · CRM LAYER',
    },
    {
      id: '05',
      title: 'BILLING & INVOICING SOLUTIONS',
      tabTitle: 'BILLING & INVOICING',
      slabTitle: 'BILLING & INVOICING',
      desc: 'Fast, easy-to-use billing systems for retail stores, pharmacies, and workshops with instant receipt generation.',
      metricNum: '99.98%',
      metricLabel: 'UPTIME & TRANSACTION RELIABILITY',
      tools: ['FAST CHECKOUT', 'INVOICES', 'GST/TAX', 'PRINTER SYNC'],
      layerName: '05 · BILLING LAYER',
    },
    {
      id: '06',
      title: 'CUSTOM SOFTWARE SOLUTIONS',
      tabTitle: 'CUSTOM SOFTWARE',
      slabTitle: 'CUSTOM SOFTWARE',
      desc: 'Fully customized software systems developed precisely according to unique business requirements.',
      metricNum: '2 wk',
      metricLabel: 'TO FIRST WORKING RELEASE',
      tools: ['TAILORED', 'AUTOMATION', 'SCALABLE'],
      layerName: '06 · SOFTWARE LAYER',
    },
  ];

  const current = servicesData[activeIdx];

  return (
    <section className="services-section" id="services" aria-label="Everything a product needs.">
      <div className="services-container">
        {/* Top Header */}
        <div className="services-header">
          <div className="services-badge">
            <span className="badge-cube" aria-hidden="true"></span>
            <span className="badge-bracket">[</span>
            <span className="badge-text">SERVICES</span>
            <span className="badge-bracket">]</span>
          </div>

          <h2 className="services-headline">
            EVERYTHING
            <br />
            A PRODUCT
            <br />
            <span className="services-accent">NEEDS.</span>
          </h2>
        </div>

        {/* Content Columns: Left Details | Right 3D Isometric Slabs */}
        <div className="services-body">
          {/* Left Column: Active Service Details */}
          <div className="services-left-col">
            <div className="service-details-panel" key={current.id}>
              {/* Counter: 01 / 06 */}
              <div className="service-counter">
                <span className="counter-current">{current.id}</span>
                <span className="counter-slash">/</span>
                <span className="counter-total">06</span>
              </div>

              {/* Title */}
              <h3 className="service-title">{current.title}</h3>

              {/* Description */}
              <p className="service-desc">{current.desc}</p>

              {/* Metric Box */}
              <div className="service-metric-row">
                <span className="service-metric-num">{current.metricNum}</span>
                <span className="service-metric-label">{current.metricLabel}</span>
              </div>

              {/* Tools Tags */}
              <div className="service-tools-row">
                {current.tools.map((tool) => (
                  <span key={tool} className="service-tool-tag">
                    <span className="tag-bracket">[</span> {tool} <span className="tag-bracket">]</span>
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <div className="service-btn-wrap">
                <CornerBracket offset={4} cornerColor="rgba(182, 146, 255, 0.8)">
                  <a href="#contact" className="action-button btn-primary-accent">
                    <span className="btn-title">EXPLORE THE SERVICE</span>
                    <span className="btn-icon-box box-black">
                      <ArrowUpRight size={14} strokeWidth={2.8} />
                    </span>
                  </a>
                </CornerBracket>
              </div>
            </div>

            {/* Bottom Service Switcher Index */}
            <div className="services-nav-index">
              {servicesData.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  className={`service-tab-btn ${activeIdx === idx ? 'is-active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <span className="tab-num">{item.id}</span>
                  <span className="tab-name">{item.tabTitle || item.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Isometric Slabs Stack */}
          <div className="services-right-col" aria-hidden="true">
            <div className="isometric-stage">
              <div className="isometric-stack">
                {servicesData.map((item, idx) => {
                  const zIndexOrder = 5 - idx;
                  const isActive = activeIdx === idx;

                  return (
                    <div
                      key={item.id}
                      className={`iso-slab ${isActive ? 'is-active-slab' : ''}`}
                      style={{
                        '--z': zIndexOrder,
                        cursor: 'pointer',
                      }}
                      onClick={() => setActiveIdx(idx)}
                    >
                      {/* Top Face */}
                      <div className="slab-face slab-top">
                        <span className="slab-num">{item.id}</span>
                        <span className="slab-title">{item.slabTitle || item.title}</span>
                        <div className="slab-grid-mesh"></div>
                      </div>

                      {/* Front Edge */}
                      <div className="slab-face slab-front"></div>

                      {/* Right Edge */}
                      <div className="slab-face slab-right"></div>
                    </div>
                  );
                })}
              </div>

              {/* Layer Caption Indicator */}
              <div className="isometric-caption">
                <span className="caption-dot"></span>
                <span>{current.layerName}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
