import React from "react";
import "./underDiv.css";
import { AiFillStar } from "react-icons/ai";

const CardAside = (item) => {
  return (
    <div className="containerCardAside">
      <div className="image">
        <img src={item.image} />
      </div>
      <div className="info">
        <h5>{item.title}</h5>
        <div>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="pb">
          <span>{item.price}</span>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default CardAside;
