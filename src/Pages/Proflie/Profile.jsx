import React from 'react'
import './profile.css'

function Profile() {
  return (
    <div className='dashboardcontainer'>
      <div className="profileItem1">
        <div className="profile-header">
          <h2>Profile</h2>
        </div>

        <div className="profile-details">
          <div className="profile-sec1">
            <div className="profile-sec1-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8HpDrYnaODtnghczDBs0f4Nalq_chptAbA&usqp=CAU" alt="" />
              <p>Virat Kohli</p>
              <p>Admin</p>
            </div>

            <div className="profile-sec1-details">
              <div className="profile-row">
                <div className="col">Employee ID </div>
                <div className="col">vh061</div>
              </div>
              <div className="profile-row">
                <div className="col">Phone  </div>
                <div className="col">81-390-2391</div>
              </div>
              <div className="profile-row">
                <div className="col">Email</div>
                <div className="col">virat@gmail.com</div>
              </div>
              <div className="profile-row">
                <div className="col">DOB</div>
                <div className="col">01/07/2000</div>
              </div>
              <div className="profile-row">
                <div className="col">Department  </div>
                <div className="col">Sales</div>
              </div>
              <div className="profile-row">
                <div className="col">Designation  </div>
                <div className="col">Adminstrator</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile