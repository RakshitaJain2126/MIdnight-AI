import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-20 px-6 md:px-12 bg-surface-dim relative border-t border-b border-white/5">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="mb-14 text-center">
          <span className="text-forsythia text-[10px] font-mono tracking-widest uppercase">TRUSTED BY TECH ARCHITECTS</span>
          <h2 className="font-display-lg text-2xl md:text-3xl font-extrabold uppercase text-arctic-powder mt-2 tracking-tight">
            ENGINEERED FOR SUPREMACY
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card rounded-xl p-8 border border-white/5 flex flex-col justify-between">
            <p className="font-body-lg text-body-lg text-mystic-mint/95 italic leading-relaxed">
              "Orchestrating our 10TB real-time data pipeline used to cause massive layout latency. Switching to Midnight AI simplified it into a single clean vector space. Unbelievable performance."
            </p>
            <div className="mt-6 flex items-center gap-3 pt-6 border-t border-white/5">
              <div className="w-10 h-10 rounded bg-nocturnal-expedition flex items-center justify-center font-bold text-forsythia">
                AA
              </div>
              <div>
                <h4 className="font-mono text-sm text-arctic-powder font-semibold">Chief Data Architect</h4>
                <p className="font-mono text-xs text-mystic-mint/50">Aether Analytics</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-8 border border-white/5 flex flex-col justify-between">
            <p className="font-body-lg text-body-lg text-mystic-mint/95 italic leading-relaxed">
              "The logic isolation sandbox is absolute genius. We execute raw, unverified client scripts within dynamic micro-nodes with zero fear of runtime contamination."
            </p>
            <div className="mt-6 flex items-center gap-3 pt-6 border-t border-white/5">
              <div className="w-10 h-10 rounded bg-nocturnal-expedition flex items-center justify-center font-bold text-deep-saffron">
                NS
              </div>
              <div>
                <h4 className="font-mono text-sm text-arctic-powder font-semibold">VP of Infrastructure</h4>
                <p className="font-mono text-xs text-mystic-mint/50">NetScale Tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
