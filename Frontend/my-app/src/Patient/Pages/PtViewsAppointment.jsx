import { Box, Button, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";

export const PtViewsAppointment = () => {
  const ID = useParams().id;
  // ------------------------------- Start useState ---------------------------
  const [dataAppointment, setDataAppointment] = useState();
  // ------------------------------- END  useState ---------------------------

  // --------- useEfect -------------
  useEffect(() => {
    getAppointmentDataById();
  }, []);

  // --------------------------API  GET Appointment DAta By Appointment Id API---------------------
  const getAppointmentDataById = async () => {
    try {
      await axios
        .get("http://localhost/MVCcrudWithADOdotnet/api/apis/get/" + ID)
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            console.log(res.data);
            setDataAppointment(res.data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  // --------------------------END API  GET Appointment DAta By Appointment Id API END---------------------
  console.log("object :>> ", dataAppointment);
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
        <div class="card">
          <h4 class="card-header">My Appointments Detail Shows </h4>
          <div class="card-body">
            <h5 class="card-title"></h5>
            {dataAppointment ? (
              <div class="card-text">
                <table>
                  <thead>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p class="card-text">Name &nbsp;</p>
                      </td>
                      <td>
                        <p class="card-text">: &nbsp;</p>
                      </td>
                      <td>
                        <p class="card-text">{dataAppointment.Name}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p class="card-text">Doctor Name &nbsp;</p>
                      </td>
                      <td>
                        <p class="card-text">: &nbsp;</p>
                      </td>
                      <td>
                        <p class="card-text">Dr.{dataAppointment.Name}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p class="card-text">Message &nbsp;</p>
                      </td>
                      <td>
                        <p class="card-text">: &nbsp;</p>
                      </td>
                      <td>
                        <p class="card-text">{dataAppointment.Description}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p class="card-text">Clinic Name &nbsp;</p>
                      </td>
                      <td>
                        <p class="card-text">: &nbsp;</p>
                      </td>
                      <td>
                        <p class="card-text">{dataAppointment.Name} Clinic</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p class="card-text">Appointment Date &nbsp;</p>
                      </td>
                      <td>
                        <p class="card-text">: &nbsp;</p>
                      </td>
                      <td>
                        <p class="card-text">{"23/09/2023"}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p class="card-text">Appointment Time &nbsp;</p>
                      </td>
                      <td>
                        <p class="card-text">: &nbsp;</p>
                      </td>
                      <td>
                        <p class="card-text">{"07:12:AM"}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <Link to={`/patient/editeappointment/${dataAppointment.Id}`}>
                    <Button variant="contained" color="warning">
                      <EditIcon />
                    </Button>
                  </Link>
                  &nbsp;&nbsp;&nbsp;
                  <Link to={`/patient/myappointment`}>
                    <Button variant="contained" color="warning">
                      <UndoRoundedIcon />
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <CircularProgress />
            )}
          </div>
        </div>
      </Box>
    </div>
  );
};
