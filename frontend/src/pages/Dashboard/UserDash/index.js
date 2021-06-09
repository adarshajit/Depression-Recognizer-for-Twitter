import React from "react";
import {
  MainContainer,
  Container,
  TopWrapper,
  H1,
  P1,
  TwitterHandle,
  DateWrapper,
  Img,
} from "./dashboardElements";

import Sidebar from "../../../components/Sidebar";
import UserInfo from "./UserInfo";
const Dashboard = (props) => {
  const analysis = props.location.state.analysis;

  console.log(analysis);

  let today = new Date();
  let month = today.getMonth();
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = today.getDay();

  const Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let year = today.getFullYear();

  let date = today.getDate();

  return (
    <>
      <MainContainer>
        <Sidebar />
        <Container>
          <TopWrapper>
            <Img src={analysis.profileImage} />
            <TwitterHandle>
              <H1>{analysis.name}</H1>
              <P1>@{analysis.username}</P1>
            </TwitterHandle>

            <DateWrapper>
              <P1>{Days[day]}</P1>
              <H1>
                {date} {Months[month]} {year}
              </H1>
            </DateWrapper>
          </TopWrapper>
          <UserInfo stats={analysis} tweets={analysis.tweets} />
        </Container>
      </MainContainer>
    </>
  );
};

export default Dashboard;
