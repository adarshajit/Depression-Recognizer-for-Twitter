import React from "react";
import { Link } from "react-router-dom";
import { H1, P, HomeContainer, BoxGrid, Box } from "./homeElements";
const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
