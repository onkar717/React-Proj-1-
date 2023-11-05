import React from "react";
import { restaurantslist } from "./config";
import { useState , useEffect } from "react";
import { RestaurantCart } from "./Resturant";
import { Shimmer } from "./Shimmer";


  // console.log(restaurantslist);

  
  function filterData  ( SearchText , restaurants) {
    const filterData = restaurants.filter((resutarant) => 
    resutarant.info.name.includes(SearchText)
    )
    // console.log(filterData);
    return filterData; 
  }
  
  const Body = () => {
    const [resutarants , setResturants] = useState(restaurantslist)
    console.log(setResturants);
    const [SearchText , setSearchInput] = useState("")
    // console.log(resutarants);
    // const [SearchClicked , setSearchClicked] = useState("False")


    useEffect(() => {
      // console.log("Call When SearchText Changed");
      getresturants()
    } , [])

    

    async function getresturants () {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        // console.log(json);
        // setResturants(json.data.cards[0].card.card)  
    }


  //   (resutarants.length == 0) ? ( <Shimmer />
  //  ) : (

    return  (
      <>
      <div className="Search-containr">
            <input
            type="text" 
            placeholder="Seacrh" 
            value={SearchText}
            onChange={(e) => 
            setSearchInput(e.target.value)}>    
             </input >
             {/* <h1>{SearchText}</h1> */}
             {/* <h1>{SearchClicked}</h1> */}      
            {/* <input name="myInput" /> */}
            <button className="Search-btn" onClick ={() => {
                  // if (SearchClicked === "true") {
                  //       setSearchClicked("false")
                  // }
                  // else {
                  //       setSearchClicked("true")
                  // }

                  const data = filterData(SearchText , resutarants);
                  // console.log(SearchText);
                  // console.log(resutarants);
                  setResturants(data)
                  // console.log(data);
                  // console.log(setResturants(data));
                  // console.log(setresturant);
            }}>Search</button>
      </div>
      <div className="restura-list">
          {/* <RestaurantCart restaurant = {resutarants[1]} />
          <RestaurantCart restaurant = {resutarants[2]} />
          <RestaurantCart restaurant = {resutarants[3]} />  
          <RestaurantCart restaurant = {resutarants[4]} />
          <RestaurantCart restaurant = {resutarants[5]} />
          <RestaurantCart restaurant = {resutarants[6]} />  */}
          {resutarants.map((resutarant)=> {
            return <RestaurantCart {...resutarant.info} key = {resutarant.info.id} />
          }) }
      </div>
      </>
    )
  };

export default Body;