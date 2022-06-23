import React from "react";
import "./Buttons.css";

function ButtonCorner( {children} ) {
  return (
    <div>
      <button className="ButtonCorners" > {children} </button>
    </div>
  );
}

export default ButtonCorner;
