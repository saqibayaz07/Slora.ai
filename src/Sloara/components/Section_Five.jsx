import React from "react";

  export  function Section_Five () {
    return (
      <section className="relative bg-[#181818] py-10 sm:py-16 px-4 sm:px-6 text-center text-white font-ubuntu">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10 text-cyan-400">Experience the Future</h2>

        {/* Video */}
        <div className="max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl italic mt-4 sm:mt-6 text-cyan-400">
          <span role="img" aria-label="lightning">1</span>
          Imagine having autonomous workflows that power every part of your business
        </p>

        {/* Solutions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mt-6 sm:mt-10">
          {/* Marketing */}
          <div className="bg-[#222] hover:bg-[#333] transition rounded-xl p-4 sm:p-6 flex flex-col items-center border border-cyan-400">
            <div className="text-2xl sm:text-4xl text-cyan-400">8</div>
            <h3 className="mt-2 sm:mt-4 font-semibold text-base sm:text-lg text-white">Marketing Solutions</h3>
            <p className="text-xs sm:text-sm text-gray-300">Digital Employee</p>
          </div>

          {/* Sales */}
          <div className="bg-[#222] hover:bg-[#333] transition rounded-xl p-4 sm:p-6 flex flex-col items-center border border-cyan-400">
            <div className="text-2xl sm:text-4xl text-cyan-400">65</div>
            <h3 className="mt-2 sm:mt-4 font-semibold text-base sm:text-lg text-white">Sales Solutions</h3>
            <p className="text-xs sm:text-sm text-gray-300">Digital Employee</p>
          </div>

          {/* Support */}
          <div className="bg-[#222] hover:bg-[#333] transition rounded-xl p-4 sm:p-6 flex flex-col items-center border border-cyan-400">
            <div className="text-2xl sm:text-4xl">9a</div>
            <h3 className="mt-2 sm:mt-4 font-semibold text-base sm:text-lg">Support Solutions</h3>
            <p className="text-xs sm:text-sm text-gray-300">Digital Employee</p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-6 sm:mt-10">
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg hover:opacity-90 transition"
          >
            Book a Demo
          </a>
        </div>
      </section>
    );
};

