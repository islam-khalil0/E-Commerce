import React, { useEffect } from "react";
import video from "../../videos/video.mp4";
import CardContent from "./CardContent";
import { useSelector } from "react-redux";
import "./underDiv.css";
import { useFetchData } from "../../Redux/contants/ProductActions";

const Content = () => {
  const dataStore = useSelector((state) => state.allProducts.products);
  useFetchData();
  return (
    <div>
      <div className="videoDiv">
        <video autoPlay muted loop={true} width="350">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      {dataStore ? (
        <div className="products">
          {dataStore.map((item) => (
            <CardContent {...item} />
          ))}
        </div>
      ) : (
        <h1 style={{ padding: "10rem" }}>loading...</h1>
      )}
    </div>
  );
};

export default Content;
