import React from "react";
import { Search, Target, Rocket, BarChart } from "lucide-react";

export function  Section_Four () {
  const steps = [
    {
      title: "Understand your business",
      desc: "We analyze your business processes and identify automation opportunities",
      icon: <Search className="w-7 h-7 text-white" />,
      color: "bg-blue-500",
    },
    {
      title: "Identify which pillar needs automation",
      desc: "Determine which pillar requires automation and promises the greatest ROI",
      icon: <Target className="w-7 h-7 text-white" />,
      color: "bg-pink-500",
    },
    {
      title: "Deploy the right AI agent(s)",
      desc: "Development and deployment of tailored AI solutions for your specific needs",
      icon: <Rocket className="w-7 h-7 text-white" />,
      color: "bg-purple-500",
    },
    {
      title: "Continuous optimization & support",
      desc: "Ongoing monitoring, adjustments, and support for maximum efficiency",
      icon: <BarChart className="w-7 h-7 text-white" />,
      color: "bg-indigo-500",
    },
  ];

  const cases = [
    {
      tag: "Real Estate",
      tagColor: "bg-blue-600",
      title: "Real Estate Agency",
      desc: "Automated lead qualification system that pre-screens potential buyers and books property viewings automatically.",
      quote: "+40% more booked property viewings with AI email automation",
      img: "https://source.unsplash.com/400x250/?house",
    },
    {
      tag: "Automotive",
      tagColor: "bg-red-500",
      title: "Automotive Garage",
      desc: "AI-powered service agent handles appointment scheduling, inquiries, and follow-ups 24/7.",
      quote: "Reduced phone calls by 60% while increasing appointment bookings by 35%",
      img: "https://source.unsplash.com/400x250/?car,garage",
    },
    {
      tag: "E-Commerce",
      tagColor: "bg-green-500",
      title: "E-Commerce Store",
      desc: "Customer support system that handles returns, product questions, and escalations automatically.",
      quote: "90% of customer inquiries resolved automatically, 24/7 support coverage",
      img: "https://source.unsplash.com/400x250/?shopping,online",
    },
    {
      tag: "Consulting",
      tagColor: "bg-purple-400",
      title: "Business Consulting Firm",
      desc: "Automated lead nurturing sequences and onboarding workflows streamline client acquisition.",
      quote: "3x increase in qualified leads and 50% faster client onboarding process",
      img: "https://source.unsplash.com/400x250/?consulting,business",
    },
    {
      tag: "SaaS",
      tagColor: "bg-indigo-500",
      title: "SaaS Platform",
      desc: "Smart onboarding assistant guides new users, provides contextual help, and reduces support issues.",
      quote: "85% reduction in support tickets and 40% improvement in user activation",
      img: "https://source.unsplash.com/400x250/?code,software",
    },
    {
      tag: "Logistics",
      tagColor: "bg-orange-500",
      title: "Logistics Company",
      desc: "Proactive shipment tracking updates customers on status and delivery scheduling.",
      quote: "Eliminated 70% of 'Where is my package?' calls and improved customer satisfaction by 45%",
      img: "https://source.unsplash.com/400x250/?logistics,shipping",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-16 px-6 md:px-12 lg:px-20">
      {/* 4-Step Method */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          Our 4-Step Method
        </h2>
        <p className="text-gray-600 mt-2">
          From understanding to implementation - your path to intelligent automation
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4 ${step.color}`}
            >
              {step.icon}
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Real Case Studies */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          Real Case Studies
        </h2>
        <p className="text-gray-600 mt-2">Proven Results Across Industries</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <span
                className={`text-white text-xs px-3 py-1 rounded-full ${item.tagColor}`}
              >
                {item.tag}
              </span>
              <h3 className="text-lg font-bold mt-4 mb-2">{item.title}</h3>
              <p className="text-blue-700 font-medium text-sm mb-3">
                “{item.quote}”
              </p>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

