import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Dialog,
  Divider,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Slide,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { useFetchDoctorAllListPt } from "../PtQuery";
import { Box } from "@mui/system";
import axios from "axios";
import { useForm } from "react-hook-form";
import { validetionschema } from "../../Validetion";

// ------------------------------------------------------------ full screen Transfer out of write export  Dilog Appointment -------------------------------------
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// ------------------------------------------------------------ End full screen Transfer  out of write export  Dilog Appointment -------------------------------------

export const PtDoctorList = () => {
  // ----------------------- Start useSate --------------
  const [drClinicId, setdrClinicId] = useState();
  // -----------------------End  useSate --------------
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const submite = (data) => {
  //   console.log(data);
  // };
  // ----------------------------------------------------------- full Screen Dilog Appointment -----------------------------------------------
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // ----------------------------------------------------------------- End full Screen Dilog Appointment  -----------------------------------------------------------
  // -------------------------------------- Dr List Filter -----------------------------------------------------------
  // ++++++++++++++++  useFetch data ++++++++++++
  // const { isLoading, isSuccess, isError, data } = useFetchDoctorAllListPt();
  const [fetchDataDr, setFetchDataDr] = useState([]);

  // -+-+-+-+-+- useEffect +-+-+-+-+-+-+
  const [age, setAge] = React.useState(0);
  useEffect(() => {
    // if (data) {
    if (age === 0) {
      defulatfilter();
    } else {
      fetchfilterdr(age);
    }
    //   setFetchDataDr(data.data);
    // }
  }, []);

  // -+-+-+-+-+- useEffect +-+-+-+-+-+-+filter
  // ++++++++++++++++  useFetch data ++++++++++++

  const handleChange = (event) => {
    console.log(event.target.value, "+");
    setAge(event.target.value);
    console.log(age, "-");
  };
  console.log(age);

  // -------------------------------------- Dr List Filter -----------------------------------------------------------

  // ----------------------------- API API API ------------------------
  const defulatfilter = async () => {
    await axios
      .get("http://localhost/MVCcrudWithADOdotnet/api/apis/getdata")
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setFetchDataDr(res.data);
          console.log(fetchDataDr, "===");
        }
      });
  };
  var arry = [];
  const fetchfilterdr = async (age) => {
    await axios
      .get("http://localhost/MVCcrudWithADOdotnet/api/apis/get/" + age)
      .then((res) => {
        if (res.status === 200) {
          arry.push(res.data);
          setFetchDataDr(arry);
        }
      });
  };
  console.log(
    fetchDataDr.map((i) => {
      console.log("iii", i);
    })
  );
  // ----------------------------- API API API ------------------------
  // --------- NaviGate to Book APpointment -------------
  const navigate = useNavigate();
  // const handelBookAppointment = (id, clid) => {
  //   navigate(`/patient/newapointment/${id}${clid}`);
  // };
  // --------- NaviGate to Book APpointment -------------
  // ------------------ Select Clinic Name ----------
  const handleChangeClinicName = (event) => {
    setdrClinicId(event.target.value);
  };
  // ------------------ Select Clinic Name ----------
  return (
    <div>
      <div class="card ">
        <h6 class="card-header bg-basic  ">
          <p></p>
          {
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Departments
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label="Departments"
                size="small"
                onChange={handleChange}
              >
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={8}>Dentistry</MenuItem>
                <MenuItem value={10}>Ophthalmology</MenuItem>
                <MenuItem value={13}>Diagnostics</MenuItem>
                <MenuItem value={14}>Pulmonology</MenuItem>
                <MenuItem value={16}>Pediatrics</MenuItem>
                <MenuItem value={17}>Cardiology</MenuItem>
                <MenuItem value={18}>Neurology</MenuItem>
              </Select>
              {/* <FormHelperText>With label + helper text</FormHelperText> */}
            </FormControl>
          }
          <p></p>
        </h6>
        <div class="card-body">
          <section className="center-main-content">
            <Stack
              py={"40px"}
              direction="row"
              sx={{
                flexWrap: "wrap",
                gap: "25px",
                maxWidth: "1050px",
              }}
            >
              {!fetchDataDr ? (
                <Box
                  sx={{
                    width: "100vw",
                    height: "74px",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                fetchDataDr.map((doctor) => {
                  return (
                    <Card sx={{ maxWidth: 345, minWidth: 330 }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://img.freepik.com/premium-photo/beautiful-young-asian-girl-doctor-with-laptop-records-isolated-blue-background-medical-student-general-practitioner-concept-medical-education-india_185696-616.jpg?w=900"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {doctor.Name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {doctor.Description}
                        </Typography>
                        <FormControl
                          required
                          variant="standard"
                          sx={{ m: 1, minWidth: 120 }}
                        >
                          <InputLabel id="demo-simple-select-required-label">
                            Clinic Name
                          </InputLabel>
                          <Select
                            required
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={drClinicId}
                            onChange={handleChangeClinicName}
                            label="Clinic Name"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>{doctor.Name} Clinic1</MenuItem>
                            <MenuItem value={2}>{doctor.Name} Clinic2</MenuItem>
                            <MenuItem value={3}>{doctor.Name} Clinic3</MenuItem>
                          </Select>
                          {/* {errors.dropdwen && (
                            <span className="text-danger">
                              {errors.dropdwen.message}
                            </span>
                          )} */}
                        </FormControl>
                      </CardContent>

                      <CardActions>
                        <Button size="small" onDoubleClick={handleClickOpen}>
                          More
                        </Button>
                        <Link
                          to={
                            "/patient/newapointment/" + doctor.Id + drClinicId
                          }
                        >
                          <Button
                            size="small"
                            variant="contained"

                            // onClick={() => {
                            //   handelBookAppointment(doctor.Id, drClinicId);
                            // }}
                          >
                            Book Appointment
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                  );
                })
              )}

              {/* <Card sx={{ maxWidth: 345, minWidth: 300 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://img.freepik.com/premium-photo/beautiful-young-asian-girl-doctor-with-laptop-records-isolated-blue-background-medical-student-general-practitioner-concept-medical-education-india_185696-616.jpg?w=900"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={handleClickOpen}>
                    More
                  </Button>

                  <Link to="/patient/newapointment">
                    <Button size="small" variant="contained">
                      Book Appointment
                    </Button>
                  </Link>
                </CardActions>
              </Card> */}
              {/*--- Code Copy in local divies in Document */}
            </Stack>
          </section>
        </div>
      </div>
      {/* //---------------------------------------  APpointment Dilog ------------------------------------------------------ */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
      {/* //---------------------------------------  APpointment Dilog ------------------------------------------------------ */}
    </div>
  );
};
