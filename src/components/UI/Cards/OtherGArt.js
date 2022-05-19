import React from "react";
import ButtonFullGd from "../Buttons/ButtonFullGd";

function OtherGArt() {
  return (
    <div className="artwork">
      <div className="artwork__image">
        <img
        className="artwork__image--img--Art"
          src="https://lh3.googleusercontent.com/CyxSGcFcInFQ93-xDh_L4JAk_18bnoLiS3W2zg4A24SnKMZjs_FCjW3c8Sgmbr-mXP_p3CHhSf9I_j5VDfgBrec_ijGPOUYuHAKU=h600"
          alt=""
        />
      </div>
      <div className="artist__info">
        <center><img className="artist__info--img--Art--profile" src="https://lh3.googleusercontent.com/cGo9cKHojNxfnQFdlk4aTTBqkRAqwek7cOUKj1OU3ySjHQk1dVH8NMoZ90ULJ3uEdzDLXumz8BUNH0ZnGIBrWqhTRNP_XyWYek8Qgw=s0" alt="" /></center>
        <h2 className="artist__info--name">
          <span className="artist__info--name--span">
            <a  className="Name" href="https://twitter.com/TeodoraTechie">
              Programmer LoveS
            </a>
          </span>
        </h2>
        <p className="artist__info--text">
          @programmer-loves
        </p>
       <center> <div className="flrPrice">
        <div className="numbers">
          <h3>0.015</h3>
          <h3>Floor Price</h3>
        </div>
        <div className="NNames">
          <h3>2.7</h3>
          <h3>Volume Traded</h3>
        </div></div></center>
        <div className="Fbutton"><ButtonFullGd >Follow</ButtonFullGd></div>
        <div className="spaceF"></div>
      </div>
    </div>
  );
}

export default OtherGArt;
