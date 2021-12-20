import { Switch, Route, Redirect } from "react-router";

import getClima from "../core/getClima";
import Home from "../components/home/Home";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Clima" component={getClima} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default Routes;
