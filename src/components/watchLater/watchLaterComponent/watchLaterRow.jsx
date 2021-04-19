import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { clearWatchLater, addToCart } from "../../../redux/cart/cart.action";
import { selectLaterMovies } from "../../../redux/cart/cart.selector";
import { toast, ToastContainer } from "react-toastify";

class WatchLaterRow extends Component {
  state = {};
  render() {
    const { laterMovies, clearWatchLater, addToCart } = this.props;
    return (
      <React.Fragment>
        {laterMovies.map((laterMovie, i) => (
          <div className="product" key={i}>
            <div className="product-image">
              <img src={laterMovie.moviePictureURL} alt="pic" />
            </div>
            <div className="product-details">
              <div className="product-title">{laterMovie.title}</div>
              <p className="product-description">{laterMovie.description}</p>
            </div>
            <div className="product-price">{laterMovie.price}</div>
            {/* <div className="product-quantity">
              <input
                className="form-control"
                onChange={() => {}}
                value={laterMovie.duration}
                min="1"
              ></input>
            </div> */}
            <div className="product-removal">
              <button
                className="btn btn-default"
                title="Remove this movie"
                onClick={() => {
                  clearWatchLater(laterMovie);
                  let newlaterMovies = JSON.parse(
                    localStorage.getItem("zulu_watch_later")
                  );
                  newlaterMovies = newlaterMovies.filter(
                    (c) => c._id !== laterMovie._id
                  );
                  localStorage.setItem(
                    "zulu_watch_later",
                    JSON.stringify([...newlaterMovies])
                  );
                }}
              >
                <i className="fa fa-times text-danger"></i>
              </button>
            </div>
            <div className="">
              <a
                className="btn btn-primary float-end mt-3 mt-md-5"
                onClick={() => {
                  addToCart(laterMovie);
                  toast(`${laterMovie.title} is added to your cart`);
                }}
              >
                Add To Cart
              </a>
            </div>
          </div>
        ))}
        <ToastContainer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  laterMovies: selectLaterMovies,
});

const mapDispatchToProps = (dispatch) => ({
  clearWatchLater: (itemToClear) => dispatch(clearWatchLater(itemToClear)),
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchLaterRow);
