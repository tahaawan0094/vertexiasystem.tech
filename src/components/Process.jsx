import React from 'react';
import './Process.css';

export default function Process() {
  const steps = [
    {
      id: 'PHASE',
      timeframe: '01',
      title: 'DISCOVER',
      description: 'We analyze your business requirements, map out store workflows, and finalize the exact system scope.',
      tags: ['REQUIREMENT ANALYSIS', 'WORKFLOW MAPPING', 'SCOPE & ESTIMATE'],
    },
    {
      id: 'PHASE',
      timeframe: '02',
      title: 'DESIGN',
      description: 'Intuitive UI/UX design, POS screen layouts, and clickably optimized user flows for fast cashier billing.',
      tags: ['POS INTERFACE', 'USER FLOWS', 'DESIGN SYSTEM'],
    },
    {
      id: 'PHASE',
      timeframe: '03',
      title: 'BUILD',
      description: 'Core backend architecture, database setup, POS terminal integration, and rigorous module testing.',
      tags: ['CORE ARCHITECTURE', 'POS & INVENTORY', 'TESTING & QA'],
    },
    {
      id: 'PHASE',
      timeframe: '04',
      title: 'SHIP',
      description: 'Final deployment on local hardware or cloud, staff training, and live system monitoring support.',
      tags: ['DEPLOYMENT', 'STAFF TRAINING', 'ONGOING SUPPORT'],
    },
  ];

  return (
    <section className="process-section" id="process" aria-label="Our development process.">
      <div className="process-container">
        {/* Section Header */}
        <div className="process-head">
          <div className="process-title-group">
            <div className="process-pill">
              <span className="pill-cube" aria-hidden="true"></span>
              <span className="pill-bracket">[</span>
              <span className="pill-label">PROCESS</span>
              <span className="pill-bracket">]</span>
            </div>

            <h2 className="process-headline">
              OUR DEVELOPMENT
              <br />
              <span className="process-accent">PROCESS.</span>
            </h2>
          </div>

          <p className="process-description">
            Every project runs on a structured milestone board: clear tracking, transparent sprints, and reliable delivery.
          </p>
        </div>

        {/* 4 Process Steps List */}
        <div className="process-steps" role="list">
          {steps.map((step) => (
            <div key={step.timeframe} className="process-step-row" role="listitem">
              {/* Left Square Icon with inner black mark */}
              <div className="step-icon" aria-hidden="true">
                <span className="step-dot"></span>
              </div>

              {/* Step Content */}
              <div className="step-content">
                <div className="step-meta">
                  <span className="step-id">{step.id}</span>
                  <span className="step-time">{step.timeframe}</span>
                </div>

                <h3 className="step-title">{step.title}</h3>

                <p className="step-desc">{step.description}</p>

                <div className="step-tags" role="list">
                  {step.tags.map((tag) => (
                    <span key={tag} className="step-tag-pill" role="listitem">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
