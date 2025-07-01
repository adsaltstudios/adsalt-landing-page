import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address to continue.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate a brief delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Email submitted:", email);
      
      toast({
        title: "Success!",
        description: "Your email has been recorded. Opening calendar to schedule your free assessment...",
      });

      // Clear the form
      setEmail("");
      
      // Small delay before opening Calendly for better UX
      setTimeout(() => {
        window.open('https://calendly.com/adam-adsalt/30min', '_blank');
      }, 1500);

    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const openCalendly = () => {
    window.open('https://calendly.com/adam-adsalt/30min', '_blank');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#305A72] to-[#7D9BA6]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]" tabIndex={0}>
          Ready to work smarter?
        </h2>
        <p className="text-lg text-[#D7EAFB] mb-8 max-w-2xl mx-auto leading-relaxed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]" tabIndex={0}>
          30-minute chat. We'll show you exactly how AI can help your business. No sales pitch.
        </p>

        <div className="bg-white p-8 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-[#305A72] mb-4 leading-tight">Get your free business assessment</h3>
          <p className="text-[#1E1E1E] mb-6 leading-relaxed">Tell us about your business, and we'll show you which AI tools can help the most.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#D7EAFB] border-[#A4B9C7] focus:border-[#D9B6A3] text-lg py-3 px-4 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]"
              required
              disabled={isLoading}
              aria-label="Your email address"
            />
            <Button 
              type="submit"
              className="w-full bg-[#305A72] hover:bg-[#7D9BA6] text-white font-bold text-lg px-8 py-3 rounded-full shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Let's talk"}
            </Button>
          </form>
          
          <p className="text-sm text-[#7D9BA6] mt-4">
            No spam, ever. Just helpful insights about growing your business.
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#D7EAFB] text-lg">
            Questions? Call us at <span className="font-semibold">(845) 323-5284</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
