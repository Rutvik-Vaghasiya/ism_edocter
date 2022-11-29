import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login';
import { Register } from '../Pages/Register';
//import { AdminLogin } from '../Admin/AdminLogin';
import { Navbar } from './Navbar';

export const MainControns = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path='/Home'  element={<Home /> } />
          <Route path='Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
        
        {/* <AdminLogin /> */}
    </div>
  )
}
