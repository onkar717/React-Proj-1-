import React from "react";

export const Shimmer = () => {
  return (
    // <h1>Loading a Shimmer ui....................</h1>
    <div className="restura-list">
        {Array(20).fill("").map((e , index) => <div key={index} className="shimmer"></div>)}
    </div>
  );
};
