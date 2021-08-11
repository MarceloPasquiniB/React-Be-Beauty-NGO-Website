import React, { useState } from "react";
import {
  Hamburger,
  Logo,
  LogoName,
  LogoWrapper,
  Menu,
  MenuItem,
  Nav,
} from "./style";
import eyelash from "../../../img/Eyelash.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <LogoWrapper>
        <Logo src={eyelash} alt="Website Logo"></Logo>
        <LogoName href="/">
          Be Beauty <span> NGO</span>
        </LogoName>
      </LogoWrapper>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Products">Products</Link>
        </MenuItem>
        <MenuItem>
          <Link to="Subscribe">Subscribe</Link>
        </MenuItem>
      </Menu>
    </Nav>
  );
}
