import React, { useState } from "react";
import { useDarkMode } from "../hooks/UseDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode("darkMode", false);
  // const [darkMode, setDarkMode] = useState(false);
  // const isDarkMode = useDarkMode();

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <div className="dark-mode__toggle ">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
