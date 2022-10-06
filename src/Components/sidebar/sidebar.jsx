// Header.js
import './sidebar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import BadgeIcon from '@mui/icons-material/Badge';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import ReceiptIcon from '@mui/icons-material/Receipt';
import Person from '@mui/icons-material/Person';


function Sidebar() {
  return (
    <>
      <div className="container">
        <Link to='/'>
          <button><DashboardIcon style={{margin: "1rem"}}/>Dashboard </button>
        </Link>

        <Link to='/crm'>
          <button><Diversity3Icon style={{margin: "1rem"}}/>CRM</button>
        </Link>

        <Link to='/hrm'>
          <button><Person style={{margin: "1rem"}}/>HRM</button>
        </Link>

        <Link to='/employee'>
          <button><BadgeIcon style={{margin: "1rem"}}/>Employee</button>
        </Link>

        <Link to="products">
          <button><ProductionQuantityLimitsIcon style={{margin: "1rem"}}/>Products</button>
        </Link>

        <Link to='/kanban'>
          <button><PlaylistAddCheckIcon style={{margin: "1rem"}}/>Kanban</button>
        </Link>


        <Link to='/invoice'>
          <button><ReceiptIcon style={{margin: "1rem"}}/>Invoices</button>
        </Link>


      </div>
    </>
  )
}
export default Sidebar