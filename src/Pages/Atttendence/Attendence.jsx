import React from 'react'
import './attendence.css'
import { startOfMonth, endOfMonth, differenceInDays, getDay, getMonth, getYear } from 'date-fns'
import Checkbox from '@mui/material/Checkbox';
import dayjs from 'dayjs'
// import PersonSearchIcon from '@mui/icons-material/PersonSearch';

function Attendence() {

    const date = Date.now()
    const formatDate = dayjs(date).format('DD-MMM-YYYY')
  
    console.log(date)      
    let day
    let toDay
    const s = startOfMonth(date)
    const e = endOfMonth(date)
    let dates
    const month = getMonth(date)
    const year = getYear(date)
    const numDays = differenceInDays(e, s) + 1
    let toDate
    let toMonth 
    let toYear

   

    console.log(toDay)
   



    return (
        <div className="dashboardcontainer">
            <div className="attendence-item1">
                <div className="attendence-header">
                    <h3>Attendence Mangament</h3>
                    <input type="text" placeholder='search employees....' />
                </div>

                {/* attenden body */}
                <div className="attendence-secondary-header">
                    <div className="employee-data">
                        <div className="row">
                            <div className="col"><p>Employee Code</p></div>
                            <div className="col"><p>vh302</p></div>
                        </div>
                        <div className="row">
                            <div className="col"><p>Employee Name</p></div>
                            <div className="col"><p>Sudha</p></div>
                        </div>
                    </div>
                    <div className="employee-data">
                        <div className="row">
                            <div className="col"><p>{formatDate}</p></div>
                        </div>
                        <div className="row">
                            <div className="col"><p>{day}</p></div>
                        </div>
                    </div>
                </div>

                <div className="attendence-body">
                    {/* <div className="attendence-table" style={{ height: '70vh', overflowY: 'scroll' }}> */}
                        {/* <table>
                            <tr style={{
                                position: 'sticky', top: '0', zIndex: '10'
                            }}>
                                <th colSpan='2'>Date</th>
                                <th style={{ color: 'green' }}>PR</th>
                                <th style={{ color: 'red' }}>AB</th>
                                <th style={{ color: 'skyblue' }}>CL</th>
                                <th style={{ color: 'violet' }}>HD</th>
                                <th style={{ color: 'purple' }}>CA</th>
                                <th style={{ color: 'blue' }}>OT</th>
                                <th style={{ color: 'orange' }}>HO</th>
                            </tr> */}
                         <div className="calender-grid">
                        {
                            Array.from({ length: numDays }).map((key, index) => {
                                dates = (index + 1)
                                // const row1 = ((date)/2)

                                const tdDate = dayjs(`${month + 1}/${dates}/${year}`).format('DD-MMM-YYYY')
                                toDay = dayjs(`${month + 1}/${dates}/${year}`).format('DD-MMM-YYYY')
                                console.log(day)
                                toDate = dayjs(`${month + 1}/${dates}/${year}`).format('DD')
                                toMonth = dayjs(`${month + 1}/${dates}/${year}`).format('MM')
                                toYear = dayjs(`${month + 1}/${dates}/${year}`).format('YYY')
                                const dayNo = getDay(new Date(toYear, toMonth, toDate)) 
                                switch (dayNo) {
                                   case 0:
                                       day = 'Sunday'
                                       break;
                                   case 1:
                                       day = 'Monday'
                                       break;
                                   case 2:
                                       day = 'Tuesday'
                                       break;
                                   case 3:
                                       day = 'Wednesday'
                                       break;
                                   case 4:
                                       day = 'Thursday'
                                       break;
                                   case 5:
                                       day = 'Friday'
                                       break;
                                   case 6:
                                       day = 'Saturday'
                                       break;
                                   default:
                                       day = 'Invalid Day'
                               }
                           
                               console.log(day)
                 
                                return (

                              
                                        <div className="calender-grid-items">{tdDate}{day}</div>
                               

                                    // <tr>
                                    //     <td colSpan='2'>{tdDate}</td>
                                    //     <td> <Checkbox size="small" /></td>
                                    //     <td> <Checkbox size="small" /></td>
                                    //     <td> <Checkbox size="small" /></td>
                                    //     <td> <Checkbox size="small" /></td>
                                    //     <td> <Checkbox size="small" /></td>
                                    //     <td> <Checkbox size="small" /></td>
                                    //     <td> <Checkbox size="small" /></td>
                                    // </tr>
                                )
                            })
                        }
                        {/* </table> */}
                        </div>
                        <input type="submit" value='save' style={{ marginTop: '10px', position: 'sticky' }} />
                    {/* </div> */}
                </div>
            </div>
        </div >
    )
}

export default Attendence