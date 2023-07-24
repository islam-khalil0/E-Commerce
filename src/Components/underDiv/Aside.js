import React from "react";
import data from "./DataClothingUnderDiv";
import "./underDiv.css";
import CardAside from "./CardAside";

const Aside = () => {
  return (
    <div className="AsideContainer">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: "transparent transparent  rgb(98, 98, 98) transparent",
          borderStyle: "solid",
          borderWidth: "2px",
        }}
      >
        <h4 style={{ fontWeight: "bold" , padding:'0 0 1rem 0'}}>NEW OFFERS</h4>
      </div>

      {data.map((item) => (
        <CardAside {...item} />
      ))}
    </div>
  );
};

export default Aside;
