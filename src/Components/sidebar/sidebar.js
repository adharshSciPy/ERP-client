// Header.js
import './sidebar.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Sidebar() {
    return (
        <>

        <div className="container">
            <Link to = '/'>
            <button>dashboard </button>
          </Link> 
           
          <Link to = '/crm'>
          <button>CRM</button>
          </Link> 

          <Link to="products">
            <button>Products</button>
          </Link>
          <Link to = '/table'>
          <button>Tables</button>
          </Link> 
          <Link to = '/hrm'>
          <button>HRM</button>
          </Link> 
          
            </div>
        </>
    )
}
export default Sidebar