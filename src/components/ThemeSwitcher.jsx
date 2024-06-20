// src/components/ThemeSwitcher.js
import {BsSun} from 'react-icons/bs'
import {MdModeNight} from 'react-icons/md'
import  { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`px-2 lg:px-4 py-1 lg:py-2 absolute top-4 lg:top-5 right-5 lg:right- rounded-full ${
        darkMode ? "bg-white text-yellow-600" : "bg-slate-900 text-white"
      } transition-colors duration-200`}
    >
      {darkMode ? <BsSun size={25} /> : <MdModeNight size={25} />}
    </button>
  );
};

export default ThemeSwitcher;
