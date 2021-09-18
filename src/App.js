import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Playlist from "./pages/playlist";
import Register from "./pages/register";
import Logout from "./pages/logout";
import Player from "./pages/player";
import Success from "./pages/success";
import UserSettings from "./pages/userSettings";
import ResetPassword from "./pages/resetPassword";
import { ToastContainer } from "react-toastify";
import { getCurrentUser } from "./services/authServices";
import ResetUsername from "./pages/resetUsername";
import WatchLater from "./pages/watchLater";
import ForgotPassword from "./pages/forgotPassword";
import MailSentConfirmation from "./pages/mailSentConfirmation";
import ModifyPassword from "./pages/modifyPassword";
import SuccessFinal from "./pages/successFinal";
import Failure from "./pages/failure";
import NotFound from "./pages/notFound";
import AboutUs from "./pages/aboutUs";
import { Online, Offline } from "react-detect-offline";

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
    if ("zulu_watch_later" in localStorage) {
      console.log("Exist 2 ...");
    } else {
      localStorage.setItem("zulu_watch_later", JSON.stringify([]));
    }
  }

  render() {
    return (
      <React.Fragment>
        <Online>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Home} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route
              exact
              path="/confirm-mail"
              component={MailSentConfirmation}
            />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/watch-later" component={WatchLater} />
            <Route
              exact
              path="/settings"
              component={getCurrentUser() ? UserSettings : Login}
            />
            <Route
              exact
              path="/playlist"
              component={getCurrentUser() ? Playlist : Login}
            />
            <Route
              exact
              path="/player"
              component={getCurrentUser() ? Player : Login}
            />
            <Route exact path="/success" component={Success} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/failure" component={Failure} />
            <Route exact path="/success-final" component={SuccessFinal} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route
              exact
              path="/modify-password/:id"
              component={ModifyPassword}
            />
            <Route
              exact
              path="/update-username"
              component={getCurrentUser() ? ResetUsername : Login}
            />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
            <ToastContainer />
          </Switch>
        </Online>
        <Offline>
          <h3 style={{ textAlign: "center", marginTop: "80px" }}>
            Please check your internet connection
          </h3>
        </Offline>
      </React.Fragment>
    );
  }
}

export default App;
