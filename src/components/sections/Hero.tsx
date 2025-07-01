import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import React, { useEffect, useState } from 'react';

interface HeroProps {
  scrollProgress?: number;
}

const Hero = ({ scrollProgress = 0 }: HeroProps) => {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setContentVisible(true), 100);
  }, []);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCalendly = () => {
    window.open('https://calendly.com/adam-adsalt/30min', '_blank');
  };

  // Add 20% delay to all animations
  const animationDelay = 0.2;

  // Incremental fade calculations with 20% delay and better spacing
  const logoOpacity = Math.max(0, 1 - ((scrollProgress - animationDelay) * 4)); // Fades from 20-45% scroll
  const logoVisible = logoOpacity > 0.01;
  const logoTranslateY = scrollProgress * 30;

  const titleOpacity = Math.max(0, 1 - ((scrollProgress - (animationDelay + 0.1)) * 4)); // Fades from 30-55% scroll
  const titleVisible = titleOpacity > 0.01;
  const titleTranslateY = scrollProgress * 40;

  const descriptionOpacity = Math.max(0, 1 - ((scrollProgress - (animationDelay + 0.2)) * 4)); // Fades from 40-65% scroll
  const descriptionVisible = descriptionOpacity > 0.01;
  const descriptionTranslateY = scrollProgress * 50;

  const buttonsOpacity = Math.max(0, 1 - ((scrollProgress - (animationDelay + 0.3)) * 4)); // Fades from 50-75% scroll
  const buttonsVisible = buttonsOpacity > 0.01;
  const buttonsTranslateY = scrollProgress * 60;

  const arrowOpacity = Math.max(0, 1 - ((scrollProgress - (animationDelay + 0.45)) * 4)); // Fades from 65-90% scroll
  const arrowVisible = arrowOpacity > 0.01;
  const arrowTranslateY = scrollProgress * 70;

  const logoStyle = {
    opacity: logoOpacity,
    transform: `translateY(${logoTranslateY}px)`,
    visibility: logoVisible ? ('visible' as const) : ('hidden' as const),
  };

  const titleStyle = {
    opacity: titleOpacity,
    transform: `translateY(${titleTranslateY}px)`,
    visibility: titleVisible ? ('visible' as const) : ('hidden' as const),
  };

  const descriptionStyle = {
    opacity: descriptionOpacity,
    transform: `translateY(${descriptionTranslateY}px)`,
    visibility: descriptionVisible ? ('visible' as const) : ('hidden' as const),
  };

  const buttonsStyle = {
    opacity: buttonsOpacity,
    transform: `translateY(${buttonsTranslateY}px)`,
    visibility: buttonsVisible ? ('visible' as const) : ('hidden' as const),
  };

  const arrowStyle = {
    opacity: arrowOpacity,
    transform: `translateY(${arrowTranslateY}px)`,
    visibility: arrowVisible ? ('visible' as const) : ('hidden' as const),
  };

  return (
    <section id="hero-section" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#D7EAFB] to-[#E9ECEF]" />
      <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-8">
          <div
            className="mb-8 relative inline-block transition-transform duration-300 hover:scale-105 focus:scale-105"
            style={logoStyle}
            tabIndex={0}
            aria-label="Adsalt Studios Logo"
          >
            <img 
              src="https://i.ibb.co/QvJjNWL6/path113.png" 
              alt="Adsalt Studios Logo: stylized salt shaker icon" 
              className="w-32 h-32 mx-auto object-contain" 
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-[#305A72] mb-6 leading-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3] tracking-tight animate-hero-fade-in" style={titleStyle} tabIndex={0}>
            Adsalt Studios
          </h1>
          
          <p className="text-xl md:text-2xl text-[#7D9BA6] mb-8 max-w-3xl mx-auto leading-relaxed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3] tracking-wide animate-hero-fade-in" style={descriptionStyle} tabIndex={0}>
            We help small business owners work faster, smarter, and cheaper by 
            building AI tools that cut waste and help them grow.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={buttonsStyle}>
          <Button 
            className="bg-[#305A72] hover:bg-[#7D9BA6] text-white font-bold text-lg px-8 py-3 rounded-full shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3] hover:scale-105 active:scale-97 hover:shadow-xl active:shadow focus:scale-105 focus:shadow-xl"
            onClick={scrollToProducts}
          >
            Start Building Smarter →
          </Button>
          <Button 
            className="bg-transparent text-[#305A72] font-bold text-lg px-8 py-3 rounded-full hover:underline hover:text-[#7D9BA6] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]"
            onClick={openCalendly}
          >
            Schedule a chat
          </Button>
        </div>

        <div className="animate-bounce" style={arrowStyle}>
          <ArrowDown 
            className="w-8 h-8 text-[#305A72] mx-auto cursor-pointer opacity-70" 
            onClick={scrollToProducts}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
