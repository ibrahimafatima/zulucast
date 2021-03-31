import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Template from "./pages/template";
import Cart from "./pages/cart";
import Playlist from "./pages/playlist";
import Register from "./pages/register";
import Logout from "./pages/logout";
import Player from "./pages/player";
import Success from "./pages/success";

import "react-toastify/dist/ReactToastify.css";
import "./stylesheets/style.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    if ("zulu_cart" in localStorage) {
      console.log("Exist ...");
    } else {
      localStorage.setItem("zulu_cart", JSON.stringify([]));
    }
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Route exact path="/template" component={Template} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/playlist" component={Playlist} />
          <Route exact path="/player" component={Player} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
