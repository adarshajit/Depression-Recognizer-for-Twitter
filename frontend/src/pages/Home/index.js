import React from "react";

import {
  H1,
  P,
  HomeWrapper,
  HomeContainer,
  BoxGrid,
  Box,
  BoxItems,
  Text,
  UserIcon,
  LinkB,
  KeyIcon,
  QuillIcon,
  Img1,
  Img2,
  Img3,
  Img4,
} from "./homeElements";
import balls1 from "../../assets/ball1.svg";
import balls2 from "../../assets/ball2.svg";
const Home = () => {
  return (
    <>
      <HomeWrapper>
        <Img1 src={balls1} />
        <Img2 src={balls2} />
        <Img3 src={balls2} />
        <Img4 src={balls2} />
        <HomeContainer>
          <H1>Depression Recogniser</H1>
          <P>Check the presence of depression among the following</P>
          <BoxGrid>
            <LinkB to="/twitterHandle">
              <Box>
                <BoxItems>
                  <UserIcon />
                  <Text>Twitter User</Text>
                </BoxItems>
              </Box>
            </LinkB>
            <LinkB to="/tweet">
              <Box>
                <BoxItems>
                  <QuillIcon />
                  <Text>Tweet</Text>
                </BoxItems>
              </Box>
            </LinkB>
            <LinkB to="/keywords">
              <Box>
                <BoxItems>
                  <KeyIcon />
                  <Text>Keywords</Text>
                </BoxItems>
              </Box>
            </LinkB>
          </BoxGrid>
        </HomeContainer>
      </HomeWrapper>
    </>
  );
};

export default Home;
