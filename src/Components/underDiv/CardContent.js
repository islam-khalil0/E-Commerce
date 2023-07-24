import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./underDiv.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import image from "../../images/T-Shirt.jpg";
import { Link } from "react-router-dom";
import { useFetchData } from "../../Redux/contants/ProductActions";

const CardContent = (item) => {
  useFetchData();

  return (
    <div className="cardContainer">
      <div className="imageCard">
        <img src={item.image} />
        <AiOutlineHeart className="icon" />
      </div>
      <div className="infoCard">
        <div className="topInfo">
          <p className="title">{`${item.title.substring(0, 25)}...`}</p>
          <p className="price"> {item.price} </p>
        </div>

        <div className="lowestInfo">
          <p
            style={{
              padding: "1rem 0 .4rem 0 ",
              fontWeight: "bold",
              fontSize: "12px",
              border: "rgba(146, 146, 146, 0.538) solid 1px",
              borderColor:
                "transparent transparent rgba(146, 146, 146, 0.538) transparent",
              width: "max-content",
            }}
          >
            Description
          </p>
          <p className="desc"> {`${item.description.substring(0, 35)}...`}</p>
          <span className="starts">
            <p style={{ margin: "0 5px 0 0" }}>{item.rating.rate}</p>
            <BsFillStarFill />
          </span>
          <Link to={`/product/${item.id}`}>
            <button class="cta">
              <span class="hover-underline-animation"> Shop now </span>
              <FaLongArrowAltRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
