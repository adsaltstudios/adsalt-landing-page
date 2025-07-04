import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Products from "@/components/sections/Products";
import About from "@/components/sections/About";
import SocialProof from "@/components/sections/SocialProof";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  const { isHeaderVisible, scrollProgress } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Header isVisible={isHeaderVisible} />
      <Hero scrollProgress={scrollProgress} />
      <div id="problem">
        <Problem />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="proof">
        <SocialProof />
      </div>
      <div id="cta">
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
