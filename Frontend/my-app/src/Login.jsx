// import React from "react";
// import "./css/login.css";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { validetionschema } from "./Validetion";

// export const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     mode: "onBlur",
//     mode: "onChange",
//   });

//   const loginConfirm = async (data) => {
//     // await axios.get("https://reqres.in/api/unknown/2", data).then((res) => {res.status === "true" || res.status === 2000
//     if (true) {
//       console.warn("Successfull Login");
//       localStorage.setItem("Id", 101);
//     }
//     // });
//   };
//   const submit = (data) => {
//     console.log("---");
//     loginConfirm(data);
//   };

//   return (
//     <div>
//       <div>
//         <h2 className="cent">Login Page </h2>
//       </div>
//       <div>
//         <p>
//           You are Docter ?
//           <Link to="#" id="cleckhere">
//             Click Here
//           </Link>
//         </p>
//       </div>

//       <form onSubmit={handleSubmit(submit)}>
//         <table>
//           <thead>
//             <tr>
//               <th colSpan={3}>
//                 <div>
//                   <p>
//                     What Is Your Role ? &nbsp;&nbsp;
//                     <input
//                       type="radio"
//                       id="Roleadmin"
//                       name="Role"
//                       value="1"
//                     />{" "}
//                     &nbsp;<label htmlFor="Roleadmin">Admin1</label>&nbsp;
//                     <input type="radio" id="Roledocter" name="Role" value="2" />
//                     &nbsp;<label htmlFor="Roledocter">Docter</label> &nbsp;
//                     <input
//                       type="radio"
//                       id="Rolepatient"
//                       name="Role"
//                       value="3"
//                     />{" "}
//                     &nbsp;<label htmlFor="Rolepatient">Patient</label>{" "}
//                   </p>
//                 </div>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <th>
//                 <label>Email :</label>
//               </th>
//               <td colSpan={2}>
//                 <input
//                   type="email"
//                   id="emailId"
//                   placeholder="Enter Your Email Id"
//                   name="emailId"
//                   {...register("emailId", validetionschema.emailId)}
//                 />
//                 {errors.emailId && <span>{errors.emailId.message}</span>}
//               </td>
//             </tr>
//             <tr>
//               <th>
//                 <label>Password :</label>
//               </th>
//               <td colSpan={2}>
//                 <input
//                   type="password"
//                   id="passwordId"
//                   placeholder="Enter Your Password"
//                   name="passwors"
//                   {...register("password", validetionschema.password)}
//                 />
//                 {errors.password && <span>{errors.password.message}</span>}
//               </td>
//             </tr>
//             <tr>
//               <th colSpan="3">
//                 <button type="submit" id="submit" name="btnsubmit">
//                   Submit
//                 </button>
//               </th>
//             </tr>
//           </tbody>
//         </table>
//       </form>
//       <div>
//         <p>
//           You are Not Register ?{" "}
//           <Link to="/Register" name="Register" id="Register">
//             Click Here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };
