
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useMemo } from 'react';

interface HeroProps {
  logoScale?: number;
  headingScale?: number;
  animationProgress?: number;
}

const Hero = ({ logoScale = 1, headingScale = 1, animationProgress = 0 }: HeroProps) => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCalendly = () => {
    window.open('https://calendly.com/adam-adsalt/30min', '_blank');
  };

  // Simplified transform calculations - no DOM queries
  const transforms = useMemo(() => {
    // Simple percentage-based transforms that work on all screen sizes
    const progress = animationProgress;
    
    // Logo moves from center to top-left (header position)
    const logoTranslateX = progress * -45; // Move 45vw left
    const logoTranslateY = progress * -40; // Move 40vh up
    
    // Heading moves to align with logo position
    const headingTranslateX = progress * -35; // Move 35vw left
    const headingTranslateY = progress * -35; // Move 35vh up
    
    // Fade out as animation progresses
    const opacity = Math.max(0, 1 - (progress * 1.5));
    
    return {
      logoStyle: {
        transform: `translate3d(${logoTranslateX}vw, ${logoTranslateY}vh, 0) scale(${logoScale})`,
        opacity,
        willChange: progress > 0 && progress < 1 ? 'transform, opacity' : 'auto',
      },
      headingStyle: {
        transform: `translate3d(${headingTranslateX}vw, ${headingTranslateY}vh, 0) scale(${headingScale})`,
        opacity,
        willChange: progress > 0 && progress < 1 ? 'transform, opacity' : 'auto',
      }
    };
  }, [logoScale, headingScale, animationProgress]);

  return (
    <section id="hero-section" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-[#D7EAFB] to-[#E9ECEF] pt-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="https://i.ibb.co/QvJjNWL6/path113.png" 
              alt="Adsalt Studios Logo" 
              className="w-32 h-32 mx-auto object-contain"
              style={transforms.logoStyle}
            />
          </div>
          
          {/* Bold Adsalt Studios title */}
          <h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
            style={transforms.headingStyle}
          >
            Adsalt Studios
          </h1>
          
          <p className="text-xl md:text-2xl text-[#1E1E1E] mb-8 max-w-3xl mx-auto leading-relaxed">
            We help small business owners work faster, smarter, and cheaper by 
            building AI tools that cut waste and help them grow.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            className="bg-[#305A72] hover:bg-[#D9B6A3] text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
            onClick={scrollToProducts}
          >
            Start Building Smarter →
          </Button>
          <Button 
            variant="ghost" 
            className="text-[#305A72] hover:text-[#D9B6A3] text-lg px-8 py-6 hover:underline"
            onClick={openCalendly}
          >
            Schedule a chat
          </Button>
        </div>

        <div className="animate-bounce">
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
