import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { validetionschema } from "../../Validetion";

export const PtEditeAppointment = () => {
  var Id = useParams().id;
  console.log(Id);

  const navigate = useNavigate();
  //-----------------------------  useState ------------------------------------------------
  const [detailsAppoin, setDetailsAppoin] = useState({});
  //-----------------------------  useState ------------------------------------------------
  //-----------------------------  UseFRom ------------------------------------------------
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  // ------- useEfect------------
  useEffect(() => {
    getBookAppoinmentDetails();
  }, []);
  // ----------------------------------------------------------  API  GET APPOINMENT DEtails -------------------------------------
  const getBookAppoinmentDetails = async () => {
    await axios
      .get("http://localhost/MVCcrudWithADOdotnet/api/apis/get/" + Id)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          console.log(res.data);
          setValue("ptnames", res.data.Name, { shouldTouch: true });
          setValue("doctorname", res.data.Name, { shouldTouch: true });
          setValue("message", res.data.Description, { shouldTouch: true });
          setValue("clinicnameS", res.data.Name + " clinic", {
            shouldTouch: true,
          });
          setValue("complain", res.data.Description, { shouldTouch: true });
          setValue("reference", res.data.Name, { shouldTouch: true });
          // setValue("date", "01/23/2000", { shouldTouch: true });
          // setValue("time", "02:15:AM", { shouldTouch: true });
          setDetailsAppoin(res.data);
        }
      });
  };
  // ----------------------------------------------------------  API PUt UPDAte Appointment details -----------------------------------
  const updatedAppointmentDetailsPt = async (updated) => {
    try {
      await axios.put("https://reqres.in/api/users/2", updated).then((res) => {
        if (res.status === 200) {
          console.log(res);
          console.log(res.data);
          alert("success updated apointment data");
          setTimeout(() => {
            navigate("/patient/myappointment");
          }, 200);
        }
      });
    } catch (error) {
      console.log(error);
      alert("error put in updaed in ERROR...");
    }
  };
  console.log("detailsAppoin.Name", detailsAppoin.Name);
  const doctorName = watch("doctorname", detailsAppoin.Name);
  console.log(doctorName);
  console.log(watch());

  // ---------------- onSubmite ----------
  const onSubmit = (data) => {
    // setValue("");
    // setValue("docotrnameS", data.docotrnameS, { shouldTouch: true });
    // setValue("clinicnameS", data.clinicnameS, { shouldTouch: true });
    console.log("data.docotrname", data.doctorname);
    var obj = {
      ptnames: data.ptnames,
      doctorname: data.doctorname,
      message: data.message,
      clinicnameS: data.clinicnameS,
      complain: data.complain,
      reference: data.reference,
    };
    var obj1 = {
      name: data.ptnames,
      job: data.message,
    };
    console.log("obj", obj);
    console.log(data);
    updatedAppointmentDetailsPt(obj1);
  };
  console.log(touchedFields);

  return (
    <div>
      {detailsAppoin ? (
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
              Edite Appointment
            </Typography>

            <div class="card-body">
              {!detailsAppoin && !detailsAppoin ? (
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
              ) : (
                // <h5 class="card-title"></h5>
                // {/* <form
                //   onSubmit={handleSubmit(onSubmit)}
                //   sx={{ textAlign: "center" }}
                // > */}
                <div class="card-text">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ textAlign: "center" }}
                  >
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    <div className="row mb-4">
                      <div className="col">
                        <div className="form-outline">
                          <label
                            className="form-label"
                            htmlFor="form3Example11"
                          >
                            Name :
                          </label>
                          <input
                            type="text"
                            id="form3Example11"
                            className="form-control"
                            defaultValue={detailsAppoin.Name}
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
                          <label
                            className="form-label"
                            htmlFor="form3Example22"
                          >
                            Doctor Name :
                          </label>
                          {
                            <input
                              disabled
                              type="text"
                              id="form3Example22"
                              className="form-control disabled"
                              value={detailsAppoin.Name}
                              {...register("doctorname")}
                            />
                          }
                        </div>
                      </div>
                    </div>

                    {/* <!-- message input --> */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example33">
                        Messeges :
                      </label>
                      <input
                        type="text"
                        id="form3Example33"
                        className="form-control"
                        defaultValue={detailsAppoin.Description}
                        {...register("message")}
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
                          <label
                            className="form-label"
                            htmlFor="form3Example44"
                          >
                            Clinic Name :
                          </label>
                          <input
                            disabled
                            type="text"
                            id="form3Example44"
                            className="form-control"
                            defaultValue={detailsAppoin.Name}
                            {...register("clinicnameS")}
                          />
                        </div>
                      </div>
                      {/* <!-- Reference input --> */}
                      <div className="col">
                        <div className="form-outline">
                          <label
                            className="form-label"
                            htmlFor="form3Example55"
                          >
                            Reference :
                          </label>
                          <input
                            type="text"
                            id="form3Example55"
                            defaultValue={detailsAppoin.Name}
                            className="form-control"
                            {...register("reference")}
                          />
                        </div>
                      </div>
                    </div>

                    {/* <!-- Complain input --> */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example66">
                        Complain :
                      </label>
                      <textarea
                        rows="3"
                        id="form3Example66"
                        className="form-control"
                        defaultValue={detailsAppoin.Description}
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
                          <label
                            className="form-label"
                            htmlFor="form3Example77"
                          >
                            Appointment Date :
                          </label>
                          <input
                            type="date"
                            id="form3Example77"
                            className="form-control"
                            {...register("date")}
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
                          <label
                            className="form-label"
                            htmlFor="form3Example88"
                          >
                            Appointment Time :
                          </label>
                          <input
                            type="time"
                            id="form3Example88"
                            className="form-control"
                            {...register("time")}
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
                      Save Appointment
                    </button>
                  </form>
                </div>
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
