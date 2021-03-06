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
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavName
} from "./NavbarElements";

const OrderNavbar = ({ toggle, auth }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const renderButton = () => {
    switch(auth) {
      case null:
        // don't show anything when the promise hasn't resolved
        return;
      case false:
        return (
          <NavBtnLink to="signin">Sign In</NavBtnLink>
          )
      default:
        return (
          <NavBtnLink onClick={() => window.location = '/api/logout'} >Sign Out</NavBtnLink>
        )
    }
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#ff8c42" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome} scrollNav={scrollNav}>
              <CgCoffee />
              <NavName scrollNav={scrollNav}>Faux Cafe</NavName>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duation={400}
                  spy={true}
                  exact="true"
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="specials"
                  smooth={true}
                  duation={400}
                  spy={true}
                  exact="true"
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  Specials
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="rewards"
                  smooth={true}
                  duation={400}
                  spy={true}
                  exact="true"
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  Rewards
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              {renderButton()}
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

function mapStateToProps({ auth }) {
  return { auth } // identical key value pair { auth: auth } = { auth }
}

export default connect(mapStateToProps)(OrderNavbar);
