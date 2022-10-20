import React from 'react';
import './crm.css';
import { tableData } from '../../Dummy datas/datas'
import { useDropzone } from 'react-dropzone'
import TablePagination from '@mui/material/TablePagination';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

function CRM() {
// sidling panel
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
    id:""
  });

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [designation, setDesignation] = useState('')

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
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(tableData)
  }

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


  // dynamic input feild for email

  const inputArr = [
    {
      type: "email",
      id: 0,
      value: ""
    }
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    setArr(s => {
      return [
        ...s,
        {
          type: "email",
          value: ""
        }
      ];
    });
  };

  const handleChange = e => {
    e.preventDefault();

    const index = e.target.id;
    setArr(s => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

  // controlls for accordion in form
  const [expanded, setExpanded] = React.useState(false);

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // contorolling toggle button for appoinment
  const [alignment, setAlignment] = React.useState('call');

  const handleAppoinment = (event, newAlignment) => {
    setAlignment(newAlignment);
    console.log(setAlignment)
  };

  // Data and time pciker contorlls


  return (

    <>
      <div className="dashboardcontainer">
        <div className="crm-item1">
          <div className='crm-header'>
            <h1>CRM</h1>
            <a href="#demo-modal"><button type="submit" className='crm-button'>Add User</button></a>
          </div>

          <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={state.isPaneOpen}
        width = "500px"
        title="Hey, it is optional pane title.  I can be React component too."
        subtitle="Optional subtitle."
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setState({ isPaneOpen: false });
        }}
      >
        <div> {state.id} </div>
        
        
      </SlidingPane>


          {/* modal */}
          <div className="crm-modal">
            <div id="demo-modal" className="modal">
              <div className="modal__content">
                <a href="#" className="modal__close">&times;</a>

                <h3 style={{ marginBottom: '1rem' }}>User Details</h3>


                {/* form for userDetials */}
                <div className='crm-inputs'>
                  <div className='row'>
                    <div className="col">
                      <label for="pImage">Upload Profile Image</label>
                      <div className="image-upload" {...getRootProps()}>
                        {files.length === 0 && <p>Drop Image</p>}
                        {images}
                      </div>
                    </div>

                    <div className='col'>
                      <label for="fname">First Name</label>
                      <div className="crm-modal">
                        <input type="text" id="fname" name="fname" placeholder="David" style={{ width: "10rem" }} />
                      </div>
                    </div>


                    <div className='col'>
                      <label for="lastname">Last Name</label>
                      <div className=" crm-modal">
                        <input type="text" id="lastName" name="lastName" placeholder="Walker" style={{ width: "10rem" }} />
                      </div>
                    </div>
                  </div>


                  <div className="row" style={{ margin: ".8rem 0" }}>
                    <div className="col">
                      <h4>Title</h4>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col'>
                      <label for="email">Email</label>
                      <div className=" crm-modal">
                        <input type="email" id="email" name="email" placeholder="david@gmail.com" />
                        <button className="button" onClick={addInput}>+</button>
                      </div>

                      {arr.map((item, i) => {
                        return (
                          <div className="col">
                            <input
                              onChange={handleChange}
                              value={item.value}
                              id={i}
                              type={item.type}
                              size="40"
                              placeholder='doe@gmail.com'
                            />
                          </div>
                        );
                      })}

                    </div>

                    <div className='col'>
                      <label for="phone">Phone</label>
                      <div className=" crm-modal">
                        <input type="text" id="phone" name="phone" placeholder="81-390-31332" />
                        <button onClick={addInput}>+</button>
                      </div>

                      {arr.map((item, i) => {
                        return (
                          <div className="col">
                            <input
                              onChange={handleChange}
                              value={item.value}
                              id={i}
                              type={item.type}
                              size="40"
                              placeholder="81-390-31332"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <label htmlFor="department">Department</label>
                      <div className="crm-modal">
                        <input type="text" id='department' name="department" placeholder='eg : Sales' />
                      </div>
                    </div>

                    <div className="col">
                      <label htmlFor="businessRole">Business Role</label>
                      <div className="crm-modal">
                        <input type="text" id='businessRole' name="businessRole" placeholder='admin' />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <label htmlFor="primaryAddress">Primary Address</label>
                      <div className="crm-modal">
                        <input type="text" name="houseNo" id='houseNo' placeholder='House No, Building Name, Area' />
                      </div>
                      <div className="crm-modal">
                        <input type="text" name="city" id='city' placeholder='City' />
                      </div>
                      <div className="crm-modal">
                        <input type="text" name="state" id='state' placeholder='State' />
                      </div>
                      <div className="crm-modal">
                        <input type="text" name="pincode" id='pincode' placeholder='695523' />
                      </div>
                    </div>


                    <div className="col">
                      <label htmlFor="otherAddress">Other Address</label>
                      <div className="crm-modal">
                        <input type="text" name="houseNo" id='houseNo' placeholder='House No, Building Name, Area' />
                      </div>
                      <div className="crm-modal">
                        <input type="text" name="city" id='city' placeholder='City' />
                      </div>
                      <div className="crm-modal">
                        <input type="text" name="state" id='state' placeholder='State' />
                      </div>
                      <div className="crm-modal">
                        <input type="text" name="pincode" id='pincode' placeholder='695523' />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <label htmlFor="description">Description</label>
                      <div className="crm-modal">
                        <textarea name="description" id="" cols="" rows="5" style={{ width: "89%" }} />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <label htmlFor="leadSource">LeadSource</label>
                      <div className="crm-modal">
                        <input type="text" id='leadSource' name='leadSource' placeholder='lead-soruce' />
                      </div>
                    </div>
                  </div>


                  <div className="row" style={{ marginBottom: "1rem" }}>
                    <div className="col">
                      <Accordion expanded={expanded === 'panel1'} onChange={handleChangeAccordion('panel1')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <h4>
                            Create Opportunity
                          </h4>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className="row">
                            <div className="col">
                              <label htmlFor="opportunityName">Opportunity Name</label>
                              <div className="crm-modal">
                                <input type="text" id='opportunityName' placeholder='Opprtunity Name' />
                              </div>
                            </div>

                            <div className="col">
                              <label htmlFor="stage">Stage</label>
                              <div className="crm-modal">
                                <select name="" id="">
                                  <option value="">stage 1</option>
                                  <option value="">stage 2</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col">
                              <label htmlFor="description">Description</label>
                              <div className="crm-modal">
                                <textarea name="description" id="" cols="" rows="5" style={{ width: "85%" }} />
                              </div>
                            </div>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <Accordion expanded={expanded === 'panel2'} onChange={handleChangeAccordion('panel2')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <h4>
                            Create Appoinment
                          </h4>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className="row">
                            <div className="col">
                              <label htmlFor="shedule">Shedule Call or Meeting</label>
                              <div className="toggle-btn">
                                <ToggleButtonGroup
                                  color="success"
                                  value={alignment}
                                  exclusive
                                  onChange={handleAppoinment}
                                >
                                  <ToggleButton className="toggleBtn" value="call">Shedule Call</ToggleButton>
                                  <ToggleButton className="toggleBtn" value="meeting">Meeting</ToggleButton>
                                </ToggleButtonGroup>
                              </div>
                            </div>
                          </div>


                          <div className="row" style={{marginTop: "1rem"}}>
                            <div className="col">
                              <label htmlFor="subject">Subject</label>
                              <div className="crm-modal">
                                <input type="text" name="subject" placeholder='Subject..' />
                              </div>
                            </div>

                            <div className="col">
                              <label htmlFor="subject">Data and Time</label>
                              <div className="crm-modal">
                             
                              </div>
                            </div>
                          </div>

                          
                          <div className="row">
                            <div className="col">
                              <label htmlFor="description">Description</label>
                              <div className="crm-modal">
                                <textarea name="description" id="" cols="" rows="5" style={{ width: "85%" }} />
                              </div>
                            </div>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  </div>

                </div>


                <input type="submit" style={{ marginTop: '10px' }} value="submit" />

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
                        <tr onClick={() => setState({ isPaneOpen: true, id: value.id })}>
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
    </>

  );
}

export default CRM
