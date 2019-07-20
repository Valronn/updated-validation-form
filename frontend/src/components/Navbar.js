import React from "react";
import { Link } from "react-router-dom";
export default class Navbar extends React.Component {
  state = {
    toggler: false
  };
  onClick = () => {
    this.setState({
      toggler: !this.state.toggler
    });
  };
  render() {
    return (
      <div id='mainNav'>
        <nav className="navbar sticky-top navbar-expand-lg">
          <Link className="navbar-brand" to="/">
            <i className="fas fa-gamepad" />
          </Link>
          <button
            onClick={this.onClick}
            className={
              this.state.toggler ? "navbar-toggler change" : "navbar-toggler"
            }
            type="button"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <div className="toggler-btn">
              <div className="bar bar1" />
              <div className="bar bar2" />
              <div className="bar bar3" />
            </div>
          </button>
        </nav>
      </div>
    );
  }
}
