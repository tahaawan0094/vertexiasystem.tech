import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import CornerBracket from './CornerBracket';
import './Hero.css';

export default function Hero() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMouseOffset({ x, y });
  };

  return (
    <section className="hero-container" onMouseMove={handleMouseMove}>
      {/* Ambient warm purple/violet glow */}
      <div className="hero-center-glow" aria-hidden="true" />

      {/* Floating purple glowing dot accent */}
      <div
        className="hero-floating-dot"
        style={{
          transform: `translate(${mouseOffset.x * -16}px, ${mouseOffset.y * -16}px)`,
        }}
        aria-hidden="true"
      >
        <span className="dot-core"></span>
      </div>

      {/* Main Massive Editorial Headlines */}
      <div className="hero-typography-container">
        {/* Line 1: SOFTWARE (left-aligned) */}
        <div className="title-row software-row">
          <h1 className="hero-text software-text">SOFTWARE</h1>
        </div>

        {/* Line 2: THAT (white) + SHIPS. (purple #b692ff) (right-aligned) */}
        <div className="title-row that-ships-row">
          <div className="that-ships-wrapper">
            {/* Tag badge floating directly above SHIPS */}
            <div className="shipped-badge-box">
              <CornerBracket offset={3} cornerColor="rgba(255, 255, 255, 0.4)">
                <div className="shipped-tag">
                  <span className="shipped-dot"></span>
                  <span className="shipped-label">SHIPPED TO PRODUCTION</span>
                </div>
              </CornerBracket>
            </div>

            {/* The single headline line: THAT SHIPS. */}
            <div className="that-ships-line">
              <span className="hero-text that-text">THAT</span>
              <span className="hero-text ships-text">
                SHIPS<span className="period">.</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Section: Left (Bio & Actions) | Right (Clean Stats) */}
      <div className="hero-bottom-section">
        {/* Left Column: Bio & Buttons */}
        <div className="hero-left-column">
          <p className="hero-bio">
            Vertexia is a software development studio. We design, build and ship software, mobile apps and AI features for startups and growing companies, one working release every two weeks.
          </p>

          <div className="hero-buttons-row">
            {/* Button 1: Solid Purple #b692ff */}
            <CornerBracket offset={4} cornerColor="rgba(182, 146, 255, 0.85)">
              <a href="#contact" className="action-button btn-primary-accent">
                <span className="btn-title">START A PROJECT</span>
                <span className="btn-icon-box box-black">
                  <ArrowUpRight size={14} strokeWidth={2.8} />
                </span>
              </a>
            </CornerBracket>

            {/* Button 2: Dark Outlined */}
            <CornerBracket offset={4} cornerColor="rgba(255, 255, 255, 0.35)">
              <a href="#work" className="action-button btn-secondary-dark">
                <span className="btn-title">SEE OUR WORK</span>
                <span className="btn-icon-box box-white">
                  <ArrowUpRight size={14} strokeWidth={2.8} />
                </span>
              </a>
            </CornerBracket>
          </div>
        </div>

        {/* Right Column: Clean stats strip */}
        <div className="hero-stats-row">
          <div className="stat-cell">
            <div className="stat-number">10+</div>
            <div className="stat-caption">PROJECTS SHIPPED</div>
          </div>

          <div className="stat-cell">
            <div className="stat-number">2 wk</div>
            <div className="stat-caption">TO THE FIRST RELEASE</div>
          </div>

          <div className="stat-cell">
            <div className="stat-rating-header">
              <span className="stat-number">4.9/5</span>
              <div className="vertexia-mini-badge">
                <span className="mini-cube"></span>
                <span className="mini-text">Get Vertexia</span>
              </div>
            </div>
            <div className="stat-caption">CLIENT RATING</div>
          </div>
        </div>
      </div>
    </section>
  );
}
