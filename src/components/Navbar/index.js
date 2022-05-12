import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./NavbarElements";
import { ReactComponent as Icon } from "../Icons/log-in-2.svg";
import { ReactComponent as Icon2 } from "../Icons/log-out-2.svg";
import { IconContext } from "react-icons";
import { useMoralis } from "react-moralis";

const Navbar = ({ toggle }) => {
  const { isAuthenticated, logout } = useMoralis();

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>SITM</h1>
        </NavLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to="/about" activestyle="true">
            About
          </NavLink>
          <NavLink to="/bookshelf" activestyle="true">
            Bookshelf
          </NavLink>
          <NavLink to="/stats" activestyle="true">
            Stats
          </NavLink>
          <NavLink to="/contact" activestyle="true">
            Contact
          </NavLink>
          {isAuthenticated ? (
            <NavLink to="/writer" activestyle="true">
              Writer
            </NavLink>
          ) : null}
        </NavMenu>
        <NavBtn>
          <IconContext.Provider value={{ color: "white", size: "20px" }}>
            {!isAuthenticated ? (
              <NavLink to="/signin" activestyle="true">
                <Icon alt="logo" className="icon-color" />
              </NavLink>
            ) : (
              <NavLink to="/">
                <button className="Buttn" onClick={logOut}>
                  <Icon2 alt="logo" className="icon-color " />
                </button>
              </NavLink>
            )}
          </IconContext.Provider>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
