import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  isVisible: boolean;
}

const Header = ({ isVisible }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close mobile menu after navigation
  };

  const openCalendly = () => {
    window.open('https://calendly.com/adam-adsalt/30min', '_blank');
    setIsOpen(false); // Close mobile menu after action
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E9ECEF] shadow-sm transition-all duration-500 ease-out ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <img 
              src="https://i.ibb.co/QvJjNWL6/path113.png" 
              alt="Adsalt Studios Logo: stylized salt shaker icon" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[#305A72] font-bold text-xl">Adsalt Studios</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('problem')}
            className="text-[#305A72] font-bold text-lg hover:text-[#7D9BA6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]"
          >
            Why AI?
          </button>
          <button 
            onClick={() => scrollToSection('products')}
            className="text-[#305A72] font-bold text-lg hover:text-[#7D9BA6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]"
          >
            What We Build
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-[#305A72] font-bold text-lg hover:text-[#7D9BA6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('proof')}
            className="text-[#305A72] font-bold text-lg hover:text-[#7D9BA6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]"
          >
            Results
          </button>
          <Button 
            className="bg-[#305A72] hover:bg-[#7D9BA6] text-white font-bold text-lg px-8 py-3 rounded-full shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]"
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
                className="text-[#305A72] font-bold text-lg hover:text-[#7D9BA6] transition-colors text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]"
              >
                Why AI?
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-[#305A72] font-bold text-lg hover:text-[#7D9BA6] transition-colors text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]"
              >
                What We Build
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-[#305A72] font-bold text-lg hover:text-[#7D9BA6] transition-colors text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('proof')}
                className="text-[#305A72] font-bold text-lg hover:text-[#7D9BA6] transition-colors text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]"
              >
                Results
              </button>
              <Button 
                className="bg-[#305A72] hover:bg-[#7D9BA6] text-white font-bold text-lg px-8 py-3 rounded-full shadow-md transition mt-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]"
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
