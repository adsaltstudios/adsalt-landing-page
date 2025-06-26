
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Store } from "lucide-react";

const About = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#D7EAFB]/20 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#A4B9C7]/15 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#305A72] mb-6">
            Why We're Here
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#305A72] to-[#7D9BA6] mx-auto"></div>
        </div>

        {/* Main content cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-[#D7EAFB]/30 to-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#305A72] rounded-full flex items-center justify-center mr-4">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#305A72]">Our Mission</h3>
              </div>
              <p className="text-lg text-[#1E1E1E] leading-relaxed mb-4">
                We build AI tools that handle the busywork so small business owners can focus on their customers.
              </p>
              <p className="text-lg text-[#1E1E1E] leading-relaxed">
                We miss real villages—places where the hardware store owner remembers your project and neighbors catch up at the coffee shop. We can't turn back time, but we can help you spend yours better.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white to-[#E9ECEF]/40 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#7D9BA6] rounded-full flex items-center justify-center mr-4">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#305A72]">Real Results</h3>
              </div>
              <p className="text-lg text-[#1E1E1E] leading-relaxed mb-4">
                Instead of drowning in paperwork and chasing invoices, our tools catch costly mistakes and automate tedious tasks.
              </p>
              <p className="text-lg text-[#1E1E1E] leading-relaxed">
                <span className="font-semibold text-[#305A72]">No tech headaches, just results.</span> Businesses using our solutions regularly save thousands and reclaim hours each week.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team credentials */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#D7EAFB]/50 rounded-2xl px-8 py-6 max-w-3xl">
            <p className="text-lg text-[#1E1E1E] leading-relaxed">
              Our team worked at <span className="font-semibold text-[#305A72]">Google, Amazon, and JPMorgan Chase.</span> But we'd rather help the family hardware store and corner café that's been serving the community for decades.
            </p>
          </div>
        </div>

        {/* Featured brand message */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#305A72]/5 via-[#D7EAFB]/10 to-[#305A72]/5 rounded-3xl"></div>
          <div className="relative text-center py-12 px-8">
            <div className="w-16 h-1 bg-gradient-to-r from-[#305A72] to-[#7D9BA6] mx-auto mb-6"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#305A72] mb-8 leading-tight">
              We're Adsalt Studios, reviving the village one small business at a time.
            </h3>
            
            <Button 
              variant="default"
              size="lg"
              className="bg-[#305A72] text-white hover:bg-[#1E1E1E] px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={scrollToProducts}
            >
              See How We Help
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
