
import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-6 bg-[#A4B9C7]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#305A72] mb-6">
            Why We're Here
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-[#1E1E1E] leading-relaxed">
              At Adsalt Studios, we're on a mission to revive the village.
            </p>
            <p className="text-lg text-[#1E1E1E] leading-relaxed">
              Not by turning back the clock—but by bringing the best of what we lost into the modern world. We believe small businesses should be more than places we shop—they should be the heart and soul of our communities. They should be places where neighbors meet, where local entrepreneurs thrive, and where careers don't conflict with community.
            </p>
            <p className="text-lg text-[#1E1E1E] leading-relaxed">
              But reviving villages takes more than good intentions. It requires smart, simple tools that help small businesses work faster, smarter, and cheaper.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-[#1E1E1E] leading-relaxed">
              That's why we use AI—not to replace people, but to free them. From manual busywork, hidden money leaks, and endless spreadsheets, to meaningful work, richer relationships, and growth that strengthens the whole community.
            </p>
            <p className="text-lg text-[#1E1E1E] leading-relaxed">
              Our team brings real-world experience from some of the world's leading companies—like Google, Amazon, JPMorgan Chase, and Deloitte—but our passion is working side-by-side with business owners who keep their neighborhoods vibrant.
            </p>
            <p className="text-lg text-[#1E1E1E] leading-relaxed font-semibold">
              Adsalt isn't just about AI. It's about helping communities thrive, one local business at a time.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-[#305A72] text-[#305A72] hover:bg-[#305A72] hover:text-white px-8 py-3 text-lg"
            onClick={() => scrollToSection('products')}
          >
            See How We Help
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
