import Projects from "./Projects";
import NavComponent from "./NavComponent";
import HomePage from "./HomePage";
import AboutMePage from "./AboutMePage";
import SideBar from "./SideBar";
import "../styles/App.css";
import { useState, createContext } from "react";

type page = "Home" | "Projects" | "About me";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PageProvider = createContext<any>({});

function App() {
  const [page, setPage] = useState<page>("Home");

  return (
    <PageProvider.Provider value={{ setPage }}>
      <NavComponent />
      <div className="main-container container">
        <div className="left-page">
          {page === "Home" ? <HomePage /> : ""}
          {page === "Projects" ? <Projects /> : ""}
          {page === "About me" ? <AboutMePage /> : ""}
        </div>
        <SideBar />
      </div>
    </PageProvider.Provider>
  );
}

export default App;
