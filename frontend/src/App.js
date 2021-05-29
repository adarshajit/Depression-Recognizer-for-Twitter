import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
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
          <Route path="/user" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
