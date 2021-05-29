import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  margin: 10px;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

export const AccountSummary = styled.div`
  background-color: #475b6e;
  height: 400px;
  border-radius: 10px;
`;

export const Data = styled.div`
  border-radius: 10px;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const Number = styled.div`
  background-color: #dee0ef;
  border-radius: 10px;
  margin-bottom: 10px;
  height: 195px;

  @media screen and (max-width: 768px) {
    height: 140px;
  }
`;

export const RecentTweets = styled.div`
  background-color: #1f93ff;
  height: 400px;
  border-radius: 10px;
`;

export const OtherData = styled.div`
  background-color: #3cba78;
  margin: 10px;
  grid-column: 1/4;
  border-radius: 10px;
  height: 150px;

  @media screen and (max-width: 768px) {
    height: 400px;
  }
`;
