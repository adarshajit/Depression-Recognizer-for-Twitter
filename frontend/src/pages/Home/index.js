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
} from "./homeElements";

const Home = () => {
  return (
    <>
      <HomeWrapper>
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
