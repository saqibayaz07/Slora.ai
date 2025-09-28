// import AnimatedRobot from './AnimatedRobot';
// import '../Styles/HeroAnimations.css';
// import './AnimatedRobot.css';

export  function Section_One() {
  return (
    <section className="relative z-0 w-full min-h-screen bg-gradient-to-br from-[#181818] via-[#111] to-[#181818] text-center text-white pt-8 md:pt-12 overflow-hidden flex items-center justify-center">
      {/* Background Shapes - responsive positioning and sizing */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="border-2 border-cyan-400 rounded-full absolute top-8 left-2 w-16 h-16 sm:top-16 sm:left-1/4 sm:w-32 sm:h-32 opacity-60 animate-move1"></div>
        <div className="border-2 border-cyan-400 rounded-full absolute top-24 right-2 w-16 h-16 sm:top-32 sm:right-1/4 sm:w-32 sm:h-32 opacity-40 animate-move2"></div>
        <div className="border-2 border-cyan-400 rounded-full absolute bottom-8 left-1/6 w-20 h-20 md:bottom-16 md:left-1/3 md:w-40 md:h-40 opacity-30 animate-move3"></div>
        <div className="border-2 border-blue-400 rounded-full absolute top-1/2 left-1/2 w-12 h-12 md:w-24 md:h-24 opacity-30 animate-move4"></div>
        <div className="border-2 border-cyan-300 rounded-full absolute bottom-12 right-1/6 w-14 h-14 md:bottom-24 md:right-1/3 md:w-28 md:h-28 opacity-20 animate-move5"></div>
        <div className="border-2 border-blue-300 rounded-full absolute top-4 right-1/2 w-8 h-8 md:top-10 md:right-1/2 md:w-16 md:h-16 opacity-30 animate-rotate"></div>
        <div className="border-2 border-cyan-200 rounded-full absolute bottom-4 left-1/4 w-10 h-10 md:bottom-10 md:left-1/4 md:w-20 md:h-20 opacity-40 animate-pulse"></div>
        <div className="border-2 border-blue-500 rounded-full absolute top-1/4 left-1/5 w-12 h-12 md:top-1/3 md:left-1/5 md:w-24 md:h-24 opacity-20 animate-scale"></div>
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
            See How It Works 3
          </button>
        </div>
      </div>
    </section>
  );
}
