import React from "react";

import { GridContainer, Analytics, P } from "./tweetInfoElements";

import { IconContext } from "react-icons/lib";

import Chart from "../Chart/index";

const TweetInfo = () => {
  return (
    <>
      <IconContext.Provider value={{ fill: "#fff" }}>
        <GridContainer>
          <Analytics>
            <P>Analytics</P>
            <Chart />
          </Analytics>
        </GridContainer>
      </IconContext.Provider>
    </>
  );
};

export default TweetInfo;
