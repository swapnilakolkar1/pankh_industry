// this componenet handles the app template used on every page.
import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink, withRouter } from "react-router-dom";
import birdLogo from "../../resources/img/bird_logo.jpg";
class Header extends React.Component {
  constructor(props, conntext, history) {
    debugger;
    super(props);
    this.searchRef = React.createRef();
    this.SearchContent = this.SearchContent.bind(this);
  }

  SearchContent() {
    debugger;
    let searchfor = this.searchRef.current.value;

    this.props.history.push(`/${searchfor}`);
  }

  render() {
    debugger;
    const time = new Date(this.props.date);

    return (
      <nav className="navbar fixed-nav navbar-expand-lg navbar-light bg-light">
        <img
          src={birdLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        <Link className="navbar-brand " to="/">
          PANKH INDUSTRIES
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="navbar-brand " to="/">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/courses">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/aboutus">
                About
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              ref={this.searchRef}
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={this.SearchContent}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
Header.propTypes = {
  date: PropTypes.instanceOf(Date),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};
export default withRouter(Header);
