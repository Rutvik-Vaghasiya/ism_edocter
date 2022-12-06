import { FormControlLabel } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { MaterialUISwitch } from "../../DashBoard/ThemBtn";

export const DrNavbar = () => {
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
          <Link className="navbar-brand" to="./home">
            Doctors HOUSE
          </Link>

          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Doctors
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="./doctor/adddocter">
                  Add Doctor
                </Link>
                <Link class="dropdown-item" to="/admin/#">
                  All Doctors
                </Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item" to="#">
                  Something else here
                </Link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Patients
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="./#">
                  Add Patient
                </Link>
                <Link class="dropdown-item" to="./Doctor/#">
                  All Patient
                </Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item" to="#">
                  Something else here
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="./Doctor/#">
                Appointments
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./Doctor/#">
                Calendar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./Doctor/#">
                Clinic
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
