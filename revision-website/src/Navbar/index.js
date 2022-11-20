import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/fetchandcreate" activeStyle>
            Create a Meme
          </NavLink>
          <NavLink to="/savedmemes" activeStyle>
            Saved Memes
          </NavLink>
          <NavLink to="/browsergame" activeStyle>
            Browser Game
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
