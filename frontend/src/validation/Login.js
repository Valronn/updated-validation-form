import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";
import isEmpty from "is-empty";

class Login extends React.Component {
  state = {
    password: "",
    email: "",
    errors: {}
  };

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/home');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
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
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
    console.log(this.state)
  };
  render() {
    const { errors } = this.state;
    return (
      <div>
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
                style={{ height: "70%" }}
              />
              <div className="card register-window col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <h1 className="card-title text-center pt-2">Log in</h1>
                <div className="underline" />
                <form noValidate onSubmit={this.onSubmit}>
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
                              "is-invalid": errors.email || errors.emailnotfound  
                            })
                      }
                      id="email"
                      onChange={this.onChange}
                    />
                    <div className="invalid-feedback">
                      {errors.email}
                      {"  "}
                      {errors.emailnotfound}
                    </div>
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
                              "is-invalid":
                                errors.password || errors.passwordincorrect
                            })
                      }
                      id="password"
                      onChange={this.onChange}
                    />
                    <div className="invalid-feedback">
                      {errors.password} {errors.passwordincorrect}
                    </div>
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

                    <button
                      type="submit"
                      className="btn btn-raised btn-primary"
                    >
                      Log in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
