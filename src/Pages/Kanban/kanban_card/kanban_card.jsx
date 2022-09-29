import './kanban_card.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from '@mui/material/Popover';
import React, { useState } from 'react'


const Card = props => {

  // popover contorlls
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // redux contorlls
  

  return (
    <div className='card'>
      {props.children}
      <div className="card-options"></div>
      <MoreVertIcon sx={{ fontSize: 18, cursor: 'pointer' }} onClick={handleClick} />

      {/* popper with edit and assign buttons */}
      <Popover className='add_todo_container'
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >

        <div className="add_todo">


          <div className="add_todo_body">
            <label>Edit Todo</label>
            <input type="text" placeholder='eg: Learn HTML' />

            <label htmlFor="assignto">Assign To</label>
            <select name="" id="">
              <option value="Sam">Sam</option>
              <option value="Sam">Ram</option>
              <option value="Sam">Lal</option>
              <option value="Sam">Sham</option>
            </select>
            
            <input type="submit" value="Save" />
          </div>


        </div>

      </Popover>
    </div>
  )
}

export default Card