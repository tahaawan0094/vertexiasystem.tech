import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, Sparkles, Layers, Cpu, ShieldCheck } from 'lucide-react';
import CornerBracket from './CornerBracket';
import './Navbar.css';

export default function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { num: '01', label: 'PRODUCTS', hasDropdown: true },
    { num: '02', label: 'WORK', href: '#work' },
    { num: '03', label: 'PROCESS', href: '#process' },
    { num: '04', label: 'ABOUT', href: '/about' },
    { num: '05', label: 'BLOG', href: '#blog' },
  ];

  const productsList = [
    {
      title: 'PHARMACY POS',
      desc: 'Medicine inventory, expiry tracking, barcode billing & offline counter sync',
      href: '#services',
    },
    {
      title: 'RESTAURANT ERP',
      desc: 'KOT management, table ordering, recipe inventory & live analytics',
      href: '#services',
    },
    {
      title: 'GARAGE CRM',
      desc: 'Job cards, customer vehicle history, parts stock & automated invoicing',
      href: '#services',
    },
    {
      title: 'RETAIL POS',
      desc: 'Fast multi-branch retail checkout, thermal receipt printing & ledgers',
      href: '#services',
    },
  ];

  const handleStartProject = () => {
    window.history.pushState({}, '', '/contact');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleGoHome = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavLinkClick = (e, href) => {
    if (href === '/about') {
      e.preventDefault();
      window.history.pushState({}, '', '/about');
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    const current = window.location.pathname.toLowerCase();
    if (current === '/contact' || current === '/about') {
      e.preventDefault();
      window.history.pushState({}, '', '/' + (href || ''));
      window.dispatchEvent(new PopStateEvent('popstate'));
      setTimeout(() => {
        if (href && href.startsWith('#')) {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return;
    }
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-header">
      {/* Brand Logo */}
      <a href="/" onClick={handleGoHome} className="brand-logo">
        <div className="logo-icon" aria-hidden="true">
          <span className="logo-square orange"></span>
          <span className="logo-square white"></span>
          <span className="logo-square orange"></span>
          <span className="logo-square white"></span>
        </div>
        <span className="brand-name">VERTEXIA</span>
      </a>

      {/* Desktop Navigation Links */}
      <nav className="nav-menu">
        {navLinks.map((item) => (
          <div
            key={item.num}
            className={`nav-item ${item.hasDropdown ? 'has-dropdown' : ''}`}
            onMouseEnter={() => item.hasDropdown && setProductsOpen(true)}
            onMouseLeave={() => item.hasDropdown && setProductsOpen(false)}
          >
            {item.hasDropdown ? (
              <button
                className="nav-link dropdown-trigger"
                onClick={() => setProductsOpen(!productsOpen)}
                aria-expanded={productsOpen}
              >
                <span className="nav-num">{item.num}</span>
                <span className="nav-label">{item.label}</span>
                <ChevronDown size={13} className={`chevron-icon ${productsOpen ? 'rotate' : ''}`} />
              </button>
            ) : (
              <a 
                href={item.href} 
                className="nav-link"
                onClick={(e) => handleNavLinkClick(e, item.href)}
              >
                <span className="nav-num">{item.num}</span>
                <span className="nav-label">{item.label}</span>
              </a>
            )}

            {/* Products Mega-Dropdown (Xenith Pulse Style) */}
            {item.hasDropdown && productsOpen && (
              <div className="dropdown-panel mega-dropdown-panel">
                <div className="mega-dropdown-grid">
                  {productsList.map((product, idx) => (
                    <a 
                      key={idx} 
                      href={product.href} 
                      className="mega-product-card"
                      onClick={(e) => {
                        setProductsOpen(false);
                        handleNavLinkClick(e, product.href);
                      }}
                    >
                      <div className="mega-product-header">
                        <span className="mega-product-title">{product.title}</span>
                      </div>
                      <p className="mega-product-desc">{product.desc}</p>
                    </a>
                  ))}
                </div>
                <div className="mega-dropdown-footer">
                  <span className="mega-footer-label">READY-TO-DEPLOY SOFTWARE</span>
                  <a
                    href="/contact"
                    className="mega-footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      setProductsOpen(false);
                      handleStartProject();
                    }}
                  >
                    <span>START A PROJECT</span>
                    <ArrowUpRight size={13} strokeWidth={2.4} />
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Right Action Button */}
      <div className="navbar-actions">
        <CornerBracket offset={4}>
          <button className="cta-header-btn" onClick={handleStartProject}>
            <span className="cta-btn-text">START A PROJECT</span>
            <span className="cta-icon-box">
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </span>
          </button>
        </CornerBracket>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navLinks.map((item) => (
            <a
              key={item.num}
              href={item.href || '#services'}
              className="mobile-nav-link"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavLinkClick(e, item.href || '#services');
              }}
            >
              <span className="nav-num">{item.num}</span>
              <span className="nav-label">{item.label}</span>
            </a>
          ))}
          <div className="mobile-cta-wrap">
            <CornerBracket offset={4}>
              <button className="cta-header-btn full-width" onClick={() => {
                setMobileMenuOpen(false);
                handleStartProject();
              }}>
                <span className="cta-btn-text">START A PROJECT</span>
                <span className="cta-icon-box">
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </span>
              </button>
            </CornerBracket>
          </div>
        </div>
      )}
    </header>
  );
}