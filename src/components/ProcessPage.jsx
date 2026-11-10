import React, { useEffect } from 'react';
import Navbar from './Navbar';
import PixelDigits from './PixelDigits';
import Impact from './Impact';
import FAQ from './FAQ';
import ContactCTA from './ContactCTA';
import Footer from './Footer';
import './ProcessPage.css';

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

export default function ProcessPage() {
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <div className="process-page-root">
      {/* Top Navbar */}
      <div className="page-container" style={{ paddingTop: '16px' }}>
        <Navbar />
      </div>

      {/* =========================================================================
          SECTION 1: HERO (Full-width Dark Canvas #070708 with Seamless Glow)
          ========================================================================= */}
      <section className="prc-hero-section" aria-label="From Idea to Launch">
        {/* Full-width glow layer (fades smoothly to transparent with no hard cutoff) */}
        <div className="prc-hero-glow-layer" aria-hidden="true">
          <div className="prc-hero-glow" />
        </div>

        <div className="prc-hero-container">
          <div className="prc-hero-grid">
            {/* Left Column: Breadcrumb, Eyebrow, Heading, Subtext & Stats Strip */}
            <div className="prc-hero-left">
              <div className="prc-breadcrumb">
                <span>HOME</span>
                <span className="prc-bc-sep">/</span>
                <span>PROCESS</span>
              </div>

              <div className="prc-eyebrow">
                <span className="prc-eyebrow-dot" aria-hidden="true" />
                <span className="prc-eyebrow-bracket">[</span>
                <span>03</span>
                <span className="prc-eyebrow-bracket">]</span>
                <span>PROCESS</span>
              </div>

              <h1 className="prc-hero-title">
                FROM IDEA<br />
                TO <span className="prc-hero-accent">LAUNCH.</span>
              </h1>

              <p className="prc-hero-sub">
                One board you can see, a demo every two weeks and a fixed quote for the first release. No black box.
              </p>

              <div className="prc-stats-strip">
                <div className="prc-stat-col">
                  <span className="prc-stat-label">TO AN MVP</span>
                  <span className="prc-stat-num prc-stat-accent">8 wk</span>
                </div>
                <div className="prc-stat-divider" aria-hidden="true" />
                <div className="prc-stat-col">
                  <span className="prc-stat-label">SPRINTS</span>
                  <span className="prc-stat-num">2 wk</span>
                </div>
                <div className="prc-stat-divider" aria-hidden="true" />
                <div className="prc-stat-col">
                  <span className="prc-stat-label">REPLY TIME</span>
                  <span className="prc-stat-num">1 day</span>
                </div>
              </div>
            </div>

            {/* Right Column: Pixel Digits Component */}
            <div className="prc-hero-right">
              <PixelDigits value="03" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: PHASES (High-Contrast Bone #ECE7DD Canvas)
          ========================================================================= */}
      <section className="prc-phases-section" aria-label="From Idea to Launch in 8 Weeks">
        <div className="prc-phases-container">
          <div className="prc-phases-head">
            <div>
              <div className="prc-eyebrow" style={{ color: '#070708', marginBottom: '8px' }}>
                <span className="prc-eyebrow-dot" style={{ backgroundColor: '#070708', boxShadow: 'none' }} aria-hidden="true" />
                <span className="prc-eyebrow-bracket">[</span>
                <span>01 / PHASES</span>
                <span className="prc-eyebrow-bracket">]</span>
              </div>
              <h2 className="prc-phases-title">FROM IDEA TO LAUNCH IN 8 WEEKS.</h2>
            </div>
            <p className="prc-phases-sub">
              We ship tested production code every two weeks, not slide decks. Here is how your project moves from kickoff to launch.
            </p>
          </div>

          <div className="prc-phases-list">
            {PHASES.map((p) => (
              <div className="prc-phase-row" key={p.num}>
                <div className="prc-phase-flag" aria-hidden="true">
                  <span className="prc-phase-dot" />
                </div>
                <div className="prc-phase-content">
                  <span className="prc-phase-meta">{p.num}</span>
                  <h3 className="prc-phase-name">{p.title}</h3>
                  <p className="prc-phase-desc">{p.desc}</p>
                  <div className="prc-phase-tags">
                    {p.tags.map((t) => (
                      <span className="prc-phase-tag" key={t}>
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

