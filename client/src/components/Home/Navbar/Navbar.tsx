import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarText"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link
                className="nav-link"
                to=""
              >
                Home
              </Link>
            </li>
            <li className="btn-group dropleft">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/logo.png"
                  alt="LOGO"
                  width="30"
                  height="30"
                />
              </Link>
              <div className="dropdown-menu">
                <Link
                  className="dropdown-item"
                  to="/home/profile"
                >
                  Profile
                </Link>
                <Link
                  className="dropdown-item"
                  to="/home/joke"
                >
                  Post a joke
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
