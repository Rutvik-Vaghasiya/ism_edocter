import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DesktopDatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { validetionschema } from "../../Validetion";
import { toast, ToastContainer } from "react-toastify";
import MuiAlert from "@mui/material/Alert";
// import { useAutofillDoctorData } from "../PtQuery";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export const PtBookAppointment = () => {
  // --------------------   URL  Parameter   ------------------------- ---------
  const drId = useParams().id;
  const clnid = useParams().clid;
  console.log("drId", drId);
  console.log("clnid", clnid);
  // ----------  useQuery -------
  // const { isLoading, isSuccess, isError, data } = useAutofillDoctorData(drId);
  // ----------  useQuery -------
  // --------------------  UseState  ---------------------
  const [doctordata, setDoctorData] = useState({});
  const [drName, setDrName] = useState();
  const [status, setStatus] = useState(false);
  const [clinicData, setClinicData] = useState();
  // --------------------  UseState  ---------------------
  //-----------------------------  UseFRom ------------------------------------------------

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  // -------------------------------  useEffect -----------------------
  useEffect(() => {
    getAutoFiledDoctorData();
    getAutoFiledClinicData();
    // console.log(isLoading);
    // console.log(isSuccess);
    // console.log(isError);
    // console.log(data);
    console.log("data", doctordata);
  }, []);

  setInterval(() => {
    if (doctordata === undefined) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }, 3000);

  console.log("object :>> ", status);
  const navigate = useNavigate();
  // --------- Get dr filed API API ----------
  const getAutoFiledDoctorData = async () => {
    await axios
      .get("http://localhost/MVCcrudWithADOdotnet/api/apis/get/" + drId)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          console.log(res.data);
          setValue("docotrnames", res.data.Name, { shouldTouch: true });
          setValue("clinicname", res.data.Name + " clinic", {
            shouldTouch: true,
          });
          setDoctorData(res.data);
        } else {
          alert("error in getdoctor data");
        }
      });
  };
  // --------- Get dr filed API API ----------
  //-----------------  Clinic Data ----------------------------
  const getAutoFiledClinicData = async () => {
    await axios
      .get("http://localhost/MVCcrudWithADOdotnet/api/apis/get/" + drId)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          console.log(res.data);
          setClinicData(res.data);
        } else {
          alert("error in  appointment filed");
        }
      });
  };

  //-----------------END  Clinic Data ----------------------------

  // ------ tostify -------------
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const showtostmsg = async (msg) => {
    toast.success(`🦄 ${msg}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const showtosterror = async (msg) => {
    toast.error(`🦄${msg} `, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  // ------------------ Book Appointment Add API API post api -------------------------
  const addNewAppointmentPt = async (appdata) => {
    try {
      await axios.post("https://reqres.in/api/users", appdata).then((res) => {
        if (res.status === 201) {
          console.log("Post Success ");
          // showtostmsg("SUCCESSES ADDING DATA");
          setTimeout(() => {
            navigate("/patient/myappointment");
            console.log("Suuccess add");
          }, 1000);
        }
      });
    } catch (err) {
      console.log("error----", err);

      showtosterror("Data Not ADD !");
    }
  };
  // ------------------ Book Appointment Add API API post api -------------------------

  // var navigate = useNavigate();

  // const handelClickAppointment = (datas) => {
  //   console.log(datas);
  //   // navigate("/patient/myappointment");
  // };
  console.log(touchedFields);
  const onSubmit = (data) => {
    console.log(data);
    const obj = {
      name: data.ptnames,
      job: data.message,
    };
    console.log("obj", obj);
    addNewAppointmentPt(obj);
  };
  //-----------------------------  UseFRom ------------------------------------------------

  // //--------- Values clinicList ,----
  // const [values, setValues] = React.useState({
  //   clinicnamelist: "",
  //   doctornamelist: "",
  //   language: "",
  //   apdate: dayjs("2014-08-18T21:11:54"),
  //   aptime: dayjs("2014-08-18T21:11:54"),
  // });
  // const handleChange11 = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  return (
    <div>
      {status ? (
        <Box
          sx={{
            width: "90%",
            margin: "auto",
            marginTop: "2%",
          }}
        >
          <div class="card">
            <Typography
              variant="h4"
              component="h4"
              className="card-header"
              sx={{ textAlign: "center" }}
            >
              Book Appointment
            </Typography>

            <div class="card-body">
              {status && status ? (
                <div class="card-text">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ textAlign: "center" }}
                  >
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    <div className="row mb-4">
                      <div className="col">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="form3Example1">
                            Name :
                          </label>
                          <input
                            type="text"
                            id="form3Example1"
                            className="form-control"
                            {...register("ptnames", validetionschema.ptnames)}
                          />
                          {errors.ptnames && (
                            <span className="text-danger">
                              {errors.ptnames.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="form3Example2">
                            Doctor Name :
                          </label>
                          <input
                            disabled
                            type="text"
                            id="form3Example2"
                            className="form-control"
                            defaultValue={doctordata.Name}
                            {...register("docotrnames")}
                          />
                        </div>
                      </div>
                    </div>

                    {/* <!-- message input --> */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3">
                        Messeges :
                      </label>
                      <input
                        type="text"
                        id="form3Example3"
                        className="form-control"
                        {...register("message", validetionschema.message)}
                      />
                      {errors.message && (
                        <span className="text-danger">
                          {errors.message.message}
                        </span>
                      )}
                    </div>
                    {/* <!-- Clinic Name  input --> */}
                    <div className="row mb-4">
                      <div className="col">
                        <div className="form-outline ">
                          <label className="form-label" htmlFor="form3Example4">
                            Clinic Name :
                          </label>
                          <input
                            disabled
                            type="text"
                            id="form3Example4"
                            className="form-control"
                            value={clinicData.Name + " Clinic"}
                            {...register("clinicname")}
                          />
                        </div>
                      </div>
                      {/* <!-- Reference input --> */}
                      <div className="col">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="form3Example5">
                            Reference :
                          </label>
                          <input
                            type="text"
                            id="form3Example5"
                            className="form-control"
                            {...register("reference")}
                          />
                        </div>
                      </div>
                    </div>

                    {/* <!-- Complain input --> */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example6">
                        Complain :
                      </label>
                      <textarea
                        rows="3"
                        id="form3Example6"
                        className="form-control"
                        {...register("complain", validetionschema.complain)}
                      />
                      {errors.complain && (
                        <span className="text-danger">
                          {errors.complain.message}
                        </span>
                      )}
                    </div>
                    {/* <!-- Appointment Date input --> */}
                    <div className="row mb-4">
                      <div className="col">
                        <div className="form-outline ">
                          <label className="form-label" htmlFor="form3Example7">
                            Appointment Date :
                          </label>
                          <input
                            type="date"
                            id="form3Example7"
                            className="form-control"
                            {...register("date", validetionschema.data)}
                          />
                          {errors.date && (
                            <span className="text-danger">
                              {errors.date.message}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* <!-- Appointment Time input --> */}
                      <div className="col">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="form3Example8">
                            Appointment Time :
                          </label>
                          <input
                            type="time"
                            id="form3Example8"
                            className="form-control"
                            {...register("time", validetionschema.time)}
                          />
                          {errors.time && (
                            <span className="text-danger">
                              {errors.time.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button
                      id="btnbookappointment"
                      type="submit"
                      className="btn btn-primary btn-block "
                    >
                      Book Appointment
                    </button>
                  </form>
                </div>
              ) : (
                // <h5 class="card-title"></h5>
                // {/* <form
                //   onSubmit={handleSubmit(onSubmit)}
                //   sx={{ textAlign: "center" }}
                // > */}

                <Box
                  sx={{
                    width: "100vw",
                    height: "calc(100vh - 74px)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <CircularProgress />
                </Box>
                // {/* </form> */}
              )}
            </div>
          </div>
        </Box>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};
