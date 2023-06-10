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
        <p className="logo">AC_PORT</p>
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
          <i
            className="bar fa-solid fa-bars"
            onClick={() => {
              if (!modal) {
                setModal(true);
              } else {
                setModal(false);
              }
            }}
          ></i>
        </ul>
        {modal ? <MenuButton setModal={setModal} /> : ""}
      </nav>
    </div>
  );
};

export default NavComponent;
