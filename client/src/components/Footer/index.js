import React from "react";
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialLogo,
  SocialIconLink,
  WebsiteRights
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Faux Cafe
            </SocialLogo>
            <WebsiteRights>Faux Cafe © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>

            <SocialIconLink href='/' target='_blank' area-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' area-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' area-label='Youtube'>
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' area-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
