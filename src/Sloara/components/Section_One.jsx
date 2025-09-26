export default function Section_One() {
  return (
    <section className="relative top-0 z-0 bg-gradient-to-b from-[#0f1c3f] to-[#2a1e74] text-center text-white py-32 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="w-72 h-72 bg-blue-600 opacity-20 rounded-full absolute top-10 left-10 blur-3xl"></div>
        <div className="w-96 h-96 bg-purple-600 opacity-20 rounded-full absolute bottom-10 right-20 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hybrid AI workflows to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            scale
          </span>{" "}
          your business smarter and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            faster
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Turn your marketing, sales, and client support into self-running
          systems powered by AI agents
        </p>

        <div className="mt-10">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-lg hover:scale-105 transition">
            See How It Works ↓
          </button>
        </div>
      </div>
    </section>
  );
}
