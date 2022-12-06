import React, { useEffect } from 'react';
// import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Box, CircularProgress, Typography } from '@mui/material';
import {  useFetchDataCl, useFetchDataPt } from '../Query';


export const DashbordAdmin = () => {

  // Doctor
  // const res = useFetchData()
  // const res = useFetchDataPt()
  // const res2 = useFetchDataCl()
  // useEffect(() => {

  //   console.log("data", res.data);
  //   console.log("isLoading", res.isLoading);
  //   console.log("isSuccess", res.isSuccess);
  //   console.log("isError", res.isError);

  //   // console.log("data", res1.data);
  //   // console.log("isLoading", res1.isLoading);
  //   // console.log("data", res2.data);
  //   // console.log("isLoading", res2.isLoading);
  // }, [res.isLoading,res1.isLoading,res2.isLoading])

 
  // Patient
  // const { isLoading1, isError1, isSuccess1, data1 } = useFetchDataPt()
  // useEffect(() => {

  //   console.log("data", res.data);
  //   console.log("isLoading", isLoading1);
  //   console.log("isSuccess", isSuccess1);
  //   console.log("isError", isError1);
  // }, [isLoading1])

  // Clinic
  // const { isLoading2, isError2, isSuccess2, data2 } = useFetchDataCl()
  // useEffect(() => {

  //   console.log("data", data2);
  //   console.log("isLoading", isLoading2);
  //   console.log("isSuccess", isSuccess2);
  //   console.log("isError", isError2);
  // }, [isLoading2])









  //patient
  const columspt = [
    { "field": "Id", "headerName": "ID", "width": 150 },
    {
      "field": "Name",
      "headerName": "Name",
      "width": 150
    },
    {
      "field": "Description",
      "headerName": "Description",
      "width": 150
    }
  ];
  // Doctor
  const columnDr = [
    { "field": "Id", "headerName": "ID", "width": 150 },
    {
      "field": "Name",
      "headerName": "Name",
      "width": 150
    },
    {
      "field": "Description",
      "headerName": "Description",
      "width": 150
    }
  ];
  // Clinic
  const columnCl = [
    { "field": "Id", "headerName": "ID", "width": 150 },
    {
      "field": "Name",
      "headerName": "Name",
      "width": 150
    },
    {
      "field": "Description",
      "headerName": "Description",
      "width": 150
    }
  ];

  //Patinet
  const rows = [
    { id: 1, Ids: 1001, name: 'Rutvik', description: 'RND Stack(React.js/Node.Js/DotNet)' },
    { id: 2, Ids: 2001, name: 'Rutvik', description: 'RND Stack(React.js/Node.Js/DotNet)' }
  ];

  //Clinic
  const rowsDr = [
    { id: 1, Ids: 11, name: 'VIki' },
    { id: 2, Ids: 12, name: 'VIki' }
  ]
  
  // console.log(res1.data,"++++++++")
  // console.log(res2.data,"---")
  return (
    <div>
       {/* res.isLoading ? <CircularProgress /> : (<Box sx={{ height: 400, width: '100%' }} >   */}
        {/* <DataGrid
          getRowId={(row) => row.Id}
          rows={res.data.data}
          columns={columnDr}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}

        /> 
        /* <DataGrid
        getRowId={(row) => row.Id}
        rows={res1.data.data}
        columns={columspt}
        pageSize={5}
      />
        <DataGrid
      getRowId={(row) => row.Id}
      rows={res2.data.data}
      columns={columnCl}
      pageSize={5}
    /> */}
      {/* </Box> */}

    {/* )} */}
      {/* {
        //patient
        isLoading1 ? <CircularProgress /> :(
        <Box sx={{ height: 400, width: '100%' }}>

          <DataGrid
            getRowId={(row) => row.Id}
            rows={res2.data.data}
            columns={columspt}
            pageSize={5}
          />
        </Box>)
      } */}

      {/* {
        //  isLoading2 ? <CircularProgress /> :(
        // // Clinic
        // <Box sx={{ height: 400, width: '100%' }}>
        //   <DataGrid
        //     getRowId={(row) => row.Id}
        //     rows={res2.data.data}
        //     columns={columnCl}
        //     pageSize={5}
        //   />
        // </Box>)

      } */}
    </div>
  )
}
