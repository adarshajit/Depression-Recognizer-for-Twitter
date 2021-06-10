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
import KeywordInfo from "./keywordInfo";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      analysis: props.location.state.analysis,
    };
  }

  render() {
    console.log(this.state.analysis);
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

    console.log(this.state.analysis);
    return (
      <>
        <MainContainer>
          <Sidebar />
          <Container>
            <TopWrapper>
              <TwitterHandle>
                <P1>Searched keyword:</P1>
                <H1>{this.state.analysis.keywords}</H1>
              </TwitterHandle>

              <DateWrapper>
                <P1>{Days[day]}</P1>
                <H1>
                  {date} {Months[month]} {year}
                </H1>
              </DateWrapper>
            </TopWrapper>
            <KeywordInfo
              stats={this.state.analysis}
              tweets={this.state.analysis.Tweets}
              depLevels={this.state.analysis.depTally}
            />
          </Container>
        </MainContainer>
      </>
    );
  }
}

export default Dashboard;
