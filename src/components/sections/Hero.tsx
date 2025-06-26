import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { scrollProgress, isAnimating, logoRef } = useScrollAnimation();

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCalendly = () => {
    window.open('https://calendly.com/adam-adsalt/30min', '_blank');
  };

  // Calculate logo transform values based on scroll progress
  const logoScale = 1 - (scrollProgress * 0.6875); // Scale from 1 to 0.3125 (128px to 40px)
  const logoTranslateX = scrollProgress * -45; // Move left towards header position
  const logoTranslateY = scrollProgress * -35; // Move up towards header position

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-[#D7EAFB] to-[#E9ECEF] pt-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          {/* Logo with scroll-triggered animation */}
          <div className="mb-8" ref={logoRef}>
            <img 
              src="https://i.ibb.co/QvJjNWL6/path113.png" 
              alt="Adsalt Studios Logo" 
              className="w-32 h-32 mx-auto object-contain transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                transform: `scale(${logoScale}) translate3d(${logoTranslateX}vw, ${logoTranslateY}vh, 0)`,
                willChange: isAnimating ? 'transform' : 'auto',
              }}
            />
          </div>
          
          {/* Bold Adsalt Studios title */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Adsalt Studios
          </h1>
          
          <p className="text-xl md:text-2xl text-[#1E1E1E] mb-8 max-w-3xl mx-auto leading-relaxed">
            We help small business owners work faster, smarter, and cheaper by 
            building AI tools that cut waste and help them grow.
          </p>
        </div>
        
        {/* Debug info - will be removed in later phases */}
        <div className="fixed top-20 right-4 bg-black/80 text-white p-2 rounded text-sm z-50">
          <div>Progress: {(scrollProgress * 100).toFixed(1)}%</div>
          <div>Animating: {isAnimating ? 'Yes' : 'No'}</div>
          <div>Scale: {logoScale.toFixed(3)}</div>
          <div>TranslateX: {logoTranslateX.toFixed(1)}vw</div>
          <div>TranslateY: {logoTranslateY.toFixed(1)}vh</div>
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
