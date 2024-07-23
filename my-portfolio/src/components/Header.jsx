// src/components/Header.jsx
import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import newLogo from "../assets/new-logo.png";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <header
      className={`header p-4 flex justify-between items-center ${
        isDarkTheme ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
      }`}
    >
      <img src={newLogo} alt="Logo" className="h-10" />
      <nav className="flex items-center">
        <a
          href="#about"
          className="mx-2 hover:text-yellow-400 transition-colors"
        >
          About
        </a>
        <a
          href="#skills"
          className="mx-2 hover:text-yellow-400 transition-colors"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="mx-2 hover:text-yellow-400 transition-colors"
        >
          Projects
        </a>
        <a
          href="#certificates"
          className="mx-2 hover:text-yellow-400 transition-colors"
        >
          Certificates
        </a>
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-gray-300 text-gray-800 hover:bg-gray-400 focus:outline-none"
        >
          <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
