import React, { useState, useEffect } from 'react'
import {db} from '../../Server-side/Firebase-config';
import { collection, onSnapshot, query } from "firebase/firestore";
import ButtonFullGd from "../Buttons/ButtonFullGd";

function ArtWork() {

    const [Stories, setStories] = useState([]);
    useEffect(() => {
        const storiesRef = collection(db, "Stories");
        const q = query(storiesRef);
        onSnapshot(q, (snapshot) => {
        const Stories = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setStories(Stories);
        console.log(Stories);
        });
    }, []);


  return (
      <div className='flxx'>
      {Stories.length === 0 ? (
        <p>No Books Yet</p>
      ) : (
        Stories.map(
          ({
            id,
            title,
            shortDesc,
            imageUrl,
            author,
            price
          }) => (
              <>
    <div className="artwork">
      <div className="artwork__image">
        <img
        className="artwork__image--img"
        src={imageUrl}
        alt=""
        />
      </div>
      <div className="artwork__info">
        <div className="artwork__info--Right">
        <div className="artwork__info__title">
          <h1>{title}</h1>
          <div className="user">
          <img className="profile" src="https://lh3.googleusercontent.com/9x2O68s_Qz2r2B3JPtYnobBeVXKWaqUVk4DJTsq4em727vmENXu-mBVBJ4KxLkIlxtQLZ7EF1KZ82fnTk0-D9vc98RJrWyku-NjFPw=w600"/>
          <h3 className="Username">by {author}</h3>
          </div></div>
        <div className="artwork__info__price">
            <h4>Price</h4>
            <div className="pricevalue">
            <h2>{price} ETH</h2>
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
    </>)))}
    </div>
  );
}

export default ArtWork;