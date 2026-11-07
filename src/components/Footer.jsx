import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import CornerBracket from './CornerBracket';
import './Footer.css';

export default function Footer() {
  const [austinTime, setAustinTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeString = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Karachi',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date());
        setAustinTime(timeString);
      } catch (e) {
        setAustinTime('15:15');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-section" aria-label="Footer">
      <div className="footer-container">
        {/* Top Area: Mail & Links */}
        <div className="footer-top-row">
          {/* Lead Left: Mail & Booking Status */}
          <div className="footer-lead-col">
            <p className="footer-kick">
              <span className="footer-kick-cube" aria-hidden="true"></span>
              <span>Have a product in mind?</span>
            </p>

            <a href="mailto:hello@vertexiasystem.tech" className="footer-mail-link">
              <span className="mail-text">hello@vertexiasystem.tech</span>
              <span className="mail-arrow-box" aria-hidden="true">
                <ArrowUpRight size={22} strokeWidth={2.4} />
              </span>
            </a>

            <div className="footer-live-strip">
              <span className="booking-status">
                <span className="led-pulse" aria-hidden="true"></span>
                <span>Now booking Q4 builds · 2 slots left</span>
              </span>
              <span className="time-status">
                <span>Local time · Austin {austinTime || '06:29'}</span>
              </span>
            </div>
          </div>

          {/* Right: 3 Nav Columns */}
          <nav className="footer-nav-cols" aria-label="Footer navigation">
            {/* Column 1: Services */}
            <div className="footer-col">
              <h4 className="footer-col-heading">Services</h4>
              <ul className="footer-links-list">
                <li><a href="#services">Web apps</a></li>
                <li><a href="#services">Mobile apps</a></li>
                <li><a href="#services">AI features</a></li>
                <li><a href="#services">Product design</a></li>
                <li><a href="#services">Cloud &amp; DevOps</a></li>
                <li><a href="#services">Dedicated teams</a></li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div className="footer-col">
              <h4 className="footer-col-heading">Company</h4>
              <ul className="footer-links-list">
                <li><a href="#work">Work</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Social */}
            <div className="footer-col">
              <h4 className="footer-col-heading">Social</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <span>X</span>
                    <span className="ext-arrow" aria-hidden="true">↗</span>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <span>LinkedIn</span>
                    <span className="ext-arrow" aria-hidden="true">↗</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <span>GitHub</span>
                    <span className="ext-arrow" aria-hidden="true">↗</span>
                  </a>
                </li>
                <li>
                  <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                    <span>Dribbble</span>
                    <span className="ext-arrow" aria-hidden="true">↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Middle Divider Row: Address & Back to Top */}
        <div className="footer-mid-row">
          <span className="footer-address">
            KARACHI, PAKISTAN
          </span>

          <CornerBracket offset={3} cornerColor="rgba(255, 255, 255, 0.35)">
            <button 
              type="button" 
              onClick={scrollToTop} 
              className="action-button btn-back-top"
              aria-label="Back to top"
            >
              <span className="btn-title">BACK TO TOP</span>
              <span className="btn-icon-box box-top-arrow">
                <ArrowUpRight size={14} strokeWidth={2.8} />
              </span>
            </button>
          </CornerBracket>
        </div>

        {/* Massive Brand Watermark */}
        <div className="footer-watermark-band" aria-hidden="true">
          <span className="footer-watermark-text">VERTEXIA</span>
        </div>

        {/* Bottom Legal Row */}
        <div className="footer-legal-row">
          <div className="legal-left">
            <span>© 2026 VERTEXIA</span>
            <a href="#contact">Privacy</a>
            <a href="#contact">Terms</a>
          </div>

          <div className="legal-right">
            <span>Built in Pakistan, shipped worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
