import React from "react";
import { Route, IndexRoute, Switch, Router } from "react-router-dom";
import Header from "./Components/common/Header";
import App from "./Components/App";
import HomePage from "./Components/Home/HomePage";
// import AboutPage from "./Components/About/AboutPage";
import CoursesPage from "./Components/courses/CoursesPage";

export default class MYroute extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <hr />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/courses" component={CoursesPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// <Route path="about" component={AboutPage} />;
