import { useContext } from "react";
import { PageProvider } from "./App";

const MenuButton = ({ setModal }: any) => {
  const { setPage } = useContext(PageProvider);
  return (
    <div className="menu-bar container">
      <ul>
        <button
          className="menu-link"
          onClick={() => {
            setPage("Projects"), setModal(false);
          }}
        >
          <li>Projects</li>
        </button>
        <button
          className="menu-link"
          onClick={() => {
            setPage("About me"), setModal(false);
          }}
        >
          <li>About Me</li>
        </button>
      </ul>
    </div>
  );
};

export default MenuButton;
