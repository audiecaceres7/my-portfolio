import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import ToggleButton from "./ToggleButton";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "60px",
          fontSize: "25px",
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
        <ul className="nav-links">
          <li>
            <button className="btn">Portfolio</button>
          </li>
          <li>
            <button className="btn">About Me</button>
          </li>
        </ul>
      </div>
      <div className="panel-container">
        <ToggleButton />
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            display={{ base: "inline-block", md: "none" }}
            variant="outline"
          />
          <MenuList fontSize="1rem">
            <MenuItem>
              <Link to="/">About Me</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/PortfolioPage">Portfolio</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </nav>
  );
};
export default NavBar;
