import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import UserDash from "./pages/Dashboard/UserDash";
import TweetDash from "./pages/Dashboard/TweetDash";
import TwitterHandle from "./pages/TwitterHandle";
import Tweet from "./pages/Tweet";
import Keywords from "./pages/keywords";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/twitterHandle" component={TwitterHandle} />
          <Route path="/tweet" component={Tweet} />
          <Route path="/keywords" component={Keywords} />
          <Route path="/userDash" component={UserDash} />
          <Route path="/tweetDash" component={TweetDash} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
