import React from "react";
import ButtonFullGd from "../Buttons/ButtonFullGd";

function TKTCard() {
  return (
    <div className="flxx">
      <>
        <div className="artwork">
          <div className="artwork__image">
            <img
              className="artwork__image--img"
              src="https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/281992634_1495635210853646_8103163496585649176_n.png?_nc_cat=1&ccb=1-6&_nc_sid=730e14&_nc_eui2=AeGJBz6FgV1gAjvGaq9GV_qs7s-KF9frDenuz4oX1-sN6RZh5ZhNkEREhd3S3bjvV3avRV_4MbeZpGPafdezp9Y7&_nc_ohc=7JRzQNnvQvIAX-qPXgc&_nc_ht=scontent.ftbs5-3.fna&oh=00_AT_3ot_3L-ywujyZAea1wcXzDt4w7G29ekoF6k56oJLcxw&oe=628A842F"
              alt=""
            />
          </div>
          <div className="artwork__info">
            <div className="artwork__info--Right">
              <div className="artwork__info__title">
                <h1>Ticket</h1>
                <div className="user">
                  <img
                    className="profile"
                    src="https://lh3.googleusercontent.com/9x2O68s_Qz2r2B3JPtYnobBeVXKWaqUVk4DJTsq4em727vmENXu-mBVBJ4KxLkIlxtQLZ7EF1KZ82fnTk0-D9vc98RJrWyku-NjFPw=w600"
                  />
                  <h3 className="Username">by GEGA</h3>
                </div>
              </div>
              <div className="artwork__info__price">
                <h4>Price</h4>
                <div className="pricevalue">
                  <h2>1234 ETH</h2>
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
      </>
    </div>
  );
}

export default TKTCard;
