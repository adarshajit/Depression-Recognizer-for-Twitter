import React, { useState } from "react";
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
} from "./KeywordElements";
import Banner from "../../assets/wallpaper.png";
import { IconContext } from "react-icons/lib";

import { useHistory } from "react-router-dom";

const Keyword = () => {
  const [keyword, setkeyword] = useState("");

  const history = useHistory();

  const handleSubmit = (event) => {
    var data = new FormData();
    data.append("keyword", keyword);
    fetch("https://depression-recognizer.herokuapp.com/api/keywords/", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((response) => {
        history.push("/keywordDash", { analysis: response });
      });
    event.preventDefault();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <GridContainer>
          <Login>
            <Form onSubmit={handleSubmit}>
              <P>Enter your Keyword</P>
              <Input onChange={(e) => setkeyword(e.target.value)} />
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

export default Keyword;
