import React from "react";
import { Link } from "react-router-dom";
export default class Register extends React.Component {
  state = {
    name: "",
    password: "",
    password2: "",
    email: "",
    errors: {}
  };
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
    console.log(newUser);
  };
  render() {
    const { errors } = this.state.errors;
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
              <form onSubmit={this.onSubmit}>
                <fieldset className="form-group bmd-form-group">
                  <label htmlFor="username" className="bmd-label-static">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    onChange={this.onChange}
                  />
                </fieldset>
                <div className="form-group bmd-form-group">
                  <label htmlFor="email" className="bmd-label-static">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group bmd-form-group">
                  <label htmlFor="password" className="bmd-label-static">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group bmd-form-group">
                  <label htmlFor="password2" className="bmd-label-static">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password2"
                    onChange={this.onChange}
                  />
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
