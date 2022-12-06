import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../DashBoard/Home";
import { AdmAllDr } from "../Pages/AdmAllDr";
// import { Footer } from '../../DashBoard/Footer'
import { AdmAppointment } from "../Pages/AdmAppointment";
import { AdmCalendar } from "../Pages/AdmCalendar";
import { AdmClinic } from "../Pages/AdmClinic";
import { AdmPatientAllList } from "../Pages/AdmPatientAllList";
// import { AddDocters } from '../Pages/AddDocters'
import { AdminNavbar } from "./AdminNavbar";
import { DashbordAdmin } from "./DashbordAdmin";

export const AdminMain = () => {
  return (
    <div>
      {/* <AddDocters/> */}
      <AdminNavbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<DashbordAdmin />} />
        <Route path="/admin/alldocterlist/*" element={<AdmAllDr />} />
        <Route path="/admin/allpatientlist/*" element={<AdmPatientAllList />} />
        <Route path="/admin/admappointments/*" element={<AdmAppointment />} />
        <Route path="/admin/admcalendar/*" element={<AdmCalendar />} />
        <Route path="/admin/admclinic/*" element={<AdmClinic />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
};
