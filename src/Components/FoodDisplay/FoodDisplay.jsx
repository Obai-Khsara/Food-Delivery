import React, { useContext , useEffect, useState } from 'react'
import "./FoodDisplay.css"
import { food_list } from '../../assets/Images/assets'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {
                food_list.map((item,index)=>{
                    if(category==="All" || category===item.category){
                        return(
                            <FoodItem key={index} id={item._id} price={item.price} image={item.image} description={item.description}
                            name={item.name}/>
                        )
                    }
                })
            }
        </div>
    </div>
  )
}

export default FoodDisplay