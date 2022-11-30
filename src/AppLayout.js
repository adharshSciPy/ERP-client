
import React, {useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HRM from './Pages/HRM/HRM';
import CRM from './Pages/CRM/CRM page/CRM';
import AddCrm from './Pages/CRM/Add CRM/AddCrm'
import Dashboard from './Pages/Dashboard/dashbord';
import Navbar from './Components/navbar/navbar';
import Sidebar from './Components/sidebar/sidebar';
import List from './Pages/Products/List/List'
import Single from './Pages/Products/Single/Single'
import Upload from './Pages/Products/Upload/Upload'
import SignUp from './Pages/SignUp/SignUp';
import InvoiceList from './Pages/Invoice/InvoiceList/InvoiceList';
import PrintInvoice from './Pages/Invoice/PrintInvoice/PrintInvoice';
import AddInvoice from './Pages/Invoice/AddInvoice/AddInvoice';
import Login from './Pages/Login/Login'
import Kanban from './Pages/Kanban/kanban/kanban'
import Employee from './Pages/Employee/Employee Page/Employee'
import AddEmployee from './Pages/Employee/Add Employee/AddEmployee'
import Profile from './Pages/Proflie/Profile'
import Attendence from './Pages/Atttendence/Attendence';
import RFQ from './Pages/RFQ/RFQ/RFQ';
import AddRFQ from './Pages/RFQ/Add RFQ/AddRFQ';
import POS from './Pages/POS/Pos';
import Vendor from './Pages/Vendor/Vendor Page/Vendor'
import AddVendor from './Pages/Vendor/Add Vendor/AddVendor';
import Calender from './Pages/Calender/Calender'
import ProtectedRoute from './Components/ProtectedRoute';
import ForceRedirect from './Components/ForceRedirect';
import { Outlet } from 'react-router-dom';


function AppLayout() {
  const [isConnected, setIsconnected] = useState(false);

  const checkUserToken = () => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user-token"));
      if (user) {
        setIsconnected(true);
      } else {
        setIsconnected(false);
      }
    }
  };
  useEffect(() => {
    checkUserToken();
  }, [isConnected]);

  // const Logout = () => {
  //   if (localStorage.getItem("user-token")) {
  //     localStorage.clear();
  //     setIsconnected(false);
  //   }
  // };
 
 return (
    

    <div className='container'>

         
       
      
          
            <><Navbar /><div className='body-container'>

              <div className='sidebar'><Sidebar /></div>

              <div className="body">
              <Outlet />
              </div>
            </div></>
          
     
    </div>






  );
}

export default AppLayout;
