import React, { useState } from 'react';

const FAQS_DATA = [
  {
    q: 'How does the state-isolated pricing matrix function?',
    a: 'The pricing matrix runs on localized DOM text-node manipulators. When you alter the billing cycle (Monthly vs Annual) or the regional currency (INR, USD, EUR), updates bypass the virtual DOM diffing algorithm completely. This eliminates parent component re-renders, protecting your application from performance degradation and layout thrashing.'
  },
  {
    q: 'Is there a limit to stream synthesis data volumes?',
    a: 'Core and Pro tiers come with default throughput thresholds, while the Enterprise level operates on a fully distributed custom node grid mapped to unlimited high-volume synthesis rates.'
  },
  {
    q: 'How does the Bento-to-Accordion context lock preserve state?',
    a: 'A client-side observer watches breakpoint changes. If you are hovering item #3 on a desktop monitor and resize the viewport, the layout programmatically transfers the index value over to the mobile list. The corresponding mobile accordion panel is instantly and smoothly expanded, maintaining total continuity.'
  },
  {
    q: 'What makes the sandbox execution secure?',
    a: 'Our logic isolation engine utilizes kernel-level sandboxing. Each runtime thread compiles in a container environment that has zero visibility into adjacent pipelines or system configuration properties.'
  }
];

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState(-1);

  return (
    <section id="faq" className="py-24 px-6 md:px-12 bg-surface-dim relative border-b border-white/5">
      <div className="max-w-[768px] mx-auto w-full">
        <div className="mb-14 text-center">
          <h2 className="font-display-lg text-3xl font-extrabold text-arctic-powder uppercase tracking-tight">
            FREQUENTLY ANSWERED LOGIC
          </h2>
          <p className="font-body-md text-body-md text-mystic-mint/60 mt-1">
            Common structural questions regarding system mechanics.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-white/10 rounded-lg overflow-hidden transition-all duration-300 accordion-item ${
                activeFaq === idx ? 'active bg-background/50 border-forsythia/35' : 'bg-background/20'
              }`}
            >
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface-variant/20 transition-colors focus:outline-none"
                onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
              >
                <span className="font-mono text-sm text-arctic-powder font-semibold">{faq.q}</span>
                <span className="material-symbols-outlined text-mystic-mint/60 transition-transform duration-300 accordion-icon">
                  expand_more
                </span>
              </button>
              
              {/* Expand transition using CSS grid */}
              <div className="accordion-content">
                <div>
                  <div className="px-6 py-5 border-t border-white/5 font-body-md text-xs text-mystic-mint/80 leading-relaxed bg-surface-dim/40">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
