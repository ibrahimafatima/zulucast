import React, { Component } from "react";

class Template extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div style={{ margin: "0 auto", display: "table" }}>
          <h1>Home of Zulucast</h1>
          <video id="myVideo" controls width="500px">
            <source
              src="https://storage.cloud.google.com/zulu_bucket/2002.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </React.Fragment>
    );
  }
}

export default Template;
