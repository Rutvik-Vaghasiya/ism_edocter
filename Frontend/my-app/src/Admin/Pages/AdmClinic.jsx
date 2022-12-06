import { Box, CircularProgress, createTheme, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useMemo, useState } from "react";
import { useFetchDataCl } from "../Query";

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
  ];

  return (
    <div>
      <Box sx={{ height: 300, width: "90%", margin: "Auto" }}>
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
          <>
            <Typography
              variant="h3"
              component="h3"
              sx={{ textAlign: "center", mt: 3, mb: 3 }}
            >
              Clinic All List
            </Typography>
            <DataGrid
              columns={columnCl}
              rows={data.data}
              getRowId={(row) => row.Id}
              pageSize={pageSize}
              rowsPerPageOptions={[5, 10, 20]}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            />
          </>
        )}
      </Box>
    </div>
  );
};
