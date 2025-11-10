// src/components/Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "ABOUT", path: "/about" },
  { name: "EXPERIENCE", path: "/experience" },
  { name: "SKILLS", path: "/skills" },
  { name: "EDUCATION", path: "/education" },
  { name: "BLOGS", path: "/blogs" },
  { name: "PROJECTS", path: "/projects" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // FIXED NAV: Uses backdrop-blur and a semi-transparent gradient
    // to sit over the background image, creating the "frosted" effect.
    <header className="fixed w-full z-50 py-6 px-4 md:px-12 ">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo/Name */}
<Link
  to="/"
  className="text-3xl font-signature text-[#16f2b3] hover:scale-105 transition-transform duration-300"
>
  Aaditya Singh
</Link>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="text-sm font-semibold transition duration-300 hover:text-purple-400 text-white"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-900/90 rounded-lg shadow-xl p-4">
          {/* ... mobile links go here ... */}
        </div>
      )}
    </header>
  );
};

export default Navbar;
