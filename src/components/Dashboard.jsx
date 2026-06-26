import React, { useEffect, useRef } from 'react';

export default function Dashboard() {
  const terminalLogsRef = useRef(null);

  // Live Terminal Log simulation
  useEffect(() => {
    const logs = [
      'INIT midnight-data-core v2.4...',
      'CONNECT region node US-East-1 success [14ms]',
      'CONNECT region node EU-Central-1 success [21ms]',
      'CONNECT region node AP-South-1 success [8ms]',
      'INBOUND data link stream initiated.',
      'SCANNING unstructured payload for anomaly vectors...',
      'ANOMALY DETECTED: null-byte truncation in index 8',
      'ISOLATING context thread ID: #9832 - sandbox initiated',
      'NEURAL CLEANUP: repairing indices...',
      'REPAIR SUCCESS: sanitized payload uploaded.',
      'SYNC: multi-dimensional vector space mapped successfully.',
      'METRICS: throughput 142.6 GB/s | latency 1.2ms'
    ];

    let logIndex = 0;
    const interval = setInterval(() => {
      if (terminalLogsRef.current) {
        const timestamp = new Date().toISOString().slice(11, 19);
        const newLine = document.createElement('div');
        newLine.className = 'font-mono text-code-sm text-mystic-mint/90 flex gap-2 border-l border-forsythia/30 pl-2 py-0.5';
        newLine.innerHTML = `<span class="text-forsythia/60">[${timestamp}]</span> <span>${logs[logIndex]}</span>`;
        terminalLogsRef.current.appendChild(newLine);
        terminalLogsRef.current.scrollTop = terminalLogsRef.current.scrollHeight;

        // Keep last 15 entries
        while (terminalLogsRef.current.childNodes.length > 15) {
          terminalLogsRef.current.removeChild(terminalLogsRef.current.firstChild);
        }

        logIndex = (logIndex + 1) % logs.length;
      }
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="dashboard" className="py-20 px-6 md:px-12 bg-surface-dim relative border-b border-white/5">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="mb-10 text-center md:text-left">
          <h2 className="font-display-lg text-2xl md:text-3xl font-extrabold uppercase text-arctic-powder tracking-tight">
            PROCESSED PIPELINE ANALYSIS
          </h2>
          <p className="font-body-md text-body-md text-mystic-mint/70 mt-1 max-w-lg">
            Visualizing active cluster node operations, stream bandwidth, and containerized runtime environments.
          </p>
        </div>

        {/* Terminal Window Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Terminal Logs Panel */}
          <div className="lg:col-span-2 bg-[#080b0f] border border-white/10 rounded-xl p-5 shadow-2xl relative flex flex-col justify-between h-[420px]">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                <span className="font-mono text-xs text-mystic-mint/50 ml-3">/usr/bin/midnight-engine</span>
              </div>
              <div className="px-2 py-0.5 rounded bg-nocturnal-expedition/30 border border-nocturnal-expedition text-forsythia text-[10px] font-mono">
                SECURE ENGINE ACTIVE
              </div>
            </div>

            <div 
              ref={terminalLogsRef}
              className="flex-grow overflow-y-auto space-y-1.5 scrollbar-thin select-none"
            >
              <div className="font-mono text-code-sm text-mystic-mint/90 flex gap-2 border-l border-forsythia/30 pl-2 py-0.5">
                <span className="text-forsythia/60">[15:19:52]</span>
                <span>INIT SYSTEM: Loading AI execution parameters...</span>
              </div>
              <div className="font-mono text-code-sm text-mystic-mint/90 flex gap-2 border-l border-forsythia/30 pl-2 py-0.5">
                <span className="text-forsythia/60">[15:19:53]</span>
                <span>SUCCESS: Vector engines ready. System Online.</span>
              </div>
            </div>
          </div>

          {/* Node Stats panel */}
          <div className="bg-[#080b0f] border border-white/10 rounded-xl p-6 shadow-2xl flex flex-col justify-between h-[420px]">
            <div>
              <h3 className="font-mono text-xs text-forsythia font-bold tracking-widest uppercase mb-4">CLUSTER SUMMARY</h3>
              
              <div className="space-y-4">
                <div className="border border-white/5 bg-surface-dim/40 rounded p-3.5">
                  <div className="flex justify-between text-code-sm font-mono text-mystic-mint/60 mb-1">
                    <span>TOTAL SYSTEM THROUGHPUT</span>
                    <span className="text-arctic-powder font-bold">142.6 GB/s</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-deep-saffron to-forsythia h-full w-[82%]"></div>
                  </div>
                </div>

                <div className="border border-white/5 bg-surface-dim/40 rounded p-3.5">
                  <div className="flex justify-between text-code-sm font-mono text-mystic-mint/60 mb-1">
                    <span>MEAN LATENCY RUNTIME</span>
                    <span className="text-arctic-powder font-bold">1.2ms</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-nocturnal-expedition to-forsythia h-full w-[15%]"></div>
                  </div>
                </div>

                <div className="border border-white/5 bg-surface-dim/40 rounded p-3.5">
                  <div className="flex justify-between text-code-sm font-mono text-mystic-mint/60 mb-1">
                    <span>ANOMALY REPAIR INDEX</span>
                    <span className="text-arctic-powder font-bold">100.0%</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-400 h-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xs font-mono text-mystic-mint/40">
              <span>REFRESH FREQ: 1.8s</span>
              <span>BUILD ID: 9832-PRO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
