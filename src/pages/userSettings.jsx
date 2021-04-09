import React, { Component } from "react";
import Footer from "../components/footer/footer";
import Sidebar from "../components/sideAndNavbar/sidebar";
import Navbar from "../components/sideAndNavbar/navbar";
import upload from "../assets/images/upload.png";
import { BiEditAlt } from "react-icons/bi";
import { updateProfilePicture } from "../services/usersService";
import WithSpinner from "../components/spinner/withSpinner";
import { getCurrentUser } from "./../services/authServices";
import { getUser } from "../services/usersService";
import { toast, ToastContainer } from "react-toastify";
import { NavLink } from "react-router-dom";

class UserSettings extends Component {
  state = {
    showModal: false,
    picture: false,
    isLoading: false,
    src: false,
    data: {},
  };

  hideModal = () => {
    document.body.classList.remove("menu-open");
    this.setState({ showModal: false });
  };

  handlePictureSelect = (e) => {
    var picture = e.target.files[0];
    var src = URL.createObjectURL(picture);
    this.setState({ picture, src });
  };

  handleUpload = async () => {
    try {
      this.setState({ isLoading: true });
      const formData = new FormData();
      formData.append(
        "file",
        this.state.picture,
        `${getCurrentUser().email}.png`
      );
      await updateProfilePicture(formData);
      toast.success("Profile picture successfully updated...");
      this.setState({ isLoading: false });
    } catch (ex) {
      //if (ex.response && ex.response.status === 400) toast(ex.response.data);
      this.setState({ isLoading: false });
    }
  };

  async componentDidMount() {
    document.title = "ZuluCast | User Settings";
    if (getCurrentUser()) {
      const { data } = await getUser(getCurrentUser().email);
      this.setState({ data });
    }
  }

  render() {
    const { src, isLoading } = this.state;
    const { username, profileURL, email } = this.state.data;
    return isLoading ? (
      <WithSpinner />
    ) : (
      <React.Fragment>
        <div id="body-overlay" onClick={() => this.hideModal()}></div>
        <Sidebar />
        <Navbar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px",
            marginTop: "120px",
          }}
        >
          <div className="circle">
            {src ? (
              <img className="profile-pic" src={src} alt="" />
            ) : (
              <img className="profile-pic" src={profileURL} alt="" />
            )}
          </div>
          <div className="p-image" style={{ marginLeft: "-36px" }}>
            <label htmlFor="image">
              <img src={upload} alt="" width="40px" height="40px" />
            </label>
            <input
              type="file"
              id="image"
              onChange={this.handlePictureSelect}
              hidden
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0px",
          }}
        >
          <span className="labels">Username</span>
          <br />
          <h4 className="val">{username}</h4>
          <br />
          <NavLink to="/update-username">
            <BiEditAlt
              className="val2"
              size="24px"
              color="#fff"
              title="edit username"
            />
          </NavLink>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0px",
          }}
        >
          <span className="labels">Email</span>
          <br />
          <h4 className="val">{email}</h4>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0px",
          }}
        >
          <span className="labels">Passowrd</span>
          <br />
          <h4 className="val">*************</h4>
          <br />
          <NavLink to="/reset-password">
            <BiEditAlt
              className="val2"
              size="24px"
              color="#fff"
              title="reset password"
            />
          </NavLink>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0px",
          }}
        >
          <button
            style={{
              backgroundColor: "#d02b87",
              maxWidth: "300px",
            }}
            onClick={this.handleUpload}
            className={`btn btn-primary btn-lg w-100 ${!src && "disabled"}`}
          >
            Update Profile
          </button>
        </div>
        <div className="mt-3 d-block"></div>
        <Footer />
        <ToastContainer />
      </React.Fragment>
    );
  }
}

export default UserSettings;
