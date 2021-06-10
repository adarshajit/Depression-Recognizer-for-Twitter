import React from "react";

import {
  Container,
  Analytics,
  P,
  DepLevel,
  Tweet,
  Profile,
  User,
  Img,
  P2,
  H1,
  P3,
} from "./keywordElements";

import { IconContext } from "react-icons/lib";

const KeywordInfo = ({ stats, tweets, depLevels }) => {
  // const depLevel = stats.depLevel;
  // var message = "";
  // if (depLevel <= 2) {
  //   message = "Not";
  // } else if (depLevel > 2 && depLevel <= 3.4) {
  //   message = "Mildly";
  // } else {
  //   message = "Highly";
  // }
  const ProfilePic = stats.profilePictures;

  return (
    <>
      <IconContext.Provider value={{ fill: "#fff" }}>
        <Container>
          <Analytics>
            {tweets.map((tweet, id) => {
              return (
                <Tweet>
                  <Profile>
                    <Img src={ProfilePic[id]} />
                    <User>
                      <P2>{stats.usernames[id]}</P2>
                      <p>@{stats.users[id]}</p>
                    </User>
                  </Profile>

                  <P>{tweet}</P>
                </Tweet>
              );
            })}
          </Analytics>
          <Analytics>
            {depLevels.map((level) => {
              return (
                <DepLevel>
                  <H1>Score</H1>
                  <P3>{level}/4</P3>
                </DepLevel>
              );
            })}
          </Analytics>
        </Container>
      </IconContext.Provider>
    </>
  );
};

export default KeywordInfo;
