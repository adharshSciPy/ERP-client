// Header.js
import './sidebar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import BadgeIcon from '@mui/icons-material/Badge';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import ReceiptIcon from '@mui/icons-material/Receipt';
import Person from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useState } from 'react';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';




function Sidebar() {

  const sidebarData = [
    {
      title: 'Dashboard',
      icon: <DashboardIcon />,
      link: '/'
    },
    {
      title: "CRM",
      icon: <Diversity3Icon />,
      link: '/crm'
    },
    // {
    //   title: "HRM",
    //   icon: <Person />,
    //   link: '/hrm'
    // },
    {
      title: 'RFQ',
      icon: <RequestQuoteIcon />,
      link: '/rfq'
    },
    {
      title: 'Employee',
      icon: <BadgeIcon />,
      link: '/employee'
    },

    {
      title: 'Inventory',
      icon: <ProductionQuantityLimitsIcon />,
      link: '/products'
    },

    {
      title: 'Invoices',
      icon: <ReceiptIcon />,
      link: '/invoice'
    },

    {
      title: 'Kanban',
      icon: <PlaylistAddCheckIcon />,
      link: '/kanban'
    },

    {
      title: 'Vendor',
      icon: <StoreIcon />,
      link: '/vendor'
    },

    {
      title: 'Profile',
      icon: <ManageAccountsIcon />,
      link: '/profile'
    },
    {
      title: 'POS',
      icon: <PointOfSaleIcon />,
      link: '/pos'
    },
    {
      title: 'Calender',
      icon: <AssignmentTurnedInIcon />,
      link: '/calender'
    },

    // {
    //   title: 'Attendence',
    //   icon: <AssignmentTurnedInIcon />,
    //   link: '/attendence'
    // },
    // {
    //   title: 'POSCopy',
    //   icon: <PointOfSaleIcon />,
    //   link: '/posCopy'
    // }
  ]

  return (
    <>
      <div className="sidebar-container">
        {
          sidebarData.map((val, key) => {
            return (

              <NavLink to={val.link} id="sideBar_items" className={({ isActive }) => isActive ? "btn-active" : ""}>
                <div style={{ margin: '1rem' }}>{val.icon}</div>{val.title}
              </NavLink>
            )
          })
        }
      </div>
    </>
  )
}
export default Sidebar