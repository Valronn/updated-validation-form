import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import VisitPage from "./components/pages/VisitPage";
import Register from "./validation/Register";
import Login from "./validation/Login";
import HomePage from "./components/pages/HomePage";
import {Provider} from 'react-redux';
import store from './store';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
          <Route exact path="/" component={() => <VisitPage/>} />
          <Route path="/register" component={() => <Register/>} />
          <Route path="/login" component={() => <Login/>} />
          <Route path="/home" component={() => <HomePage/>} />
      </Router>
      </Provider>
    );
  }
}
