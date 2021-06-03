import React from "react";
import {
  MainContainer,
  Container,
  TopWrapper,
  H1,
  P1,
  TwitterHandle,
  DateWrapper,
} from "./dashboardElements";

import Sidebar from "../../../components/Sidebar";
import UserInfo from "./TweetInfo";
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
          <UserInfo />
        </Container>
      </MainContainer>
    </>
  );
};

export default Dashboard;
