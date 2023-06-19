import "../styles/NavComponent.css";
import { PageProvider } from "./App";
import { useContext, useState } from "react";
import MenuButton from "./MenuButton";

const NavComponent = () => {
  const { page, setPage } = useContext(PageProvider);
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className="container">
      <nav className="nav-bar">
        <div className="logo-container" onClick={() => setPage("Home")}>
          <p className="logo-homura">炎</p>
          <p className="logo">AC_Port</p>
        </div>
        <ul className="nav-items">
          <button
            className={page === "Projects" ? "nav-link active" : "nav-link"}
            onClick={() => setPage("Projects")}
          >
            <li>Projects</li>
          </button>
          <button
            className={page === "About me" ? "nav-link active" : "nav-link"}
            onClick={() => setPage("About me")}
          >
            <li>About me</li>
          </button>
          <button
            className={modal ? "bar active" : "bar"}
            onClick={() => {
              if (!modal) {
                setModal(true);
              } else {
                setModal(false);
              }
            }}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </ul>
        {modal ? <MenuButton setModal={setModal} /> : ""}
      </nav>
    </div>
  );
};

export default NavComponent;
