import React from 'react'
import "../Cart/cart.css"

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import SubImg from "../../assets/images/courses/course2.svg"


const CartContent = () => {
    const cart = useSelector((state) => state.cart);
  return <>
    <div className='cart-container'>
        <h2>Shopping Cart</h2>
        { cart.cartItem.length === 0 ? (
            <div className='cart-empty'>
                <p>Your cart is currently empty</p>
                <div className='start-shopping'>
                    <Link to="/help">   
                        {   /*arrow-left*/  }                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>

                        <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        ):( 
        <div>
            <div className="titles">
                <h3 className='product-title'>Product</h3>
                <h3 className='price-title'>Price</h3>
                <h3 className='button-title'></h3>
            </div>

            <div className='cart-items'>
                {cart.cartItem?.map(item => (
                    <div className='cart-item' key = {item.courseId}>
                        <div className='cart-item-info'>
                            <img src={SubImg} alt={item.name}/>
                            <div>
                                <h3>{item.name}</h3>
                                <p>{item.desciption}</p>
                                
                            </div>
                        </div>
                        
                        <div className='cart-item-price'>
                            ${item.price}
                        </div>
                        
                        <div className='cart-item-button'>
                            <button>Remove</button>    
                        </div>
                    </div>
                ))}
            </div>
            <div className='cart-summary'>
                <button className='clear-btn'>Clear Cart</button>
                <div className='cart-checkout'>
                    <div className='subtotal'>
                        <span>Subtotal</span>
                        <span className='amount'>${cart.cartTotalAmount}</span>
                    </div>
                    <p>Taxes and shipping calculated at checkout</p>
                    <Link to="/checkout">
                    <button>Check Out</button>
                    </Link>
                    <div className='continue-shopping'>
                        <Link to="/help">   
                            {   /*arrow-left*/  }                        
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>

                            <span>Continue Shopping</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        )}
    </div>
  </>
}

export default CartContent