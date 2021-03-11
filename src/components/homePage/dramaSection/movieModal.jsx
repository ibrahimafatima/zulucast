import React, { Component } from "react";

class MovieModal extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          className="modal fade movie-details-modal"
          id="movie-details"
          tabIndex="-1"
          aria-labelledby="movie-details-label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="modal-details-image-box shadow">
                  <img src="assets/images/movies/black-coffee.png" alt="" />
                </div>
                <ul className="list-unstyled d-flex justify-content-between mt-3">
                  <li>
                    <button className="btn btn-default d-flex align-items-center">
                      <i className="fa fa-play-circle fa-lg me-2"></i>
                      <span>Resume</span>
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-default d-flex align-items-center">
                      <span>Add to List</span>
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-default d-flex align-items-center">
                      <span className="text-primary">Watch Later</span>
                    </button>
                  </li>
                </ul>
                <h5 className="fw-bolder">BLACK COFFEE</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas adipisci sit ipsa quasi est quam iusto tenetur, sed,
                  nulla esse minima ducimus error assumenda. Consectetur impedit
                  est architecto adipisci possimus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieModal;
