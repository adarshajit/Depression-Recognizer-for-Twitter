import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 50px 50px 0 130px;
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-column: 1fr;
    margin: 10px;
  }
`;

export const Analytics = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;

export const Tweet = styled.div`
  grid-column: 1/3;
  border: 3px solid #000;
  width: 1000px;
  height: 200px;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    max-width: 360px;
    grid-row: 1fr;
    height: 300px;
  }
`;

export const DepLevel = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  height: 200px;
  border: 3px solid #000;
  border-radius: 10px;
  width: 200px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const P = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin: 20px 0 0 28px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0 10px 20px;
  grid-gap: 10px;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  border-radius: 50%;
`;

export const P2 = styled.p`
  font-weight: 700;
`;

export const H1 = styled.h1`
  font-weight: 600;
  font-size: 24px;
`;

export const P3 = styled.p`
  font-weight: 700;
  font-size: 40px;
`;
