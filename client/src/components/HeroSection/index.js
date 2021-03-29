import React, { useState } from "react";
import { connect } from "react-redux";

import Image from "../../assets/images/hero-background.jpg";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeroBtnText,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = ({ auth }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const renderContent = () => {
    switch (auth) {
      case null:
        // don't show anything when the promise hasn't resolved
        return;
      case false:
        return (
          <>
            <HeroH1>Faux</HeroH1>
            <HeroP>Cafe and Bakery</HeroP>
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
        <ImageBg src={Image} type="image/jpg" />
      </HeroBg>
      <HeroContent>
        {renderContent()}

        <HeroBtnWrapper>
          <Button
            to="order"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="false"
          >
            <HeroBtnText>Order Online</HeroBtnText>
            {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

function mapStateToProps({ auth }) {
  return { auth }; // identical key value pair { auth: auth } = { auth }
}

export default connect(mapStateToProps)(HeroSection);
