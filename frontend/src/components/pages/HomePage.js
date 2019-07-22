import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class HomePage extends React.Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div className="container">
        <div
          className="row d-flex align-items-center justify-content-center col-12"
          style={{ height: "100vh" }}
        >
          <div className="col-12">
            <h1 className="homeTitle">
              You are logged as <b style={{color:'#A46EB2'}}>{user.name}</b>
            </h1>
            <button
              type="btn"
              className="mx-auto btn btn-raised btn-primary logoutBtn"
              onClick={this.onLogoutClick}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(HomePage);
