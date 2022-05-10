import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./NavbarElements";
import { SiMicrosoftedge } from "react-icons/si";
import { ReactComponent as Icon } from "../logos/log-in-2.svg";
import { IconContext } from "react-icons";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <div style={{ fontSize: "25px", marginRight: "12px" }}>
            <SiMicrosoftedge />
          </div>
          <h1>Logo</h1>
        </NavLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to="/about" activestyle="true">
            About
          </NavLink>
          <NavLink to="/artworks" activestyle="true">
            Artworks
          </NavLink>
          <NavLink to="/stats" activestyle="true">
            Stats
          </NavLink>
          <NavLink to="/contact" activestyle="true">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <IconContext.Provider value={{ color: "white", size: "20px" }}>
            <NavLink to="/signin" activestyle="true">
              <Icon alt="logo" className="icon-color " />
            </NavLink>
          </IconContext.Provider>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
