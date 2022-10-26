// Header.js
import './navbar.css';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className='header'>
            <h1>Navbar</h1>
            <div className="nav-elements">
                <Avatar style={{ height: "2.5rem", width: "2.5rem", cursor: "pointer" }} alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYuvgvNeu6VAc6ty8enCDKDdZyl65N2AHOJiELPn1mdOzu-Xe_4Za1QJuGPYN8-nzZg0&usqp=CAU" />
                <Link to='profile'>
                    <div className="pro-name">
                        <p>Carl</p>
                        <p>admin</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Navbar