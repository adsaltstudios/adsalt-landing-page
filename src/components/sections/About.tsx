
import { Button } from "@/components/ui/button";

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

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-[#1E1E1E] leading-relaxed">
              We build AI tools that handle the busywork so small business owners can focus on their customers.
            </p>
            <p className="text-lg text-[#1E1E1E] leading-relaxed">
              We miss real villages—places where the hardware store owner remembers your project and neighbors catch up at the coffee shop. We can't turn back time, but we can help you spend yours better.
            </p>
            <p className="text-lg text-[#1E1E1E] leading-relaxed">
              Instead of drowning in paperwork and chasing invoices, our tools catch costly mistakes and automate tedious tasks. No tech headaches, just results. Businesses using our solutions regularly save thousands and reclaim hours each week.
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-[#1E1E1E] leading-relaxed">
              Our team worked at Google, Amazon, and JPMorgan Chase. But we'd rather help the family hardware store and corner café that's been serving the community for decades.
            </p>
            <p className="text-lg text-[#1E1E1E] leading-relaxed font-semibold">
              We're Adsalt Studios, reviving the village one small business at a time.
            </p>
            
            <div className="pt-6">
              <Button 
                variant="outline"
                className="border-[#305A72] text-[#305A72] hover:bg-[#305A72] hover:text-white"
                onClick={scrollToProducts}
              >
                See How We Help
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
