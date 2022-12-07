import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useFetchDataDr } from "../../Admin/Query";
import InfoIcon from "@mui/icons-material/Info";

export const DrPtdataList = () => {
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
            <Button color="success">
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
          <h4 class="card-header">Patient Details </h4>
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
                        width: "85vw",
                        height: "calc(100vh - 300px)",
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
        </div>
      </Box>
    </div>
  );
};
