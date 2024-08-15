import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

interface IProps {}

const DarkMode = ({}: IProps) => {
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
      className="text-xl text-gray-800 dark:text-gray-200"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default DarkMode;
