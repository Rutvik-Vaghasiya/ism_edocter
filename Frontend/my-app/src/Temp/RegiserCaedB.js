import React from "react";
// date-fns
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// or for Day.js
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
//icon
import IconButton from "@mui/material/IconButton";
import {
  Button,
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const RegiserCaedB = () => {
  // password ------
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    language: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange1 = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // password ---end
  const [value, setValue] = React.useState(dayjs("2000-09-30T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div class="card">
        <h5 class="card-header">Add New Doctor Profile</h5>
        <div class="card-body">
          <h5 class="card-title"></h5>
          <form>
            <p class="card-text">
              <table>
                <tr>
                  <th> First Name :</th>
                  <td>
                    <TextField
                      id="filled-drfname"
                      label="First Name"
                      variant="filled"
                      size="small"
                      error={false}
                    />
                    {/* <input type="text" name="drfname" id="drfname" /> */}
                  </td>
                </tr>
                <tr>
                  <th>Last Name :</th>
                  <td>
                    <TextField
                      id="filled-drlname"
                      label="Last Name"
                      variant="filled"
                      size="small"
                      error={false}
                    />
                    {/* <input type="text" name="drlname" id="drlname" /> */}
                  </td>
                </tr>
                <tr>
                  <th>Select Amount</th>
                  <td>
                    <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                      <InputLabel htmlFor="filled-adornment-amount">
                        Amount
                      </InputLabel>
                      <FilledInput
                        id="filled-adornment-amount"
                        value={values.amount}
                        type="number"
                        onChange={handleChange1("amount")}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                      />
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <th>Email :</th>
                  <td>
                    <TextField
                      id="filled-email-input"
                      label="Email"
                      type="email"
                      autoComplete="current-email"
                      variant="filled"
                      size="small"
                      error={false}
                    />
                    <br />
                    <br />
                    {/* <input type="email" name="dremail" id="dremail" /> */}
                  </td>
                </tr>
                <tr>
                  <th>Date of Brith :</th>
                  <td>
                    {
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                          id="filled-dob"
                          label="Date of Brith"
                          inputFormat="DD/MM/YYYY"
                          variant="filled"
                          size="small"
                          value={value}
                          onChange={handleChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    }
                    {/* <input type="date" name="drdob" id="drdob" /> */}
                  </td>
                </tr>
                <tr>
                  <th>Password :</th>
                  <td>
                    <InputLabel htmlFor="filled-adornment-password">
                      Password
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange1("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <th>Phone No :</th>
                  <td>
                    <TextField
                      id="filled-drphoneno"
                      label="Phone No"
                      type="number"
                      lenth="10"
                      variant="filled"
                      size="small"
                      error={false}
                    />
                    {/* <input type="text" name="drphoneno" id="drphoneno" /> */}
                  </td>
                </tr>
                <tr>
                  <th>Dr. Role :</th>
                  <td>
                    <TextField
                      id="filled-drrolename"
                      label="Dr. Role Name"
                      variant="filled"
                      size="small"
                    />
                    {/* <input type="text" name="drrole" id="drrole" /> */}
                  </td>
                </tr>
                <tr>
                  <th>Degery Certificate :</th>
                  <td>
                    <Button variant="contained" component="label">
                      Upload File
                      <input type="file" hidden />
                    </Button>
                    {/* <input type="file" name="drcertficate" id="drcertificate" /> */}
                  </td>
                </tr>
                <tr>
                  <th>Achivement certificates:</th>
                  <td>
                    <Button variant="contained" component="label">
                      Upload File
                      <input type="file" hidden />
                    </Button>
                    {/* <input type="file" name="drachivment" id="drachivment" /> */}
                  </td>
                </tr>
                <tr>
                  <th>Languge :</th>
                  <td>
                    {" "}
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-filled-label">
                        Language
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={values.language}
                        onChange={handleChange1("language")}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Gujarati</MenuItem>
                        <MenuItem value={20}>Hindi</MenuItem>
                        <MenuItem value={30}>English</MenuItem>
                      </Select>
                    </FormControl>
                    {/* <div class="form-group">
                    <select class="form-control form-select">
                      <option>Languages</option>
                      <option>Arabic</option>
                      <option>English</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div> */}
                  </td>
                </tr>
                <tr>
                  <th>Bio :</th>
                  <td>
                    <TextField
                      sx={{ width: 400 }}
                      id="filled-textarea"
                      label="Multiline Placeholder"
                      // placeholder="Placeholder"
                      multiline
                      variant="filled"
                      error={false}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Address :</th>
                  <td>
                    <TextareaAutosize
                      aria-label="empty textarea"
                      placeholder="Addres"
                      variant="filled"
                      style={{ width: 200 }}
                    />
                  </td>
                </tr>
                <tr>
                  <th>file </th>
                  <td>
                    <Button variant="contained" component="label">
                      <input type="file" />
                    </Button>
                  </td>
                </tr>
              </table>
            </p>
            {/* <a href="#" class="btn btn-primary">
            Go somewhere
          </a> */}
            <Button id="btnsubmit" variant="contained" component="label">
              Submite
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
