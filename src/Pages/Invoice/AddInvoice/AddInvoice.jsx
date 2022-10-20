import React from 'react'
import dayjs from 'dayjs'
import './addInvoice.css'
import { useState } from 'react'


function AddInvoice() {

  const formatDate = dayjs(new Date()).format('DD/MM/YYYY')

  // const tableRow = []
  const [inputFields, setInputFields] = useState([   
    { product: '', weight: '', price: '', grandTotal: '' }     //update here
  ])
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  }

  const addFields = () => {
    let newfield = {  product: '', weight: '', price: '', grandTotal: ''  }   //update here

    setInputFields([...inputFields, newfield])
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(inputFields)
  }



  return (
    <div className='dashboardcontainer'>
      <div className="addInvoice-item1">
        <div className="addInvoice-header">
          <h3>Create Invoice</h3>
        </div>

        <div className="addInvoice-container">
          <form onSubmit={submit}>
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
                  {inputFields.map((input, index) => {
                    return (
                      <tr key={index}>
                        <td><input type="text" placeholder='eg: product' name='product' value={input.product} onChange={event => handleFormChange(index, event)} /></td>
                        <td><input type="text" placeholder='eg; 300Kg' name='weight' value={input.weight} onChange={event => handleFormChange(index, event)} /></td>
                        <td><input type="text" placeholder='50000' name='price' value={input.price} onChange={event => handleFormChange(index, event)} /></td>
                        <td><input type="text" placeholder='1,00,000' name='grandTotal' value={input.grandTotal} onChange={event => handleFormChange(index, event)} /></td>
                      </tr>
                    )
                  })}
                  <tr>
                    <td colSpan={4}><button onClick={addFields} value={'+'} className='invoice-addMore'>+</button></td>
                  </tr>

                  {/* 
                {row.map((index, val) => {
                  <tr key={val}>
                    <td><input type="text" placeholder='eg: product' /></td>
                    <td><input type="text" placeholder='eg; 300Kg' /></td>
                    <td><input type="text" placeholder='50000' /></td>
                    <td><input type="text" placeholder='1,00,000' /></td>
                  </tr>
                })} */}


                  {/* <tr>
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
                </tr> */}
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
                  <input type="text" style={{ width: '40%' }} />
                </div>
                <input type='submit' value='save' onClick={submit} />
              </div>
            </div>
          </form >
        </div>
      </div>
    </div>
  )
}

export default AddInvoice