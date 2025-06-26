import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Store, Handshake } from "lucide-react";

const About = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#305A72] mb-6">
            Why We're Here
          </h2>
        </div>

        {/* Featured Quote Section */}
        <div className="bg-[#D9B6A3] rounded-lg p-8 mb-16 text-center">
          <div className="flex justify-center mb-4">
            <Store className="w-8 h-8 text-white" />
          </div>
          <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
            We're Adsalt Studios, reviving the village one small business at a time.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-[#D7EAFB] border-none">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#305A72] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xl">🛠️</span>
                </div>
                <h3 className="text-lg font-semibold text-[#305A72]">Our Mission</h3>
              </div>
              <p className="text-[#1E1E1E] leading-relaxed">
                We build AI tools that handle the busywork so small business owners can focus on their customers.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#D7EAFB] border-none">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#305A72] rounded-full flex items-center justify-center mr-3">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#305A72]">Our Vision</h3>
              </div>
              <p className="text-[#1E1E1E] leading-relaxed">
                We miss real villages—places where the hardware store owner remembers your project and neighbors catch up at the coffee shop.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#D7EAFB] border-none">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#305A72] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xl">💡</span>
                </div>
                <h3 className="text-lg font-semibold text-[#305A72]">Our Impact</h3>
              </div>
              <p className="text-[#1E1E1E] leading-relaxed">
                Businesses using our solutions regularly save thousands and reclaim hours each week.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <p className="text-lg text-[#1E1E1E] leading-relaxed">
              We can't turn back time, but we can help you spend yours better. Instead of drowning in paperwork and chasing invoices, our tools catch costly mistakes and automate tedious tasks.
            </p>
            <p className="text-lg text-[#1E1E1E] leading-relaxed">
              No tech headaches, just results. Our tools work the way you do—simple, reliable, and focused on what matters most.
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-[#1E1E1E] leading-relaxed">
              Our team worked at Google, Amazon, and JPMorgan Chase. But we'd rather help the family hardware store and corner café that's been serving the community for decades.
            </p>
            <p className="text-lg text-[#1E1E1E] leading-relaxed">
              We believe small businesses are the heart of thriving communities, and we're here to help them succeed.
            </p>
          </div>
        </div>

        {/* Centered CTA */}
        <div className="text-center">
          <Button 
            className="bg-[#D9B6A3] text-white hover:bg-[#305A72] hover:border-[#305A72] px-8 py-3 text-lg"
            onClick={scrollToProducts}
          >
            See how we help businesses like yours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
