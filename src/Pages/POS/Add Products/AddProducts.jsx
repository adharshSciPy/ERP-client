import React from 'react'
import './addproduct.css'

function AddProducts() {
    return (
        <div className='pos-add-product-container'>
            <div className="pos-add-product-sec1">
                <div className="row">
                    <div className="col">
                        <label>Name</label>
                        <input type="text" placeholder='product- title' />
                    </div>

                    <div className="col">
                        <label>Price</label>
                        <input type="text" placeholder='product-price' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProducts