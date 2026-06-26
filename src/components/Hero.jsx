import React from 'react';
import ShaderBackground from './ShaderBackground';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-6 md:px-12 border-b border-white/5">
      {/* WebGL Shader Background Canvas */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-45 pointer-events-auto">
        <ShaderBackground />
      </div>
      
      <div className="relative z-10 max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 pointer-events-none">
        <div className="lg:col-span-8 lg:col-start-1 flex flex-col items-start gap-5 py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface-variant/80 border border-white/10 text-forsythia font-label-caps text-[10px] uppercase tracking-widest pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-forsythia animate-pulse"></span>
            System v2.4 Online
          </div>
          
          {/* Single H1 Tag for SEO compliance */}
          <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl font-extrabold text-arctic-powder leading-none tracking-tight uppercase m-0 p-0 pointer-events-auto">
            DATA AUTOMATION <br />
            <span className="bg-gradient-to-r from-forsythia via-deep-saffron to-nocturnal-expedition bg-clip-text text-transparent">
              AT THE SPEED OF THOUGHT.
            </span>
          </h1>
          
          <p className="font-body-lg text-body-lg text-mystic-mint/90 max-w-2xl mt-3 font-light leading-relaxed pointer-events-auto">
            Orchestrate complex data workflows with a multi-dimensional AI engine designed for architectural supremacy. Zero limits. Sandbox speed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto pointer-events-auto">
            <a className="btn-primary flex items-center justify-center gap-2 px-8 py-4 rounded font-label-caps text-xs uppercase tracking-wider w-full sm:w-auto" href="#pricing">
              Initialize System
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
            <a className="btn-secondary flex items-center justify-center gap-2 px-8 py-4 rounded font-label-caps text-xs uppercase tracking-wider w-full sm:w-auto" href="#dashboard">
              <span className="material-symbols-outlined text-[16px]">terminal</span>
              View Live Feed
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
