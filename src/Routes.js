import React from 'react';
import { Switch, Route, } from "react-router-dom";
import Casos from './pages/casos/Casos';
import Testes from './pages/testes/Testes';
import Dicas from './pages/dicas/Dicas';
import Plantão from './pages/plantaoCovid/Plantao';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Casos} />
      <Route path="/Tests" component={Testes} />
      <Route path="/tips" component={Dicas} />
      <Route path="/Plato" component={Plantão} />
    </Switch>
  );
}

export default Routes;