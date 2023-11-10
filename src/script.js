import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Fotter from "./components/Fotter";
import {createBrowserRouter , RouterProvider , Outlet} from "react-router-dom"
import About from "./components/about";
import Error from "./components/error";
import Contact from "./components/contact";
import RestaurantMenu from "./components/Resuturantmenu";
import Profile from "./components/profile";
// import Router from "router-dom";

//clinet site routing ------ server site routing 

const AppLayot = () => {
  return (
    <React.Fragment>
      <Header />
      {/* <Body />   */}
      <Outlet/>
      <Fotter /> 
    </React.Fragment>
  );
};

const approuter = createBrowserRouter([
  { 
    path:"/",
    element:< AppLayot />,
    errorElement:< Error />,    
    children:[
      {
        path:"/about",
        element:<About />,
        children:[{
          path:"profile",
          element:<Profile />
        }]
      },
      {
        path:"/",
        element:< Body />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/resutarant/:id",
        element: <RestaurantMenu />
      }
    ]
  },
  // {
  //   path:"/about", 
  //   element:<About />
  // },
  // {
  //   path:"/contact",
  //   element: < Contact />
  // }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={approuter} />);
// root.render(<AppLayot />)

