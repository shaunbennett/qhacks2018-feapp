// IMPORT REACT
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import LandingPage from './components/pages/LandingPage/LandingPage';
import Header from './components/layout/Header/Header';
import LoginPage from './components/pages/LoginPage/LoginPage';
import CoursePage from './components/pages/CoursePage/CoursePage';
import CoursesPage from './components/pages/CoursesPage';

const Status = function({ code, children }) {
  return (
    <Route
      render={function({ staticContext }) {
        if (staticContext) staticContext.status = code;
        return children;
      }}
    />
  );
};

//NOT-FOUND COMPONENT
const NotFound = function() {
  return (
    <Status code={404}>
      <div>
        <h2> Sorry, cannot find this page</h2>
      </div>
    </Status>
  );
};

const routes = (
  <App>
    <Header />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/course" component={CoursePage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/courses/:course" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  </App>
);

export default routes;
