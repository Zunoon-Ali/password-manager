import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 flex items-center justify-center">
      <div className="myContainer px-6 md:px-12 lg:px-20 py-5 flex justify-around items-center">
        {/* Logo */}
        <div className="logo not-last:text-2xl font-bold">
          <p className="text-white">
            <span className="font-normal">&lt; </span>
            PASS<span className="text-green-500 ">OP</span>
            <span className="font-normal"> /&gt;</span>
          </p>
        </div>

        {/* Links */}
        <ul className="flex gap-8 ">
          <li>
            <a
              href="#"
              className="hover:text-white font-bold transition text-gray-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-white font-bold transition text-gray-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-white font-bold transition text-gray-300"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-white font-bold transition text-gray-300"
            >
              Bio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-white font-bold transition text-gray-300"
            >
              Find Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
