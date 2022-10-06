// Header.js
import './navbar.css';
import React from 'react';
import Avatar from '@mui/material/Avatar';


function Navbar() {
    return (
        <div className='header'>

            <h1>Navbar</h1>

            <div className="nav-elements">
                <Avatar style={{ height: "2.5rem", width: "2.5rem", cursor: "pointer"}} alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8HpDrYnaODtnghczDBs0f4Nalq_chptAbA&usqp=CAU"   />
                <div className="pro-name"  >
                    <p>Virat</p>
                    <p>admin</p>
                </div>
            </div>
        </div>
    )
}
export default Navbar