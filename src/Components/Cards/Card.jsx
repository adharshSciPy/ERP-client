import React from 'react'
import './card.css'
import {Link} from 'react-router-dom'

function Card(props) {
  return (
    <div className='cards'>
        <div className="card-img">
          <img src={props.main_image} alt="" />
        </div>

        <div className="card-details">
            <p>{props.name}</p>
            <p> &#8377; {props.price}</p>
            <div className="card-btn">
            <Link to={`/products/${props.id}`}>View More</Link>
            <button>Add</button>
            </div>
        </div>
    </div>
  )
}

export default Card