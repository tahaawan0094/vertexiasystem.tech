import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Check, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import Navbar from './Navbar';
import PixelDigits from './PixelDigits';
import FAQ from './FAQ';
import ContactCTA from './ContactCTA';
import Footer from './Footer';
import CornerBracket from './CornerBracket';
import './PricingPage.css';

export default function PricingPage() {
  const [teamSizeIndex, setTeamSizeIndex] = useState(1); // 0 = 1 Dev, 1 = 2 Devs, 2 = 4 Devs

  const TEAM_OPTIONS = [
    { size: 1, label: '1 ENGINEER', price: '$7,500' },
    { size: 2, label: '2 ENGINEERS', price: '$14,500' },
    { size: 4, label: '4 ENGINEERS', price: '$28,000' },
  ];

  const currentOption = TEAM_OPTIONS[teamSizeIndex] || TEAM_OPTIONS[1];

  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  const handleStartProject = () => {
    const current = window.location.pathname.toLowerCase();
    if (current !== '/contact') {
      window.history.pushState({}, '', '/contact');
      window.dispatchEvent(new PopStateEvent('popstate'));
      if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
      else window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <div className="pricing-page-root">
      {/* Top Navbar */}
      <div className="page-container" style={{ paddingTop: '16px' }}>
        <Navbar />
      </div>

      {/* =========================================================================
          SECTION 1: HERO (Dark #070708 Canvas + Seamless Glow + 04 Pixel Digits)
          ========================================================================= */}
      <section className="prc-hero-section" aria-label="Clear prices, no surprises">
        {/* Full-width seamless glow layer */}
        <div className="prc-hero-glow-layer" aria-hidden="true">
          <div className="prc-hero-glow" />
        </div>

        <div className="prc-hero-container">
          <div className="prc-hero-grid">
            {/* Left Column */}
            <div className="prc-hero-left">
              <div className="prc-breadcrumb">
                <span>HOME</span>
                <span className="prc-bc-sep">/</span>
                <span>PRICING</span>
              </div>

              <div className="prc-eyebrow">
                <span className="prc-eyebrow-dot" aria-hidden="true" />
                <span className="prc-eyebrow-bracket">[</span>
                <span>04</span>
                <span className="prc-eyebrow-bracket">]</span>
                <span>PRICING</span>
              </div>

              <h1 className="prc-hero-title">
                CLEAR PRICES,<br />
                NO <span className="prc-hero-accent">SURPRISES.</span>
              </h1>

              <p className="prc-hero-sub">
                A fixed quote for the first release, monthly sprints for what comes after, and a team that only takes what we can ship on time.
              </p>

              <div className="prc-stats-strip">
                <div className="prc-stat-col">
                  <span className="prc-stat-label">STARTING AT</span>
                  <span className="prc-stat-num prc-stat-accent">$18k</span>
                </div>
                <div className="prc-stat-divider" aria-hidden="true" />
                <div className="prc-stat-col">
                  <span className="prc-stat-label">FIRST RELEASE</span>
                  <span className="prc-stat-num">30 days</span>
                </div>
                <div className="prc-stat-divider" aria-hidden="true" />
                <div className="prc-stat-col">
                  <span className="prc-stat-label">SURPRISE FEES</span>
                  <span className="prc-stat-num">0</span>
                </div>
              </div>
            </div>

            {/* Right Column: 04 Pixel Digits */}
            <div className="prc-hero-right">
              <PixelDigits value="04" className="prc-pixel-hero" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WAYS TO WORK WITH US (High-contrast Bone #ECE7DD Canvas)
          ========================================================================= */}
      <section className="prc-plans-section" aria-label="Ways to work with us">
        <div className="prc-plans-container">
          {/* Section Header */}
          <div className="prc-plans-header">
            <div className="prc-plans-header-left">
              <div className="prc-phase-eyebrow">
                <span className="prc-phase-dot" aria-hidden="true" />
                <span className="prc-phase-bracket">[</span>
                <span>02 / ENGAGEMENT</span>
                <span className="prc-phase-bracket">]</span>
              </div>
              <h2 className="prc-plans-title">WAYS TO WORK WITH US</h2>
            </div>
            <div className="prc-plans-header-right">
              <p className="prc-plans-lead">
                Whether you need a full product built from scratch or an embedded squad for your existing codebase, we work in fixed two-week sprints.
              </p>
              <div className="prc-sprint-badge">
                <Zap size={13} className="prc-sprint-badge-icon" />
                <span>SPRINT CYCLES</span>
              </div>
            </div>
          </div>

          {/* 3 Pricing Cards Grid */}
          <div className="prc-cards-grid">
            {/* Card 1: MVP SPRINT (Light / White) */}
            <div className="prc-card prc-card-light">
              <div className="prc-card-top">
                <div className="prc-card-badge-row">
                  <span className="prc-card-tag">[ MVP SPRINT ]</span>
                </div>
                <p className="prc-card-subtitle">From zero to a fully shipped first release</p>
                <div className="prc-card-price-box">
                  <span className="prc-price-val">$18,000</span>
                  <span className="prc-price-freq">/ RELEASE</span>
                </div>
              </div>

              <div className="prc-card-divider" />

              <ul className="prc-features-list">
                <li>
                  <span className="prc-feat-bullet" aria-hidden="true" />
                  <span>Fixed scope &amp; fixed budget</span>
                </li>
                <li>
                  <span className="prc-feat-bullet" aria-hidden="true" />
                  <span>Design system + interactive prototype</span>
                </li>
                <li>
                  <span className="prc-feat-bullet" aria-hidden="true" />
                  <span>Full-stack production build</span>
                </li>
                <li>
                  <span className="prc-feat-bullet" aria-hidden="true" />
                  <span>Launch in 30 days guaranteed</span>
                </li>
                <li>
                  <span className="prc-feat-bullet" aria-hidden="true" />
                  <span>30-day post-launch warranty</span>
                </li>
              </ul>

              <div className="prc-card-action">
                <CornerBracket offset={3} cornerColor="rgba(20, 18, 27, 0.35)">
                  <button className="prc-btn prc-btn-light" onClick={handleStartProject}>
                    <span>START AN MVP</span>
                    <span className="prc-btn-arrow">
                      <ArrowUpRight size={14} strokeWidth={2.8} />
                    </span>
                  </button>
                </CornerBracket>
              </div>
            </div>

            {/* Card 2: PRODUCT TEAM (Featured Dark Card with Interactive Slider) */}
            <div className="prc-card prc-card-featured">
              <div className="prc-featured-badge">MOST POPULAR</div>

              <div className="prc-card-top">
                <div className="prc-card-badge-row">
                  <span className="prc-card-tag text-purple">[ PRODUCT TEAM ]</span>
                </div>
                <p className="prc-card-subtitle text-muted">Dedicated engineers assigned to your roadmap</p>

                <div className="prc-card-price-box">
                  <span className="prc-price-val text-white">{currentOption.price}</span>
                  <span className="prc-price-freq text-muted">/ MO</span>
                </div>

                {/* Interactive Team Size Selector */}
                <div className="prc-team-selector">
                  <div className="prc-selector-head">
                    <span className="selector-title">TEAM SIZE</span>
                    <span className="selector-val">{currentOption.label}</span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="2"
                    step="1"
                    value={teamSizeIndex}
                    onChange={(e) => setTeamSizeIndex(Number(e.target.value))}
                    className="prc-range-slider"
                    aria-label="Select team size"
                  />

                  <div className="prc-ticks-row">
                    <button
                      type="button"
                      className={`prc-tick-btn ${teamSizeIndex === 0 ? 'active' : ''}`}
                      onClick={() => setTeamSizeIndex(0)}
                    >
                      1 Dev
                    </button>
                    <button
                      type="button"
                      className={`prc-tick-btn ${teamSizeIndex === 1 ? 'active' : ''}`}
                      onClick={() => setTeamSizeIndex(1)}
                    >
                      2 Devs
                    </button>
                    <button
                      type="button"
                      className={`prc-tick-btn ${teamSizeIndex === 2 ? 'active' : ''}`}
                      onClick={() => setTeamSizeIndex(2)}
                    >
                      4 Devs
                    </button>
                  </div>
                </div>
              </div>

              <div className="prc-card-divider divider-dark" />

              <ul className="prc-features-list text-features-light">
                <li>
                  <span className="prc-feat-bullet bullet-purple" aria-hidden="true" />
                  <span>Dedicated full-stack engineers on your stack</span>
                </li>
                <li>
                  <span className="prc-feat-bullet bullet-purple" aria-hidden="true" />
                  <span>Bi-weekly demo &amp; production deployments</span>
                </li>
                <li>
                  <span className="prc-feat-bullet bullet-purple" aria-hidden="true" />
                  <span>Direct daily Slack / Discord communication</span>
                </li>
                <li>
                  <span className="prc-feat-bullet bullet-purple" aria-hidden="true" />
                  <span>Cancel, pause or scale sprint anytime</span>
                </li>
                <li>
                  <span className="prc-feat-bullet bullet-purple" aria-hidden="true" />
                  <span>Automated CI/CD pipelines &amp; code reviews</span>
                </li>
              </ul>

              <div className="prc-card-action">
                <CornerBracket offset={3} cornerColor="#b692ff">
                  <button className="prc-btn prc-btn-accent" onClick={handleStartProject}>
                    <span>BOOK A TEAM</span>
                    <span className="prc-btn-arrow arrow-dark">
                      <ArrowUpRight size={14} strokeWidth={2.8} />
                    </span>
                  </button>
                </CornerBracket>
              </div>
            </div>

            {/* Card 3: RESCUE & REFACTOR (Light / White) */}
            <div className="prc-card prc-card-light">
              <div className="prc-card-top">
                <div className="prc-card-badge-row">
                  <span className="prc-card-tag">[ RESCUE &amp; REFACTOR ]</span>
                </div>
                <p className="prc-card-subtitle">Fix performance, tech debt &amp; broken builds</p>
                <div className="prc-card-price-box">
                  <span className="prc-price-val">$6,000</span>
                  <span className="prc-price-freq">/ SPRINT</span>
                </div>
              </div>

              <div className="prc-card-divider" />

              <ul className="prc-features-list">
                <li>
                  <span className="prc-feat-bullet" aria-hidden="true" />
                  <span>Comprehensive code &amp; architecture audit</span>
                </li>
                <li>
                  <span className="prc-feat-bullet" aria-hidden="true" />
                  <span>Database query &amp; indexing optimization</span>
                </li>
                <li>
                  <span className="prc-feat-bullet" aria-hidden="true" />
                  <span>Critical security &amp; performance tuning</span>
                </li>
                <li>
                  <span className="prc-feat-bullet" aria-hidden="true" />
                  <span>2-week rapid turnaround sprint</span>
                </li>
                <li>
                  <span className="prc-feat-bullet" aria-hidden="true" />
                  <span>Detailed engineering roadmap &amp; report</span>
                </li>
              </ul>

              <div className="prc-card-action">
                <CornerBracket offset={3} cornerColor="rgba(20, 18, 27, 0.35)">
                  <button className="prc-btn prc-btn-light" onClick={handleStartProject}>
                    <span>REQUEST AUDIT</span>
                    <span className="prc-btn-arrow">
                      <ArrowUpRight size={14} strokeWidth={2.8} />
                    </span>
                  </button>
                </CornerBracket>
              </div>
            </div>
          </div>

          {/* Bottom Guarantee Banner */}
          <div className="prc-guarantee-bar">
            <div className="prc-guarantee-item">
              <span className="prc-guarantee-dot" />
              <span>DAILY ASYNC STANDUPS</span>
            </div>
            <div className="prc-guarantee-item">
              <span className="prc-guarantee-dot" />
              <span>BI-WEEKLY DEMOS</span>
            </div>
            <div className="prc-guarantee-item">
              <span className="prc-guarantee-dot" />
              <span>100% IP OWNERSHIP</span>
            </div>
            <div className="prc-guarantee-item">
              <span className="prc-guarantee-dot" />
              <span>ZERO HIDDEN FEES</span>
            </div>
            <div className="prc-guarantee-item">
              <span className="prc-guarantee-dot" />
              <span>30-DAY WARRANTY</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FAQ (Questions, Answered)
          ========================================================================= */}
      <FAQ />

      {/* =========================================================================
          SECTION 4: CONTACT CTA (Interactive 3D Three.js Cube)
          ========================================================================= */}
      <ContactCTA />

      {/* =========================================================================
          SECTION 5: FOOTER
          ========================================================================= */}
      <Footer />
    </div>
  );
}

