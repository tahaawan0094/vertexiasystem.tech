import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from './components/Navbar';
import SubHeader from './components/SubHeader';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import Work from './components/Work';
import Process from './components/Process';
import Impact from './components/Impact';
import TechStack from './components/TechStack';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import ProcessPage from './components/ProcessPage';
import PricingPage from './components/PricingPage';
import PharmacyPosPage from './components/PharmacyPosPage';
import GarageCrmPage from './components/GarageCrmPage';
import NotFoundPage from './components/NotFoundPage';
import DownloadRedirectPage from './components/DownloadRedirectPage';
import { DOWNLOAD_CONFIG } from './constants/downloadUrls';
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern';
import './App.css';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname.toLowerCase();
      const h = window.location.hash.toLowerCase();
      if (p.startsWith('/contact') || h === '#contact-page') return '/contact';
      if (p.startsWith('/about') || h === '#about-page') return '/about';
      if (p.startsWith('/process') || p.startsWith('/work') || h === '#process-page' || h === '#work-page') return '/process';
      if (p.startsWith('/pricing') || h === '#pricing-page') return '/pricing';
      if (p.startsWith('/products/pharmacy-pos') || p.startsWith('/pharmacy-pos') || h === '#pharmacy-pos-page') return '/products/pharmacy-pos';
      if (p.startsWith('/products/garage-crm') || p.startsWith('/garage-crm') || h === '#garage-crm-page') return '/products/garage-crm';
      if (p.startsWith('/download/pharmacy-pos') || p.startsWith('/download/medkit-pos')) return '/download/pharmacy-pos';
      if (p.startsWith('/download/garage-crm') || p.startsWith('/download/garage-crm-setup')) return '/download/garage-crm';
      if (p === '/' || p === '' || p.startsWith('/#')) return '/';
      return '/404';
    }
    return '/';
  });

  // Initialize Lenis for weighted, physical smooth scrolling across the entire site
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      infinite: false,
    });

    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      const p = window.location.pathname.toLowerCase();
      const h = window.location.hash.toLowerCase();
      if (p.startsWith('/contact') || h === '#contact-page') {
        setCurrentPath('/contact');
        if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
        else window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (p.startsWith('/about') || h === '#about-page') {
        setCurrentPath('/about');
        if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
        else window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (p.startsWith('/process') || p.startsWith('/work') || h === '#process-page' || h === '#work-page') {
        setCurrentPath('/process');
        if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
        else window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (p.startsWith('/pricing') || h === '#pricing-page') {
        setCurrentPath('/pricing');
        if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
        else window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (p.startsWith('/products/pharmacy-pos') || p.startsWith('/pharmacy-pos') || h === '#pharmacy-pos-page') {
        setCurrentPath('/products/pharmacy-pos');
        if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
        else window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (p.startsWith('/products/garage-crm') || p.startsWith('/garage-crm') || h === '#garage-crm-page') {
        setCurrentPath('/products/garage-crm');
        if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
        else window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (p.startsWith('/download/pharmacy-pos') || p.startsWith('/download/medkit-pos')) {
        setCurrentPath('/download/pharmacy-pos');
        if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
        else window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (p.startsWith('/download/garage-crm') || p.startsWith('/download/garage-crm-setup')) {
        setCurrentPath('/download/garage-crm');
        if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
        else window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (p === '/' || p === '' || p.startsWith('/#')) {
        setCurrentPath('/');
      } else {
        setCurrentPath('/404');
        if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
        else window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    if (currentPath === '/') {
      document.title = 'VERTEXIA — Autonomous Software & POS Systems';
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Vertexia builds modern, offline-first Point of Sale (POS) and CRM software for pharmacies, garages, restaurants, and retail businesses.'
        );
      }
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.href = 'https://vertexiasystem.tech/';
      }
    }
  }, [currentPath]);

  // Dedicated Contact Page View
  if (currentPath === '/contact') {
    return <ContactPage />;
  }

  // Dedicated About Page View
  if (currentPath === '/about') {
    return <AboutPage />;
  }

  // Dedicated Process Page View
  if (currentPath === '/process') {
    return <ProcessPage />;
  }

  // Dedicated Pricing Page View
  if (currentPath === '/pricing') {
    return <PricingPage />;
  }

  // Dedicated Pharmacy POS Product Page View
  if (currentPath === '/products/pharmacy-pos' || currentPath === '/pharmacy-pos') {
    return <PharmacyPosPage />;
  }

  // Dedicated Garage CRM Product Page View
  if (currentPath === '/products/garage-crm' || currentPath === '/garage-crm') {
    return <GarageCrmPage />;
  }

  // Dedicated 404 Not Found Page View
  if (currentPath === '/404') {
    return <NotFoundPage />;
  }

  // Dedicated Clean Download Redirects
  if (currentPath === '/download/pharmacy-pos') {
    const cfg = DOWNLOAD_CONFIG.pharmacyPos;
    return (
      <DownloadRedirectPage
        title={cfg.name}
        fileName={cfg.fileName}
        version={cfg.version}
        downloadUrl={cfg.directUrl}
        backUrl="/products/pharmacy-pos"
        backLabel="Pharmacy POS Page"
      />
    );
  }

  if (currentPath === '/download/garage-crm') {
    const cfg = DOWNLOAD_CONFIG.garageCrm;
    return (
      <DownloadRedirectPage
        title={cfg.name}
        fileName={cfg.fileName}
        version={cfg.version}
        downloadUrl={cfg.directUrl}
        backUrl="/products/garage-crm"
        backLabel="Garage CRM Page"
      />
    );
  }

  // Home Page View
  return (
    <div className="app-root">
      {/* Background ambient lighting and subtle texture for dark sections */}
      <div className="ambient-bg" aria-hidden="true" />
      <div className="ambient-noise" aria-hidden="true" />

      {/* Screen 1: Full-height Hero Viewport */}
      <div className="hero-screen-wrapper">
        {/* Animated Grid Pattern Background */}
        <div className="hero-grid-bg-container" aria-hidden="true">
          <AnimatedGridPattern
            numSquares={32}
            maxOpacity={0.16}
            duration={3}
            repeatDelay={1}
            className="hero-grid-pattern"
          />
        </div>

        <div className="page-container hero-page-container">
          <Navbar />
          <SubHeader />
          <main className="hero-main-area">
            <Hero />
          </main>
        </div>
      </div>

      {/* Screen 2: High-contrast Bone/Cream Clients Section */}
      <Clients />

      {/* Screen 3: Services (Everything a Product Needs with 3D Slabs) */}
      <Services />

      {/* Screen 4: Selected Work (Products We Shipped - 4 Real Products Grid) */}
      <Work />

      {/* Screen 5: Process (Our Development Process - 4 Phases) */}
      <Process />

      {/* Screen 6: Impact (A Year of Shipping, One Square a Day with GitHub Heatmap) */}
      <Impact />

      {/* Screen 7: Tech Stack (The Stack We Build With - 24 Tools) */}
      <TechStack />

      {/* Screen 8: The Team (The People Who Ship It - 4 Members) */}
      <Team />

      {/* Screen 9: FAQ (Questions, Answered - macOS Terminal Simulator) */}
      <FAQ />

      {/* Screen 11: Blog / Insights (Notes from the Build - 3 Editorial Cards) */}
      <Blog />

      {/* Screen 12: Contact CTA (Let's Build Your Product - Form & 3D Isometric Modules) */}
      <ContactCTA />

      {/* Screen 13: Footer (Austin Address, Nav Columns, Massive VERTEXIA Watermark) */}
      <Footer />
    </div>
  );
}
