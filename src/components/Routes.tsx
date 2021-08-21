import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import About from '../pages/About';
import Contact from '../pages/Contact';
import Homepage from '../pages/Homepage'; 
import PageNotFound from '../pages/PageNotFound';
import Works from '../pages/Works';

const Routes = () => {

  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/work" component={Works} />
      <Route component={PageNotFound} />
    </Switch>
  );

}

export default Routes;