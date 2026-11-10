import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Team from './Team';
import ContactCTA from './ContactCTA';
import Footer from './Footer';
import CornerBracket from './CornerBracket';
import './AboutPage.css';

const TESTIMONIALS = [
  {
    id: 'medkit',
    client: 'Pharmacy POS ',
    category: 'PHARMACY POS & INVENTORY',
    quote:
      'Vertexia felt like our own engineering team from week one. They shipped our pharmacy POS with full expiry tracking and barcode sync in under 4 weeks without a single bug on launch day.',
    author: 'Riyaz Ahmed Sheikh',
    role: 'Owner · Noor Pharamacy',
  },
  
  {
    id: 'autodrive',
    client: 'Garage CRM',
    category: 'WORKSHOP MANAGEMENT CRM',
    quote:
      'The automated job card system and WhatsApp invoice delivery completely modernized our garage workflow. Customers love the transparent tracking and instant cost estimates.',
    author: 'Muddasir Daudpota',
    role: 'FOUNDER & CEO · AL Watan Garage, Doha Qatar',
  },
  {
    id: 'hyperretail',
    client: 'HyperRetail PK',
    category: 'MULTI-BRANCH RETAIL POS',
    quote:
      'Fast checkout, reliable offline backup, and seamless stock ledger sync across three busy store locations. Best technology investment we made for our business this year.',
    author: 'Bilal Qureshi',
    role: 'RETAIL OPERATIONS DIRECTOR · HYPERRETAIL',
  },
  {
    id: 'swiftlogistics',
    client: 'SwiftLogistics',
    category: 'REAL-TIME DISPATCH ENGINE',
    quote:
      'They delivered high-throughput fleet tracking APIs on AWS with zero downtime. Scope was strictly respected, communication was crystal clear, and deadlines were beaten.',
    author: 'Sarah Khan',
    role: 'VP OF TECHNOLOGY · SWIFTLOGISTICS',
  },
];

const RULES = [
  {
    num: '01',
    title: 'SENIOR PEOPLE ONLY',
    desc: 'No junior handoffs or unvetted interns. Every sprint is designed, written, and deployed by experienced product engineers who understand business outcomes.',
  },
  {
    num: '02',
    title: 'WORKING SOFTWARE EVERY TWO WEEKS',
    desc: 'No months-long design phases without real code. You get testable staging builds every 14 days, starting from sprint one.',
  },
  {
    num: '03',
    title: 'SCOPE MOVES, DATES DO NOT',
    desc: 'We cut non-critical fluff rather than delaying launches. Deadlines are immovable commitments, protected ruthlessly so you hit the market on time.',
  },
  {
    num: '04',
    title: 'YOU OWN EVERYTHING',
    desc: 'Repositories, cloud infrastructure, API keys, database credentials, and IP belong to you from day zero with zero proprietary vendor lock-in.',
  },
];

const TIMELINE = [
  {
    year: '2022',
    title: 'FIRST MVP RELEASE',
    desc: 'Began building lightweight bespoke systems and business utility tools for local Pakistani vendors.',
  },
  {
    year: '2023',
    title: 'POS & ERP ENGINES',
    desc: 'Engineered high-throughput pharmacy and restaurant POS engines operating seamlessly offline.',
  },
  {
    year: '2024',
    title: 'STUDIO FOUNDED',
    desc: 'Formally established Vertexia as an independent software development studio in Karachi.',
  },
  {
    year: '2025',
    title: 'AI & SCALE SYSTEMS',
    desc: 'Integrated custom LLMs, automated agentic pipelines, and multi-branch database synchronization.',
  },
  {
    year: '2026',
    title: 'SHIPPING WORLDWIDE',
    desc: 'Deploying robust production applications, enterprise POS architectures, and full-stack software globally.',
    isCurrent: true,
  },
];

