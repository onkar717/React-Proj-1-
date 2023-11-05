import React, { useState } from "react";



const Title = () => (
  <h1 id="title" key="h1">
    Food Vila
  </h1>
);



export const Header = () => {
  const [Newtitle , setNewTitle] = useState("Food Willa")

  return (
    <div className="header">
      <Title />

      <h1>{Newtitle}</h1>
      <button onClick={() => setNewTitle("New Food Villa")}>Change Btn</button>
      <div className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </div>
    </div>
  );
};

export default Header;
