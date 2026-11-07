import React, { useState, useMemo } from 'react';
import './Impact.css';

export default function Impact() {
  const [hoveredCell, setHoveredCell] = useState(null);

  // Generate 52 weeks x 7 days heatmap grid matching screenshot 1
  const heatmapData = useMemo(() => {
    // Deterministic pseudo-random seed pattern to match the screenshot's density
    const weeks = [];
    const baseCommitTotal = 3412;
    let runningCommits = 0;

    // Pattern seed values for 52 columns x 7 rows
    const seedPattern = [
      0, 2, 1, 3, 0, 4, 1, 2, 0, 3, 4, 1, 0, 2, 3, 1, 4, 0, 2, 1,
      3, 4, 0, 1, 2, 3, 0, 4, 1, 2, 0, 3, 4, 2, 1, 0, 3, 4, 1, 2,
      0, 3, 1, 4, 2, 0, 3, 1, 4, 2, 3, 0, 1, 4, 2, 0, 3, 1, 4, 2,
      3, 0, 2, 4, 1, 3, 0, 2, 4, 1, 0, 3, 2, 4, 1, 0, 3, 2, 4, 1,
      0, 2, 4, 3, 1, 0, 2, 4, 3, 1, 0, 2, 4, 3, 1, 0, 2, 4, 3, 1
    ];

    for (let w = 0; w < 52; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const seedIndex = (w * 7 + d) % seedPattern.length;
        // Bias higher commits on weekdays, fewer on weekends
        let level = seedPattern[seedIndex];
        if (d === 0 || d === 6) { // Sun or Sat
          level = level > 1 ? level - 1 : 0;
        }

        // Commit count based on level
        const count = level === 4 ? Math.floor(18 + (w % 9)) :
                      level === 3 ? Math.floor(11 + (w % 6)) :
                      level === 2 ? Math.floor(6 + (w % 4)) :
                      level === 1 ? Math.floor(2 + (w % 3)) : 0;

        runningCommits += count;
        days.push({
          day: d,
          week: w,
          level,
          count,
        });
      }
      weeks.push(days);
    }
    return weeks;
  }, []);

  const stats = [
    { value: '10+', label: 'PRODUCTS SHIPPED', isAccent: true },
    { value: '99.98%', label: 'UPTIME ACROSS CLIENT APPS', isAccent: false },
    { value: '2 weeks', label: 'TO THE FIRST RELEASE', isAccent: false },
    { value: '4.9/5', label: 'AVERAGE CLIENT RATING', isAccent: false },
  ];

  const dayLabels = ['MON', '', 'WED', '', 'FRI', '', 'SUN'];

  return (
    <section className="impact-section" id="impact" aria-label="A year of shipping, one square a day.">
      <div className="impact-container">
        {/* Section Header */}
        <div className="impact-head">
          <div className="impact-title-group">
            <div className="impact-pill">
              <span className="pill-cube" aria-hidden="true"></span>
              <span className="pill-bracket">[</span>
              <span className="pill-label">IMPACT</span>
              <span className="pill-bracket">]</span>
            </div>

            <h2 className="impact-headline">
              A YEAR OF <span className="impact-accent">SHIPPING,</span>
              <br />
              ONE SQUARE A DAY.
            </h2>
          </div>

          <p className="impact-description">
            Commits to client repositories over the last 12 months. Every purple square is working software going out.
          </p>
        </div>

        {/* 4 Big Impact Stats Strip */}
        <div className="impact-stats-row">
          {stats.map((stat, idx) => (
            <div key={idx} className={`impact-stat-col ${stat.isAccent ? 'is-accent-stat' : ''}`}>
              <span className="impact-stat-val">{stat.value}</span>
              <span className="impact-stat-lbl">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Heatmap Matrix Display */}
        <div className="heatmap-wrapper">
          <div className="heatmap-layout">
            {/* Left Day Labels */}
            <div className="heatmap-days" aria-hidden="true">
              {dayLabels.map((label, idx) => (
                <span key={idx} className="day-name">{label}</span>
              ))}
            </div>

            {/* 52 Columns Grid */}
            <div className="heatmap-grid" role="grid" aria-label="Commit activity calendar">
              {heatmapData.map((week, wIdx) => (
                <div key={wIdx} className="heatmap-col">
                  {week.map((cell, dIdx) => (
                    <div
                      key={dIdx}
                      className={`heatmap-square lvl-${cell.level}`}
                      onMouseEnter={() => setHoveredCell(cell)}
                      onMouseLeave={() => setHoveredCell(null)}
                      title={`${cell.count} commits on week ${wIdx + 1}, day ${dIdx + 1}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Heatmap Footer Legend & Commit Counter */}
          <div className="heatmap-footer">
            <span className="commits-counter">3,412 COMMITS IN THE LAST YEAR</span>

            <div className="heatmap-legend" aria-label="Heatmap scale">
              <span className="legend-label">LESS</span>
              <span className="legend-square lvl-0" aria-hidden="true"></span>
              <span className="legend-square lvl-1" aria-hidden="true"></span>
              <span className="legend-square lvl-2" aria-hidden="true"></span>
              <span className="legend-square lvl-3" aria-hidden="true"></span>
              <span className="legend-square lvl-4" aria-hidden="true"></span>
              <span className="legend-label">MORE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
