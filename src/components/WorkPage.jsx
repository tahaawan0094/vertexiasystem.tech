import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Impact from './Impact';
import FAQ from './FAQ';
import ContactCTA from './ContactCTA';
import Footer from './Footer';
import './WorkPage.css';

// 6x8 LED Matrix Bitmaps for Digits 0 and 3
const DIGIT_0 = [
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 1],
  [1, 0, 0, 1, 1, 1],
  [1, 0, 1, 1, 1, 1],
  [1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

const DIGIT_3 = [
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1, 1],
  [0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

const PHASES = [
  {
    num: 'PHASE 01',
    title: 'DISCOVER',
    desc: 'We analyze your business requirements, map out workflows, and define the exact system scope with fixed milestone timelines.',
    tags: ['REQUIREMENT ANALYSIS', 'WORKFLOW MAPPING', 'SCOPE & ESTIMATE'],
  },
  {
    num: 'PHASE 02',
    title: 'DESIGN',
    desc: 'Intuitive UI/UX design, interactive cashier screens, and clickably tested user flows for maximum cashier speed and clarity.',
    tags: ['POS INTERFACE', 'USER FLOWS', 'DESIGN SYSTEM'],
  },
  {
    num: 'PHASE 03',
    title: 'BUILD',
    desc: 'Core architecture, database design, API integrations, and robust automated test suites shipped in rapid 14-day production sprints.',
    tags: ['CORE ARCHITECTURE', 'POS & INVENTORY', 'TESTING & QA'],
  },
  {
    num: 'PHASE 04',
    title: 'SHIP',
    desc: 'Production deployment on local hardware or cloud infrastructure, staff onboarding, and ongoing live system telemetry.',
    tags: ['DEPLOYMENT', 'STAFF TRAINING', 'ONGOING SUPPORT'],
  },
];

export default function WorkPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="work-page-root">
      {/* Top Navbar */}
      <div className="page-container" style={{ paddingTop: '16px' }}>
        <Navbar />
      </div>

      {/* =========================================================================
          SECTION 1: HERO (Dark Canvas #070708)
          ========================================================================= */}
      <section className="wrk-hero-section" aria-label="From Idea to Launch">
        <div className="wrk-hero-glow" aria-hidden="true" />

        <div className="wrk-hero-grid">
          {/* Left Column: Heading, Subtext & Stats */}
          <div className="wrk-hero-left">
            <div className="wrk-eyebrow">
              <span className="wrk-eyebrow-dot" aria-hidden="true" />
              <span className="wrk-eyebrow-bracket">[</span>
              <span>THE PROCESS</span>
              <span className="wrk-eyebrow-bracket">]</span>
            </div>

            <h1 className="wrk-hero-title">
              FROM IDEA<br />
              TO <span className="wrk-hero-accent">LAUNCH.</span>
            </h1>

            <p className="wrk-hero-sub">
              The exact path we take to turn your brief into production-ready software, one working sprint at a time.
            </p>

            <div className="wrk-stats-row">
              <div className="wrk-stat-item">
                <span className="wrk-stat-num">8 wk</span>
                <span className="wrk-stat-label">AVG TIME TO LAUNCH</span>
              </div>
              <div className="wrk-stat-item">
                <span className="wrk-stat-num">2 wk</span>
                <span className="wrk-stat-label">FIRST WORKING RELEASE</span>
              </div>
              <div className="wrk-stat-item">
                <span className="wrk-stat-num">1 day</span>
                <span className="wrk-stat-label">REPLY TIME</span>
              </div>
            </div>
          </div>

          {/* Right Column: Retro LED Pixel Matrix (03 Process Indicator) */}
          <div className="wrk-hero-right">
            <div className="wrk-matrix-chassis" aria-hidden="true">
              <div className="wrk-matrix-header">
                <span className="wrk-matrix-tag">SYSTEM // VELOCITY MATRIX</span>
                <div className="wrk-matrix-live">
                  <span className="wrk-live-dot" />
                  <span>ONLINE</span>
                </div>
              </div>

              <div className="wrk-matrix-display">
                {/* Digit 0 (White Glowing Pixels) */}
                <div className="wrk-digit-grid">
                  {DIGIT_0.map((row, rIdx) =>
                    row.map((active, cIdx) => (
                      <div
                        key={`d0-${rIdx}-${cIdx}`}
                        className={`wrk-pixel ${active ? 'active-white' : ''}`}
                      />
                    ))
                  )}
                </div>

                {/* Digit 3 (Vertexia Purple Glowing Pixels) */}
                <div className="wrk-digit-grid">
                  {DIGIT_3.map((row, rIdx) =>
                    row.map((active, cIdx) => (
                      <div
                        key={`d3-${rIdx}-${cIdx}`}
                        className={`wrk-pixel ${active ? 'active-purple' : ''}`}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: PHASES (High-Contrast Bone #ECE7DD Canvas)
          ========================================================================= */}
      <section className="wrk-phases-section" aria-label="From Idea to Launch in 8 Weeks">
        <div className="wrk-phases-container">
          <div className="wrk-phases-head">
            <div>
              <div className="wrk-eyebrow" style={{ color: '#070708', marginBottom: '8px' }}>
                <span className="wrk-eyebrow-dot" style={{ backgroundColor: '#070708', boxShadow: 'none' }} aria-hidden="true" />
                <span className="wrk-eyebrow-bracket">[</span>
                <span>01 / PHASES</span>
                <span className="wrk-eyebrow-bracket">]</span>
              </div>
              <h2 className="wrk-phases-title">FROM IDEA TO LAUNCH IN 8 WEEKS.</h2>
            </div>
            <p className="wrk-phases-sub">
              We ship tested production code every two weeks, not slide decks. Here is how your project moves from kickoff to launch.
            </p>
          </div>

          <div className="wrk-phases-list">
            {PHASES.map((p) => (
              <div className="wrk-phase-row" key={p.num}>
                <div className="wrk-phase-flag" aria-hidden="true">
                  <span className="wrk-phase-dot" />
                </div>
                <div className="wrk-phase-content">
                  <span className="wrk-phase-meta">{p.num}</span>
                  <h3 className="wrk-phase-name">{p.title}</h3>
                  <p className="wrk-phase-desc">{p.desc}</p>
                  <div className="wrk-phase-tags">
                    {p.tags.map((t) => (
                      <span className="wrk-phase-tag" key={t}>
                        [ {t} ]
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: IMPACT (A Year of Shipping, One Square a Day)
          ========================================================================= */}
      <Impact />

      {/* =========================================================================
          SECTION 4: FAQ (Questions, Answered)
          ========================================================================= */}
      <FAQ />

      {/* =========================================================================
          SECTION 5: 3D THREE.JS CUBE CTA
          ========================================================================= */}
      <ContactCTA />

      {/* =========================================================================
          SECTION 6: FOOTER
          ========================================================================= */}
      <Footer />
    </div>
  );
}

