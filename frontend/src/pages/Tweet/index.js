import React from "react";
import {
  GridContainer,
  Login,
  Img,
  P,
  Form,
  Input,
  Button,
  Display,
  Logo,
} from "./TweetElements";
import Banner from "../../assets/wallpaper.png";
import { IconContext } from "react-icons/lib";

const Tweet = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <GridContainer>
          <Login>
            <Form>
              <P>Enter your Tweet</P>
              <Input />
              <Button>Submit</Button>
            </Form>
          </Login>
          <Display>
            <Img src={Banner} alt="twitter banner" />
            <Logo />
          </Display>
        </GridContainer>
      </IconContext.Provider>
    </>
  );
};

export default Tweet;
