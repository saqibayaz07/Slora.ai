export default function Navbar() {
  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 
                    bg-[#1b2740]/80 backdrop-blur-md 
                    flex items-center justify-between px-6 py-2 
                    rounded-full shadow-md max-w-5xl w-full z-50">
      <div className="text-white font-semibold text-lg">Logo</div>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <input
          type="text"
          placeholder="Search..."
          className="w-64 bg-gray-700 text-white px-4 py-2 rounded-full 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center gap-4">
        <span className="bg-gray-700 text-white px-4 py-1 rounded-full cursor-pointer">
          DE
        </span>
        <span className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
          EN
        </span>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium">
          Button
        </button>
      </div>
    </nav>
  );
}
