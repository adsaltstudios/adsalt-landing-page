
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroProps {
  logoScale?: number;
  headingScale?: number;
  animationProgress?: number;
  isHeaderVisible?: boolean;
}

const Hero = ({ logoScale = 1, headingScale = 1, animationProgress = 0, isHeaderVisible = false }: HeroProps) => {
  const [forceUpdate, setForceUpdate] = useState({});

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCalendly = () => {
    window.open('https://calendly.com/adam-adsalt/30min', '_blank');
  };

  // Calculate actual pixel distances from center to header position
  const calculateTransforms = () => {
    if (typeof window === 'undefined') return { logoStyle: {}, headingStyle: {} };
    
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Header positions (where elements should end up)
    const headerHeight = 80; // Header is about 80px tall
    const headerPaddingLeft = viewportWidth >= 768 ? 24 : 16; // px-6 = 24px on desktop, px-4 = 16px mobile
    const logoFinalX = headerPaddingLeft + 20; // 20px for logo center position
    const logoFinalY = headerHeight / 2; // Center vertically in header
    
    // Current logo position (center of viewport)
    const logoCurrentX = viewportWidth / 2;
    const logoCurrentY = viewportHeight / 2;
    
    // Calculate distance to travel
    const logoDistanceX = logoFinalX - logoCurrentX;
    const logoDistanceY = logoFinalY - logoCurrentY;
    
    // Apply animation progress
    const logoTranslateX = logoDistanceX * animationProgress;
    const logoTranslateY = logoDistanceY * animationProgress;
    
    // Heading should align next to logo
    const headingTranslateX = logoDistanceX * animationProgress + 60; // 60px offset for logo width + gap
    const headingTranslateY = logoDistanceY * animationProgress;
    
    const logoStyle = {
      transform: `translate3d(${logoTranslateX}px, ${logoTranslateY}px, 0) scale(${logoScale})`,
      transformOrigin: 'center center',
      position: 'relative' as const,
      zIndex: animationProgress > 0.5 ? 60 : 10, // Ensure it appears above other content
    };

    const headingStyle = {
      transform: `translate3d(${headingTranslateX}px, ${headingTranslateY}px, 0) scale(${headingScale})`,
      transformOrigin: 'left center',
      position: 'relative' as const,
      zIndex: animationProgress > 0.5 ? 60 : 10,
    };
    
    return { logoStyle, headingStyle };
  };

  const { logoStyle, headingStyle } = calculateTransforms();

  // Add opacity fade-out as elements move to header
  const elementOpacity = isHeaderVisible ? 0 : 1 - (animationProgress * 0.8);

  // Add window resize handler
  useEffect(() => {
    const handleResize = () => {
      // Force recalculation on resize
      setForceUpdate({});
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="hero-section" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-[#D7EAFB] to-[#E9ECEF] pt-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="https://i.ibb.co/QvJjNWL6/path113.png" 
              alt="Adsalt Studios Logo" 
              className="w-32 h-32 mx-auto object-contain transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform motion-reduce:transition-none motion-reduce:transform-none"
              style={{
                ...logoStyle,
                opacity: elementOpacity,
              }}
            />
          </div>
          
          {/* Bold Adsalt Studios title */}
          <h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform motion-reduce:transition-none motion-reduce:transform-none"
            style={{
              ...headingStyle,
              opacity: elementOpacity,
            }}
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
