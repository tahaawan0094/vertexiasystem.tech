import React from 'react';
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
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern';
import './App.css';

export default function App() {
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

      {/* Screen 4: Selected Work (Products We Shipped - 5 Projects Grid) */}
      <Work />

      {/* Screen 5: Process (From Idea to Launch in 8 Weeks) */}
      <Process />

      {/* Screen 6: Impact (A Year of Shipping, One Square a Day with GitHub Heatmap) */}
      <Impact />

      {/* Screen 7: Tech Stack (The Stack We Build With - 24 Tools) */}
      <TechStack />

      {/* Screen 8: The Team (The People Who Ship It - 4 Members) */}
      <Team />

      {/* Screen 9: Pricing (Ways to Work With Us - 3 Tiers & Interactive Squad Configurator) */}
      <Pricing />

      {/* Screen 10: FAQ (Questions, Answered - macOS Terminal Simulator) */}
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
