import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: space-between;

  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
  cursor: pointer;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;


export const NavName = styled.p`
  font-size: 0.6rem;
  color: ${({ scrollNav }) => (scrollNav ? "#FEFEFE" : "#0D1010")};
`