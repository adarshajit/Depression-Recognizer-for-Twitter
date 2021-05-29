import React from "react";
import {
  GridContainer,
  Login,
  Img,
  P,
  Form,
  Input,
  Button,
} from "./TweetElements";

import Banner from "../../assets/wallpaper.png";

const Tweet = () => {
  return (
    <>
      <GridContainer>
        <Login>
          <Form>
            <P>Enter your Tweet</P>
            <Input />
            <Button>Submit</Button>
          </Form>
        </Login>
        <Img src={Banner} alt="twitter banner" />
      </GridContainer>
    </>
  );
};

export default Tweet;
