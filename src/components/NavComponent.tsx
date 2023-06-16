import "../styles/NavComponent.css";
import { PageProvider } from "./App";
import { useContext, useState } from "react";
import MenuButton from "./MenuButton";

const NavComponent = () => {
  const { setPage } = useContext(PageProvider);
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className="container">
      <nav className="nav-bar">
        <div className="logo-container">
          <p className="logo-homura">炎</p>
          <p className="logo">AC_Port</p>
        </div>
        <ul className="nav-items">
          <a>
            <li className="nav-link" onClick={() => setPage("Home")}>
              Home
            </li>
          </a>
          <a>
            <li className="nav-link" onClick={() => setPage("Projects")}>
              Projects
            </li>
          </a>
          <a>
            <li className="nav-link" onClick={() => setPage("About me")}>
              About Me
            </li>
          </a>
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
