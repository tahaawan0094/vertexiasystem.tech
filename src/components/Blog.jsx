import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import CornerBracket from './CornerBracket';
import './Blog.css';

const articles = [
  {
    id: '01',
    category: 'Guide',
    readTime: '8 min',
    date: 'Sep 12, 2026',
    title: 'How to choose the right POS system for your retail or pharmacy business in 2026',
    summary: 'The real features behind successful store automation, offline data sync, and hardware integration.',
    image: 'https://framerusercontent.com/images/BoGoAYgmf8bUZ7Zolz2V2As4eo.webp?scale-down-to=1024',
    href: '#blog',
  },
  {
    id: '02',
    category: 'Engineering',
    readTime: '6 min',
    date: 'Aug 28, 2026',
    title: 'Building offline-first desktop apps using Electron and SQLite',
    summary: 'How we structure garage and pharmacy management software to ensure zero downtime during internet outages.',
    image: 'https://framerusercontent.com/images/9DDp7JI38TEcKgViPAxfTjU.webp?scale-down-to=1024',
    href: '#blog',
  },
  {
    id: '03',
    category: 'Process',
    readTime: '5 min',
    date: 'Aug 18, 2026',
    title: 'Why weekly software sprints keep POS deployments seamless',
    summary: 'Small releases, continuous testing, and the key rules that protect client inventory data.',
    image: 'https://framerusercontent.com/images/5fBw11VY1fYLa8hc2nNQwJz1Xw.webp?scale-down-to=1024',
    href: '#blog',
  },
];

export default function Blog() {
  return (
    <section className="blog-section" id="blog" aria-label="Notes from the build">
      <div className="blog-container">
        {/* Section Header */}
        <div className="blog-head">
          <div className="blog-title-group">
            <div className="blog-pill">
              <span className="pill-cube" aria-hidden="true"></span>
              <span className="pill-bracket">[</span>
              <span className="pill-label">INSIGHTS</span>
              <span className="pill-bracket">]</span>
            </div>

            <h2 className="blog-headline">
              NOTES FROM THE BUILD
            </h2>
          </div>

          <div className="blog-head-right">
            <p className="blog-description">
              What we learn shipping software every week: systems, POS engineering, and the habits that keep client projects on time.
            </p>

            <CornerBracket offset={3} cornerColor="rgba(0, 0, 0, 0.45)">
              <a href="#blog" className="action-button btn-blog-all">
                <span className="btn-title">ALL ARTICLES</span>
                <span className="btn-icon-box box-black">
                  <ArrowUpRight size={14} strokeWidth={2.8} />
                </span>
              </a>
            </CornerBracket>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="blog-grid" role="list">
          {articles.map((item, idx) => (
            <article 
              key={item.id} 
              className={`blog-card-item blog-card-offset-${idx}`}
              role="listitem"
            >
              <a href={item.href} className="blog-card-link">
                {/* Media Box */}
                <div className="blog-media-wrap">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="blog-image" 
                    loading="lazy" 
                  />
                  <span className="blog-chip" aria-hidden="true">
                    <ArrowUpRight size={16} strokeWidth={2.4} />
                  </span>
                  <span className="blog-idx-tag">{item.id}</span>
                </div>

                {/* Metadata Row */}
                <div className="blog-meta-row">
                  <span className="blog-category">{item.category}</span>
                  <span className="blog-meta-dot">·</span>
                  <span className="blog-read-time">{item.readTime}</span>
                  <span className="blog-date">{item.date}</span>
                </div>

                {/* Title */}
                <h3 className="blog-card-title">
                  <span>{item.title}</span>
                </h3>

                {/* Summary */}
                <p className="blog-card-summary">
                  {item.summary}
                </p>

                {/* Read Action Link */}
                <div className="blog-read-cta">
                  <span>READ</span>
                  <i className="blog-read-line" aria-hidden="true"></i>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
