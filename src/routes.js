import React from "react";
import { Switch, Route } from "react-router-dom";
import StatusCasos from "./pages/statusCasos/index";
import StatusVacina from "./pages/statusVacina/index";
import Dicas from "./pages/prevention/index";
import NotFound from "./pages/notFound/index";
import Home from "./pages/home/index";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Casos" component={StatusCasos} />
      <Route path="/Vacinas" component={StatusVacina} />
      <Route path="/dicas" component={Dicas} />
      <Route path="**" component={NotFound} />
    </Switch>
  );
};

export default Routes;
