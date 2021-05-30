import React from "react";

import {
  GridContainer,
  AccountSummary,
  P,
  RecentTweets,
  Data,
  OtherData,
  Number,
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

const UserInfo = () => {
  return (
    <>
      <IconContext.Provider value={{ fill: "#fff" }}>
        <GridContainer>
          <AccountSummary>
            <P>Account Summary</P>
          </AccountSummary>
          <Data>
            <Number>23</Number>
            <Number>23</Number>
          </Data>
          <RecentTweets>
            <P>Recent Tweets</P>
          </RecentTweets>
        </GridContainer>
        <OtherData>
          <OtherWrapper>
            <P2>Analytics</P2>
            <Box>
              <BoxWrapper>
                <div>
                  <HiIcons.HiUsers
                    style={{
                      fill: "#14402b",
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
                    style={{ fill: "#14402b", fontSize: "32px" }}
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
                    style={{ fill: "#14402b", fontSize: "32px" }}
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
