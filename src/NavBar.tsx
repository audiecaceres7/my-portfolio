import { useState, useEffect } from "react";

type NavBarProps = {
  themeValue: string;
  setThemeValue: (theme: string) => void;
};

const NavBar = ({ themeValue, setThemeValue }: NavBarProps) => {
  const [themeIcon, setThemeIcon] = useState<boolean>(false);

  useEffect(() => {
    document.body.className = themeValue;
    localStorage.setItem("theme", themeValue);

    if (themeValue === "light") {
      setThemeIcon(true);
    } else {
      setThemeIcon(false);
    }
  }, [themeValue]);

  const toggleTheme = () => {
    if (themeValue === "light") {
      setThemeValue("dark");
      setThemeIcon(false);
    } else {
      setThemeValue("light");
      setThemeIcon(true);
    }
  };

  return (
    <nav className="nav-bar">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "60px",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            color: "inherit",
          }}
        >
          <p>炎</p>
          <p>Audie Caceres</p>
        </div>
        <ul
          style={{
            display: "flex",
            gap: "40px",
          }}
        >
          <li>
            <button className="btn">Portfolio</button>
          </li>
          <li>
            <button className="btn">About Me</button>
          </li>
        </ul>
      </div>
      <button
        className={
          themeValue === "dark" ? "theme-panel-dark" : "theme-panel-light"
        }
        onClick={toggleTheme}
      >
        {themeIcon ? (
          <i className="theme-icon fa-solid fa-moon"></i>
        ) : (
          <i className="theme-icon fa-solid fa-sun"></i>
        )}
      </button>
    </nav>
  );
};

export default NavBar;
