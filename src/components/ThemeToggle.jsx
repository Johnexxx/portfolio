// Add to src/components/Navbar.jsx (or a new ThemeToggle.jsx)
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{
        marginLeft: "1rem",
        padding: "0.5rem 1rem",
        borderRadius: "1rem",
        border: "none",
        cursor: "pointer",
        background: theme === "dark" ? "#fff" : "#222",
        color: theme === "dark" ? "#222" : "#fff",
        transition: "all 0.2s"
      }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;