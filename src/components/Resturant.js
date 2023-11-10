import React from "react"
import { IMG_URL } from "./config"

export  const RestaurantCart = ({name , cuisines  ,cloudinaryImageId , totalRatingsString}) => {
    // console.log(props) 
    return (
          <div className="cart">
          <img className="image" src= { IMG_URL + cloudinaryImageId}></img>        
          <h4>{name}</h4>
          <h5>{cuisines}</h5>
          <p>{totalRatingsString}</p>
    </div>
       )    
  } 