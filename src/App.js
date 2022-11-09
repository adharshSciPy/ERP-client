
import React from 'react';
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


function App() {
  return (

      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
          </Routes>
          <Navbar />
          <div className='body-container'>
        
            <div className='sidebar'><Sidebar /></div>

            <div className="body">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="hrm" element={<HRM />} />
                <Route path="crm" element={<CRM />} />
                <Route path="kanban" element={<Kanban />} />
                <Route path="profile" element={<Profile />} />
                <Route path="attendence" element={<Attendence />} />
                <Route path="pos" element={<POS />} />
                <Route path="calender" element={<Calender/>} />

                <Route path="products">
                  <Route index element={<List />} />
                  <Route path=":products" element={<Single />} />
                  <Route path="upload" element={<Upload />} />
                </Route>

                <Route path="crm">
                  <Route index element={<CRM />} />
                  <Route path="addCrm" element={<AddCrm />} />
                </Route>

                <Route path="employee">
                  <Route index element={<Employee />} />
                  <Route path="addEmployee" element={<AddEmployee />} />
                </Route>

                <Route path="invoice">
                  <Route index element={<InvoiceList />} />
                  <Route path="addInvoice" element={<AddInvoice />} />
                  <Route path="printInvoice" element={<PrintInvoice />} />
                </Route>

                <Route path="vendor">
                  <Route index element={<Vendor />} />
                  <Route path="addVendor" element={<AddVendor />} />
                </Route>

                <Route path="rfq">
                  <Route index element={<RFQ />} />
                  <Route path='addRfq' element={<AddRFQ />} />
                </Route>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>






  );
}

export default App;
