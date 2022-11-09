import React from 'react'
import './list.css'
import Cards from '../../../Components/Cards/Card'
import { productList } from '../../../Dummy datas/datas'
import { Link } from 'react-router-dom'

function List() {
  return (
    <div className="dashboardcontainer">
      <div className='grid-container'>
        <div className="list-item1">
          <div className="list-header">
            <h2>Products</h2>
            <Link to="/products/upload"><button type="submit" className='list-button'>Add Product</button></Link>
          </div>
          <div className='list-container'>
            {productList.map((data, i) => {
              return <div className="list-items">
                <Cards name={productList[i].name}
                  main_image={productList[i].image1}
                  description={productList[i].description}
                  price={productList[i].price}
                  id={productList[i].id} />
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default List