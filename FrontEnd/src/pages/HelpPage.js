import React from 'react'
import Help from "../components/Help/Help"
import { useNavigate } from 'react-router-dom';

import { useGetAllProductsQuery } from '../features/productsApi'
import courseImg from '../assets/images/courses/course1.png'
import "../pages/HelpPage.css"
import { useDispatch } from 'react-redux'
import { addToCart } from 'features/cartSlice'
const HelpPage = () => {
  const { data, error, isLoading }  = useGetAllProductsQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    navigate("/cart");
  }
  return (
  // <>
  //   <Help />

  // </>

  <div className='home-container'>
    {isLoading ? (
      <p>Loading ...</p>
    )     : (
      <>
      <h2>New Arrivals</h2>
      <div className='products'>
         {data?.map(product => (
          <div key={product.courseId} className='product'>
            <h3>{product.name}</h3>
            <img src={courseImg} alt={product.name} />
            
              <p>{product.desciption}</p>
              <h5 className='price'>${product.price}</h5>
        
            <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
          </div>
         ))}

      </div>
      </>
    )}
  
  </div>
  )
}

export default HelpPage