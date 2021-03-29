import React, { Component } from "react";
import { connect } from "react-redux";

import SignIn from "../components/Signin";
import OrderNavbar from "../components/OrderNavbar";
import Menu from '../components/Menu';
import ScrollToTop from "../components/ScrollToTop";

class OrderPage extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        // don't show anything when the promise hasn't resolved
        return;
      case false:
        return (
          <div>
            <ScrollToTop />
            <SignIn />
          </div>
        );
      default:
        this.props.history.push("/");
    }
  }

  render() {
    return (
      <>
        <OrderNavbar />
        <Menu />
      </>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth }; // identical key value pair { auth: auth } = { auth }
}

export default connect(mapStateToProps)(OrderPage);
