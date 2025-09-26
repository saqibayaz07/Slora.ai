import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f1623] text-gray-400 py-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-sm space-y-3">
        {/* Links */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="hover:text-white transition"
          >
            Datenschutz
          </a>
          <a
            href="#"
            className="hover:text-white transition"
          >
            Impressum
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          © 2025 Metawerk AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
