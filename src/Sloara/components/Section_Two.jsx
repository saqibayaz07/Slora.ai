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
    <section className="bg-purple-50 py-16 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          The Core Drivers of Business Growth
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg">
          Turning Your Business Engines — Marketing, Sales, and Client Relations — 
          into Self-Running Systems.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 border-t-4 transition-transform hover:-translate-y-2 duration-300"
            style={{
              borderImage: `linear-gradient(to right, ${card.color
                .replace("from-", "")
                .replace("to-", "")}) 1`,
            }}
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 flex items-center justify-center text-2xl rounded-xl bg-gradient-to-r ${card.color} text-white mb-4`}
            >
              {card.icon}
            </div>
            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {card.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

