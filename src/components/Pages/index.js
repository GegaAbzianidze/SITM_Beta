import React from "react";
import ButtonCorners from "../UI/Buttons/ButtonCorners";
import BuyTicket from "../UI/Buttons/BuyTicket";
import Count from "../UI/Cards/Count";
import TpBid from "../UI/Cards/TpBid";

const Home = () => {
  return (
    <>
      <div className="HomeDiv">
        <div className="HomeLeft">
          <h1 className="TitleHome">
            Worlds first <span>NFT</span>
            <br />
            E-book store
          </h1>
          <h3>
            {" "}
            Create a beauitful NFT product. Explore the best collection from
            popular artists. Get <br />
            with easisest and finest platform in trading cryptocurrency.
          </h3>
          <div className="HomeLeftBTN">
            <ButtonCorners>BookShelf</ButtonCorners>
            <div style={{ padding: "5px 30px" }}>
              <BuyTicket />
            </div>
          </div>
          <div style={{ marginTop: "30px" }}>
            <Count />
          </div>
        </div>
        <div className="SpaceBeetwin"></div>
        <div className="HomeBid">
          <TpBid />
        </div>
      </div>
      <hr className="HomeSection1" />
      <div>
        <center>
          <h1>Top sellers</h1>
        </center>
      </div>
    </>
  );
};
export default Home;
