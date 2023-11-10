import React, { useEffect, useState  } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "./config";
import useResturant from "../../utils/useResturant";

const RestaurantMenu = () => {
  // const [resut, setresut] = useState({});
  // use to read the dynamic id of url
  // const params = useParams()
  // const {id} = params;
  // console.log(params);
  const { id } = useParams();
  console.log(id);

  const resut = useResturant(id)
 
  return (    
    <div>
      <h1>RestaurantMenu : id {id}</h1>
      <h1>Namasate react </h1>
      <img src={IMG_URL + resut.cloudinaryImageId}></img>
      <h1>{resut.name}</h1>
      <h3>{resut.avgRating} stars</h3>
      <h3>{resut.city}</h3>
      <h3>{resut.area}</h3>
      <div>
        {/* {console.log(Object.values())} */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
