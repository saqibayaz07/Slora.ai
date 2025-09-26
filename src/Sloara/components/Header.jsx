export default function Navbar() {
  return (
    <>
      <nav className="absolute top-6 left-1/2 -translate-x-1/2 
                    bg-[#1b2740]/80 backdrop-blur-md 
                    flex items-center justify-between px-6  py-2
                    rounded-full shadow-md max-w-5xl w-full z-50">
        <div className="text-white text-sm  font-ubuntu font-bold">Slora</div>


        <div className="absolute left-1/2 transform -translate-x-1/2">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 bg-[#1b2740]/80 backdrop-blur-md  text-white px-2 rounded-full 
                     focus:outline-none  border-2 border-blue-500 focus:ring-0
"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-blue-600 text-white px-4  rounded-full font-medium">
            Button
          </button>
        </div>
      </nav>
    </>

  );
}
