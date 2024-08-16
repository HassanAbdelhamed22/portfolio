import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

interface IProps {
  className?: string;
}

const DarkMode = ({ className = "" }: IProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle Dark Mode"
      aria-pressed={darkMode}
      className={`text-xl text-gray-800 dark:text-gray-200 bg-[#fafafa] dark:bg-[#252529] p-[0.7rem] rounded-3xl shadow-md hover:bg-gray-200 dark:hover:bg-[#1f1f22] transition-colors duration-300 ml-auto sm:ml-0 border dark:border-borderDark border-borderLight ${className}`}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default DarkMode;
