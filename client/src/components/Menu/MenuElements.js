import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const OrderContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const OrderWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 16px;
  padding: 50px;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 50px;
    overflow: scroll;
  }
`;

export const MenuWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  height: 80vh;
  border-style: solid;
  padding: 10px;
  overflow: scroll;

  @media screen and (max-width: 768px) {
    height: 60vh;
    grid-template-columns: 1fr;
    padding: 0 20px 20px;
  }
`;

export const MenuItem = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  width: 220px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ItemName = styled.h2`
  color: #0d1010;
  font-size: 0.8rem;
  margin-bottom: 8px;
`;

export const ItemDesc = styled.p`
  color: #0d1010;
  font-size: 0.8rem;
  text-align: left;
`;

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  border-style: solid;
  padding: 10px;
  height: 40vh;
  width: 40vh;
`;

export const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 30px;
`;

export const OrderBtn = styled.button`
  margin-top: 10px;
  justify-self: center;
  align-self: center;
  font-size: 3vh;
  width: 30vh;
  height: 8vh;
`;
