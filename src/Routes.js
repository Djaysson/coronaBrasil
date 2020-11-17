import React from 'react';
import { Switch, Route, } from "react-router-dom";
import Cases from './pages/cases/Cases';
import Tests from './pages/tests/Tests';
import Tips from './pages/tips/Tips';
import Plato from './pages/plato/Plato';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Cases} />
      <Route path="/Tests" component={Tests} />
      <Route path="/Tips" component={Tips} />
      <Route path="/Plato" component={Plato} />
    </Switch>
  );
}

export default Routes;