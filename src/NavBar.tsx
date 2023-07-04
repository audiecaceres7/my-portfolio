import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
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
          <Link to="/">
            <p>炎 Audie Caceres</p>
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link className="btn" to="/">
              About Me
            </Link>
          </li>
          <li>
            <Link className="btn" to="/PortfolioPage">
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
      <ToggleButton />
      <Box ml={2} display={{ base: "inline-block", md: "none" }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            display={{ base: "inline-block", md: "none" }}
            variant="outline"
          />
          <MenuList>
            <MenuItem as={Link} to="/">
              About me
            </MenuItem>
            <MenuItem as={Link} to="/PortfolioPage">
              Portfolio
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </nav>
  );
};
export default NavBar;
