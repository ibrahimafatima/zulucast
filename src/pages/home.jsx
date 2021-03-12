import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsersAsync } from "../redux/users/users.action";

import AOS from "aos";
import GhanainMovieSection from "../components/homePage/ghanainMovieSection";
import KenyaMovieSection from "../components/homePage/kenyanMovieSection";
import NigerianMovieSection from "../components/homePage/negirianMovieSection";
import DramaMovieSection from "../components/homePage/dramaSection/dramaMovies";
import MostPopularMovieSection from "../components/homePage/mostPopularMovieSection";
import Sidebar from "../components/sideAndNavbar/sidebar";
import Navbar from "../components/sideAndNavbar/navbar";
import HeroSection from "../components/homePage/heroSection";
import BestPick from "../components/homePage/bestPick";
import ReadyToWatch from "../components/homePage/readyToWatch";
import Faqs from "../components/homePage/faqs";
import Footer from "../components/footer/footer";
import MovieModal from "../components/homePage/dramaSection/movieModal";
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
    const { fetchUsersAsync } = this.props;
    fetchUsersAsync();
  }
  render() {
    return (
      <React.Fragment>
        <div id="body-overlay" onClick={() => this.hideModal()}></div>
        <Sidebar />
        <Navbar />
        <HeroSection />
        <DramaMovieSection />
        <GhanainMovieSection />
        <KenyaMovieSection />
        <NigerianMovieSection />
        <MostPopularMovieSection />
        <BestPick />
        <ReadyToWatch />
        <Faqs />
        <Footer />
        <MovieModal />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsersAsync: () => dispatch(fetchUsersAsync()),
});

export default connect(null, mapDispatchToProps)(Home);
