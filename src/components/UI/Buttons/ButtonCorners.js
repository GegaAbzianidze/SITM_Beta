import React from "react";

function ButtonCorner({ children }) {
  return (
    <div>
      <button className="ButtonCorners"> {children} </button>
    </div>
  );
}

export default ButtonCorner;
