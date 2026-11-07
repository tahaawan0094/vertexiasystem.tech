import React, { useState } from 'react';
import './TechStack.css';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const tools = [
    { monogram: 'Re', name: 'React', category: 'WEB' },
    { monogram: 'N.', name: 'Next.js', category: 'WEB' },
    { monogram: 'TS', name: 'TypeScript', category: 'WEB' },
    { monogram: 'No', name: 'Node.js', category: 'WEB' },
    { monogram: 'Sw', name: 'Swift', category: 'MOBILE' },
    { monogram: 'Kt', name: 'Kotlin', category: 'MOBILE' },
    { monogram: 'RN', name: 'React Native', category: 'MOBILE' },
    { monogram: 'FL', name: 'Flutter', category: 'MOBILE' },
    { monogram: 'Py', name: 'Python', category: 'AI' },
    { monogram: 'Go', name: 'Go', category: 'CLOUD' },
    { monogram: 'Pg', name: 'Postgres', category: 'WEB' },
    { monogram: 'Rd', name: 'Redis', category: 'CLOUD' },
    { monogram: 'OA', name: 'OpenAI', category: 'AI' },
    { monogram: 'An', name: 'Anthropic', category: 'AI' },
    { monogram: 'LC', name: 'LangChain', category: 'AI' },
    { monogram: 'pv', name: 'pgvector', category: 'AI' },
    { monogram: 'AW', name: 'AWS', category: 'CLOUD' },
    { monogram: 'GC', name: 'GCP', category: 'CLOUD' },
    { monogram: 'Dk', name: 'Docker', category: 'CLOUD' },
    { monogram: 'Tf', name: 'Terraform', category: 'CLOUD' },
    { monogram: 'Vc', name: 'Vercel', category: 'WEB' },
    { monogram: 'St', name: 'Stripe', category: 'WEB' },
    { monogram: 'Fg', name: 'Figma', category: 'DESIGN' },
    { monogram: 'GA', name: 'GitHub Actions', category: 'CLOUD' },
  ];

  const filterTabs = [
    { key: 'ALL', label: 'ALL 24' },
    { key: 'WEB', label: 'WEB 07' },
    { key: 'MOBILE', label: 'MOBILE 04' },
    { key: 'AI', label: 'AI 05' },
    { key: 'CLOUD', label: 'CLOUD 07' },
  ];

  const filteredTools = tools.map((tool) => {
    const isVisible = activeCategory === 'ALL' || tool.category === activeCategory;
    return { ...tool, isVisible };
  });

  return (
    <section className="stack-section" id="stack" aria-label="The stack we build with">
      <div className="stack-container">
        {/* Section Header */}
        <div className="stack-head">
          <div className="stack-title-group">
            <div className="stack-pill">
              <span className="pill-cube" aria-hidden="true"></span>
              <span className="pill-bracket">[</span>
              <span className="pill-label">TECH STACK</span>
              <span className="pill-bracket">]</span>
            </div>

            <h2 className="stack-headline">
              THE STACK WE <span className="stack-accent">BUILD</span> WITH
            </h2>
          </div>

          <div className="stack-head-side">
            <p className="stack-description">
              We pick proven tools your clients already trust, so the software stays fast, scalable, and easy to maintain long after launch.
            </p>

            <div className="stack-counter-badge">
              <span className="stack-counter-num">24</span>
              <span className="stack-counter-lbl">TOOLS IN PRODUCTION</span>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="stack-tabs" role="tablist" aria-label="Filter technologies by domain">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`stack-tab-btn ${isActive ? 'is-active-tab' : ''}`}
                onClick={() => setActiveCategory(tab.key)}
              >
                <span className="tab-square-icon" aria-hidden="true"></span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 24 Tech Stack Tools Grid (6 columns x 4 rows) */}
        <div className="stack-grid" role="list">
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              className={`stack-cell ${tool.isVisible ? 'is-visible' : 'is-dimmed'}`}
              role="listitem"
            >
              <div className="stack-chip">
                {/* Monogram Box */}
                <div className="stack-monogram" aria-hidden="true">
                  <span>{tool.monogram}</span>
                </div>

                {/* Tool Name and Category */}
                <div className="stack-info">
                  <b className="tool-name">{tool.name}</b>
                  <span className="tool-category">{tool.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
