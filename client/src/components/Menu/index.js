import React, { Component } from "react";
import Image from "../../assets/images/hero-background.jpg";

import { MenuContainer, MenuBg, ImageBg } from "./MenuElements";

class Menu extends Component {
  state = {
    cartItems: [],
  };

  renderMenuItems = () => {
    return (
      <>
        <h1>Bean juice</h1>
        <h1>Bean juice</h1>
        <h1>Bean juice</h1>
        <h1>Bean juice</h1>
        <h1>Bean juice</h1>
        <h1>Bean juice</h1>
        <h1>Bean juice</h1>
        <h1>Bean juice</h1>
        <h1>Bean juice</h1>
        <h1>Bean juice</h1>
        <h1>Bean juice</h1>
        <h1>Bean juice</h1>
        <h1>Bean juice</h1>
        <h1>Bean juice</h1>
        <h1>Bean juice</h1>
        <h1>Bean juice</h1>
        <h1>Bean juice</h1>
      </>
    );
  };

  renderCartItem = () => {
    return (
      <>
        <CartItemCard>
          <h1>

          </h1>
          <h1>

          </h1>
        </CartItemCard>
      </>
    )
  }

  render() {
    return (
      <MenuContainer>
        <MenuBg>
          <ImageBg src={Image} type="image/jpg" />
        </MenuBg>
        <MenuWrapper>
          <MenuRow>
            <Column1>
              <MenuItem>
              </MenuItem>
            </Column1>
            <Column2>
              <CartWrapper>
                <CartItems>
                  {this.renderCartItem()}
                </CartItems>
                <SubmitOrderBtnWrap>
                  <SubmitOrderBtn>Submit Order</SubmitOrderBtn>
                </SubmitOrderBtnWrap>
              </CartWrapper>
            </Column2>
          </MenuRow>
        </MenuWrapper>
      </MenuContainer>
    );
  }
}

export default Menu;
