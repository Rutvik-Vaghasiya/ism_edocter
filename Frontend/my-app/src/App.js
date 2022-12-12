import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { DashbordAdmin } from "./Admin/Components/DashbordAdmin";
import { AdminMain } from "./Admin/Components/AdminMain";
// import {AdmPatientAllList} from './Admin/Pages/AdmPatientAllList';
// import {AdmAppointment} from './Admin/Pages/AdmAppointment';
// import {AdmCalendar} from './Admin/Pages/AdmCalendar';
// import {AdmClinic} from './Admin/Pages/AdmClinic';
// import { Template } from "./Template";

// import ComanPages from "./ComanPages";

import { Login } from "./Login";
import { Navbar } from "./Navbar";
// import DrawerAppBar from './TestMui/Drower';
// import PrimarySearchAppBar from './TestMui/NavbarMui1';
// import { Sidebar } from './TestMui/Sidebar';
import { Home } from "./DashBoard/Home";
import { About } from "./DashBoard/About";
import { ContactUs } from "./DashBoard/ContactUs";
import { Register } from "./Register";
import { PtMain } from "./Patient/Components/PtMain";
import { DrMain } from "./Doctor/Components/DrMain";
import { AddDrFields } from "./Temp/AddDrFields";
import { RegiserCaedB } from "./Temp/RegiserCaedB";
import { AdmAddDr } from "./Admin/Pages/AdmAddDr";
import { PtBookAppointment } from "./Patient/Pages/PtBookAppointment";
import { LIstGried } from "./Temp/LIstGried";
import { useEffect, useState } from "react";

function App() {
  const [userIdcookies, setUserIdCookies] = useState("");

  // useEffect(() => {
  // var cookies = usertest();
  // console.log("Cookies", cookies, userIdcookies);
  // }, []);
  const usertest = () => {
    var id = localStorage.getItem("id");
    setUserIdCookies(id);
    return id ? true : false;
  };

  setInterval(function () {
    var cookies = usertest();

    // console.log("Cookies", cookies, userIdcookies);
  }, 1000);

  return (
    // the flow of app starts here
    <div>
      {userIdcookies === "1" ? (
        <AdminMain />
      ) : userIdcookies === "2" ? (
        <DrMain />
      ) : userIdcookies === "3" ? (
        <PtMain />
      ) : (
        <Navbar />
      )}

      {/* <AdmAddDr /> */}
      {/* <LIstGried /> */}
      {/* //................. TEMP ....................... */}
      {/* <RegiserCaedB /> */}
      {/* <AddDrFields /> */}
      {/* //................. TEMP End....................... */}
      {/* <Register /> */}
      {/* <ComanPages/> */}
      {/* MUI Nav */}
      {/* <DrawerAppBar/>    */}
      {/* <PrimarySearchAppBar/> */}
      {/* <Sidebar/> */}
      {/* <Template/> */}
      {/* <Navbar /> */}
      {/* <AdminLogin /> */}
      {/* // ---- ADMIN  */}
      {/* <AdminMain /> */}
      {/* // ----- Patient ---- */}
      {/* <PtMain /> */}
      {/* // Doctor */}
      {/* <DrMain /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/admin" element={<DashbordAdmin />} /> */}
        <Route path="/register" element={<Register />} />
        {/* <Route path='/admin/alldocterlist' element={<AllDrList/>}/>
          <Route path='/admin/allpatientlist' element={<AdmPatientAllList/>}/>
          <Route path='/admin/admappointments' element={<AdmAppointment/>}/>
          <Route path='/admin/admcalendar' element={<AdmCalendar/>}/>
          <Route path='/admin/admclinic' element={<AdmClinic/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
