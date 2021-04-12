import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchMenu } from '../../actions';
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
  OrderBtn
} from "./OrderElements";

class Order extends Component {
  state = {
    cartItems: []
  };

  componentDidMount() {
    this.props.fetchMenu()
  }

  renderMenuItems() {
    return this.props.menu.map(menu => {
      return (
        <MenuItem>
          <ItemName>{menu.name}</ItemName>
          <ItemDesc>Sourced from: {menu.origin}</ItemDesc>
        </MenuItem>
      )
    })
  };

  render() {
    return (
      <OrderContainer>
        <Background>
          <ImageBg src={Image} type="image/jpg" />
        </Background>
        <OrderWrapper>
          <MenuWrapper>
            {this.renderMenuItems()}
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

function mapStateToProps({ menu }) {
  return { menu };
}

export default connect(mapStateToProps, { fetchMenu })(Order);
