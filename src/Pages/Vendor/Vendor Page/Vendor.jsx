import React from 'react'
import './vendor.css'
import {Link} from 'react-router-dom'

function Vendor() {
  return (
    <div className='dashboardcontainer'>
        <div className="vendorPage-item1">
            <div className="vendorPage-header">
                <h3>Vendor List</h3>
                <Link to='/vendor/addVendor'><button>Add Vendor</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Vendor