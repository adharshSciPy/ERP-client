
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HRM from './Pages/HRM';
import CRM from './Pages/crm/CRM';
import Dashboard from './Pages/dashbord';
import Navbar from './Components/navbar';
import Sidebar from './Components/sidebar/sidebar';
import List from './Pages/Products/List/List'
import Single from './Pages/Products/Single/Single'
import Upload from './Pages/Products/Upload/Upload'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <>
    <div className='container'> <BrowserRouter>
      <Navbar />
      <div className='body-container'>
        <div className='sidebar'> <Sidebar /></div>

        <div className="body">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="hrm" element={<HRM />} />
            <Route path="crm" element={<CRM />} />
            <Route path="login" element={<Login/>} />
            <Route path="signup" element={<SignUp />} />
            <Route path="products">
            <Route index element={<List/>} />
            <Route path=":products" element={<Single/>}/>
            <Route path="upload" element={<Upload/>} />
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
