import React from 'react'
import './profile.css'

function Profile() {
  return (
    <div className='dashboardcontainer'>
      <div className="profile-item1">
        <div className="profile-header">
          <h3>Profile</h3>
        </div>


        {/* profile-section */}
        <div className="pro-sec1">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYuvgvNeu6VAc6ty8enCDKDdZyl65N2AHOJiELPn1mdOzu-Xe_4Za1QJuGPYN8-nzZg0&usqp=CAU" alt="Profile-image" />

          <div className="pro-sec1-details">
            <div>
              <p>Edvin Carl</p>
              <p>Administrator</p>
            </div>

            <div className= "pro-sec1-action-btns">
              <button>Message</button>
              <button>Contact </button>
              <button>Report</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile