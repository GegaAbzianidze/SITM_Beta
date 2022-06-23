import React from "react";
import "./Buttons.css";

function ButtonLine({ children }) {
  return (
    <div>
      <button class="btn" data={children}></button>
    </div>
  );
}

export default ButtonLine;
