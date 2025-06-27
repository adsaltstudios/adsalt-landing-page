import React, { useState } from 'react';
import { Rocket, Users, Search, TrendingUp, ChevronRight, Sparkles, Brain, BarChart3, Zap, Shield, Clock } from 'lucide-react';

const ProductsRedesign = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 'chat-optimizer',
      name: 'Chat Answer Optimizer',
      tagline: 'Get found when customers ask AI.',
      price: 'From $899',
      icon: Rocket,
      color: '#D9B6A3',
      features: ['AI-ready content', 'Brand visibility', 'Smart site maps'],
      visual: 'chat'
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
      id: 'profit-detector',
      name: 'Profit Leak Detector',
      tagline: 'Find money hiding in plain sight.',
      price: 'From $199/mo',
      icon: Search,
      color: '#7D9BA6',
      features: ['Cost analysis', 'Price optimization', 'Workflow automation'],
      visual: 'profit'
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
    }
  ];

  const ProductVisual = ({ type, color }) => {
    const baseClasses = "w-full h-64 rounded-2xl flex items-center justify-center relative overflow-hidden transition-all duration-700";
    
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
      
      case 'profit':
        return (
          <div className={baseClasses} style={{ background: `linear-gradient(135deg, ${color}15 0%, ${color}30 100%)` }}>
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full border-4 border-dashed animate-spin-slow" style={{ borderColor: color, opacity: 0.3 }} />
              <div className="absolute inset-4 rounded-full border-4 border-dashed animate-spin-slow animation-delay-1000" style={{ borderColor: color, opacity: 0.4 }} />
              <div className="absolute inset-8 rounded-full border-4 border-dashed animate-spin-slow animation-delay-2000" style={{ borderColor: color, opacity: 0.5 }} />
              <Search size={60} color={color} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
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
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Visual */}
              <div className="mb-8 transform transition-transform duration-500 group-hover:scale-[1.02]">
                <ProductVisual type={product.visual} color={product.color} />
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
                    Get started
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
        <div className="mt-20 pt-12 border-t border-[#E9ECEF]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Shield className="w-12 h-12 mx-auto mb-3 text-[#A4B9C7]" />
              <p className="font-medium text-[#305A72]">Secure & Private</p>
              <p className="text-sm text-[#7D9BA6] mt-1">Your data stays yours</p>
            </div>
            <div>
              <Clock className="w-12 h-12 mx-auto mb-3 text-[#A4B9C7]" />
              <p className="font-medium text-[#305A72]">Setup in Minutes</p>
              <p className="text-sm text-[#7D9BA6] mt-1">No tech degree required</p>
            </div>
            <div>
              <Zap className="w-12 h-12 mx-auto mb-3 text-[#A4B9C7]" />
              <p className="font-medium text-[#305A72]">See Results Fast</p>
              <p className="text-sm text-[#7D9BA6] mt-1">Most users save hours in week 1</p>
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
