import React from "react";

export function Section_Two () {
  const cards = [
    {
      title: "marketing",
      description:
        "4Ps & Growth focus with campaign optimization. Intelligent automation for lead generation and brand building.",
      icon: "📈",
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Sales Operations",
      description:
        "Digital sales assistants that never sleep. Automated customer acquisition and sales processes.",
      icon: "👥",
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Client Relations",
      description:
        "24/7 automated customer happiness. Intelligent support and proactive customer care.",
      icon: "💚",
      color: "from-green-500 to-teal-400",
    },
  ];

  return (
    <section className="bg-[#181818] py-10 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 font-ubuntu">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400">
          The Core Drivers of Business Growth
        </h2>
        <p className="text-gray-300 mt-2 sm:mt-4 text-sm sm:text-base md:text-lg">
          Turning Your Business Engines — Marketing, Sales, and Client Relations — 
          into Self-Running Systems.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl px-6 sm:px-8 md:px-10 py-6 sm:py-8 flex flex-col items-start min-w-[220px] sm:min-w-[320px] max-w-[400px] mx-auto bg-black text-white border-2 border-blue-500 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-blue-500/40 hover:shadow-2xl hover:border-cyan-400 hover:-translate-y-2"
            style={{ minHeight: '200px' }}
          >
            <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg animate-pulse`}>{card.icon}</div>
            <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-2 text-white">{card.title}</h3>
            <p className="text-white text-xs sm:text-base">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

