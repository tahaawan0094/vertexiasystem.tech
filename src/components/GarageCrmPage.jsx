import React, { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import PixelCar from './PixelCar';
import CubeScene from './CubeScene';
import {
  GARAGE_CRM_PRICING,
  JOB_BOARD_COLUMNS,
  WORKFLOW_STEPS,
  FEATURES_LIST,
  GARAGE_FAQ,
} from '../constants/garageCrmData';
import './GarageCrmPage.css';

export default function GarageCrmPage() {
  // FAQ Terminal Typing Effect
  const [activeFaq, setActiveFaq] = useState(0);
  const [typedAnswer, setTypedAnswer] = useState(GARAGE_FAQ[0].a);
  const typingTimerRef = useRef(null);

  // Closing CTA form state
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Scroll to top on mount
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // Dynamic SEO Metadata
    document.title = 'Garage CRM & POS — Garage CRM Suite | VERTEXIA';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Garage CRM Suite by Vertexia: job cards, vehicle history, spare parts and invoices in one Windows app for workshops. $10 per month or $100 per year.'
    );

    // Dynamic JSON-LD Structured Data
    let scriptTag = document.getElementById('garage-crm-jsonld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'garage-crm-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Garage CRM Suite',
      operatingSystem: 'Windows',
      applicationCategory: 'BusinessApplication',
      offers: [
        {
          '@type': 'Offer',
          name: 'Monthly Plan',
          price: String(GARAGE_CRM_PRICING.monthly),
          priceCurrency: GARAGE_CRM_PRICING.currency,
          description: '$10 per month for complete Garage CRM Suite with ongoing updates and support.',
        },
        {
          '@type': 'Offer',
          name: 'Yearly Plan',
          price: String(GARAGE_CRM_PRICING.yearly),
          priceCurrency: GARAGE_CRM_PRICING.currency,
          description: '$100 per year, saving $20 compared with monthly billing.',
        },
      ],
      description:
        'Streamlined job cards, vehicle history, customer management, inventory and invoices for automotive workshops.',
    });

    // IntersectionObserver for scroll-reveal on below-the-fold elements
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isReducedMotion) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('crm-in-view');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );

      const elements = document.querySelectorAll('.crm-reveal, .crm-reveal-card');
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
  }, []);

  // FAQ terminal typing effect with reduced motion support
  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fullText = GARAGE_FAQ[activeFaq].a;

    if (isReducedMotion) {
      setTypedAnswer(fullText);
      return;
    }

    setTypedAnswer('');
    let n = 0;
    clearInterval(typingTimerRef.current);
    typingTimerRef.current = setInterval(() => {
      n += 2;
      setTypedAnswer(fullText.slice(0, n));
      if (n >= fullText.length) {
        clearInterval(typingTimerRef.current);
      }
    }, 18);

    return () => clearInterval(typingTimerRef.current);
  }, [activeFaq]);

  // Navigate to contact/quote page
  const handleGetStarted = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', '/contact');
    window.dispatchEvent(new PopStateEvent('popstate'));
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Scroll to section helper
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -20, duration: 1.3 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Form submit handler
  const handleCtaSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch('https://formsubmit.co/ajax/system@vertexiasystem.tech', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email,
          _subject: 'Garage CRM Suite Quote Request',
          product: 'Garage CRM & POS',
        }),
      });
    } catch (err) {
      console.warn('Submission notice:', err);
    } finally {
      setSubmitted(true);
    }
  };

  return (
    <div className="crm-page-root">
      {/* Real Site Navbar */}
      <div className="page-container" style={{ paddingTop: '16px' }}>
        <Navbar />
      </div>

      {/* =========================================================================
          SECTION 1: HERO (Dark #070708 + Pixel Car + 3 Stats)
          ========================================================================= */}
      <header className="crm-hero-sec" id="top">
        <div className="crm-wrap">
          <div className="crm-hero-grid">
            <div className="crm-hero-copy">
              <div className="crm-eb">[ Products / Garage CRM &amp; POS ]</div>
              <h1 className="crm-h1">
                Garage CRM that keeps jobs <em>moving.</em>
              </h1>
              <p className="crm-lead">
                Vehicles, job cards, parts and invoices in one Windows app.
              </p>
              <div className="crm-cta-row">
                <a
                  href="#pricing"
                  onClick={(e) => handleScrollTo(e, '#pricing')}
                  className="crm-btn crm-btn-br"
                >
                  <span>Get the CRM</span>
                  <i aria-hidden="true">↗</i>
                </a>
                <a
                  href="#board"
                  onClick={(e) => handleScrollTo(e, '#board')}
                  className="crm-btn crm-btn-outline"
                >
                  <span>See the job board</span>
                  <i aria-hidden="true">↓</i>
                </a>
              </div>
            </div>

            {/* Right: 62x19 Data-driven Pixel Sports Car */}
            <div className="crm-hero-visual">
              <PixelCar />
            </div>
          </div>

          {/* 3 Stats Bar */}
          <div className="crm-stats-row">
            <div className="crm-stat-box">
              <b className="crm-stat-val">${GARAGE_CRM_PRICING.monthly}</b>
              <span className="crm-stat-label">Per month</span>
            </div>
            <div className="crm-stat-box">
              <b className="crm-stat-val">${GARAGE_CRM_PRICING.yearly}</b>
              <span className="crm-stat-label">Per year</span>
            </div>
            <div className="crm-stat-box">
              <b className="crm-stat-val">0</b>
              <span className="crm-stat-label">Surprise fees</span>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          SECTION 2: JOB BOARD (Cream #E9E5DA - Sample 4-Column Board)
          ========================================================================= */}
      <section className="crm-sec crm-sec-light" id="board">
        <div className="crm-wrap">
          <div className="crm-sec-head crm-reveal">
            <div>
              <div className="crm-eb">[ 01 / Job board ]</div>
              <h2 className="crm-h2">
                Every car in the shop, <em>at a glance.</em>
              </h2>
            </div>
            <p className="crm-head-p">
              Move a job from check-in to delivery and see what is waiting, in repair or ready for pickup.
            </p>
          </div>

          {/* Kanban Job Board */}
          <div
            className="crm-kanban-board crm-card-br crm-reveal"
            role="img"
            aria-label="Sample job board with four columns: Checked in, In repair, Ready, Delivered"
          >
            {JOB_BOARD_COLUMNS.map((col) => (
              <div key={col.id} className="crm-kanban-col">
                <h4 className="crm-kanban-col-head">
                  <span>{col.title}</span>
                  <b>{col.count}</b>
                </h4>
                <div className="crm-kanban-cards">
                  {col.cards.map((card, idx) => (
                    <div
                      key={idx}
                      className={`crm-job-card ${card.isHot ? 'crm-card-hot' : ''}`}
                    >
                      <span className="crm-card-plate">{card.plate}</span>
                      <strong className="crm-card-car">{card.car}</strong>
                      <span className="crm-card-details">{card.details}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="crm-board-footnote crm-reveal">
            Sample data shown for illustration.
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WORKFLOW (Dark #070708 - 4 Steps)
          ========================================================================= */}
      <section className="crm-sec crm-sec-dark" id="workflow">
        <div className="crm-wrap">
          <div className="crm-sec-head crm-reveal">
            <div>
              <div className="crm-eb">[ 02 / Workflow ]</div>
              <h2 className="crm-h2">
                From check-in to delivery in <em>four steps.</em>
              </h2>
            </div>
            <p className="crm-head-p">
              It follows how a workshop already runs, so your team doesn’t need weeks of training.
            </p>
          </div>

          <div className="crm-flow-grid">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="crm-flow-step crm-reveal-card"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <i className="crm-flow-corner" aria-hidden="true" />
                <span className="crm-flow-num">{step.num}</span>
                <h3 className="crm-flow-title">{step.title}</h3>
                <p className="crm-flow-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FEATURES (Cream #E9E5DA - 8 Workshop Cards)
          ========================================================================= */}
      <section className="crm-sec crm-sec-light" id="features">
        <div className="crm-wrap">
          <div className="crm-sec-head crm-reveal">
            <div>
              <div className="crm-eb">[ 03 / Features ]</div>
              <h2 className="crm-h2">
                Built for the <em>workshop.</em>
              </h2>
            </div>
            <p className="crm-head-p">
              Practical tools for garages, not a generic CRM with a car icon.
            </p>
          </div>

          <div className="crm-feat-grid">
            {FEATURES_LIST.map((feat, idx) => (
              <div
                key={idx}
                className={`crm-card crm-card-br crm-reveal-card ${
                  feat.isSpan2 ? 'crm-card-dark crm-card-span2' : 'crm-card-light'
                }`}
                style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}
              >
                <span className="crm-card-tag">{feat.tag}</span>
                <h3 className="crm-feat-title">{feat.title}</h3>
                <p className="crm-feat-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: VEHICLE HISTORY (Dark #070708 - Split Terminal Panel)
          ========================================================================= */}
      <section className="crm-sec crm-sec-dark" id="history">
        <div className="crm-wrap crm-split-grid">
          <div className="crm-split-copy crm-reveal">
            <div className="crm-eb">[ Vehicle history ]</div>
            <h2 className="crm-h2">
              Every car <em>remembers.</em>
            </h2>
            <ul className="crm-tick-list">
              <li>Full service history, found by plate number</li>
              <li>See what parts were used and what was charged</li>
              <li>Know when the next service is due</li>
              <li>Quote repeat jobs faster from past work</li>
            </ul>
          </div>

          {/* Right: Vehicle History Terminal Panel */}
          <div className="crm-terminal-box crm-card-br crm-reveal">
            <div className="crm-terminal-bar">
              <div className="term-dots">
                <span className="dot-red" />
                <span className="dot-yellow" />
                <span className="dot-green" />
              </div>
              <span className="term-title">garage — history</span>
            </div>
            <div className="crm-terminal-body">
              <div>
                <span className="term-muted">$</span> garage history --plate KHI-4821
              </div>
              <div className="term-muted">&gt; Suzuki Cultus 2018 · 3 visits</div>
              <div>&gt; Jan · Oil and filter change</div>
              <div>&gt; Jun · Front brake pads</div>
              <div className="term-green">
                &gt; Nov · AC service · next due in May ✓<span className="term-cursor" />
              </div>
              <div className="term-sample-tag">sample data</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PRICING (Cream #E9E5DA - Monthly & Yearly Cards)
          ========================================================================= */}
      <section className="crm-sec crm-sec-light" id="pricing">
        <div className="crm-wrap">
          <div className="crm-sec-head crm-reveal">
            <div>
              <div className="crm-eb">[ 04 / Pricing ]</div>
              <h2 className="crm-h2">
                Clear prices, <em>no surprises.</em>
              </h2>
            </div>
            <p className="crm-head-p">
              Pay monthly, or pay yearly and save. Prices in USD.
            </p>
          </div>

          <div className="crm-pricing-grid">
            {/* Card 1: Monthly (Light Card) */}
            <div className="crm-price-card crm-price-light crm-card-br crm-reveal-card">
              <span className="crm-price-tag">01 · Monthly</span>
              <h3 className="crm-price-title">Garage CRM &amp; POS</h3>
              <p className="crm-price-sub">
                Low upfront cost, cancel anytime with 30 days notice.
              </p>
              <div className="crm-price-amount">
                ${GARAGE_CRM_PRICING.monthly}
                <small>Per month</small>
              </div>

              <ul className="crm-price-bullets">
                <li>Full access to Garage CRM Suite</li>
                <li>Job cards, vehicles, customers, parts and invoices</li>
                <li>Continuous updates and patches</li>
                <li>WhatsApp, phone and remote desktop support</li>
              </ul>

              <a href="/contact" onClick={handleGetStarted} className="crm-btn crm-btn-br">
                <span>Start monthly plan</span>
                <i aria-hidden="true">↗</i>
              </a>
            </div>

            {/* Card 2: Yearly (Dark Card) */}
            <div
              className="crm-price-card crm-price-dark crm-card-br crm-reveal-card"
              style={{ transitionDelay: '0.15s' }}
            >
              <span className="crm-price-tag">02 · Yearly</span>
              <h3 className="crm-price-title">Garage CRM &amp; POS</h3>
              <p className="crm-price-sub">
                Everything in monthly. You save ${GARAGE_CRM_PRICING.savingsPerYear} compared with 12 monthly payments.
              </p>
              <div className="crm-price-amount">
                ${GARAGE_CRM_PRICING.yearly}
                <small>Per year</small>
              </div>

              <ul className="crm-price-bullets">
                <li>Everything in the monthly plan</li>
                <li>One payment for the whole year</li>
                <li>Updates and patches included</li>
                <li>Custom workflows quoted after a free scoping call</li>
              </ul>

              <a href="/contact" onClick={handleGetStarted} className="crm-btn crm-btn-br">
                <span>Start yearly plan</span>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </div>

          <div className="crm-pricing-footnote crm-reveal">
            Fixed prices · No lock-in · Cancel with 30 days notice
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: FAQ (Dark #070708 - Terminal Simulator)
          ========================================================================= */}
      <section className="crm-sec crm-sec-dark" id="faq">
        <div className="crm-wrap">
          <div className="crm-sec-head crm-reveal">
            <div>
              <div className="crm-eb">[ 05 / FAQ ]</div>
              <h2 className="crm-h2">
                Questions, <em>answered.</em>
              </h2>
            </div>
            <p className="crm-head-p">
              Pick a question. The answer runs in the terminal, like everything else we ship.
            </p>
          </div>

          <div className="crm-faq-grid">
            {/* Left: Questions List */}
            <div className="crm-faq-questions crm-reveal">
              {GARAGE_FAQ.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`crm-faq-btn ${activeFaq === idx ? 'active' : ''}`}
                  onClick={() => setActiveFaq(idx)}
                >
                  <span className="faq-num">0{idx + 1}</span>
                  <span className="faq-q-text">{item.q}</span>
                </button>
              ))}
            </div>

            {/* Right: Terminal Simulator */}
            <div className="crm-terminal-box crm-card-br crm-reveal">
              <div className="crm-terminal-bar">
                <div className="term-dots">
                  <span className="dot-red" />
                  <span className="dot-yellow" />
                  <span className="dot-green" />
                </div>
                <span className="term-title">vertexia — zsh</span>
              </div>
              <div className="crm-terminal-body">
                <div>
                  <span className="term-muted">$</span> vertexia faq -q 0{activeFaq + 1}
                </div>
                <div className="term-muted">&gt; {GARAGE_FAQ[activeFaq].q}</div>
                <div className="term-ans">
                  {typedAnswer}
                  <span className="term-cursor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CLOSING CTA (Put Garage CRM in your workshop + 3D Cube)
          ========================================================================= */}
      <section className="crm-closing-cta-sec">
        <div className="crm-wrap crm-cta-grid">
          <div className="crm-cta-copy crm-reveal">
            <div className="crm-eb">[ Get started ]</div>
            <h2 className="crm-h2">
              Put Garage CRM <em>in your workshop.</em>
            </h2>
            <p className="crm-cta-desc">
              Tell us about your garage. You get a reply within one business day and help moving your existing customer and vehicle records in.
            </p>

            {submitted ? (
              <div className="crm-cta-success">
                <Check size={18} />
                <span>Thank you! We will reply within 1 business day.</span>
              </div>
            ) : (
              <form className="crm-cta-form" onSubmit={handleCtaSubmit}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter your email..."
                  aria-label="Email address"
                  className="crm-email-input"
                />
                <button type="submit" className="crm-btn crm-btn-br">
                  <span>Get a quote</span>
                  <i aria-hidden="true">↗</i>
                </button>
              </form>
            )}
          </div>

          {/* Right: 3D Interactive Three.js Cube */}
          <div className="crm-cta-cube-col crm-reveal">
            <CubeScene />
          </div>
        </div>
      </section>

      {/* Real Site Footer */}
      <Footer />
    </div>
  );
}
