function Navbar() {
  return (
    <nav className="fixed z-20 h-11 top-5 left-0 right-0 max-w-fit mx-auto flex items-center justify-center p-1">
      <div className="w-full bg-[#f6f6f6] border-gray-300 border flex rounded-full p-1 shadow-gray-500 shadow-xs">
        <button className="w-1/3 lg:w-1/2  lg:px-10 p-3 px-5 rounded-full font-bold">
          <a href="#about">About</a>
        </button>
        <div className="h-11 w-0.5 lg:w-1 bg-gray-300" />
        <button className="w-1/3 lg:w-1/2 lg:px-10 p-3 px-5 rounded-full font-bold">
          <a href="#projects">Projects</a>
        </button>
        <div className="h-11 w-0.5 lg:w-1 bg-gray-300" />
        <button className="w-1/3 lg:w-1/2 lg:px-10 p-3 px-5 rounded-full font-bold">
          <a href="#contact">Contact</a>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
