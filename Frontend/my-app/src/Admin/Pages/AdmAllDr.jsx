import { Box, Button, CircularProgress, Typography } from "@mui/material";
// import { margin } from '@mui/system';
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useFetchDataDr } from "../Query";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

export const AdmAllDr = () => {
  const [pageSize, setPageSize] = useState(5);
  const { isError, isLoading, isSuccess, data } = useFetchDataDr();

  useEffect(() => {
    console.log(isLoading);
    console.log(data);
    console.log(isError);
    console.log(isSuccess);
  }, [isLoading]);

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
            <Button variant="contained" color="primary">
              <VisibilityIcon />
            </Button>{" "}
            &nbsp;&nbsp;
            <Button variant="contained" color="warning">
              <EditIcon />
            </Button>
            &nbsp;&nbsp;
            <Button variant="contained" color="error">
              <DeleteForeverIcon />
            </Button>
          </div>
        );
      },
    },
  ];
  const rows = [{ Id: "1001", Name: "rutvik", Description: "this is learner" }];

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
          <h4 class="card-header">Doctors Details </h4>
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">
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
                    rows={rows}
                    getRowId={(row) => row.Id}
                    pageSize={pageSize}
                    rowsPerPageOptions={[5, 10, 20]}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                  />
                )}
              </Box>
            </p>
          </div>
        </div>
      </Box>
    </div>
  );
};
