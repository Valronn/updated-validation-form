import React from "react";
import { Link } from "react-router-dom";
export default class Login extends React.Component {

  state = {
    password: "",
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
    const loggingUser = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(loggingUser);
  };
  render() {
    const{errors} = this.state.errors;
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
                style={{  height: "70%" }}
              />
              <div className="card register-window col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <h1 className="card-title text-center pt-2">Log in</h1>
                <div className="underline" />
                <form onSubmit={this.onSubmit}>
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
                    <label
                      htmlFor="password"
                      className="bmd-label-static"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
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
