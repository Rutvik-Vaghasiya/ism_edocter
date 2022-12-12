import { Box, Button, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useFetchDataDr } from "../../Admin/Query";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const PtMyAppointment = () => {
  // -------------- UseNavigate ---------------
  const navigate = useNavigate();
  // --------- End useNavigate -----------------
  // -------------------------  Edite Appointment Handel -----------------------------------------------
  const handelEditeappoin = (data) => {
    console.log(data.id);
  };
  // -------------------------  Edite Appointment Handel -----------------------------------------------
  // ---------------------------------------------------- Start    Tables ---------------------------------------------------------
  const [pageSize, setPageSize] = useState(5);
  const { isError, isLoading, isSuccess, data } = useFetchDataDr();

  useEffect(() => {
    console.log(isLoading);
    console.log(data);
    console.log(isError);
    console.log(isSuccess);
  }, [isLoading]);
  // -----------------------------  DELETE APPOINTMENT ----------------------------
  const handelDelete = async (apId) => {
    try {
      await axios.delete("https://reqres.in/api/users/2").then((res) => {
        console.log(res);
        if (res.status === 204) {
          console.log(apId);
          console.log("Deleted Success");
          alert("DELETE Success");
        }
      });
    } catch (error) {
      console.log(error);
      alert("DELETE APpointment in ERROR...");
    }
  };
  // ----------------------------- END  DELETE APPOINTMENT ----------------------------
  //--- columns dr list
  const columnDr = [
    { field: "Id", headerName: "ID", width: 150 },
    {
      field: "Name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "Description",
      headerName: "Description",
      width: 150,
    },
    {
      field: "action",
      Header: "Action",
      width: 250,
      renderCell: (cellValues) => {
        return (
          <div>
            <Link to={`/patient/viewappointmentdetails/${cellValues.id}`}>
              <Button variant="contained" color="primary">
                <VisibilityIcon />
              </Button>
            </Link>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <Link to={`/patient/editeappointment/${cellValues.id}`}>
              <Button
                variant="contained"
                color="warning"
                // onClick={() => {
                //   handelEditeappoin(cellValues);
                // }}
              >
                <EditIcon />
              </Button>
            </Link>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <Button
              variant="contained"
              onClick={() => {
                handelDelete(cellValues.id);
              }}
              color="error"
            >
              <DeleteForeverIcon />
            </Button>
          </div>
        );
      },
    },
  ];
  // ---------------------------------------------------- END    Tables ---------------------------------------------------------

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
          <h4 class="card-header">My Appointments Details </h4>
          <div class="card-body">
            <h5 class="card-title"></h5>
            <div class="card-text">
              <Box sx={{ height: 300, width: "100%", margin: "Auto" }}>
                {isLoading ? (
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
                  <DataGrid
                    columns={columnDr}
                    rows={data.data}
                    getRowId={(row) => row.Id}
                    pageSize={pageSize}
                    rowsPerPageOptions={[5, 10, 20]}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                  />
                )}
              </Box>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};
