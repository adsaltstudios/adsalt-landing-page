
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  scrollProgress?: number;
}

const Hero = ({ scrollProgress = 0 }: HeroProps) => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCalendly = () => {
    window.open('https://calendly.com/adam-adsalt/30min', '_blank');
  };

  // Incremental fade calculations with proper cutoffs
  const logoOpacity = Math.max(0, 1 - (scrollProgress * 4)); // Fades from 0-25% scroll
  const logoVisible = logoOpacity > 0.01;
  const logoTranslateY = scrollProgress * 30;

  const titleOpacity = Math.max(0, 1 - ((scrollProgress - 0.15) * 4)); // Fades from 15-40% scroll
  const titleVisible = titleOpacity > 0.01;
  const titleTranslateY = scrollProgress * 40;

  const descriptionOpacity = Math.max(0, 1 - ((scrollProgress - 0.3) * 4)); // Fades from 30-55% scroll
  const descriptionVisible = descriptionOpacity > 0.01;
  const descriptionTranslateY = scrollProgress * 50;

  const buttonsOpacity = Math.max(0, 1 - ((scrollProgress - 0.45) * 4)); // Fades from 45-70% scroll
  const buttonsVisible = buttonsOpacity > 0.01;
  const buttonsTranslateY = scrollProgress * 60;

  const arrowOpacity = Math.max(0, 1 - ((scrollProgress - 0.6) * 4)); // Fades from 60-85% scroll
  const arrowVisible = arrowOpacity > 0.01;
  const arrowTranslateY = scrollProgress * 70;

  const logoStyle = {
    opacity: logoOpacity,
    transform: `translateY(${logoTranslateY}px)`,
    visibility: logoVisible ? 'visible' : 'hidden' as const,
  };

  const titleStyle = {
    opacity: titleOpacity,
    transform: `translateY(${titleTranslateY}px)`,
    visibility: titleVisible ? 'visible' : 'hidden' as const,
  };

  const descriptionStyle = {
    opacity: descriptionOpacity,
    transform: `translateY(${descriptionTranslateY}px)`,
    visibility: descriptionVisible ? 'visible' : 'hidden' as const,
  };

  const buttonsStyle = {
    opacity: buttonsOpacity,
    transform: `translateY(${buttonsTranslateY}px)`,
    visibility: buttonsVisible ? 'visible' : 'hidden' as const,
  };

  const arrowStyle = {
    opacity: arrowOpacity,
    transform: `translateY(${arrowTranslateY}px)`,
    visibility: arrowVisible ? 'visible' : 'hidden' as const,
  };

  return (
    <section id="hero-section" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-[#D7EAFB] to-[#E9ECEF] pt-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <div className="mb-8" style={logoStyle}>
            <img 
              src="https://i.ibb.co/QvJjNWL6/path113.png" 
              alt="Adsalt Studios Logo" 
              className="w-32 h-32 mx-auto object-contain"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight" style={titleStyle}>
            Adsalt Studios
          </h1>
          
          <p className="text-xl md:text-2xl text-[#1E1E1E] mb-8 max-w-3xl mx-auto leading-relaxed" style={descriptionStyle}>
            We help small business owners work faster, smarter, and cheaper by 
            building AI tools that cut waste and help them grow.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={buttonsStyle}>
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
