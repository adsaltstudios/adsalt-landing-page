import React, { useState } from 'react';
import { Rocket, Users, Search, TrendingUp, ChevronRight, Sparkles, Brain, BarChart3, Zap, Shield, Clock, MessageSquare } from 'lucide-react';

const ProductsRedesign = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 'chat-optimizer',
      name: 'AI Rank Booster',
      tagline: 'Get found when customers ask AI.',
      price: 'From $899',
      icon: Rocket,
      color: '#D9B6A3',
      features: ['AI-ready content', 'Brand visibility', 'Smart site maps'],
      visual: 'chat',
      image: 'https://i.ibb.co/KcSchhd3/20250627-2010-Centered-Caf-Search-remix-01jyt18pzzerbvdxrn125056yc.png'
    },
    {
      id: 'onsite-guide',
      name: 'Onsite Guide',
      tagline: 'Instant answers for everyone, anytime.',
      price: 'From $749',
      icon: Users,
      color: '#E9ECEF',
      features: ['80% fewer emails', 'Boost conversions', '24/7 support', 'Multi-platform'],
      visual: 'guide'
    },
    {
      id: 'insight-engine',
      name: 'Customer Insight Engine',
      tagline: 'See patterns. Make smarter moves.',
      price: 'From $149/mo',
      icon: Brain,
      color: '#A4B9C7',
      features: ['Pattern detection', 'Smart upsells', 'Churn alerts'],
      visual: 'insights'
    },
    {
      id: 'growth-autopilot',
      name: 'Growth Autopilot',
      tagline: 'Marketing that never sleeps.',
      price: 'From $249/mo',
      icon: TrendingUp,
      color: '#305A72',
      features: ['Auto follow-ups', 'Personal touch', 'Performance tracking'],
      visual: 'growth'
    },
    {
      id: 'team-workshop',
      name: 'Team AI Workshop',
      tagline: 'Get your whole team AI-ready.',
      price: 'Starting at $1,499',
      icon: Users,
      color: '#7D9BA6',
      features: ['Live training', 'Hands-on practice', 'Reference guides', '30 days support'],
      visual: 'workshop',
      cta: 'Schedule a workshop'
    },
    {
      id: 'custom-training',
      name: 'Custom AI Training',
      tagline: 'AI solutions built for your business.',
      price: 'Starting at $2,999',
      icon: Zap,
      color: '#305A72',
      features: ['On-site training', 'Real problems', 'Build agents', '3 months support'],
      visual: 'training',
      cta: 'Book on-site training'
    }
  ];

  const ProductVisual = ({ type, color, image }) => {
    const baseClasses = "w-full h-64 rounded-2xl flex items-center justify-center relative overflow-hidden transition-all duration-700";
    
    if (image) {
      return (
        <div className="w-full h-64 rounded-2xl flex items-center justify-center bg-[#F8FAFC] overflow-hidden">
          <img
            src={image}
            alt="AI Rank Booster hero"
            className="object-contain w-full h-full"
            style={{ maxHeight: 256, borderRadius: '1rem' }}
          />
        </div>
      );
    }
    
    switch(type) {
      case 'chat':
        return (
          <div className={baseClasses} style={{ background: `linear-gradient(135deg, ${color}15 0%, ${color}30 100%)` }}>
            <div className="absolute inset-0 opacity-10">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-pulse"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                    width: '120px',
                    height: '40px',
                    background: color,
                    borderRadius: '20px',
                    transform: `rotate(${-15 + i * 5}deg)`,
                    opacity: 0.3 - i * 0.05
                  }}
                />
              ))}
            </div>
            <Rocket size={80} color={color} className="relative z-10 animate-bounce" />
          </div>
        );
      
      case 'guide':
        return (
          <div className={baseClasses} style={{ background: `linear-gradient(135deg, ${color}15 0%, #305A7230 100%)` }}>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Chat bubbles animation */}
              <div className="absolute inset-0">
                <div className="absolute top-8 left-12 w-32 h-12 bg-[#305A72] rounded-2xl rounded-bl-none opacity-20 animate-pulse" />
                <div className="absolute top-24 right-12 w-28 h-12 bg-[#A4B9C7] rounded-2xl rounded-br-none opacity-20 animate-pulse animation-delay-1000" />
                <div className="absolute bottom-20 left-16 w-36 h-12 bg-[#305A72] rounded-2xl rounded-bl-none opacity-20 animate-pulse animation-delay-2000" />
                <div className="absolute bottom-8 right-8 w-24 h-12 bg-[#A4B9C7] rounded-2xl rounded-br-none opacity-20 animate-pulse" />
              </div>
              {/* Central icon with ripple effect */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#305A72] opacity-20 animate-ping" />
                <div className="absolute inset-0 rounded-full bg-[#305A72] opacity-10 animate-ping animation-delay-1000" />
                <Users size={60} color="#305A72" className="relative z-10" />
              </div>
            </div>
          </div>
        );
      
      case 'insights':
        return (
          <div className={baseClasses} style={{ background: `linear-gradient(135deg, ${color}15 0%, ${color}30 100%)` }}>
            <div className="grid grid-cols-3 gap-4 p-8">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-lg animate-pulse"
                  style={{
                    background: color,
                    opacity: 0.2 + (i % 3) * 0.2,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
            <Brain size={60} color={color} className="absolute bottom-4 right-4" />
          </div>
        );
      
      case 'growth':
        return (
          <div className={baseClasses} style={{ background: `linear-gradient(135deg, ${color}15 0%, ${color}30 100%)` }}>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute bottom-0 left-0 right-0 h-32">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bottom-0 bg-opacity-30 animate-pulse"
                    style={{
                      left: `${i * 14}%`,
                      width: '12%',
                      height: `${30 + i * 10}%`,
                      background: color,
                      borderRadius: '8px 8px 0 0',
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
              <TrendingUp size={80} color={color} className="relative z-10" />
            </div>
          </div>
        );
      
      case 'workshop':
        return (
          <div className={baseClasses} style={{ background: `linear-gradient(135deg, ${color}15 0%, ${color}30 100%)` }}>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Virtual meeting grid */}
              <div className="grid grid-cols-3 gap-3 p-8">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="relative"
                  >
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center animate-pulse"
                      style={{
                        background: `linear-gradient(135deg, ${color}40, ${color}20)`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    >
                      <Users size={24} color={color} opacity={0.6} />
                    </div>
                    {i === 0 && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
              <MessageSquare size={40} color={color} className="absolute bottom-6 right-6 animate-bounce" />
            </div>
          </div>
        );
      
      case 'training':
        return (
          <div className={baseClasses} style={{ background: `linear-gradient(135deg, ${color}15 0%, ${color}30 100%)` }}>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Building blocks representing custom AI */}
              <div className="relative">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-pulse"
                    style={{
                      bottom: `${i * 35}px`,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: `${100 - i * 20}px`,
                      height: '30px',
                      background: color,
                      opacity: 0.3 + i * 0.1,
                      borderRadius: '8px',
                      animationDelay: `${i * 0.3}s`
                    }}
                  />
                ))}
                <Zap size={60} color={color} className="relative z-10 animate-pulse" />
              </div>
              {/* Floating elements */}
              <div className="absolute top-8 left-8 w-4 h-4 rounded-full animate-bounce" style={{ background: color, opacity: 0.5 }} />
              <div className="absolute top-12 right-12 w-3 h-3 rounded-full animate-bounce animation-delay-1000" style={{ background: color, opacity: 0.4 }} />
              <div className="absolute bottom-16 left-16 w-5 h-5 rounded-full animate-bounce animation-delay-2000" style={{ background: color, opacity: 0.3 }} />
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const FeatureIndicators = ({ features, color }) => (
    <div className="flex gap-2 mt-4">
      {features.map((_, index) => (
        <div
          key={index}
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: color, opacity: 0.6 }}
        />
      ))}
    </div>
  );

  return (
    <section id="products" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#305A72] mb-6">
            Explore our AI toolkit.
          </h2>
          <p className="text-xl text-[#7D9BA6] max-w-3xl mx-auto">
            Simple tools that save you time and make you money.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Visual */}
              <div className="mb-8 transform transition-transform duration-500 group-hover:scale-[1.02]">
                <ProductVisual type={product.visual} color={product.color} image={product.image} />
              </div>

              {/* Product Info */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold text-[#1E1E1E]">
                  {product.name}
                </h3>
                <p className="text-lg text-[#7D9BA6]">
                  {product.tagline}
                </p>
                <p className="text-2xl font-medium text-[#305A72]">
                  {product.price}
                </p>

                <FeatureIndicators features={product.features} color={product.color} />

                {/* CTAs */}
                <div className="flex gap-4 justify-center pt-4">
                  <button 
                    className="text-[#305A72] hover:text-[#D9B6A3] transition-colors flex items-center gap-1 font-medium"
                  >
                    Learn more
                    <ChevronRight size={16} />
                  </button>
                  <button 
                    className="px-6 py-2 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: product.color }}
                  >
                    {product.cta || 'Get started'}
                  </button>
                </div>

                {/* Hover Feature Preview */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  hoveredProduct === product.id ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-4 flex gap-6 justify-center">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-[#7D9BA6]">
                        <Sparkles size={14} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Training Section Header */}
        <div className="text-center mt-24 mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-[#305A72] mb-4">
            Learn AI with your team.
          </h3>
          <p className="text-lg text-[#7D9BA6] max-w-2xl mx-auto">
            Hands-on training that gets your whole team using AI confidently.
          </p>
        </div>

        {/* Training Products - Comparison Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Team AI Workshop */}
            <div className="group">
              <div className="relative bg-white border-2 border-[#E9ECEF] rounded-2xl p-8 hover:border-[#A4B9C7] transition-all duration-300 h-full">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D7EAFB] rounded-2xl mb-4">
                    <Users size={32} className="text-[#305A72]" />
                  </div>
                  <h4 className="text-2xl font-semibold text-[#1E1E1E] mb-2">Team AI Workshop</h4>
                  <p className="text-sm text-[#7D9BA6] uppercase tracking-wide mb-4">Virtual Training</p>
                  <div className="text-3xl font-bold text-[#305A72]">$1,499</div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#D7EAFB] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles size={12} className="text-[#305A72]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1E1E1E]">Live online sessions</p>
                      <p className="text-sm text-[#7D9BA6]">Interactive workshops with your whole team</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#D7EAFB] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles size={12} className="text-[#305A72]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1E1E1E]">Hands-on practice</p>
                      <p className="text-sm text-[#7D9BA6]">Work with AI tools during the session</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#D7EAFB] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles size={12} className="text-[#305A72]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1E1E1E]">Reference materials</p>
                      <p className="text-sm text-[#7D9BA6]">Guides and templates to keep</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#D7EAFB] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock size={12} className="text-[#305A72]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1E1E1E]">30 days of support</p>
                      <p className="text-sm text-[#7D9BA6]">Get help as you implement</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-[#7D9BA6] hover:bg-[#305A72] text-white py-3 rounded-full font-medium transition-all duration-300 hover:scale-[1.02]">
                  Schedule a workshop
                </button>
              </div>
            </div>

            {/* Custom AI Training */}
            <div className="group relative">
              {/* Popular Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-[#D9B6A3] text-[#1E1E1E] text-xs font-semibold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              </div>
              
              <div className="relative bg-[#305A72] text-white rounded-2xl p-8 h-full">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                    <Zap size={32} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-semibold mb-2">Custom AI Training</h4>
                  <p className="text-sm text-white/80 uppercase tracking-wide mb-4">On-Site Training</p>
                  <div className="text-3xl font-bold">$2,999</div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles size={12} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium">In-person at your office</p>
                      <p className="text-sm text-white/80">Tailored to your team's needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles size={12} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Solve real problems</p>
                      <p className="text-sm text-white/80">Work on your actual use cases</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles size={12} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Build custom AI agents</p>
                      <p className="text-sm text-white/80">Create tools specific to your business</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield size={12} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium">3 months of support</p>
                      <p className="text-sm text-white/80">Ongoing help as you scale</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-white text-[#305A72] py-3 rounded-full font-medium transition-all duration-300 hover:scale-[1.02] hover:bg-[#D9B6A3] hover:text-white">
                  Book on-site training
                </button>
              </div>
            </div>
          </div>

          {/* Comparison Note */}
          <div className="text-center mt-12">
            <p className="text-[#7D9BA6]">
              Not sure which training is right for your team? 
              <button className="text-[#305A72] hover:text-[#D9B6A3] font-medium ml-2 underline underline-offset-4">
                Let's discuss your needs
              </button>
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-lg text-[#1E1E1E] mb-4">
            Not sure which tool is right for you?
          </p>
          <button className="bg-[#305A72] hover:bg-[#D9B6A3] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
            Get a free consultation
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-[#E9ECEF]">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-[#A4B9C7]" />
                <div>
                  <p className="font-medium text-[#305A72]">Secure & Private</p>
                  <p className="text-sm text-[#7D9BA6]">Your data stays yours</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-[#E9ECEF]" />
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-[#A4B9C7]" />
                <div>
                  <p className="font-medium text-[#305A72]">Setup in Minutes</p>
                  <p className="text-sm text-[#7D9BA6]">No tech degree required</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-[#E9ECEF]" />
              <div className="flex items-center gap-3">
                <Zap className="w-8 h-8 text-[#A4B9C7]" />
                <div>
                  <p className="font-medium text-[#305A72]">See Results Fast</p>
                  <p className="text-sm text-[#7D9BA6]">Most users save hours in week 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default ProductsRedesign;
