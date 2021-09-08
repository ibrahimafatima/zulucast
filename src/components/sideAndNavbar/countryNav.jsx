import React, { Component } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { findFlagUrlByCountryName } from "country-flags-svg";
import { selectAllLanguages } from "../../redux/country/country.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchLanguageAsync } from "../../redux/country/country.action";
import { toast } from "react-toastify";

class CountryNav extends Component {
  state = {};

  componentDidMount() {
    const { fetchLanguageAsync } = this.props;
    fetchLanguageAsync();
  }

  render() {
    const { allLanguages } = this.props;
    let name = "ghana";
    name =
      "zulu_country" in localStorage
        ? (name = localStorage.getItem("zulu_country"))
        : allLanguages[0]
        ? allLanguages[0].countryName
        : "ghana";
    const initialFlag = findFlagUrlByCountryName(name);
    return (
      <React.Fragment>
        <li className="nav-item">
          <button
            className="btn btn-default d-flex align-items-center"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() =>
              this.setState({
                showCountriesMenu: !this.state.showCountriesMenu,
              })
            }
          >
            {/* <span className="me-3"> */}
            <img src={initialFlag} alt="flag" height="20" width="28" />
            {/* </span> */}
            <MdArrowDropDown />
          </button>
          <ul
            className={
              this.state.showCountriesMenu
                ? "dropdown-menu dropdown-menu-end show"
                : "dropdown-menu dropdown-menu-end"
            }
          >
            {allLanguages.map((m, i) => (
              <li key={i} style={{ cursor: "pointer" }}>
                <a
                  className="dropdown-item"
                  onClick={() => {
                    localStorage.setItem("zulu_country", m.countryName);
                    localStorage.setItem("zulu_language", m.language);
                    this.setState({ showCountriesMenu: false });
                    toast.success(
                      `Language successfuly set to ${m.countryName} - ${m.language}`
                    );
                    setTimeout(() => (window.location = "/"), 2000);
                  }}
                >
                  <span>
                    <img
                      src={findFlagUrlByCountryName(m.countryName)}
                      alt="flag"
                      height="15"
                      width="22"
                    />
                  </span>{" "}
                  {m.countryName} ({m.language})
                </a>
              </li>
            ))}
          </ul>
        </li>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  allLanguages: selectAllLanguages,
});

const mapDispatchToProps = (dispatch) => ({
  fetchLanguageAsync: () => dispatch(fetchLanguageAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryNav);
