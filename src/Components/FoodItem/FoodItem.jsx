import React, { useState } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/Images/assets'

import { useContext } from 'react'
import { Data } from '../../App'


const FoodItem = ({id,price,image,name,description}) => {


    const {cartItems,addToCart,removeFromCart} = useContext(Data)



  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} loading='lazy' alt={`image${name}`} className='food-item-image'/>
        {
          !cartItems[id] ? 
          <img loading='lazy' src={assets.add_icon_white} alt='add-image' className='add' onClick={()=>addToCart(id)}/>
          :
          <div className='food-item-counter'>
            <img loading='lazy' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt='removeImage'/>
            <p>{cartItems[id]}</p>
            <img loading='lazy' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt='add-image'/>
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt='rating' loading='lazy'/>
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem