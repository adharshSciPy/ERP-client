import './vendor.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


function Vendor() {

  // tabs controllers
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="dashboardcontainer">
        <div className="vendorItem1">
          <div className="vendor-header">
            <h2>Vendor</h2>
          </div>

          <div className="add-vendor-details">
            <label>Primary Contact</label>
            <div className="row">
              <div className="col vendor-inputs">
                <select name="salutation" id="salutation" style={{ marginRight: '1rem', width: '7.9rem' }}>
                  <option>Salutation</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Mr.">Mrs.</option>
                  <option value="Mr.">Ms.</option>
                  <option value="Mr.">Miss.</option>
                  <option value="Mr.">Dr.</option>
                </select>
              </div>
              <div className="col">
              </div>
            </div>

            <div className="row">
              <div className="col vendor-inputs">
                <label htmlFor="firstName">First Name</label>
                <input type="text" placeholder='eg:- John' />
              </div>

              <div className="col vendor-inputs">
                <label for="firstName">Last Name</label>
                <input type="text" placeholder='eg:- doe' />
              </div>
            </div>

            <div className="row">
              <div className="col vendor-inputs">
                <label htmlFor="companyName">CompanyName</label>
                <input type="text" placeholder='eg:- company Name' />
              </div>

              <div className="col vendor-inputs">
                <label for="vendorDisplayName">Vendor Display Name</label>
                <input type="text" placeholder='eg:- vendor name' />
              </div>
            </div>

            <div className="row">
              <div className="col vendor-inputs">
                <label htmlFor="vendorEmail">Vendor Email</label>
                <input type="text" placeholder='john@gmail.com' />
              </div>
              <div className="col vendor-inputs">
                <label htmlFor="vendorEmail">Vendor Mobile</label>
                <input type="text" placeholder='81-290-2192' />
              </div>
            </div>

            <div className="row">

              <div className="col vendor-inputs">
                <label htmlFor="phone">Phone</label>
                <input type="text" placeholder='0472-2883283' />
              </div>

              <div className="col vendor-inputs">
                <label htmlFor="website">Website</label>
                <input type="text" placeholder='www.logTech.com' />
              </div>
            </div>
          </div>



          {/* tabs */}
          <Box sx={{ width: '100%' }}>
            <TabContext value={value}  >
              <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{}}>
                  <Tab label="Other Details" value="1" sx={{ marginTop: '-1rem', width: '10rem', fontWeight: '600', fontSize: '12px' }} />
                  <Tab label="Address" value="2" sx={{ marginTop: '-1rem', width: '10rem', fontWeight: '600', fontSize: '12px' }} />
                  <Tab label="Contact Persons" value="3" sx={{ marginTop: '-1rem', width: '10rem', fontWeight: '600', fontSize: '12px' }} />
                  <Tab label="Custom Fields" value="4" sx={{ marginTop: '-1rem', width: '10rem', fontWeight: '600', fontSize: '12px' }} />
                  <Tab label="Reporting Tags" value="5" sx={{ marginTop: '-1rem', width: '10rem', fontWeight: '600', fontSize: '12px' }} />
                  <Tab label="Remarks" value="6" sx={{ marginTop: '-1rem', width: '10rem', fontWeight: '600', fontSize: '12px' }} />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="tab-inputs">
                  <div className="row">
                    <div className="col vendor-inputs">
                      <label htmlFor="gst">GST Treatment</label>
                      <select name="gst" id="gst">
                        <option>GST</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Mr.">Mrs.</option>
                        <option value="Mr.">Ms.</option>
                        <option value="Mr.">Miss.</option>
                        <option value="Mr.">Dr.</option>
                      </select>
                    </div>

                    <div className="col vendor-inputs">
                      <label htmlFor="supply">Source Of Supply</label>
                      <select name="supply" id="supply">
                        <option>GST</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Mr.">Mrs.</option>
                        <option value="Mr.">Ms.</option>
                        <option value="Mr.">Miss.</option>
                        <option value="Mr.">Dr.</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col vendor-inputs">
                      <label htmlFor="currency">Currency</label>
                      <select name="currency" id="currency">
                        <option>GST</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Mr.">Mrs.</option>
                        <option value="Mr.">Ms.</option>
                        <option value="Mr.">Miss.</option>
                        <option value="Mr.">Dr.</option>
                      </select>
                    </div>

                    <div className="col vendor-inputs">
                      <label htmlFor="tds">TDS</label>
                      <select name="tds" id="tds">
                        <option>GST</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Mr.">Mrs.</option>
                        <option value="Mr.">Ms.</option>
                        <option value="Mr.">Miss.</option>
                        <option value="Mr.">Dr.</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">

                    <div className="col vendor-inputs">
                      <label htmlFor="paymentTerms">Payment Terms</label>
                      <select name="paymentTerms" id="paymentTerms">
                        <option>GST</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Mr.">Mrs.</option>
                        <option value="Mr.">Ms.</option>
                        <option value="Mr.">Miss.</option>
                        <option value="Mr.">Dr.</option>
                      </select>
                    </div>


                    <div className="col vendor-inputs">
                      <label htmlFor="priceList">Price List</label>
                      <select name="priceList" id="priceList">
                        <option>GST</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Mr.">Mrs.</option>
                        <option value="Mr.">Ms.</option>
                        <option value="Mr.">Miss.</option>
                        <option value="Mr.">Dr.</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">

                    <div className="col vendor-inputs">
                      <label htmlFor="facebook">Facebook</label>
                      <input type="text" placeholder='www.facebook.com/john232sdfAS323' />
                    </div>

                    <div className="col vendor-inputs">
                      <label htmlFor="twitter">Twitter</label>
                      <input type="text" placeholder='www.twitter.com/john232sdfAS323' />
                    </div>
                  </div>
                </div>

              </TabPanel>
              <TabPanel value="2">
                <div className="tab-inputs">
                  <div className="row">
                    <div className="col">
                      <div class="address-head">Billing Address</div>
                    </div>

                    <div className="col">
                      <div className="address-head">Shipping Address</div>
                    </div>
                  </div>

                  <div className="tab-inputs">
                    <div className="row">
                      <div className="col vendor-inputs">
                        <label htmlFor="attention">Attention</label>
                        <input type="text" />
                      </div>

                      <div className="col vendor-inputs">
                        <label htmlFor="attention">Attention</label>
                        <input type="text" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col vendor-inputs">
                        <label htmlFor="attention">Country</label>
                        <select name="country">
                          <option value="">America</option>
                          <option value="">India</option>
                        </select>
                      </div>

                      <div className="col vendor-inputs">
                        <label htmlFor="attention">Country</label>
                        <select name="country">
                          <option value="">America</option>
                          <option value="">India</option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col vendor-inputs">
                        <label htmlFor="address">Address</label>
                        <textarea cols="23" rows="2" placeholder='Street 1' />
                      </div>

                      <div className="col vendor-inputs">
                        <label htmlFor="address">Address</label>
                        <textarea cols="23" rows="2" placeholder='Street 1' />
                      </div>
                    </div>

                    <div className="row">

                      <div className="col vendor-inputs">
                        <div></div>
                        <textarea cols="23" rows="2" placeholder='Street 1' />
                      </div>


                      <div className="col vendor-inputs">
                        <div></div>
                        <textarea cols="23" rows="2" placeholder='Street 1' />
                      </div>
                    </div>


                    <div className="row">
                      <div className="col vendor-inputs">
                        <label htmlFor="city">City</label>
                        <input type="text" placeholder='' />
                      </div>

                      <div className="col vendor-inputs">
                        <label htmlFor="city">City</label>
                        <input type="text" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col vendor-inputs">
                        <label htmlFor="state">State</label>
                        <input type="text" />
                      </div>

                      <div className="col vendor-inputs">
                        <label htmlFor="state">State</label>
                        <input type="text" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col vendor-inputs">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input type="text" />
                      </div>

                      <div className="col vendor-inputs">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input type="text" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col vendor-inputs">
                        <label htmlFor="fax">Fax</label>
                        <input type="text" />
                      </div>

                      <div className="col vendor-inputs">
                        <label htmlFor="fax">Fax</label>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>

              </TabPanel>
              <TabPanel value="3">

                <div className="tab-inputs">
                  <table>
                    <thead>
                      <tr>
                        <th>Salutation</th>
                        <th>Frist Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                        <th>Work Phone</th>
                        <th>Mobile</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <select style={{width: '100%'}}>
                            <option value="Mr.">Mr.</option>
                            <option value="Mr.">Mrs.</option>
                            <option value="Mr.">Ms.</option>
                            <option value="Mr.">Miss.</option>
                            <option value="Mr.">Dr.</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabPanel>
              <TabPanel value="4">Item One</TabPanel>
              <TabPanel value="5">Item Two</TabPanel>
              <TabPanel value="6">Item Three</TabPanel>
            </TabContext>
          </Box>
        </div>
        <input type="submit" value="Save" />
      </div>
    </>
  )
}

export default Vendor