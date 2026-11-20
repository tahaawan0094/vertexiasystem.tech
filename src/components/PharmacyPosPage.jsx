import React, { useState, useEffect, useRef } from 'react';
import { Play, Check, Download } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import CubeScene from './CubeScene';
import { triggerDownload } from '../constants/downloadUrls';
import './PharmacyPosPage.css';

const CHAPTERS = [
  { title: 'Dashboard', desc: 'Sales, low stock and expiring items.', time: 0, label: '01' },
  { title: 'Add stock', desc: 'Batches, expiry and purchase price.', time: 20, label: '02' },
  { title: 'Make a sale', desc: 'Scan, discount, print the bill.', time: 45, label: '03' },
  { title: 'Returns, reports', desc: 'Returns and daily profit.', time: 75, label: '04' },
  { title: 'Offline mode', desc: 'Keep selling, then sync.', time: 100, label: '05' },
];

const FAQ_ITEMS = [
  {
    q: 'How much does it cost to use the software?',
    a: 'Pharmacy POS is $199 as a one-time license, or $20 per month for cloud access with sync, backups and updates.',
  },
  {
    q: 'Does it work without internet?',
    a: 'Yes. Billing and stock run on a local database at your counter. Data syncs to the cloud when you’re back online.',
  },
  {
    q: 'Can I move my existing stock list in?',
    a: 'Yes. Send us your current sheet and we’ll help import it during the 30 days of launch setup.',
  },
  {
    q: 'What hardware do I need?',
    a: 'A Windows PC is enough. A barcode scanner and a thermal receipt printer make billing faster.',
  },
  {
    q: 'What happens after launch?',
    a: 'You get updates and support. Monthly plans include priority WhatsApp, phone and remote desktop help.',
  },
];

// Exact 9x9 Pixel Medical Cross from user reference:
// '.' = empty/hidden, 'W' = cream/white lit, 'P' = purple accent lit
const CROSS_MATRIX = [
  ['.', '.', '.', 'W', 'P', 'W', '.', '.', '.'],
  ['.', '.', '.', 'P', 'W', 'W', '.', '.', '.'],
  ['.', '.', '.', 'W', 'W', 'W', '.', '.', '.'],
  ['W', 'P', 'W', 'W', 'W', 'P', 'W', 'W', 'W'],
  ['P', 'W', 'W', 'W', 'P', 'W', 'W', 'W', 'P'],
  ['W', 'W', 'W', 'P', 'W', 'W', 'W', 'P', 'W'],
  ['.', '.', '.', 'W', 'W', 'W', '.', '.', '.'],
  ['.', '.', '.', 'W', 'W', 'P', '.', '.', '.'],
  ['.', '.', '.', 'W', 'P', 'W', '.', '.', '.'],
];

function PixelMedicalCross() {
  return (
    <div className="phm-pixel-cross" aria-label="Medical pixel cross" role="img">
      {CROSS_MATRIX.map((row, r) =>
        row.map((cell, c) => {
          if (cell === '.') {
            return <span key={`${r}-${c}`} className="px-dot px-off" aria-hidden="true" />;
          }
          const isPurple = cell === 'P';
          const delay = ((r + c) * 0.04).toFixed(2);
          return (
            <span
              key={`${r}-${c}`}
              style={{ animationDelay: `${delay}s` }}
              className={`px-dot px-on ${isPurple ? 'px-v' : ''}`}
            />
          );
        })
      )}
    </div>
  );
}

