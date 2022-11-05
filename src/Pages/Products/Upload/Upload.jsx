import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import './upload.css'
import upload from '../../../images/upload.jpg'

function Upload() {

  const [files, setFiles] = useState([])
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [mrp, setMrp] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(files, name, price, mrp, description)
  }


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
      <div>
        <img src={file.preview} style={{ width: "200px" }} alt={file.name} />
      </div>
    </div>
  ))

  return (
    <div className="dashboardcontainer">
      <div className="gird-container">
        <div className="upload-item1">
          <div className="upload-container">


            <div className="upload-image">
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="image-border">
                  <img src={upload} alt="" />
                  <p>Drop Your images here..</p>
                  {files.length !== 0 &&
                    <p>{files.length} Image added</p>}
                </div>
              </div>


              {/* container to display selected images */}
              {files.length !== 0 &&
                <div className='select-images-container'>
                  {images}
                </div>}

            </div>

            <div className="upload-details">
              <form action="">
                <div>
                  <label for="pname">Product Name</label>
                </div>
                <div className="field" style={{ width: "20rem" }}>
                  <input type="text" id="pname" name="productname" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name.." />
                </div>
                <div>
                  <label for="price">Price (&#8377;)</label>
                </div>
                <div className=" field" style={{ width: "20rem" }}>
                  <input type="text" id="price" name="productprice" placeholder="Product Price.." value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                  <label for="mrp">MRP  (&#8377;)</label>
                </div>
                <div className=" field" style={{ width: "20rem" }}>
                  <input type="text" id="mrp" name="mrp" placeholder="Product MRP.." value={mrp} onChange={(e) => setMrp(e.target.value)} />
                </div>
                <div>
                  <label for="description">Description</label>
                </div>
                <div className="field">
                  <textarea id="description" name="subject" placeholder="Write something.." style={{ height: "100px", width: "100%" }} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                  {/* <input type="submit" onClick={handleSubmit} value="Submit" style={{marginTop: '10px'}} /> */}
                </div>
                <div className="row">
                  <input type="submit" onClick={handleSubmit} value="Submit" style={{ marginTop: '10px' }} />
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload