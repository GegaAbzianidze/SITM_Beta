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

import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";

const Sidebar = ({ isOpen, toggle }) => {
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
        </SidebarMenu>
        <SideBtnWrap>
          <IconContext.Provider value={{ color: "white", size: "20px" }}>
            <div>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/react-icons/react-icons#configuration",
                    "_blank"
                  )
                }
                style={{
                  padding: "10px 20px",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                <BsSearch />
              </button>
            </div>
          </IconContext.Provider>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
