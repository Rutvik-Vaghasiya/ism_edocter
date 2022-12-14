import { Box, CircularProgress, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

import React from "react";
import { Link } from "react-router-dom";

export const DrDashbord = () => {
  return (
    <div>
      <Box
        sx={{
          width: "90%",
          margin: "auto",
          marginTop: "1%",
        }}
        // component="form"
        // noValidate
        // autoComplete="off"
      >
        <div class="card bg-info">
          <h4 class="card-header   ">Dr.Doctor Profiles </h4>
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">
              <div>
                <Box sx={{ height: 300, width: "100%", margin: "auto" }}>
                  {true ? (
                    <h1>Welcome Doctor</h1>
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
            <Link to="/doctor/editedrprofiles">
              <Fab
                color="secondary"
                aria-label="edit"
                sx={{ bottom: { xs: 90, sm: 0 } }}
              >
                <EditIcon />
              </Fab>
            </Link>
          </div>
        </div>
      </Box>
    </div>
  );
};
