import React from 'react'
import './employee.css'
import { Link as ReactLink } from 'react-router-dom';
import { tableData } from '../../../Dummy datas/datas'
import TablePagination from '@mui/material/TablePagination';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import { Link } from 'react-router-dom'


function Employee() {

  // contolls for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // card view contorllers\
  const [list, setList] = useState(true)

  return (
    <div className='dashboardcontainer'>
      <div className="emp-item1">
        <div className="emp-header">
          <h2>Employee</h2>
          <ReactLink to="/employee/addEmployee"><button className='emp-button'>Add Employee</button></ReactLink>
        </div>

        <div className="emp-sub-header">
          <IconButton onClick={() => { setList(true) }}>
            <FormatListBulletedIcon />
          </IconButton>
          <IconButton onClick={() => { setList(false) }}>
            <ViewCarouselIcon />
          </IconButton>
        </div>

        {list ? (
          <div className="emp-table">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '2rem' }}><Checkbox /></th>
                  <th style={{ width: '2rem' }}>id</th>
                  <th style={{ width: '3rem' }}>Photo</th>
                  <th style={{ width: '6rem' }}>Name</th>
                  <th style={{ width: '2rem' }}>Age</th>
                  <th style={{ width: '5rem' }}>Gender</th>
                  <th style={{ width: '8rem' }}>Designation</th>
                </tr>
              </thead>
              <tbody>
                {
                  tableData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((value) => {
                      return (
                        <tr>
                          <th><Checkbox size="small" /></th>
                          <td>{value.id}</td>
                          <td><img src={value.img} /></td>
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
        ) : (

          <div className="emp-container">
            {tableData.map((value) => {
              return (
                <div className="emp-cards">
                  <div className="emp-card-img">
                    <img src={value.img} alt="img" />
                  </div>

                  <div className="emp-card-details">
                    <p>{value.name}</p>
                    <p>{value.designation}</p>
                  </div>

                  <div className="emp-actions">
                   <Link to="/profile"><button type='submit'>Profile</button></Link>
                   <Link to='/vendor'><button type='submit'>Message</button></Link>
                  </div>
                </div>


              )
            })}
          </div>)}
      </div>
    </div>
  )
}

export default Employee