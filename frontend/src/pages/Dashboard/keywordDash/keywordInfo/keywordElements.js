import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 50px 0 100px;

  @media screen and (max-width: 768px) {
    margin: 10px;
  }
`;

export const Analytics = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 240px;
  border-radius: 20px;
  border: 3px solid #000;

  @media screen and (min-width: 1500px) {
    height: 650px;
  }
`;

export const Tweet = styled.div`
  grid-column: 1/3;
  border: 3px solid #000;

  @media screen and (min-width: 1500px) {
    height: 650px;
  }
`;

export const DepLevel = styled.div`
  height: 100px;
  width: 100px;
  border: 3px solid #000;

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
