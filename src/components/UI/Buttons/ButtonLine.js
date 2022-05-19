import React from "react";
function ButtonLine({ children }) {
  return (
    <div>
      <button class="btn" data={children}></button>
    </div>
  );
}

export default ButtonLine;
