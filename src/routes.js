import React from "react";
import { Switch, Route } from "react-router-dom";
import StatusCasos from "./pages/statusCasos/index";
import StatusVacina from "./pages/statusVacina/index";
import Dicas from "./pages/dicas/Dicas";
import NotFound from "./pages/notFound/index";
import Home from "./pages/home/home";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/statusCasos" component={StatusCasos} />
      <Route path="/statusVacinacao" component={StatusVacina} />
      <Route path="/dicas" component={Dicas} />
      <Route path="**" component={NotFound} />
    </Switch>
  );
};

export default Routes;
