import { Logout } from "@mui/icons-material";
import {
  Avatar,
  Box,
  FormControlLabel,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MaterialUISwitch } from "../../DashBoard/ThemBtn";

export const AdminNavbar = () => {
  var navigate = useNavigate();
  // ------------------------- LOG OUT ------------------------
  const handleLogout = () => {
    localStorage.removeItem("id");
    navigate("/");
  };
  // -------------------------EnD LOG OUT ------------------------

  //--------------- PROFILE -------------

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //----------------- Profile End ---------
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
          <Link className="navbar-brand" to="/home">
            HOSPITAL
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
                <Link class="dropdown-item" to="/admin/adddoctor">
                  Add Doctor Profile
                </Link>
                <Link class="dropdown-item" to="/admin/alldocterlist">
                  All Doctors Profiles
                </Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item disabled" to="#">
                  Something else here
                </Link>
              </div>
            </li>
            {/* ----------------------------------------------------------- Patient Details ADMIN pg ------------------------------------------ */}
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
                <Link class="dropdown-item disabled" to="#">
                  Help Requiest (optional)
                </Link>
                {/* <div class="dropdown-divider"></div> */}
                <Link class="dropdown-item" to="./admin/allpatientlist">
                  All Patient
                </Link>
              </div>
            </li>
            {/* --------------------------------------------------------------------- END Patient pg ---------------------------------------------------------- */}
            <li className="nav-item">
              <Link className="nav-link" to="./admin/admappointments">
                Appointments
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link diseb" to="./admin/admcalendar">
                Calendar
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="./admin/admclinic">
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
        {/* //----------------------------------  Profile icon -------------------------------------- */}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <Link to="/admin" underline="none">
              <MenuItem onClick={handleCloseUserMenu}>My Profile</MenuItem>
            </Link>
            <Link to={""}>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Link>
          </Menu>
        </Box>
        {/* //---------------------------------------  END profile icon ------------------------------------------------------------- */}
        &nbsp;&nbsp;&nbsp;
      </nav>
    </div>
  );
};
