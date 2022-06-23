import React from "react";
import "./Buttons.css";

function ButtonTxt( {children} ) {
  return (
    <div>
      <button className="ButtonTxt" > {children} </button>
    </div>
  );
}

export default ButtonTxt;
