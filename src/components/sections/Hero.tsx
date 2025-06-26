
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCalendly = () => {
    window.open('https://calendly.com/adam-adsalt/30min', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-[#D7EAFB] to-[#E9ECEF] pt-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          {/* Tagline with icon */}
          <div className="inline-flex items-center gap-2 bg-white/70 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-[#305A72]" />
            <span className="text-[#305A72] font-medium">Helping small businesses work smarter</span>
          </div>
          
          {/* Bold Adsalt Studios title */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Adsalt Studios
          </h1>
          
          <p className="text-xl md:text-2xl text-[#1E1E1E] mb-8 max-w-3xl mx-auto leading-relaxed">
            We help small business owners work faster, smarter, and cheaper by 
            building AI tools that cut waste and help them grow.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            className="bg-[#305A72] hover:bg-[#D9B6A3] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={scrollToProducts}
          >
            Start Building Smarter →
          </Button>
          <Button 
            variant="ghost" 
            className="text-[#305A72] hover:text-[#D9B6A3] text-lg px-8 py-6 hover:underline bg-white/50 hover:bg-white/70 rounded-full backdrop-blur-sm"
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
