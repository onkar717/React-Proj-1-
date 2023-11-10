import React from "react";
import { restaurantslist } from "./config";
import { useState, useEffect } from "react";
import { RestaurantCart } from "./Resturant";
import { Shimmer } from "./Shimmer";
import { ReactDOM } from "react-dom";
import RestaurantMenu from "./Resuturantmenu";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";


function filterData(SearchText, restaurants) {
  const filterData = restaurants.filter((resutarant) =>
    resutarant?.info?.name?.toLowerCase()?.includes(SearchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [Allresturant , setAllresturant] = useState([])
  const [filteredresutarants, setfilteredResturants] = useState([]);
  const [SearchText, setSearchInput] = useState("");


  useEffect(() => {
    getresturants();
  }, []);

  async function getresturants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING7");
    const json = await data.json();

  async function checkjsonData(jsonData) {
    for(let i = 0; i < jsonData?.data?.cards.length; i++){
      let checkdata = json?.data.cards[i].card?.card?.gridElements?.infoWithStyle?.restaurants;
      console.log(checkdata);
      if (checkdata !== undefined) {
        return checkdata;
      }
    }
  }


    const resData = await checkjsonData(json);
    // console.log(resData, "resData");
    // console.log(resData);
    setAllresturant(resData);
    setfilteredResturants(resData);

  }

  const isonline = useOnline()
  if(!isonline){
    return <h1>Please Check Your Internet Connection</h1>
  }


  if (!Allresturant) return null;

  // if (filteredresutarants?.length == 0)
  //   return(<h1>No Resturant found</h1>)

  if(Allresturant?.length === 0) return <Shimmer />

  return (
      <>  
      <div className="Search-containr">
        <input
          type="text"
          placeholder="Seacrh"
          value={SearchText}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
        <button
          className=""
          onClick={() => {
            const data = filterData(SearchText, filteredresutarants);

            setfilteredResturants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restura-list">
        {filteredresutarants.map((resutarant) => {
          return (
            <Link to={"/resutarant/" + resutarant.info.id} key={resutarant.info.id}>
              <RestaurantCart {...resutarant.info} />
            </Link>
          );
        })}
      </div>
    </>
  )
}

export default Body;
