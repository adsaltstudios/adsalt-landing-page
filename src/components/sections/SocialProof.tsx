import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const SocialProof = () => {
  const testimonials = [
    {
      quote: "Excellent content and presentation. I left knowing exactly how to put Gen AI to work.",
      author: "Maria, Regional Ops Lead",
      business: "Gen-AI Business-Writing Workshop",
    },
    {
      quote: "This was a great session—I'll definitely use Gen-AI tools more and more effectively after today.",
      author: "James, Small Business Owner",
      business: "Gen-AI Business-Writing Workshop",
    },
    {
      quote: "A task that used to take me two days now takes about two hours with Adsalt's AI workflow.",
      author: "Samantha, Graduate Student",
      business: "1-on-1 AI Workflow Session",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#E9ECEF]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#305A72] mb-6 leading-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3] tracking-tight animate-hero-fade-in" tabIndex={0}>
            What local businesses are saying
          </h2>
          <p className="text-xl md:text-2xl text-[#7D9BA6] mb-8 font-medium" tabIndex={0}>
            These aren't tech companies. They're neighbors, just like you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#D7EAFB] rounded-3xl shadow-lg p-6 text-center">
              <p className="text-[#7D9BA6] italic text-lg mb-4">"{testimonial.quote}"</p>
              <div className="mt-2">
                <span className="block text-2xl font-semibold text-[#305A72] mb-2">{testimonial.author}</span>
                <span className="block text-sm text-[#A4B9C7]">{testimonial.business}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
