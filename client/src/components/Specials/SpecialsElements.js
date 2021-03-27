import styled from "styled-components";

export const SpecialsWrapper = styled.div`

  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;


  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1ft;
    padding: 0 20px 20px;
  }
`;

export const SpecialsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  height: 220px;
  width: 220px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 220px;
  }
`;

export const SpecialsImage = styled.img`
  height: 120px;
  width: 120px;
  margin-bottom: 10px;
`;

export const SpecialsH2 = styled.h2`
  color: #0d1010;
  font-size: 0.8rem;
  margin-bottom: 8px;
`;

export const SpecialsP = styled.p`
  color: #0d1010;
  font-size: 0.8rem;
  text-align: center;
`;
