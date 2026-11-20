import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Zap, Check } from 'lucide-react';
import Navbar from './Navbar';
import PixelDigits from './PixelDigits';
import FAQ from './FAQ';
import ContactCTA from './ContactCTA';
import Footer from './Footer';
import CornerBracket from './CornerBracket';
import './PricingPage.css';

export default function PricingPage() {
  // Center card interactive team configuration (matches Image 1 reference)
  const [engineers, setEngineers] = useState(2); // 1, 2, 3, or 4
  const [addDesigner, setAddDesigner] = useState(false);

  // Pricing formula for custom squad
  const baseRatePerEngineer = 4500;
  const designerRate = 3500;
  const customMonthlyPrice = engineers * baseRatePerEngineer + (addDesigner ? designerRate : 0);

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
                A fixed quote for the first release, monthly plans for cloud sync, and custom engineering teams built to ship on time.
              </p>

              <div className="prc-stats-strip">
                <div className="prc-stat-col">
                  <span className="prc-stat-label">MONTHLY FROM</span>
                  <span className="prc-stat-num prc-stat-accent">$20</span>
                </div>
                <div className="prc-stat-divider" aria-hidden="true" />
                <div className="prc-stat-col">
                  <span className="prc-stat-label">ONE-TIME PASS</span>
                  <span className="prc-stat-num">$199</span>
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
                Choose lifetime software ownership, an agile monthly plan, or hire our dedicated engineering squad for custom builds.
              </p>
              <div className="prc-sprint-badge">
                <Zap size={13} className="prc-sprint-badge-icon" />
                <span>FIXED &amp; TRANSPARENT</span>
              </div>
            </div>
          </div>

          {/* 3 Pricing Cards Grid (Exact Image 1 Structure & Vertexia Theme) */}
          <div className="prc-cards-grid">
            {/* -------------------------------------------------------------
                CARD 1: LEFT CARD (ONE-TIME COST / FIXED PRICE $199)
                ------------------------------------------------------------- */}
            <CornerBracket offset={6} cornerColor="rgba(20, 18, 27, 0.28)" className="prc-card-bracket-frame">
              <div className="prc-card prc-card-light">
                <div className="prc-card-top">
                  <div className="prc-card-header-row">
                    <span className="prc-card-index">01</span>
                    <h3 className="prc-card-title">ONE-TIME LICENSE</h3>
                  </div>

                  <p className="prc-card-subtitle">
                    Complete software with lifetime ownership &amp; zero recurring fees
                  </p>

                  <div className="prc-card-price-row">
                    <span className="prc-card-price-num">$199</span>
                    <span className="prc-card-price-suffix">FIXED PRICE</span>
                  </div>
                </div>

                <div className="prc-card-divider" />

                <ul className="prc-features-list">
                  <li>
                    <span className="prc-feat-bullet" aria-hidden="true" />
                    <span>Pharmacy POS, Restaurant ERP, or Retail POS</span>
                  </li>
                  <li>
                    <span className="prc-feat-bullet" aria-hidden="true" />
                    <span>Offline-first local database &amp; counter sync</span>
                  </li>
                  <li>
                    <span className="prc-feat-bullet" aria-hidden="true" />
                    <span>Barcode billing, inventory &amp; thermal receipt printing</span>
                  </li>
                  <li>
                    <span className="prc-feat-bullet" aria-hidden="true" />
                    <span>Unlimited transactions, items, ledgers &amp; users</span>
                  </li>
                  <li>
                    <span className="prc-feat-bullet" aria-hidden="true" />
                    <span>Lifetime license — pay once, keep forever</span>
                  </li>
                  <li>
                    <span className="prc-feat-bullet" aria-hidden="true" />
                    <span>30 days of launch setup &amp; onboarding support</span>
                  </li>
                </ul>

                <div className="prc-card-action">
                  <CornerBracket offset={3} cornerColor="rgba(20, 18, 27, 0.4)">
                    <button className="prc-btn prc-btn-light" onClick={handleStartProject}>
                      <span className="prc-btn-label">GET ONE-TIME LICENSE</span>
                      <span className="prc-btn-icon-box">
                        <ArrowUpRight size={14} strokeWidth={2.8} />
                      </span>
                    </button>
                  </CornerBracket>
                </div>
              </div>
            </CornerBracket>

            {/* -------------------------------------------------------------
                CARD 2: CENTER CARD (CUSTOM SOFTWARE & DESIGN - FEATURED DARK)
                ------------------------------------------------------------- */}
            <CornerBracket offset={6} cornerColor="#b692ff" className="prc-card-bracket-frame featured-frame">
              <div className="prc-card prc-card-featured">
                <div className="prc-card-top">
                  <div className="prc-card-header-row prc-card-header-between">
                    <div className="prc-card-header-left">
                      <span className="prc-card-index accent">02</span>
                      <h3 className="prc-card-title text-white">CUSTOM SOFTWARE</h3>
                    </div>
                    <span className="prc-card-badge-right">MOST CHOSEN</span>
                  </div>

                  <p className="prc-card-subtitle text-muted">
                    A senior squad that designs, builds &amp; owns your roadmap
                  </p>

                  <div className="prc-card-price-row">
                    <span className="prc-card-price-num text-white">
                      ${customMonthlyPrice.toLocaleString()}
                    </span>
                    <span className="prc-card-price-suffix text-muted">PER MONTH</span>
                  </div>

                  {/* Interactive Engineers Slider & Designer Toggle (Exact Image 1 Layout) */}
                  <div className="prc-interactive-panel">
                    {/* Top Row: ENGINEERS slider */}
                    <div className="prc-panel-header">
                      <span className="prc-panel-label">ENGINEERS</span>
                      <span className="prc-panel-val">{engineers}</span>
                    </div>

                    <div className="prc-slider-track-wrap">
                      <input
                        type="range"
                        min="1"
                        max="4"
                        step="1"
                        value={engineers}
                        onChange={(e) => setEngineers(Number(e.target.value))}
                        className="prc-slider-input"
                        aria-label="Engineers count"
                      />
                      <div className="prc-slider-steps" aria-hidden="true">
                        <span className={`step-dot ${engineers >= 1 ? 'active' : ''}`} />
                        <span className={`step-dot ${engineers >= 2 ? 'active' : ''}`} />
                        <span className={`step-dot ${engineers >= 3 ? 'active' : ''}`} />
                        <span className={`step-dot ${engineers >= 4 ? 'active' : ''}`} />
                      </div>
                    </div>

                    {/* Bottom Row: Toggle Designer */}
                    <div className="prc-panel-toggle-row">
                      <label className="prc-toggle-label">
                        <input
                          type="checkbox"
                          checked={addDesigner}
                          onChange={(e) => setAddDesigner(e.target.checked)}
                          className="prc-toggle-checkbox"
                        />
                        <span className="prc-toggle-custom" aria-hidden="true">
                          {addDesigner && <Check size={12} strokeWidth={3} />}
                        </span>
                        <span className="prc-toggle-text">ADD A FULL-TIME DESIGNER</span>
                      </label>
                      <span className="prc-toggle-price">+$3,500</span>
                    </div>
                  </div>
                </div>

                <div className="prc-card-divider divider-dark" />

                <ul className="prc-features-list text-features-light">
                  <li>
                    <span className="prc-feat-bullet bullet-purple" aria-hidden="true" />
                    <span>{engineers} senior full-stack engineers dedicated to your stack</span>
                  </li>
                  <li>
                    <span className="prc-feat-bullet bullet-purple" aria-hidden="true" />
                    <span>{addDesigner ? 'Dedicated UI/UX product designer included' : 'Product lead & UX design on demand'}</span>
                  </li>
                  <li>
                    <span className="prc-feat-bullet bullet-purple" aria-hidden="true" />
                    <span>Two-week rapid production sprints with live demos</span>
                  </li>
                  <li>
                    <span className="prc-feat-bullet bullet-purple" aria-hidden="true" />
                    <span>Custom architecture, API integrations &amp; AI models</span>
                  </li>
                  <li>
                    <span className="prc-feat-bullet bullet-purple" aria-hidden="true" />
                    <span>100% intellectual property &amp; source code ownership</span>
                  </li>
                  <li>
                    <span className="prc-feat-bullet bullet-purple" aria-hidden="true" />
                    <span>Cancel, pause or scale with 30 days notice</span>
                  </li>
                </ul>

                <div className="prc-card-action">
                  <CornerBracket offset={3} cornerColor="#b692ff">
                    <button className="prc-btn prc-btn-accent" onClick={handleStartProject}>
                      <span className="prc-btn-label">BOOK A TEAM</span>
                      <span className="prc-btn-icon-box box-accent">
                        <ArrowUpRight size={14} strokeWidth={2.8} />
                      </span>
                    </button>
                  </CornerBracket>
                </div>
              </div>
            </CornerBracket>

            {/* -------------------------------------------------------------
                CARD 3: RIGHT CARD (MONTHLY SUBSCRIPTION $20 / MO)
                ------------------------------------------------------------- */}
            <CornerBracket offset={6} cornerColor="rgba(20, 18, 27, 0.28)" className="prc-card-bracket-frame">
              <div className="prc-card prc-card-light">
                <div className="prc-card-top">
                  <div className="prc-card-header-row">
                    <span className="prc-card-index">03</span>
                    <h3 className="prc-card-title">MONTHLY ACCESS</h3>
                  </div>

                  <p className="prc-card-subtitle">
                    Low upfront cost with automated cloud sync, hosting &amp; updates
                  </p>

                  <div className="prc-card-price-row">
                    <span className="prc-card-price-num">$20</span>
                    <span className="prc-card-price-suffix">PER MONTH</span>
                  </div>
                </div>

                <div className="prc-card-divider" />

                <ul className="prc-features-list">
                  <li>
                    <span className="prc-feat-bullet" aria-hidden="true" />
                    <span>Full cloud access to Pharmacy POS or Restaurant ERP</span>
                  </li>
                  <li>
                    <span className="prc-feat-bullet" aria-hidden="true" />
                    <span>Real-time multi-branch &amp; counter synchronization</span>
                  </li>
                  <li>
                    <span className="prc-feat-bullet" aria-hidden="true" />
                    <span>Automated daily offsite cloud backups &amp; recovery</span>
                  </li>
                  <li>
                    <span className="prc-feat-bullet" aria-hidden="true" />
                    <span>Continuous software feature updates &amp; patches</span>
                  </li>
                  <li>
                    <span className="prc-feat-bullet" aria-hidden="true" />
                    <span>Unlimited customer records, receipts &amp; accounts</span>
                  </li>
                  <li>
                    <span className="prc-feat-bullet" aria-hidden="true" />
                    <span>Priority WhatsApp, phone &amp; remote desktop support</span>
                  </li>
                </ul>

                <div className="prc-card-action">
                  <CornerBracket offset={3} cornerColor="rgba(20, 18, 27, 0.4)">
                    <button className="prc-btn prc-btn-light" onClick={handleStartProject}>
                      <span className="prc-btn-label">START MONTHLY PLAN</span>
                      <span className="prc-btn-icon-box">
                        <ArrowUpRight size={14} strokeWidth={2.8} />
                      </span>
                    </button>
                  </CornerBracket>
                </div>
              </div>
            </CornerBracket>
          </div>

          {/* Bottom Disclaimers Bar (Exact Image 1 Style) */}
          <div className="prc-footer-disclaimer">
            <span>PRICES IN USD. FIXED QUOTES AFTER A FREE SCOPING CALL. NO LOCK-IN: PLANS PAUSE OR CANCEL WITH 30 DAYS NOTICE.</span>
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
