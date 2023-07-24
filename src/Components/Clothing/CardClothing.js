import React from "react";
import "./Clothing.css";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const CardClothing = (item) => {
  return (
    <div className="sideClothingSwiper">
      <div className="card">
        <div className="image">
          <img src={item.image} />
        </div>
        <div className="disc">
          <p className="proName">{item.title}</p>
          <p className="description">{item.description}</p>
          <div className="Stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className="divBP">
            <p className="price">{item.price}</p>
            <Link to={`/product/${item.id}`}>
              <button>Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardClothing;
