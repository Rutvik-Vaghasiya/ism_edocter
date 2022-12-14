import { Box, Button, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { validetionschema } from "../../Validetion";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";

export const PtDeleteAppointment = () => {
  const Id = useParams().id;
  const navigate = useNavigate();
  // ----------- useEfect -------------
  useEffect(() => {
    getDetailsAppointmentById();
  }, []);
  //   --------------- useState -------------
  const [dataDetails, setDataDetails] = useState();
  // ----------------- useForm ------------
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //   ---------------------------------------- GET Details Of APPoinment --------------------
  const getDetailsAppointmentById = async () => {
    await axios
      .get("http://localhost/MVCcrudWithADOdotnet/api/apis/get/" + Id)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          console.log(res.data);
          setDataDetails(res.data);
        }
      });
  };
  // ---------------------------------- Updaqte Appointmne ------------------------------------
  const handelReasonAddAppointment = async (objData) => {
    await axios.put("https://reqres.in/api/users/2", objData).then((res) => {
      if (res.status === 200) {
        console.log(res);
        console.log(res.data);
        handelDelete(objData.job);
      }
    });
  };
  // -----------------------------  DELETE APPOINTMENT ----------------------------
  const handelDelete = async (apId) => {
    try {
      await axios.delete("https://reqres.in/api/users/2").then((res) => {
        console.log(res);
        if (res.status === 204) {
          console.log(apId);
          console.log("Deleted Success");
          // alert("DELETE Success");
          navigate("/patient/myappointment");
        }
      });
    } catch (error) {
      console.log(error);
      alert("DELETE APpointment in ERROR...");
    }
  };
  // ------------------- onSubmite --------------------
  const onDelete = (data) => {
    console.log("data :>> ", data);
    // const obj = {
    //   Id: dataDetails.Id,
    //   msg: data.reason,
    // };
    const obj = {
      name: "morpheus",
      job: data.reason,
    };
    console.log("obj", obj);
    handelReasonAddAppointment(obj);
    // handelDelete(obj.job);
  };
  return (
    <div>
      <Box
        sx={{
          width: "95%",
          margin: "auto",
          marginTop: "1%",
        }}
        // component="form"
        // noValidate
        // autoComplete="off"
      >
        {!dataDetails ? (
          <CircularProgress />
        ) : (
          <div class="card">
            <h1 class="card-header">Why Cancel Appointment ??</h1>

            <div class="card-body">
              <h5 class="card-title"></h5>
              <div class="card-text">
                <p className="card-text ">Name :{dataDetails.Name}</p>
                <form onSubmit={handleSubmit(onDelete)}>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example66">
                      Reason :
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Write reason here About Cancel Appointment"
                      id="form3Example99"
                      className="form-control"
                      {...register("reason", validetionschema.reason)}
                    />
                    {errors.reason && (
                      <span className="text-danger">
                        {errors.reason.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <Button variant="contained" color="error" type="submit">
                      DONE&nbsp; <ThumbUpTwoToneIcon />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </Box>
    </div>
  );
};
