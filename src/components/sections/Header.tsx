
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollProgress } = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close mobile menu after navigation
  };

  const openCalendly = () => {
    window.open('https://calendly.com/adam-adsalt/30min', '_blank');
    setIsOpen(false); // Close mobile menu after action
  };

  // Calculate header logo opacity and scale based on scroll progress
  const headerLogoOpacity = scrollProgress;
  const headerLogoScale = 0.8 + (scrollProgress * 0.2); // Scale from 0.8 to 1.0

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E9ECEF]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center relative">
            <img 
              src="https://i.ibb.co/QvJjNWL6/path113.png" 
              alt="Adsalt Studios Logo" 
              className="w-full h-full object-contain transition-all duration-300"
              style={{
                opacity: headerLogoOpacity,
                transform: `scale(${headerLogoScale})`,
                willChange: scrollProgress > 0 && scrollProgress < 1 ? 'opacity, transform' : 'auto',
              }}
            />
          </div>
          <span 
            className="text-[#305A72] font-bold text-xl transition-opacity duration-300"
            style={{
              opacity: headerLogoOpacity,
              willChange: scrollProgress > 0 && scrollProgress < 1 ? 'opacity' : 'auto',
            }}
          >
            Adsalt Studios
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('problem')}
            className="text-[#305A72] hover:text-[#D9B6A3] transition-colors"
          >
            Why AI?
          </button>
          <button 
            onClick={() => scrollToSection('products')}
            className="text-[#305A72] hover:text-[#D9B6A3] transition-colors"
          >
            What We Build
          </button>
          <button 
            onClick={() => scrollToSection('proof')}
            className="text-[#305A72] hover:text-[#D9B6A3] transition-colors"
          >
            Results
          </button>
          <Button 
            className="bg-[#D9B6A3] hover:bg-[#305A72] text-white px-6 py-2 rounded-lg transition-all duration-300"
            onClick={openCalendly}
          >
            Let's Talk
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-[#305A72]">
              <Menu className="w-6 h-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-white">
            <nav className="flex flex-col gap-6 mt-8">
              <button 
                onClick={() => scrollToSection('problem')}
                className="text-[#305A72] hover:text-[#D9B6A3] transition-colors text-left text-lg"
              >
                Why AI?
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-[#305A72] hover:text-[#D9B6A3] transition-colors text-left text-lg"
              >
                What We Build
              </button>
              <button 
                onClick={() => scrollToSection('proof')}
                className="text-[#305A72] hover:text-[#D9B6A3] transition-colors text-left text-lg"
              >
                Results
              </button>
              <Button 
                className="bg-[#D9B6A3] hover:bg-[#305A72] text-white px-6 py-3 rounded-lg transition-all duration-300 mt-4"
                onClick={openCalendly}
              >
                Let's Talk
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
