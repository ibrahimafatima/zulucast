import React, { Component } from "react";
import Footer from "../components/footer/footer";
import Sidebar from "../components/sideAndNavbar/sidebar";
import Navbar from "../components/sideAndNavbar/navbar";

import { connect } from "react-redux";
import { fetchWatchLater } from "../redux/cart/cart.action";
import WatchLaterTable from "../components/watchLater/watchLaterTable";

class WatchLater extends Component {
  state = { showModal: false };

  hideModal = () => {
    document.body.classList.remove("menu-open");
    this.setState({ showModal: false });
  };

  componentDidMount() {
    document.title = "ZuluCast | Cart";
    const { fetchWatchLater } = this.props;
    fetchWatchLater(JSON.parse(localStorage.getItem("zulu_watch_later")) || []);
  }

  render() {
    return (
      <React.Fragment>
        <div id="body-overlay" onClick={() => this.hideModal()}></div>
        <Sidebar />
        <Navbar />
        <WatchLaterTable />
        <Footer />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchWatchLater: (items) => dispatch(fetchWatchLater(items)),
});

export default connect(null, mapDispatchToProps)(WatchLater);
