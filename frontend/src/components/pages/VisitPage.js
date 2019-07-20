import React from "react";
import { Link } from "react-router-dom";
export default class VisitPage extends React.Component {
  render() {
    return (
      <div id="visit" className="container-fluid visit text-center">
        <h1 className="title mb-5">White Crystal</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
            <img
              src="https://i.ibb.co/MCLMRmC/white-outline-3px.png"
              className="img-fluid main-image"
              alt="Responsive logo white crystal"
            />
            <p
              className="text-center text-capitalize title"
              style={{ "fontSize": "30px" }}
            >
              nothing redundant
            </p>
            <div className="d-flex justify-content-center">
              <div className="col-sm-4 col-md-4 col-lg-4 pb-3">
                <Link to="/register">
                  <button className="btn btn-light btn-lg btn-ripple">
                    Register
                  </button>
                </Link>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 pb-3">
                <Link to="/home">
                  <button className="btn btn-transparent btn-lg btn-ripple">
                    Home
                  </button>
                </Link>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 pb-3">
                <Link to="/login">
                  <button className="btn btn-light btn-lg btn-ripple">
                    Log in
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
