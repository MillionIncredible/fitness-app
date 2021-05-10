/* eslint-disable arrow-body-style */
import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import NavigationBar from "./components/NavigationBar";

import GlobalStyle from "./globalStyles";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Route path="/" exact component={Home} />
      <Route path="/browse" component={Browse} />
      <Route path="/profile" component={Profile} />
      <NavigationBar />
    </div>
  );
}

export default App;
