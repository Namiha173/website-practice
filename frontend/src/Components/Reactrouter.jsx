import React from "react";
import Shop from "./Shop";
import Men from "./Men";
import Women from "./Women";
import Login from "./Login";
import Register from "./Register";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Reactrouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Shop} />
          <Route path="/Men" component={Men} />
          <Route path="/Women" component={Women} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default Reactrouter;
