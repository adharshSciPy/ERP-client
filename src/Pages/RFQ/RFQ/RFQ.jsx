import React from 'react'
import './rfq.css'
import { Link } from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox';

function RFQ() {
  return (
    <div className='dashboardcontainer'>
        <div className="rfq-item1">
            <div className="rfq-header">
                <h3>Request For Quotation</h3>
                <Link to='/rfq/addRfq'><button type='submit'>Add Request</button></Link>
            </div>

            <div className="rfq-body">
                <table>
                    <thead>
                        <tr>
                        <th style={{ width: '2rem' }}><Checkbox /></th>
                            <th style={{width: '2rem'}}>ID</th>
                            <th style={{width: '6rem'}}>Date</th>
                            <th>Vendor</th>
                            <th>Request Partner</th>
                            <th>Deadline</th>
                            <th>Total Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th style={{ width: '2rem' }}><Checkbox  size='small'/></th>
                            <td>1</td>
                            <td>16-Oct-2022</td>
                            <td>Lorem</td>
                            <td>Raw</td>
                            <td>16-Nov-2022</td>
                            <td>70</td>
                        </tr>
                        <tr>
                        <th style={{ width: '2rem' }}><Checkbox  size='small'/></th>
                            <td>2</td>
                            <td>16-Oct-2022</td>
                            <td>Lorem</td>
                            <td>Raw</td>
                            <td>16-Nov-2022</td>
                            <td>20</td>
                        </tr>
                        <tr>
                        <th style={{ width: '2rem' }}><Checkbox  size='small'/></th>
                            <td>3</td>
                            <td>16-Oct-2022</td>
                            <td>Lorem</td>
                            <td>ipsum dolor.</td>
                            <td>16-Nov-2022</td>
                            <td>30</td>
                        </tr>
                        <tr>
                        <th style={{ width: '2rem' }}><Checkbox  size='small'/></th>
                            <td>4</td>
                            <td>16-Oct-2022</td>
                            <td>Lorem</td>
                            <td>Raw</td>
                            <td>16-Nov-2022</td>
                            <td>80</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default RFQ