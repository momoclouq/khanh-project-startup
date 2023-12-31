import CardIcon from "../../assets/images/credit-card.svg";
import ProductImage from "../../assets/images/product-image.jpg";
import PaypalCheckoutButton from "./PaypalCheckoutButton";
import { useSelector } from 'react-redux'

import "../Checkout/checkout.css";

const Checkout = () => {


    const cart = {
        description: "Elucidator",
        price:19
    };
  return (
    <div className="checkout">
      <h1>PayPal Checkout</h1>
      <p className="checkout-title">Design+Code React Hooks Course</p>
      <p className="checkout-description">
        Learn how to build a website with React Hooks
      </p>
      <h1 className="checkout-price">$19</h1>
      <img
        className="checkout-product-image"
        src={ProductImage}
        alt="Product"
      />
      <button className="checkout-button">
        <div className="grey-circle">
          <div className="purple-circle">
            <img className="icon" src={CardIcon} alt="credit-card-icon" />
          </div>
        </div>
        <div className="text-container">
          <p className="text">Buy</p>
        </div>
      </button>
      <div className="separator"></div>
      <div className="paypal">
        <p className="checkout-title">OR, PAY WITH PAYPAL</p>
        <div className="paypal-button-container">
        <PaypalCheckoutButton cart={cart} />

        </div>
      </div>
    </div>
  );
};

export default Checkout;
