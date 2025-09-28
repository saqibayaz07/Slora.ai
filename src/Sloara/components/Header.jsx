export default function Navbar() {
  return (
    <>
  <nav className="sticky top-6 mx-auto bg-gradient-to-r from-[#1b2740]/90 via-[#22335a]/90 to-[#1b2740]/90 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 py-1 sm:py-2 rounded-[50px] shadow-md  z-50 border border-blue-900/20 w-10/12">

    <div className="text-white text-base font-ubuntu font-bold pl-2">Slora</div>

    <div className="flex-1 flex justify-center">
      <input
        type="text"
        placeholder="Search..."
        className="w-40 sm:w-64 bg-[#1b2740]/80 backdrop-blur-md text-white px-3 py-1 rounded-full focus:outline-none border-2 border-blue-500 focus:ring-0 text-sm"
      />
    </div>

    <div className="flex items-center gap-2 pr-2">
      <button className="bg-blue-600 text-white px-3 py-1 rounded-full font-medium text-sm">
        Button
      </button>
    </div>
  </nav>
    </>

  );
}
