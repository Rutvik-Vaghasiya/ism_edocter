import { Route, Routes } from "react-router-dom";
import { AdminLogin } from "./Admin/AdminLogin";
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
import { PtAppoinment } from "./Patient/Pages/PtAppoinment";
import { LIstGried } from "./Temp/LIstGried";

function App() {
  return (
    // the flow of app starts here
    <div>
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
      {/* <AdminLogin/> */}
      {/* // ---- ADMIN  */}
      {/* <AdminMain /> */}
      <PtMain />
      {/* // Doctor */}
      {/* <DrMain /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<AdminLogin />} />
        <Route path="./about" element={<About />}></Route>
        <Route path="./contact" element={<ContactUs />} />
        <Route path="./admin" element={<DashbordAdmin />} />
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
