import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-3 h-16 shadow-xl mt-0 sticky top-0 z-50">
      <div className="container m-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/assets/logo2.png"
            alt="logo"
            className="h-10 w-auto"
          ></img>
        </Link>
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <ul
          className={`flex space-x-6 ${
            isOpen ? "block" : "hidden"
          } md:flex space-x-10 font-mono`}
        >
          <li>
            <Link to="/" className="text-white hover:text-gray-300 custom-font text-2xl">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-page" className="text-white hover:text-gray-300 custom-font text-2xl">
              About
            </Link>
          </li>
          <li>
            <Link to="/tactics-page" className="text-white hover:text-gray-300 custom-font text-2xl">
              Tactics
            </Link>
          </li>
          <li>
            <Link to="/player-details" className="text-white hover:text-gray-300 custom-font text-2xl">
              Player details
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
