"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="fixed w-full p-4 shadow-md flex justify-between items-center drop-shadow-xl  bg-white dark:bg-gray-800">
      <h1 className="text-xl font-bold dark:text-neutral-50">
        Where in the world?
      </h1>
      <button
        onClick={toggleDarkMode}
        className="text-gray-800 dark:text-gray-200 py-3 px-2 rounded-md shadow-lg shadow-indigo-500/50"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
