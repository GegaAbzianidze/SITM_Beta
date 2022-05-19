import React from "react";
import ButtonFullGd from "../Buttons/ButtonFullGd";

function TpBid() {
  return (

    <div className="artwork--TP">
    <img className="artpiece" src="https://lh3.googleusercontent.com/oUb5CAQJTzJ6zq2jiFQ7-jSBVU3yQj4q2Vhev_5k68HLrMGw7TU6tdS3PgCGv6uBVuGlWU4dcNejwplYclNGqpiZiE41CW2iqwWEPQ=s0" alt="TKT"/>
      <div className="artwork__info--TP">
        <div className="artwork__info--Right">
        <div className="artwork__info__title">
          <h1>Bad stock Bro#49</h1>
          <div className="user">
          <img className="profile" alt="Profile" src="https://lh3.googleusercontent.com/9x2O68s_Qz2r2B3JPtYnobBeVXKWaqUVk4DJTsq4em727vmENXu-mBVBJ4KxLkIlxtQLZ7EF1KZ82fnTk0-D9vc98RJrWyku-NjFPw=w600"/>
          <h3 className="Username">@Programmers-Love</h3>
          </div></div>
        <div className="artwork__info__price">
            <h4>Reserve Price</h4>
            <div className="pricevalue">
            <h2>1.02 ETH</h2>
            <h3 className="USD">($3176.45)</h3>
            </div>
        </div>
        </div>
        <div className="artwork__info--Left">
        <div className="artwork__info__end">
            <h4>Auction Ends in</h4>
            <div className="clock">
            <h2>22</h2>
            <h2>15</h2>
            <h2>33</h2>
            </div>
            <div className="clockword">
            <h2>Hours</h2>
            <h2>Minutes</h2>
            <h2>Seconds</h2>
            </div>
        </div>
        <div className="artwork__info__Buynow">
            <ButtonFullGd>Place Bid</ButtonFullGd>
        </div>
        </div>
      </div>
    </div>
  );
}

export default TpBid;
