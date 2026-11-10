import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import CornerBracket from './CornerBracket';
import CubeScene from './CubeScene';
import './ContactCTA.css';

export default function ContactCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/system@vertexiasystem.tech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: email,
          _subject: 'New Quote Request from Vertexia Website (Home CTA)',
          _template: 'table',
        }),
      });
    } catch (err) {
      console.warn('Form submission notice:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section className="cta-section" id="contact" aria-label="Start a project">
      {/* Ambient background glow */}
      <div className="cta-ambient-glow" aria-hidden="true" />

      <div className="cta-container">
        <div className="cta-layout">
          {/* Left Column: Form & Copy */}
          <div className="cta-copy-col">
            <div className="cta-pill">
              <span className="pill-cube" aria-hidden="true"></span>
              <span className="pill-bracket">[</span>
              <span className="pill-label">START A PROJECT</span>
              <span className="pill-bracket">]</span>
            </div>

            <h2 className="cta-headline">
              LET'S BUILD<br />
              YOUR <span className="cta-accent">PRODUCT.</span>
            </h2>

            <p className="cta-subtitle">
              Tell us what you are building. You get a reply within one business day, a free scoping call, and a fixed quote for the first release.
            </p>

            {submitted ? (
              <div className="cta-success-message">
                <CheckCircle2 size={20} className="success-icon" />
                <span>Thank you! We'll reply within 1 business day.</span>
              </div>
            ) : (
              <form className="cta-form" onSubmit={handleSubmit}>
                <div className="cta-input-wrap">
                  <label htmlFor="cta-email-input" className="sr-only">Work email</label>
                  <input
                    id="cta-email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="enter your email..."
                    className="cta-input"
                  />
                </div>

                <CornerBracket offset={3} cornerColor="rgba(255, 255, 255, 0.45)">
                  <button type="submit" disabled={isSubmitting} className="action-button btn-cta-submit">
                    <span className="btn-title">{isSubmitting ? 'SENDING...' : 'GET A QUOTE'}</span>
                    <span className="btn-icon-box box-cta-arrow">
                      <ArrowUpRight size={14} strokeWidth={2.8} />
                    </span>
                  </button>
                </CornerBracket>
              </form>
            )}

            {/* 3 Trust Badges */}
            <ul className="cta-trust-list">
              <li className="trust-item">
                <span className="trust-cube" aria-hidden="true"></span>
                <span>REPLY WITHIN 1 BUSINESS DAY</span>
              </li>
              <li className="trust-item">
                <span className="trust-cube" aria-hidden="true"></span>
                <span>FREE 30-MINUTE SCOPING CALL</span>
              </li>
              <li className="trust-item">
                <span className="trust-cube" aria-hidden="true"></span>
                <span>FIXED QUOTE FOR THE FIRST RELEASE</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Interactive 3D Cube Scene */}
          <div className="cta-graphic-col">
            <CubeScene />
          </div>
        </div>
      </div>
    </section>
  );
}
