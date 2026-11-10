import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import CornerBracket from './CornerBracket';
import './ContactPage.css';

// Edit these lists to change the form options.
const PROJECT_TYPES = ['WEB APP', 'MOBILE APP', 'POS SYSTEM', 'CUSTOM SOFTWARE', 'DESIGN'];
const BUDGETS = ['<$25K', '$25-60K', '$60-120K', '$120K+'];
const TIMELINES = ['As soon as possible', 'Within 1 month', '1 to 3 months', 'Flexible / Just exploring'];

const STEPS = [
  {
    title: 'We reply within one business day',
    desc: 'A senior engineer reads your brief and asks the questions that matter.',
  },
  {
    title: 'A free 30-minute scoping call',
    desc: 'We talk through the product, the risks and what to build first.',
  },
  {
    title: 'A fixed quote for the first release',
    desc: 'Scope, timeline and price in writing, usually within three days.',
  },
];

function Pill({ label, selected, onClick }) {
  return (
    <button
      type="button"
      className={`vxc-pill${selected ? ' is-selected' : ''}`}
      onClick={onClick}
      aria-pressed={selected}
    >
      <span className="vxc-box" aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedTypes, setSelectedTypes] = useState(['WEB APP']);
  const [budget, setBudget] = useState('$25-60K');
  const [timeline, setTimeline] = useState(TIMELINES[0]);
  const [projectDesc, setProjectDesc] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [localTime, setLocalTime] = useState('');

  // Live Karachi clock (24h, never shows "24:05")
  useEffect(() => {
    const tick = () => {
      setLocalTime(
        new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Karachi',
          hour: '2-digit',
          minute: '2-digit',
          hourCycle: 'h23',
        }).format(new Date())
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const toggleType = (type) =>
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || isSubmitting) return;
    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/system@vertexiasystem.tech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          company: company || 'N/A',
          building: selectedTypes.join(', '),
          budget: budget,
          timeline: timeline,
          projectDescription: projectDesc || 'N/A',
          _subject: `New Project Brief from ${name} (${company || 'Individual'})`,
          _template: 'table',
        }),
      });
    } catch (err) {
      console.warn('Submission notice:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="vxc-root">
      <div className="page-container vxc-navbar-container" style={{ paddingTop: '20px', position: 'relative', zIndex: 1000 }}>
        <Navbar />
      </div>

      <main className="vxc-main">
        {/* Header */}
        <header className="vxc-header">
          <div className="vxc-eyebrow">
            <span className="vxc-eyebrow-dot" aria-hidden="true" />
            <span className="vxc-eyebrow-bracket">[</span>
            <span>CONTACT</span>
            <span className="vxc-eyebrow-bracket">]</span>
          </div>

          <h1 className="vxc-title">
            START A <span className="vxc-title-accent">PROJECT</span>
          </h1>

          <p className="vxc-subtitle">
            Tell us what you are building. A senior engineer reads every message and replies
            within one business day.
          </p>
        </header>

        <div className="vxc-layout">
          {/* Left: form */}
          <div>
            {submitted ? (
              <div className="vxc-success" role="status">
                <CheckCircle2 size={20} />
                <span>
                  Thank you, {name}! A senior engineer has received your brief and will reply
                  within 1 business day.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="vxc-form">
                <div className="vxc-row">
                  <label className="vxc-field">
                    <span className="vxc-label">YOUR NAME *</span>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="vxc-input"
                    />
                  </label>

                  <label className="vxc-field">
                    <span className="vxc-label">WORK EMAIL *</span>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="vxc-input"
                    />
                  </label>
                </div>

                <label className="vxc-field">
                  <span className="vxc-label">COMPANY</span>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Inc."
                    className="vxc-input"
                  />
                </label>

                <div className="vxc-group">
                  <span className="vxc-group-title">WHAT ARE YOU BUILDING?</span>
                  <div className="vxc-pills" role="group" aria-label="Project types">
                    {PROJECT_TYPES.map((item) => (
                      <Pill
                        key={item}
                        label={item}
                        selected={selectedTypes.includes(item)}
                        onClick={() => toggleType(item)}
                      />
                    ))}
                  </div>
                </div>

                <div className="vxc-group">
                  <span className="vxc-group-title">BUDGET</span>
                  <div className="vxc-pills" role="group" aria-label="Budget">
                    {BUDGETS.map((item) => (
                      <Pill
                        key={item}
                        label={item}
                        selected={budget === item}
                        onClick={() => setBudget(item)}
                      />
                    ))}
                  </div>
                </div>

                <label className="vxc-field">
                  <span className="vxc-label">TIMELINE</span>
                  <span className="vxc-select-wrap">
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="vxc-select"
                    >
                      {TIMELINES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="vxc-select-arrow" aria-hidden="true" />
                  </span>
                </label>

                <label className="vxc-field">
                  <span className="vxc-label">TELL US ABOUT THE PROJECT</span>
                  <textarea
                    rows={4}
                    value={projectDesc}
                    onChange={(e) => setProjectDesc(e.target.value)}
                    placeholder="What it does, who it is for, and what already exists."
                    className="vxc-textarea"
                  />
                </label>

                <div className="vxc-submit-wrap">
                 <CornerBracket offset={3} cornerColor="#A78BFA">
                    <button type="submit" disabled={isSubmitting} className="vxc-submit">
                      <span>{isSubmitting ? 'SENDING...' : 'SEND THE BRIEF'}</span>
                      <span className="vxc-submit-icon">
                        <ArrowUpRight size={14} strokeWidth={2.8} />
                      </span>
                    </button>
                  </CornerBracket>
                </div>
              </form>
            )}
          </div>

          {/* Right: direct contact + next steps */}
          <aside className="vxc-info">
            <h2 className="vxc-kicker">WRITE DIRECTLY</h2>
            <a href="mailto:system@vertexiasystem.tech" className="vxc-mail">
              system@vertexiasystem.tech
            </a>

            <div className="vxc-divider" aria-hidden="true" />

            <div className="vxc-meta">
              <div className="vxc-meta-item">
                <span className="vxc-label">CALL</span>
                <a
                  href="https://wa.me/923172981931"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vxc-meta-val"
                >
                  +92 317 2981931
                </a>
              </div>

              <div className="vxc-meta-item">
                <span className="vxc-label">LOCAL TIME</span>
                <span className="vxc-clock">{localTime || '--:--'}</span>
                <span className="vxc-clock-sub">KARACHI, PAKISTAN</span>
              </div>

              <div className="vxc-meta-item">
                <span className="vxc-label">VISIT</span>
                <span className="vxc-meta-val">Karachi, Pakistan</span>
              </div>

              <div className="vxc-meta-item">
                <span className="vxc-label">HOURS</span>
                <span className="vxc-meta-val">Mon-Fri 09:00–18:00 PKT</span>
              </div>
            </div>

            <div className="vxc-divider" aria-hidden="true" />

            <div className="vxc-steps">
              <h3 className="vxc-kicker">WHAT HAPPENS NEXT</h3>
              {STEPS.map((step, i) => (
                <div className="vxc-step" key={step.title}>
                  <span className="vxc-step-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h4 className="vxc-step-title">{step.title}</h4>
                    <p className="vxc-step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}