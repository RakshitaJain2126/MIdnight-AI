import React, { useEffect, useRef } from 'react';

const PRICING_MATRIX = {
  baseRates: {
    core: 1000,
    pro: 5000,
    enterprise: 25000
  },
  regions: {
    INR: { symbol: '₹', tariff: 1.0, format: 'en-IN' },
    USD: { symbol: '$', tariff: 0.012, format: 'en-US' },
    EUR: { symbol: '€', tariff: 0.011, format: 'en-US' }
  },
  discount: 0.8
};

function formatPrice(val, currency) {
  if (currency === 'INR') {
    return Math.round(val).toLocaleString('en-IN');
  } else {
    return val >= 10 ? Math.round(val).toLocaleString('en-US') : val.toFixed(1);
  }
}

export default function Pricing() {
  const priceCoreRef = useRef(null);
  const priceProRef = useRef(null);
  const priceEnterpriseRef = useRef(null);
  const currencySelectRef = useRef(null);
  const billingToggleRef = useRef(null);
  const symbolRefs = useRef([]);

  // Feature 1: Manual DOM update to guarantee zero React component re-renders
  useEffect(() => {
    let isAnnual = false;
    let currency = 'INR';

    const updatePricingDOM = () => {
      const regionData = PRICING_MATRIX.regions[currency];
      const factor = isAnnual ? PRICING_MATRIX.discount : 1.0;

      const corePrice = PRICING_MATRIX.baseRates.core * regionData.tariff * factor;
      const proPrice = PRICING_MATRIX.baseRates.pro * regionData.tariff * factor;
      const enterprisePrice = PRICING_MATRIX.baseRates.enterprise * regionData.tariff * factor;

      // Update text nodes directly
      if (priceCoreRef.current) priceCoreRef.current.textContent = formatPrice(corePrice, currency);
      if (priceProRef.current) priceProRef.current.textContent = formatPrice(proPrice, currency);
      if (priceEnterpriseRef.current) priceEnterpriseRef.current.textContent = formatPrice(enterprisePrice, currency);

      // Update all currency symbol nodes
      symbolRefs.current.forEach(node => {
        if (node) node.textContent = regionData.symbol;
      });

      // Update pricing toggle knob position and active classes in DOM directly
      const knob = document.getElementById('toggle-knob');
      const labelAnnual = document.getElementById('label-annual');
      const labelMonthly = document.getElementById('label-monthly');

      if (knob) {
        if (isAnnual) {
          knob.classList.add('translate-x-6', 'bg-forsythia');
          knob.classList.remove('bg-arctic-powder');
        } else {
          knob.classList.remove('translate-x-6', 'bg-forsythia');
          knob.classList.add('bg-arctic-powder');
        }
      }
      if (labelAnnual && labelMonthly) {
        if (isAnnual) {
          labelAnnual.classList.add('text-forsythia');
          labelAnnual.classList.remove('text-on-surface-variant');
          labelMonthly.classList.add('text-on-surface-variant');
          labelMonthly.classList.remove('text-arctic-powder');
        } else {
          labelAnnual.classList.remove('text-forsythia');
          labelAnnual.classList.add('text-on-surface-variant');
          labelMonthly.classList.add('text-arctic-powder');
          labelMonthly.classList.remove('text-on-surface-variant');
        }
      }
    };

    // Listeners for select dropdown
    const selectEl = currencySelectRef.current;
    const handleCurrencyChange = (e) => {
      currency = e.target.value;
      updatePricingDOM();
    };
    if (selectEl) {
      selectEl.addEventListener('change', handleCurrencyChange);
    }

    // Listeners for billing toggle button
    const toggleEl = billingToggleRef.current;
    const handleToggleClick = () => {
      isAnnual = !isAnnual;
      updatePricingDOM();
    };
    if (toggleEl) {
      toggleEl.addEventListener('click', handleToggleClick);
    }

    // Initialize prices on mount
    updatePricingDOM();

    return () => {
      if (selectEl) selectEl.removeEventListener('change', handleCurrencyChange);
      if (toggleEl) toggleEl.removeEventListener('click', handleToggleClick);
    };
  }, []);

  return (
    <section id="pricing" className="py-24 px-6 md:px-12 bg-background relative border-b border-white/5">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <div>
            <h2 className="font-display-lg text-3xl md:text-4xl font-extrabold text-arctic-powder uppercase tracking-tight">
              SYSTEM ALLOCATION FEES
            </h2>
            <p className="font-body-md text-body-md text-mystic-mint/80 max-w-xl mt-2 leading-relaxed">
              Configure dynamic regional rates and calculate billing models with our state-isolated hardware allocation pricing.
            </p>
          </div>

          {/* Isolated Pricing Controller Buttons (Does not trigger React re-renders) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-surface-dim p-2.5 rounded-xl border border-white/10 w-full sm:w-auto">
            {/* Currency Switcher */}
            <div className="relative w-full sm:w-auto">
              <select 
                ref={currencySelectRef}
                id="currency-switcher" 
                className="appearance-none bg-surface-variant border border-white/15 text-arctic-powder font-label-caps text-xs py-3 pl-4 pr-10 rounded-lg focus:outline-none focus:border-forsythia focus:ring-1 focus:ring-forsythia w-full cursor-pointer"
              >
                <option value="INR">INR (₹)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-mystic-mint/60 pointer-events-none text-[18px]">
                expand_more
              </span>
            </div>

            {/* Billing toggle slider */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-surface-variant/40 rounded-lg border border-white/5 w-full sm:w-auto justify-center">
              <span id="label-monthly" className="font-label-caps text-xs text-arctic-powder font-bold select-none transition-colors">Monthly</span>
              <button 
                ref={billingToggleRef}
                id="billing-toggle" 
                className="relative w-12 h-6 bg-surface-variant border border-white/10 rounded-full p-0.5 transition-colors duration-200 focus:outline-none"
                aria-label="Toggle Billing Mode"
              >
                <div id="toggle-knob" className="w-4 h-4 bg-arctic-powder rounded-full shadow-md transform transition-transform duration-200 translate-x-0"></div>
              </button>
              <span id="label-annual" className="font-label-caps text-xs text-on-surface-variant select-none transition-colors">Annual (Save 20%)</span>
            </div>
          </div>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Tier 1: Core */}
          <div className="glass-card rounded-xl p-8 flex flex-col border-t-transparent hover:border-t-forsythia transition-all duration-300 bg-surface-dim/40 h-[480px]">
            <div className="mb-6 border-b border-white/10 pb-6">
              <h3 className="font-display-lg text-headline-sm text-arctic-powder uppercase mb-1">CORE</h3>
              <p className="font-body-md text-xs text-mystic-mint/60 mb-5">Essential data pipeline sync.</p>
              
              <div className="flex items-baseline gap-1">
                <span ref={el => symbolRefs.current[0] = el} className="currency-symbol font-display-lg text-headline-md text-forsythia">₹</span>
                <span ref={priceCoreRef} id="price-core" className="font-display-lg text-[44px] font-black text-arctic-powder">1,000</span>
                <span className="font-body-md text-xs text-mystic-mint/50 ml-1">/mo</span>
              </div>
            </div>
            
            <ul className="flex flex-col gap-3.5 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-mystic-mint/90 font-body-md text-xs">
                <span className="material-symbols-outlined text-forsythia text-[16px]">check</span>
                100GB Data Throughput
              </li>
              <li className="flex items-center gap-3 text-mystic-mint/90 font-body-md text-xs">
                <span className="material-symbols-outlined text-forsythia text-[16px]">check</span>
                Basic Stream Synthesis
              </li>
              <li className="flex items-center gap-3 text-mystic-mint/90 font-body-md text-xs">
                <span className="material-symbols-outlined text-forsythia text-[16px]">check</span>
                Community Node Support
              </li>
            </ul>
            
            <button className="btn-secondary w-full py-3.5 rounded-lg font-label-caps text-xs uppercase tracking-wider font-bold">
              Select Core
            </button>
          </div>

          {/* Tier 2: Pro (Recommended) */}
          <div className="glass-card rounded-xl p-8 flex flex-col border-forsythia relative bg-surface-dim/70 h-[480px] shadow-xl">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-forsythia text-background font-label-caps text-[10px] px-3.5 py-1 rounded font-black uppercase tracking-widest border border-forsythia">
              Recommended
            </div>
            <div className="mb-6 border-b border-white/10 pb-6 mt-1">
              <h3 className="font-display-lg text-headline-sm text-arctic-powder uppercase mb-1">PRO</h3>
              <p className="font-body-md text-xs text-mystic-mint/60 mb-5">Advanced sandboxed execution logic.</p>
              
              <div className="flex items-baseline gap-1">
                <span ref={el => symbolRefs.current[1] = el} className="currency-symbol font-display-lg text-headline-md text-forsythia">₹</span>
                <span ref={priceProRef} id="price-pro" className="font-display-lg text-[44px] font-black text-arctic-powder">5,000</span>
                <span className="font-body-md text-xs text-mystic-mint/50 ml-1">/mo</span>
              </div>
            </div>
            
            <ul className="flex flex-col gap-3.5 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-mystic-mint/90 font-body-md text-xs">
                <span className="material-symbols-outlined text-forsythia text-[16px]">check</span>
                1TB Data Throughput
              </li>
              <li className="flex items-center gap-3 text-mystic-mint/90 font-body-md text-xs">
                <span className="material-symbols-outlined text-forsythia text-[16px]">check</span>
                Priority Neural Cleanup
              </li>
              <li className="flex items-center gap-3 text-mystic-mint/90 font-body-md text-xs">
                <span className="material-symbols-outlined text-forsythia text-[16px]">check</span>
                Dedicated SLA Support
              </li>
            </ul>
            
            <button className="btn-primary w-full py-3.5 rounded-lg font-label-caps text-xs uppercase tracking-wider font-bold">
              Select Pro
            </button>
          </div>

          {/* Tier 3: Enterprise */}
          <div className="glass-card rounded-xl p-8 flex flex-col border-t-transparent hover:border-t-forsythia transition-all duration-300 bg-surface-dim/40 h-[480px]">
            <div className="mb-6 border-b border-white/10 pb-6">
              <h3 className="font-display-lg text-headline-sm text-arctic-powder uppercase mb-1">ENTERPRISE</h3>
              <p className="font-body-md text-xs text-mystic-mint/60 mb-5">Architectural global data nodes.</p>
              
              <div className="flex items-baseline gap-1">
                <span ref={el => symbolRefs.current[2] = el} className="currency-symbol font-display-lg text-headline-md text-forsythia">₹</span>
                <span ref={priceEnterpriseRef} id="price-enterprise" className="font-display-lg text-[44px] font-black text-arctic-powder">25,000</span>
                <span className="font-body-md text-xs text-mystic-mint/50 ml-1">/mo</span>
              </div>
            </div>
            
            <ul className="flex flex-col gap-3.5 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-mystic-mint/90 font-body-md text-xs">
                <span className="material-symbols-outlined text-forsythia text-[16px]">check</span>
                Unlimited Data Throughput
              </li>
              <li className="flex items-center gap-3 text-mystic-mint/90 font-body-md text-xs">
                <span className="material-symbols-outlined text-forsythia text-[16px]">check</span>
                Custom Adaptive Mapping
              </li>
              <li className="flex items-center gap-3 text-mystic-mint/90 font-body-md text-xs">
                <span className="material-symbols-outlined text-forsythia text-[16px]">check</span>
                24/7 Dedicated Node Engineers
              </li>
            </ul>
            
            <button className="btn-secondary w-full py-3.5 rounded-lg font-label-caps text-xs uppercase tracking-wider font-bold">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
