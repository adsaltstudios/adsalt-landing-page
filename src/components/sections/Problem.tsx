
const Problem = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#305A72] mb-8">
          You're drowning in busywork
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-[#D7EAFB] rounded-lg">
            <div className="w-16 h-16 bg-[#305A72] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-[#1E1E1E] mb-3">Manual tracking</h3>
            <p className="text-[#1E1E1E]">Hours spent on inventory, sales reports, and customer data entry.</p>
          </div>
          
          <div className="p-6 bg-[#D7EAFB] rounded-lg">
            <div className="w-16 h-16 bg-[#305A72] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-bold text-[#1E1E1E] mb-3">Money leaks</h3>
            <p className="text-[#1E1E1E]">Waste you can't see—overordering, missed opportunities, inefficient processes.</p>
          </div>
          
          <div className="p-6 bg-[#D7EAFB] rounded-lg">
            <div className="w-16 h-16 bg-[#305A72] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">😴</span>
            </div>
            <h3 className="text-xl font-bold text-[#1E1E1E] mb-3">No time to grow</h3>
            <p className="text-[#1E1E1E]">So busy managing today that you can't plan for tomorrow.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-[#305A72] font-semibold">
            Smart tools can handle the boring stuff, so you can focus on what matters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
