import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  fetchMoviesAsync,
  fetchOrderAsync,
  fetchLongevityAsync,
} from "../redux/movies/movies.action";
//import { selectAllMovies } from "../redux/movies/movies.selector";
import { fetchUsersAsync } from "../redux/users/users.action";
import { fetchGenresAsync } from "../redux/moviesGenre/genres.action";
import { fetchCartItems } from "../redux/cart/cart.action";
import {
  selectLoadingStatus,
  selectLongevity,
  selectOrders,
} from "../redux/movies/movies.selector";
//import { selectAllGenres } from "../redux/moviesGenre/genres.selector";
import WithSpinner from "../components/spinner/withSpinner";
import { createStructuredSelector } from "reselect";

import AOS from "aos";
// import Featured from "../components/homePage/featured";
// import GhanainMovieSection from "../components/homePage/ghanainMovieSection";
// import KenyaMovieSection from "../components/homePage/kenyanMovieSection";
// import NigerianMovieSection from "../components/homePage/negirianMovieSection";
// import MostPopularMovieSection from "../components/homePage/mostPopularMovieSection";
import Sidebar from "../components/sideAndNavbar/sidebar";
import Navbar from "../components/sideAndNavbar/navbar";
import HeroSection from "../components/homePage/heroSection";
import ReadyToWatch from "../components/homePage/readyToWatch";
import Faqs from "../components/homePage/faqs";
import Footer from "../components/footer/footer";
import { ToastContainer } from "react-toastify";
import PaidMovies from "../components/homePage/paidMovies";
import Movies from "../components/homePage/movies";
import "aos/dist/aos.css";
//import { getCurrentUser } from "../services/authServices";

class Home extends Component {
  state = {
    users: [],
    showModal: false,
    showProfileMenu: false,
  };

  hideModal = () => {
    document.body.classList.remove("menu-open");
    this.setState({ showModal: false });
  };

  async componentDidMount() {
    AOS.init();
    document.title = "Zulucast | Home";
    localStorage.removeItem("zulu_mail");
    const {
      fetchUsersAsync,
      fetchMoviesAsync,
      fetchCartItems,
      fetchLongevityAsync,
      fetchOrderAsync,
      fetchGenresAsync,
      orders,
    } = this.props;
    fetchGenresAsync();
    fetchUsersAsync();
    fetchMoviesAsync();
    fetchLongevityAsync();
    fetchOrderAsync();
    fetchCartItems(JSON.parse(localStorage.getItem("zulu_cart")) || []);
  }

  render() {
    const { isLoading, longevity, orders } = this.props;
    return isLoading ? (
      <WithSpinner />
    ) : (
      <React.Fragment>
        <div id="body-overlay" onClick={() => this.hideModal()}></div>
        <Sidebar />
        <Navbar />
        <HeroSection />
        {/* <!-- Movie slides --> */}
        <section className="pb-5 section2">
          <div className="container">
            <div className="row">
              {orders.length !== 0 && <PaidMovies longevity={longevity} />}
              <Movies longevity={longevity} />
              {/* <Featured longevity={longevity} />
              <GhanainMovieSection longevity={longevity} />
              <KenyaMovieSection longevity={longevity} />
              <NigerianMovieSection longevity={longevity} />
              <MostPopularMovieSection longevity={longevity} /> */}
            </div>
          </div>
        </section>
        <Faqs />
        <ReadyToWatch />
        <Footer />
        <ToastContainer />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsersAsync: () => dispatch(fetchUsersAsync()),
  // fetchUserAsync: (email) => dispatch(fetchUserAsync(email)),
  fetchMoviesAsync: () => dispatch(fetchMoviesAsync()),
  fetchGenresAsync: () => dispatch(fetchGenresAsync()),
  fetchOrderAsync: () => dispatch(fetchOrderAsync()),
  fetchLongevityAsync: () => dispatch(fetchLongevityAsync()),
  fetchCartItems: (items) => dispatch(fetchCartItems(items)),
});

const mapStateToProps = createStructuredSelector({
  isLoading: selectLoadingStatus,
  longevity: selectLongevity,
  orders: selectOrders,
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home);
