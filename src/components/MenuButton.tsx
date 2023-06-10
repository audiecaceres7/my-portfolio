import { useContext } from "react";
import { PageProvider } from "./App";

const MenuButton = ({ setModal }: any) => {
  const { setPage } = useContext(PageProvider);
  return (
    <div className="menu-bar container">
      <i
        className="close-btn fa-solid fa-xmark"
        onClick={() => setModal(false)}
      ></i>
      <ul>
        <a>
          <li
            className="menu-link"
            onClick={() => {
              setPage("Home"), setModal(false);
            }}
          >
            Home
          </li>
        </a>
        <a>
          <li
            className="menu-link"
            onClick={() => {
              setPage("Projects"), setModal(false);
            }}
          >
            Projects
          </li>
        </a>
        <a>
          <li
            className="menu-link"
            onClick={() => {
              setPage("About me"), setModal(false);
            }}
          >
            About Me
          </li>
        </a>
      </ul>
    </div>
  );
};

export default MenuButton;
