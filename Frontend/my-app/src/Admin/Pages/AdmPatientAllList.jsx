import { Box, Button, CircularProgress, Typography } from "@mui/material";
// import { textAlign } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useFetchDataPt } from "../Query";

export const AdmPatientAllList = () => {
  const { isLoading, isSuccess, isError, data } = useFetchDataPt();
  // const [PtData,setPtData]=useState()
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    console.log(data);
    console.log(isSuccess);
    console.log(isError);
  }, [isLoading]);

  const columnPt = [
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
      <Box sx={{ height: 300, width: "90%", margin: "Auto" }}>
        {data ? (
          <>
            <Typography
              variant="h3"
              component="h3"
              sx={{ textAlign: "center", mt: 3, mb: 3 }}
            >
              Patient All List
            </Typography>
            <DataGrid
              columns={columnPt}
              rows={data.data}
              getRowId={(row) => row.Id}
              pageSize={pageSize}
              rowsPerPageOptions={[5, 10, 20]}
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
