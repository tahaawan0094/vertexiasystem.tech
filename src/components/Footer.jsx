import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import CornerBracket from './CornerBracket';
import './Footer.css';

export default function Footer() {
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
              <span>HAVE A PRODUCT IN MIND?</span>
            </p>

            <a href="mailto:system@vertexiasystem.tech" className="footer-mail-link">
              <span className="mail-text">system@vertexiasystem.tech</span>
              <span className="mail-arrow-box" aria-hidden="true">
                <ArrowUpRight size={18} strokeWidth={2.4} />
              </span>
            </a>

            {/* WhatsApp Contacts (Individually Clickable) */}
            <div className="footer-whatsapp-row">
              <a 
                href="https://wa.me/923172981931" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-whatsapp-link"
                aria-label="Contact +92 317 2981931 on WhatsApp"
              >
                <span>+92 317 2981931</span>
                <ArrowUpRight size={13} strokeWidth={2.2} />
              </a>
              <span className="whatsapp-sep" aria-hidden="true">|</span>
              <a 
                href="https://wa.me/923113874384" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-whatsapp-link"
                aria-label="Contact +92 311 3874384 on WhatsApp"
              >
                <span>+92 311 3874384</span>
                <ArrowUpRight size={13} strokeWidth={2.2} />
              </a>
            </div>

            <div className="footer-live-strip">
              <span className="booking-status">
                <span className="led-pulse" aria-hidden="true"></span>
                <span>NOW BOOKING NEW BUILDS</span>
              </span>
              <span className="time-status">
                <span>LOCAL TIME · KARACHI, PAKISTAN</span>
              </span>
            </div>
          </div>

          {/* Right: 3 Nav Columns */}
          <nav className="footer-nav-cols" aria-label="Footer navigation">
            {/* Column 1: Services */}
            <div className="footer-col">
              <h4 className="footer-col-heading">Services</h4>
              <ul className="footer-links-list">
                <li><a href="#services">Web Apps</a></li>
                <li><a href="#services">Mobile Apps</a></li>
                <li><a href="#services">POS Systems</a></li>
                <li><a href="#services">Product Design</a></li>
                <li><a href="#services">Cloud &amp; Support</a></li>
                <li><a href="#services">Custom Software</a></li>
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
                  <a href="https://www.facebook.com/people/Vertexia/61591263672377/" target="_blank" rel="noopener noreferrer">
                    <span>Facebook</span>
                    <span className="ext-arrow" aria-hidden="true">↗</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/vertexia_agency/" target="_blank" rel="noopener noreferrer">
                    <span>Instagram</span>
                    <span className="ext-arrow" aria-hidden="true">↗</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/vertexiaagency/" target="_blank" rel="noopener noreferrer">
                    <span>LinkedIn</span>
                    <span className="ext-arrow" aria-hidden="true">↗</span>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/vertexia_agency" target="_blank" rel="noopener noreferrer">
                    <span>X (Twitter)</span>
                    <span className="ext-arrow" aria-hidden="true">↗</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/vertexia_agency/" target="_blank" rel="noopener noreferrer">
                    <span>Pinterest</span>
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
          <span className="footer-watermark-text">VERTEXIA SYSTEM</span>
        </div>

        {/* Bottom Legal Row */}
        <div className="footer-legal-row">
          <div className="legal-left">
            <span>© 2026 VERTEXIA</span>
            <a href="#contact">PRIVACY</a>
            <a href="#contact">TERMS</a>
          </div>

          <div className="legal-right">
            <span>BUILT IN KARACHI, PAKISTAN · SHIPPED WORLDWIDE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
