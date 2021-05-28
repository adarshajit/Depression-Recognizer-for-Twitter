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
  background-color: #5e5e5e;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const AccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 550px;
  margin: 30px 10px 0 70px;
  background-color: wheat;
`;
