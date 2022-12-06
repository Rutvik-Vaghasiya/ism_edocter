import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DesktopDatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import React from "react";

export const PtAppoinment = () => {
  //--------- Values clinicList ,----
  const [values, setValues] = React.useState({
    clinicnamelist: "",
    doctornamelist: "",
    language: "",
    apdate: dayjs("2014-08-18T21:11:54"),
    aptime: dayjs("2014-08-18T21:11:54'"),
  });
  const handleChange11 = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div>
      <Box
        sx={{
          width: "90%",
          margin: "auto",
          marginTop: "5%",
        }}
      >
        <div class="card">
          <Typography
            variant="h4"
            component="h4"
            className="card-header"
            sx={{ textAlign: "center" }}
          >
            Book Appointment
          </Typography>

          <div class="card-body">
            <h5 class="card-title"></h5>
            <form
              //   onSubmit={handleSubmit(onSubmit)}
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
                        Name :
                      </Typography>
                    </th>
                    <td>
                      <TextField
                        id="outlined-apname"
                        label="Name "
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
                        Doctor Name :
                      </Typography>
                    </th>
                    <td>
                      <FormControl sx={{ m: 1, minWidth: 140 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">
                          Doctor Name
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-autowidth-doctorlist-label"
                          id="demo-simple-select-autowidth-doctorlist"
                          value={values.doctornamelist}
                          size="small"
                          placeholder="Doctor Name"
                          onChange={handleChange11("doctornamelist")}
                          autoWidth
                          label="Doctor Name"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Dr.Rutvik</MenuItem>
                          <MenuItem value={21}>Dr.SurajBhai v.</MenuItem>
                          <MenuItem value={22}>Dr.ManojBhai k.</MenuItem>
                        </Select>
                      </FormControl>
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
                        Messeges :
                      </Typography>
                    </th>
                    <td>
                      <TextField
                        id="outlined-apmsg"
                        label="Messwges Write Here"
                        placeholder="Placeholder"
                        multiline
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
                        Clinic Name :
                      </Typography>
                    </th>
                    <td>
                      <FormControl sx={{ m: 1, minWidth: 135 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">
                          Clinic Name
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-autowidth-label"
                          id="demo-simple-select-autowidth"
                          value={values.clinicnamelist}
                          size="small"
                          placeholder="Clinic Name"
                          onChange={handleChange11("clinicnamelist")}
                          autoWidth
                          label="Clinic Name"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Epic</MenuItem>
                          <MenuItem value={21}>Hcg</MenuItem>
                          <MenuItem value={22}>Shaleen</MenuItem>
                        </Select>
                      </FormControl>
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
                        Reference :
                      </Typography>
                    </th>
                    <td>
                      <TextField
                        id="outlined-aprefernce"
                        label="Reference "
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
                        Complain :
                      </Typography>
                    </th>
                    <td>
                      <TextField
                        id="outlined-apcomplain"
                        label="Complain "
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
                        Appointment Date :
                      </Typography>
                    </th>
                    <td>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                          id="filled-dob"
                          label="Date of Brith"
                          inputFormat="DD/MM/YYYY"
                          error={false}
                          size="small"
                          value={values.apdate}
                          onChange={handleChange11("apdate")}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
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
                        Appointment Time :
                      </Typography>
                    </th>
                    <td>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                          label="Time"
                          value={values.aptime}
                          onChange={handleChange11("aptime")}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </td>
                  </tr>
                </table>
              </p>
            </form>
          </div>
        </div>
      </Box>
    </div>
  );
};
