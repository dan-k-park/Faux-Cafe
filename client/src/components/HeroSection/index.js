import React, { useState } from "react";
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

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImageBg src={Image} type="image/jpg" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Faux</HeroH1>
        <HeroP>Cafe and Bakery</HeroP>

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

export default HeroSection;
