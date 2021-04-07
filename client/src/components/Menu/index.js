import React, { Component } from "react";
import Image from "../../assets/images/hero-background.jpg";

import {
  Background, ImageBg, OrderContainer,
  OrderWrapper,
  MenuWrapper,
  MenuItem,
  ItemName,
  ItemDesc,
  CartWrapper,
  Cart,
  CartItem,
  CartItemName,
  CartItemQuantity,
  OrderBtn
} from "./MenuElements";

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

  // renderCartItem = () => {
  //   return (
  //     <>
  //       <CartItemCard>
  //         <h1>

  //         </h1>
  //         <h1>

  //         </h1>
  //       </CartItemCard>
  //     </>
  //   )
  // }

  render() {
    return (
      <OrderContainer>
        <Background>
          <ImageBg src={Image} type="image/jpg" />
        </Background>
        <OrderWrapper>
          <MenuWrapper>
            <MenuItem>
              <ItemName>Coffee Bean</ItemName>
              <ItemDesc>Price</ItemDesc>
            </MenuItem>
            <MenuItem>
              <ItemName>Coffee Bean</ItemName>
              <ItemDesc>Price</ItemDesc>
            </MenuItem>
            <MenuItem>
              <ItemName>Coffee Bean</ItemName>
              <ItemDesc>Price</ItemDesc>
            </MenuItem>
            <MenuItem>
              <ItemName>Coffee Bean</ItemName>
              <ItemDesc>Price</ItemDesc>
            </MenuItem>
            <MenuItem>
              <ItemName>Coffee Bean</ItemName>
              <ItemDesc>Price</ItemDesc>
            </MenuItem>
            <MenuItem>
              <ItemName>Coffee Bean</ItemName>
              <ItemDesc>Price</ItemDesc>
            </MenuItem>
            <MenuItem>
              <ItemName>Coffee Bean</ItemName>
              <ItemDesc>Price</ItemDesc>
            </MenuItem>
            <MenuItem>
              <ItemName>Coffee Bean</ItemName>
              <ItemDesc>Price</ItemDesc>
            </MenuItem>
          </MenuWrapper>
          <CartWrapper>
            <Cart>
              <CartItem>
                <h4>Bean Juice</h4>
                <p>3</p>
              </CartItem>
              <CartItem>
                <h4>Bean Juice</h4>
                <p>3</p>
              </CartItem>
              <CartItem>
                <h4>Bean Juice</h4>
                <p>3</p>
              </CartItem>
            </Cart>
            <OrderBtn>Place Order</OrderBtn>
          </CartWrapper>
        </OrderWrapper>
      </OrderContainer>
    );
  }
}

export default Menu;
