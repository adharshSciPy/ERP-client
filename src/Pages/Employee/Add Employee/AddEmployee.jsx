import React from 'react'
import './addEmployee.css'
import { useDropzone } from 'react-dropzone'
import { useState } from 'react'

function AddEmployee() {

  // controlls for customer image uplaod
  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  
  const images = files.map((file) => (
    <div key={file.name}>
      <img className='emp-selected-image' src={file.preview} style={{ width: "200px" }} alt={file.name} />
    </div>
  ))

  return (
    <div className="dashboardcontainer">
      <div className="addEmp-item1">
        <div className="addEmp-header">
          <h3>Add Employee Details</h3>
        </div>

        <div className="add-emp-details">

          <div className="row">
            <div className="col emp-inputs">
              <label for="employeeName">First Name</label>
              <input type="text" name='firstName' placeholder='John' />
            </div>

            <div className="col emp-inputs">
              <label for="pImage">Employee Image</label>
              <div className="emp-image-upload" {...getRootProps()}>
                {files.length === 0 && <img src="https://t3.ftcdn.net/jpg/02/18/21/86/360_F_218218632_jF6XAkcrlBjv1mAg9Ow0UBMLBaJrhygH.jpg" style={{height: '100%', widht: '100%'}} />}
                {images}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col emp-inputs">
              <label for="employeeName">Last Name</label>
              <input type="text" name='lastName' placeholder='John' />
            </div>

            <div className="col emp-inputs">
             
            </div>
          </div>

          <div className="row">
            <div className="col emp-inputs">
              <label for="employeeId">Employee ID</label>
              <input type="text" name='employeeId' value="vh061" />
            </div>

            <div className="col emp-inputs">
             
            </div>
          </div>

          <div className="row">
            <div className="col emp-inputs">
            <label htmlFor="phone">Phone</label>
            <input type="text" name='phone' id='phone' placeholder='81-390-31990' />
            </div>

            <div className="col emp-inputs">
            <label htmlFor="email">Email</label>
            <input type="text" name='email' id='email' placeholder='john@gmail.com' />
            </div>
          </div>

          {/* <div className="row">
            <div className="col">
              <label htmlFor="primary Address">Primary Address</label>
              <div>
                <input type="text" name="houseNo" id='houseNo' placeholder='House No, Building Name, Area' />
              </div>
              <div>
                <input type="text" name="city" id='city' placeholder='City' />
              </div>
              <div>
                <input type="text" name="state" id='state' placeholder='State' />
              </div>
              <div>
                <input type="text" name="pincode" id='pincode' placeholder='695523' />
              </div>
            </div>


            <div className="col">
              <label htmlFor="primary Address">Other Address</label>
              <div>
                <input type="text" name="houseNo" id='houseNo' placeholder='House No, Building Name, Area' />
              </div>
              <div>
                <input type="text" name="city" id='city' placeholder='City' />
              </div>
              <div>
                <input type="text" name="state" id='state' placeholder='State' />
              </div>
              <div>
                <input type="text" name="pincode" id='pincode' placeholder='695523' />
              </div>
            </div>
          </div> */}

          <div className="row">
            <div className="col emp-inputs">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input type="date" />
            </div>

            <div className="col emp-inputs">
              <label htmlFor="department">Department</label>
              <input type="text" name='department' id='department' placeholder='eg: Sales' />
            </div>
          </div>

          <div className="row">
            <div className="col emp-inputs">
              <label htmlFor="designation">Designation</label>
              <input type="text" placeholder='eg:- junior ...' />
            </div>

            <div className="col emp-inputs">
              <label htmlFor="pfNO">PF Number</label>
              <input type="text" placeholder='pf number' />
            </div>

          </div>

          <div className="row">
            <div className="col emp-inputs">
              <label htmlFor="esi">ESI</label>
              <input type="text" placeholder='esi' />
            </div>


            <div className="col emp-inputs">
              <label htmlFor="uan">UAN</label>
              <input type="text" placeholder='uan' />
            </div>
          </div>

          <h5>Bank Account</h5>
          <div className="row">
            <div className="col emp-inputs">
              <label htmlFor="accountNo">Account No</label>
              <input type="text" placeholder='accountNo' />
            </div>


            <div className="col emp-inputs">
              <label htmlFor="accountName">Account Name</label>
              <input type="text" placeholder='AccountName' />
            </div>
          </div>

          <div className="row">
            <div className="col emp-inputs">
              <label htmlFor="branchName">Branch Name</label>
              <input type="text" placeholder='esi' />
            </div>


            <div className="col emp-inputs">
              <label htmlFor="ifsc">IFSC Code</label>
              <input type="text" placeholder='ifsc' />
            </div>
          </div>

          <h5>Primary Address</h5>
          <div className="row">
            <div className="col emp-inputs">
              <label htmlFor="houseNo">House No</label>
              <input type="text" name="houseNo" id='houseNo' placeholder='house No' />
            </div>


            <div className="col emp-inputs">
              <label htmlFor="city">City</label>
              <input type="text" placeholder='city' />
            </div>
          </div>

          <div className="row">
            <div className="col emp-inputs">
              <label htmlFor="state">State</label>
              <input type="text" placeholder='state' />
            </div>


            <div className="col emp-inputs">
              <label htmlFor="pincode">Pincode</label>
              <input type="text" placeholder='pincode' />
            </div>
          </div>

          <h5>Working Time</h5>
          <div className="row">
            <div className="col emp-inputs">
              <label htmlFor="from">From</label>
              <input type="time" />
            </div>


            <div className="col emp-inputs">
              <label htmlFor="to">To</label>
              <input type="time" />
            </div>
          </div>
          <input type="submit" value="submit" />
        </div>

      </div>
    </div >
  )
}

export default AddEmployee