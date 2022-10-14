import React from 'react'
import dayjs from 'dayjs'
import './addInvoice.css'


function AddInvoice() {

  const formatDate = dayjs(new Date()).format('DD/MM/YYYY')

  return (
    <div className='dashboardcontainer'>
      <div className="addInvoice-item1">
        <div className="addInvoice-header">
          <h3>Create Invoice</h3>
        </div>

        <div className="addInvoice-container">

          <div className="row">
            <div className="col inv-col">
              <label htmlFor="inovoiceNO">Invoic No</label>
              <input type="text" placeholder='INC400' />
            </div>

            <div className="col inv-col">
              <label htmlFor="date">Date</label>
              <input type="text" value={formatDate} />
            </div>
          </div>

          <div className="row">
            <div className="col inv-col">
              <label htmlFor="inovoiceNO">Billing to</label>
              <input type="text" placeholder='Lorem Ipsmsdfd' />
            </div>

            <div className="col inv-col">
              <label htmlFor="date">Order No</label>
              <input type="text" placeholder='NSX20100238' />
            </div>
          </div>

          <div className="row">
            <div className="col inv-col">
              <label></label>
              <input type="text" placeholder='123 place st, City dsfsdf Ipsmsdfd' />
            </div>

            <div className="col inv-col">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder='emasdfdsfil@gmail.com' />
            </div>
          </div>

          <div className="invoice-table" style={{ marginTop: '1.4rem' }}>
            <table className='addInvoice-table'>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quatnity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td><input type="text" placeholder='eg: product' /></td>
                  <td><input type="text" placeholder='eg; 300Kg' /></td>
                  <td><input type="text" placeholder='50000' /></td>
                  <td><input type="text" placeholder='1,00,000' /></td>
                </tr>

                <tr>
                  <td><input type="text" placeholder='eg: product' /></td>
                  <td><input type="text" placeholder='eg; 300Kg' /></td>
                  <td><input type="text" placeholder='50000' /></td>
                  <td><input type="text" placeholder='1,00,000' /></td>
                </tr>


                <tr>
                  <td><input type="text" placeholder='eg: product' /></td>
                  <td><input type="text" placeholder='eg; 300Kg' /></td>
                  <td><input type="text" placeholder='50000' /></td>
                  <td><input type="text" placeholder='1,00,000' /></td>
                </tr>


                <tr>
                  <td><input type="text" placeholder='eg: product' /></td>
                  <td><input type="text" placeholder='eg; 300Kg' /></td>
                  <td><input type="text" placeholder='50000' /></td>
                  <td><input type="text" placeholder='1,00,000' /></td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td>Grand Total</td>
                  <td></td>
                  <td></td>
                  <td>4,00,000/-</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="invoiceNote">
            <div className="row">
              <div className="col">
                <label htmlFor="notes">Notes</label>
                <textarea name="" id="" rows="3" style={{ width: '95%' }}></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label htmlFor="notes">Thanks Message</label>
               <input type="text" style={{width: '40%'}} />
              </div>
          <input type='submit' value='save' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddInvoice