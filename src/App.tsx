import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
