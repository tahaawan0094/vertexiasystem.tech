import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import CornerBracket from './CornerBracket';
import './Pricing.css';

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing" aria-label="Pricing and plans">
      <div className="pricing-container">
        {/* Section Header */}
        <div className="pricing-head">
          <div className="pricing-title-group">
            <div className="pricing-pill">
              <span className="pill-cube" aria-hidden="true"></span>
              <span className="pill-bracket">[</span>
              <span className="pill-label">PRICING & PLANS</span>
              <span className="pill-bracket">]</span>
            </div>

            <h2 className="pricing-headline">
              READY-TO-DEPLOY SOFTWARE PLANS
            </h2>
          </div>

          <p className="pricing-description">
            Flexible subscription options for Pharmacy POS and Garage CRM. Get your business automated with zero setup friction.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="pricing-cards-grid" role="list">
          {/* Card 1: MONTHLY PASS */}
          <div className="pricing-card card-light" role="listitem">
            <div className="card-top-row">
              <span className="card-index-num">01</span>
              <h3 className="card-tier-title">MONTHLY PASS</h3>
            </div>

            <p className="card-tier-subtitle">Pay as you go, cancel anytime</p>

            <div className="card-price-box">
              <span className="card-price-val">$10</span>
              <span className="card-price-freq">/ MONTH</span>
            </div>

            <div className="card-features-divider"></div>

            <ul className="card-features-list">
              <li>
                <span className="feat-cube" aria-hidden="true"></span>
                <span>Full POS / CRM access</span>
              </li>
              <li>
                <span className="feat-cube" aria-hidden="true"></span>
                <span>Inventory & billing modules</span>
              </li>
              <li>
                <span className="feat-cube" aria-hidden="true"></span>
                <span>Automated local backups</span>
              </li>
              <li>
                <span className="feat-cube" aria-hidden="true"></span>
                <span>Standard email & chat support</span>
              </li>
            </ul>

            <div className="card-action-wrap">
              <CornerBracket offset={3} cornerColor="rgba(20, 18, 27, 0.35)">
                <a href="#contact" className="action-button btn-pricing-light">
                  <span className="btn-title">START MONTHLY</span>
                  <span className="btn-icon-box box-black">
                    <ArrowUpRight size={14} strokeWidth={2.8} />
                  </span>
                </a>
              </CornerBracket>
            </div>
          </div>

          {/* Card 2: ANNUAL LICENSE (Featured Dark Card) */}
          <div className="pricing-card card-featured-dark" role="listitem">
            <div className="featured-top-accent"></div>

            <div className="featured-header-row">
              <div className="card-top-row">
                <span className="card-index-num accent-num">02</span>
                <h3 className="card-tier-title text-white">ANNUAL LICENSE</h3>
              </div>
              <span className="most-chosen-badge">MOST CHOSEN</span>
            </div>

            <p className="card-tier-subtitle text-muted-dark">Best value for established stores</p>

            <div className="card-price-box">
              <span className="card-price-val text-white">$100</span>
              <span className="card-price-freq text-muted-dark">/ YEAR</span>
            </div>

            <div className="card-features-divider divider-dark"></div>

            <ul className="card-features-list text-features-dark">
              <li>
                <span className="feat-cube accent-cube" aria-hidden="true"></span>
                <span>Everything in Monthly</span>
              </li>
              <li>
                <span className="feat-cube accent-cube" aria-hidden="true"></span>
                <span>Massive cost savings</span>
              </li>
              <li>
                <span className="feat-cube accent-cube" aria-hidden="true"></span>
                <span>Priority WhatsApp support</span>
              </li>
              <li>
                <span className="feat-cube accent-cube" aria-hidden="true"></span>
                <span>Free hardware terminal setup</span>
              </li>
              <li>
                <span className="feat-cube accent-cube" aria-hidden="true"></span>
                <span>Automated software updates</span>
              </li>
            </ul>

            <div className="card-action-wrap">
              <CornerBracket offset={3} cornerColor="rgba(182, 146, 255, 0.8)">
                <a href="#contact" className="action-button btn-primary-accent btn-full-card">
                  <span className="btn-title">GET ANNUAL PASS</span>
                  <span className="btn-icon-box box-black">
                    <ArrowUpRight size={14} strokeWidth={2.8} />
                  </span>
                </a>
              </CornerBracket>
            </div>
          </div>

          {/* Card 3: ENTERPRISE SUITE */}
          <div className="pricing-card card-light" role="listitem">
            <div className="card-top-row">
              <span className="card-index-num">03</span>
              <h3 className="card-tier-title">ENTERPRISE SUITE</h3>
            </div>

            <p className="card-tier-subtitle">For multi-branch stores and large garages</p>

            <div className="card-price-box">
              <span className="card-price-val">CUSTOM</span>
            </div>

            <div className="card-features-divider"></div>

            <ul className="card-features-list">
              <li>
                <span className="feat-cube" aria-hidden="true"></span>
                <span>Multi-branch synchronization</span>
              </li>
              <li>
                <span className="feat-cube" aria-hidden="true"></span>
                <span>Custom feature development</span>
              </li>
              <li>
                <span className="feat-cube" aria-hidden="true"></span>
                <span>Dedicated account manager</span>
              </li>
              <li>
                <span className="feat-cube" aria-hidden="true"></span>
                <span>On-site staff training</span>
              </li>
              <li>
                <span className="feat-cube" aria-hidden="true"></span>
                <span>24/7 priority maintenance</span>
              </li>
            </ul>

            <div className="card-action-wrap">
              <CornerBracket offset={3} cornerColor="rgba(20, 18, 27, 0.35)">
                <a href="#contact" className="action-button btn-pricing-light">
                  <span className="btn-title">CONTACT SALES</span>
                  <span className="btn-icon-box box-black">
                    <ArrowUpRight size={14} strokeWidth={2.8} />
                  </span>
                </a>
              </CornerBracket>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
