import React, { Component } from "react";
import Footer from "../components/footer/footer";
import Sidebar from "../components/sideAndNavbar/sidebar";
import Navbar from "../components/sideAndNavbar/navbar";
import blackCoffee from "../assets/images/movies/black-coffee.png";

class Template extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div id="body-overlay" onClick={() => this.hideModal()}></div>
        <Sidebar />
        <Navbar />
        <div className="container cart-page">
          <h4 className="mb-5">My PlayList</h4>

          <div className="parent">
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/hypedup-4e4f6.appspot.com/o/rsz_ke7.jpg?alt=media"
              }
              className="child"
              height="170px"
              width="250px"
              alt=""
            />
            <img
              src={blackCoffee}
              className="child"
              height="170px"
              width="250px"
              alt=""
            />
          </div>
        </div>
        <Footer />
        {/* <div style={{ margin: "0 auto", display: "table" }}>
          <h1>Home of Zulucast</h1>
          <video id="myVideo" controls width="500px" >
            <source
              src="https://storage.cloud.google.com/zulu_bucket/2002.mp4"
              type="video/mp4" 
            />
          </video>
        </div> */}
      </React.Fragment>
    );
  }
}

export default Template;
