import React from "react";

import {
  GridContainer,
  AccountSummary,
  RecentTweets,
  Data,
  OtherData,
  Number,
} from "./UserElements";

const UserInfo = () => {
  return (
    <>
      <GridContainer>
        <AccountSummary>AccountSummary</AccountSummary>
        <Data>
          <Number>23</Number>
          <Number>23</Number>
        </Data>
        <RecentTweets>Recent Tweets</RecentTweets>
      </GridContainer>
      <OtherData>Analytics</OtherData>
    </>
  );
};

export default UserInfo;
