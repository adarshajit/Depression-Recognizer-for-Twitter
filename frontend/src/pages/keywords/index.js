import React from "react";
import {
  GridContainer,
  Login,
  Img,
  P,
  Form,
  Input,
  Button,
} from "./KeywordElements";
import Banner from "../../assets/wallpaper.png";

const Keywords = () => {
  return (
    <>
      <GridContainer>
        <Login>
          <Form>
            <P>Enter your Keyword</P>
            <Input />
            <Button>Submit</Button>
          </Form>
        </Login>
        <Img src={Banner} alt="twitter banner" />
      </GridContainer>
    </>
  );
};

export default Keywords;
