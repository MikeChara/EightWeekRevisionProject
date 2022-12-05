import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/fetchandcreate">Create a Meme</NavLink>
          <NavLink to="/savedmemes">Saved Memes</NavLink>
          <NavLink to="/browsergame">Browser Game</NavLink>
          <NavLink to="/Melissa">Accountancy Homework</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

//have deleted activeStyle after each Navlink due to error
//<NavLink to="/about" activeStyle>
