import { FormControlLabel } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { MaterialUISwitch } from "../../DashBoard/ThemBtn";

export const PtNavbar = () => {
  return (
    <>
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
          {/* -------------------------------------------------------------        TITLE --------------------------------------- */}
          &nbsp;
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <Link className="navbar-brand" to="./home">
              Doctor Houses
            </Link>

            {/* ------------------------------------------------------------- -------  DOCTOR Profile ------------------------------------------- */}
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              {/* ---------------------------------------------------  Home About Contect Us -------------------------------------------------- */}

              <li className="nav-item">
                <Link className="nav-link" to="./home">
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
                  Contect Us
                </Link>
              </li>

              {/* --------------------------------------------- End Home -------------------------------------------------------------------- */}
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
                  <Link class="dropdown-item" to="/patient/ptdoctoreslist">
                    All Doctors
                  </Link>
                </div>
              </li>
              {/* ------------------------------------------------------ENd OCTOR Profile ------------------------------------------- */}
              {/* -----------------------------------------------  Patient Profile ------------------------------------------- */}

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
                  <Link class="dropdown-item" to="./patient/appointmenthistroy">
                    MY Appointment Histroy
                  </Link>
                  <div class="dropdown-divider"></div>
                  <Link class="dropdown-item" to="#">
                    Something else here
                  </Link>
                </div>
              </li>
              {/* ----------------------------------------------- End   Patient Profile ------------------------------------------- */}
              {/* ----------------------------------------------- APPOINTMENT ------------------------------------------- */}

              <li className="nav-item">
                <Link className="nav-link" to="./patient/appointment">
                  Appointments
                </Link>
              </li>
              {/* -----------------------------------------------  END Appointment------------------------------------------- */}

              {/* -----------------------------------------------  Calendar ------------------------------------------- */}
              <li className="nav-item">
                <Link className="nav-link" to="./patient/calenders">
                  Calendar
                </Link>
              </li>
              {/* ----------------------------------------------- End  Calendar ------------------------------------------- */}
              {/* -----------------------------------------------  CLINIC ------------------------------------------- */}

              {/* <li className="nav-item">
                <Link className="nav-link" to="./patient/clinic">
                  Clinic
                </Link>
              </li> */}
              {/* ----------------------------------------------- End  CLINIC ------------------------------------------- */}
            </ul>
          </div>
          {/* -----------------------------------------------  Search Bar Here  ------------------------------------------- */}
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
            {/* -----------------------------------------------END Search Bar Here  ------------------------------------------- */}
          </form>
          &nbsp; &nbsp;
        </nav>
      </div>
    </>
  );
};
