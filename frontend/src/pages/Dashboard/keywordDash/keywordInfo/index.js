import React from "react";

import { Container, Analytics, P, DepLevel, Tweet } from "./keywordElements";

import { IconContext } from "react-icons/lib";

const KeywordInfo = ({ stats, tweets, depTally }) => {
  // const depLevel = stats.depLevel;
  // var message = "";
  // if (depLevel <= 2) {
  //   message = "Not";
  // } else if (depLevel > 2 && depLevel <= 3.4) {
  //   message = "Mildly";
  // } else {
  //   message = "Highly";
  // }
  return (
    <>
      <IconContext.Provider value={{ fill: "#fff" }}>
        <Container>
          <Analytics>
            <Tweet>
              <P>Tweet</P>
            </Tweet>
            <DepLevel>
              <P>Depression Score</P>
            </DepLevel>
          </Analytics>
        </Container>
      </IconContext.Provider>
    </>
  );
};

export default KeywordInfo;
