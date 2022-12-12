import { Logout } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  ListItemIcon,
  Menu,
  MenuItem,
  Select,
  Switch,
  Tooltip,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MaterialUISwitch } from "../../DashBoard/ThemBtn";

export const PtNavbar = () => {
  //--------------- PROFILE navbar -------------

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //----------------- Profile End navbar ---------
  // ---------------------------------------------------- DIlog Box -----------------------------------------------------------------------------------

  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleClickOpen = () => {
    // setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  // ---------------------------------------------------- DIlog Box -----------------------------------------------------------------------------------
  var navigate = useNavigate();
  // ------------------  Log-OUT ---------------------
  const handeleLogOut = () => {
    localStorage.removeItem("id");
    handleClickOpen();
    navigate("/");
  };
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
              {/* -----------------------------------------------  Appointment Profile ------------------------------------------- */}

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
                  Appointments
                </Link>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link class="dropdown-item" to="./patient/myappointment">
                    MY Appointment
                  </Link>
                  <div class="dropdown-divider"></div>
                  <Link class="dropdown-item" to="/patient/ptdoctoreslist">
                    New Appointment
                  </Link>
                </div>
              </li>
              {/* ----------------------------------------------- End   Appointment  ------------------------------------------- */}
              {/* ----------------------------------------------- APPOINTMENT ------------------------------------------- */}

              {/* <li className="nav-item">
                <Link className="nav-link disabled" to="./patient/appointment">
                  Appointments
                </Link>
              </li> */}
              {/* -----------------------------------------------  END Appointment------------------------------------------- */}

              {/* -----------------------------------------------  Calendar ------------------------------------------- */}
              {/* <li className="nav-item">
                <Link className="nav-link disabled" to="./patient/calenders">
                  Calendar
                </Link>
              </li> */}
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
          {/* -----------------------------------------------------------  DILOG BOX  --------------------------------------------------------------------------------------------------- */}
          <React.Fragment>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
              Open max-width dialog
            </Button> */}
            <Dialog
              fullWidth={fullWidth}
              maxWidth={maxWidth}
              open={open}
              onClose={handleClose}
            >
              <DialogTitle>Optional sizes</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  You can set my maximum width and whether to adapt or not.
                </DialogContentText>
                <Box
                  noValidate
                  component="form"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    m: "auto",
                    width: "fit-content",
                  }}
                >
                  <FormControl sx={{ mt: 2, minWidth: 120 }}>
                    <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                    <Select
                      autoFocus
                      value={maxWidth}
                      onChange={handleMaxWidthChange}
                      label="maxWidth"
                      inputProps={{
                        name: "max-width",
                        id: "max-width",
                      }}
                    >
                      <MenuItem value={false}>false</MenuItem>
                      <MenuItem value="xs">xs</MenuItem>
                      <MenuItem value="sm">sm</MenuItem>
                      <MenuItem value="md">md</MenuItem>
                      <MenuItem value="lg">lg</MenuItem>
                      <MenuItem value="xl">xl</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControlLabel
                    sx={{ mt: 1 }}
                    control={
                      <Switch
                        checked={fullWidth}
                        onChange={handleFullWidthChange}
                      />
                    }
                    label="Full width"
                  />
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>
          {/* -----------------------------------------------------------  DILOG BOX  --------------------------------------------------------------------------------------------------- */}
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
          &nbsp; &nbsp; &nbsp; &nbsp;
          {/* //----------------------------------  Profile icon -------------------------------------- */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Priyanshi"
                  src="https://reqres.in/img/faces/2-image.jpg"
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
              <Link to="/patient" underline="none">
                <MenuItem onClick={handleCloseUserMenu}>My Profile</MenuItem>
              </Link>

              <MenuItem onClick={handeleLogOut}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {/* //---------------------------------------  END profile icon ------------------------------------------------------------- */}
        </nav>
      </div>
    </>
  );
};
