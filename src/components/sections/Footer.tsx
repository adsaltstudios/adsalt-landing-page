

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-[#1E1E1E]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img 
                src="https://i.ibb.co/YMpTFS5/Ad-Salt-PNG-11.png" 
                alt="Adsalt Studios Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-white">Adsalt Studios</h3>
          </div>
          <p className="text-[#A4B9C7]">Reviving the village, one small business at a time.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <p className="text-[#A4B9C7] mb-1">info@adsalt.ai</p>
            <p className="text-[#A4B9C7]">(845) 323-5284</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Our Promise</h4>
            <p className="text-[#A4B9C7]">Simple tools. Real results. People first.</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Our Values</h4>
            <p className="text-[#A4B9C7] mb-1">Keep it simple</p>
            <p className="text-[#A4B9C7] mb-1">People come first</p>
            <p className="text-[#A4B9C7]">Move with purpose</p>
          </div>
        </div>
        
        <div className="border-t border-[#7D9BA6] mt-8 pt-8 text-center">
          <p className="text-[#A4B9C7]">
            © 2025 Adsalt Studios. Made with care for small businesses everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

