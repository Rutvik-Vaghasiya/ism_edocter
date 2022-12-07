import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useFetchDataDr } from "../../Admin/Query";

export const DrAppReqList = () => {
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
      width: 300,
      renderCell: (cellValues) => {
        return (
          <div>
            <Button variant="contained" color="success">
              <CheckRoundedIcon />
            </Button>
            <Button color="success">
              {/* <Link to={`/aboutus`}>Edit</Link> */}
            </Button>
            <Button variant="contained" color="error">
              <CloseRoundedIcon />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Box sx={{ height: 300, width: "90%", margin: "auto" }}>
        {data ? (
          <>
            <Typography
              variant="h3"
              component="h3"
              sx={{ textAlign: "center", mt: 3, mb: 3 }}
            >
              Appoinment Requiest List
            </Typography>
            <DataGrid
              columns={columnDr}
              rows={data.data}
              getRowId={(row) => row.Id}
              rowsPerPageOptions={[5, 10, 20]}
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            />
          </>
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
  );
};
