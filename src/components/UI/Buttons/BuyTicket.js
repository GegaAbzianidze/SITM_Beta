import React from "react";
import { useNavigate } from "react-router-dom";

function BuyTicket() {
  let navigate = useNavigate();

  function redirectHome() {
    navigate("/tkt");
  }

  const TKTRdrct = () => {
    redirectHome();
  };

  return (
    <div>
      <button className="ButtonTxt" onClick={TKTRdrct}>
        {" "}
        Buy Ticket{" "}
      </button>
    </div>
  );
}

export default BuyTicket;
