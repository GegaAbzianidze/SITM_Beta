import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SideBtnWrap,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu
} from "./SidebarElements";
import { useMoralis } from "react-moralis";
import { ReactComponent as Icon3 } from "../Icons/log-in-2.svg";
import { ReactComponent as Icon2 } from "../Icons/log-out-2.svg";
import { IconContext } from "react-icons";

const Sidebar = ({ isOpen, toggle }) => {
  const { isAuthenticated, logout } = useMoralis();

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about">About</SidebarLink>
          <SidebarLink to="/artworks">Artworks</SidebarLink>
          <SidebarLink to="/stats">Stats</SidebarLink>
          <SidebarLink to="/contact">Contact</SidebarLink>
          {isAuthenticated ? (
            <SidebarLink to="/writer" activestyle="true">
              Writer
            </SidebarLink>
          ) : null}
        </SidebarMenu>
        <SideBtnWrap>
          <IconContext.Provider value={{ color: "white", size: "20px" }}>
            {!isAuthenticated ? (
              <SidebarLink to="/signin" activestyle="true">
                <Icon3 alt="logo" className="icon-color" />
              </SidebarLink>
            ) : (
              <SidebarLink to="/">
                <button className="Buttn" onClick={logOut}>
                  <Icon2 alt="logo" className="icon-color " />
                </button>
              </SidebarLink>
            )}
          </IconContext.Provider>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
