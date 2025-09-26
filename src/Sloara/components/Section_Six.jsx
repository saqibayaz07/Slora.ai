import React from "react";

export function Section_Six () {
  return (
    <section className="relative bg-gradient-to-b from-[#f9f9ff] to-[#f0f3ff] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Contact us
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Form */}
          <form className="md:col-span-2 bg-white rounded-xl shadow-md p-6">
            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Company */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Company</label>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10l9-6 9 6-9 6-9-6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10v11h18V10M12 22V12"
                />
              </svg>
              Send Message
            </button>
          </form>

          {/* Right Card */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Direct Contact
            </h3>
            <p className="text-gray-600 mb-6">
              Book an appointment for a personal consultation and discover how
              AI can transform your business.
            </p>
            <a
              href="#"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium text-center py-3 rounded-lg transition"
            >
              Schedule Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
