import React from "react";
import {
  MainContainer,
  Container,
  TopWrapper,
  H1,
  P1,
  P2,
  TwitterHandle,
  DateWrapper,
  MainWrapper,
  AccountInfo,
  Details,
} from "./dashboardElements";

import Sidebar from "../../components/Sidebar";
const Dashboard = () => {
  return (
    <>
      <MainContainer>
        <Sidebar />
        <Container>
          <TopWrapper>
            <TwitterHandle>
              <H1>Adarsh Ajit</H1>
              <P1>@AdarshAjit</P1>
            </TwitterHandle>

            <DateWrapper>
              <P1>Sunday</P1>
              <H1>28 May 2021</H1>
            </DateWrapper>
          </TopWrapper>

          <MainWrapper>
            <AccountInfo>
              <P2>Account Summary</P2>
              <Details></Details>
            </AccountInfo>
            <AccountInfo>
              <P2>Recent Tweets</P2>
            </AccountInfo>
          </MainWrapper>
        </Container>
      </MainContainer>
    </>
  );
};

export default Dashboard;
