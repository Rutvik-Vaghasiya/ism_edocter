import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../../DashBoard/About";
import { ContactUs } from "../../DashBoard/ContactUs";
import { Home } from "../../DashBoard/Home";
import { PtAppoinment } from "../Pages/PtAppoinment";
import { PtDoctorList } from "../Pages/PtDoctorList";
import { PtDashbord } from "./PtDashbord";
import { PtNavbar } from "./PtNavbar";

export const PtMain = () => {
  return (
    <div>
      <PtNavbar />
      <Routes>
        <Route path="/patient" element={<PtDashbord />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/patient/appointment" element={<PtAppoinment />} />
        <Route path="/patient/clinic" element={"#"} />
        <Route path="/patient/calenders" element={"#"} />
        <Route path="/patient/appointmenthistroy" element={"#"} />
        <Route path="/patient/ptdoctoreslist" element={<PtDoctorList />} />
      </Routes>
    </div>
  );
};
