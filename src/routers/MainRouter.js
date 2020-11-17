import React, { useContext } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Country from "../components/Country";
import Main from "../components/Main";
import { MainContext } from "../context/MainContext";

const MainRouter = () => {
  const { darkMode } = useContext(MainContext);

  return (
    <Router>
      <div
        className={`${darkMode ? "scheme-dark" : ""} h-screen flex flex-col`}
      >
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
