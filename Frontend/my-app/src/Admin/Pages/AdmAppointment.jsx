import { Box, Button, CircularProgress, Fab } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DataGrid } from "@mui/x-data-grid";
import { useFetchDataCl } from "../Query";
export const AdmAppointment = () => {
  // -------------------------------------- TABLE -------------------------------------------------------------------------
  const [pageSize, setPageSize] = useState(5);
  const { isLoading, isError, isSuccess, data } = useFetchDataCl();

  useEffect(() => {
    console.log(data);
    console.log(isLoading);
    console.log(isSuccess);
    console.log(isError);
  }, [isLoading]);

  //---- Columns Field of Fetch Clinic List
  const columnCl = [
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
            </Button>
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

  //----------------------------------------- Table ------------------------------------------------------------------------------------
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
          <h4 class="card-header">Admin Appointment Details </h4>
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">
              <div>
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
                      columns={columnCl}
                      rows={data.data}
                      getRowId={(row) => row.Id}
                      pageSize={pageSize}
                      rowsPerPageOptions={[5, 10, 20]}
                      onPageSizeChange={(newPageSize) =>
                        setPageSize(newPageSize)
                      }
                    />
                  )}
                </Box>
              </div>
            </p>
          </div>
        </div>
      </Box>
    </div>
  );
};
