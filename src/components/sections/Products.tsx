import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/adam-adsalt/30min', '_blank');
  };

  const products = [
    {
      title: "AnswerLift",
      description: "Make sure your brand is the ChatGPT answer users see first",
      features: ["Turns every page into chat-friendly Q-and-A blocks", "Auto-adds fresh facts & brand mentions each month", "Ships a ready-made LLMs.txt + entity map for full AEO compliance"],
      icon: "🚀",
      price: "Starting at $899/month"
    },
    {
      title: "Customer Insight Engine", 
      description: "Know your customers better than they know themselves",
      features: ["Spots buying patterns", "Suggests upsells", "Predicts churn risk"],
      icon: "👥",
      price: "Starting at $149/month"
    },
    {
      title: "Profit Leak Detector",
      description: "Find money hiding in your business processes",
      features: ["Identifies cost drains", "Optimizes pricing", "Streamlines workflows"],
      icon: "🔍",
      price: "Starting at $199/month"
    },
    {
      title: "Growth Autopilot",
      description: "Marketing that works while you sleep",
      features: ["Automates follow-ups", "Personalizes outreach", "Tracks what works"],
      icon: "📈",
      price: "Starting at $249/month"
    }
  ];

  const trainingPrograms = [
    {
      title: "Team AI Workshop (Virtual)",
      description: "Get your whole team using AI tools that actually help",
      features: [
        "Live online training for your team",
        "Practice with tools you'll actually use",
        "Simple guides to reference later",
        "30 days of follow-up support"
      ],
      icon: "👥",
      price: "Starting at $1,499",
      ctaText: "Schedule a workshop"
    },
    {
      title: "Custom AI Training (On-site)",
      description: "Hands-on training at your location for maximum impact",
      features: [
        "In-person training at your office",
        "Work on your real business problems",
        "Custom implementation for your workflow",
        "3 months of ongoing support"
      ],
      icon: "🎯",
      price: "Starting at $2,999",
      ctaText: "Book on-site training"
    }
  ];

  return (
    <section id="products" className="py-20 px-6 bg-[#E9ECEF]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#305A72] mb-6">
            AI tools built for real businesses
          </h2>
          <p className="text-xl text-[#1E1E1E] max-w-2xl mx-auto">
            No complicated setup. No tech degree required. Just simple tools and training that save you time and make you money.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {products.map((product, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#D9B6A3] rounded-lg flex items-center justify-center text-2xl">
                    {product.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl text-[#305A72]">{product.title}</CardTitle>
                    <p className="text-sm text-[#7D9BA6]">{product.price}</p>
                  </div>
                </div>
                <CardDescription className="text-[#1E1E1E] text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#1E1E1E]">
                      <span className="w-2 h-2 bg-[#D9B6A3] rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-[#D9B6A3] hover:bg-[#305A72] text-white"
                  onClick={openCalendly}
                >
                  Learn more
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Training Programs Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#305A72] mb-6">
            Learn how to use AI in your business
          </h2>
          <p className="text-xl text-[#1E1E1E] max-w-2xl mx-auto">
            Don't just get the tools—learn how to use them. Our training gets your team confident with AI, fast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {trainingPrograms.map((program, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#D9B6A3] rounded-lg flex items-center justify-center text-2xl">
                    {program.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg text-[#305A72]">{program.title}</CardTitle>
                    <p className="text-sm text-[#7D9BA6]">{program.price}</p>
                  </div>
                </div>
                <CardDescription className="text-[#1E1E1E] text-base">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#1E1E1E]">
                      <span className="w-2 h-2 bg-[#D9B6A3] rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-[#D9B6A3] hover:bg-[#305A72] text-white"
                  onClick={openCalendly}
                >
                  {program.ctaText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#305A72] mb-4">
            Not sure what your team needs?
          </h3>
          <Button 
            className="bg-[#305A72] hover:bg-[#D9B6A3] text-white px-8 py-3 text-lg"
            onClick={openCalendly}
          >
            Schedule a free consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
