import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Template from "./pages/template";
import "./App.css";
import "./stylesheets/style.css";
import "./stylesheets/cart.css";
import Cart from "./pages/cart";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/template" component={Template} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
