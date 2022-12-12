import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

export const DrAddProfiles = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
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
        <div class="card">
          <h4 class="card-header">Add New Doctor Profile</h4>
          <div class="card-body">
            <h5 class="card-title"></h5>
            <form
              onSubmit={handleSubmit(onSubmit)}
              sx={{ textAlign: "center" }}
            >
              <p class="card-text">
                <table>
                  <tr>
                    <th>
                      <Typography
                        variant="h6"
                        component="h6"
                        sx={{ textAlign: "right" }}
                      >
                        Register No :
                      </Typography>
                    </th>
                    <td>
                      <TextField
                        id="filled-drregisterno"
                        label="Register No."
                        size="small"
                        error={false}
                      />
                    </td>
                  </tr>
                  <br></br>
                  <tr>
                    <th>
                      <Typography
                        variant="h6"
                        component="h6"
                        sx={{ textAlign: "right" }}
                      >
                        Qulification Certificate :
                      </Typography>
                    </th>
                    <td>
                      &nbsp;&nbsp;
                      <input type="file" name="drqulifycertfy" />
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <th>
                      <Typography
                        variant="h6"
                        component="h6"
                        sx={{ textAlign: "right" }}
                      >
                        Specilazation :
                      </Typography>
                    </th>
                    <td>
                      &nbsp;&nbsp;
                      <TextField
                        id="filled-drlname"
                        label="Specilaztion"
                        size="small"
                        error={false}
                      />
                    </td>
                  </tr>
                  <br></br>
                  <tr>
                    <th>
                      <Typography
                        variant="h6"
                        component="h6"
                        sx={{ textAlign: "right" }}
                      >
                        Experience :
                      </Typography>
                    </th>
                    <td>
                      &nbsp;&nbsp;
                      <TextField
                        id="filled-drexprians"
                        label="Your Exprians"
                        type="number"
                        size="small"
                        error={false}
                      />
                    </td>
                  </tr>
                  <br></br>
                  <tr>
                    <th>
                      <Typography
                        variant="h6"
                        component="h6"
                        sx={{ textAlign: "right" }}
                      >
                        Bio :
                      </Typography>
                    </th>
                    <td>
                      &nbsp;&nbsp;
                      <TextField
                        id="outlined-textarea"
                        label="Bio Write Here"
                        placeholder="Placeholder"
                        size="small"
                        error={false}
                      />
                    </td>
                  </tr>
                </table>
              </p>
              <Button id="btnsubmit" variant="contained" component="label">
                Add Profile
              </Button>
            </form>
          </div>
        </div>
      </Box>
    </div>
  );
};
