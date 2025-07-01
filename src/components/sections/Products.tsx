import React, { useState, useRef } from 'react';
import { Rocket, Users, Brain, TrendingUp } from 'lucide-react';

  const products = [
    {
    name: 'AI Rank Booster',
    tagline: 'Get found when customers ask AI.',
    description: `Boost your business's visibility in AI-powered search results.`,
    icon: <Rocket size={48} className="text-[#D9B6A3]" />,
    details: 'AI Rank Booster helps your business appear in more AI-driven search results, bringing you more customers with less effort.'
  },
  {
    name: 'Onsite Guide',
    tagline: 'Instant answers for everyone, anytime.',
    description: 'Reduce emails and boost conversions with 24/7 AI support.',
    icon: <Users size={48} className="text-[#305A72]" />,
    details: 'Onsite Guide provides instant, AI-powered answers to your customers and team, right on your website.'
  },
  {
    name: 'Customer Insight Engine',
    tagline: 'See patterns. Make smarter moves.',
    description: 'Unlock actionable insights from your customer data.',
    icon: <Brain size={48} className="text-[#A4B9C7]" />,
    details: 'Customer Insight Engine analyzes your data to spot trends, upsell opportunities, and churn risks.'
  },
  {
    name: 'Growth Autopilot',
    tagline: 'Marketing that never sleeps.',
    description: 'Automate your outreach and track what works.',
    icon: <TrendingUp size={48} className="text-[#305A72]" />,
    details: 'Growth Autopilot automates follow-ups, personalizes outreach, and tracks your marketing performance.'
  },
];

const CARD_WIDTH = 320;
const CARD_GAP = 24;

const Products = () => {
  const [modalIndex, setModalIndex] = useState(-1); // -1 means closed
  const [active, setActive] = useState(0);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  // Carousel navigation for mobile
  const prev = () => setActive((i) => (i === 0 ? products.length - 1 : i - 1));
  const next = () => setActive((i) => (i === products.length - 1 ? 0 : i + 1));

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const handleTouchMove = (e) => {
    if (touchStartX.current !== null) {
      touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    }
  };
  const handleTouchEnd = () => {
    if (touchDeltaX.current > 50) prev();
    else if (touchDeltaX.current < -50) next();
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  // Fixed offset calculation - simple left translation based on active index
  const offset = active * (CARD_WIDTH + CARD_GAP);

  return (
    <section id="products" className="py-20 px-4 bg-[#D7EAFB]">
      {/* AI Toolkit Header/Subheader */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[#305A72] mb-4 leading-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3] tracking-tight animate-hero-fade-in" tabIndex={0}>
            AI tools built for real businesses
          </h2>
        <p className="text-xl md:text-2xl text-[#7D9BA6] mb-8 font-medium">No complicated setup. No tech degree required. Just simple tools and training that save you time and make you money.</p>
        </div>

      {/* Desktop 2x2 grid */}
      <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-8 max-w-4xl mx-auto">
        {products.map((product, idx) => (
          <div
            key={product.name}
            className="bg-white rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] min-h-[360px] border border-gray-100 hover:border-[#D9B6A3]/30 relative overflow-hidden group cursor-pointer"
            style={{
              boxShadow: '0 8px 32px -8px rgba(48, 90, 114, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)'
            }}
            tabIndex={0}
            aria-label={product.name}
          >
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50/30 rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center h-full">
              <div className="mb-6 flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-inner border border-white/60">
                <span className="motion-safe:transition-transform motion-safe:duration-300 group-hover:-rotate-8 group-hover:scale-110 group-hover:text-[#D9B6A3] group-focus:-rotate-8 group-focus:scale-110 group-focus:text-[#D9B6A3]">
                  {React.cloneElement(product.icon, { size: 32, 'aria-hidden': true })}
                </span>
                  </div>
              <h3 className="text-2xl font-semibold text-[#305A72] mb-2">{product.name}</h3>
              <p className="text-[#7D9BA6] font-medium mb-3 leading-relaxed">{product.tagline}</p>
              <p className="text-[#1E1E1E] mb-6 leading-relaxed flex-grow">{product.description}</p>
              <button
                className="bg-transparent text-[#305A72] font-bold text-lg px-8 py-3 rounded-full hover:underline hover:text-[#7D9BA6] transition mt-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]"
                onClick={() => setModalIndex(idx)}
                tabIndex={0}
              >
                Learn more
              </button>
                  </div>
                </div>
          ))}
        </div>

      {/* Mobile carousel */}
      <div className="md:hidden flex flex-col items-center justify-center min-h-[420px] relative w-full">
        {/* Arrows */}
        <button
          aria-label="Previous"
          onClick={prev}
          className="z-20 bg-white/95 backdrop-blur-sm rounded-full border border-gray-200/60 p-3 transition-all duration-200 absolute left-4 top-1/2 -translate-y-1/2 hover:bg-white hover:border-[#D9B6A3]/30 hover:scale-105 shadow-lg"
        >
          <svg width="20" height="20" fill="none" stroke="#305A72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="z-20 bg-white/95 backdrop-blur-sm rounded-full border border-gray-200/60 p-3 transition-all duration-200 absolute right-4 top-1/2 -translate-y-1/2 hover:bg-white hover:border-[#D9B6A3]/30 hover:scale-105 shadow-lg"
        >
          <svg width="20" height="20" fill="none" stroke="#305A72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
        
        {/* Carousel viewport - Fixed container */}
        <div className="overflow-hidden w-full max-w-[320px] mx-auto relative">
          <div
            className="flex transition-transform duration-300 ease-out"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              transform: `translateX(-${offset}px)`,
              width: `${products.length * (CARD_WIDTH + CARD_GAP)}px`,
            }}
          >
            {products.map((product, idx) => (
              <div
                key={product.name}
                className="bg-white rounded-3xl p-8 flex flex-col items-center text-center min-h-[360px] transition-all duration-300 ease-out border border-gray-100 hover:border-[#D9B6A3]/30 relative overflow-hidden group"
                style={{ 
                  width: `${CARD_WIDTH}px`,
                  marginRight: idx < products.length - 1 ? `${CARD_GAP}px` : '0px',
                  flexShrink: 0,
                  boxShadow: '0 8px 32px -8px rgba(48, 90, 114, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                }}
                tabIndex={0}
                aria-label={product.name}
              >
                {/* Subtle gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50/30 rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  <div className="mb-6 flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-inner border border-white/60">
                    <span className="motion-safe:transition-transform motion-safe:duration-300 group-hover:-rotate-8 group-hover:scale-110 group-hover:text-[#D9B6A3] group-focus:-rotate-8 group-focus:scale-110 group-focus:text-[#D9B6A3]">
                      {React.cloneElement(product.icon, { size: 32, 'aria-hidden': true })}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#305A72] mb-2">{product.name}</h3>
                  <p className="text-[#7D9BA6] font-medium mb-3 text-sm leading-relaxed">{product.tagline}</p>
                  <p className="text-[#1E1E1E] mb-6 text-sm leading-relaxed flex-grow">{product.description}</p>
                  <button
                    className="bg-transparent text-[#305A72] font-bold text-lg px-8 py-3 rounded-full hover:underline hover:text-[#7D9BA6] transition mt-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]"
                    onClick={() => setModalIndex(idx)}
                    tabIndex={0}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {products.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ease-out ${
                active === idx 
                  ? 'bg-[#305A72] scale-110 shadow-lg' 
                  : 'bg-[#D9B6A3]/30 hover:bg-[#D9B6A3]/60 hover:scale-105'
              }`}
              onClick={() => setActive(idx)}
              aria-label={`Go to ${products[idx].name}`}
            />
          ))}
        </div>
        </div>

      {/* Simple Modal for Learn More */}
      {modalIndex !== -1 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setModalIndex(-1)}>
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-xs w-full mx-4 text-center relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-[#305A72] text-2xl font-bold"
              onClick={() => setModalIndex(-1)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="mb-4 flex items-center justify-center text-4xl">{products[modalIndex].icon}</div>
            <h3 className="text-2xl font-semibold text-[#305A72] mb-2">{products[modalIndex].name}</h3>
            <p className="text-[#7D9BA6] font-medium mb-2">{products[modalIndex].tagline}</p>
            <p className="text-[#1E1E1E] mb-4">{products[modalIndex].details}</p>
            <button
              className="w-full bg-[#305A72] hover:bg-[#7D9BA6] text-white font-bold text-lg px-8 py-3 rounded-full shadow-md transition mt-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]"
              onClick={() => setModalIndex(-1)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      {/* Training Offerings Section */}
      <div className="mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#305A72] mb-4">Learn AI with your team.</h2>
          <p className="text-xl md:text-2xl text-[#7D9BA6] mb-8 font-medium">Hands-on training that gets your whole team using AI confidently.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Team AI Workshop */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-[#E9ECEF]">
            <div className="mb-4 flex items-center justify-center w-16 h-16 bg-[#D7EAFB] rounded-2xl">
              <span className="motion-safe:transition-transform motion-safe:duration-300 group-hover:-rotate-8 group-hover:scale-110 group-hover:text-[#D9B6A3] group-focus:-rotate-8 group-focus:scale-110 group-focus:text-[#D9B6A3]">
                <Users size={32} className="text-[#305A72]" aria-hidden="true" />
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-[#305A72] mb-2">Team AI Workshop</h3>
            <p className="text-[#7D9BA6] font-medium mb-2 uppercase tracking-wide">Virtual Training</p>
            <div className="text-3xl font-bold text-[#305A72] mb-4">$1,499</div>
            <ul className="text-left space-y-2 mb-6">
              <li>• Live online sessions</li>
              <li>• Hands-on practice</li>
              <li>• Reference materials</li>
              <li>• 30 days of support</li>
            </ul>
            <button className="w-full bg-[#305A72] hover:bg-[#7D9BA6] text-white font-bold text-lg px-8 py-3 rounded-full shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]">Schedule a workshop</button>
          </div>
          {/* Custom AI Training */}
          <div className="bg-[#305A72] text-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-[#E9ECEF] relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-[#D9B6A3] text-[#1E1E1E] text-xs font-semibold px-4 py-1 rounded-full">MOST POPULAR</div>
            </div>
            <div className="mb-4 flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl">
              <span className="motion-safe:transition-transform motion-safe:duration-300 group-hover:-rotate-8 group-hover:scale-110 group-hover:text-[#D9B6A3] group-focus:-rotate-8 group-focus:scale-110 group-focus:text-[#D9B6A3]">
                <Rocket size={32} className="text-white" aria-hidden="true" />
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-[#305A72] mb-2">Custom AI Training</h3>
            <p className="text-white/80 font-medium mb-2 uppercase tracking-wide">On-Site Training</p>
            <div className="text-3xl font-bold mb-4">$2,999</div>
            <ul className="text-left space-y-2 mb-6">
              <li>• In-person at your office</li>
              <li>• Solve real problems</li>
              <li>• Build custom AI agents</li>
              <li>• 3 months of support</li>
            </ul>
            <button className="w-full bg-white text-[#305A72] font-bold text-lg px-8 py-3 rounded-full border-2 border-[#305A72] hover:bg-[#D7EAFB] hover:text-[#305A72] shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]">Book on-site training</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
