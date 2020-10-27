import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Country from "../components/Country";
import Main from "../components/Main";

const MainRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/country/:id" component={Country} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default MainRouter;
