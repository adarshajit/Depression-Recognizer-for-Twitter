import React from "react";
import {
  MainContainer,
  Container,
  TopWrapper,
  TwitterHandle,
  DateWrapper,
  MainWrapper,
  AccountInfo,
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
              <h1>Adarsh Ajit</h1>
              <h4>@AdarshAjit</h4>
            </TwitterHandle>

            <DateWrapper>
              <h4>Sunday</h4>
              <h1>28 May 2021</h1>
            </DateWrapper>
          </TopWrapper>

          <MainWrapper>
            <AccountInfo>
              <h1>Account Summary</h1>
            </AccountInfo>
            <AccountInfo>
              <h1>Recent Tweets</h1>
            </AccountInfo>
          </MainWrapper>
        </Container>
      </MainContainer>
    </>
  );
};

export default Dashboard;
