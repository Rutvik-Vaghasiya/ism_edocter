import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./css/Register.css";
import { validetionschema } from "./Validetion";

export const Register = () => {
  // From Validetion useForm

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  console.log(watch("example"));

  const onSubmit = (data) => {
    console.log(data);
  };
  //--------- DropDowen Box---------
  const [Role, setRole] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  //--------- DropDowen Box---------End---

  return (
    <>
      <div>
        <div class="limiter">
          <div class="container-login100">
            <div class="wrap-login100">
              <div class="login100-pic js-tilt" data-tilt>
                <img src="images/img-01.png" alt="IMG" />
              </div>
              <form
                class="login100-form validate-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <span class="login100-form-title">Member Register</span>
                <div
                  class="wrap-input100 validate-input"
                  data-validate="Filed is required"
                >
                  <input
                    class="input100"
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    {...register("fname", validetionschema.fname)}
                  />

                  <span class="focus-input100"></span>
                  <span class="symbol-input100">
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </span>

                  {errors.fname && (
                    <span className="text-danger">{errors.fname.message}</span>
                  )}
                </div>
                <div
                  class="wrap-input100 validate-input"
                  data-validate="Filed is required"
                >
                  <input
                    class="input100"
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    {...register("lname", validetionschema.lname)}
                  />

                  <span class="focus-input100"></span>
                  <span class="symbol-input100">
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </span>
                  {errors.lname && (
                    <span className="text-danger">{errors.lname.message}</span>
                  )}
                </div>
                <div
                  class="wrap-input100 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    class="input100"
                    type="text"
                    name="email"
                    placeholder="Email"
                    {...register("emailId", validetionschema.emailId)}
                  />

                  <span class="focus-input100"></span>
                  <span class="symbol-input100">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                  {errors.emailId && (
                    <span className="text-danger">
                      {errors.emailId.message}
                    </span>
                  )}
                </div>
                <div
                  class="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <input
                    class="input100"
                    type="password"
                    name="pass"
                    placeholder="Password"
                    {...register("password", validetionschema.password)}
                  />{" "}
                  <span class="focus-input100"></span>
                  <span class="symbol-input100">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                  </span>
                  {errors.password && (
                    <span className="text-danger">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div
                  class="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <input
                    class="input100"
                    type="password"
                    name="confrimpass"
                    placeholder="Confrim Password"
                    {...register("confrimpass", validetionschema.confrimpass)}
                  />
                  <span class="focus-input100"></span>
                  <span class="symbol-input100">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                  </span>
                  {errors.confrimpass && (
                    <span className="text-danger">
                      {errors.confrimpass.message}
                    </span>
                  )}
                </div>
                <div
                  class="wrap-input100 validate-input"
                  data-validate="Filed is required"
                  {...register("gender", validetionschema.gender)}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="radio"
                    id="gendermale"
                    name="fav_language"
                    value="Male"
                  />
                  &nbsp;
                  <label for="gendermale">
                    <i class="fa fa-male" aria-hidden="true">
                      {"  "}&nbsp; Male
                    </i>
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="radio"
                    id="genderfemale"
                    name="fav_language"
                    value="Female"
                  />
                  &nbsp;
                  <label for="genderfemale">
                    <i class="fa fa-female" aria-hidden="true">
                      {"  "}&nbsp; Female
                    </i>
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="radio"
                    id="gnderother"
                    name="fav_language"
                    value="Other"
                  />
                  &nbsp;
                  <label for="gnderother">Other</label>&nbsp;
                  {errors.gender && (
                    <span className="text-danger">{errors.gender.message}</span>
                  )}
                  <span class="focus-input100"></span>{" "}
                </div>
                <div
                  class="wrap-input100 validate-input"
                  data-validate="Filed is required"
                  {...register("role", validetionschema.role)}
                >
                  {
                    <FormControl sx={{ m: 1, Width: 500 }}>
                      <InputLabel id="demo-controlled-open-select-label">
                        Role Name
                      </InputLabel>
                      <Select
                        className="input100"
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={Role}
                        label="Role Name"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  }
                  <br />
                  {errors.role && (
                    <span className="text-danger">{errors.role.message}</span>
                  )}
                </div>
                <div class="container-login100-form-btn">
                  <button class="login100-form-btn">Sign Up</button>
                </div>
                <div class="text-center p-t-136">
                  <Link class="txt2" to="/login">
                    You have Account ? ClickHere
                    <i
                      class="fa fa-long-arrow-right m-l-5"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
