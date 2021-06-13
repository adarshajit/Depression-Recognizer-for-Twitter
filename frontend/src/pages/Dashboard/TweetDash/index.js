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
import TweetInfo from "./TweetInfo";
import Footer from "../../../components/Footer";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      analysis: props.location.state.analysis,
    };
  }

  render() {
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
              <TwitterHandle>
                <H1>{this.state.analysis.name}</H1>
                <P1>{`@${this.state.analysis.username}`}</P1>
              </TwitterHandle>

              <DateWrapper>
                <P1>{Days[day]}</P1>
                <H1>
                  {date} {Months[month]} {year}
                </H1>
              </DateWrapper>
            </TopWrapper>
            <TweetInfo stats={this.state.analysis} />
          </Container>
          <Footer />
        </MainContainer>
      </>
    );
  }
}

export default Dashboard;
