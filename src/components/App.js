import { Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import { history } from '../helpers/history';

import FeedPage from "./pages/FeedPage";


class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route  exact path="/" component={FeedPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);