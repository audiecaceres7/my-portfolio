import "./styles/App.css";
import NavBar from "./NavBar";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "dark"
  );

  return (
    <div className={`container ${theme}`}>
      <NavBar themeValue={theme} setThemeValue={setTheme} />
    </div>
  );
}

export default App;
