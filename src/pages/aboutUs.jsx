import React, { Component } from "react";
import Footer from "../components/footer/footer";
import Sidebar from "../components/sideAndNavbar/sidebar";
import Navbar from "../components/sideAndNavbar/navbar";

class AboutUs extends Component {
  state = { showModal: false };

  hideModal = () => {
    document.body.classList.remove("menu-open");
    this.setState({ showModal: false });
  };

  componentDidMount() {
    document.title = "ZuluCast | About Us";
  }
  render() {
    return (
      <React.Fragment>
        <div id="body-overlay" onClick={() => this.hideModal()}></div>
        <Sidebar />
        <Navbar />
        <section style={{ marginLeft: "100px", marginRight: "100px" }}>
          <h1 style={{ marginTop: "100px", color: "#C8287F" }}>
            <u>About Us</u>
          </h1>
          <br />
          <br />
          <h5 style={{ marginBottom: "200px" }}>
            Zulucast Inc is a destination for amazing African entertainment. We
            have an extensive and rich library of pay-per-view movies and TV
            shows which is regularly updated to bring the best of quality
            content to your fingertips.
          </h5>
          <br />
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AboutUs;
