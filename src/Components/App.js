// this component handle the app template used on every page
import Header from "./common/Header";
import React, { Component } from "react";
import PropTypes from "prop-types";
class App extends Component {
  render() {
    debugger;
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
