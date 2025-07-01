import { BarChart3, DollarSign, Clock } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#305A72] mb-8 leading-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3] tracking-tight animate-hero-fade-in" tabIndex={0}>
          You're drowning in busywork
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-[#D7EAFB] rounded-3xl shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3] transition-all duration-200" tabIndex={0}>
            <div className="w-16 h-16 bg-[#305A72] rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="text-white" size={32} aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-semibold text-[#305A72] mb-2">Manual tracking</h3>
            <p className="text-[#1E1E1E] leading-relaxed">Hours spent on inventory, sales reports, and customer data entry.</p>
          </div>
          
          <div className="p-6 bg-[#D7EAFB] rounded-3xl shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3] transition-all duration-200" tabIndex={0}>
            <div className="w-16 h-16 bg-[#305A72] rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="text-white" size={32} aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-semibold text-[#305A72] mb-2">Money leaks</h3>
            <p className="text-[#1E1E1E] leading-relaxed">Waste you can't see—overordering, missed opportunities, inefficient processes.</p>
          </div>
          
          <div className="p-6 bg-[#D7EAFB] rounded-3xl shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3] transition-all duration-200" tabIndex={0}>
            <div className="w-16 h-16 bg-[#305A72] rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-white" size={32} aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-semibold text-[#305A72] mb-2">No time to grow</h3>
            <p className="text-[#1E1E1E] leading-relaxed">So busy managing today that you can't plan for tomorrow.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl md:text-2xl text-[#7D9BA6] mb-8 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]" tabIndex={0}>
            Smart tools can handle the boring stuff, so you can focus on what matters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
