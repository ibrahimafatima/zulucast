import React, { Component } from "react";
// import CartTableHeader from "./cartTableComponent/cartTableHeader";
// import Checkout from "./cartTableComponent/checkout";
import WatchLaterRow from "./watchLaterComponent/watchLaterRow";
import WatchLaterHeader from "./watchLaterComponent/watchLaterHeader";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectLaterMovies } from "../../redux/cart/cart.selector";
import "../../stylesheets/cart.css";

class WatchLaterTable extends Component {
  state = {};
  render() {
    const { laterMovies } = this.props;
    return (
      <React.Fragment>
        <div className="container cart-page">
          <h1 className="mb-5">Watch Later Movies</h1>

          <div className="card bg-light-black border-0">
            <div className="card-body">
              {laterMovies.length > 0 ? (
                <div className="shopping-cart">
                  <WatchLaterHeader />
                  <WatchLaterRow />
                </div>
              ) : (
                <div className="shopping-cart">
                  <h1>No Movies to watch later.</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  laterMovies: selectLaterMovies,
});

export default connect(mapStateToProps)(WatchLaterTable);
