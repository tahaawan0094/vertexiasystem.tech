import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import CornerBracket from './CornerBracket';
import './ContactCTA.css';

export default function ContactCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
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
                  <button type="submit" className="action-button btn-cta-submit">
                    <span className="btn-title">GET A QUOTE</span>
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

          {/* Right Column: Isometric 3D Cubes Graphic */}
          <div className="cta-graphic-col" aria-hidden="true">
            <div className="isometric-scene">
              <svg 
                className="isometric-svg" 
                viewBox="0 0 600 600" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Purple Cube Gradients */}
                  <linearGradient id="purpleTop" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#cbb0ff" />
                    <stop offset="100%" stopColor="#a376f8" />
                  </linearGradient>
                  <linearGradient id="purpleLeft" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9661f4" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                  <linearGradient id="purpleRight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8146e5" />
                    <stop offset="100%" stopColor="#4f279b" />
                  </linearGradient>

                  {/* Dark Gunmetal Cube Gradients */}
                  <linearGradient id="darkTop" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2b2d35" />
                    <stop offset="100%" stopColor="#1e2026" />
                  </linearGradient>
                  <linearGradient id="darkLeft" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1b1c22" />
                    <stop offset="100%" stopColor="#121317" />
                  </linearGradient>
                  <linearGradient id="darkRight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#15161a" />
                    <stop offset="100%" stopColor="#0a0b0d" />
                  </linearGradient>

                  {/* Glow filter */}
                  <filter id="purpleGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor="#b692ff" floodOpacity="0.45" />
                  </filter>
                  <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="20" stdDeviation="30" floodColor="#000000" floodOpacity="0.8" />
                  </filter>
                </defs>

                {/* Ambient Floor Shadow */}
                <ellipse cx="300" cy="460" rx="220" ry="70" fill="rgba(0,0,0,0.6)" filter="blur(24px)" />

                {/* Back Top Right Cube (Dark) */}
                <g transform="translate(360, 160)" className="cube-back-tr">
                  <path d="M 0,-40 L 70,0 L 0,40 L -70,0 Z" fill="url(#darkTop)" stroke="#383b44" strokeWidth="1.5" />
                  <path d="M -70,0 L 0,40 L 0,110 L -70,70 Z" fill="url(#darkLeft)" stroke="#383b44" strokeWidth="1.5" />
                  <path d="M 0,40 L 70,0 L 70,70 L 0,110 Z" fill="url(#darkRight)" stroke="#383b44" strokeWidth="1.5" />
                </g>

                {/* Back Top Left Cube (Dark) */}
                <g transform="translate(230, 190)" className="cube-back-tl">
                  <path d="M 0,-40 L 70,0 L 0,40 L -70,0 Z" fill="url(#darkTop)" stroke="#383b44" strokeWidth="1.5" />
                  <path d="M -70,0 L 0,40 L 0,110 L -70,70 Z" fill="url(#darkLeft)" stroke="#383b44" strokeWidth="1.5" />
                  <path d="M 0,40 L 70,0 L 70,70 L 0,110 Z" fill="url(#darkRight)" stroke="#383b44" strokeWidth="1.5" />
                </g>

                {/* Bottom Right Cube (Dark) */}
                <g transform="translate(370, 310)" className="cube-bot-r">
                  <path d="M 0,-40 L 70,0 L 0,40 L -70,0 Z" fill="url(#darkTop)" stroke="#383b44" strokeWidth="1.5" />
                  <path d="M -70,0 L 0,40 L 0,110 L -70,70 Z" fill="url(#darkLeft)" stroke="#383b44" strokeWidth="1.5" />
                  <path d="M 0,40 L 70,0 L 70,70 L 0,110 Z" fill="url(#darkRight)" stroke="#383b44" strokeWidth="1.5" />
                </g>

                {/* Bottom Left Cube (Dark) */}
                <g transform="translate(210, 320)" className="cube-bot-l">
                  <path d="M 0,-40 L 70,0 L 0,40 L -70,0 Z" fill="url(#darkTop)" stroke="#383b44" strokeWidth="1.5" />
                  <path d="M -70,0 L 0,40 L 0,110 L -70,70 Z" fill="url(#darkLeft)" stroke="#383b44" strokeWidth="1.5" />
                  <path d="M 0,40 L 70,0 L 70,70 L 0,110 Z" fill="url(#darkRight)" stroke="#383b44" strokeWidth="1.5" />
                </g>

                {/* Featured HERO Center Cube (Glowing Purple #b692ff) */}
                <g transform="translate(285, 245)" filter="url(#purpleGlow)" className="cube-hero-purple">
                  {/* Top Face */}
                  <path d="M 0,-46 L 80,0 L 0,46 L -80,0 Z" fill="url(#purpleTop)" stroke="#e4d5ff" strokeWidth="1.5" />
                  {/* Left Face */}
                  <path d="M -80,0 L 0,46 L 0,126 L -80,80 Z" fill="url(#purpleLeft)" stroke="#b692ff" strokeWidth="1.5" />
                  {/* Right Face */}
                  <path d="M 0,46 L 80,0 L 80,80 L 0,126 Z" fill="url(#purpleRight)" stroke="#9661f4" strokeWidth="1.5" />
                  
                  {/* Inset Core Panel Accent */}
                  <path d="M 0,-24 L 46,0 L 0,24 L -46,0 Z" fill="#d8c2ff" opacity="0.65" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
