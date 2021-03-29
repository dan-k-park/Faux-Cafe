import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';


import Home from './pages';
import OrderPage from './pages/order';
import SigninPage from './pages/signin';

class App extends Component {

  componentDidMount() {
    // see export statement to see why fetchUser is available as props
    this.props.fetchUser()
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signin' render={props => <SigninPage {...props} />} exact />
          <Route path='/order' render={props => <OrderPage {...props} />} exact />
        </Switch>
      </Router>
    )
  }
}

export default connect(null, actions)(App);