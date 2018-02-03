'use strict';

// IMPORT REACT
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Header from './components/layout/Header';

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
      <Route exact path="/" component={App} />
      <Route component={NotFound} />
    </Switch>
  </App>
);

export default routes;
