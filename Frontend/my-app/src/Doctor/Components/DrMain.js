import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdmAddDr } from "../../Admin/Pages/AdmAddDr";
import { Home } from "../../DashBoard/Home";
import { DrAlldoctorList } from "../Pages/DrAlldoctorList";
import { DrApAcceptedList } from "../Pages/DrApAcceptedList";
import { DrAppReqList } from "../Pages/DrAppReqList";
import { DrjoinledClinic } from "../Pages/DrjoinledClinic";
import { DrNewClinicList } from "../Pages/DrNewClinicList";
import { DrPtdataList } from "../Pages/DrPtdataList";
import { TempTest } from "../Pages/TempTest";
import { DrDashbord } from "./DrDashbord";
import { DrNavbar } from "./DrNavbar";

export const DrMain = () => {
  return (
    <div>
      <DrNavbar />
      <Routes>
        <Route path="/doctor" element={<DrDashbord />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctor/adddocter" element={<AdmAddDr />} />
        <Route
          path="/doctor/appoinment/requiested"
          element={<DrAppReqList />}
        />
        <Route
          path="/doctor/appoinment/shedual"
          element={<DrApAcceptedList />}
        />
        <Route path="/doctor/doctorslist" element={<DrAlldoctorList />} />
        <Route path="/doctor/TempList" element={<TempTest />} />
        <Route path="/doctor/patientlist" element={<DrPtdataList />} />
        <Route
          path="/doctor/clinic/joinedclinic"
          element={<DrjoinledClinic />}
        />
        <Route path="/doctor/clinic/clinicList" element={<DrNewClinicList />} />
      </Routes>
    </div>
  );
};
