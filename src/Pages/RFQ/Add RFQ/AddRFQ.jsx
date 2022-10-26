import React from 'react'
import './addRfq.css'
import dayjs from 'dayjs'

function AddRFQ() {
    const date = Date.now()
    const formatDate = dayjs(date).format('DD-MMM-YYYY')
    console.log(Date)
    return (
        <div className='dashboardcontainer'>
            <div className="addRfqItem1">
                <div className="addRfq-header">
                    <h3>Quotation Form</h3>
                    <h4>{formatDate}</h4>
                </div>

                <div className="addReq-details">
                    <div className="row">
                        <div className="col emp-inputs">
                            <label for="employeeName">Reference ID</label>
                            <input type="text" name='referenceId' value='vh2918' />
                        </div>

                        <div className="col emp-inputs">
                            <label htmlFor="email">Vendor</label>
                            <input type="text" name='vendor' placeholder='Raw' />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col emp-inputs">
                            <label for="employeeName">Company Name</label>
                            <input type="text" name='company' placeholder='Log tech' />
                        </div>

                        <div className="col emp-inputs">
                            <label htmlFor="email">Request Partner</label>
                            <input type="text" name='requestPartner' placeholder='eg : Aneesh' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col emp-inputs">
                            <label for="employeeName">Deadline</label>
                            <input type="text" name='deadline' placeholder='01-10-2022' />
                        </div>

                        <div className="col emp-inputs">
                            <label htmlFor="email">Email</label>
                            <input type="text" name='email' placeholder='john@gmail.com' />
                        </div>
                    </div>

                    <input type="submit" value='save' />
                </div>
            </div>
        </div>
    )
}

export default AddRFQ