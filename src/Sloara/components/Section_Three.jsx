// import React from "react";
// import { Brain, Target, Layers } from "lucide-react"; 

// export function Section_Three() {
//     const items = [
//         {
//             title: "Intelligence",
//             description:
//                 "AI agents that understand your business and act accordingly",
//             icon: <Brain size={36} />,
//         },
//         {
//             title: "Business-Focused",
//             description:
//                 "Solutions tailored to your specific business objectives",
//             icon: <Target size={36} />,
//         },
//         {
//             title: "Pillar-Focused",
//             description:
//                 "Targeted automation of the three critical business areas",
//             icon: <Layers size={36} />,
//         },
//     ];

//     return (
//         <section className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white py-16 px-6 md:px-12 lg:px-20">
//             {/* Heading */}
//             <div className="text-center max-w-3xl mx-auto mb-12">
//                 <h2 className="text-3xl md:text-4xl font-bold">
//                     Most companies offer tools.{" "}
//                     <span className="text-blue-300">We offer solutions.</span>
//                 </h2>
//                 <p className="text-gray-300 mt-4 text-base md:text-lg">
//                     Our focus is on business understanding, not just technology
//                 </p>
//             </div>

//             {/* 3 Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
//                 {items.map((item, index) => (
//                     <div key={index} className="flex flex-col items-center">
//                         {/* Icon Circle */}
//                         <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#1e293b] mb-6 text-blue-400">
//                             {item.icon}
//                         </div>
//                         {/* Title */}
//                         <h3 className="text-lg font-bold mb-2">{item.title}</h3>
//                         {/* Description */}
//                         <p className="text-gray-300 text-sm max-w-xs">
//                             {item.description}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };





import React from "react";
import { Brain, Target, Layers } from "lucide-react"; // lucide-react se icons

export function Section_Three() {

  const cards = [
    {
      title: "Intelligence",
      description:
        "AI agents that understand your business and act accordingly",
      icon: <Brain className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Business-Focused",
      description:
        "Solutions tailored to your specific business objectives",
      icon: <Target className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Pillar-Focused",
      description:
        "Targeted automation of the three critical business areas",
      icon: <Layers className="w-8 h-8 text-blue-400" />,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#0a1a33] to-[#0f2a66] py-10 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 text-white">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Most companies offer tools.{" "}
          <span className="text-blue-300">We offer solutions.</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-300 mt-2 sm:mt-4">
          Our focus is on business understanding, not just technology
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 text-center">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Icon inside circle */}
            <div className="w-12 h-12 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-[#1a2f55] mb-4 sm:mb-6">
              {card.icon}
            </div>
            <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">{card.title}</h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-xs">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

