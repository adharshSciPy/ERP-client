import React from 'react'
import './crm.css'
import { Link as ReactLink } from 'react-router-dom';
import { tableData } from '../../../Dummy datas/datas'
import TablePagination from '@mui/material/TablePagination';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import { Link } from 'react-router-dom'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import EditIcon from '@mui/icons-material/Edit';
import Person2Icon from '@mui/icons-material/Person2';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

function Employee() {
  // sidling panel
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
    id: "",
    image: ""
  });

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
          <ReactLink to="/crm/addCrm"><button className='emp-button'>Add Customer</button></ReactLink>
        </div>

        {/* side drawer */}
        <SlidingPane
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
          isOpen={state.isPaneOpen}
          width="500px"
          title="Customer details"
          subtitle="you can manage your customer details"
          onRequestClose={() => {
            // triggered on "<" on left top click or on outside click
            setState({ isPaneOpen: false });
          }}
        >
          <div className='profileContainer'>
            <div className='profilepicCont'>
              <div>
                <img src={state.image} alt="" className='profilepic' />
              </div>
            </div>
            <div className='profileName'>
              {state.name}
            </div>
            <div className='profileLabel'>
              <h5 style={{ fontSize: '12px', color: "blue" }}>{state.name}@gmail.com</h5>
            </div>
            <div className='profileLabel'>
              <h5 style={{ fontSize: '12px', color: "blue" }}>819201292</h5>
            </div>
            <div className="profileMenu" style={{ display: "flex" }}>

              <div className='pIcon'>
                <Person2Icon></Person2Icon>

              </div>
              <div className='pIcon'>
                <EditIcon></EditIcon>

              </div>
              <div className='pIcon'>
                <MoreHorizIcon></MoreHorizIcon>

              </div>

            </div>
          </div>

          <div className='detailsContainer'>
            <div className="detailsTitleContainer">
              <h3>Details</h3>
              <div className="detailsItem">
                <div className="row">
                  <div className="col">
                    <p>Sales</p>
                    <p>Steel Partner</p>
                    <p>{state.name}@gmail.com</p>
                    <p>819201282</p>
                  </div>
                  <div className="col">
                    <p>Cecilia Chapman</p>
                    <p>711-2880 Nulla St.</p>
                    <p>Mankato Mississippi 96522</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="detailsTitleContainer">
              <h3>Label</h3>
              <div className="detailsItem" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', paddingBottom: '.4rem' }}>
                <div className="tags">
                  <p>New</p><div className='tag-close'>x</div>
                </div>
                <div className="tags">
                  <p>Achiver</p><div className='tag-close'>x</div>
                </div>
                <div className="tags">
                  <p>New</p><div className='tag-close'>x</div>
                </div>
                <div className="tags">
                  <p>Achiver</p><div className='tag-close'>x</div>
                </div>
              </div>
            </div>
            <div className="detailsTitleContainer">
              <h3>Task and Remainder</h3>
              <div className="detailsItem">

                items

              </div>

            </div>

            <div className="detailsTitleContainer">
              <h3>Workflow</h3>
              <div className="detailsItem">

                items

              </div>

            </div>
            <div className="detailsTitleContainer">
              <h3>Activity</h3>
              <div className="detailsItem">

                <Timeline position='alternate'>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <div className="timeline-main-item">Account Created</div>
                      <div className="timeline-sub-item">at 20-May-2022</div>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <div className="timeline-main-item">First Purhcase</div>
                      <div className="timeline-sub-item">at 02-Jun-2022</div>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <div className="timeline-main-item">Tier Achievment</div>
                      <div className="timeline-sub-item">at 10-Jul-2022</div>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <div className="timeline-main-item">Tier Achievment</div>
                      <div className="timeline-sub-item">at 10-Jul-2022</div>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                      <div className="timeline-main-item">Tier Achievment</div>
                      <div className="timeline-sub-item">at 10-Jul-2022</div>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
          </div>


        </SlidingPane>

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
                  <th style={{ width: '1rem' }}>id</th>
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
                        <tr onClick={() => setState({ isPaneOpen: true, id: value.id, name: value.name, image: value.img, age: value.age, gender: value.gender, designation: value.designation })}>
                          <td><Checkbox size="small" style={{ zIndex: 2 }} /></td>
                          <td><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>{value.id} <img src={value.img} /></div></td>
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
                <div className="emp-cards" onClick={() => setState({ isPaneOpen: true, id: value.id })}>
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