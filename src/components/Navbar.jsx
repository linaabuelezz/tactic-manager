import { useState } from "react";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(props);

  return (
    <nav className="bg-black p-3 h-16 shadow-xl mt-0">
      <div className="container m-auto flex justify-between items-center ">
        <a href="./App.jsx" className="flex items-center">
          <img
            src='/assets/logo.png'
            alt="logo"
            className="h-10 w-auto"
          ></img>
        </a>
        <button className="text-white md:hidden" onClick={toggleMenu}>
          ☰
        </button>
        <ul
          className={`flex space-x-6 ${
            isOpen ? "block" : "hidden"
          } md:flex space-x-10 font-mono`}
        >
          <li>
            <a href="./App.jsx" className="text-white hover:text-gray-300 ">
              Home
            </a>
          </li>
          <li>
            <a href="./about.jsx" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="./Tactics.jsx" className="text-white hover:text-gray-300">
              Tactics
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">
              Player details
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
