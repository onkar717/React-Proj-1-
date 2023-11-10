import React, { useState } from "react";
// import { Shimmer } from "react-shimmer";
import Logo from "../assets/img/food.png"
import { Link } from "react-router-dom";



const Title = () => (
  // <h1 id="title" key="h1">
  //   Food Vila
  // </h1>
  <a href="/">
    <img className="logo" alt="logo" src={Logo}></img>
  </a>
);



export const Header = () => {
  // const [Newtitle , setNewTitle] = useState("Food Willa")
  const [logged , setlogged ] = useState(false)

  return (
    <div className="header">
      <Title />
{/* 
      <h1>{Newtitle}</h1>
      <button onClick={() => setNewTitle("New Food Villa")}>Change Btn</button> */}
      {/* <h1>{logged}</h1> */}
      <div className="nav-items">
        <Link to="/">
         <li>Home</li>
        </Link>
        <Link to="/about">
        <li>About Us</li>
        </Link>
        <Link to="/contact">
        <li>Contact Us</li>
        </Link> 
        <Link>
        <li>Cart</li>
        </Link>
      </div>
      {/* <button onClick={() => setlogged("logged")}>{logged}</button>
      <button onClick={() => setlogged("logged")}>{logged}</button> */}
      {logged ?
      <button onClick={ () => {setlogged(false)}}>Logout</button> 
      : 
      <button onClick={ () => {setlogged(true)}}>Login</button>} 
    </div>
  );
};

export default Header;
