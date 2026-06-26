import React, { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="flex justify-between items-center h-16 px-6 md:px-12 max-w-[1440px] mx-auto w-full">
        <a className="font-display-lg text-headline-md font-extrabold tracking-tighter text-arctic-powder hover:text-forsythia transition-colors flex items-center gap-2" href="#">
          <span className="text-forsythia">MIDNIGHT</span>
          <span className="px-2 py-0.5 bg-forsythia text-background text-[11px] font-bold tracking-widest font-mono rounded">AI</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 font-mono text-code-sm">
          <a className="text-on-surface-variant hover:text-arctic-powder transition-colors" href="#features">Platform</a>
          <a className="text-on-surface-variant hover:text-arctic-powder transition-colors" href="#dashboard">Live Demo</a>
          <a className="text-on-surface-variant hover:text-arctic-powder transition-colors" href="#pricing">Pricing</a>
          <a className="text-on-surface-variant hover:text-arctic-powder transition-colors" href="#faq">FAQ</a>
        </nav>

        <div className="flex items-center gap-4">
          <a className="hidden md:inline-flex btn-primary px-5 py-2.5 rounded font-label-caps text-label-caps uppercase text-xs tracking-wider" href="#pricing">
            Initialize System
          </a>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            id="mobile-menu-btn"
            className="md:hidden text-arctic-powder p-1 focus:outline-none hover:text-forsythia transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        id="mobile-nav" 
        className={`md:hidden absolute top-16 left-0 w-full bg-background/95 border-b border-white/10 backdrop-blur-2xl transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-4 font-mono text-body-md">
          <a className="text-on-surface-variant hover:text-forsythia transition-colors py-1" href="#features" onClick={() => setMobileMenuOpen(false)}>Platform</a>
          <a className="text-on-surface-variant hover:text-forsythia transition-colors py-1" href="#dashboard" onClick={() => setMobileMenuOpen(false)}>Live Demo</a>
          <a className="text-on-surface-variant hover:text-forsythia transition-colors py-1" href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a className="text-on-surface-variant hover:text-forsythia transition-colors py-1" href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <a className="btn-primary w-full text-center py-3 rounded font-label-caps text-label-caps uppercase text-xs tracking-widest mt-2" href="#pricing" onClick={() => setMobileMenuOpen(false)}>
            Initialize System
          </a>
        </nav>
      </div>
    </header>
  );
}
