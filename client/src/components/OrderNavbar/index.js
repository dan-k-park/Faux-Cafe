import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { FaBars } from "react-icons/fa";
import { CgCoffee } from "react-icons/cg"
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavName
} from "./NavbarElements";

const Navbar = ({ toggle, auth }) => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#ff8c42" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <CgCoffee />
              <NavName>Faux Cafe</NavName>
            </NavLogo>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

function mapStateToProps({ auth }) {
  return { auth } // identical key value pair { auth: auth } = { auth }
}

export default connect(mapStateToProps)(Navbar);
