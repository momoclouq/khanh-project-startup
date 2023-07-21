import React from "react"
import { price } from "../../dummydata"

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className='items shadow'>
            {val.discount?
            <h2 className="wrapper">
            <span className="discount">
                {val.discount} Discount
            </span>
            </h2>
            :
            <h2>
                <span className="no-discount">
                ""
                </span>
            </h2>
            }
            
          <h1>
            <span>$</span>
            {val.price}
          </h1>

          <h3>
            {val.hour > 1 ?
            <span>
               {val.hour} Hours
            </span>
            :
            <span>
                {val.hour} Hour
            </span>
            }
          </h3>
          <p>{val.desc}</p>
          <button className='outline-btn'> Buy now</button>
        </div>
      ))}
    </>
  )
}

export default PriceCard