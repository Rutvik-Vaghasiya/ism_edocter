import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { validetionschema } from "./Validetion";

export const LoginPage = () => {
  var navigate = useNavigate();
  //---------- validetion on from  useFrom
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    mode: "onChange",
  });

  const loginConfirm = async (data) => {
    // await axios.get("https://reqres.in/api/unknown/2", data).then((res) => {res.status === "true" || res.status === 2000
    if (true) {
      console.log("Successfull Login", data.role);
      localStorage.setItem("id", data.role);
      switch (data.role) {
        case "1":
          navigate("/admin");
          break;
        case "2":
          navigate("/doctor");
          break;
        case "3":
          navigate("/patient");
          break;
        default:
          navigate("/");
          break;
      }
    }
    // });
  };
  const submit = (data) => {
    console.log("---", data);
    loginConfirm(data);
  };

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
                onSubmit={handleSubmit(submit)}
              >
                <span class="login100-form-title">Member Login</span>

                <div
                  class="wrap-input100 validate-input "
                  {...register("role", validetionschema.role)}
                >
                  <h5 class>
                    &nbsp;&nbsp;&nbsp;&nbsp;What Is Your Role ?<br />
                  </h5>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="radio"
                    id="Roleadmin"
                    name="Role"
                    value="1"
                    {...register("role", validetionschema.role)}
                  />
                  &nbsp;<label htmlFor="Roleadmin">Admin</label>&nbsp;
                  <input
                    type="radio"
                    id="Roledocter"
                    name="Role"
                    value="2"
                    {...register("role", validetionschema.role)}
                  />
                  &nbsp;<label htmlFor="Roledocter">Docter</label>&nbsp;
                  <input
                    type="radio"
                    id="Rolepatient"
                    name="Role"
                    value="3"
                    {...register("role", validetionschema.role)}
                  />
                  &nbsp;<label htmlFor="Rolepatient">Patient</label>
                  {errors.role && (
                    <span className="text-danger">{errors.role.message}</span>
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
                    defaultValue={"v@g.c"}
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
                    defaultValue={"HR@123"}
                    {...register("password", validetionschema.password)}
                  />
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

                <div class="container-login100-form-btn">
                  <button class="login100-form-btn">Login</button>
                </div>

                <div class="text-center p-t-12">
                  <span class="txt1">Forgot</span>
                  <a class="txt2" href="#">
                    Username / Password?
                  </a>
                </div>

                <div class="text-center p-t-136">
                  <a class="txt2" href="/register">
                    Create your Account
                    <i
                      class="fa fa-long-arrow-right m-l-5"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
