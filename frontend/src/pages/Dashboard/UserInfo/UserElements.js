import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  margin: 10px;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

export const AccountSummary = styled.div`
  background-color: #f2be43;
  border-radius: 10px;
  height: 400px;

  @media screen and (min-width: 1500px) {
    height: 650px;
  }
`;

export const P = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin: 10px 0 0 10px;
`;

export const Data = styled.div`
  border-radius: 10px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  @media screen and (min-width: 1500px) {
    height: 650px;
  }
`;

export const Number = styled.div`
  background-color: #dee0ef;
  border-radius: 10px;
  margin-bottom: 10px;
  height: 195px;

  @media screen and (max-width: 768px) {
    height: 140px;
  }

  @media screen and (min-width: 1500px) {
    height: 320px;
  }
`;

export const RecentTweets = styled.div`
  background-color: #1f93ff;
  height: 400px;
  border-radius: 10px;

  @media screen and (min-width: 1500px) {
    height: 650px;
  }
`;

export const OtherData = styled.div`
  background-color: #3cba78;
  margin: 10px;
  grid-column: 1/4;
  border-radius: 10px;
  max-height: 800px;
  padding: 20px 0 20px 0;

  @media screen and (min-width: 1500px) {
    height: 500px;
    flex-direction: row;
    padding: 80px 0 20px 0;
  }
`;

export const P2 = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  display: flex;
  align-self: center;
`;

export const Box = styled.div`
  width: 250px;
  height: 100px;
  display: grid;
  place-items: center;
  background-color: #29a267;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 350px;
    height: 130px;
    margin: 40px 0 20px 0;
    align-self: center;
  }
`;

export const OtherWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-self: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  width: 250px;
  height: 100px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Sub = styled.p`
  font-size: 18px;
  font-weight: 600;
  align-self: center;
`;
