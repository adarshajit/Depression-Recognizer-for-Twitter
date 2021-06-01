import React from "react";

import {
  GridContainer,
  Analytics,
  P,
  RecentTweets,
  OtherData,
  Box,
  P2,
  OtherWrapper,
  BoxWrapper,
  Sub,
} from "./UserElements";

import * as HiIcons from "react-icons/hi";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import TweetSlider from "../RecentTweets";
import Chart from "../Chart/index";

const UserInfo = () => {
  return (
    <>
      <IconContext.Provider value={{ fill: "#fff" }}>
        <GridContainer>
          <Analytics>
            <P>Analytics</P>
            <Chart />
          </Analytics>

          <RecentTweets>
            <P>Recent Tweets</P>
            <TweetSlider />
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
                    }}
                  />
                  <Sub>Followers</Sub>
                </div>
                <div>
                  <h1>23</h1>
                </div>
              </BoxWrapper>
            </Box>
            <Box>
              <BoxWrapper>
                <div>
                  <FaIcons.FaUserCheck
                    style={{ fill: "#1DA1F2", fontSize: "32px" }}
                  />
                  <Sub>Following</Sub>
                </div>
                <div>
                  <h1>46</h1>
                </div>
              </BoxWrapper>
            </Box>
            <Box>
              <BoxWrapper>
                <div>
                  <BiIcons.BiMessageAltEdit
                    style={{ fill: "#1DA1F2", fontSize: "32px" }}
                  />
                  <Sub>No of posts</Sub>
                </div>
                <div>
                  <h1>45</h1>
                </div>
              </BoxWrapper>
            </Box>
          </OtherWrapper>
        </OtherData>
      </IconContext.Provider>
    </>
  );
};

export default UserInfo;
