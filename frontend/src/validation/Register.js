import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";
import isEmpty from "is-empty";

class Register extends React.Component {
  state = {
    name: "",
    password: "",
    password2: "",
    email: "",
    errors: {}
  };
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <div id="register" className="container-fluid">
        <div className="container">
          <div
            className="row d-flex align-items-center justify-content-center col-12"
            style={{ height: "100vh" }}
          >
            <img
              src="https://i.ibb.co/MCLMRmC/white-outline-3px.png"
              className="img-fluid register-img mx-auto col-md-6 col-lg-6 col-sm-12 col-xs-12"
              alt="WC logo"
              style={{ width: "100%", height: "70%" }}
            />
            <div className="card register-window col-md-6 col-lg-6 col-sm-12 col-xs-12">
              <h1 className="card-title text-center pt-2">Register</h1>
              <div className="underline" />
              <form noValidate onSubmit={this.onSubmit}>
                <fieldset className="form-group bmd-form-group">
                  <label htmlFor="username" className="bmd-label-static">
                    Username
                  </label>
                  <input
                    type="text"
                    className={
                      isEmpty(errors)
                        ? "form-control"
                        : classnames("form-control", {
                            "is-invalid": errors.name
                          })
                    }
                    id="username"
                    onChange={this.onChange}
                  />
                  <div className="invalid-feedback">{errors.name}</div>
                </fieldset>
                <div className="form-group bmd-form-group">
                  <label htmlFor="email" className="bmd-label-static">
                    Email
                  </label>
                  <input
                    type="email"
                    className={
                      isEmpty(errors)
                        ? "form-control"
                        : classnames("form-control", {
                            "is-invalid": errors.email
                          })
                    }
                    id="email"
                    onChange={this.onChange}
                  />
                  <div className="invalid-feedback">{errors.email}</div>
                </div>
                <div className="form-group bmd-form-group">
                  <label htmlFor="password" className="bmd-label-static">
                    Password
                  </label>
                  <input
                    type="password"
                    className={
                      isEmpty(errors)
                        ? "form-control"
                        : classnames("form-control", {
                            "is-invalid": errors.password
                          })
                    }
                    id="password"
                    onChange={this.onChange}
                  />
                  <div className="invalid-feedback">{errors.password}</div>
                </div>
                <div className="form-group bmd-form-group">
                  <label htmlFor="password2" className="bmd-label-static">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className={
                      isEmpty(errors)
                        ? "form-control"
                        : classnames("form-control", {
                            "is-invalid": errors.password2
                          })
                    }
                    id="password2"
                    onChange={this.onChange}
                  />
                  <div className="invalid-feedback">{errors.password2}</div>
                </div>
                <div className="d-flex justify-content-end">
                  <Link to="/">
                    <button
                      type="btn"
                      className="btn btn-light btn-lg btn-ripple mr-2"
                    >
                      Cancel
                    </button>
                  </Link>
                  <button type="submit" className="btn btn-raised btn-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
