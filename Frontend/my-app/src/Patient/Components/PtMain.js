import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../../DashBoard/About";
import { ContactUs } from "../../DashBoard/ContactUs";
import { Home } from "../../DashBoard/Home";
import { PtBookAppointment } from "../Pages/PtBookAppointment";
import { PtDeleteAppointment } from "../Pages/PtDeleteAppointment";
import { PtDoctorList } from "../Pages/PtDoctorList";
import { PtEditeAppointment } from "../Pages/PtEditeAppointment";
import { PtMyAppointment } from "../Pages/PtMyAppointment";
import { PtViewsAppointment } from "../Pages/PtViewsAppointment";
import { PtDashbord } from "./PtDashbord";
import { PtNavbar } from "./PtNavbar";

export const PtMain = () => {
  return (
    <div>
      <PtNavbar />
      <Routes>
        <Route path="/patient" element={<PtDashbord />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/about" element={<About />}></Route> */}
        {/* <Route path="/contact" element={<ContactUs />} /> */}
        <Route path="/patient/clinic" element={"#"} />
        <Route path="/patient/calenders" element={"#"} />
        <Route path="/patient/newapointments" element={<PtBookAppointment />} />
        <Route
          path="/patient/newapointment/:id:clid"
          element={<PtBookAppointment />}
        />
        <Route
          path="/patient/editeappointment/:id"
          element={<PtEditeAppointment />}
        />
        <Route
          path="/patient/viewappointmentdetails/:id"
          element={<PtViewsAppointment />}
        />
        <Route path="/patient/ptdoctoreslist" element={<PtDoctorList />} />
        <Route path="/patient/myappointment" element={<PtMyAppointment />} />
        <Route
          path="/patient/cancelappointment/:id"
          element={<PtDeleteAppointment />}
        />
      </Routes>
    </div>
  );
};
