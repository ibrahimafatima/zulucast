import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMoviesAsync } from "../redux/movies/movies.action";
import { fetchUsersAsync } from "../redux/users/users.action";
import { fetchGenresAsync } from "../redux/moviesGenre/genres.action";
import { fetchCartItems } from "../redux/cart/cart.action";

import AOS from "aos";
import Featured from "../components/homePage/featured";
import GhanainMovieSection from "../components/homePage/ghanainMovieSection";
import KenyaMovieSection from "../components/homePage/kenyanMovieSection";
import NigerianMovieSection from "../components/homePage/negirianMovieSection";
import MostPopularMovieSection from "../components/homePage/mostPopularMovieSection";
import Sidebar from "../components/sideAndNavbar/sidebar";
import Navbar from "../components/sideAndNavbar/navbar";
import HeroSection from "../components/homePage/heroSection";
import ReadyToWatch from "../components/homePage/readyToWatch";
import Faqs from "../components/homePage/faqs";
import Footer from "../components/footer/footer";
import "aos/dist/aos.css";

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
    const { fetchUsersAsync, fetchMoviesAsync, fetchCartItems } = this.props;
    fetchUsersAsync();
    fetchMoviesAsync();
    fetchGenresAsync();
    fetchCartItems(JSON.parse(localStorage.getItem("zulu_cart")) || []);
  }
  render() {
    return (
      <React.Fragment>
        <div id="body-overlay" onClick={() => this.hideModal()}></div>
        <Sidebar />
        <Navbar />
        <HeroSection />
        {/* <!-- Movie slides --> */}
        <section className="py-5 section2">
          <div className="container">
            <div className="row">
              <Featured />
              <GhanainMovieSection />
              <KenyaMovieSection />
              <NigerianMovieSection />
              <MostPopularMovieSection />
            </div>
          </div>
        </section>
        <Faqs />
        <ReadyToWatch />
        <Footer />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsersAsync: () => dispatch(fetchUsersAsync()),
  fetchMoviesAsync: () => dispatch(fetchMoviesAsync()),
  fetchGenresAsync: () => dispatch(fetchGenresAsync()),
  fetchCartItems: (items) => dispatch(fetchCartItems(items)),
});

export default connect(null, mapDispatchToProps)(Home);
