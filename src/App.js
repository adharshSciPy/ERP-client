
import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HRM from './Pages/HRM/HRM';
import CRM from './Pages/CRM/CRM';
import Dashboard from './Pages/Dashboard/dashbord';
import Navbar from './Components/navbar/navbar';
import Sidebar from './Components/sidebar/sidebar';
import List from './Pages/Products/List/List'
import Single from './Pages/Products/Single/Single'
import Upload from './Pages/Products/Upload/Upload'
import SignUp from './Pages/SignUp/SignUp';
import Invoice from './Pages/Invoice/Invoice';
import Login from './Pages/Login/Login'
import Kanban from './Pages/Kanban/kanban/kanban'
import Employee from './Pages/Employee/Employee Page/Employee'
import AddEmployee from './Pages/Employee/Add Employee/AddEmployee'


function App() {
  return (
    <>
    <div className='container'> 
    <BrowserRouter>
      <Routes>
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login/>} />
      </Routes>
      <Navbar />
      <div className='body-container'>
        <div className='sidebar'> <Sidebar /></div>

        <div className="body">
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="hrm" element={<HRM />} />
            <Route path="crm" element={<CRM />} />
            <Route path="invoice" element={<Invoice />} />
     
            <Route path="kanban" element={<Kanban />} />
            <Route path="products">
                <Route index element={<List/>} />
                <Route path=":products" element={<Single/>}/>
                <Route path="upload" element={<Upload/>} />
            </Route>

            <Route path="employee">
              <Route index element={<Employee />}  />
              <Route path="addEmployee" element={<AddEmployee />} />
            </Route>
         
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </div>
    </>





  );
}

export default App;
