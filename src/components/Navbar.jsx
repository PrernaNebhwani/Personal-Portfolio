import React, { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => setIsMenuOpen(!isMenuOpen);

  // 🔗 Replace this with your real OneDrive resume link
  const resumeLink = "https://1drv.ms/b/c/f21b16ef6b8de949/EXaoq0l3qL5ItG34RTengTUBPIJ-hpJkRgd2BmLcPlmwOA?e=xbrhxh";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg shadow-sm ${
        darkMode ? "bg-gray-900/70 text-white" : "bg-white/70 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left: Logo */}
        <div
          className={`text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full ${
            darkMode ? "bg-purple-600 text-white" : "bg-purple-500 text-white"
          } shadow-md select-none`}
        >
          PN
        </div>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex space-x-10 font-medium text-lg">
          <li>
            <a href="#hero" className="hover:text-purple-500 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-purple-500 transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-purple-500 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right: Theme + Menu */}
        <div className="flex items-center gap-4 relative">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-md transition-colors"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Dropdown Menu*/}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              } transition-colors`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Dropdown Items */}
            <div
              className={`absolute right-0 mt-3 w-52 rounded-2xl backdrop-blur-md shadow-2xl transform transition-all duration-300 ${
                isMenuOpen
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-2 invisible"
              } ${
                darkMode
                  ? "bg-gray-800/90 text-gray-200"
                  : "bg-white/90 text-gray-800"
              }`}
            >
              <ul className="flex flex-col py-3 px-2">
                <li>
                  <a
                    href="#skills"
                    className={`block px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      darkMode
                        ? "hover:bg-purple-600/30 hover:text-purple-300"
                        : "hover:bg-purple-100 hover:text-purple-700"
                    }`}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className={`block px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      darkMode
                        ? "hover:bg-purple-600/30 hover:text-purple-300"
                        : "hover:bg-purple-100 hover:text-purple-700"
                    }`}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <button
                    onClick={() =>
                      window.open(resumeLink, "_blank", "noopener,noreferrer")
                    }
                    className={`w-full text-left block px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      darkMode
                        ? "hover:bg-purple-600/30 hover:text-purple-300"
                        : "hover:bg-purple-100 hover:text-purple-700"
                    }`}
                  >
                    Resume
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
