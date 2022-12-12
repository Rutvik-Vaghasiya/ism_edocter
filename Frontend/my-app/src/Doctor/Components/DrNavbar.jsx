import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MaterialUISwitch } from "../../DashBoard/ThemBtn";
import Logout from "@mui/icons-material/Logout";

const settings = ["Profile", "Logout"];
export const DrNavbar = () => {
  var navigate = useNavigate();
  //--------------- Logout Alert Dilog -------------------
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setAnchorElUser(null);
    setOpen(true);
  };
  const handelLogOut = () => {
    localStorage.removeItem("id");
    handleClose();
    navigate("/");
  };
  const handleClose = () => {
    setOpen(false);
  };
  //---------------- End Logout Alert Dilog-----------------
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
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
          {/* //-----------------------------------------------   DOCTOR DETAILS ------------------------------------------ */}
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
                <Link class="dropdown-item" to="./doctor/adddocterprofiles">
                  Add Profiles Details
                </Link>
                <Link class="dropdown-item" to="/doctor/TempList">
                  All Doctors
                </Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item" to="#">
                  Something else here
                </Link>
              </div>
            </li>
            {/* //---------------------------------------- END   DOCTOR DETAILS ------------------------------------------ */}
            {/* //------------------------------------------ PATIENT DETAILS ---------------------------------- */}
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
                <Link class="dropdown-item" to="/doctor/patientlist">
                  Patient Details
                </Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item disabled" to="#">
                  Something else here
                </Link>
              </div>
            </li>
            {/* //------------------------------------------------------- END  PATIENT DETAILS ---------------------------------- */}
            {/* //------------------------------------------------------  APPointment --------------------------------------------- */}
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownappoinment"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Appoinments
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="./doctor/appoinment/requiested">
                  Requiested Appoinment
                </Link>
                <Link class="dropdown-item" to="/doctor/appoinment/shedual">
                  Accepted Appoinment
                </Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item disabled" to="#">
                  Something else here
                </Link>
              </div>
            </li>
            {/* //-------------------------------------------  APPointment --------------------------------------------- */}{" "}
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownappoinment"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Clinics
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="./doctor/clinic/joinedclinic">
                  My Clinics
                </Link>
                <Link
                  class="dropdown-item disabled"
                  to="/doctor/clinic/clinicList"
                >
                  Clinic List
                </Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item disabled" to="#">
                  Something else here
                </Link>
              </div>
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
              <Avatar
                alt="Remy Sharp"
                src="https://reqres.in/img/faces/9-image.jpg"
              />
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
            <Link to="/doctor" underline="none">
              <MenuItem onClick={handleCloseUserMenu}>My Profile</MenuItem>
            </Link>

            <MenuItem onClick={handleClickOpen}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Box>
        &nbsp;&nbsp;
        {/* //---------------------------------------  END profile icon ------------------------------------------------------------- */}
      </nav>
      {/* //------------------------------- Dialog ------------------------------------------------- */}
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"!!!!  ALERT !!!"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are You Sure you want to LogOut ??
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={handelLogOut} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      {/* //----------------------------------------- End Dialog ------------------------------- */}
    </div>
  );
};
