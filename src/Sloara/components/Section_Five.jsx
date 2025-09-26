import React from "react";

  export  function Section_Five () {
    return (
    <section className="relative bg-gradient-to-b from-[#0d0c2c] to-[#1a1b4b] py-16 px-6 text-center text-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Experience the Future</h2>

      {/* Video */}
      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4" 
          controls
          className="w-full h-auto rounded-xl"
        />
      </div>

      {/* Tagline */}
      <p className="text-lg md:text-xl italic mt-6">
        <span role="img" aria-label="lightning">⚡</span>
        Imagine having autonomous workflows that power every part of your business
      </p>

      {/* Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
        {/* Marketing */}
        <div className="bg-white/10 hover:bg-white/20 transition rounded-xl p-6 flex flex-col items-center">
          <div className="text-4xl">📈</div>
          <h3 className="mt-4 font-semibold text-lg">Marketing Solutions</h3>
          <p className="text-sm text-gray-300">Digital Employee</p>
        </div>

        {/* Sales */}
        <div className="bg-white/10 hover:bg-white/20 transition rounded-xl p-6 flex flex-col items-center">
          <div className="text-4xl">👥</div>
          <h3 className="mt-4 font-semibold text-lg">Sales Solutions</h3>
          <p className="text-sm text-gray-300">Digital Employee</p>
        </div>

        {/* Support */}
        <div className="bg-white/10 hover:bg-white/20 transition rounded-xl p-6 flex flex-col items-center">
          <div className="text-4xl">💚</div>
          <h3 className="mt-4 font-semibold text-lg">Support Solutions</h3>
          <p className="text-sm text-gray-300">Digital Employee</p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-10">
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition"
        >
          Book a Demo
        </a>
      </div>
    </section>
  );
};

