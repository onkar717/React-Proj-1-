import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Fotter from "./components/Fotter";

const AppLayot = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Fotter />
    </React.Fragment>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayot />);

