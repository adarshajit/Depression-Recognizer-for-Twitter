import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const TopWrapper = styled.div`
  display: flex;
  margin: 100px 50px 30px 100px;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    margin: 80px;
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
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

export const TwitterHandle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  height: 100px;
  width: 50%;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: flex-end;
  justify-content: center;
  height: 100px;
  width: 50%;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;
