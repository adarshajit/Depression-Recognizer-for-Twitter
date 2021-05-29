import React from "react";
import {
  GridContainer,
  Login,
  Img,
  P,
  Form,
  Input,
  Button,
} from "./HandleElements";
import Banner from "../../assets/wallpaper.png";

const UserId = () => {
  return (
    <>
      <GridContainer>
        <Login>
          <Form>
            <P>Enter your Twitter Handle</P>
            <Input />
            <Button>Submit</Button>
          </Form>
        </Login>
        <Img src={Banner} alt="twitter banner" />
      </GridContainer>
    </>
  );
};

export default UserId;
