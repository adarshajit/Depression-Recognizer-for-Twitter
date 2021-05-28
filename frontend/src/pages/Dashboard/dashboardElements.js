import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TopWrapper = styled.div`
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const H1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const P1 = styled.p`
  font-size: 18px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`;

export const P2 = styled.p`
  margin: 15px 0 0 0;
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 32px;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const TwitterHandle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0 0 30px;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 10px 30px 0 0;
`;

export const MainWrapper = styled.div`
  display: grid;
  margin: 20px 0 0 0;
  grid-template-columns: 1fr 1fr;
  place-items: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

export const AccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 550px;
  background-color: #99ebff;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 500px;
  }

  @media screen and (max-width: 450px) {
    width: 360px;
  }
  @media screen and (max-width: 359px) {
    width: 280px;
  }
`;

export const Details = styled.div`
  margin: 20px 0 0 0;
  width: 500px;
  height: 450px;
  background-color: #fff;
  align-self: center;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 470px;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
  }

  @media screen and (max-width: 360px) {
    width: 250px;
  }
`;
