import React from "react";
import { useEffect , useState } from "react";
import RestaurantMenu from "../src/components/Resuturantmenu";


const useResturant = (id) => {
    const [resut, setresut] = useState({});

    useEffect(() => {
        getresut();
      }, []);
    
      async function getresut() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=" + id)
        const json = await data.json();
        const onkar = json?.data?.cards[0]?.card?.card?.info
        // console.log(onkar);
        setresut(onkar)
      }
      return resut;
}

export default useResturant ;