export default function AboutPage() {
  const [activeClient, setActiveClient] = useState(TESTIMONIALS[0].id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const currentTestimonial =
    TESTIMONIALS.find((t) => t.id === activeClient) || TESTIMONIALS[0];

  return (
    <div className="about-page-root">
      {/* Top Navbar */}
      <div className="page-container" style={{ paddingTop: '16px' }}>
        <Navbar />
      </div>

      {/* =========================================================================
          SECTION 1: HERO / STORY (Dark Canvas #070708)
          ========================================================================= */}
      <section className="abt-hero-section" aria-label="About Vertexia">
        <div className="abt-hero-glow" aria-hidden="true" />

        <div className="abt-eyebrow">
          <span className="abt-eyebrow-dot" aria-hidden="true" />
          <span className="abt-eyebrow-bracket">[</span>
          <span>ABOUT VERTEXIA</span>
          <span className="abt-eyebrow-bracket">]</span>
        </div>

        <h1 className="abt-hero-title">
          WE BUILD SOFTWARE STARTUPS CAN <span className="abt-hero-title-accent">BET ON.</span>
        </h1>

        <div className="abt-hero-grid">
          <div className="abt-story-copy">
            <p className="abt-lead-text">
              Vertexia started in Karachi in 2024 with engineers who were tired of returning sprint ideas from slow agencies. We wanted to build like the people who run the work are the people who write the code.
            </p>
            <p className="abt-sub-text">
              Today our studio engineers production-grade software, full-stack web apps, and automated point-of-sale systems for startups and scaling businesses across Pakistan and internationally.
            </p>
            <p className="abt-sub-text">
              We work in fast, two-week cycles with small, senior-heavy pods. No layers of non-technical managers, no vague estimates, and zero corporate bloat.
            </p>
          </div>

          <div className="abt-photo-wrap">
            <div className="abt-photo-frame">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Vertexia engineering team working on production code in Karachi"
                className="abt-photo-img"
                loading="eager"
              />
            </div>
            <div className="abt-photo-caption">
              <span className="abt-eyebrow-dot" aria-hidden="true" />
              <span>LIVE ENGINEERING FLOOR · KARACHI, PAKISTAN</span>
            </div>
          </div>
        </div>

        {/* 4 Stats */}
        <div className="abt-stats-row">
          <div className="abt-stat-item">
            <span className="abt-stat-num">2024</span>
            <span className="abt-stat-label">FOUNDED IN KARACHI</span>
          </div>
          <div className="abt-stat-item">
            <span className="abt-stat-num">38</span>
            <span className="abt-stat-label">SPRINTS SHIPPED</span>
          </div>
          <div className="abt-stat-item">
            <span className="abt-stat-num">140K+</span>
            <span className="abt-stat-label">LINES OF CODE</span>
          </div>
          <div className="abt-stat-item">
            <span className="abt-stat-num">9</span>
            <span className="abt-stat-label">CORE ENGINEERS</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: FOUR RULES WE DO NOT BEND (High-Contrast Bone #ECE7DD Canvas)
          ========================================================================= */}
      <section className="abt-rules-section" aria-label="Four Rules We Do Not Bend">
        <div className="abt-rules-container">
          <div className="abt-rules-header">
            <div>
              <div className="abt-eyebrow" style={{ color: '#070708', marginBottom: '8px' }}>
                <span className="abt-eyebrow-dot" style={{ backgroundColor: '#070708', boxShadow: 'none' }} aria-hidden="true" />
                <span className="abt-eyebrow-bracket">[</span>
                <span>01 / PRINCIPLES</span>
                <span className="abt-eyebrow-bracket">]</span>
              </div>
              <h2 className="abt-rules-title">FOUR RULES WE DO NOT BEND</h2>
            </div>
            <p className="abt-rules-sub">
              We work differently from traditional IT contractors. Here is how we safeguard every dollar, week, and release you invest with us.
            </p>
          </div>

          <div className="abt-rules-grid">
            {RULES.map((rule) => (
              <div className="abt-rule-card" key={rule.num}>
                <div className="abt-rule-top">
                  <span className="abt-rule-num">{rule.num}</span>
                  <span className="abt-rule-square" aria-hidden="true" />
                </div>
                <div className="abt-rule-body">
                  <h3 className="abt-rule-title">{rule.title}</h3>
                  <p className="abt-rule-desc">{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: TIMELINE / YEARS OF SHIPPING (Bone #ECE7DD Canvas)
          ========================================================================= */}
      <section className="abt-timeline-section" aria-label="Years of Shipping Timeline">
        <div className="abt-timeline-container">
          <div className="abt-timeline-header">
            <div className="abt-eyebrow" style={{ color: '#070708', marginBottom: '8px' }}>
              <span className="abt-eyebrow-dot" style={{ backgroundColor: '#070708', boxShadow: 'none' }} aria-hidden="true" />
              <span className="abt-eyebrow-bracket">[</span>
              <span>02 / TIMELINE</span>
              <span className="abt-eyebrow-bracket">]</span>
            </div>
            <h2 className="abt-timeline-title">
              YEARS OF <span className="abt-timeline-accent">SHIPPING</span>
            </h2>
          </div>

          <div className="abt-timeline-grid">
            {TIMELINE.map((item) => (
              <div
                key={item.year}
                className={`abt-milestone ${item.isCurrent ? 'is-current' : ''}`}
              >
                <div className="abt-milestone-dot" aria-hidden="true" />
                <div className="abt-milestone-year">{item.year}</div>
                <h4 className="abt-milestone-title">{item.title}</h4>
                <p className="abt-milestone-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: THE PEOPLE WHO SHIP IT (Team Component on Bone Canvas)
          ========================================================================= */}
      <Team />

      {/* =========================================================================
          SECTION 5: CLIENT PROOF / TESTIMONIALS (Dark Canvas #070708)
          ========================================================================= */}
      <section className="abt-proof-section" aria-label="Client Testimonials">
        <div className="abt-proof-container">
          <div className="abt-proof-header">
            <div className="abt-eyebrow">
              <span className="abt-eyebrow-dot" aria-hidden="true" />
              <span className="abt-eyebrow-bracket">[</span>
              <span>03 / TESTIMONIALS</span>
              <span className="abt-eyebrow-bracket">]</span>
            </div>
            <h2 className="abt-proof-title">
              APPROVED BY THE TEAMS WE <span className="abt-hero-title-accent">BUILD FOR.</span>
            </h2>
          </div>

          <div className="abt-proof-grid">
            {/* Left: Interactive Client Tabs */}
            <div className="abt-client-list">
              {TESTIMONIALS.map((t) => (
                <button
                  type="button"
                  key={t.id}
                  className={`abt-client-tab ${activeClient === t.id ? 'is-active' : ''}`}
                  onClick={() => setActiveClient(t.id)}
                >
                  <span className="abt-tab-title">{t.client}</span>
                  <span className="abt-tab-cat">{t.category}</span>
                </button>
              ))}
            </div>

            {/* Right: Terminal Quote Box */}
            <div className="abt-quote-terminal">
              <div>
                <div className="abt-terminal-top">
                  <div className="abt-traffic-lights" aria-hidden="true">
                    <span className="abt-tl-dot" />
                    <span className="abt-tl-dot" />
                    <span className="abt-tl-dot purple" />
                  </div>
                  <span className="abt-terminal-tag">VERIFIED CLIENT REVIEW // {currentTestimonial.client}</span>
                </div>
                <p className="abt-quote-text">“{currentTestimonial.quote}”</p>
              </div>

              <div className="abt-quote-author">
                <span className="abt-author-name">{currentTestimonial.author}</span>
                <span className="abt-author-role">{currentTestimonial.role}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: 3D THREE.JS CUBE CALL TO ACTION
          ========================================================================= */}
      <ContactCTA />

      {/* =========================================================================
          SECTION 7: FOOTER
          ========================================================================= */}
      <Footer />
    </div>
  );
}

