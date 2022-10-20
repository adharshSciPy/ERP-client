import React from 'react'
import './employee.css'
import { Link } from 'react-router-dom';


function Employee() {
  return (
    <div className='dashboardcontainer'>
      <div className="emp-item1">
        <div className="emp-header">
          <h2>Employee</h2>
          <Link to="/employee/addEmployee"><button className='emp-button'>Add Employee</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Employee