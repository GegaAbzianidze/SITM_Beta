import React, { useEffect } from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./NavbarElements";
import { ReactComponent as Icon } from "../Icons/log-in-2.svg";
import { ReactComponent as Icon2 } from "../Icons/log-out-2.svg";
import { IconContext } from "react-icons";
import { useMoralis } from "react-moralis";
import { useMoralisWeb3Api } from "react-moralis";
import Moralis from "moralis";

const Navbar = ({ toggle }) => {
  const { isAuthenticated, logout, user } = useMoralis();

  const Web3Api = useMoralisWeb3Api();

  useEffect(() => {
    ETHData();
  }, []);

  const ETHData = async () => {
    if (isAuthenticated) {
      Moralis.authenticate().then(function (user) {
        FetchAPI();
        console.log(user.get("ethAddress"));
      });
    }

    const FetchAPI = async () => {
      const options = {
        chain: "polygon",
        address: user.address,
        token_address: "0x861856B01269a03AA786d76B92BBDBDA137A728c"
      };
      const polygonNFTs = await Web3Api.account.getNFTsForContract(options);

      if (polygonNFTs.total > 0) {
        alert("succs");
      } else {
        alert("Error");
      }
    };
  };

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
            <>
              {polygonNFTs > 0 ? (
                <>
                  <NavLink to="/writer" activestyle="true">
                    Writer
                  </NavLink>
                </>
              ) : (
                <NavLink to="/mybooks" activestyle="true">
                  MyBooks
                </NavLink>
              )}
            </>
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
