import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../DashBoard/Home";
import { PtDashbord } from "./PtDashbord";
import { PtNavbar } from "./PtNavbar";

export const PtMain = () => {
  return (
    <div>
      <PtNavbar />
      <Routes>
        <Route path="/patient" element={<PtDashbord />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};
