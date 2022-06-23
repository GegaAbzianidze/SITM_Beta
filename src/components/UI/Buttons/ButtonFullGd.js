import React from "react";
import "./Buttons.css";

function ButtonFullGd( {children} ) {
  return (
    <div>
      <button className="ButtonFullGradient" > {children} </button>
    </div>
  );
}

export default ButtonFullGd;
