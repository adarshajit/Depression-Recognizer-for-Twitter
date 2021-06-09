import React, { useState } from "react";
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
import TweetInfo from "./TweetInfo";
const Dashboard = (props) => {
  const [analysis, setAnalysis] = useState(props.location.state.analysis);

  console.log(analysis);

  return (
    <>
      <MainContainer>
        <Sidebar />
        <Container>
          <TopWrapper>
            <TwitterHandle>
              <H1>{analysis.name}</H1>
              <P1>{`@${analysis.username}`}</P1>
            </TwitterHandle>

            <DateWrapper>
              <P1>Sunday</P1>
              <H1>28 May 2021</H1>
            </DateWrapper>
          </TopWrapper>
          <TweetInfo stats={analysis} />
        </Container>
      </MainContainer>
    </>
  );
};

export default Dashboard;
