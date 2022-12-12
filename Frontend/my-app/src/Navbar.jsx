import { FormControlLabel } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { MaterialUISwitch } from "./DashBoard/ThemBtn";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        &nbsp;
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        &nbsp;
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <Link className="navbar-brand" to="/">
            HOSPITAL
          </Link>

          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/ ">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./login">
                Sign Up/Login
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
            // label="Theam Mode"
          />
        </div>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        &nbsp; &nbsp;
      </nav>
    </div>
  );
};
