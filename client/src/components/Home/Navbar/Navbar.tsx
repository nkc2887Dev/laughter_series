import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
            <li className="nav-item active mr-4">
              <Link
                className="nav-link"
                to="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item active mr-4">
              <Link
                className="nav-link"
                to="#"
              >
                Features
              </Link>
            </li>
            <li className="nav-item active mr-4">
              <Link
                className="nav-link"
                to="#"
              >
                Pricing
              </Link>
            </li>
          </ul>
          <Link
            className="navbar-brand"
            to=""
          >
            <img
              src="/logo.png"
              alt="LOGO"
              width="30"
              height="30"
            />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
