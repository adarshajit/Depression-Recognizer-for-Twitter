import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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

  const [tweet, setTweet] = useState("")

  const history = useHistory()

  const handleSubmit = (event) => {
    var data = new FormData()
    data.append("tweet", tweet)
    fetch('https://depression-recognizer.herokuapp.com/api/tweet/', {
      method: "POST",
      body: data
    }).then(response => response.json())
    .then(response => {
      history.push('/tweetDash', {analysis: response})
    })
    event.preventDefault()
  }


  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <GridContainer>
          <Login>
            <Form onSubmit={handleSubmit}>
              <P>Enter your Tweet</P>
              <Input onChange={e => setTweet(e.target.value)}/>
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
