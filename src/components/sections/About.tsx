import { Sparkles, Users } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-12 px-4 sm:px-6 bg-[#E9ECEF] flex justify-center"
      aria-labelledby="about-heading"
    >
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col items-center text-center">
        {/* Brand Icon */}
        <div className="mb-4">
          <div className="w-16 h-16 rounded-full bg-[#D7EAFB] flex items-center justify-center mb-2">
            <Users className="text-[#305A72]" size={32} />
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-bold text-[#305A72] mb-2"
          >
            Why We're Here
          </h2>
        </div>

        {/* Mission */}
        <p className="text-lg text-[#1E1E1E] mb-4 font-medium">
          We help small business owners work faster, smarter, and cheaper by building AI tools that cut waste and help them grow.
        </p>

        {/* Vision */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="text-[#D9B6A3]" size={20} />
          <span className="text-[#305A72] font-semibold">Revive the village.</span>
        </div>
        <p className="text-base text-[#7D9BA6] mb-6">
          We want small businesses to become the heart of their communities again, using smart tools to build a better way to live and work.
        </p>

        {/* Values */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#305A72] mb-2">Our Values</h3>
          <ul className="space-y-1 text-[#1E1E1E]">
            <li>• <span className="font-medium">Keep it simple</span></li>
            <li>• <span className="font-medium">People come first</span></li>
            <li>• <span className="font-medium">Move with meaning</span></li>
          </ul>
        </div>

        {/* CTA */}
        <a
          href="#products"
          className="inline-block w-full sm:w-auto bg-[#D9B6A3] hover:bg-[#305A72] text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-[#305A72] focus:ring-offset-2"
        >
          See How We Help
        </a>
      </div>
    </section>
  );
}
