
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      title: "Smart Inventory Assistant",
      description: "Never run out of bestsellers or overstock slow movers again",
      features: ["Predicts what you'll need", "Automates reorder alerts", "Tracks waste patterns"],
      icon: "📦",
      price: "Starting at $99/month"
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
      icon: "🚀",
      price: "Starting at $249/month"
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
            No complicated setup. No tech degree required. Just simple tools that save you time and make you money.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
                <Button className="w-full bg-[#D9B6A3] hover:bg-[#305A72] text-white">
                  Learn more
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#7D9BA6] mb-6">
            Not sure which tool fits your business? Let's talk.
          </p>
          <Button className="bg-[#305A72] hover:bg-[#D9B6A3] text-white px-8 py-3 text-lg">
            Schedule a free consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
