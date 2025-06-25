
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCalendly = () => {
    window.open('https://calendly.com/adam-adsalt/30min', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E9ECEF]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <img 
              src="https://i.ibb.co/YMpTFS5/Ad-Salt-PNG-11.png" 
              alt="Adsalt Studios Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[#305A72] font-bold text-xl">Adsalt Studios</span>
        </div>

        {/* Navigation */}
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

        {/* Mobile menu button - simplified for now */}
        <button className="md:hidden text-[#305A72]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
