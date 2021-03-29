import React from "react";
import Image from "../../assets/images/hero-background.jpg";

import { MenuContainer, MenuBg, ImageBg } from "./MenuElements";

const Menu = () => {
  return (
    <MenuContainer>
      <MenuBg>
        <ImageBg src={Image} type="image/jpg" />
      </MenuBg>
    </MenuContainer>
  );
};

export default Menu;
