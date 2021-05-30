import React from "react";
import {
  GridContainer,
  Login,
  P,
  Form,
  Input,
  Button,
  Display,
  Logo,
} from "./HandleElements";

import { IconContext } from "react-icons/lib";

const TwitterHandle = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <GridContainer>
          <Login>
            <Form>
              <P>Enter your Twitter Handle</P>
              <Input />
              <Button>Submit</Button>
            </Form>
          </Login>
          <Display>
            {/* <Img src={Banner} alt="twitter banner" /> */}
            <Logo />
          </Display>
        </GridContainer>
      </IconContext.Provider>
    </>
  );
};

export default TwitterHandle;
