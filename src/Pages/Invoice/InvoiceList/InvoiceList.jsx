import React from 'react'
import './invoicelist.css'
import {Link} from 'react-router-dom';


function InvoiceList() {
  return (
    <div className='dashboardcontainer'>
      <div className="invoicelist">
        <div className="invoicelist-header">
          <h2>Invoice</h2>
          {/* <Link to="printInvoice">Print Invoice</Link> */}
          <Link to="addInvoice"><button>Add Invoice</button></Link>
        </div>
      </div>
    
      <Link to='printInvoice'>print invoice</Link>
    </div>
  )
}

export default InvoiceList