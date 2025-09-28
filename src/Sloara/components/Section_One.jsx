import '../Styles/HeroAnimations.css';
import AnimatedRobot from './AnimatedRobot';

export default function Section_One() {
  return (
    <section className="relative z-0 w-full top-0 min-h-screen bg-[#181818] text-center text-white pt-8 md:pt-12 overflow-hidden flex items-center justify-center -mt-14">
      {/* Background Shapes - responsive positioning and sizing */}
      <div className="absolute inset-0 pointer-events-none">
  {/* Left Side Animations */}
  <div className="border-2 border-cyan-400 rounded-full absolute top-8 left-2 w-16 h-16 sm:top-16 sm:left-1/4 sm:w-32 sm:h-32 opacity-60 animate-move1"></div>
  <div className="border-2 border-cyan-400 rounded-full absolute bottom-8 left-1/6 w-20 h-20 md:bottom-16 md:left-1/3 md:w-40 md:h-40 opacity-30 animate-move3"></div>
  {/* Left Side Bubbles */}
  <div className="bubble-zoom bg-cyan-200 rounded-full absolute top-24 left-6 w-6 h-6 opacity-80"></div>
  <div className="bubble-burst bg-blue-300 rounded-full absolute bottom-32 left-12 w-4 h-4 opacity-70"></div>
  <div className="bubble-glow bg-cyan-300 rounded-full absolute top-36 left-20 w-7 h-7 opacity-80"></div>
  <div className="bubble-wave bg-blue-400 rounded-full absolute bottom-40 left-24 w-5 h-5 opacity-70"></div>
  <div className="bubble-spin bg-cyan-500 rounded-full absolute top-48 left-32 w-4 h-4 opacity-80"></div>
  <div className="bubble-fade bg-blue-500 rounded-full absolute bottom-48 left-36 w-6 h-6 opacity-60"></div>
  {/* Right Side Animations */}
  <div className="border-2 border-cyan-400 rounded-full absolute top-24 right-2 w-16 h-16 sm:top-32 sm:right-1/4 sm:w-32 sm:h-32 opacity-40 animate-move2"></div>
  <div className="border-2 border-cyan-300 rounded-full absolute bottom-12 right-1/6 w-14 h-14 md:bottom-24 md:right-1/3 md:w-28 md:h-28 opacity-20 animate-move5"></div>
  {/* Right Side Bubbles */}
  <div className="bubble-zoom bg-cyan-100 rounded-full absolute top-40 right-8 w-5 h-5 opacity-80"></div>
  <div className="bubble-burst bg-blue-200 rounded-full absolute bottom-24 right-16 w-3 h-3 opacity-70"></div>
  <div className="bubble-glow bg-cyan-400 rounded-full absolute top-56 right-20 w-7 h-7 opacity-80"></div>
  <div className="bubble-wave bg-blue-500 rounded-full absolute bottom-56 right-24 w-5 h-5 opacity-70"></div>
  <div className="bubble-spin bg-cyan-600 rounded-full absolute top-64 right-32 w-4 h-4 opacity-80"></div>
  <div className="bubble-fade bg-blue-600 rounded-full absolute bottom-64 right-36 w-6 h-6 opacity-60"></div>
      </div>



      {/* Robot Behind Hero Text */}
  <div className="absolute left-0 right-0 flex justify-center items-center" style={{ top: '28%', zIndex: 2 }}>
    <div style={{ transform: 'scale(0.7)' }}>
      <AnimatedRobot />
    </div>
  </div>

      {/* Content - responsive padding and font sizes */}
      <div className="relative z-10 w-full max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-2 text-white">
          Hybrid AI workflows to{' '}
          <span className="text-cyan-400">scale</span>
          <br />
          your business smarter and
        </h1>
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-2 text-cyan-400">
          faster
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300">
          Turn your marketing, sales, and client support into self-running systems powered by AI agents.
        </p>
        <div className="mt-8 sm:mt-10">
          <button className="bg-cyan-400 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:scale-105 transition">
            See How It Works ↓
          </button>
        </div>
      </div>
    </section>
  );
}