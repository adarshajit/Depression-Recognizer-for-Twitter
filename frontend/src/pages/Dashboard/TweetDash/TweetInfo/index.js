import React from "react";

import {
  GridContainer,
  Analytics,
  P,
  StatsWrapper,
  H1,
  H3,
  RecentTweets,
  OtherData,
  Box,
  P2,
  OtherWrapper,
  BoxWrapper,
  Sub,
  Tweet,
  P1,
  P3,
} from "./tweetInfoElements";

import * as HiIcons from "react-icons/hi";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import { IconContext } from "react-icons/lib";

const TweetInfo = ({ stats }) => {
  const depLevel = stats.depLevel;
  var message = "";
  if (depLevel < 2) {
    message = "Not";
  } else if (depLevel >= 2 && depLevel <= 3.4) {
    message = "Mildly";
  } else {
    message = "Highly";
  }
  if (stats.followers >= 1000000) {
    stats.followers = String((Math.floor(stats.followers/100000))/10) + "M"
  } else if (stats.followers >= 1000 && stats.followers < 1000000) {
    stats.followers = String((Math.floor(stats.followers/100))/10) + "K"
  }
  if (stats.followees >= 1000000) {
    stats.followees = String((Math.floor(stats.followees/100000))/10) + "M"
  } else if (stats.followees >= 1000 && stats.followees < 1000000) {
    stats.followees = String((Math.floor(stats.followees/100))/10) + "K"
  }
  if (stats.postCount >= 1000000) {
    stats.postCount = String((Math.floor(stats.postCount/100000))/10) + "M"
  } else if (stats.postCount >= 1000 && stats.postCount < 1000000) {
    stats.postCount = String((Math.floor(stats.postCount/100))/10) + "K"
  }
  
  return (
    <>
      <IconContext.Provider value={{ fill: "#fff" }}>
        <GridContainer>
          <Analytics>
            <P>Analytics</P>
            <StatsWrapper>
              <H1>{`${Math.floor((depLevel / 4) * 100)}%`}</H1>

              <H3>{`The user is ${message} Depressed`}</H3>
            </StatsWrapper>
          </Analytics>

          <RecentTweets>
            <P1>Fetched Tweet</P1>
            <Tweet>
              <P3>{stats.tweet}</P3>
            </Tweet>
          </RecentTweets>
        </GridContainer>
        <OtherData>
          <OtherWrapper>
            <P2>Account Summary</P2>
            <Box>
              <BoxWrapper>
                <div>
                  <HiIcons.HiUsers
                    style={{
                      fill: "#1DA1F2",
                      fontSize: "32px",
                      marginLeft: "28px",
                    }}
                  />
                  <Sub>Followers</Sub>
                </div>
                <div>
                  <h1>{stats.followers}</h1>
                </div>
              </BoxWrapper>
            </Box>
            <Box>
              <BoxWrapper>
                <div>
                  <FaIcons.FaUserCheck
                    style={{
                      fill: "#1DA1F2",
                      fontSize: "32px",
                      marginLeft: "28px",
                    }}
                  />
                  <Sub>Following</Sub>
                </div>
                <div>
                  <h1>{stats.followees}</h1>
                </div>
              </BoxWrapper>
            </Box>
            <Box>
              <BoxWrapper>
                <div>
                  <BiIcons.BiMessageAltEdit
                    style={{
                      fill: "#1DA1F2",
                      fontSize: "32px",
                      marginLeft: "28px",
                    }}
                  />
                  <Sub>No of posts</Sub>
                </div>
                <div>
                  <h1>{stats.postCount}</h1>
                </div>
              </BoxWrapper>
            </Box>
          </OtherWrapper>
        </OtherData>
      </IconContext.Provider>
    </>
  );
};

export default TweetInfo;
