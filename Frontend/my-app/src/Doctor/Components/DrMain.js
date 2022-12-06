import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdmAddDr } from "../../Admin/Pages/AdmAddDr";
import { Home } from "../../DashBoard/Home";
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
      </Routes>
    </div>
  );
};
