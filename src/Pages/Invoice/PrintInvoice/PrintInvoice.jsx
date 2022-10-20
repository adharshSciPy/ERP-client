import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import './invoice.css'
import dayjs from 'dayjs'

function Invoice() {
  const formatDate = dayjs(new Date()).format('DD/MM/YYYY')
  console.log(formatDate)

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="dashboardcontainer">
        <div className="invoice-item1" >
          <div className="invoice-container" ref={componentRef}>


            <div className="invoice-header">
              <div className="invoice-logo">
                <img src="https://i.pinimg.com/736x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg" alt="" />
              </div>
             <h3>Invoice</h3>
            </div>

            <div className="invoice-body">
              <p>Date : {formatDate}</p>
              <div className="invoice-address">
                <div className="from">
                  <p><span>Billed From :</span> </p>
                  <p>Lorem Ipsmsdfd</p>
                  <p>123 place st, City dsfsdf</p>
                  <p>emasdfdsfil@gmail.com</p>
                </div>

                <div className="to">
                <p><span>Billed To :</span> </p>
                <p>Lorem Ipsmsdfd</p>
                  <p>123 place st, City dsfsdf</p>
                  <p>emasdfdsfil@gmail.com</p>
      
                </div>
              </div>

              <div className="invoice-table">
                <table>
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
                      <td>Product</td>
                      <td>2g</td>
                      <td>200</td>
                      <td>2000</td>
                    </tr>

                    <tr>
                      <td>Product</td>
                      <td>2g</td>
                      <td>200</td>
                      <td>2000</td>
                    </tr>

                    <tr>
                      <td>Product</td>
                      <td>2g</td>
                      <td>200</td>
                      <td>2000</td>
                    </tr>

                    <tr>
                      <td>Product</td>
                      <td>2g</td>
                      <td>200</td>
                      <td>2000</td>
                    </tr>
                  </tbody>

                  <tfoot>
                    <tr>
                      <td>Grand Total</td>
                      <td></td>
                      <td></td>
                      <td>8000</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="payment-details">
                <h5>Payment Information</h5>
                <div className="payment-bank-details">
                  <p>Bank  :  lorem bank Trivandrum</p>
                  <p>Phone :  812-903-1223</p>
                  <p>Email : lorem@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <button className='invoice-btn' onClick={handlePrint}>Print this out!</button>
        </div>
      </div>
    </>
  )
}

export default Invoice