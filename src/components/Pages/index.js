import React from "react";
import "../UI/Cards/ArtWork.css";
import "./Pages.css";
import ButtonCorners from "../UI/Buttons/ButtonCorners";
import ButtonTxt from "../UI/Buttons/ButtonTxt";
import Count from "../UI/Cards/Count";
import Vydd from "../logos/log-in-2.svg";

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
            <ButtonCorners>Explore</ButtonCorners>
            <div style={{ padding: "5px 30px" }}>
              <ButtonTxt>Other</ButtonTxt>
            </div>
          </div>
          <div style={{ marginTop: "30px" }}>
            <Count />
          </div>
        </div>
        <div className="SpaceBeetwin"></div>
        <div className="HomeBid">
          <video autoPlay loop muted>
            <source src={Vydd} type="video/mov" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
      <hr className="HomeSection1" />
    </>
  );
};
export default Home;
