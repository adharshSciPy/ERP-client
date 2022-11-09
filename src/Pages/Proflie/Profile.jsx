import React from 'react'
import './profile.css'
import { useState } from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

function Profile() {

  const [about, setAbout] = useState(true)


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

            <div className="pro-sec1-action-btns">
              <button>Message</button>
              <button>Contact </button>
              <button>Report</button>
            </div>

            <div className="pro-sec1-action-btns2">
              <button onClick={() => { setAbout(false) }} className={about ? '' : 'pro-sec-active'}>Timeline</button>
              <button onClick={() => { setAbout(true) }}  className={about ? 'pro-sec-active' : ''}>About</button>
            </div>
          </div>
        </div>


        {/* profile section 2 */}
        <div className="pro-sec2">
          <div className="pro-sec2-left">
            {/* left */}
            <div className="pro-light-heading">
              <p>Work</p>
            </div>

            <div className="pro-sec2-work">
              <p>Spotify New York</p>

              <p>170 William Street
                New York NY 10390 87392</p>
            </div>

            <div className="pro-sec2-work">
              <p>Metro Poletian Museum</p>

              <p>170 David Street
                New York NY 10390 87392</p>
            </div>

            <div className="pro-light-heading">
              <p>Skills</p>
            </div>


            <div className="pro-sec2-skills">
              <p>Branding</p>
              <p>UI-UX deisngin</p>
              <p>Packagin</p>
              <p>Print and Editorial</p>
            </div>
          </div>

          {
            about ? (
              <div div className="pro-sec2-right">
                {/* right */}
                <div className="about">
                  <div className="pro-light-heading">
                    <p>Contact Information</p>
                  </div>

                  <div className="pro-sec2-contact-info">
                    <div className="pro-sec2-labels">
                      <p>Phone</p>
                      <p>+91 8192 92100</p>
                    </div>
                    <div className="pro-sec2-labels">
                      <p>Address</p>
                      <p>Vanros ksill NewYork</p>
                    </div>
                    <div className="pro-sec2-labels">
                      <p>Email</p>
                      <p>edvincarl@gmail.com</p>
                    </div>
                    <div className="pro-sec2-labels">
                      <p>Site</p>
                      <p>www.edvincarl.com</p>
                    </div>
                  </div>

                  <div className="pro-light-heading">
                    <p>Basic Information</p>
                  </div>
                </div>
              </div>
            ) :
              <div className="timeline">
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
          }
        </div>
      </div>
    </div >
  )
}

export default Profile