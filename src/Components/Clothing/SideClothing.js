import React from "react";
import "./Clothing.css";
import shirtImage from '../../images/T-Shirt.jpg'
import { AiFillStar } from 'react-icons/ai';

const SideClothing = () => {
  return (
    <div className="sideClothing">
      <div className="card">
        <div className="title">
          <h3>HOT DEALS</h3>
          <p>more</p>
        </div>
        <div className="image">
            <img src={shirtImage}/>
        </div>
        <div className="disc">
          <p className="proName">Men T-Shirt</p>
          <div className="Stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p className="price">$150</p>
        </div>
      </div>
    </div>
  );
};

export default SideClothing;
