import React from "react";
import "./Buttons.css";

function ButtonDotGd({ children }) {
  return (
    <div>
      <button class="ButtonDotGd" data={children}></button>
    </div>
  );
}

export default ButtonDotGd;
