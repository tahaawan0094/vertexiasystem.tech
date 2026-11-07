import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import CornerBracket from './CornerBracket';
import './FAQ.css';

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState(0);

  const faqs = [
    {
      id: '01',
      question: 'How much does it cost to use the software?',
      answer: 'Pharmacy POS and Garage CRM are available at $10/month or $100/year for standard licenses. Custom enterprise solutions are quoted based on specific multi-branch requirements.',
    },
    {
      id: '02',
      question: 'How fast can you deploy?',
      answer: 'Ready-to-deploy systems like MedKit POS and Garage CRM can be set up almost instantly. Custom workflows take a few days of scoping and integration.',
    },
    {
      id: '03',
      question: 'Who owns the data and system?',
      answer: 'You have 100% ownership of your business data, local backups, and system configurations. Everything stays secure under your control.',
    },
    {
      id: '04',
      question: 'Do you work with small stores or large enterprises?',
      answer: 'We build solutions for everyone—from single-counter local pharmacies and automotive garages to multi-branch retail stores.',
    },
    {
      id: '05',
      question: 'What tech stack do you use?',
      answer: 'We use a robust stack including React, Next.js, Node.js, Electron for desktop apps, TypeScript, and secure local/cloud databases.',
    },
    {
      id: '06',
      question: 'How do we stay in the loop during updates?',
      answer: 'You get direct communication channels, automated system logs, and scheduled milestone updates straight from our engineering team.',
    },
    {
      id: '07',
      question: 'Can you integrate with existing hardware?',
      answer: 'Yes, our POS and CRM systems integrate smoothly with standard thermal receipt printers, barcode scanners, and cash drawers.',
    },
    {
      id: '08',
      question: 'What happens after launch?',
      answer: 'We provide ongoing software updates, data backup support, and priority technical assistance whenever your business needs it.',
    },
  ];

  const current = faqs[activeIdx];

  return (
    <section className="faq-section" id="faq" aria-label="Questions, answered">
      <div className="faq-container">
        {/* Section Header */}
        <div className="faq-head">
          <div className="faq-title-group">
            <div className="faq-pill">
              <span className="pill-cube" aria-hidden="true"></span>
              <span className="pill-bracket">[</span>
              <span className="pill-label">FAQ</span>
              <span className="pill-bracket">]</span>
            </div>

            <h2 className="faq-headline">
              QUESTIONS, <span className="faq-accent">ANSWERED</span>
            </h2>
          </div>

          <p className="faq-description">
            Pick a question. The answer runs in the terminal, like everything else we ship.
          </p>
        </div>

        {/* 2-Column FAQ Layout: Left Questions List | Right Interactive Terminal */}
        <div className="faq-layout">
          {/* Left Questions List */}
          <div className="faq-questions-list" role="tablist" aria-label="Frequently Asked Questions">
            {faqs.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`faq-question-btn ${isActive ? 'is-active-faq' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <span className="faq-num">{item.id}</span>
                  <span className="faq-q-text">{item.question}</span>
                  <span className="faq-arrow-icon" aria-hidden="true">→</span>
                </button>
              );
            })}
          </div>

          {/* Right Interactive Terminal Window */}
          <div className="faq-terminal-window" aria-live="polite">
            {/* Terminal Window Header Bar */}
            <div className="terminal-header-bar">
              <div className="terminal-traffic-lights" aria-hidden="true">
                <span className="tl-dot tl-red"></span>
                <span className="tl-dot tl-yellow"></span>
                <span className="tl-dot tl-green"></span>
              </div>
              <span className="terminal-title-text">vertexia — zsh</span>
            </div>

            {/* Terminal Screen Body */}
            <div className="terminal-screen-body">
              <div className="terminal-cmd-row">
                <span className="prompt-dollar">$</span>
                <span className="cmd-text">vertexia faq -q {current.id}</span>
              </div>

              <div className="terminal-q-echo">
                <span className="echo-caret">&gt;</span>
                <span className="echo-text">{current.question}</span>
              </div>

              <div className="terminal-answer-box" key={current.id}>
                <p className="terminal-answer-text">
                  {current.answer}
                  <span className="terminal-cursor-block" aria-hidden="true">█</span>
                </p>
              </div>
            </div>

            {/* Terminal Window Footer */}
            <div className="terminal-footer-bar">
              <span className="stuck-text">STILL STUCK? ASK A REAL ENGINEER.</span>

              <CornerBracket offset={3} cornerColor="rgba(255, 255, 255, 0.4)">
                <a href="#contact" className="action-button btn-secondary-dark btn-faq-ask">
                  <span className="btn-title">ASK A QUESTION</span>
                  <span className="btn-icon-box box-white">
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
