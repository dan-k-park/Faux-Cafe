import React from "react";
import { connect } from 'react-redux';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ auth, isOpen, toggle }) => {

  const renderButton = () => {
    switch(auth) {
      case null:
        // don't show anything when the promise hasn't resolved
        return;
      case false:
        return (
          <SidebarRoute to='signin' >Sign In</SidebarRoute>
          )
      default:
        return (
          <SidebarRoute onClick={() => window.location = '/api/logout'}>Sign Out</SidebarRoute>
        )
    }
  }

  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
            <SidebarLink to="specials" onClick={toggle}>Specials</SidebarLink>
            <SidebarLink to="rewards" onClick={toggle}>Rewards</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
              {renderButton()}
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

function mapStateToProps({ auth }) {
  return { auth } // identical key value pair { auth: auth } = { auth }
}

export default connect(mapStateToProps)(Sidebar);