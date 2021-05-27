import React from "react";
import { Link } from "react-router-dom";
import {
  H1,
  P,
  HomeWrapper,
  HomeContainer,
  BoxGrid,
  Box,
} from "./homeElements";
const Home = () => {
  return (
    <>
      <HomeWrapper>
        <HomeContainer>
          <H1>Depression Recogniser</H1>
          <P>Check the depression of the following</P>
          <BoxGrid>
            <Link to="/user">
              <Box></Box>
            </Link>
            <Box></Box>
            <Box></Box>
          </BoxGrid>
        </HomeContainer>
      </HomeWrapper>
    </>
  );
};

export default Home;
