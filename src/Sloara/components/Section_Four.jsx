import React, { useState, useRef, useEffect, useCallback, Suspense, lazy } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Search, Target, Rocket, BarChart } from "lucide-react";

// SplineScene (JSX version)
const Spline = lazy(() => import('@splinetool/react-spline'));
function SplineScene({ scene, className }) {
  return (
    <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><span className="loader"></span></div>}>
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}

// Card (JSX version)
function Card({ className, children }) {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>{children}</div>
  );
}

// Spotlight (JSX version)
function Spotlight({ className, size = 200 }) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = 'relative';
        parent.style.overflow = 'hidden';
        setParentElement(parent);
      }
    }
  }, []);

  const handleMouseMove = useCallback((event) => {
    if (!parentElement) return;
    const { left, top } = parentElement.getBoundingClientRect();
    setMouse({ x: event.clientX - left, y: event.clientY - top });
  }, [parentElement]);

  useEffect(() => {
    if (!parentElement) return;
    parentElement.addEventListener('mousemove', handleMouseMove);
    parentElement.addEventListener('mouseenter', () => setIsHovered(true));
    parentElement.addEventListener('mouseleave', () => setIsHovered(false));
    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseenter', () => setIsHovered(true));
      parentElement.removeEventListener('mouseleave', () => setIsHovered(false));
    };
  }, [parentElement, handleMouseMove]);

  return (
    <motion.div
      ref={containerRef}
      className={`pointer-events-none absolute rounded-full blur-xl transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{
        width: size,
        height: size,
        left: mouse.x - size / 2,
        top: mouse.y - size / 2,
        background: 'radial-gradient(circle at center, #06b6d4 0%, #22d3ee 60%, transparent 80%)',
      }}
    />
  );
}

export function Section_Four() {
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Carousel dummy data (AI related)
  const carouselSlides = [
    {
      title: "AI-Powered Lead Generation",
      desc: "Automate your lead qualification and boost conversions with intelligent agents.",
      img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    },
    {
      title: "24/7 AI Customer Support",
      desc: "Resolve customer queries instantly and improve satisfaction with AI chatbots.",
      img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    },
    {
      title: "Smart Appointment Scheduling",
      desc: "Let AI handle your bookings, reminders, and follow-ups for seamless operations.",
      img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    },
    {
      title: "Automated Onboarding",
      desc: "Guide new users with AI-driven onboarding flows and contextual help.",
      img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    },
    {
      title: "Proactive Shipment Tracking",
      desc: "Keep customers informed with real-time AI-powered delivery updates.",
      img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    },
  ];
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
      img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?_gl=1*1kncmse*_ga*MTA1MzE1NDgxNC4xNzU4OTIwMjg1*_ga_8JE65Q40S6*czE3NTg5MjAyODUkbzEkZzEkdDE3NTg5MjAyOTAkajU1JGwwJGgw",
    },
    {
      tag: "Automotive",
      tagColor: "bg-red-500",
      title: "Automotive Garage",
      desc: "AI-powered service agent handles appointment scheduling, inquiries, and follow-ups 24/7.",
      quote: "Reduced phone calls by 60% while increasing appointment bookings by 35%",
      img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?_gl=1*1kncmse*_ga*MTA1MzE1NDgxNC4xNzU4OTIwMjg1*_ga_8JE65Q40S6*czE3NTg5MjAyODUkbzEkZzEkdDE3NTg5MjAyOTAkajU1JGwwJGgw",
    },
    {
      tag: "E-Commerce",
      tagColor: "bg-green-500",
      title: "E-Commerce Store",
      desc: "Customer support system that handles returns, product questions, and escalations automatically.",
      quote: "90% of customer inquiries resolved automatically, 24/7 support coverage",
      img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?_gl=1*1kncmse*_ga*MTA1MzE1NDgxNC4xNzU4OTIwMjg1*_ga_8JE65Q40S6*czE3NTg5MjAyODUkbzEkZzEkdDE3NTg5MjAyOTAkajU1JGwwJGgw",
    },
    {
      tag: "Consulting",
      tagColor: "bg-purple-400",
      title: "Business Consulting Firm",
      desc: "Automated lead nurturing sequences and onboarding workflows streamline client acquisition.",
      quote: "3x increase in qualified leads and 50% faster client onboarding process",
      img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?_gl=1*1kncmse*_ga*MTA1MzE1NDgxNC4xNzU4OTIwMjg1*_ga_8JE65Q40S6*czE3NTg5MjAyODUkbzEkZzEkdDE3NTg5MjAyOTAkajU1JGwwJGgw",
    },
    {
      tag: "SaaS",
      tagColor: "bg-indigo-500",
      title: "SaaS Platform",
      desc: "Smart onboarding assistant guides new users, provides contextual help, and reduces support issues.",
      quote: "85% reduction in support tickets and 40% improvement in user activation",
      img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?_gl=1*1kncmse*_ga*MTA1MzE1NDgxNC4xNzU4OTIwMjg1*_ga_8JE65Q40S6*czE3NTg5MjAyODUkbzEkZzEkdDE3NTg5MjAyOTAkajU1JGwwJGgw",
    },
    {
      tag: "Logistics",
      tagColor: "bg-orange-500",
      title: "Logistics Company",
      desc: "Proactive shipment tracking updates customers on status and delivery scheduling.",
      quote: "Eliminated 70% of 'Where is my package?' calls and improved customer satisfaction by 45%",
      img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?_gl=1*1kncmse*_ga*MTA1MzE1NDgxNC4xNzU4OTIwMjg1*_ga_8JE65Q40S6*czE3NTg5MjAyODUkbzEkZzEkdDE3NTg5MjAyOTAkajU1JGwwJGgw",
    },
  ];

  return (
  <section className="relative bg-[#181818] py-6 sm:py-10 md:py-16 px-2 sm:px-4 md:px-8 lg:px-20 overflow-hidden">
    {/* Glowing blue circles background */}
    <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full opacity-30 blur-2xl z-0"></div>
    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-500 rounded-full opacity-40 blur-xl z-0"></div>
    <div className="absolute bottom-10 right-20 w-24 h-24 bg-cyan-300 rounded-full opacity-20 blur-2xl z-0"></div>
    <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-cyan-400 rounded-full opacity-30 blur-xl z-0"></div>
    <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-cyan-500 rounded-full opacity-40 blur-lg z-0"></div>
      {/* Interactive 3D Robot Section */}
  <Card className="w-full min-h-[340px] sm:min-h-[400px] md:min-h-[500px] bg-black relative overflow-hidden mb-8 sm:mb-10 flex flex-col justify-center items-center">
        <Spotlight className="-top-32 left-1/2 sm:left-1/2 mq   qqqqqwwwsssadddaaaasswwd:left-60 md:-top-20" />
        <div className="flex flex-col md:flex-row h-full w-full">
          {/* Left content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-4 sm:p-8 md:p-10 relative z-10">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center md:text-left">Interactive 3D</h1>
            <p className="mt-2 sm:mt-4 text-neutral-300 max-w-xs sm:max-w-md md:max-w-lg text-center md:text-left text-base sm:text-lg">Bring your UI to life with beautiful 3D scenes. Create immersive experiences that capture attention and enhance your design.</p>
          </div>
          {/* Right content */}
          <div className="w-full md:w-1/2 flex justify-center items-center relative min-h-[220px] sm:min-h-[300px] md:min-h-[400px]">
            <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px]" />
          </div>
        </div>
      </Card>
  {/* Removed accent shapes for pure black background */}
      {/* 4-Step Method */}
      <div className="text-center mb-6 sm:mb-10 md:mb-16">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-700">Our 4-Step Method</h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 sm:mt-2">From understanding to implementation - your path to intelligent automation</p>
      </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-20">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div
              className={`w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full mx-auto mb-2 sm:mb-4 ${step.color}`}
            >
              {step.icon}
            </div>
            <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-1 sm:mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Real Case Studies */}
      <div className="text-center mb-6 sm:mb-8 md:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-700">Real Case Studies</h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 sm:mt-2">Proven Results Across Industries</p>
      </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {cases.map((item, index) => (
          <div
            key={index}
            className="bg-black rounded-2xl shadow-lg overflow-hidden border-2 border-blue-500 transition-all duration-500 relative hover:scale-105 hover:shadow-blue-500/40 hover:shadow-2xl hover:border-cyan-400 hover:-translate-y-2 flex flex-col"
          >
            <div className="relative group">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-24 sm:h-32 md:h-40 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:blur-[1px]"
              />
            </div>
            <div
              className="p-2 sm:p-4 md:p-6 cursor-pointer flex-1 flex flex-col justify-center"
              onClick={() => { setSelectedIndex(index); setModalOpen(true); }}
            >
              <span
                className={`text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full ${item.tagColor} font-semibold mb-1 sm:mb-2 inline-block`}
              >
                {item.tag}
              </span>
              <h3 className="text-xs sm:text-base md:text-lg font-bold mt-2 sm:mt-4 mb-1 sm:mb-2 text-white">{item.title}</h3>
              <p className="text-blue-400 font-medium text-xs sm:text-sm md:text-base mb-2 sm:mb-3">{item.quote}</p>
              <p className="text-gray-200 text-xs sm:text-sm md:text-base">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Separator */}
      <div className="w-full flex justify-center my-10">
        <div className="h-1 w-2/3 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full opacity-60"></div>
      </div>

      {/* Modal Carousel */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-all duration-300 px-2 sm:px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-2 sm:p-6 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl w-full relative animate-fadeInUp">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-blue-700 text-xl sm:text-2xl font-bold focus:outline-none z-10"
              aria-label="Close"
            >
              &times;
            </button>
            <Carousel
              selectedItem={selectedIndex}
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              useKeyboardArrows
              autoPlay
              interval={4000}
              transitionTime={700}
              className="rounded-xl"
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button type="button" onClick={onClickHandler} title={label} className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-blue-100 text-blue-700 rounded-full p-2 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button type="button" onClick={onClickHandler} title={label} className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-blue-100 text-blue-700 rounded-full p-2 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )
              }
            >
              {carouselSlides.map((slide, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center px-2 py-2 sm:px-8 sm:py-8">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="rounded-xl shadow-lg object-cover h-20 sm:h-32 md:h-48 w-full mb-2 sm:mb-4 transition-all duration-500"
                  />
                  <h3 className="text-xs sm:text-base md:text-lg font-bold text-blue-700 mb-1 sm:mb-2 animate-fadeInUp">{slide.title}</h3>
                  <p className="text-gray-700 text-xs sm:text-base md:text-lg text-center mb-1 sm:mb-2 animate-fadeInUp delay-100">{slide.desc}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
      {/* Animations (Tailwind custom classes) */}
      <style>{`
        .animate-fadeInUp {
          animation: fadeInUp 0.7s cubic-bezier(.39,.575,.565,1) both;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s cubic-bezier(.39,.575,.565,1) both;
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>

    </section>
  );
};

