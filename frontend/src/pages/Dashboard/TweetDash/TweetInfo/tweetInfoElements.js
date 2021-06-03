import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  margin: 10px 50px 0 100px;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  @media screen and (max-width: 768px) {
    margin: 10px;
  }
`;

export const Analytics = styled.div`
  height: 400px;
  border-radius: 20px;
  background-image: linear-gradient(to top left, #ffb003, #ffcb03);

  @media screen and (min-width: 1500px) {
    height: 650px;
  }
`;

export const P = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin: 20px 0 0 28px;
`;
