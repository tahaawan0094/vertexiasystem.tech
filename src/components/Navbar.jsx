import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, Sparkles, Layers, Cpu, ShieldCheck } from 'lucide-react';
import CornerBracket from './CornerBracket';
import './Navbar.css';

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { num: '01', label: 'SERVICES', hasDropdown: true },
    { num: '02', label: 'WORK', href: '#work' },
    { num: '03', label: 'PROCESS', href: '#process' },
    { num: '04', label: 'ABOUT', href: '#about' },
    { num: '05', label: 'BLOG', href: '#blog' },
  ];

  const servicesList = [
    { icon: <Layers size={16} />, title: 'Full-Stack Web Apps', desc: 'Next.js, React, Node & Scalable APIs' },
    { icon: <Cpu size={16} />, title: 'AI & LLM Integration', desc: 'RAG, Agentic workflows & fine-tuned models' },
    { icon: <Sparkles size={16} />, title: 'MVP Sprint (2 Weeks)', desc: 'From zero to production launch in 14 days' },
    { icon: <ShieldCheck size={16} />, title: 'Enterprise Modernization', desc: 'Refactoring, cloud infra & performance' },
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
    if (window.location.pathname.toLowerCase() === '/contact') {
      e.preventDefault();
      window.history.pushState({}, '', '/' + (href || ''));
      window.dispatchEvent(new PopStateEvent('popstate'));
      setTimeout(() => {
        if (href) {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
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
            onMouseEnter={() => item.hasDropdown && setServicesOpen(true)}
            onMouseLeave={() => item.hasDropdown && setServicesOpen(false)}
          >
            {item.hasDropdown ? (
              <button
                className="nav-link dropdown-trigger"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
              >
                <span className="nav-num">{item.num}</span>
                <span className="nav-label">{item.label}</span>
                <ChevronDown size={13} className={`chevron-icon ${servicesOpen ? 'rotate' : ''}`} />
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

            {/* Services Dropdown */}
            {item.hasDropdown && servicesOpen && (
              <div className="dropdown-panel">
                <div className="dropdown-inner">
                  {servicesList.map((service, idx) => (
                    <a 
                      key={idx} 
                      href="#services" 
                      className="dropdown-entry"
                      onClick={(e) => handleNavLinkClick(e, '#services')}
                    >
                      <div className="dropdown-entry-icon">{service.icon}</div>
                      <div>
                        <div className="dropdown-entry-title">{service.title}</div>
                        <div className="dropdown-entry-desc">{service.desc}</div>
                      </div>
                    </a>
                  ))}
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