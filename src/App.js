import React from 'react';
import { Route } from "react-router-dom";
import Home from './components/Home';
import Browse from './components/Browse';
import Profile from './components/Profile';

import GlobalStyle from './globalStyles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Route path="/" exact component={Home} /> 
      <Route path="/browse" component={Browse} />
      <Route path="/profile" component={Profile} /> 
    </div>
  );
}

export default App;
