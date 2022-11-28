import React from 'react'
import './addCrm.css'
import { useDropzone } from 'react-dropzone'
import { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AddCrm() {

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

    
  // extra email and phone number
  const [emailEx, setEmailEx] = useState()
  const [phoneEx , setPhoneEx] = useState()

  

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

                <div className="add-emp-details" style={{ paddingBottom: '3rem'}}>
                    <div className="row">

                        <div className="col emp-inputs" style={{ marginBottom: '2rem' }}>
                            <label for="pImage">Customer Image</label>
                            <div className="emp-image-upload" {...getRootProps()}>
                                {files.length === 0 && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCKq1XnPYYDaUIlwlsvmLPZ-9-rdK28RToA&usqp=CAU" style={{ height: '100%', widht: '100%' }} />}
                                {images}
                            </div>
                        </div>
                        <div className="col emp-inputs" style={{ marginBottom: '5rem' }}>
                            <label htmlFor="department">Department</label>
                            <input type="text" name='department' id='department' placeholder='eg: Sales' />
                        </div>
                    </div>

                    <div className="row">

                        <div className="col">

                        </div>
                        <div className="col">
                            <div className="col emp-inputs">
                                <label htmlFor="bussinessRole">Business Role</label>
                                <input type="text" placeholder='Freelance' />
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col">
                        </div>
                    </div>

                    <div className="row">
                        <div className="col emp-inputs">
                            <label htmlFor="phone">First Name</label>
                            <input type="text" name='phone' id='phone' placeholder='eg: John' />
                        </div>
                        <div className="col emp-inputs">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" placeholder='eg: doe' />
                        </div>

                    </div>

                    <div className="row">
                        <div className="col emp-inputs">
                            <label for="employeeName">Phone</label>
                            <input type="text" name='phone' placeholder='81-201-2019' />
                        </div>

                        <div className="col emp-inputs">
                            <label htmlFor="email">Email</label>
                            <input type="text" name='email' id='email' placeholder='john@gmail.com' />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col emp-inputs">
                            <label htmlFor="bussinessRole">Business Role</label>
                            <input type="text" placeholder='Freelance' />
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

                    <h5>Other Address</h5>
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

                    <h5>Description</h5>
                    <div className="row">
                        <div className="col emp-inputs">
                            <textarea rows='3' cols='47' style={{ marginLeft: '3rem' }} />
                        </div>

                        <div className="col emp-inputs">
                            <label htmlFor="pincode">Lead Source</label>
                            <input type="text" placeholder='source' />
                        </div>
                    </div>

                    <Accordion style={{marginLeft: '2.9rem', width: '92%', marginBottom: '2rem' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{marginLeft: '2.9rem', width: '92%', marginBottom: '1rem' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <input type="submit" value="submit" />
                </div>

            </div>
        </div >
    )
}

export default AddCrm