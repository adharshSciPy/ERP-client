
import React from 'react';
import './hrm.css'
import { tableData } from '../../Dummy datas/datas'
import TablePagination from '@mui/material/TablePagination';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone'

function HRM() {


  // contolls for pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
      <img className='selected-image' src={file.preview} style={{ width: "200px" }} alt={file.name} />
    </div>
  ))

  return (

    <div className="dashboardcontainer">
      <div className="hrm-item1">
        <div className="hrm-header">
          <h1>HRM</h1>
          <a href="#demo-modal"><button type="submit" className="hrm-button">Add Employee</button></a>
        </div>

        {/* modal */}
        <div className="hrm-modal">
          <div className="modal" id='demo-modal'>
            <div className="modal__content">
              <a href="#" className="modal__close">&times;</a>

              <h3 style={{ marginBottom: '1rem' }}>Employee Details</h3>

              <div className="employee_data_upload">
                <div className="row">
                  <div className="col">
                    <label for="pImage">Upload Employee Image</label>
                    <div className="image-upload" {...getRootProps()}>
                      {files.length === 0 && <p>Drop Image</p>}
                      {images}
                    </div>
                  </div>

                  <div className="col">
                    <label htmlFor="employeCode">Employee Code</label>
                    <input type="text" name='employeeCode' value='vh012' />
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <label for="employeeName">Name</label>
                    <input type="text" name='employeeName' placeholder='John' />
                  </div>

                  <div className="col">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" name="dob" id="dob" />
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name='phone' id='phone' placeholder='81-390-31990' />
                  </div>

                  <div className="col">
                    <label htmlFor="department">Department</label>
                    <input type="text" name='department' id='department' placeholder='eg: Sales' />
                  </div>
                </div>

                <div className="row">
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
                </div>

                <div className="row" style={{ marginTop: ".5rem" }}>
                  <div className="col">
                    <label htmlFor="designation">Designation</label>
                    <input type="text" placeholder='eg:- junior ...' />

                    <label htmlFor="pfNO">PF Number</label>
                    <input type="text" placeholder='pf number' />

                    <label htmlFor="esi">ESI</label>
                    <input type="text" placeholder='esi' />

                    <label htmlFor="uan">UAN</label>
                    <input type="text" placeholder='uan' />
                  </div>

                  <div className="col">
                    <label htmlFor="primary Address">Bank Account</label>
                    <div>
                      <input type="text" name="houseNo" id='houseNo' placeholder='Account Number' />
                    </div>
                    <div>
                      <input type="text" name="city" id='city' placeholder='Account Name' />
                    </div>
                    <div>
                      <input type="text" name="state" id='state' placeholder='Bank IFSC' />
                    </div>
                    <div>
                      <input type="text" name="pincode" id='pincode' placeholder='Type of Account' />
                    </div>


                    <div>
                      <label htmlFor="working time">Working Time</label>
                      <input type="time"  />  <input type="time" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>





        {/* Table  */}
        <div className='crm-container'>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {
                tableData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((value) => {
                    return (
                      <tr>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.age}</td>
                        <td>{value.gender}</td>
                        <td>{value.designation}</td>
                      </tr>
                    )
                  })
              }
            </tbody>
          </table>
          <div style={{ width: '70%' }}>
            <TablePagination
              sx={{ width: '100%', overflow: 'hidden' }}
              rowsPerPageOptions={[5, 10, 25, 50, 100]}
              component="div"
              count={tableData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </div>
      </div>
    </div>

  );
}

export default HRM
