
import { Card, CardContent } from "@/components/ui/card";

const SocialProof = () => {
  const testimonials = [
    {
      quote: "We cut our inventory costs by 30% in the first three months. The AI caught patterns we never saw.",
      author: "Maria Santos",
      business: "Santos Family Restaurant",
      location: "Austin, TX"
    },
    {
      quote: "I get two hours back every day. No more spreadsheets, no more guessing what customers want.",
      author: "Jake Williams", 
      business: "Mountain Bike Repairs",
      location: "Denver, CO"
    },
    {
      quote: "The profit leak detector found $15,000 we were losing annually. Paid for itself in two months.",
      author: "Sarah Chen",
      business: "Chen's Corner Pharmacy", 
      location: "Portland, OR"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#305A72] mb-6">
            What local businesses are saying
          </h2>
          <p className="text-xl text-[#1E1E1E]">
            These aren't tech companies. They're neighbors, just like you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#D7EAFB] border-none">
              <CardContent className="p-6">
                <p className="text-[#1E1E1E] mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-[#A4B9C7] pt-4">
                  <p className="font-semibold text-[#305A72]">{testimonial.author}</p>
                  <p className="text-sm text-[#7D9BA6]">{testimonial.business}</p>
                  <p className="text-sm text-[#7D9BA6]">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
