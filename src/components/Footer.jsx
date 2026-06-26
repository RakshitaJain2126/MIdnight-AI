import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/10 w-full py-12 grayscale hover:grayscale-0 transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-[1440px] mx-auto w-full gap-8">
        <div className="font-display-lg text-headline-sm font-extrabold text-arctic-powder tracking-wider">
          MIDNIGHT <span className="text-forsythia">AI</span>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-6 font-mono text-xs">
          <a className="text-mystic-mint/60 hover:text-forsythia transition-colors" href="#">Privacy Policy</a>
          <a className="text-mystic-mint/60 hover:text-forsythia transition-colors" href="#">Terms of Service</a>
          <a className="text-mystic-mint/60 hover:text-forsythia transition-colors" href="#">Security Standards</a>
          <a className="text-mystic-mint/60 hover:text-forsythia transition-colors" href="#">Cluster Status</a>
        </nav>
        
        <div className="text-mystic-mint/40 font-mono text-[10px] tracking-wide text-center md:text-right">
          © 2026 MIDNIGHT TECH. ALL ASSETS INTEGRATED. ENGINEERED FOR SUPREMACY.
        </div>
      </div>
    </footer>
  );
}
