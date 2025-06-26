
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCalendly = () => {
    window.open('https://calendly.com/adam-adsalt/30min', '_blank');
  };

  // Calculate animation progress based on scroll position
  const animationProgress = Math.min(scrollY / 300, 1);
  const logoScale = 1 - (animationProgress * 0.5); // Scale from 1 to 0.5
  const titleScale = 1 - (animationProgress * 0.75); // Scale from 1 to 0.25
  const opacity = 1 - (animationProgress * 0.8); // Fade out as scrolling

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-[#D7EAFB] to-[#E9ECEF] pt-20 relative">
      {/* Morphing elements that will transition to header - only show when scrolling */}
      {scrollY > 0 && (
        <div 
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none z-40"
          style={{
            opacity: opacity,
            transform: `translateY(${animationProgress * -50}px)`,
          }}
        >
          <div className="text-center">
            {/* Logo */}
            <div 
              className="mb-8 transition-all duration-300"
              style={{
                transform: `scale(${logoScale})`,
                transformOrigin: 'center center',
              }}
            >
              <img 
                src="https://i.ibb.co/QvJjNWL6/path113.png" 
                alt="Adsalt Studios Logo" 
                className="w-16 h-16 mx-auto object-contain"
              />
            </div>
            
            {/* Title */}
            <h1 
              className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight transition-all duration-300"
              style={{
                transform: `scale(${titleScale})`,
                transformOrigin: 'center center',
              }}
            >
              Adsalt Studios
            </h1>
          </div>
        </div>
      )}

      {/* Main hero content */}
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="https://i.ibb.co/QvJjNWL6/path113.png" 
              alt="Adsalt Studios Logo" 
              className="w-16 h-16 mx-auto object-contain"
            />
          </div>
          
          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
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
