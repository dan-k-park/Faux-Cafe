import React, { useState } from "react";
import { connect } from "react-redux";


import Video from "../../assets/videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeroBtn,
  HeroBtnText,
} from "./HeroElements";

const HeroSection = ({ auth }) => {

  const renderContent = () => {
    switch (auth) {
      case null:
        // don't show anything when the promise hasn't resolved
        return;
      case false:
        return (
          <>
            <HeroH1>Online Ordering Now Available</HeroH1>
          </>
        );
      default:
        return (
          <>
            <HeroH1>Welcome back {auth.firstName}!</HeroH1>
            <HeroP>You have {auth.points} points</HeroP>
          </>
        );
    }
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        {renderContent()}

        <HeroBtnWrapper>
          <HeroBtn
            to="order"
          >
            <HeroBtnText>Order Online</HeroBtnText>
          </HeroBtn>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

function mapStateToProps({ auth }) {
  return { auth }; // identical key value pair { auth: auth } = { auth }
}

export default connect(mapStateToProps)(HeroSection);
