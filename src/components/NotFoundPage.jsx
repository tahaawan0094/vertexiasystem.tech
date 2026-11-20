import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PixelDigits from './PixelDigits';
import './NotFoundPage.css';

export default function NotFoundPage() {
  useEffect(() => {
    // Scroll to top on mount
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    document.title = '404 — Page Not Found | VERTEXIA';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        '404 Error: The page you are looking for does not exist on VERTEXIA System.'
      );
    }

    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'noindex, nofollow');

    return () => {
      if (metaRobots) {
        metaRobots.setAttribute('content', 'index, follow');
      }
    };
  }, []);

  const handleNavigate = (e, path) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="nf-page-root">
      {/* Real Site Navbar */}
      <div className="page-container" style={{ paddingTop: '16px' }}>
        <Navbar />
      </div>

      <main className="nf-main-sec">
        <div className="nf-wrap">
          {/* Top Label */}
          <div className="nf-eb">[ ERROR 404 / NOT FOUND ]</div>

          {/* Central 404 Pixel-Art Grid Display */}
          <div className="nf-digits-box" aria-hidden="true">
            <div className="nf-digits-glow" />
            <PixelDigits value="404" className="nf-pixel-digits" />
          </div>

          <h1 className="nf-title">
            LOST IN THE <em>CODEBASE.</em>
          </h1>

          <p className="nf-desc">
            The page you requested doesn't exist, has been moved, or the URL might be mistyped.
          </p>

          <div className="nf-cta-row">
            <a
              href="/"
              onClick={(e) => handleNavigate(e, '/')}
              className="nf-btn nf-btn-br"
            >
              <span>Return to Home</span>
              <i aria-hidden="true">↗</i>
            </a>
            <a
              href="/contact"
              onClick={(e) => handleNavigate(e, '/contact')}
              className="nf-btn nf-btn-outline"
            >
              <span>Contact Us</span>
              <i aria-hidden="true">↗</i>
            </a>
          </div>

          {/* Quick Helpful Directory */}
          <div className="nf-directory-card nf-card-br">
            <span className="nf-dir-tag">QUICK DIRECTORY</span>
            <div className="nf-dir-links">
              <a href="/products/pharmacy-pos" onClick={(e) => handleNavigate(e, '/products/pharmacy-pos')}>
                Pharmacy POS ↗
              </a>
              <a href="/products/garage-crm" onClick={(e) => handleNavigate(e, '/products/garage-crm')}>
                Garage CRM ↗
              </a>
              <a href="/process" onClick={(e) => handleNavigate(e, '/process')}>
                Process ↗
              </a>
              <a href="/pricing" onClick={(e) => handleNavigate(e, '/pricing')}>
                Pricing ↗
              </a>
              <a href="/about" onClick={(e) => handleNavigate(e, '/about')}>
                About ↗
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Real Site Footer */}
      <Footer />
    </div>
  );
}
