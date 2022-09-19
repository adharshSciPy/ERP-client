import React from 'react';
import './crm.css';
import { tableData } from '../../Dummy datas/datas'
import { useState } from 'react';
import TablePagination from '@mui/material/TablePagination';
function CRM() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [designation, setDesignation] = useState('')

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(tableData)
  }
  return (

// sds
    <>
      <div className="dashboardcontainer">
        <div className="crm-item1">
          <div className='crm-header'>
            <h1>CRM</h1>
            <a href="#demo-modal"><button type="submit" className='crm-button'>Add User</button></a>
          </div> 


           {/* modal */}
        <div className="crm-modal">
        <div id="demo-modal" className="modal">
          <div className="modal__content">
            <a href="#" className="modal__close">&times;</a>

            <h3 style={{marginBottom: '2rem'}}>User Details</h3>

            {/* form for userDetials */}
          
            <div className='row'>
                <div className= 'col'>
                  <label for="name">Name</label>
                      <div className="crm-modal">
                        <input type="text" id="name" name="name" placeholder="Your name.." value={name} onChange={(e)=>setName(e.target.value)} />
                      </div>
                </div>

                <div className= 'col'>
                  <label for="age">Age</label>
                  <div className=" crm-modal">
                      <input type="text" id="age" name="age" placeholder="Your age.." value={age} onChange={(e)=> setAge(e.target.value)} />
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className= 'col'>
                  <label for="gender">Gender</label>
                      <div className=" crm-modal">
                        <input type="text" id="gender" name="gender" placeholder="gender.." value={gender} onChange={(e)=>setGender(e.target.value)}/>
                      </div>
                </div>

                <div className= 'col'>
                  <label for="dsignation">Designation</label>
                  <div className=" crm-modal">
                      <input type="text" id="designation" name="designation" placeholder="Your designation.." value={designation} onChange={(e)=> setDesignation(e.target.value)} />
                    </div>
                </div>
            </div>

            {/* <div className='row'>
                <div className= 'col'>
                  <label for="fname">First Name</label>
                      <div className=" crm-modal">
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                      </div>
                </div>

                <div className= 'col'>
                  <label for="fname">First Name</label>
                  <div className=" crm-modal">
                      <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                    </div>
                </div>
            </div> */}

            <input type="submit" value="Submit" onClick={handleSubmit} style={{marginTop: '10px'}} />

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
      <div style={{width: '70%'}}> 
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
    </>
    
  );
}

export default CRM
