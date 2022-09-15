import React from 'react'
import './single.css'
import {useParams} from 'react-router-dom';
import {productList} from '../../../Dummy datas/datas'


function Single() {

  const {products} = useParams()
  console.log(products)

  const product = productList.find(obj => obj.id == products)
  console.log(product.name)


  return (
    <div className='dashboardcontainer'>
      <div className="product-item1">

      <div className="product-data">
        <div className="product-image">
          <img src={product.main_image} alt="product-images" />

          <div className="image-selector">
            <div className="image-cards">
              <img src={product.main_image} alt="" />
            </div>

            <div className="image-cards">
              <img src={product.main_image}  alt="" />
            </div>

            <div className="image-cards">
              <img src={product.main_image}  alt="" />
            </div>
          </div>
        </div>

        <div className="product-details">
          <p>{product.name}</p>
          <p><span>-81 %</span>&#8377; {product.price}.00</p>
          <p>M.R.P : <span>&#8377; 6000</span></p>
          <p>Inclusive of all taxes</p>
          <p>About this item</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore assumenda suscipit tempora reiciendis, nesciunt sunt, dignissimos autem consectetur nulla dolor impedit inventore error accusantium ipsam possimus, cumque sint! Voluptates facilis molestiae consequuntur dolore doloribus ratione in commodi eligendi quas autem cumque quo distinctio natus, tenetur eaque consequatur ullam error provident, consectetur reprehenderit itaque eum a. Commodi architecto accusantium fuga itaque iste facere neque nihil nesciunt, tenetur asperiores, mollitia odio provident</p>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Single