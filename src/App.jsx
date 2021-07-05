/* eslint-disable arrow-body-style */
import React from 'react';
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import NavigationBar from "./components/NavigationBar";
import Program from "./components/Program";
import Registration from "./components/Registration/RegistrationStart";
import Login from './components/Login/Login';
import GlobalStyle from "./globalStyles";
import RegistrationStepOne from './components/Registration/RegistrationStepOne';


const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Route path="/" exact component={Home} />
      <Route path="/" exact component={NavigationBar} />
      <Route path="/browse" exact component={Browse} />
      <Route path="/browse" exact component={NavigationBar} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/profile" exact component={NavigationBar} />
      <Route path="/program/:slug" exact component={Program} />
      <Route path="/registration" exact component={Registration} />
      <Route path="/registrationStepOne" exact component={RegistrationStepOne} />
      <Route path="/login" exaxt component={Login} />
    </div>
  );
};

export default App;