export default function PharmacyPosPage() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(118);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  // FAQ Terminal Typing Effect
  const [activeFaq, setActiveFaq] = useState(0);
  const [typedAnswer, setTypedAnswer] = useState(FAQ_ITEMS[0].a);
  const typingTimerRef = useRef(null);

  // Closing CTA form state
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Download feedback toast state
  const [downloadToast, setDownloadToast] = useState(null);

  const handleDownloadMedKit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    triggerDownload('pharmacyPos');
    setDownloadToast('Downloading MedKit.POS.Setup.exe (v1.2.1)...');
    setTimeout(() => setDownloadToast(null), 4500);
  };

  const handleScrollTo = (e, hash) => {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -60 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    // Scroll to top
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // Dynamic SEO Metadata
    document.title = 'Pharmacy POS — MedKit POS | VERTEXIA';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'MedKit POS by Vertexia: offline-first pharmacy billing with batch and expiry tracking. $199 one-time or $20 per month.'
      );
    }
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://vertexiasystem.tech/products/pharmacy-pos';

    // Initialize Video Frame (seek to 14s for clean real-software UI view before playback)
    const v = videoRef.current;
    if (v) {
      const capturePoster = () => {
        if (!hasStarted && v && !v.poster) {
          try {
            const canvas = document.createElement('canvas');
            canvas.width = v.videoWidth || 1280;
            canvas.height = v.videoHeight || 720;
            const ctx = canvas.getContext('2d');
            if (ctx && canvas.width > 0 && canvas.height > 0) {
              ctx.drawImage(v, 0, 0, canvas.width, canvas.height);
              const dataUrl = canvas.toDataURL('image/jpeg', 0.88);
              if (dataUrl && dataUrl.length > 500) {
                v.poster = dataUrl;
              }
            }
          } catch (err) {
            // Ignore if security restriction applies
          }
        }
      };

      const initFrame = () => {
        if (!hasStarted && v.currentTime === 0) {
          v.currentTime = 14.0; // Clean software interface frame from actual video
        }
      };

      v.addEventListener('seeked', capturePoster, { once: true });
      if (v.readyState >= 2) {
        initFrame();
      } else {
        v.addEventListener('loadeddata', initFrame, { once: true });
      }
    }

    // Scroll Reveal Intersection Observer
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isReduced) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('phm-in-view');
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );

      const elements = document.querySelectorAll('.phm-reveal, .phm-reveal-card');
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [hasStarted]);

  // Sync Video Time & Chapters
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    setCurrentTime(curr);

    let idx = 0;
    for (let i = 0; i < CHAPTERS.length; i++) {
      if (curr >= CHAPTERS[i].time) {
        idx = i;
      }
    }
    setActiveChapterIndex(idx);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeekChapter = (seekTime, idx) => {
    if (!videoRef.current) return;
    setHasStarted(true);
    videoRef.current.currentTime = seekTime;
    videoRef.current.play();
    setIsPlaying(true);
    setActiveChapterIndex(idx);
  };

  const handleStartPlayback = () => {
    if (!videoRef.current) return;
    setHasStarted(true);
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
    setActiveChapterIndex(0);
  };

  // Typing effect for FAQ terminal
  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fullText = FAQ_ITEMS[activeFaq].a;

    if (isReducedMotion) {
      setTypedAnswer(fullText);
      return;
    }

    setTypedAnswer('');
    let n = 0;
    clearInterval(typingTimerRef.current);
    typingTimerRef.current = setInterval(() => {
      n += 2;
      setTypedAnswer(fullText.slice(0, n));
      if (n >= fullText.length) {
        clearInterval(typingTimerRef.current);
      }
    }, 18);

    return () => clearInterval(typingTimerRef.current);
  }, [activeFaq]);

  const handleContactClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', '/contact');
    window.dispatchEvent(new PopStateEvent('popstate'));
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handlePricingClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', '/pricing');
    window.dispatchEvent(new PopStateEvent('popstate'));
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleCtaSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch('https://formsubmit.co/ajax/system@vertexiasystem.tech', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email,
          _subject: 'MedKit Pharmacy POS Quote Request',
          product: 'MedKit POS',
        }),
      });
    } catch (err) {
      console.warn('Submission notice:', err);
    } finally {
      setSubmitted(true);
    }
  };

  const formatSecs = (sec) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="phm-page-root">
      {/* Real Site Navbar */}
      <div className="page-container" style={{ paddingTop: '16px' }}>
        <Navbar />
      </div>

      {/* =========================================================================
          SECTION 1: HERO (Dark #070708 + Medical Cross + Animated Stats)
          ========================================================================= */}
      <header className="phm-hero-sec" id="top">
        <div className="phm-wrap">
          <div className="phm-hero-grid">
            <div className="phm-hero-copy">
              <div className="phm-eb">[ Products / Pharmacy POS ]</div>
              <h1 className="phm-h1">
                Pharmacy POS that <em>sells.</em>
              </h1>
              <p className="phm-lead">
                MedKit POS handles billing, batches, expiry dates and stock at your counter. It runs on your own computer, so a slow connection never stops a sale.
              </p>
              <div className="phm-cta-row">
                <a
                  href="/download/pharmacy-pos"
                  onClick={handleDownloadMedKit}
                  className="phm-btn phm-btn-br phm-hover-glow"
                  title="Try MedKit POS free for 1 month"
                >
                  <span>Try Free For 1 Month</span>
                  <i aria-hidden="true">↗</i>
                </a>
                <a
                  href="/contact"
                  onClick={handleContactClick}
                  className="phm-btn phm-btn-outline phm-hover-outline"
                >
                  <span>Request a Walkthrough</span>
                  <i aria-hidden="true">↗</i>
                </a>
              </div>
            </div>

            {/* Right: 9x9 Pixel Medical Cross with Breathing Pulse */}
            <div className="phm-hero-visual">
              <div className="phm-cross-wrapper">
                <PixelMedicalCross />
                <div className="phm-cross-ambient" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* 3 Stats Bar with Animated Counter Shimmer */}
          <div className="phm-stats-row">
            <div className="phm-stat-box">
              <b className="phm-stat-val">$199</b>
              <span className="phm-stat-label">One-time license</span>
            </div>
            <div className="phm-stat-box">
              <b className="phm-stat-val">$20</b>
              <span className="phm-stat-label">Per month, cloud</span>
            </div>
            <div className="phm-stat-box">
              <b className="phm-stat-val">0</b>
              <span className="phm-stat-label">Surprise fees</span>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          SECTION 2: DEMO VIDEO (Real Frame Preview + Chapter Seeking)
          ========================================================================= */}
      <section className="phm-sec phm-sec-light" id="demo">
        <div className="phm-wrap">
          <div className="phm-sec-head phm-reveal">
            <div>
              <div className="phm-eb">[ 01 / Demo ]</div>
              <h2 className="phm-h2">
                A pharmacy day in <em>two minutes.</em>
              </h2>
            </div>
            <p className="phm-head-p">
              From adding stock to closing the day’s report. Press play or jump to a chapter.
            </p>
          </div>

          <div className="phm-demo-grid">
            {/* Left: Real Video Player with Real Software UI Frame */}
            <div className="phm-player-box phm-card-br phm-reveal">
              <div className="phm-video-inner-container">
                <video
                  ref={videoRef}
                  src="/products/PHARMACY POS DEMO VIDEO.mp4#t=14.0"
                  controls
                  playsInline
                  preload="auto"
                  className="phm-video-tag"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onPlay={() => {
                    setIsPlaying(true);
                    setHasStarted(true);
                  }}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Floating Interactive Play Overlay (fades out on play) */}
                {!hasStarted && (
                  <div className="phm-play-overlay" onClick={handleStartPlayback}>
                    <button className="phm-play-circle" aria-label="Play video demo">
                      <Play size={26} fill="currentColor" />
                    </button>
                    <span className="phm-play-hint">WATCH REAL SOFTWARE DEMO</span>
                  </div>
                )}
              </div>

              {/* Progress Ticker Overlay Bar */}
              <div className="phm-video-ticker">
                <span className="phm-ticker-time">{formatSecs(currentTime)}</span>
                <div className="phm-ticker-bar">
                  <i style={{ width: `${(currentTime / (duration || 118)) * 100}%` }} />
                </div>
                <span className="phm-ticker-time">{formatSecs(duration || 118)}</span>
              </div>
            </div>

            {/* Right: Chapter Seeking List */}
            <div className="phm-chapters-list phm-reveal">
              {CHAPTERS.map((ch, idx) => {
                const isActive = activeChapterIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`phm-chapter-btn ${isActive ? 'active' : ''}`}
                    onClick={() => handleSeekChapter(ch.time, idx)}
                  >
                    <span className="ch-num">{ch.label}</span>
                    <span className="ch-info">
                      <b className="ch-title">{ch.title}</b>
                      <span className="ch-desc">{ch.desc}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WORKFLOW (Dark #070708 Canvas - 4 Steps Animated)
          ========================================================================= */}
      <section className="phm-sec phm-sec-dark" id="workflow">
        <div className="phm-wrap">
          <div className="phm-sec-head phm-reveal">
            <div>
              <div className="phm-eb">[ 02 / Workflow ]</div>
              <h2 className="phm-h2">
                From shelf to sale in <em>four steps.</em>
              </h2>
            </div>
            <p className="phm-head-p">
              It follows how a pharmacy counter already works, so staff learn it in an afternoon.
            </p>
          </div>

          <div className="phm-flow-grid">
            <div className="phm-flow-step phm-reveal-card" style={{ transitionDelay: '0.05s' }}>
              <i className="phm-flow-corner" aria-hidden="true" />
              <span className="phm-flow-num">Step 01</span>
              <h3 className="phm-flow-title">Add stock</h3>
              <p className="phm-flow-desc">
                Receive medicines with batch, expiry and purchase price. Import your existing list.
              </p>
            </div>

            <div className="phm-flow-step phm-reveal-card" style={{ transitionDelay: '0.15s' }}>
              <i className="phm-flow-corner" aria-hidden="true" />
              <span className="phm-flow-num">Step 02</span>
              <h3 className="phm-flow-title">Sell</h3>
              <p className="phm-flow-desc">
                Search by name or scan a barcode. The oldest batch is suggested first.
              </p>
            </div>

            <div className="phm-flow-step phm-reveal-card" style={{ transitionDelay: '0.25s' }}>
              <i className="phm-flow-corner" aria-hidden="true" />
              <span className="phm-flow-num">Step 03</span>
              <h3 className="phm-flow-title">Print</h3>
              <p className="phm-flow-desc">
                Thermal receipt in seconds with your pharmacy name and details.
              </p>
            </div>

            <div className="phm-flow-step phm-reveal-card" style={{ transitionDelay: '0.35s' }}>
              <i className="phm-flow-corner" aria-hidden="true" />
              <span className="phm-flow-num">Step 04</span>
              <h3 className="phm-flow-title">Review</h3>
              <p className="phm-flow-desc">
                See sales, profit and what to reorder before you close.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FEATURES (Cream #ECE7DD Canvas - 7 Counter Cards)
          ========================================================================= */}
      <section className="phm-sec phm-sec-light" id="features">
        <div className="phm-wrap">
          <div className="phm-sec-head phm-reveal">
            <div>
              <div className="phm-eb">[ 03 / Features ]</div>
              <h2 className="phm-h2">
                Built for the <em>counter.</em>
              </h2>
            </div>
            <p className="phm-head-p">
              Practical pharmacy tools, not a generic retail template.
            </p>
          </div>

          <div className="phm-feat-grid">
            {/* Card 1: Wide Dark Card */}
            <div className="phm-card phm-card-dark phm-card-span2 phm-card-br phm-reveal-card">
              <span className="phm-card-tag">Offline-first</span>
              <h3 className="phm-card-title">Works without internet</h3>
              <p className="phm-card-desc">
                Billing and stock run on a local database at your counter. Cloud sync catches up whenever you’re connected.
              </p>
            </div>

            {/* Card 2 */}
            <div className="phm-card phm-card-light phm-card-br phm-reveal-card" style={{ transitionDelay: '0.1s' }}>
              <span className="phm-card-tag">Billing</span>
              <h3 className="phm-card-title">Barcode billing</h3>
              <p className="phm-card-desc">
                Search, scan, discount and print without leaving the keyboard.
              </p>
            </div>

            {/* Card 3 */}
            <div className="phm-card phm-card-light phm-card-br phm-reveal-card" style={{ transitionDelay: '0.15s' }}>
              <span className="phm-card-tag">Inventory</span>
              <h3 className="phm-card-title">Batch and expiry</h3>
              <p className="phm-card-desc">
                Every batch has its own expiry date. Near-expiry items are flagged early.
              </p>
            </div>

            {/* Card 4 */}
            <div className="phm-card phm-card-light phm-card-br phm-reveal-card" style={{ transitionDelay: '0.2s' }}>
              <span className="phm-card-tag">Alerts</span>
              <h3 className="phm-card-title">Low-stock warnings</h3>
              <p className="phm-card-desc">
                Set a minimum per item and see what to reorder.
              </p>
            </div>

            {/* Card 5 */}
            <div className="phm-card phm-card-light phm-card-br phm-reveal-card" style={{ transitionDelay: '0.25s' }}>
              <span className="phm-card-tag">Reports</span>
              <h3 className="phm-card-title">Sales and profit</h3>
              <p className="phm-card-desc">
                Daily, weekly and monthly numbers, per item or per user.
              </p>
            </div>

            {/* Card 6 */}
            <div className="phm-card phm-card-light phm-card-br phm-reveal-card" style={{ transitionDelay: '0.3s' }}>
              <span className="phm-card-tag">Mobile</span>
              <h3 className="phm-card-title">Companion app</h3>
              <p className="phm-card-desc">
                Check stock and sales from your phone when you’re away.
              </p>
            </div>

            {/* Card 7 */}
            <div className="phm-card phm-card-light phm-card-br phm-reveal-card" style={{ transitionDelay: '0.35s' }}>
              <span className="phm-card-tag">Safety</span>
              <h3 className="phm-card-title">Cloud backups</h3>
              <p className="phm-card-desc">
                Automated offsite backups so a broken PC never ends your records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OFFLINE SYNC (Dark #070708 - Split Terminal Panel)
          ========================================================================= */}
      <section className="phm-sec phm-sec-dark" id="offline">
        <div className="phm-wrap phm-split-grid">
          <div className="phm-split-copy phm-reveal">
            <div className="phm-eb">[ Offline sync ]</div>
            <h2 className="phm-h2">
              No internet? <em>Keep selling.</em>
            </h2>
            <ul className="phm-tick-list">
              <li>Every sale is saved on the counter PC first</li>
              <li>Syncs to the cloud when internet returns</li>
              <li>Same data on the mobile companion app</li>
              <li>Multi-branch sync on the monthly plan</li>
            </ul>
          </div>

          {/* Right: Terminal Frame with Breathing Scanline */}
          <div className="phm-terminal-box phm-card-br phm-reveal">
            <div className="phm-terminal-bar">
              <div className="term-dots">
                <span className="dot-red" />
                <span className="dot-yellow" />
                <span className="dot-green" />
              </div>
              <span className="term-title">medkit — sync</span>
            </div>
            <div className="phm-terminal-body">
              <div>
                <span className="term-muted">$</span> medkit sync --status
              </div>
              <div className="term-yellow">&gt; internet: offline · selling locally</div>
              <div className="term-muted">&gt; 14 bills saved on this PC</div>
              <div className="term-green">&gt; internet: back online · syncing…</div>
              <div className="term-green">
                &gt; 14 bills synced to cloud ✓<span className="term-cursor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PRICING (Cream #ECE7DD Canvas - Two Cards)
          ========================================================================= */}
      <section className="phm-sec phm-sec-light" id="pricing">
        <div className="phm-wrap">
          <div className="phm-sec-head phm-reveal">
            <div>
              <div className="phm-eb">[ 04 / Pricing ]</div>
              <h2 className="phm-h2">
                Clear prices, <em>no surprises.</em>
              </h2>
            </div>
            <p className="phm-head-p">
              Own the software for life, or pay monthly for cloud access. Prices in USD.
            </p>
          </div>

          <div className="phm-pricing-grid">
            {/* Card 1: One-time license (Light Card) */}
            <div className="phm-price-card phm-price-light phm-card-br phm-reveal-card">
              <span className="phm-price-tag">01 · One-time license</span>
              <h3 className="phm-price-title">Pharmacy POS</h3>
              <p className="phm-price-sub">
                Complete software with lifetime ownership and zero recurring fees.
              </p>
              <div className="phm-price-amount">
                $199<small>Fixed price</small>
              </div>

              <ul className="phm-price-bullets">
                <li>Offline-first local database and counter sync</li>
                <li>Barcode billing, inventory and thermal receipt printing</li>
                <li>Unlimited transactions, items, ledgers and users</li>
                <li>Lifetime license, pay once, keep forever</li>
                <li>30 days of launch setup and onboarding support</li>
              </ul>

              <a href="/pricing" onClick={handlePricingClick} className="phm-btn phm-btn-br phm-hover-glow">
                <span>Get one-time license</span>
                <i aria-hidden="true">↗</i>
              </a>
            </div>

            {/* Card 2: Monthly access (Dark Card) */}
            <div className="phm-price-card phm-price-dark phm-card-br phm-reveal-card" style={{ transitionDelay: '0.15s' }}>
              <span className="phm-price-tag">02 · Monthly access</span>
              <h3 className="phm-price-title">Pharmacy POS Cloud</h3>
              <p className="phm-price-sub">
                Low upfront cost with automated cloud sync, hosting and updates.
              </p>
              <div className="phm-price-amount">
                $20<small>Per month</small>
              </div>

              <ul className="phm-price-bullets">
                <li>Full cloud access to Pharmacy POS</li>
                <li>Real-time multi-branch and counter synchronization</li>
                <li>Automated daily offsite cloud backups and recovery</li>
                <li>Continuous feature updates and patches</li>
                <li>Priority WhatsApp, phone and remote desktop support</li>
              </ul>

              <a href="/pricing" onClick={handlePricingClick} className="phm-btn phm-btn-br phm-hover-glow">
                <span>Start monthly plan</span>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </div>

          <div className="phm-pricing-footnote phm-reveal">
            Prices in USD · No lock-in · Cancel with 30 days notice
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: FAQ (Dark #070708 Canvas - Interactive Terminal Simulator)
          ========================================================================= */}
      <section className="phm-sec phm-sec-dark" id="faq">
        <div className="phm-wrap">
          <div className="phm-sec-head phm-reveal">
            <div>
              <div className="phm-eb">[ 05 / FAQ ]</div>
              <h2 className="phm-h2">
                Questions, <em>answered.</em>
              </h2>
            </div>
            <p className="phm-head-p">
              Pick a question. The answer runs in the terminal, like everything else we ship.
            </p>
          </div>

          <div className="phm-faq-grid">
            {/* Left: Questions List */}
            <div className="phm-faq-questions phm-reveal">
              {FAQ_ITEMS.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`phm-faq-btn ${activeFaq === idx ? 'active' : ''}`}
                  onClick={() => setActiveFaq(idx)}
                >
                  <span className="faq-num">0{idx + 1}</span>
                  <span className="faq-q-text">{item.q}</span>
                </button>
              ))}
            </div>

            {/* Right: Terminal Simulator */}
            <div className="phm-terminal-box phm-card-br phm-reveal">
              <div className="phm-terminal-bar">
                <div className="term-dots">
                  <span className="dot-red" />
                  <span className="dot-yellow" />
                  <span className="dot-green" />
                </div>
                <span className="term-title">vertexia — zsh</span>
              </div>
              <div className="phm-terminal-body">
                <div>
                  <span className="term-muted">$</span> vertexia faq -q 0{activeFaq + 1}
                </div>
                <div className="term-muted">&gt; {FAQ_ITEMS[activeFaq].q}</div>
                <div className="term-ans">
                  {typedAnswer}
                  <span className="term-cursor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CLOSING CTA (Put MedKit on your counter with 3D Cube)
          ========================================================================= */}
      <section className="phm-closing-cta-sec">
        <div className="phm-wrap phm-cta-grid">
          <div className="phm-cta-copy phm-reveal">
            <div className="phm-eb">[ Get started ]</div>
            <h2 className="phm-h2">
              Put MedKit <em>on your counter.</em>
            </h2>
            <p className="phm-cta-desc">
              Tell us about your pharmacy. You get a reply within one business day and help moving your existing stock list in.
            </p>

            {submitted ? (
              <div className="phm-cta-success">
                <Check size={18} />
                <span>Thank you! We will reply within 1 business day.</span>
              </div>
            ) : (
              <form className="phm-cta-form" onSubmit={handleCtaSubmit}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter your email..."
                  aria-label="Email address"
                  className="phm-email-input"
                />
                <button type="submit" className="phm-btn phm-btn-br phm-hover-glow">
                  <span>Get a quote</span>
                  <i aria-hidden="true">↗</i>
                </button>
              </form>
            )}
          </div>

          {/* Right: 3D Interactive Three.js Cube */}
          <div className="phm-cta-cube-col phm-reveal">
            <CubeScene />
          </div>
        </div>
      </section>

      {/* Floating Download Toast */}
      {downloadToast && (
        <div className="phm-download-toast" role="status" aria-live="polite">
          <Download size={16} className="phm-toast-icon" />
          <span>{downloadToast}</span>
        </div>
      )}

      {/* Real Site Footer */}
      <Footer />
    </div>
  );
}
