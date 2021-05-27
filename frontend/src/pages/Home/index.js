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
} from "./homeElements";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <HomeContainer>
          <H1>Depression Recogniser</H1>
          <P>Check the presence of depression among the following</P>
          <BoxGrid>
            <LinkB to="/user">
              <Box>
                <BoxItems>
                  <UserIcon />
                  <Text>Twitter User</Text>
                </BoxItems>
              </Box>
            </LinkB>
            <Box>
              <BoxItems>
                <UserIcon />
                <Text>Tweet</Text>
              </BoxItems>
            </Box>
            <Box>
              <BoxItems>
                <KeyIcon />
                <Text>Keywords</Text>
              </BoxItems>
            </Box>
          </BoxGrid>
        </HomeContainer>
      </HomeWrapper>
    </>
  );
};

export default Home;
