import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useFetchDataDr } from "../../Admin/Query";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";

export const DrjoinledClinic = () => {
  //--------------- Logout Alert Dilog -------------------
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //---------------- End Logout Alert Dilog-----------------
  //------------------ table Data -----------
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
      width: 150,
      renderCell: (cellValues) => {
        return (
          <div>
            <Button variant="contained" color="primary">
              <InfoIcon />
            </Button>
            &nbsp;
            <Button variant="contained" color="error" onClick={handleClickOpen}>
              <DeleteIcon />
              {/* <Link to={`/aboutus`}>Edit</Link> */}
            </Button>
          </div>
        );
      },
    },
  ];
  // --------------------------   Table data-------- end

  return (
    <div>
      <Box
        sx={{
          width: "90%",
          margin: "auto",
          marginTop: "5%",
        }}
        // component="form"
        // noValidate
        // autoComplete="off"
      >
        <div class="card">
          <h4 class="card-header">Joined Clinics Details </h4>
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">
              <div>
                <Box sx={{ height: 300, width: "100%", margin: "auto" }}>
                  {data ? (
                    <DataGrid
                      columns={columnDr}
                      rows={data.data}
                      getRowId={(row) => row.Id}
                      rowsPerPageOptions={[5, 10, 20]}
                      pageSize={pageSize}
                      onPageSizeChange={(newPageSize) =>
                        setPageSize(newPageSize)
                      }
                    />
                  ) : (
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
                  )}
                </Box>
              </div>
            </p>
          </div>
          {/* //------------------------------- Dialog ------------------------------------------------- */}
          <div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"ALERT !!!"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are You Sure you want to Remove from this Clinic ??
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          {/* //----------------------------------------- End Dialog ------------------------------- */}
        </div>
      </Box>
    </div>
  );
};
