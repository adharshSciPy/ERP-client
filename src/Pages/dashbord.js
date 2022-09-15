import './dashboard.css'
import React from 'react';
import CRM from '../Pages/crm/CRM';


function Dashboard() {
  return (
    <div className="dashboardcontainer">
      {/* modal */}
      <div id="demo-modal" className="modal">
        <div className="modal__content">
          <a href="#" className="modal__close">&times;</a>
          <CRM />
          <CRM />
       </div>

      </div>
      {/* modal */}

      {/* side Modal */}

      {/* side Modal */}


      <div className="grid-container">
        <div className="item1">
          <div className="welcome-message"> <b style={{ fontSize: '30px' }}>Hi,User  </b> <br /> Welcome Company dashboard </div>

        </div>
        <div className="item2"> <button> <a href="#demo-modal">Open Demo Modal</a> </button> <button> click here</button> </div>
        <div className="grid-item">3</div>
        <div className="grid-item">4</div>
        <div className="grid-item">5</div>
        <div className="grid-item">6</div>
        <div className="grid-item">7</div>
        <div className="grid-item">8</div>
        <div className="grid-item">9</div>
      </div>
    </div>
  );
}

export default Dashboard
