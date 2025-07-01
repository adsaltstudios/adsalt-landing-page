import { Sparkles, Users } from 'lucide-react';

const credibilityQuotes = [
  {
    quote: "Adam is exceptional at cutting through ambiguity—senior customer leaders trust him with their most ambitious goals.",
    context: "Enterprise stakeholder, JP Morgan Chase",
  },
  {
    quote: "Adam excels at building trust and delivering results for his customers.",
    context: "Manager feedback, Amazon",
  },
  {
    quote: "He delivers real results that wow the customer.",
    context: "Peer feedback, Amazon",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-white px-4 py-20">
      {/* Section Header (above card) */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-[#305A72] mb-4 leading-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3] tracking-tight animate-hero-fade-in" tabIndex={0}>Helping small businesses work faster, smarter,<br />and cheaper with AI.</h2>
        <p className="text-xl md:text-2xl text-[#7D9BA6] mb-8 font-medium">Rooted in trust, powered by simplicity, and built for real people.</p>
      </div>
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-10 md:p-16 text-center">
        {/* Mission */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#305A72] mb-2">Our Mission</h3>
          <p className="text-lg text-[#1E1E1E] leading-relaxed">We help small business owners work faster, smarter, and cheaper by building AI tools and systems that cut waste and help them grow.</p>
        </div>
        <div className="border-t border-[#E9ECEF] my-8" />
        {/* Vision */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#305A72] mb-2">Our Vision</h3>
          <p className="text-lg text-[#1E1E1E] leading-relaxed"><span className="font-semibold">Revive the village.</span> Help small businesses become the heart of their communities again, using smart tools to build a better way to live and work.</p>
        </div>
        <div className="border-t border-[#E9ECEF] my-8" />
        {/* Values */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#305A72] mb-4">Our Values</h3>
          <ul className="space-y-4">
            <li className="flex items-center justify-center gap-3 text-lg font-semibold text-[#305A72]">
              <Users className="w-6 h-6 text-[#7D9BA6]" aria-hidden="true" />
              People come first
            </li>
            <li className="flex items-center justify-center gap-3 text-lg font-semibold text-[#305A72]">
              <Sparkles className="w-6 h-6 text-[#7D9BA6]" aria-hidden="true" />
              Keep it simple
            </li>
            <li className="flex items-center justify-center gap-3 text-lg font-semibold text-[#305A72]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#7D9BA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path d="M4 12h16M14 6l6 6-6 6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Move with meaning
            </li>
          </ul>
        </div>
        <button
          className="mt-10 bg-[#305A72] hover:bg-[#7D9BA6] text-white font-bold text-lg px-8 py-3 rounded-full shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B6A3]"
          onClick={() => window.location.href = '#contact'}
        >
          Let's Chat
        </button>
      </div>
      <div className="bg-[#F7FAFC] border border-[#E9ECEF] rounded-xl p-6 max-w-xl mx-auto mt-10 text-center">
        <h4 className="text-[#305A72] font-semibold mb-4 text-base">Trusted beyond Main Street.</h4>
        <ul className="space-y-3">
          {credibilityQuotes.map((q, i) => (
            <li key={i}>
              <p className="text-[#7D9BA6] text-sm italic mb-1">"{q.quote}"</p>
              <span className="block text-xs text-[#A4B9C7]">{q.context}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
