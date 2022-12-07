import {
  Box,
  Button,
  CircularProgress,
  createTheme,
  Fab,
  Link,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useMemo, useState } from "react";
import { useFetchDataCl } from "../Query";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const AdmClinic = () => {
  const [pageSize, setPageSize] = useState(5);
  const { isLoading, isError, isSuccess, data } = useFetchDataCl();
  const [dark, setDark] = useState(true);

  const darktheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: dark ? "Dark" : "light",
        },
      }),
    [dark]
  );
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
          <h4 class="card-header">Joined Clinics Details </h4>
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
            {/* <Box sx={{ "& > :not(style)": { m: 3 } }}> */}
            {
              <Link to={"/admin/addnewclinic"}>
                <Fab color="primary" aria-label="add" sx={{ m: 1 }}>
                  <AddIcon />
                </Fab>
              </Link>
            }
          </div>
          {/* </Box> */}
        </div>
      </Box>
    </div>
  );
};
