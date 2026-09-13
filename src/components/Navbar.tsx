import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;

    setDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  };

  return (
    <header className="site-navbar">
      <div className="feed-container navbar-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">MT</span>
          <span>MOHANAD TAMER</span>
        </a>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="https://github.com/Mohanad-Tamer"
            target="_blank"
            rel="noreferrer"
            className="nav-github"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;