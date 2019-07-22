import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import VisitPage from "./components/pages/VisitPage";
import Register from "./validation/Register";
import Login from "./validation/Login";
import HomePage from "./components/pages/HomePage";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utilities/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./PrivateRoute";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));

  //Convert in ms
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={() => <VisitPage />} />
          <Route path="/register" component={() => <Register />} />
          <Route path="/login" component={() => <Login />} />
          <Switch>
            <PrivateRoute exact path="/home" component={HomePage} />{" "}
          </Switch>
        </Router>
      </Provider>
    );
  }
}
