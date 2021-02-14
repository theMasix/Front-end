import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./user/pages/Login";
import { isAuth } from "./user/function/authentication";
import StudentMain from "./user/pages/student/StudentMain";
import SemestersCourses from "./user/pages/student/SemestersCourses";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {
        <Route exact path="/login">
          <Login />
        </Route>
      }
      <Route exact path="/student">
        <StudentMain />
      </Route>
      <Route path="/student/courses">
        <SemestersCourses />
      </Route>
    </Switch>
  );
};

export default Routes;
