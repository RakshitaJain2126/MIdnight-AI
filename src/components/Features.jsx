import React, { useState } from 'react';

const FEATURES_DATA = [
  {
    title: 'Stream Synthesis',
    description: 'Real-time aggregation of disparate data pipelines into a single, unified vector space. Effortlessly synthesize live inputs with near-zero latency overhead.',
    number: '01',
    icon: (
      <svg className="w-6 h-6 stroke-forsythia" viewBox="0 0 24 24" fill="none">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    interactiveElement: (
      <div className="relative h-28 w-full bg-surface-dim border border-white/5 rounded p-3 overflow-hidden flex flex-col justify-between">
        <div className="flex justify-between items-center text-code-sm font-mono text-forsythia/80 border-b border-white/5 pb-1">
          <span>SYNTHESIS STREAM</span>
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span> LIVE</span>
        </div>
        <div className="flex gap-2 justify-around items-end h-16 pt-2">
          {[40, 75, 55, 90, 60, 45, 80, 95, 70, 85].map((h, i) => (
            <div
              key={i}
              className="w-2.5 bg-gradient-to-t from-nocturnal-expedition to-forsythia rounded-t-sm transition-all duration-500"
              style={{ height: `${h}%`, animation: `pulseGlow 2s infinite ease-in-out ${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: 'Logic Isolation',
    description: 'Sandboxed execution environments protect system runtime components. Code executes in dynamically isolated micro-nodes that scale instantly on demand.',
    number: '02',
    icon: (
      <svg className="w-6 h-6 stroke-deep-saffron fill-none" viewBox="0 0 24 24">
        <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
          <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z" />
          <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
        </g>
      </svg>
    ),
    interactiveElement: (
      <div className="bg-surface-dim border border-white/5 rounded p-3 h-28 font-mono text-code-sm text-mystic-mint/90 flex flex-col justify-between select-none">
        <div className="flex items-center gap-1.5 text-deep-saffron">
          <span className="w-2 h-2 rounded-full bg-deep-saffron animate-pulse"></span>
          <span>SECURE SANDBOX ACTIVE</span>
        </div>
        <div className="text-[11px] leading-tight text-mystic-mint/70">
          <div className="text-arctic-powder font-bold">$ sandbox-exec -t isolate</div>
          <div>&gt; Container isolated [ID: #9832]</div>
          <div className="text-green-400">&gt; Status: Clean execution</div>
        </div>
      </div>
    )
  },
  {
    title: 'Global Scale',
    description: 'Distributed cluster nodes mapped across 40 distinct cloud hosting regions. Intelligent automated query routing delivers local performance on a global scale.',
    number: '03',
    icon: (
      <svg className="w-6 h-6 fill-forsythia" viewBox="0 0 16 16">
        <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
      </svg>
    ),
    interactiveElement: (
      <div className="bg-surface-dim border border-white/5 rounded p-3 h-28 flex flex-col justify-between">
        <div className="flex justify-between items-center text-code-sm font-mono text-mystic-mint/80">
          <span>ACTIVE CLUSTER NODES</span>
          <span className="text-forsythia">40/40 ONLINE</span>
        </div>
        <div className="grid grid-cols-2 gap-1 text-[11px] font-mono">
          <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> US-EAST [12ms]</div>
          <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> EU-WEST [24ms]</div>
          <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> AP-SOUTH [8ms]</div>
          <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> SA-EAST [31ms]</div>
        </div>
      </div>
    )
  },
  {
    title: 'Adaptive Mapping',
    description: 'Auto-resolves interface mapping conflicts dynamically. The self-tuning pipeline morphs layout and field schema targets based on historical load patterns.',
    number: '04',
    icon: (
      <svg className="w-6 h-6 stroke-deep-saffron fill-none" viewBox="0 0 24 24">
        <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8M8 12h8" />
        </g>
      </svg>
    ),
    interactiveElement: (
      <div className="bg-surface-dim border border-white/5 rounded p-3 h-28 flex items-center justify-between font-mono text-code-sm text-mystic-mint/80 relative overflow-hidden">
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] text-mystic-mint/50">RAW INPUT</span>
          <span className="border border-white/10 rounded px-1.5 py-0.5 text-deep-saffron">userID_str</span>
        </div>
        <div className="flex items-center justify-center flex-grow px-2">
          <div className="w-full h-0.5 bg-gradient-to-r from-deep-saffron to-forsythia relative">
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-forsythia border border-background flex items-center justify-center text-[8px] text-background font-bold animate-pulse">AI</span>
          </div>
        </div>
        <div className="flex flex-col gap-0.5 text-right">
          <span className="text-[10px] text-mystic-mint/50">TARGET NODE</span>
          <span className="border border-white/10 rounded px-1.5 py-0.5 text-forsythia">user_id</span>
        </div>
      </div>
    )
  },
  {
    title: 'Neural Cleanup',
    description: 'AI-driven anomaly mitigation parses unstructured datasets, strips bad payloads, and validates records before they ever write to your database.',
    number: '05',
    icon: (
      <svg className="w-6 h-6 stroke-forsythia fill-none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v18M3 12h18" />
      </svg>
    ),
    interactiveElement: (
      <div className="bg-surface-dim border border-white/5 rounded p-3 h-28 overflow-hidden flex flex-col justify-between">
        <div className="flex justify-between items-center text-code-sm font-mono text-mystic-mint/80 border-b border-white/5 pb-1">
          <span>NEURAL SANITIZER</span>
          <span className="text-green-400 text-[11px] font-bold">100% HEALTH</span>
        </div>
        <div className="flex flex-col gap-1 font-mono text-[10px] leading-tight text-mystic-mint/70">
          <div className="flex justify-between">
            <span>Truncated bits:</span>
            <span className="text-forsythia">0.00%</span>
          </div>
          <div className="flex justify-between">
            <span>Corrupt records:</span>
            <span className="text-forsythia">0 / 1.2M</span>
          </div>
          <div className="w-full bg-white/5 rounded-full h-1.5 mt-1 overflow-hidden">
            <div className="bg-gradient-to-r from-deep-saffron to-forsythia h-full w-full"></div>
          </div>
        </div>
      </div>
    )
  }
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" className="py-24 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-display-lg text-3xl md:text-4xl font-extrabold text-arctic-powder uppercase tracking-tight">
            CORE CAPABILITIES
          </h2>
          <p className="font-body-md text-body-md text-mystic-mint max-w-xl mt-2 leading-relaxed">
            A modular architecture engineered for uncompromised throughput, total logic encapsulation, and dynamic dataset routing.
          </p>
        </div>

        {/* Bento Grid (Desktop Layout) */}
        <div className="hidden md:grid grid-cols-3 gap-6 auto-rows-[250px]" id="feature-bento">
          {/* Feature 1: Stream Synthesis (Col Span 2) */}
          <div 
            className={`glass-card rounded-xl p-8 flex flex-col justify-between active-glow cursor-pointer col-span-2 ${activeIndex === 0 ? 'active border-forsythia/50' : ''}`}
            onMouseEnter={() => setActiveIndex(0)}
            style={{ borderColor: activeIndex === 0 ? 'rgba(255, 200, 1, 0.5)' : 'rgba(241, 246, 244, 0.08)' }}
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center border border-white/10">
                {FEATURES_DATA[0].icon}
              </div>
              <span className="font-label-caps text-label-caps text-mystic-mint/50 font-bold">{FEATURES_DATA[0].number}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <div>
                <h3 className="font-display-lg text-headline-sm text-arctic-powder font-bold mb-1">{FEATURES_DATA[0].title}</h3>
                <p className="font-body-md text-[13px] text-mystic-mint/80 leading-normal">{FEATURES_DATA[0].description}</p>
              </div>
              <div className="w-full">
                {FEATURES_DATA[0].interactiveElement}
              </div>
            </div>
          </div>

          {/* Feature 2: Logic Isolation */}
          <div 
            className={`glass-card rounded-xl p-8 flex flex-col justify-between active-glow cursor-pointer ${activeIndex === 1 ? 'active border-forsythia/50' : ''}`}
            onMouseEnter={() => setActiveIndex(1)}
            style={{ borderColor: activeIndex === 1 ? 'rgba(255, 200, 1, 0.5)' : 'rgba(241, 246, 244, 0.08)' }}
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center border border-white/10">
                {FEATURES_DATA[1].icon}
              </div>
              <span className="font-label-caps text-label-caps text-mystic-mint/50 font-bold">{FEATURES_DATA[1].number}</span>
            </div>
            <div>
              <h3 className="font-display-lg text-headline-sm text-arctic-powder font-bold mb-2">{FEATURES_DATA[1].title}</h3>
              {FEATURES_DATA[1].interactiveElement}
            </div>
          </div>

          {/* Feature 3: Global Scale */}
          <div 
            className={`glass-card rounded-xl p-8 flex flex-col justify-between active-glow cursor-pointer ${activeIndex === 2 ? 'active border-forsythia/50' : ''}`}
            onMouseEnter={() => setActiveIndex(2)}
            style={{ borderColor: activeIndex === 2 ? 'rgba(255, 200, 1, 0.5)' : 'rgba(241, 246, 244, 0.08)' }}
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center border border-white/10">
                {FEATURES_DATA[2].icon}
              </div>
              <span className="font-label-caps text-label-caps text-mystic-mint/50 font-bold">{FEATURES_DATA[2].number}</span>
            </div>
            <div>
              <h3 className="font-display-lg text-headline-sm text-arctic-powder font-bold mb-2">{FEATURES_DATA[2].title}</h3>
              {FEATURES_DATA[2].interactiveElement}
            </div>
          </div>

          {/* Feature 4: Adaptive Mapping */}
          <div 
            className={`glass-card rounded-xl p-8 flex flex-col justify-between active-glow cursor-pointer ${activeIndex === 3 ? 'active border-forsythia/50' : ''}`}
            onMouseEnter={() => setActiveIndex(3)}
            style={{ borderColor: activeIndex === 3 ? 'rgba(255, 200, 1, 0.5)' : 'rgba(241, 246, 244, 0.08)' }}
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center border border-white/10">
                {FEATURES_DATA[3].icon}
              </div>
              <span className="font-label-caps text-label-caps text-mystic-mint/50 font-bold">{FEATURES_DATA[3].number}</span>
            </div>
            <div>
              <h3 className="font-display-lg text-headline-sm text-arctic-powder font-bold mb-2">{FEATURES_DATA[3].title}</h3>
              {FEATURES_DATA[3].interactiveElement}
            </div>
          </div>

          {/* Feature 5: Neural Cleanup (Col Span 2) */}
          <div 
            className={`glass-card rounded-xl p-8 flex flex-col justify-between active-glow cursor-pointer col-span-2 ${activeIndex === 4 ? 'active border-forsythia/50' : ''}`}
            onMouseEnter={() => setActiveIndex(4)}
            style={{ borderColor: activeIndex === 4 ? 'rgba(255, 200, 1, 0.5)' : 'rgba(241, 246, 244, 0.08)' }}
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center border border-white/10">
                {FEATURES_DATA[4].icon}
              </div>
              <span className="font-label-caps text-label-caps text-mystic-mint/50 font-bold">{FEATURES_DATA[4].number}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <div>
                <h3 className="font-display-lg text-headline-sm text-arctic-powder font-bold mb-1">{FEATURES_DATA[4].title}</h3>
                <p className="font-body-md text-[13px] text-mystic-mint/80 leading-normal">{FEATURES_DATA[4].description}</p>
              </div>
              <div className="w-full">
                {FEATURES_DATA[4].interactiveElement}
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Layout (Mobile viewports, touch-optimized) */}
        <div className="md:hidden flex flex-col gap-4" id="feature-accordion">
          {FEATURES_DATA.map((item, index) => (
            <div 
              key={index} 
              className={`border border-white/10 rounded-lg overflow-hidden transition-all duration-300 ${activeIndex === index ? 'bg-surface-variant/40 border-forsythia/30 active' : 'bg-surface-dim/70'}`}
            >
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface-variant/20 transition-colors focus:outline-none"
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center border border-white/10 scale-90">
                    {item.icon}
                  </div>
                  <span className="font-display-lg text-headline-sm text-arctic-powder font-semibold">{item.title}</span>
                </div>
                <span className={`material-symbols-outlined text-mystic-mint/60 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-forsythia' : ''}`}>
                  expand_more
                </span>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-[300px] opacity-100 border-t border-white/5' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-6 py-5 space-y-4">
                  <p className="font-body-md text-xs text-mystic-mint/85 leading-relaxed">{item.description}</p>
                  <div className="pt-2">
                    {item.interactiveElement}
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
