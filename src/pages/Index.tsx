
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Products from "@/components/sections/Products";
import SocialProof from "@/components/sections/SocialProof";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#E9ECEF]">
      <Hero />
      <Problem />
      <Products />
      <SocialProof />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
