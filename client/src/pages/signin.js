import React, { Component } from "react";
import { connect } from 'react-redux';

import SignIn from "../components/Signin";
import Footer from '../components/Footer';
import ScrollToTop from "../components/ScrollToTop";

class SigninPage extends Component {

  renderContent() {
    switch(this.props.auth) {
      case null:
        // don't show anything when the promise hasn't resolved
        return;
      case false:
        return (
        <div>
          <ScrollToTop />
          <SignIn />
          <Footer />
        </div>
        )
      default:
        this.props.history.push('/')
    }
  }

  render() {
    return (
      <>
      {this.renderContent()}
      </>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth } // identical key value pair { auth: auth } = { auth }
}

export default connect(mapStateToProps)(SigninPage);