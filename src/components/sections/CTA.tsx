
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#305A72] to-[#7D9BA6]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to work smarter?
        </h2>
        <p className="text-xl text-[#D7EAFB] mb-8 max-w-2xl mx-auto">
          Book a free 30-minute consultation. We'll show you exactly how AI can save you time and money—no sales pitch, just real solutions.
        </p>

        <div className="bg-white p-8 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-[#305A72] mb-4">
            Get your free business assessment
          </h3>
          <p className="text-[#1E1E1E] mb-6">
            Tell us about your business, and we'll show you which AI tools can help the most.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#D7EAFB] border-[#A4B9C7] focus:border-[#D9B6A3] text-lg py-3"
              required
            />
            <Button 
              type="submit"
              className="w-full bg-[#D9B6A3] hover:bg-[#305A72] text-white text-lg py-3"
            >
              Schedule my free consultation
            </Button>
          </form>
          
          <p className="text-sm text-[#7D9BA6] mt-4">
            No spam, ever. Just helpful insights about growing your business.
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#D7EAFB] text-lg">
            Questions? Call us at <span className="font-semibold">(555) 123-4567</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
